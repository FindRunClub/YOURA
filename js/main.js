// YOURA. The intro, the home sphere and the player share one full-screen WebGL canvas;
// the interface sits on top of it in HTML.
import { createContext, fullscreenBuffer, fitCanvas } from './gl.js';
import { IntroRenderer, INTRO } from './intro.js';
import { Tiles, slotHeading } from './tiles.js';
import { Player } from './player.js';
import { Look } from './look.js';
import { CATEGORIES, BY_CAT, ALL } from './catalog.js';
import { store, videos } from './store.js';
import { h, icon, setIcon, mark, toast, fmtTime } from './ui.js';
import { createViews } from './views.js';
import { warm as warmPosters } from './posters.js';
import { DEG, clamp, wrapPi, norm, add, scale, basisFromQ, smoothstep, easeInOut } from './math.js';

const root = document.getElementById('app');
const HAS_ORIENTATION = typeof window.DeviceOrientationEvent !== 'undefined';
const NEEDS_PERMISSION = HAS_ORIENTATION && typeof DeviceOrientationEvent.requestPermission === 'function';
const TOUCH_DEVICE = (navigator.maxTouchPoints || 0) > 0;
const ZOOM_MIN = 0.72, ZOOM_MAX = 1.4;
const BREAK_AFTER = 20 * 60;
const PER_CAT = 10;           // picks per category on the sphere

const look = new Look();
let canvas, gl, intro, tiles, player, views;
let quality = 1, emaDt = 1 / 60, slowFor = 0, fastFor = 0;
let introT = 0, introEnd = INTRO.T_END, homeBase = INTRO.T_END, homeT = 0, dimK = 0;
let lastView = null;
let zoom = 1;
let lastFocus = -2;
let breakClock = 0;
let deepLink = null;

