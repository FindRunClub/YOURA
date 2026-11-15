// The renderer and its film-style finish: everything draws into a high-dynamic-range buffer, then gets
// bloom, exposure, a filmic tone curve, a soft vignette and a little grain on the way to the screen.
import * as THREE from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';

const VERT = /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const PREFILTER = /* glsl */`
precision highp float;
uniform sampler2D tMap; uniform vec2 uTexel; uniform float uThreshold;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tMap, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, -0.5)).rgb
         + texture2D(tMap, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, 0.5)).rgb;
  c *= 0.25;
  float l = max(c.r, max(c.g, c.b));
  float k = max(l - uThreshold, 0.0) / max(l, 1e-4);          // keep only what is brighter than the threshold
  gl_FragColor = vec4(min(c * k, vec3(40.0)), 1.0);
}`;

const DOWN = /* glsl */`
precision highp float;
uniform sampler2D tMap; uniform vec2 uTexel;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tMap, vUv).rgb * 4.0;
  c += texture2D(tMap, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(1.0, -1.0)).rgb;
  c += texture2D(tMap, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0);
}`;

const UP = /* glsl */`
precision highp float;
uniform sampler2D tMap; uniform vec2 uTexel; uniform float uGain;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tMap, vUv + uTexel * vec2(-1.0, 0.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(1.0, 0.0)).rgb
         + texture2D(tMap, vUv + uTexel * vec2(0.0, -1.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.0, 1.0)).rgb;
  c += (texture2D(tMap, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, -0.5)).rgb
      + texture2D(tMap, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, 0.5)).rgb) * 2.0;
  gl_FragColor = vec4(c / 12.0 * uGain, 1.0);
}`;

const FINAL = /* glsl */`
precision highp float;
uniform sampler2D tHdr, tBloom;
uniform float uExposure, uBloom, uVignette, uGrain, uTime, uWhite, uBlack, uAspect, uFringe, uSat;
varying vec2 vUv;
float hash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 film(vec3 x){                                              // ACES-style filmic curve
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
void main(){
  vec2 d = vUv - 0.5;
  float r2 = dot(d * vec2(uAspect, 1.0), d * vec2(uAspect, 1.0)) / (0.25 * (uAspect * uAspect + 1.0));
  vec3 c;
  if (uFringe > 0.0) {                                          // a touch of lens colour fringing toward the corners
    vec2 o = d * r2 * uFringe;
    c = vec3(texture2D(tHdr, vUv + o).r, texture2D(tHdr, vUv).g, texture2D(tHdr, vUv - o).b);
  } else c = texture2D(tHdr, vUv).rgb;
  c += texture2D(tBloom, vUv).rgb * uBloom;
  c *= uExposure;
  c *= 1.0 - uVignette * smoothstep(0.25, 1.15, r2);
  c = film(c);
  c = max(mix(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), c, uSat), 0.0);
  c = mix(c, vec3(1.0), uWhite);
  c *= 1.0 - uBlack;
  c = pow(c, vec3(1.0 / 2.2));
  c += (hash(gl_FragCoord.xy + fract(uTime) * 311.0) - 0.5) * uGrain;
  gl_FragColor = vec4(c, 1.0);
}`;

// Can this device draw into an anti-aliased high-dynamic-range buffer? (Asked directly, because a wrong guess draws nothing.)
function smoothBufferWorks(renderer) {
  const gl = renderer.getContext();
  let ok = false;
  try {
    const rb = gl.createRenderbuffer(), fb = gl.createFramebuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, rb);
    gl.renderbufferStorageMultisample(gl.RENDERBUFFER, 4, gl.RGBA16F, 4, 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, rb);
    ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE && gl.getError() === gl.NO_ERROR;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.deleteFramebuffer(fb); gl.deleteRenderbuffer(rb);
  } catch (e) { ok = false; }
  renderer.resetState();
  return ok;
}

