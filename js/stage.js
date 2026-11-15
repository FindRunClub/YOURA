// The home screen: YOURA's film studio.
// The stage itself is a path-traced 360-degree picture (see tools/render/studio.py), stored as one image per
// set of lights. Because light simply adds up, the app can fade, tint and flicker each set live:
// house lights, film lights, the wash on the cyclorama, the neon sign, and the glow of each video screen.
// The five screens are real rectangles in that space, showing live video.
import * as THREE from 'three';
import { clamp } from './math.js';

const DIR = 'assets/studio/';
const TILE_W = 640, TILE_H = 360;           // one screen's preview inside a category's atlas video (3 x 2 tiles)
const COLS = 3, ROWS = 2;

const SKY_VERT = /* glsl */`
varying vec3 vDir;
void main(){
  vDir = position;
  gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * position * 20.0, 1.0);
}`;

const SKY_FRAG = /* glsl */`
precision highp float;
uniform samplerCube tBase, tA, tB, tC;
uniform vec3 cBase, cNeon, cBeam, cWallA, cWallB, cDot;
uniform vec3 cScr[5];
uniform float uWallOn, uHot;
varying vec3 vDir;
vec3 dec(vec3 t){ return pow(t, vec3(2.2)); }
float hot(float t){ return 1.0 + uHot * smoothstep(0.82, 1.0, t); }    // lamps were clipped at white when stored: give them back their punch
void main(){
  vec3 d = normalize(vDir);
  float az = atan(d.x, -d.z);
  vec3 base = textureCube(tBase, d).rgb;
  vec3 a = textureCube(tA, d).rgb;
  vec3 b = textureCube(tB, d).rgb;
  vec3 c = textureCube(tC, d).rgb;
  vec3 col = base * cBase * hot(max(base.r, max(base.g, base.b)));
  col += dec(vec3(a.r)) * cNeon * hot(a.r);
  col += dec(vec3(a.g)) * cBeam * hot(a.g);
  // the wash comes up from the middle of the cyclorama outward, in two colours left and right
  float lit = 1.0 - smoothstep(uWallOn * 2.0 - 0.35, uWallOn * 2.0, abs(az));
  col += dec(vec3(a.b)) * mix(cWallA, cWallB, smoothstep(-1.1, 1.1, az)) * lit;
  col += dec(vec3(b.r)) * cDot;
  col += dec(vec3(b.g)) * cScr[0] + dec(vec3(b.b)) * cScr[1];
  col += dec(vec3(c.r)) * cScr[2] + dec(vec3(c.g)) * cScr[3] + dec(vec3(c.b)) * cScr[4];
  gl_FragColor = vec4(col, 1.0);
}`;

const SCREEN_VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

const SCREEN_FRAG = /* glsl */`
precision highp float;
uniform sampler2D tVideo, tNext, tOver, tMatte;
uniform vec4 uRect, uRectNext;          // this screen's tile inside the atlas video: x, y, w, h
uniform vec4 uOverRect, uMatteRect;
uniform float uOn, uFocus, uGain, uTime, uSwap, uSeed, uHasVideo, uHasNext, uAspect, uDim;
varying vec2 vUv;
float h21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 dec(vec3 t){ return pow(t, vec3(2.2)); }
void main(){
  vec2 uv = vUv;
  // switching category: the picture tears sideways in bands and the new one cuts in
  float band = floor(uv.y * 14.0);
  float tear = (h21(vec2(band, floor(uTime * 24.0) + uSeed)) - 0.5) * 0.35 * sin(uSwap * 3.14159);
  vec2 tuv = vec2(fract(uv.x + tear), uv.y);
  float cut = step(h21(vec2(band * 3.1, uSeed)), uSwap);
  vec3 vOld = dec(texture2D(tVideo, uRect.xy + tuv * uRect.zw).rgb) * uHasVideo;
  vec3 vNew = dec(texture2D(tNext, uRectNext.xy + tuv * uRectNext.zw).rgb) * uHasNext;
  vec3 v = mix(vOld, vNew, cut);
  // powering on: a bright line opens into the picture, with a little snow
  float open = smoothstep(0.0, 0.55, uOn);
  float line = smoothstep(open * 0.5 + 0.004, open * 0.5, abs(uv.y - 0.5));
  float snow = h21(uv * vec2(640.0, 360.0) + fract(uTime) * 91.0);
  v = mix(vec3(snow * 0.5), v, smoothstep(0.45, 1.0, uOn)) * line;
  v += vec3(0.9) * (1.0 - smoothstep(0.0, 0.25, uOn)) * smoothstep(0.012, 0.0, abs(uv.y - 0.5)) * step(0.001, uOn);
  // the lower third: number, title and badges
  vec4 ov = texture2D(tOver, uOverRect.xy + uv * uOverRect.zw);
  v = v * (1.0 - ov.a) + dec(ov.rgb / max(ov.a, 1e-4)) * ov.a * 0.9;
  v *= mix(uDim, 1.0, uFocus);
  // a red frame when you are looking at it
  vec2 e2 = min(uv, 1.0 - uv) * vec2(uAspect, 1.0);
  float e = min(e2.x, e2.y);
  v += vec3(1.0, 0.07, 0.17) * smoothstep(0.014, 0.006, e) * uFocus * 2.2;
  // a faint LED scan texture so it reads as a wall of light, not a flat picture
  v *= 0.96 + 0.04 * sin(uv.y * 360.0 * 3.14159);
  float m = texture2D(tMatte, uMatteRect.xy + uv * uMatteRect.zw).r;
  float lit = m * step(0.001, uOn);
  gl_FragColor = vec4(v * uGain * lit, 0.7 * lit * smoothstep(0.3, 1.0, uOn));
}`;

