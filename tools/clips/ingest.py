"""Prepare the video files for the app. Run it again whenever clips are added or replaced:

    python3 tools/clips/ingest.py

For every clip assets/video/<id>.mp4 (ids are musician-1 .. character-5) this
  - reads its length and shape (2:1 clips are treated as 360-degree video, anything else as a flat picture),
  - saves a poster, assets/video/<id>.jpg,
and for every category it builds one preview video, assets/video/<category>.mp4: the five clips in a
3 x 2 grid, which is what the five screens on the stage play. It then writes assets/video/clips.json.
"""
import json, os, subprocess, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'assets', 'video')
CATS = ['musician', 'athlete', 'character']
SCREEN_RANKS = [5, 3, 1, 2, 4]        # which rank each screen shows, left to right (#1 is the middle screen)
TW, TH, LOOP, FPS = 640, 360, 6, 24


def run(args):
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit('failed: ' + ' '.join(args[:6]) + ' ...\n' + r.stderr[-800:])
    return r.stdout


def probe(path):
    d = json.loads(run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:format=duration', '-of', 'json', path]))
    s = d['streams'][0]
    return {'w': int(s['width']), 'h': int(s['height']), 'dur': round(float(d['format']['duration']), 2)}


def tile_filter(info):
    if info['projection'] == 'equirect':
        return f'v360=input=e:output=flat:h_fov=100:v_fov=64:pitch=4:w={TW}:h={TH},fps={FPS},setsar=1'
    return f'scale={TW}:{TH}:force_original_aspect_ratio=increase,crop={TW}:{TH},fps={FPS},setsar=1'


standins = {}
sp = os.path.join(ROOT, 'standins.json')
if os.path.exists(sp):
    standins = json.load(open(sp))

clips = {}
for cat in CATS:
    for rank in range(1, 6):
        cid = f'{cat}-{rank}'
        path = os.path.join(ROOT, cid + '.mp4')
        if not os.path.exists(path):
            continue
        info = probe(path)
        info['projection'] = 'equirect' if abs(info['w'] / info['h'] - 2.0) < 0.08 else 'flat'
        info['standin'] = standins.get(cid) == os.path.getsize(path)
        clips[cid] = info
        run(['ffmpeg', '-y', '-loglevel', 'error', '-ss', str(min(2.0, info['dur'] / 2)), '-i', path, '-vf', tile_filter(info),
             '-frames:v', '1', '-q:v', '3', os.path.join(ROOT, cid + '.jpg')])

for cat in CATS:
    args = ['ffmpeg', '-y', '-loglevel', 'error']
    parts, labels = [], []
    n = 0
    for k, rank in enumerate(SCREEN_RANKS):
        cid = f'{cat}-{rank}'
        if cid in clips:
            args += ['-stream_loop', '-1', '-t', str(LOOP), '-i', os.path.join(ROOT, cid + '.mp4')]
            parts.append(f'[{n}:v]{tile_filter(clips[cid])}[t{k}]')
            n += 1
        else:
            parts.append(f'color=c=black:s={TW}x{TH}:r={FPS}:d={LOOP}[t{k}]')
        labels.append(f'[t{k}]')
    parts.append(f'color=c=black:s={TW}x{TH}:r={FPS}:d={LOOP}[t5]')
    labels.append('[t5]')
    layout = f'0_0|{TW}_0|{2 * TW}_0|0_{TH}|{TW}_{TH}|{2 * TW}_{TH}'
    parts.append(''.join(labels) + f'xstack=inputs=6:layout={layout}[v]')
    out = os.path.join(ROOT, cat + '.mp4')
    run(args + ['-filter_complex', ';'.join(parts), '-map', '[v]', '-t', str(LOOP), '-r', str(FPS), '-c:v', 'libx264', '-preset', 'medium',
                '-crf', '24', '-g', str(FPS), '-pix_fmt', 'yuv420p', '-an', '-movflags', '+faststart', out])
    run(['ffmpeg', '-y', '-loglevel', 'error', '-ss', '1', '-i', out, '-frames:v', '1', '-q:v', '4', os.path.join(ROOT, cat + '.jpg')])

json.dump(clips, open(os.path.join(ROOT, 'clips.json'), 'w'), indent=1)
real = sum(1 for c in clips.values() if not c['standin'])
print(f'{len(clips)} clips ({real} real, {len(clips) - real} stand-ins); previews for {", ".join(CATS)}')
