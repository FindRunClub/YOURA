// YOURA. One WebGL canvas draws everything in real 3D: the logo intro, the film-studio home and the player.
// The interface sits on top of it in HTML.
import * as THREE from 'three';
import { Gfx } from './gfx.js';
import { Stage } from './stage.js';
import { Intro, INTRO_T } from './intro3d.js';
import { Theater } from './theater.js';
import { Look } from './look.js';
import { CATEGORIES, BY_CAT, ALL, SCREEN_RANKS, COMFORT, applyClipInfo } from './catalog.js';
import { store, videos } from './store.js';
import { h, icon, setIcon, mark, toast, fmtTime } from './ui.js';
import { createViews } from './views.js';
import { DEG, clamp, wrapPi, smoothstep, lerp } from './math.js';

const root = document.getElementById('app');
const HAS_ORIENTATION = typeof window.DeviceOrientationEvent !== 'undefined';
const NEEDS_PERMISSION = HAS_ORIENTATION && typeof DeviceOrientationEvent.requestPermission === 'function';
const TOUCH_DEVICE = (navigator.maxTouchPoints || 0) > 0;
const TAN_MIN = Math.tan(30 * DEG);       // 60 degrees across the short side of the screen
const ZOOM_MIN = 0.72, ZOOM_MAX = 1.4;
const BREAK_AFTER = 20 * 60;
const PER_CAT = 5;
const STEP = 32 * DEG;                    // the screens stand 32 degrees apart

const look = new Look();
const camera = new THREE.PerspectiveCamera(90, 1, 0.02, 400);
const userQ = new THREE.Quaternion();
const forward = new THREE.Vector3();
let canvas, gfx, stage, intro, theater, views;
let introT = 0, introAge = 0, whiteK = 0, arriveT = 0;
let zoom = 1, dimNow = 1;
let lastFocus = -2;
let breakClock = 0;
let deepLink = null;
const previews = {};                     // one looping preview video per category
const posterImgs = {};

const app = {
  mode: 'boot',          // 'intro' | 'arrive' | 'home' | 'player'
  cat: 'musician',
  slots: [null, null, null, null, null],   // what each screen shows, left to right
  yours: [],             // videos added on this device
  overlay: null,         // the sheet or panel that's open, if any
  playing: null,
  reduced: false,
  embedded: false,
  motionLikely: HAS_ORIENTATION && TOUCH_DEVICE,
  hasOrientation: HAS_ORIENTATION,
  look, store, toast
};

/* ------------------------------------------------------------------ catalog */

function cats() { return app.yours.length ? [...CATEGORIES, { id: 'yours', name: 'Yours' }] : CATEGORIES; }
function catName(id) { return (cats().find(c => c.id === id) || {}).name || ''; }
function items(cat) { return cat === 'yours' ? app.yours.slice(0, PER_CAT) : (BY_CAT[cat] || []); }
function hidden(it) { return store.s.hideIntense && it.comfort === 3; }
function slotItems(cat) {
  const list = items(cat);
  return SCREEN_RANKS.map(r => { const it = list[r - 1]; return it && !hidden(it) ? it : null; });
}
function findItem(id) { return ALL.find(it => it.id === id) || app.yours.find(it => it.id === id) || null; }
function nextItem(item) {
  const list = items(item.cat).filter(it => !hidden(it) && !it.missing);
  const i = list.indexOf(item);
  if (list.length < 2 || i < 0) return null;
  for (let k = 1; k < list.length; k++) {
    const c = list[(i + k) % list.length];
    if (!store.isWatched(c.id)) return c;
  }
  return list[(i + 1) % list.length];
}
Object.assign(app, { cats, catName, items, findItem, nextItem });
Object.defineProperty(app, 'introT', { get: () => introT, set: v => { introT = v; } });      // lets tests jump through the intro

/* ------------------------------------------------------------------ boot */

function fallback(msg) {
  root.innerHTML = '';
  root.append(h('div', { class: 'fallback' }, mark(64), h('h1', null, 'YOURA'), h('p', null, msg),
    h('p', { class: 'muted' }, 'Try the latest Safari or Chrome, with hardware acceleration on.')));
}

function boot() {
  app.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  try { app.embedded = window.self !== window.top; } catch (e) { app.embedded = true; }
  canvas = h('canvas', { class: 'gl', role: 'img', 'aria-label': '360 degree view. Turn your phone, or drag, to look around.' });
  root.append(canvas);
  try {
    gfx = new Gfx(canvas);
    intro = new Intro(gfx.renderer);
    stage = new Stage();
    theater = new Theater();
  } catch (err) {
    console.error(err);
    fallback('This device can’t draw YOURA’s 3D view, because WebGL 2 is off or unavailable.');
    return false;
  }
  canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); toast('The 3D view was interrupted. Reloading…', 4000); });
  canvas.addEventListener('webglcontextrestored', () => location.reload());
  theater.wholeFile = wholeFile;
  Object.assign(app, { gfx, stage, theater, intro });
  return true;
}

/* ------------------------------------------------------------------ HUD */

const L = {};           // layers
const E = {};           // elements we update
const lookBtns = [];

function lookButton() {
  const b = h('button', { class: 'round look-btn', onclick: () => setLook(look.usingMotion ? 'touch' : 'motion') }, icon('motion'));
  lookBtns.push(b);
  return b;
}
function needle() { return h('span', { class: 'needle', 'aria-hidden': 'true' }, h('i')); }