// Looks for each category: the colour of the cyclorama (left and right) and of the film lights.
export const MOODS = {
  musician: { wallA: [0.95, 0.08, 0.62], wallB: [0.22, 0.12, 1.0], beam: [0.75, 0.82, 1.0] },
  athlete: { wallA: [0.05, 0.42, 1.0], wallB: [0.0, 0.85, 0.9], beam: [1.0, 0.98, 0.95] },
  character: { wallA: [1.0, 0.36, 0.06], wallB: [0.85, 0.1, 0.16], beam: [1.0, 0.8, 0.58] },
  yours: { wallA: [0.55, 0.55, 0.6], wallB: [0.3, 0.34, 0.45], beam: [1.0, 0.95, 0.9] }
};
// How bright each set of lights is in the finished look (1 = as rendered).
const LEVEL = { base: 0.34, neon: 0.46, dot: 1.3, beam: 0.065, wall: 0.056, scr: 0.5 };

function loadCube(name, faces, srgb) {
  return new Promise((resolve, reject) => {
    const t = new THREE.CubeTextureLoader().load(faces.map(f => `${DIR}${name}_${f}.jpg`), () => resolve(t), undefined, reject);
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.generateMipmaps = !!srgb;
    t.minFilter = srgb ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
  });
}
function loadTex(url) {
  return new Promise((resolve, reject) => { const t = new THREE.TextureLoader().load(url, () => resolve(t), undefined, reject); });
}

export class Stage {
  constructor() {
    this.scene = new THREE.Scene();
    this.ready = false;
    this.screens = [];            // { mesh, mat, c, right, up, n, hw, hh }
    this.on = { base: 0, neon: 0, dot: 0, beam: 0, wall: 0, scr: [0, 0, 0, 0, 0], wallSweep: 0 };
    this.mood = { wallA: new THREE.Color(...MOODS.musician.wallA), wallB: new THREE.Color(...MOODS.musician.wallB), beam: new THREE.Color(...MOODS.musician.beam) };
    this.moodTo = { wallA: this.mood.wallA.clone(), wallB: this.mood.wallB.clone(), beam: this.mood.beam.clone() };
    this.screenColor = [0, 1, 2, 3, 4].map(() => new THREE.Color(0.2, 0.2, 0.22));
    this.focus = -1;
    this.focusAmt = [0, 0, 0, 0, 0];
    this.dim = 1;                 // 1 = normal, lower while a sheet or the player is over the stage
    this.seq = null;              // the power-on sequence, while it runs
    this.swap = 1;                // 0..1 while a category switch is tearing the pictures over
    this.video = null; this.nextVideo = null;
    this.flicker = 1;
    this.time = 0;
    this._probe = document.createElement('canvas');
    this._probe.width = COLS * 8; this._probe.height = ROWS * 6;
    this._pctx = this._probe.getContext('2d', { willReadFrequently: true });
    this._probeT = 0;
    this.overlay = document.createElement('canvas');
    this.overlay.width = COLS * TILE_W; this.overlay.height = ROWS * TILE_H;
    this.octx = this.overlay.getContext('2d');
  }

