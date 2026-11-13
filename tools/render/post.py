"""Turn a studio render into the files the app loads.

    python post.py render.exr --layout layout.json --matte matte.png --out ../../assets/studio --base 2048

The render is a 360-degree picture with one pass per set of lights. This script
  1. denoises each pass (Open Image Denoise, guided by the albedo and normal passes),
  2. turns the panorama into six cube faces, which phones draw faster and more evenly than a panorama,
  3. packs the passes into a few images:
       base_*   the house lights, in colour                                   (full size)
       a_*      red = neon arcs, green = film lights, blue = cyclorama wash   (half size)
       b_*      red = sign dot, green = screen 1, blue = screen 2             (small)
       c_*      red, green, blue = screens 3, 4, 5                            (small)
       matte_*  where the five screens are visible (so things in front of them stay in front)
  4. writes studio.json: how bright each pass really is, and where the screens are.

Each pass is stored at its own exposure with a gamma of 2.2; studio.json holds the gain that turns it
back into linear light. Faces follow the usual cube-map layout (px, nx, py, ny, pz, nz) in the app's axes:
x right, y up, z toward the viewer (the centre screen is at -z).
"""
import argparse, json, math, os, sys
import numpy as np
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import exrio, oidn2

ap = argparse.ArgumentParser()
ap.add_argument('exr', nargs='+', help='the render; several files are joined left to right (strips)')
ap.add_argument('--layout', required=True)
ap.add_argument('--matte', default='')
ap.add_argument('--out', required=True)
ap.add_argument('--base', type=int, default=2048, help='cube face size of the colour pass')
ap.add_argument('--half', type=int, default=0, help='face size of pack a (default base / 2)')
ap.add_argument('--small', type=int, default=0, help='face size of packs b and c (default base * 3 / 8)')
ap.add_argument('--quality', type=int, default=90)
ap.add_argument('--no-denoise', action='store_true')
args = ap.parse_args()
HALF = args.half or args.base // 2
SMALL = args.small or args.base * 3 // 8
os.makedirs(args.out, exist_ok=True)

# ------------------------------------------------------------------ load
parts = [exrio.load(p) for p in args.exr]
P = {k: np.concatenate([q[k] for q in parts], axis=1) for k in parts[0]} if len(parts) > 1 else parts[0]
del parts
H, W = P['Combined'].shape[:2]
print(f'render {W}x{H}, passes: {sorted(k for k in P if k.startswith("Combined_"))}')
alb = np.ascontiguousarray(exrio.rgb(P['Denoising Albedo']))
nrm = np.ascontiguousarray(exrio.rgb(P['Denoising Normal']))


def group(name):
    a = np.ascontiguousarray(exrio.rgb(P.pop('Combined_' + name)))
    a = np.nan_to_num(a, nan=0.0, posinf=0.0, neginf=0.0)
    if args.no_denoise:
        return a
    return np.maximum(oidn2.denoise(a, alb, nrm), 0.0)


# ------------------------------------------------------------------ panorama -> cube
FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz']


def face_dirs(face, n):
    """Unit view directions (app axes) for each pixel of a cube face, rows from the top."""
    t, s = np.meshgrid((np.arange(n) + 0.5) / n * 2 - 1, (np.arange(n) + 0.5) / n * 2 - 1, indexing='ij')
    one = np.ones_like(s)
    d = {'px': (one, -t, -s), 'nx': (-one, -t, s), 'py': (s, one, t), 'ny': (s, -one, -t), 'pz': (s, -t, one), 'nz': (-s, -t, -one)}[face]
    d = np.stack(d, -1)
    return d / np.linalg.norm(d, axis=-1, keepdims=True)