function buildHud() {
  E.vignette = h('div', { class: 'vignette', 'aria-hidden': 'true' });
  E.loading = h('div', { class: 'studio-loading', role: 'status' }, 'Opening the studio…');

  E.skip = h('button', { class: 'pill skip', onclick: skipIntro }, 'Skip intro');
  E.introHint = h('div', { class: 'pill hint intro-hint' }, icon('touch', 18), h('span', null, 'Drag to look around'));
  L.intro = h('div', { class: 'layer intro-ui' }, E.introHint, E.skip);

  E.compass = h('button', { class: 'pill compass', 'aria-label': 'Face number 1', onclick: faceRank1 }, needle(), h('span', { class: 'num' }, '01'));
  E.motionChip = h('button', { class: 'pill motion-chip', onclick: () => setLook('motion') }, icon('motion', 18), h('span', null, 'Tap to turn on motion'));
  E.chips = h('div', { class: 'chips', role: 'tablist', 'aria-label': 'Categories' });
  E.gaze = h('div', { class: 'gaze', 'aria-hidden': 'true' });
  E.splash = h('div', { class: 'splash', 'aria-hidden': 'true' });
  E.live = h('div', { class: 'sr', 'aria-live': 'polite' });
  L.home = h('div', { class: 'layer home-ui' },
    h('button', { class: 'sr sr-focus', onclick: () => views.openList() }, 'Browse the videos as a list'),
    h('div', { class: 'topbar' },
      h('div', { class: 'brand' }, mark(30), h('span', null, 'YOURA')),
      E.compass,
      lookButton()),
    E.motionChip, E.gaze, E.splash,
    h('button', { class: 'round edge left', 'aria-label': 'Turn left', onclick: () => turn(-1) }, icon('left')),
    h('button', { class: 'round edge right', 'aria-label': 'Turn right', onclick: () => turn(1) }, icon('right')),
    h('nav', { class: 'dock', 'aria-label': 'Browse' },
      E.chips,
      h('div', { class: 'tools' },
        h('button', { class: 'tool', onclick: () => views.openList() }, icon('list', 20), h('span', null, 'List')),
        h('button', { class: 'tool', onclick: () => views.openSaved() }, icon('saved', 20), h('span', null, 'Saved')),
        h('button', { class: 'tool', onclick: () => views.openSettings() }, icon('gear', 20), h('span', null, 'Settings')))),
    E.live);

  E.pTitle = h('div', { class: 'ptitle' });
  E.pCreator = h('div', { class: 'pcreator' });
  E.pFront = h('button', { class: 'round compass', 'aria-label': 'Bring the video in front of you', onclick: () => { theater.faceFront(look.heading()); poke(); } }, needle());
  E.pPlay = h('button', { class: 'round play', 'aria-label': 'Pause', onclick: () => { theater.toggle(); poke(); } }, icon('pause'));
  E.pSeek = h('input', { class: 'seek', type: 'range', min: '0', max: '1000', step: '1', value: '0', 'aria-label': 'Position in the video' });
  E.pTime = h('span', { class: 'time' }, '0:00 / 0:00');
  E.pHint = h('div', { class: 'pill hint p-hint' });
  E.pLoading = h('div', { class: 'loading', role: 'status', 'aria-label': 'Loading' }, h('i'));
  E.pError = h('div', { class: 'perror', role: 'alert' });
  L.player = h('div', { class: 'layer player-ui' },
    h('div', { class: 'topbar' },
      h('div', { class: 'pleft' },
        h('button', { class: 'round back', onclick: exitPlayer, 'aria-label': 'Back to the studio' }, icon('back', 22), h('span', { class: 'wide-only' }, 'Studio')),
        h('div', { class: 'pmeta' }, E.pTitle, E.pCreator)),
      h('div', { class: 'pright' }, E.pFront, lookButton())),
    E.pLoading, E.pError, E.pHint,
    h('div', { class: 'pbar' }, E.pPlay, E.pSeek, E.pTime));

  root.append(L.intro, L.home, L.player, E.vignette, E.loading);

  let seeking = false;
  const seekTo = () => { theater.seek(E.pSeek.value / 1000 * (theater.dur || 0)); paintSeek(); };
  E.pSeek.addEventListener('input', () => { seeking = true; seekTo(); poke(); });
  E.pSeek.addEventListener('change', () => { seeking = false; seekTo(); poke(); });
  E.pSeek.addEventListener('pointerup', () => { seeking = false; });
  app.isSeeking = () => seeking;
}

function setLayer(name) {
  for (const [k, el] of Object.entries(L)) el.classList.toggle('on', k === name);
}

function renderChips() {
  E.chips.innerHTML = '';
  const list = cats();
  list.forEach((c, i) => {
    E.chips.append(h('button', {
      class: 'chip', role: 'tab', id: 'chip-' + c.id, 'aria-selected': String(c.id === app.cat),
      'aria-label': `${c.name}, ${i + 1} of ${list.length}`, onclick: () => setCategory(c.id)
    }, c.name));
  });
}
function syncChips() { for (const b of E.chips.children) b.setAttribute('aria-selected', String(b.id === 'chip-' + app.cat)); }

function setHint(el, ic, text) {
  if (el.dataset.text === text) return;
  el.dataset.text = text;
  el.innerHTML = '';
  el.append(icon(ic, 18), h('span', null, text));
}

function syncLook() {
  const on = look.usingMotion;
  for (const b of lookBtns) {
    setIcon(b, on ? 'motion' : 'touch');
    b.setAttribute('aria-label', on ? 'Motion on. Switch to touch only' : 'Touch only. Switch to motion');
    b.classList.toggle('active', on);
  }
  const waiting = store.s.look === 'motion' && !on && look.motion !== 'unavailable' && NEEDS_PERMISSION;
  E.motionChip.classList.toggle('on', waiting && app.mode === 'home' && store.d.firstRunDone);
  setHint(E.introHint, on ? 'motion' : 'touch', on ? 'Turn your phone to look around' : 'Drag to look around');
}
app.syncLook = () => syncLook();

function splash(text) {
  if (app.reduced) return;
  E.splash.textContent = text;
  E.splash.classList.remove('show');
  void E.splash.offsetWidth;
  E.splash.classList.add('show');
}

/* ------------------------------------------------------------------ screens: previews and lower thirds */

// A phone plays a video straight from its address only if the host can send part of a file. Not every host
// can, so a clip can also be downloaded whole and played from memory. Inside an embedded preview that way goes first.
const wholeFiles = new Map();
function wholeFile(url) {
  if (!wholeFiles.has(url)) {
    wholeFiles.set(url, fetch(url).then(r => (r.ok ? r.blob() : null)).then(b => (b && b.size ? URL.createObjectURL(b) : null)).catch(() => null));
  }
  return wholeFiles.get(url);
}
async function keepClips(cat) {
  if (!app.embedded) return;
  for (const it of BY_CAT[cat] || []) {
    if (it.missing || it.held) continue;
    const u = await wholeFile(it.src);
    if (u) it.held = u;
  }
}

