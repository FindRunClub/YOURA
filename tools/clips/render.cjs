// Renders the stand-in clips: 360-degree scenes drawn in code, saved as real MP4 files.
// They fill the 15 video slots until the real clips arrive.
//   python3 -m http.server 8765      (in the repo root, in another terminal)
//   node tools/clips/render.cjs [seconds] [fps]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const recipes = require('./standins.json');
const SECONDS = Number(process.argv[2] || 8), FPS = Number(process.argv[3] || 24);
const OUT = path.join(__dirname, '..', '..', 'assets', 'video');
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage();
  page.on('pageerror', e => { console.error('page error', e.message); process.exit(1); });
  await page.goto('http://127.0.0.1:8765/tools/clips/render.html');
  await page.waitForFunction('window.ready === true');
  let k = 0;
  for (const [id, r] of Object.entries(recipes)) {
    const out = path.join(OUT, id + '.mp4');
    k++;
    if (fs.existsSync(out)) continue;
    const t0 = Date.now();
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '22', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out + '.tmp.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
    const seed = ((k * 0.618034) % 1) * 9;
    for (let f = 0; f < SECONDS * FPS; f++) {
      const b64 = await page.evaluate(([r, t, s]) => window.renderFrame(r, t, s), [r, f / FPS, seed]);
      if (!ff.stdin.write(Buffer.from(b64, 'base64'))) await new Promise(res => ff.stdin.once('drain', res));
    }
    ff.stdin.end();
    await new Promise(res => ff.on('close', res));
    fs.renameSync(out + '.tmp.mp4', out);
    // remember which files are stand-ins (by size), so the app can label them until a real clip replaces them
    const sp = path.join(OUT, 'standins.json');
    const all = fs.existsSync(sp) ? JSON.parse(fs.readFileSync(sp, 'utf8')) : {};
    all[id] = fs.statSync(out).size;
    fs.writeFileSync(sp, JSON.stringify(all, null, 1));
    console.log(id, ((Date.now() - t0) / 1000).toFixed(1) + 's');
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