def sample(img, face, n):
    """Bilinear lookup of a panorama (rows from the top, centre column = straight ahead) for one cube face."""
    h, w = img.shape[:2]
    d = face_dirs(face, n)
    # app (x right, y up, z back) -> blender (x right, y forward, z up)
    bx, by, bz = d[..., 0], -d[..., 2], d[..., 1]
    lon = np.arctan2(bx, by)
    lat = np.arcsin(np.clip(bz, -1, 1))
    u = (0.5 + lon / (2 * math.pi)) * w - 0.5
    v = (0.5 - lat / math.pi) * h - 0.5
    x0 = np.floor(u).astype(np.int64)
    y0 = np.clip(np.floor(v).astype(np.int64), 0, h - 2)
    fx = (u - x0).astype(np.float32)
    fy = np.clip(v - y0, 0, 1).astype(np.float32)
    x1 = (x0 + 1) % w
    x0 = x0 % w
    if img.ndim == 3:
        fx, fy = fx[..., None], fy[..., None]
    return img[y0, x0] * (1 - fx) * (1 - fy) + img[y0, x1] * fx * (1 - fy) + img[y0 + 1, x0] * (1 - fx) * fy + img[y0 + 1, x1] * fx * fy


def shrink(img, n):
    """Box-filter a panorama down so a face of size n samples it without aliasing."""
    f = max(1, int(round(img.shape[1] / (4.0 * n) / 1.15)))
    if f <= 1:
        return img
    h, w = img.shape[0] // f * f, img.shape[1] // f * f
    a = img[:h, :w]
    if a.ndim == 3:
        return a.reshape(h // f, f, w // f, f, a.shape[2]).mean((1, 3))
    return a.reshape(h // f, f, w // f, f).mean((1, 3))


def encode(x):
    return (np.clip(x, 0, 1) ** (1 / 2.2) * 255 + 0.5).astype(np.uint8)


def encode_srgb(x):
    x = np.clip(x, 0, 1)
    return (np.where(x <= 0.0031308, x * 12.92, 1.055 * np.power(x, 1 / 2.4) - 0.055) * 255 + 0.5).astype(np.uint8)


# solid-angle weights, so percentiles are not dominated by the poles of the panorama
row_w = np.cos((np.arange(H) + 0.5) / H * math.pi - math.pi / 2)


def gain_of(y, pct=99.6):
    """The level that maps to white for this pass: nearly its brightest surface, ignoring the lamps themselves."""
    sub = y[::4, ::4]
    w = np.repeat(row_w[::4, None], sub.shape[1], 1).ravel()
    v = sub.ravel()
    order = np.argsort(v)
    c = np.cumsum(w[order]); c /= c[-1]
    g = float(v[order][np.searchsorted(c, pct / 100.0)])
    return max(g, 1e-4)


manifest = {'faces': FACES, 'gamma': 2.2, 'sizes': {'base': args.base, 'a': HALF, 'b': SMALL, 'c': SMALL, 'matte': args.base},
            'gain': {}, 'tint': {}, 'layout': json.load(open(args.layout))}

# ------------------------------------------------------------------ base (colour)
base = group('base')
g = gain_of(base.max(-1))
manifest['gain']['base'] = g
src = shrink(base / g, args.base)
for f in FACES:
    Image.fromarray(encode_srgb(sample(src, f, args.base))).save(os.path.join(args.out, f'base_{f}.jpg'), quality=args.quality, subsampling=0, optimize=True)
print(f'base gain {g:.4f}')
del base, src

# ------------------------------------------------------------------ packed single-channel passes
LUMA = np.array([0.2126, 0.7152, 0.0722], np.float32)


def mono(name):
    a = group(name)
    if name == 'neon':
        # red light: keep the red channel, and remember its real colour for the app
        m = a.reshape(-1, 3)
        top = m[m[:, 0] > np.percentile(m[:, 0], 99)]
        t = top.mean(0) / max(top.mean(0)[0], 1e-6)
        manifest['tint'][name] = [round(float(x), 4) for x in t]
        y = a[..., 0]
    else:
        y = a @ LUMA
    g = gain_of(y)
    manifest['gain'][name] = g
    print(f'{name} gain {g:.4f}')
    return y / g


for pack, names, size in (('a', ('neon', 'beam', 'wall'), HALF), ('b', ('dot', 'scr1', 'scr2'), SMALL), ('c', ('scr3', 'scr4', 'scr5'), SMALL)):
    chans = [shrink(mono(nm), size) for nm in names]
    for f in FACES:
        rgb = np.stack([sample(c, f, size) for c in chans], -1)
        Image.fromarray(encode(rgb)).save(os.path.join(args.out, f'{pack}_{f}.jpg'), quality=args.quality, subsampling=0, optimize=True)
    manifest.setdefault('packs', {})[pack] = list(names)
    del chans

# ------------------------------------------------------------------ depth (kept coarse: enough to sort sprites)
if 'Depth' in P:
    z = np.asarray(P['Depth'], np.float32)
    z = np.where(np.isfinite(z) & (z < 1e4), z, 60.0)
    manifest['depth_max'] = 30.0
    zs = shrink(np.clip(z / 30.0, 0, 1), 256)
    for f in FACES:
        Image.fromarray((np.clip(sample(zs, f, 256), 0, 1) * 255 + 0.5).astype(np.uint8)).save(os.path.join(args.out, f'depth_{f}.png'), optimize=True)

# ------------------------------------------------------------------ screen mattes
# For each screen, which of its pixels the viewer can actually see (stands, cables or haze in front hide the rest).
# Stored as one atlas of 3 x 2 tiles, in the same order as the preview videos.
if args.matte:
    m = np.asarray(Image.open(args.matte).convert('L'), np.float32) / 255.0
    mh, mw = m.shape
    TW, TH = 512, 288
    atlas = np.zeros((TH * 2, TW * 3), np.float32)
    eye = manifest['layout']['eye']
    for i, scr in enumerate(manifest['layout']['screens']):
        c, r, u = np.array(scr['center']), np.array(scr['right']), np.array(scr['up'])
        xs = ((np.arange(TW) + 0.5) / TW - 0.5) * scr['width']
        ys = (0.5 - (np.arange(TH) + 0.5) / TH) * scr['height']
        p = c[None, None, :] + xs[None, :, None] * r[None, None, :] + ys[:, None, None] * u[None, None, :]
        d = p / np.linalg.norm(p, axis=-1, keepdims=True)
        bx, by, bz = d[..., 0], -d[..., 2], d[..., 1]
        lon = np.arctan2(bx, by); lat = np.arcsin(np.clip(bz, -1, 1))
        uu = (0.5 + lon / (2 * math.pi)) * mw - 0.5
        vv = (0.5 - lat / math.pi) * mh - 0.5
        x0 = np.floor(uu).astype(np.int64); y0 = np.clip(np.floor(vv).astype(np.int64), 0, mh - 2)
        fx = uu - x0; fy = np.clip(vv - y0, 0, 1)
        x1 = (x0 + 1) % mw; x0 = x0 % mw
        t = m[y0, x0] * (1 - fx) * (1 - fy) + m[y0, x1] * fx * (1 - fy) + m[y0 + 1, x0] * (1 - fx) * fy + m[y0 + 1, x1] * fx * fy
        row, col = i // 3, i % 3
        atlas[row * TH:(row + 1) * TH, col * TW:(col + 1) * TW] = t
    Image.fromarray((np.clip(atlas, 0, 1) * 255 + 0.5).astype(np.uint8)).save(os.path.join(args.out, 'mattes.jpg'), quality=92, optimize=True)
    manifest['matte'] = True
    manifest['sizes'].pop('matte', None)

json.dump(manifest, open(os.path.join(args.out, 'studio.json'), 'w'), indent=1)
total = sum(os.path.getsize(os.path.join(args.out, f)) for f in os.listdir(args.out))
print(f'wrote {len(os.listdir(args.out))} files, {total / 1e6:.1f} MB -> {args.out}')