function previewFor(cat) {
  if (cat === 'yours' || !BY_CAT[cat]) return null;
  if (previews[cat]) return previews[cat];
  const url = `assets/video/${cat}.mp4`;
  const v = document.createElement('video');
  v.muted = true; v.loop = true; v.playsInline = true;
  v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', ''); v.setAttribute('muted', '');
  v.preload = 'auto'; v.crossOrigin = 'anonymous';
  v.className = 'video-src'; v.setAttribute('aria-hidden', 'true');
  v.addEventListener('playing', () => { if (cat === app.cat) paintScreens(); });
  // two ways to load it: from its address, and from memory; the second is tried if the first fails
  const ways = app.embedded ? ['whole', 'direct'] : ['direct', 'whole'];
  const next = () => {
    const way = ways.shift();
    if (!way) { v._dead = true; return; }
    if (way === 'direct') { v.src = url; resume(); return; }
    wholeFile(url).then(u => { if (u) { v.src = u; resume(); } else next(); });
  };
  const resume = () => { v._ready = true; if (cat === app.cat && app.mode === 'home' && !document.hidden) playPreview(cat); };
  v._next = next;
  v.addEventListener('error', next);
  document.body.appendChild(v);
  previews[cat] = v;
  next();
  return v;
}
function previewLive(cat) { const v = previews[cat]; return !!v && !v._dead && !v.paused && v.readyState >= 2; }
function playPreview(cat) {
  for (const [k, o] of Object.entries(previews)) if (k !== cat && !o.paused) o.pause();
  const v = previewFor(cat);
  if (!v || v._dead || !v._ready) return;
  const p = v.play();
  if (p && p.catch) p.catch(() => { /* autoplay refused (Low Power Mode): posters show until the next tap */ });
  // still nothing after a few seconds: try the other way of loading it
  clearTimeout(v._watch);
  v._watch = setTimeout(() => { if (cat === app.cat && app.mode === 'home' && !v.paused && v.readyState < 2 && v.networkState !== 2) v._next(); }, 5000);
}
function pausePreviews() { for (const v of Object.values(previews)) if (!v.paused) v.pause(); }
function poster(item) {
  if (!item.poster) return null;
  let img = posterImgs[item.id];
  if (!img) {
    img = posterImgs[item.id] = new Image();
    img.onload = () => { if (app.slots.includes(item)) paintScreens(); };
    img.src = item.poster;
  }
  return img.complete && img.naturalWidth ? img : null;
}

const SANS = 'Jost, "Avenir Next", system-ui, sans-serif';
const MONO = '"IBM Plex Mono", ui-monospace, Menlo, monospace';

function pill(ctx, x, y, w, hh, r, fill) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + hh, r); ctx.arcTo(x + w, y + hh, x, y + hh, r);
  ctx.arcTo(x, y + hh, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); ctx.fill();
}
function fitText(ctx, text, max) {
  if (ctx.measureText(text).width <= max) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(t + '…').width > max) t = t.slice(0, -1);
  return t.trimEnd() + '…';
}

// What is drawn over each screen's picture: the poster while the preview isn't running, a lower third with
// the number and title, and the NEW, saved and watched marks.
function paintScreens() {
  if (!stage || !stage.ready) return;
  const live = previewLive(app.cat);
  stage.paintOverlay((ctx, i, w, hgt) => {
    const it = app.slots[i];
    if (!it) return;
    if (!live) {
      const img = poster(it);
      if (img) {
        const s = Math.max(w / img.naturalWidth, hgt / img.naturalHeight);
        ctx.drawImage(img, (w - img.naturalWidth * s) / 2, (hgt - img.naturalHeight * s) / 2, img.naturalWidth * s, img.naturalHeight * s);
      } else {
        const g0 = ctx.createLinearGradient(0, 0, w, hgt);
        g0.addColorStop(0, '#1b1216'); g0.addColorStop(1, '#0b0809');
        ctx.fillStyle = g0; ctx.fillRect(0, 0, w, hgt);
      }
    }
    const watched = store.isWatched(it.id);
    if (watched) { ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0, 0, w, hgt); }
    const g = ctx.createLinearGradient(0, hgt - 170, 0, hgt);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.86)');
    ctx.fillStyle = g; ctx.fillRect(0, hgt - 170, w, 170);
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#FF3355';
    ctx.font = `500 34px ${MONO}`;
    const rk = String(it.rank).padStart(2, '0');
    ctx.fillText(rk, 26, hgt - 70);
    const rkW = ctx.measureText(rk).width;
    ctx.font = `400 25px ${MONO}`;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    const meta = [it.dur ? fmtTime(it.dur) : '', it.comfort ? COMFORT[it.comfort].name : ''].filter(Boolean).join('  ·  ');
    ctx.fillText(meta, 26 + rkW + 18, hgt - 72);
    ctx.fillStyle = '#fff';
    ctx.font = `600 42px ${SANS}`;
    ctx.fillText(fitText(ctx, it.title, w - 52), 26, hgt - 24);
    let x = 22;
    ctx.textBaseline = 'middle';
    if (it.isNew && !watched) {
      ctx.font = `600 24px ${SANS}`;
      const tw = ctx.measureText('NEW').width + 26;
      pill(ctx, x, 20, tw, 38, 8, '#E11737');
      ctx.fillStyle = '#fff'; ctx.fillText('NEW', x + 13, 40);
      x += tw + 10;
    }
    if (it.missing) {
      ctx.font = `500 20px ${MONO}`;
      const tw = ctx.measureText('COMING SOON').width + 24;
      pill(ctx, x, 20, tw, 38, 8, 'rgba(0,0,0,0.7)');
      ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillText('COMING SOON', x + 12, 40);
    }
    if (store.isSaved(it.id)) {
      ctx.fillStyle = '#E11737';
      ctx.beginPath();
      ctx.moveTo(w - 78, 0); ctx.lineTo(w - 34, 0); ctx.lineTo(w - 34, 62); ctx.lineTo(w - 56, 47); ctx.lineTo(w - 78, 62); ctx.closePath(); ctx.fill();
    }
    if (watched) {
      const cx = w / 2, cy = hgt / 2 - 20;
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(cx, cy, 40, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#141414'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(cx - 17, cy + 1); ctx.lineTo(cx - 5, cy + 13); ctx.lineTo(cx + 18, cy - 12); ctx.stroke();
    }
  });
}
app.refreshTile = () => paintScreens();