export class Gfx {
  constructor(canvas) {
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'high-performance' });
    r.autoClear = false;
    r.outputColorSpace = THREE.LinearSRGBColorSpace;            // the final pass encodes for the screen itself
    this.canvas = canvas;
    const float = r.extensions.has('EXT_color_buffer_half_float') || r.extensions.has('EXT_color_buffer_float');
    this.type = float ? THREE.HalfFloatType : THREE.UnsignedByteType;
    const opts = { type: this.type, depthBuffer: false, magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter };
    this.hdr = new THREE.WebGLRenderTarget(4, 4, { ...opts, depthBuffer: true });
    this.opts = opts;
    this.ms = null;                                             // an anti-aliased copy, used only while solid 3D shapes are on screen
    this.canMS = float && r.capabilities.maxSamples >= 4 && smoothBufferWorks(r);
    this.levels = 5;
    this.down = []; this.up = [];
    for (let i = 0; i < this.levels; i++) { this.down.push(new THREE.WebGLRenderTarget(2, 2, opts)); this.up.push(new THREE.WebGLRenderTarget(2, 2, opts)); }
    const mat = (frag, uniforms) => new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false });
    this.mPre = mat(PREFILTER, { tMap: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 1.0 } });
    this.mDown = mat(DOWN, { tMap: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.mUp = mat(UP, { tMap: { value: null }, uTexel: { value: new THREE.Vector2() }, uGain: { value: 1 } });
    this.mUp.blending = THREE.AdditiveBlending;
    this.mFinal = mat(FINAL, {
      tHdr: { value: this.hdr.texture }, tBloom: { value: null }, uExposure: { value: 1 }, uBloom: { value: 0.5 }, uVignette: { value: 0.35 },
      uGrain: { value: 0.022 }, uTime: { value: 0 }, uWhite: { value: 0 }, uBlack: { value: 0 }, uAspect: { value: 1 }, uFringe: { value: 0.006 }, uSat: { value: 1 }
    });
    this.quad = new FullScreenQuad(this.mPre);
    this.w = 0; this.h = 0; this.pw = 0; this.ph = 0;
    this.quality = 1; this.ema = 1 / 60; this.slow = 0; this.fast = 0;
    this.locked = false;                                        // true = never change the resolution (used by tests)
    this.look = { exposure: 1, bloom: 0.5, threshold: 1.0, vignette: 0.35, grain: 0.022, white: 0, black: 0, fringe: 0.006, sat: 1 };
  }

  // Keep the frame rate: drop the resolution a step when frames run long, and bring it back when there is room.
  govern(dt) {
    if (this.locked) return;
    this.ema = this.ema * 0.9 + dt * 0.1;
    if (this.ema > 1 / 40) { this.slow += dt; this.fast = 0; } else if (this.ema < 1 / 56) { this.fast += dt; this.slow = 0; } else { this.slow = 0; this.fast = 0; }
    if (this.slow > 1.2 && this.quality > 0.5) { this.quality = Math.max(0.5, this.quality * 0.85); this.slow = 0; }
    if (this.fast > 6 && this.quality < 1) { this.quality = Math.min(1, this.quality / 0.9); this.fast = 0; }
  }

  fit() {
    const c = this.canvas;
    const w = Math.max(1, c.clientWidth), h = Math.max(1, c.clientHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2) * this.quality;
    const maxPx = 3.4e6 * this.quality * this.quality;
    if (w * h * dpr * dpr > maxPx) dpr = Math.sqrt(maxPx / (w * h));
    const pw = Math.max(2, Math.round(w * dpr)), ph = Math.max(2, Math.round(h * dpr));
    if (pw !== this.pw || ph !== this.ph) {
      this.pw = pw; this.ph = ph;
      this.renderer.setSize(pw, ph, false);
      this.hdr.setSize(pw, ph);
      if (this.ms) this.ms.setSize(pw, ph);
      let bw = pw, bh = ph;
      for (let i = 0; i < this.levels; i++) {
        bw = Math.max(2, bw >> 1); bh = Math.max(2, bh >> 1);
        this.down[i].setSize(bw, bh); this.up[i].setSize(bw, bh);
      }
    }
    this.w = w; this.h = h;
    return { w, h, pw, ph };
  }

  _pass(material, target) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.quad.render(this.renderer);
  }

  releaseMS() { if (this.ms) { this.ms.dispose(); this.ms = null; } }

  // Draw one or more scenes with the same camera into the HDR buffer, then finish and present.
  // smooth: anti-alias the edges of solid shapes (the intro); the studio and the player don't need it.
  render(scenes, camera, time, smooth) {
    const r = this.renderer, L = this.look;
    let hdr = this.hdr;
    if (smooth && this.canMS) {
      if (!this.ms) { this.ms = new THREE.WebGLRenderTarget(this.pw, this.ph, { ...this.opts, depthBuffer: true, samples: 4 }); }
      hdr = this.ms;
    }
    r.setRenderTarget(hdr);
    r.setClearColor(0x000000, 1);
    r.clear(true, true, false);
    for (const s of scenes) if (s) r.render(s, camera);
    // bloom: bright parts, blurred down a pyramid and added back up
    this.mPre.uniforms.tMap.value = hdr.texture;
    this.mPre.uniforms.uTexel.value.set(1 / this.pw, 1 / this.ph);
    this.mPre.uniforms.uThreshold.value = L.threshold;
    this._pass(this.mPre, this.down[0]);
    for (let i = 1; i < this.levels; i++) {
      this.mDown.uniforms.tMap.value = this.down[i - 1].texture;
      this.mDown.uniforms.uTexel.value.set(1 / this.down[i - 1].width, 1 / this.down[i - 1].height);
      this._pass(this.mDown, this.down[i]);
    }
    let src = this.down[this.levels - 1];
    for (let i = this.levels - 2; i >= 0; i--) {
      // up[i] = down[i] + blurred(src)
      this.mDown.uniforms.tMap.value = this.down[i].texture;
      this.mDown.uniforms.uTexel.value.set(0, 0);
      this._pass(this.mDown, this.up[i]);
      this.mUp.uniforms.tMap.value = src.texture;
      this.mUp.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
      this.mUp.uniforms.uGain.value = 1.0;
      this._pass(this.mUp, this.up[i]);
      src = this.up[i];
    }
    const u = this.mFinal.uniforms;
    u.tHdr.value = hdr.texture;
    u.tBloom.value = src.texture;
    u.uExposure.value = L.exposure; u.uBloom.value = L.bloom / this.levels; u.uVignette.value = L.vignette;
    u.uGrain.value = L.grain; u.uTime.value = time; u.uWhite.value = L.white; u.uBlack.value = L.black;
    u.uAspect.value = this.pw / this.ph; u.uFringe.value = L.fringe; u.uSat.value = L.sat;
    this._pass(this.mFinal, null);
  }
}