const app = {
  mode: 'boot',          // 'intro' | 'home' | 'player'
  cat: 'musician',
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

function cats() {
  return app.yours.length ? [...CATEGORIES, { id: 'yours', name: 'Yours' }] : CATEGORIES;
}
function catName(id) { return (cats().find(c => c.id === id) || {}).name || ''; }
function items(cat) { return cat === 'yours' ? app.yours.slice(0, PER_CAT) : (BY_CAT[cat] || []); }
function sphereItems(cat) { return items(cat).map(it => (store.s.hideIntense && it.comfort === 3 ? null : it)); }
function findItem(id) { return ALL.find(it => it.id === id) || app.yours.find(it => it.id === id) || null; }
function nextItem(item) {
  const list = items(item.cat).filter(it => !(store.s.hideIntense && it.comfort === 3));
  if (!list.length) return null;
  const i = list.indexOf(item);
  for (let k = 1; k < list.length; k++) {
    const c = list[(i + k + list.length) % list.length];
    if (!store.isWatched(c.id)) return c;
  }
  return list[(i + 1) % list.length] === item ? null : list[(i + 1) % list.length];
}
Object.assign(app, { cats, catName, items, findItem, nextItem });

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
  gl = createContext(canvas);
  if (!gl) { fallback('This device can’t draw YOURA’s 360° view, because WebGL is off or unavailable.'); return false; }
  try {
    const quad = fullscreenBuffer(gl);
    intro = new IntroRenderer(gl, quad);
    tiles = new Tiles(gl);
    player = new Player(gl, quad);
  } catch (err) {
    console.error(err);
    fallback('YOURA couldn’t start its 360° view on this device.');
    return false;
  }
  canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); toast('The 360° view was interrupted. Reloading…', 4000); });
  canvas.addEventListener('webglcontextrestored', () => location.reload());
  Object.assign(app, { tiles, player });
  tiles.flags = it => ({ watched: store.isWatched(it.id), saved: store.isSaved(it.id), isNew: it.isNew });
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
  E.flash = h('div', { class: 'flash', 'aria-hidden': 'true' });

  // Intro
  E.skip = h('button', { class: 'pill skip', onclick: skipIntro }, 'Skip intro');
  E.introHint = h('div', { class: 'pill hint intro-hint' }, icon('touch', 18), h('span', null, 'Drag to look around'));
  L.intro = h('div', { class: 'layer intro-ui' }, E.introHint, E.skip);

  // Home
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
    E.motionChip,
    E.gaze,
    E.splash,
    h('button', { class: 'round edge left', 'aria-label': 'Turn left', onclick: () => turn(-1) }, icon('left')),
    h('button', { class: 'round edge right', 'aria-label': 'Turn right', onclick: () => turn(1) }, icon('right')),
    h('nav', { class: 'dock', 'aria-label': 'Browse' },
      E.chips,
      h('div', { class: 'tools' },
        h('button', { class: 'tool', onclick: () => views.openList() }, icon('list', 20), h('span', null, 'List')),
        h('button', { class: 'tool', onclick: () => views.openSaved() }, icon('saved', 20), h('span', null, 'Saved')),
        h('button', { class: 'tool', onclick: () => views.openSettings() }, icon('gear', 20), h('span', null, 'Settings')))),
    E.live);

  // Player
  E.pTitle = h('div', { class: 'ptitle' });
  E.pCreator = h('div', { class: 'pcreator' });
  E.pFront = h('button', { class: 'round compass', 'aria-label': 'Face the front of the video', onclick: () => { look.face(0); poke(); } }, needle());
  E.pPlay = h('button', { class: 'round play', 'aria-label': 'Pause', onclick: () => { player.toggle(); poke(); } }, icon('pause'));
  E.pSeek = h('input', { class: 'seek', type: 'range', min: '0', max: '1000', step: '1', value: '0', 'aria-label': 'Position in the video' });
  E.pTime = h('span', { class: 'time' }, '0:00 / 0:00');
  E.pHint = h('div', { class: 'pill hint p-hint' });
  E.pLoading = h('div', { class: 'loading', role: 'status', 'aria-label': 'Loading' }, h('i'));
  E.pError = h('div', { class: 'perror', role: 'alert' });
  L.player = h('div', { class: 'layer player-ui' },
    h('div', { class: 'topbar' },
      h('div', { class: 'pleft' },
        h('button', { class: 'round back', onclick: exitPlayer, 'aria-label': 'Back to the sphere' }, icon('back', 22), h('span', { class: 'wide-only' }, 'Sphere')),
        h('div', { class: 'pmeta' }, E.pTitle, E.pCreator)),
      h('div', { class: 'pright' }, E.pFront, lookButton())),
    E.pLoading, E.pError, E.pHint,
    h('div', { class: 'pbar' }, E.pPlay, E.pSeek, E.pTime));

  root.append(L.intro, L.home, L.player, E.vignette, E.flash);

  let seeking = false;
  const seekTo = () => { player.seek(E.pSeek.value / 1000 * (player.dur || 0)); paintSeek(); };
  E.pSeek.addEventListener('input', () => { seeking = true; seekTo(); poke(); });
  E.pSeek.addEventListener('change', () => { seeking = false; seekTo(); poke(); });
  E.pSeek.addEventListener('pointerup', () => { seeking = false; });
  app.isSeeking = () => seeking;
}

function setLayer(name) {
  for (const [k, el] of Object.entries(L)) el.classList.toggle('on', k === name);
  root.dataset.mode = name;
}

function renderChips() {
  E.chips.innerHTML = '';
  const list = cats();
  list.forEach((c, i) => {
    const b = h('button', {
      class: 'chip', role: 'tab', id: 'chip-' + c.id,
      'aria-selected': String(c.id === app.cat),
      'aria-label': `${c.name}, ${i + 1} of ${list.length}`,
      onclick: () => setCategory(c.id)
    }, c.name);
    E.chips.append(b);
  });
}

function syncChips() {
  for (const b of E.chips.children) b.setAttribute('aria-selected', String(b.id === 'chip-' + app.cat));
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
  const hint = on ? 'Turn your phone to look around' : 'Drag to look around';
  setHint(E.introHint, on ? 'motion' : 'touch', hint);
}
app.syncLook = () => syncLook();