/* ------------------------------------------------------------------ looking around */

let motionAsk = null;
function askMotion() {
  if (look.motion === 'on') return Promise.resolve(true);
  if (!motionAsk) motionAsk = look.enableMotion().finally(() => { motionAsk = null; syncLook(); });
  return motionAsk;
}

// Must run inside a tap: iOS asks for motion permission the first time.
async function setLook(mode, { quiet = false } = {}) {
  if (mode === 'touch') {
    store.set('look', 'touch');
    look.setPrefer('touch');
    syncLook();
    if (!quiet) toast('Touch only. Drag to look around.');
    return true;
  }
  store.set('look', 'motion');
  look.setPrefer('motion');
  const ok = await askMotion();
  if (ok) {
    syncLook();
    if (!quiet) toast('Motion on. Turn your phone to look around.');
    return true;
  }
  look.setPrefer('touch');
  store.set('look', 'touch');
  syncLook();
  toast(app.embedded
    ? 'This preview can’t read motion sensors. Open YOURA at its own address for motion. Drag to look around for now.'
    : 'Motion isn’t available here, so drag to look around. You can try again in Settings.', 5200);
  return false;
}
app.setLook = setLook;

// After the first launch, iOS still needs a tap before motion can start. The same tap starts the previews
// if the phone refused to autoplay them.
function armFirstTap() {
  const go = () => {
    if (app.mode === 'home' && !previewLive(app.cat)) playPreview(app.cat);
    if (NEEDS_PERMISSION && store.s.look === 'motion' && look.motion !== 'on' && look.motion !== 'unavailable' && store.d.firstRunDone) {
      askMotion().then(ok => { if (!ok && store.s.look === 'motion') look.setPrefer('touch'); syncLook(); });
    }
  };
  window.addEventListener('touchend', go, true);
  window.addEventListener('click', go, true);
}

function turn(dir) { look.turn(dir * STEP, app.reduced ? 0.01 : 0.45); }
function faceRank1() { look.face(0, { duration: app.reduced ? 0.01 : 0.7 }); }
function faceItem(item) {
  const i = app.slots.indexOf(item);
  if (i >= 0 && stage.ready) look.face(stage.heading(i), { duration: app.reduced ? 0.01 : 0.7 });
}
app.faceItem = faceItem;

/* ------------------------------------------------------------------ flow */

function startIntro(kind) {
  views.closeAll();
  pausePreviews();
  look.recenter(0);
  syncLook();
  intro.reset();
  if (kind === 'off' || app.reduced) { arrive(true); return; }
  app.mode = 'intro';
  setLayer('intro');
  introT = kind === 'short' ? INTRO_T.SHORT_START : 0;
  introAge = 0;
  E.skip.classList.remove('show');
  setTimeout(() => { if (app.mode === 'intro') E.skip.classList.add('show'); }, 700);
  E.introHint.classList.remove('show');
  if (kind !== 'short') {
    setTimeout(() => { if (app.mode === 'intro') E.introHint.classList.add('show'); }, 900);
    setTimeout(() => E.introHint.classList.remove('show'), 4200);
  }
}
app.replayIntro = () => { if (theater.active) exitPlayer(); stage.dark(); startIntro('full'); };

function skipIntro() { if (app.mode === 'intro') arrive(false); }

// Through the dot: hold on white until the studio is loaded, then the lights come up.
function arrive(fast) {
  app.mode = 'arrive';
  app.fastArrive = !!fast;
  arriveT = 0;
  setLayer(null);
  E.skip.classList.remove('show');
  E.introHint.classList.remove('show');
  if (!store.d.introSeen) { store.d.introSeen = true; store.save(); }
}

function enterHome() {
  app.mode = 'home';
  E.loading.classList.remove('on');
  gfx.releaseMS();
  look.recenter(0);
  camera.position.set(0, 0, 0);
  if (!cats().some(c => c.id === app.cat)) app.cat = 'musician';
  app.slots = slotItems(app.cat);
  stage.dark();
  stage.setMood(app.cat, true);
  playPreview(app.cat);
  stage.setVideo(previewFor(app.cat), false);
  keepClips(app.cat);
  paintScreens();
  const quick = app.fastArrive || app.reduced;
  stage.powerOn(quick);
  whiteK = app.fastArrive ? 0 : 1;
  dimNow = 1;
  renderChips();
  lastFocus = -2;
  setTimeout(() => { if (app.mode === 'home') { setLayer('home'); syncLook(); } }, quick ? 300 : 2600);
  setTimeout(() => {
    if (app.mode !== 'home') return;
    if (!store.d.firstRunDone) views.showFirstRun();
    else openDeepLink();
  }, quick ? 900 : 4700);
}
app.afterFirstRun = () => openDeepLink();

function openDeepLink() {
  if (!deepLink) return;
  const item = findItem(deepLink);
  deepLink = null;
  if (!item) return;
  if (item.cat !== app.cat) setCategory(item.cat, { animate: false });
  faceItem(item);
  views.openPreview(item);
}

let repaintTimer = 0;
function setCategory(id, { animate = true } = {}) {
  if (!cats().some(c => c.id === id)) id = 'musician';
  const changed = id !== app.cat;
  app.cat = id;
  store.d.lastCategory = id; store.save();
  app.slots = slotItems(id);
  if (stage.ready && (app.mode === 'home' || app.mode === 'player')) {
    const moving = changed && animate && !app.reduced && app.mode === 'home';
    stage.setMood(id);
    if (changed) {
      playPreview(id);
      stage.setVideo(previewFor(id), moving);
      keepClips(id);
    }
    clearTimeout(repaintTimer);
    if (moving) repaintTimer = setTimeout(paintScreens, 280);      // the lower thirds change as the pictures cut over
    else paintScreens();
    lastFocus = -2;
  }
  syncChips();
  if (changed && animate && app.mode === 'home') splash(catName(id));
}
app.setCategory = setCategory;
app.refreshSphere = () => { app.slots = slotItems(app.cat); paintScreens(); lastFocus = -2; };

