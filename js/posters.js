// Still frames of the demo scenes for the list, the preview sheet and Up next.
// Drawn once each on a small offscreen canvas and kept as image URLs.
import { createContext, program, fullscreenBuffer, drawFullscreen } from './gl.js';
import { FS_VERT, SCENE_FRAG } from './scenes.js';

const W = 384, H = 216;
const cache = new Map();
let R = null, failed = false;

const hex = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };

function renderer() {
  if (R || failed) return R;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const gl = createContext(canvas, { preserve: true });
    if (!gl) { failed = true; return null; }
    R = { canvas, gl, prog: program(gl, FS_VERT, SCENE_FRAG, ['p']), quad: fullscreenBuffer(gl) };
  } catch (e) {
    failed = true;
  }
  return R;
}

function render(item) {
  const r = renderer();
  if (!r) return '';
  const { gl, prog, quad, canvas } = r, u = prog.u;
  gl.viewport(0, 0, W, H);
  gl.useProgram(prog.p);
  gl.uniform2f(u.uRes, W, H);
  // the same framing as the live tile: straight ahead, a touch above the horizon
  gl.uniform3f(u.uF, 0, 0.06, -1);
  gl.uniform3f(u.uR, 1, 0, 0);
  gl.uniform3f(u.uU, 0, 1, 0);
  gl.uniform2f(u.uTan, 0.85, 0.48);
  gl.uniform1f(u.uKind, item.kind);
  gl.uniform1f(u.uTime, 4 * (item.speed || 1) + item.seed * 7);
  gl.uniform1f(u.uSeed, item.seed);
  const [c1, c2, c3] = item.c.map(hex);
  gl.uniform3fv(u.uC1, c1); gl.uniform3fv(u.uC2, c2); gl.uniform3fv(u.uC3, c3);
  drawFullscreen(gl, quad, 0);
  return canvas.toDataURL('image/jpeg', 0.82);
}

// A poster now (drawn on the spot if needed).
export function posterNow(item) {
  if (!item) return '';
  if (item.poster) return item.poster;
  if (!cache.has(item.id)) {
    const url = render(item);
    if (!url) return '';
    cache.set(item.id, url);
  }
  return cache.get(item.id);
}

// A poster only if it's already drawn.
export function posterCached(item) {
  if (!item) return '';
  return item.poster || cache.get(item.id) || '';
}

// A poster on the next frame, so whatever asked for it can appear first.
export function posterSoon(item, cb) {
  const now = posterCached(item);
  if (now) { cb(now); return; }
  requestAnimationFrame(() => requestAnimationFrame(() => cb(posterNow(item))));
}

// Draw a category's posters in the background, one at a time, so opening a preview never waits.
let warmQueue = [], warmTimer = 0;
export function warm(items) {
  warmQueue = items.filter(it => it && !it.poster && !cache.has(it.id));
  if (!warmTimer && warmQueue.length) warmTimer = setTimeout(warmStep, 400);
}
function warmStep() {
  warmTimer = 0;
  if (document.hidden) { warmTimer = setTimeout(warmStep, 1000); return; }
  const it = warmQueue.shift();
  if (!it) return;
  posterNow(it);
  if (warmQueue.length) warmTimer = setTimeout(warmStep, 90);
}

// Posters for a list, a few per frame so scrolling stays smooth. Calls back as each one is ready.
export function posters(items, onReady) {
  const todo = items.filter(Boolean);
  let i = 0, cancelled = false;
  const step = () => {
    if (cancelled) return;
    const t0 = performance.now();
    while (i < todo.length && performance.now() - t0 < 10) {
      const it = todo[i++];
      const url = posterNow(it);
      if (url) onReady(it, url);
    }
    if (i < todo.length) requestAnimationFrame(step);
  };
  // cached ones straight away
  requestAnimationFrame(step);
  return () => { cancelled = true; };
}