function setHint(el, ic, text) {
  if (el.dataset.text === text) return;
  el.dataset.text = text;
  el.innerHTML = '';
  el.append(icon(ic, 18), h('span', null, text));
}

function splash(text) {
  if (app.reduced) return;
  E.splash.textContent = text;
  E.splash.classList.remove('show');
  void E.splash.offsetWidth;
  E.splash.classList.add('show');
}

function flash(color, mid, { fadeIn = 0.22, fadeOut = 0.7 } = {}) {
  const f = E.flash;
  f.style.background = color;
  f.style.transition = fadeIn ? `opacity ${fadeIn}s ease-in` : 'none';
  f.style.opacity = '1';
  setTimeout(() => {
    if (mid) mid();
    void f.offsetWidth;
    f.style.transition = `opacity ${fadeOut}s ease-out`;
    f.style.opacity = '0';
  }, fadeIn * 1000 + 30);
}

/* ------------------------------------------------------------------ looking around */

let motionAsk = null;
function askMotion() {
  if (look.motion === 'on') return Promise.resolve(true);
  if (!motionAsk) {
    motionAsk = look.enableMotion().finally(() => { motionAsk = null; syncLook(); });
  }
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
    if (!look.usingMotion) look.setPrefer('motion');
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

// After the first launch, iOS still needs a tap before motion can start.
function armMotionTap() {
  const go = () => {
    window.removeEventListener('touchend', go, true);
    window.removeEventListener('click', go, true);
    if (store.s.look !== 'motion' || look.motion === 'on') return;
    askMotion().then(ok => {
      if (!ok && store.s.look === 'motion') look.setPrefer('touch');
      syncLook();
    });
  };
  window.addEventListener('touchend', go, true);
  window.addEventListener('click', go, true);
}

function turn(dir) { look.turn(dir * 36 * DEG, app.reduced ? 0.01 : 0.45); }

function faceRank1() {
  look.face(tiles.layout, { duration: app.reduced ? 0.01 : 0.7 });
}

function faceItem(item, { instant = false } = {}) {
  const i = tiles.items.indexOf(item);
  if (i < 0) return;
  const heading = tiles.layout + slotHeading(i);
  if (instant) { look.yaw += wrapPi(heading - look.heading()); if (!look.usingMotion) look.pitch = 0; look.stopGlide(); look.anim = null; }
  else look.face(heading, { duration: app.reduced ? 0.01 : 0.7 });
}
app.faceItem = faceItem;

/* ------------------------------------------------------------------ flow */

function startIntro(kind) {
  views.closeAll();
  app.mode = 'intro';
  setLayer('intro');
  look.recenter(0);
  syncLook();
  if (kind === 'off') {
    E.flash.style.transition = 'none'; E.flash.style.background = '#000'; E.flash.style.opacity = '1';
    introT = INTRO.T_LAND + 1.2;
    enterHome(INTRO.T_LAND + 1.2);
    flash('#000', null, { fadeIn: 0, fadeOut: 0.8 });
    return;
  }
  introT = kind === 'short' ? INTRO.T_SW - 1.7 : 0;
  introEnd = kind === 'short' ? INTRO.T_LAND + 2.6 : INTRO.T_END;
  E.skip.classList.remove('show');
  setTimeout(() => E.skip.classList.add('show'), 900);
  E.introHint.classList.remove('show');
  setTimeout(() => { if (app.mode === 'intro') E.introHint.classList.add('show'); }, 1400);
  setTimeout(() => E.introHint.classList.remove('show'), 6400);
}
app.replayIntro = () => startIntro('full');

function skipIntro() {
  if (app.mode !== 'intro') return;
  if (introT < INTRO.T_LAND) {
    // cut through the white dot
    E.skip.classList.remove('show');
    flash('#fff', () => { if (app.mode === 'intro') { introT = INTRO.T_LAND + 1.2; enterHome(introT); } }, { fadeIn: 0.22, fadeOut: 0.8 });
  } else {
    enterHome(introT);
  }
}

function enterHome(base) {
  if (app.mode === 'intro') {
    // The intro tilts the camera 3 degrees up on the planet; hand that to the viewer's own look so nothing jumps.
    const st = INTRO.state(introT);
    if (st.world === 1 && !look.usingMotion) { look.pitch = clamp(look.pitch + st.pitch, -85 * DEG, 85 * DEG); look.yaw -= st.yaw; }
  }
  app.mode = 'home';
  homeBase = base; homeT = 0; dimK = app.reduced ? 1 : 0;
  if (!store.d.introSeen) { store.d.introSeen = true; store.save(); }
  setLayer('home');
  syncLook();
  if (!cats().some(c => c.id === app.cat)) app.cat = 'musician';
  tiles.setItems(sphereItems(app.cat), look.heading(), { animate: false });
  tiles.rise = app.reduced ? 1 : 0;
  renderChips();
  lastFocus = -2;
  setTimeout(() => {
    if (app.mode !== 'home') return;
    if (!store.d.firstRunDone) views.showFirstRun();
    else openDeepLink();
  }, app.reduced ? 200 : 1300);
  setTimeout(() => warmPosters(items(app.cat)), 2500);
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

function setCategory(id, { animate = true } = {}) {
  if (!cats().some(c => c.id === id)) id = 'musician';
  const changed = id !== app.cat;
  app.cat = id;
  store.d.lastCategory = id; store.save();
  if (app.mode === 'home' || app.mode === 'player') {
    tiles.setItems(sphereItems(id), look.heading(), { animate: animate && changed && !app.reduced && app.mode === 'home' });
    lastFocus = -2;
  }
  syncChips();
  if (changed && animate && app.mode === 'home') splash(catName(id));
  if (changed) setTimeout(() => warmPosters(items(id)), 1200);
}
app.setCategory = setCategory;
app.refreshSphere = () => { tiles.setItems(sphereItems(app.cat), tiles.layout, { animate: false }); lastFocus = -2; };
app.refreshTile = item => { const i = tiles.items.indexOf(item); if (i >= 0) tiles.drawCell(i); };

// Called from a tap (Watch, Play now). Video needs that tap on iOS.
function watch(item, { skipHeadsUp = false } = {}) {
  if (!item) return;
  if (item.comfort === 3 && store.s.headsUp && !skipHeadsUp) { views.showHeadsUp(item); return; }
  views.closeAll();
  app.mode = 'player';
  app.playing = item;
  zoom = 1;
  player.open(item);
  if (store.s.recenter) look.recenter(0);
  setLayer('player');
  E.pTitle.textContent = item.title;
  E.pCreator.textContent = item.creator;
  syncPlayButton();
  E.pError.classList.remove('on');
  syncLook();
  poke();
  firstPlayHint();
  wakeLock(true);
}
app.watch = watch;

function exitPlayer() {
  const item = app.playing;
  views.hideUpNext();
  player.close();
  wakeLock(false);
  app.playing = null;
  app.mode = 'home';
  dimK = 1;
  setLayer('home');
  syncLook();
  if (item) {
    if (item.cat !== app.cat && cats().some(c => c.id === item.cat)) setCategory(item.cat, { animate: false });
    tiles.redrawAll();
    faceItem(item, { instant: true });
  }
  lastFocus = -2;
}
app.exitPlayer = exitPlayer;

function markWatched(item) {
  if (item && store.markWatched(item.id)) app.refreshTile(item);
}

/* ------------------------------------------------------------------ player HUD */

let uiTimer = 0;
function poke() {
  L.player.classList.remove('calm');
  clearTimeout(uiTimer);
  uiTimer = setTimeout(() => {
    if (app.mode === 'player' && player.playing && !app.isSeeking() && !app.overlay) L.player.classList.add('calm');
  }, 3000);
}

function syncPlayButton() {
  const playing = player.playing;
  setIcon(E.pPlay, playing ? 'pause' : 'play');
  E.pPlay.setAttribute('aria-label', playing ? 'Pause' : 'Play');
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
  const d = player.dur || 0, t = player.time();
  const p = d ? clamp(t / d, 0, 1) : 0;
  E.pSeek.style.setProperty('--p', (p * 100).toFixed(2) + '%');
  const text = `${fmtTime(t)} / ${fmtTime(d)}`;
  if (E.pTime.textContent !== text) E.pTime.textContent = text;
}

function updatePlayerHud(dt) {
  const d = player.dur || 0, t = player.time();
  if (!app.isSeeking()) E.pSeek.value = String(d ? Math.round(t / d * 1000) : 0);
  paintSeek();
  E.pFront.querySelector('.needle').style.transform = `rotate(${(wrapPi(0 - look.heading()) / DEG).toFixed(1)}deg)`;
  E.pLoading.classList.toggle('on', player.mode === 'video' && (player.loading || !player.hasFrame) && !player.error);
  if (player.error && !E.pError.classList.contains('on')) { E.pError.textContent = player.error; E.pError.classList.add('on'); }
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

function govern(dt) {
  emaDt = emaDt * 0.9 + dt * 0.1;
  if (emaDt > 1 / 40) { slowFor += dt; fastFor = 0; }
  else if (emaDt < 1 / 56) { fastFor += dt; slowFor = 0; }
  else { slowFor = 0; fastFor = 0; }
  if (slowFor > 1.2 && quality > 0.5) { quality = Math.max(0.5, quality * 0.85); slowFor = 0; }
  if (fastFor > 6 && quality < 1) { quality = Math.min(1, quality / 0.9); fastFor = 0; }
}

function playerTan(aspect) {
  const t = INTRO.TAN_MIN * zoom;
  let tx, ty;
  if (aspect >= 1) { ty = t; tx = t * aspect; } else { tx = t; ty = t / aspect; }
  const cap = 1.7;
  if (Math.max(tx, ty) > cap) { const k = cap / Math.max(tx, ty); tx *= k; ty *= k; }
  return [tx, ty];
}

let last = 0, vig = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = last ? Math.min(0.1, Math.max(0, (now - last) / 1000)) : 1 / 60;
  last = now;
  govern(dt);
  look.update(dt);
  const { pw, ph } = fitCanvas(canvas, 2 * quality, 3.2e6 * quality * quality);

  if (app.mode === 'intro') {
    introT += dt;
    lastView = intro.draw(introT, look.quat(), pw, ph, { dim: 0, scripted: true, reduced: app.reduced });
    if (introT >= introEnd) enterHome(introT);
  } else if (app.mode === 'home') {
    homeT += dt;
    dimK = Math.min(1, dimK + dt / 1.6);
    lastView = intro.draw(homeBase + homeT, look.quat(), pw, ph, { dim: easeInOut(dimK), scripted: false, reduced: app.reduced });
    tiles.update(dt, lastView.B.F);
    tiles.draw(lastView.B, lastView.tan, now / 1000);
    updateHomeHud();
  } else if (app.mode === 'player') {
    player.update(dt);
    const B = basisFromQ(look.quat());
    const tan = playerTan(pw / ph);
    player.draw(B, tan, pw, ph);
    lastView = { B, tan };
    updatePlayerHud(dt);
  }

  const v = store.s.vignette && app.mode !== 'intro' && !look.usingMotion ? smoothstep(1.2, 3.6, look.spinSpeed()) : 0;
  if (Math.abs(v - vig) > 0.01) { vig = v; E.vignette.style.opacity = v.toFixed(3); }

  if (store.s.breaks && app.mode !== 'intro' && !document.hidden) {
    breakClock += dt;
    if (breakClock > BREAK_AFTER) { breakClock = 0; toast('Twenty minutes of looking around. A short break helps your eyes and neck.', 6000); }
  }
}

function updateHomeHud() {
  const rel = wrapPi(tiles.layout - look.heading()) / DEG;
  E.compass.querySelector('.needle').style.transform = `rotate(${rel.toFixed(1)}deg)`;
  E.compass.classList.toggle('ahead', Math.abs(rel) < 12);
  if (tiles.focus !== lastFocus) {
    lastFocus = tiles.focus;
    E.gaze.classList.toggle('on', tiles.focus >= 0);
    const it = tiles.focus >= 0 ? tiles.items[tiles.focus] : null;
    if (it && !app.overlay) E.live.textContent = `${String(it.rank).padStart(2, '0')}. ${it.title}`;
  }
}

/* ------------------------------------------------------------------ input */

const pointers = new Map();
let gesture = null;

function rayAt(x, y) {
  const r = canvas.getBoundingClientRect();
  const nx = (x - r.left) / r.width * 2 - 1, ny = 1 - (y - r.top) / r.height * 2;
  const { B, tan } = lastView;
  return norm(add(add(B.F, scale(B.R, nx * tan[0])), scale(B.U, ny * tan[1])));
}

function radPerPx() {
  const r = canvas.getBoundingClientRect();
  const tan = lastView ? lastView.tan : [0.6, 0.6];
  return 2 * Math.atan(tan[0]) / Math.max(1, r.width);
}

function tileAt(x, y) {
  if (app.mode !== 'home' || !lastView) return null;
  const i = tiles.pick(rayAt(x, y));
  return i >= 0 ? tiles.items[i] : null;
}

function onTap(x, y) {
  if (app.mode === 'home') {
    const it = tileAt(x, y);
    if (it) views.openPreview(it);
  } else if (app.mode === 'player') {
    if (L.player.classList.contains('calm') || !player.playing) poke();
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
          const it = tileAt(g.x0, g.y0);
          if (!it) return;
          g.long = true;
          const saved = store.toggleSaved(it.id);
          app.refreshTile(it);
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
        const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        zoom = clamp(gesture.pinch.z0 * gesture.pinch.d0 / d, ZOOM_MIN, ZOOM_MAX);
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
    if (!g.moved && performance.now() - g.t0 < 500) onTap(e.clientX, e.clientY);
  };
  canvas.addEventListener('pointerup', e => end(e, false));
  canvas.addEventListener('pointercancel', e => end(e, true));
  canvas.addEventListener('lostpointercapture', e => end(e, true));

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    if (e.ctrlKey && app.mode === 'player') { zoom = clamp(zoom * Math.exp(e.deltaY * 0.01), ZOOM_MIN, ZOOM_MAX); return; }
    look.yaw += (e.deltaX || (e.shiftKey ? e.deltaY : 0)) * 0.0025;
    if (!look.usingMotion && !e.shiftKey) look.pitch = clamp(look.pitch - e.deltaY * 0.0025, -85 * DEG, 85 * DEG);
  }, { passive: false });

  // stop iOS from zooming the page
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
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'ArrowRight') {
      if (tag === 'BUTTON' && e.target.closest('.dock')) return;
      turn(k === 'ArrowLeft' ? -1 : 1); e.preventDefault();
    } else if ((k === 'ArrowUp' || k === 'ArrowDown') && !look.usingMotion) {
      look.anim = { y0: look.yaw, y1: look.yaw, p0: look.pitch, p1: clamp(look.pitch + (k === 'ArrowUp' ? 12 : -12) * DEG, -85 * DEG, 85 * DEG), k: 0, dur: 0.3 };
      e.preventDefault();
    } else if (app.mode === 'home') {
      if ((k === 'Enter' || k === ' ') && tag !== 'BUTTON' && tiles.focus >= 0) { views.openPreview(tiles.items[tiles.focus]); e.preventDefault(); }
      else if (k === 'Home' || k === 'c') faceRank1();
    } else if (app.mode === 'player') {
      if (k === ' ' && tag !== 'BUTTON') { player.toggle(); poke(); e.preventDefault(); }
      else if (k === 'Escape' || k === 'Backspace') { exitPlayer(); e.preventDefault(); }
      else if (k === 'f') { look.face(0); poke(); }
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (app.mode === 'player' && player.playing) { player.pause(); app.pausedByHide = true; }
    } else {
      last = 0;
      if (app.mode === 'player') { wakeLock(true); poke(); }
    }
  });

  player.onChange = () => { syncPlayButton(); if (app.mode === 'player' && !player.playing) poke(); };
  player.onEnded = item => {
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
    } else if (lock) {
      const l = lock; lock = null; await l.release();
    }
  } catch (e) { /* not allowed here */ }
}