// Called from a tap (Watch, Play now): the video needs that tap on iOS.
function watch(item, { skipHeadsUp = false } = {}) {
  if (!item) return;
  if (item.missing) { toast('This video isn’t in the app yet.'); return; }
  if (item.comfort === 3 && store.s.headsUp && !skipHeadsUp) { views.showHeadsUp(item); return; }
  views.closeAll();
  if (item.cat !== app.cat && cats().some(c => c.id === item.cat)) setCategory(item.cat, { animate: false });
  const i = app.slots.indexOf(item);
  forward.set(0, 0, -1).applyQuaternion(userQ);
  const from = i >= 0 && stage.ready ? stage.screens[i].dir : forward.clone();
  const front = store.s.recenter || i < 0 || !stage.ready ? look.heading() : stage.heading(i);
  app.mode = 'player';
  app.playing = item;
  zoom = 1;
  theater.open(item, from, front);
  setLayer('player');
  E.pTitle.textContent = item.title;
  E.pCreator.textContent = item.creator;
  E.pError.classList.remove('on');
  syncPlayButton();
  syncLook();
  poke();
  firstPlayHint();
  wakeLock(true);
}
app.watch = watch;

function exitPlayer() {
  const item = app.playing;
  views.hideUpNext();
  theater.close();
  wakeLock(false);
  app.playing = null;
  app.mode = 'home';
  setLayer('home');
  syncLook();
  playPreview(app.cat);
  paintScreens();
  if (item) faceItem(item);
  lastFocus = -2;
}
app.exitPlayer = exitPlayer;

function markWatched(item) { if (item && store.markWatched(item.id)) paintScreens(); }

/* ------------------------------------------------------------------ player HUD */

let uiTimer = 0;
function poke() {
  L.player.classList.remove('calm');
  clearTimeout(uiTimer);
  uiTimer = setTimeout(() => {
    if (app.mode === 'player' && theater.playing && !app.isSeeking() && !app.overlay) L.player.classList.add('calm');
  }, 3000);
}
function syncPlayButton() {
  setIcon(E.pPlay, theater.playing ? 'pause' : 'play');
  E.pPlay.setAttribute('aria-label', theater.playing ? 'Pause' : 'Play');
}
let hintState = null;
function firstPlayHint() {
  hintState = null;
  E.pHint.classList.remove('show');
  if (store.d.firstPlayDone) return;
  const motion = look.usingMotion;
  setHint(E.pHint, motion ? 'motion' : 'touch', motion ? 'Turn your phone to look around' : 'Drag to look around');
  E.pHint.classList.add('show');
  hintState = { start: look.heading(), startPitch: look.elevation(), t: 0 };
}
function paintSeek() {
  const d = theater.dur || 0, t = theater.time();
  E.pSeek.style.setProperty('--p', ((d ? clamp(t / d, 0, 1) : 0) * 100).toFixed(2) + '%');
  const text = `${fmtTime(t)} / ${fmtTime(d)}`;
  if (E.pTime.textContent !== text) E.pTime.textContent = text;
}
function updatePlayerHud(dt) {
  const d = theater.dur || 0, t = theater.time();
  if (!app.isSeeking()) E.pSeek.value = String(d ? Math.round(t / d * 1000) : 0);
  paintSeek();
  E.pFront.querySelector('.needle').style.transform = `rotate(${(wrapPi(theater.front - look.heading()) / DEG).toFixed(1)}deg)`;
  E.pLoading.classList.toggle('on', theater.loading && !theater.error);
  if (theater.error && !E.pError.classList.contains('on')) { E.pError.textContent = theater.error; E.pError.classList.add('on'); }
  if (d && t >= d * 0.85) markWatched(app.playing);
  if (hintState) {
    hintState.t += dt;
    const moved = Math.abs(wrapPi(look.heading() - hintState.start)) > 12 * DEG || Math.abs(look.elevation() - hintState.startPitch) > 10 * DEG;
    if (moved || hintState.t > 7) {
      E.pHint.classList.remove('show');
      hintState = null;
      store.d.firstPlayDone = true; store.save();
    }
  }
}

/* ------------------------------------------------------------------ frame */

// Home: 60 degrees across the short side, and on a tall phone no taller than about 80, so the screens stay big.
function homeTan(aspect) {
  return aspect >= 1 ? TAN_MIN : Math.min(0.86, TAN_MIN / aspect);
}
// Player: the same 60 degrees, scaled by the pinch zoom.
function playerTan(aspect) {
  const t = TAN_MIN * zoom;
  let tx, ty;
  if (aspect >= 1) { ty = t; tx = t * aspect; } else { tx = t; ty = t / aspect; }
  const cap = 1.7;
  if (Math.max(tx, ty) > cap) ty *= cap / Math.max(tx, ty);
  return ty;
}