  async load(onProgress) {
    const info = this.info = await (await fetch(DIR + 'studio.json')).json();
    const faces = info.faces;
    let done = 0;
    const tick = p => p.then(v => { done++; if (onProgress) onProgress(done / 5); return v; });
    const [base, a, b, c, matte] = await Promise.all([
      tick(loadCube('base', faces, true)), tick(loadCube('a', faces)), tick(loadCube('b', faces)), tick(loadCube('c', faces)),
      tick(info.matte ? loadTex(DIR + 'mattes.jpg') : Promise.resolve(null))
    ]);
    this.env = base;
    const g = info.gain;
    this.gain = g;
    const neonTint = info.tint && info.tint.neon ? info.tint.neon : [1, 0.035, 0.07];
    this.neonTint = new THREE.Color(...neonTint);
    const U = this.skyU = {
      tBase: { value: base }, tA: { value: a }, tB: { value: b }, tC: { value: c },
      cBase: { value: new THREE.Vector3() }, cNeon: { value: new THREE.Vector3() }, cBeam: { value: new THREE.Vector3() },
      cWallA: { value: new THREE.Vector3() }, cWallB: { value: new THREE.Vector3() }, cDot: { value: new THREE.Vector3() },
      cScr: { value: [0, 1, 2, 3, 4].map(() => new THREE.Vector3()) }, uWallOn: { value: 0 }, uHot: { value: 1.6 }
    };
    const sky = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.ShaderMaterial({
      vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, uniforms: U, side: THREE.BackSide, depthTest: false, depthWrite: false
    }));
    sky.frustumCulled = false;
    sky.renderOrder = -10;
    this.scene.add(sky);