/* ------------------------------------------------------------------ your own videos */

function yoursItem(rec, i) {
  const item = {
    id: rec.id, cat: 'yours', rank: i + 1, title: rec.name, creator: 'Added by you',
    kind: 5, c: ['#3B0A16', '#E8536C', '#E11737'], speed: 1, seed: 0.5,
    comfort: 0, dur: rec.dur || 0, why: 'A video you added. It stays on this device and plays in YOURA’s 360° player.',
    isNew: false, threeD: !!rec.stereo, stereo: !!rec.stereo, demo: false, local: true,
    src: URL.createObjectURL(rec.blob), poster: rec.poster || '', posterImg: null
  };
  if (rec.poster) {
    const img = new Image();
    img.onload = () => { if (app.cat === 'yours' && tiles) tiles.redrawAll(); };
    img.src = rec.poster;
    item.posterImg = img;
  }
  return item;
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
      let poster = '';
      try {
        const w = v.videoWidth, hgt = v.videoHeight;
        const eyeH = hgt >= w * 0.9 ? hgt / 2 : hgt;                 // over-under 3D: use the top (left eye)
        const sw = w * 100 / 360, sh = eyeH * 56 / 180;               // about 100 by 56 degrees around the front
        const c = document.createElement('canvas'); c.width = 512; c.height = 288;
        c.getContext('2d').drawImage(v, (w - sw) / 2, (eyeH - sh) / 2, sw, sh, 0, 0, 512, 288);
        poster = c.toDataURL('image/jpeg', 0.82);
      } catch (e) { poster = ''; }
      finish({ dur: v.duration, w: v.videoWidth, h: v.videoHeight, poster });
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
  const ratio = meta.w / meta.h;
  const rec = {
    id: 'u-' + Date.now().toString(36),
    name: file.name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim().slice(0, 60) || 'My 360 video',
    blob: file, dur: isFinite(meta.dur) ? meta.dur : 0, w: meta.w, h: meta.h,
    stereo: Math.abs(ratio - 1) < 0.12, poster: meta.poster, added: Date.now()
  };
  const kept = await videos.put(rec);
  app.yours.push(yoursItem(rec, app.yours.length));
  renderChips();
  if (app.cat === 'yours') app.refreshSphere();
  const shape = Math.abs(ratio - 2) < 0.15 || Math.abs(ratio - 1) < 0.12 ? '' : ' It isn’t 2:1, so it may look stretched.';
  toast((kept ? 'Added to Yours.' : 'Added to Yours until you close YOURA (this browser won’t keep it).') + shape, 5000);
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
  app.cat = 'musician';
  renderChips();
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
  const data = { title: `${item.title} · YOURA`, text: `Look around “${item.title}” in 360° on YOURA.`, url };
  try {
    if (navigator.share) { await navigator.share(data); return; }
  } catch (e) {
    if (e && e.name === 'AbortError') return;
  }
  try { await navigator.clipboard.writeText(url); toast('Link copied'); }
  catch (e) { toast(url, 6000); }
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

  if (store.s.look === 'motion' && HAS_ORIENTATION) {
    if (!NEEDS_PERMISSION) {
      // Android and others: no prompt, so start right away.
      askMotion().then(ok => { if (!ok) look.setPrefer('touch'); syncLook(); });
    } else if (store.d.firstRunDone) {
      armMotionTap();
    }
  } else if (!HAS_ORIENTATION) {
    look.prefer = 'touch';
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { if (tiles) tiles.redrawAll(); });
    Promise.all([document.fonts.load('500 25px Jost'), document.fonts.load('500 28px "IBM Plex Mono"')]).then(() => tiles.redrawAll()).catch(() => {});
  }

  const kind = !store.d.introSeen ? 'full' : (store.s.intro || 'short');
  startIntro(kind);
  requestAnimationFrame(frame);
}

start();