let last = 0, vig = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = last ? Math.min(0.1, Math.max(0, (now - last) / 1000)) : 1 / 60;
  last = now;
  if (document.hidden || app.mode === 'boot') return;
  gfx.govern(dt);
  look.update(dt);
  const { pw, ph } = gfx.fit();
  const aspect = pw / ph;
  const q = look.quat();
  userQ.set(q[0], q[1], q[2], q[3]);
  const G = gfx.look, time = now / 1000;
  camera.aspect = aspect;

  if (app.mode === 'intro') {
    if (!app.freeze) { introT += dt; introAge += dt; }
    camera.fov = intro.fov(aspect);
    camera.updateProjectionMatrix();
    G.white = intro.apply(introT, camera, userQ, app.reduced);
    G.black = 1 - smoothstep(0, 0.5, introAge);
    G.exposure = 1.0; G.bloom = 0.85; G.threshold = 0.9; G.vignette = 0.5; G.fringe = 0.006; G.grain = 0.022; G.sat = 1;
    gfx.render([intro.scene], camera, time, true);
    if (G.white >= 0.995 || introT > INTRO_T.IN + 0.4) arrive(false);
  } else if (app.mode === 'arrive') {
    arriveT += dt;
    G.white = app.fastArrive ? 0 : 1; G.black = app.fastArrive ? 1 : 0;
    gfx.render([], camera, time);
    E.loading.classList.toggle('on', arriveT > 1.2 && !stage.ready);
    E.loading.classList.toggle('dark', !app.fastArrive);
    if (stage.failed) { fallback('YOURA couldn’t load its studio. Check your connection and reload.'); app.mode = 'boot'; return; }
    if (stage.ready && (app.fastArrive || arriveT > 0.25)) enterHome();
  } else if (app.mode === 'home' || app.mode === 'player') {
    camera.position.set(0, 0, 0);
    camera.quaternion.copy(userQ);
    const r = theater.reveal * theater.reveal * (3 - 2 * theater.reveal);
    const ty = lerp(homeTan(aspect), playerTan(aspect), r);
    camera.fov = 2 * Math.atan(ty) / DEG;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    forward.set(0, 0, -1).applyQuaternion(userQ);
    // the stage dims under sheets and while a video plays
    const dimTo = app.mode === 'player' ? 0.1 : (app.overlay && app.overlay !== 'firstrun' ? 0.45 : 1);
    dimNow += (dimTo - dimNow) * Math.min(1, dt * 5);
    stage.dim = dimNow;
    stage.setPixelScale(ph);
    stage.update(dt, app.mode === 'home' && !app.overlay ? forward : null, app.slots);
    theater.update(dt, app.reduced);
    if (whiteK > 0) whiteK = Math.max(0, whiteK - dt / 1.1);
    G.white = whiteK * whiteK; G.black = 0;
    // the stage gets the full film finish; a video is shown as it was made
    G.exposure = 1.0; G.bloom = lerp(0.4, 0.12, r); G.threshold = lerp(1.2, 2.6, r);
    G.vignette = lerp(0.36, 0, r); G.fringe = lerp(0.006, 0, r); G.grain = lerp(0.022, 0.008, r); G.sat = lerp(1.14, 1, r);
    gfx.render([theater.covering ? null : stage.scene, theater.active ? theater.scene : null], camera, time);
    // the previews rest while a video covers the stage
    const pv = previews[app.cat];
    if (pv && theater.covering && !pv.paused) pv.pause();
    if (app.mode === 'home') updateHomeHud(); else updatePlayerHud(dt);
  }

  const v = store.s.vignette && (app.mode === 'home' || app.mode === 'player') && !look.usingMotion ? smoothstep(1.2, 3.6, look.spinSpeed()) : 0;
  if (Math.abs(v - vig) > 0.01) { vig = v; E.vignette.style.opacity = v.toFixed(3); }
  if (store.s.breaks && (app.mode === 'home' || app.mode === 'player')) {
    breakClock += dt;
    if (breakClock > BREAK_AFTER) { breakClock = 0; toast('Twenty minutes of looking around. A short break helps your eyes and neck.', 6000); }
  }
}

function updateHomeHud() {
  const rel = wrapPi(0 - look.heading()) / DEG;
  E.compass.querySelector('.needle').style.transform = `rotate(${rel.toFixed(1)}deg)`;
  E.compass.classList.toggle('ahead', Math.abs(rel) < 12);
  if (stage.focus !== lastFocus) {
    lastFocus = stage.focus;
    E.gaze.classList.toggle('on', stage.focus >= 0);
    const it = stage.focus >= 0 ? app.slots[stage.focus] : null;
    if (it && !app.overlay) E.live.textContent = `${String(it.rank).padStart(2, '0')}. ${it.title}`;
  }
}

/* ------------------------------------------------------------------ input */

const pointers = new Map();
let gesture = null;
let pendingTap = null;        // a tap waits for the browser's own click, so that click can't land on what the tap opens
const ray = new THREE.Vector3();

function rayAt(x, y) {
  const r = canvas.getBoundingClientRect();
  ray.set((x - r.left) / r.width * 2 - 1, 1 - (y - r.top) / r.height * 2, 0.5).unproject(camera).sub(camera.position).normalize();
  return ray;
}
function radPerPx() {
  const r = canvas.getBoundingClientRect();
  const tanY = Math.tan(camera.fov * DEG / 2);
  return 2 * Math.atan(tanY * camera.aspect) / Math.max(1, r.width);
}
function itemAt(x, y) {
  if (app.mode !== 'home' || !stage.ready || !stage.poweredOn) return null;
  const i = stage.pick(rayAt(x, y));
  return i >= 0 ? app.slots[i] : null;
}
function onTap(x, y) {
  if (app.mode === 'home') {
    const it = itemAt(x, y);
    if (it) views.openPreview(it);
  } else if (app.mode === 'player') {
    if (L.player.classList.contains('calm') || !theater.playing) poke();
    else { L.player.classList.add('calm'); clearTimeout(uiTimer); }
  }
}