    // screens
    const white = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1); white.needsUpdate = true;
    const black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); black.needsUpdate = true;
    this.black = black;
    this.overTex = new THREE.CanvasTexture(this.overlay);
    this.overTex.colorSpace = THREE.NoColorSpace;
    this.overTex.premultiplyAlpha = true;
    if (matte) { matte.colorSpace = THREE.NoColorSpace; matte.generateMipmaps = true; }
    info.layout.screens.forEach((s, i) => {
      const c = new THREE.Vector3(...s.center), right = new THREE.Vector3(...s.right), up = new THREE.Vector3(...s.up);
      const n = new THREE.Vector3().crossVectors(right, up).normalize();        // toward the viewer
      const col = i % COLS, row = Math.floor(i / COLS);
      const rect = new THREE.Vector4(col / COLS, 1 - (row + 1) / ROWS, 1 / COLS, 1 / ROWS);
      const mat = new THREE.ShaderMaterial({
        vertexShader: SCREEN_VERT, fragmentShader: SCREEN_FRAG, depthTest: false, depthWrite: false, transparent: true,
        blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
        uniforms: {
          tVideo: { value: black }, tNext: { value: black }, tOver: { value: this.overTex }, tMatte: { value: matte || white },
          uRect: { value: rect.clone() }, uRectNext: { value: rect.clone() }, uOverRect: { value: rect.clone() },
          uMatteRect: { value: matte ? rect.clone() : new THREE.Vector4(0, 0, 1, 1) },
          uOn: { value: 0 }, uFocus: { value: 0 }, uGain: { value: 1.5 }, uTime: { value: 0 }, uSwap: { value: 0 }, uSeed: { value: i * 7.13 },
          uHasVideo: { value: 0 }, uHasNext: { value: 0 }, uAspect: { value: s.width / s.height }, uDim: { value: 0.62 }
        }
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(s.width, s.height), mat);
      mesh.position.copy(c).addScaledVector(n, 0.01);
      mesh.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, up, n));
      mesh.frustumCulled = false;
      mesh.renderOrder = 5;
      this.scene.add(mesh);
      this.screens.push({ mesh, mat, c, right, up, n, hw: s.width / 2, hh: s.height / 2, dir: c.clone().normalize() });
    });
    // the white dot of the sign: its glow on the wall is in the picture; the lamp itself is drawn here, bright
    const em = info.layout.emblem;
    if (em) {
      this.dotMat = new THREE.MeshBasicMaterial({ color: 0x000000, depthTest: false, depthWrite: false });
      const dot = new THREE.Mesh(new THREE.SphereGeometry(em.dot * 0.96, 32, 16), this.dotMat);
      dot.position.set(...em.center);
      dot.renderOrder = 2;
      this.scene.add(dot);
    }
    this._dust();
    this.ready = true;
  }

  // Motes of dust drifting through the light: a small thing that makes the air feel real.
  _dust() {
    const N = 260;
    const pos = new Float32Array(N * 3), seed = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (Math.random() - 0.5) * Math.PI * 1.5, r = 1.2 + Math.random() * 4.2;
      pos[i * 3] = Math.sin(a) * r; pos[i * 3 + 1] = -1.2 + Math.random() * 3.4; pos[i * 3 + 2] = -Math.cos(a) * r;
      seed[i] = Math.random();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    this.dustU = { uTime: { value: 0 }, uLevel: { value: 0 }, uScale: { value: 1 } };
    const m = new THREE.ShaderMaterial({
      uniforms: this.dustU, depthTest: false, depthWrite: false, transparent: true, blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */`
        attribute float aSeed; uniform float uTime, uScale; varying float vA;
        void main(){
          vec3 p = position;
          p.x += sin(uTime * 0.11 + aSeed * 40.0) * 0.25;
          p.y += sin(uTime * 0.07 + aSeed * 71.0) * 0.2 + mod(uTime * 0.012 * (0.5 + aSeed), 0.6);
          p.z += cos(uTime * 0.09 + aSeed * 23.0) * 0.25;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, uScale * (0.8 + aSeed * 1.6) / max(-mv.z, 0.5));
          vA = (0.3 + 0.7 * sin(uTime * 0.6 + aSeed * 90.0)) * smoothstep(0.7, 2.0, -mv.z);
        }`,
      fragmentShader: /* glsl */`
        precision highp float; uniform float uLevel; varying float vA;
        void main(){ float d = length(gl_PointCoord - 0.5); gl_FragColor = vec4(vec3(1.0, 0.95, 0.88) * smoothstep(0.5, 0.0, d) * vA * uLevel, 1.0); }`
    });
    const pts = new THREE.Points(g, m);
    pts.frustumCulled = false;
    pts.renderOrder = 8;
    this.scene.add(pts);
  }

  setMood(name, instant) {
    const m = MOODS[name] || MOODS.yours;
    this.moodTo.wallA.setRGB(...m.wallA); this.moodTo.wallB.setRGB(...m.wallB); this.moodTo.beam.setRGB(...m.beam);
    if (instant) { this.mood.wallA.copy(this.moodTo.wallA); this.mood.wallB.copy(this.moodTo.wallB); this.mood.beam.copy(this.moodTo.beam); }
  }

  // Everything off, as you arrive.
  dark() {
    Object.assign(this.on, { base: 0, neon: 0, dot: 0, beam: 0, wall: 0, wallSweep: 0 });
    this.on.scr = [0, 0, 0, 0, 0];
    this.seq = null;
  }

  // Lights up: house lights, the sign, the wash, the film lights, then the screens one by one.
  powerOn(fast) {
    this.seq = { t: fast ? 6 : 0 };
    if (fast) this._runSeq(0);
  }

  get poweredOn() { return !this.seq; }

  _runSeq(dt) {
    const s = this.seq;
    s.t += dt;
    const t = s.t;
    const ramp = (a, b) => clamp((t - a) / (b - a), 0, 1);
    const stutter = (a, b) => { const k = ramp(a, b); return k >= 1 ? 1 : k <= 0 ? 0 : (Math.sin(k * 37.0) > -0.2 ? k : k * 0.25); };
    this.on.base = ramp(0.15, 1.6) ** 2;
    this.on.neon = stutter(0.7, 1.5);
    this.on.dot = ramp(1.35, 1.75);
    this.on.wallSweep = ramp(1.2, 2.9);
    this.on.wall = ramp(1.2, 1.9);
    this.on.beam = stutter(1.9, 2.6);
    const order = [2, 1, 3, 0, 4];
    order.forEach((i, k) => { this.on.scr[i] = ramp(2.3 + k * 0.22, 3.1 + k * 0.22); });
    if (t > 4.3) { this.seq = null; this.on.wallSweep = 1; }
  }

  // The atlas video that feeds the five screens (3 x 2 tiles). Switching runs a short tear-and-cut.
  setVideo(video, animate) {
    const tex = video ? this._videoTex(video) : null;
    if (animate && this.video) {
      this.nextVideo = video; this.nextTex = tex; this.swap = 0;
      for (const s of this.screens) { s.mat.uniforms.tNext.value = tex || this.black; s.mat.uniforms.uHasNext.value = tex ? 1 : 0; }
    } else {
      this._adopt(video, tex);
      this.swap = 1;
    }
  }

  _videoTex(video) {
    if (video._tex) return video._tex;
    const t = new THREE.VideoTexture(video);
    t.colorSpace = THREE.NoColorSpace;
    t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = false;
    video._tex = t;
    return t;
  }

  _adopt(video, tex) {
    this.video = video; this.videoTex = tex;
    for (const s of this.screens) {
      s.mat.uniforms.tVideo.value = tex || this.black; s.mat.uniforms.uHasVideo.value = tex ? 1 : 0;
      s.mat.uniforms.tNext.value = this.black; s.mat.uniforms.uHasNext.value = 0; s.mat.uniforms.uSwap.value = 0;
    }
    this.nextVideo = null; this.nextTex = null;
  }

  // Lower thirds and badges for the five screens. draw(ctx, i, w, h) paints tile i.
  paintOverlay(draw) {
    const ctx = this.octx;
    ctx.clearRect(0, 0, this.overlay.width, this.overlay.height);
    for (let i = 0; i < 5; i++) {
      ctx.save();
      ctx.translate((i % COLS) * TILE_W, Math.floor(i / COLS) * TILE_H);
      ctx.beginPath(); ctx.rect(0, 0, TILE_W, TILE_H); ctx.clip();
      draw(ctx, i, TILE_W, TILE_H);
      ctx.restore();
    }
    if (this.overTex) this.overTex.needsUpdate = true;
  }

  // Which screen a view direction (unit vector) lands on, or -1.
  pick(d) {
    let hit = -1, best = Infinity;
    for (let i = 0; i < this.screens.length; i++) {
      const s = this.screens[i];
      const denom = d.dot(s.n);
      if (denom >= -0.02) continue;
      const t = s.c.dot(s.n) / denom;
      if (t <= 0 || t > best) continue;
      const p = d.clone().multiplyScalar(t).sub(s.c);
      if (Math.abs(p.dot(s.right)) <= s.hw * 1.04 && Math.abs(p.dot(s.up)) <= s.hh * 1.06) { best = t; hit = i; }
    }
    return hit;
  }

  heading(i) { const c = this.screens[i].c; return Math.atan2(c.x, -c.z); }
  elevation(i) { const c = this.screens[i].c; return Math.asin(c.y / c.length()); }

  update(dt, forward, slots) {
    if (!this.ready) return;
    this.time += dt;
    if (this.seq) this._runSeq(dt);
    // focus: the screen nearest the middle of the view
    let best = -1, bestDot = Math.cos(17 * Math.PI / 180);
    if (this.poweredOn && forward) {
      for (let i = 0; i < this.screens.length; i++) {
        if (slots && !slots[i]) continue;
        const k = forward.dot(this.screens[i].dir);
        if (k > bestDot) { bestDot = k; best = i; }
      }
    }
    this.focus = best;
    // category switch
    if (this.swap < 1) {
      this.swap = Math.min(1, this.swap + dt / 0.55);
      if (this.swap >= 1) this._adopt(this.nextVideo, this.nextTex);
    }
    // ease the mood colours
    const k = 1 - Math.exp(-dt * 2.2);
    this.mood.wallA.lerp(this.moodTo.wallA, k); this.mood.wallB.lerp(this.moodTo.wallB, k); this.mood.beam.lerp(this.moodTo.beam, k);
    // the neon is never perfectly steady
    const f = 0.985 + 0.015 * Math.sin(this.time * 47.0) * Math.sin(this.time * 13.3);
    this.flicker += (f - this.flicker) * 0.5;
    this._probeScreens(dt);

    const g = this.gain, on = this.on, U = this.skyU, dim = this.dim;
    U.cBase.value.setScalar(g.base * LEVEL.base * on.base * (0.35 + 0.65 * dim));
    const neon = g.neon * LEVEL.neon * on.neon * this.flicker * (0.5 + 0.5 * dim);
    U.cNeon.value.set(this.neonTint.r * neon, this.neonTint.g * neon, this.neonTint.b * neon);
    const beam = g.beam * LEVEL.beam * on.beam * dim;
    U.cBeam.value.set(this.mood.beam.r * beam, this.mood.beam.g * beam, this.mood.beam.b * beam);
    const wall = g.wall * LEVEL.wall * on.wall * (0.25 + 0.75 * dim);
    U.cWallA.value.set(this.mood.wallA.r * wall, this.mood.wallA.g * wall, this.mood.wallA.b * wall);
    U.cWallB.value.set(this.mood.wallB.r * wall, this.mood.wallB.g * wall, this.mood.wallB.b * wall);
    U.cDot.value.setScalar(g.dot * LEVEL.dot * on.dot);
    if (this.dotMat) this.dotMat.color.setScalar(5.5 * on.dot * this.flicker * (0.45 + 0.55 * dim));
    U.uWallOn.value = on.wallSweep * 1.9;
    for (let i = 0; i < 5; i++) {
      const s = this.screens[i], u = s.mat.uniforms;
      const has = !slots || !!slots[i];
      const target = i === this.focus ? 1 : 0;
      this.focusAmt[i] += (target - this.focusAmt[i]) * Math.min(1, dt * 10);
      const lit = on.scr[i] * (has ? 1 : 0);
      u.uOn.value = lit; u.uFocus.value = this.focusAmt[i]; u.uTime.value = this.time; u.uSwap.value = this.swap < 1 ? this.swap : 0;
      u.uDim.value = 0.62 * dim + 0.0;
      const c = this.screenColor[i];
      const w = g['scr' + (i + 1)] * LEVEL.scr * smoothMin(lit) * (0.62 + 0.38 * this.focusAmt[i]) * (0.3 + 0.7 * dim);
      U.cScr.value[i].set(c.r * w, c.g * w, c.b * w);
    }
    this.dustU.uTime.value = this.time;
    this.dustU.uLevel.value = 0.22 * on.beam * dim + 0.05 * on.base;
  }

  setPixelScale(ph) { if (this.dustU) this.dustU.uScale.value = ph * 0.0032; }

  // Read each screen's average colour a few times a second, so its glow on the floor follows the picture.
  _probeScreens(dt) {
    this._probeT -= dt;
    if (this._probeT > 0) return;
    this._probeT = 0.12;
    const v = this.swap < 1 && this.nextVideo ? this.nextVideo : this.video;
    const target = [];
    let ok = false;
    if (v && v.readyState >= 2 && v.videoWidth) {
      try {
        const cw = this._probe.width, ch = this._probe.height;
        this._pctx.drawImage(v, 0, 0, cw, ch);
        const px = this._pctx.getImageData(0, 0, cw, ch).data;
        const tw = cw / COLS, th = ch / ROWS;
        for (let i = 0; i < 5; i++) {
          let r = 0, g = 0, b = 0;
          const x0 = (i % COLS) * tw, y0 = Math.floor(i / COLS) * th;
          for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
            const o = ((y0 + y) * cw + x0 + x) * 4;
            r += (px[o] / 255) ** 2.2; g += (px[o + 1] / 255) ** 2.2; b += (px[o + 2] / 255) ** 2.2;
          }
          const n = tw * th;
          target.push([r / n, g / n, b / n]);
        }
        ok = true;
      } catch (e) { ok = false; }
    }
    for (let i = 0; i < 5; i++) {
      const t = ok ? target[i] : [0.16, 0.16, 0.18];
      // keep some light even for dark pictures, and never let one colour run away
      const c = this.screenColor[i];
      c.r += (Math.min(1.2, t[0] * 1.6 + 0.02) - c.r) * 0.35;
      c.g += (Math.min(1.2, t[1] * 1.6 + 0.02) - c.g) * 0.35;
      c.b += (Math.min(1.2, t[2] * 1.6 + 0.02) - c.b) * 0.35;
    }
  }
}

function smoothMin(x) { return x * x * (3 - 2 * x); }

export const TILE = { W: TILE_W, H: TILE_H, COLS, ROWS };