function bindInput() {
  canvas.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const now = performance.now();
    if (pointers.size === 1) {
      gesture = { x0: e.clientX, y0: e.clientY, t0: now, tl: now, moved: false, pinch: null, long: false, timer: 0 };
      look.dragging = true;
      look.stopGlide();
      look.anim = null;
      if (app.mode === 'home') {
        gesture.timer = setTimeout(() => {
          const g = gesture;
          if (!g || g.moved || g.pinch) return;
          const it = itemAt(g.x0, g.y0);
          if (!it) return;
          g.long = true;
          const saved = store.toggleSaved(it.id);
          paintScreens();
          views.refresh();
          toast(saved ? `Saved “${it.title}”` : `Removed “${it.title}” from Saved`);
        }, 550);
      }
    } else if (pointers.size === 2 && gesture) {
      clearTimeout(gesture.timer);
      const [a, b] = [...pointers.values()];
      gesture.pinch = { d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: zoom };
      gesture.moved = true;
    }
  });
  canvas.addEventListener('pointermove', e => {
    const p = pointers.get(e.pointerId);
    if (!p || !gesture) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    if (gesture.pinch) {
      if (pointers.size >= 2 && app.mode === 'player') {
        const [a, b] = [...pointers.values()];
        zoom = clamp(gesture.pinch.z0 * gesture.pinch.d0 / (Math.hypot(a.x - b.x, a.y - b.y) || 1), ZOOM_MIN, ZOOM_MAX);
      }
      return;
    }
    const now = performance.now();
    if (!gesture.moved && Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 8) {
      gesture.moved = true;
      clearTimeout(gesture.timer);
      if (app.mode === 'player') poke();
    }
    look.drag(dx, dy, radPerPx(), (now - gesture.tl) / 1000);
    gesture.tl = now;
  });
  const end = (e, cancelled) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    if (pointers.size > 0) return;
    look.dragging = false;
    const g = gesture;
    gesture = null;
    if (!g) return;
    clearTimeout(g.timer);
    if (performance.now() - g.tl > 80 || g.pinch || !look.glide) look.stopGlide();
    if (cancelled || g.long) return;
    if (!g.moved && performance.now() - g.t0 < 500) {
      const p = pendingTap = { x: e.clientX, y: e.clientY };
      // normally the click follows at once; if a browser never sends one, act anyway
      p.timer = setTimeout(() => { if (pendingTap === p) { pendingTap = null; onTap(p.x, p.y); } }, 380);
    }
  };
  canvas.addEventListener('click', () => {
    const p = pendingTap;
    pendingTap = null;
    if (p) { clearTimeout(p.timer); onTap(p.x, p.y); }
  });
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  canvas.addEventListener('pointerup', e => end(e, false));
  canvas.addEventListener('pointercancel', e => end(e, true));
  canvas.addEventListener('lostpointercapture', e => end(e, true));
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    if (e.ctrlKey && app.mode === 'player') { zoom = clamp(zoom * Math.exp(e.deltaY * 0.01), ZOOM_MIN, ZOOM_MAX); return; }
    look.yaw += (e.deltaX || (e.shiftKey ? e.deltaY : 0)) * 0.0025;
    if (!look.usingMotion && !e.shiftKey) look.pitch = clamp(look.pitch - e.deltaY * 0.0025, -85 * DEG, 85 * DEG);
  }, { passive: false });
  document.addEventListener('gesturestart', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault());

  document.addEventListener('keydown', e => {
    if (e.defaultPrevented) return;
    if (views.handleKey(e)) { e.preventDefault(); return; }
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (app.mode === 'intro') {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { skipIntro(); e.preventDefault(); }
      return;
    }
    if (app.overlay) return;
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'ArrowRight') {
      if (tag === 'BUTTON' && e.target.closest('.dock')) return;
      turn(k === 'ArrowLeft' ? -1 : 1); e.preventDefault();
    } else if ((k === 'ArrowUp' || k === 'ArrowDown') && !look.usingMotion) {
      look.anim = { y0: look.yaw, y1: look.yaw, p0: look.pitch, p1: clamp(look.pitch + (k === 'ArrowUp' ? 12 : -12) * DEG, -85 * DEG, 85 * DEG), k: 0, dur: 0.3 };
      e.preventDefault();
    } else if (app.mode === 'home') {
      if ((k === 'Enter' || k === ' ') && tag !== 'BUTTON' && stage.focus >= 0 && app.slots[stage.focus]) { views.openPreview(app.slots[stage.focus]); e.preventDefault(); }
      else if (k === 'Home' || k === 'c') faceRank1();
    } else if (app.mode === 'player') {
      if (k === ' ' && tag !== 'BUTTON') { theater.toggle(); poke(); e.preventDefault(); }
      else if (k === 'Escape' || k === 'Backspace') { exitPlayer(); e.preventDefault(); }
      else if (k === 'f') { theater.faceFront(look.heading()); poke(); }
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (app.mode === 'player' && theater.playing) theater.pause();
      pausePreviews();
    } else {
      last = 0;
      if (app.mode === 'player') { wakeLock(true); poke(); }
      if (app.mode === 'home') playPreview(app.cat);
    }
  });

  theater.onChange = () => { syncPlayButton(); if (app.mode === 'player' && !theater.playing) poke(); };
  theater.onEnded = item => {
    markWatched(item);
    L.player.classList.remove('calm');
    views.showUpNext(item, nextItem(item));
  };
}

/* ------------------------------------------------------------------ screen wake */

let lock = null;
async function wakeLock(on) {
  try {
    if (on) {
      if (!lock && 'wakeLock' in navigator && document.visibilityState === 'visible') {
        lock = await navigator.wakeLock.request('screen');
        lock.addEventListener('release', () => { lock = null; });
      }
    } else if (lock) { const l = lock; lock = null; await l.release(); }
  } catch (e) { /* not allowed here */ }
}

/* ------------------------------------------------------------------ your own videos */

const is360 = r => Math.abs(r - 2) < 0.12, is3D = r => Math.abs(r - 1) < 0.1;

function yoursItem(rec, i) {
  const ratio = rec.w && rec.h ? rec.w / rec.h : 2;
  return {
    id: rec.id, cat: 'yours', rank: i + 1, title: rec.name, creator: 'Added by you',
    comfort: 0, dur: rec.dur || 0, why: 'A video you added. It stays on this device and plays in YOURA’s player.',
    isNew: false, local: true, standin: false, missing: false,
    projection: is360(ratio) || is3D(ratio) ? 'equirect' : 'flat',
    stereo: is3D(ratio),
    src: URL.createObjectURL(rec.blob), poster: rec.poster || ''
  };
}
async function loadYours() {
  const recs = await videos.all();
  app.yours = recs.slice(0, PER_CAT).map(yoursItem);
  renderChips();
  if (store.d.lastCategory === 'yours' && app.yours.length && app.mode === 'home' && app.cat !== 'yours') setCategory('yours', { animate: false });
}
function probeVideo(url) {
  return new Promise(resolve => {
    const v = document.createElement('video');
    v.muted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.preload = 'auto';
    let done = false;
    const finish = r => { if (done) return; done = true; clearTimeout(timer); v.removeAttribute('src'); v.load(); resolve(r); };
    const timer = setTimeout(() => finish(v.videoWidth ? { dur: v.duration, w: v.videoWidth, h: v.videoHeight, poster: '' } : null), 9000);
    v.addEventListener('loadedmetadata', () => {
      try { v.currentTime = Math.min(2, (v.duration || 4) * 0.1); } catch (e) { finish({ dur: v.duration, w: v.videoWidth, h: v.videoHeight, poster: '' }); }
    });
    v.addEventListener('seeked', () => {
      let p = '';
      try {
        const w = v.videoWidth, hgt = v.videoHeight, r = w / hgt;
        const c = document.createElement('canvas'); c.width = 640; c.height = 360;
        const ctx = c.getContext('2d');
        if (is360(r) || is3D(r)) {                       // a 360 frame: take the view straight ahead
          const eyeH = is3D(r) ? hgt / 2 : hgt;
          const sw = w * 100 / 360, sh = eyeH * 56 / 180;
          ctx.drawImage(v, (w - sw) / 2, (eyeH - sh) / 2, sw, sh, 0, 0, 640, 360);
        } else {
          const s = Math.max(640 / w, 360 / hgt);
          ctx.drawImage(v, (640 - w * s) / 2, (360 - hgt * s) / 2, w * s, hgt * s);
        }
        p = c.toDataURL('image/jpeg', 0.82);
      } catch (e) { p = ''; }
      finish({ dur: v.duration, w: v.videoWidth, h: v.videoHeight, poster: p });
    });
    v.addEventListener('error', () => finish(null));
    v.src = url;
  });
}
async function addVideoFile(file) {
  if (!file) return false;
  if (!/^video\//.test(file.type) && !/\.(mp4|m4v|mov|webm)$/i.test(file.name)) { toast('That file isn’t a video.'); return false; }
  if (app.yours.length >= PER_CAT) { toast(`Yours holds ${PER_CAT} videos. Remove one first.`); return false; }
  toast('Adding “' + file.name + '”…', 9000);
  const url = URL.createObjectURL(file);
  const meta = await probeVideo(url);
  URL.revokeObjectURL(url);
  if (!meta) { toast('This browser can’t play that video. Try an H.264 or HEVC MP4.', 5000); return false; }
  const rec = {
    id: 'u-' + Date.now().toString(36),
    name: file.name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim().slice(0, 60) || 'My video',
    blob: file, dur: isFinite(meta.dur) ? meta.dur : 0, w: meta.w, h: meta.h, poster: meta.poster, added: Date.now()
  };
  const kept = await videos.put(rec);
  app.yours.push(yoursItem(rec, app.yours.length));
  renderChips();
  if (app.cat === 'yours') app.refreshSphere();
  toast(kept ? 'Added to Yours.' : 'Added to Yours until you close YOURA (this browser won’t keep it).', 5000);
  return true;
}
app.addVideoFile = addVideoFile;
async function removeVideo(id) {
  const i = app.yours.findIndex(it => it.id === id);
  if (i < 0) return;
  const [it] = app.yours.splice(i, 1);
  try { URL.revokeObjectURL(it.src); } catch (e) { /* ignore */ }
  app.yours.forEach((x, k) => { x.rank = k + 1; });
  await videos.remove(id);
  store.d.saved = store.d.saved.filter(s => s !== id); store.save();
  renderChips();
  if (app.cat === 'yours') { if (app.yours.length) app.refreshSphere(); else setCategory('musician', { animate: false }); }
}
app.removeVideo = removeVideo;
async function resetAll() {
  await videos.clear();
  app.yours.forEach(it => { try { URL.revokeObjectURL(it.src); } catch (e) { /* ignore */ } });
  app.yours = [];
  store.reset();
  look.invert = false; look.glide = !app.reduced;
  look.setPrefer(look.motion === 'on' ? 'motion' : 'touch');
  renderChips();
  setCategory('musician', { animate: false });
  app.refreshSphere();
  syncLook();
  toast('YOURA is reset.');
}
app.resetAll = resetAll;
app.applySettings = () => {
  look.invert = store.s.invert;
  look.glide = store.s.glide && !app.reduced;
  app.refreshSphere();
};

/* ------------------------------------------------------------------ share */

async function share(item) {
  const url = location.href.split('#')[0] + '#v-' + item.id;
  const data = { title: `${item.title} · YOURA`, text: `Look around “${item.title}” on YOURA.`, url };
  try { if (navigator.share) { await navigator.share(data); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
  try { await navigator.clipboard.writeText(url); toast('Link copied'); } catch (e) { toast(url, 6000); }
}
app.share = share;

/* ------------------------------------------------------------------ start */

function start() {
  if (!boot()) return;
  buildHud();
  views = createViews(app);
  app.views = views;
  window.YOURA = app;
  look.prefer = store.s.look === 'touch' ? 'touch' : 'motion';
  look.invert = store.s.invert;
  look.glide = store.s.glide && !app.reduced;
  app.cat = BY_CAT[store.d.lastCategory] ? store.d.lastCategory : 'musician';
  const m = /^#v-([\w-]+)$/.exec(location.hash || '');
  if (m) deepLink = m[1];

  bindInput();
  renderChips();
  loadYours();
  armFirstTap();
  if (store.s.look === 'motion' && HAS_ORIENTATION && !NEEDS_PERMISSION) {
    askMotion().then(ok => { if (!ok) look.setPrefer('touch'); syncLook(); });       // Android and others: no prompt needed
  } else if (!HAS_ORIENTATION) look.prefer = 'touch';

  // the studio and the clip list load while the intro plays
  fetch('assets/video/clips.json').then(r => (r.ok ? r.json() : null)).catch(() => null).then(info => {
    applyClipInfo(info);
    app.slots = slotItems(app.cat);
    paintScreens();
    views.refresh();
  });
  stage.load().then(() => paintScreens()).catch(err => { console.error(err); stage.failed = true; });
  if (document.fonts && document.fonts.load) {
    Promise.all([document.fonts.load('600 42px Jost'), document.fonts.load('500 34px "IBM Plex Mono"')]).then(() => paintScreens()).catch(() => {});
  }

  startIntro(!store.d.introSeen ? 'full' : (store.s.intro || 'short'));
  requestAnimationFrame(frame);
}

start();
