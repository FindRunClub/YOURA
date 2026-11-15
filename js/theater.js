// The player. A 360-degree clip wraps all the way round you; an ordinary clip plays on a giant curved screen.
// Either way the view follows the phone. It opens out of the screen you picked on the stage, like an iris.
import * as THREE from 'three';

const VERT = /* glsl */`
varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * position * 20.0, 1.0); }`;

const FRAG = /* glsl */`
precision highp float;
uniform sampler2D tVid;
uniform float uFlat, uHas, uAspect, uSpan, uReveal, uGain, uFront, uStereo, uPitch;
uniform vec3 uFrom;
varying vec3 vDir;
vec3 dec(vec3 t){ return pow(t, vec3(2.2)); }
// The last step of drawing applies a film curve. A video should look as it was made, so undo that curve here.
vec3 unfilm(vec3 y){
  y = clamp(y, 0.0, 0.985);
  vec3 a = 2.51 - 2.43 * y, b = 0.03 - 0.59 * y;
  return (-b + sqrt(b * b + 0.56 * a * y)) / (2.0 * a);
}
void main(){
  vec3 d = normalize(vDir);
  float lon = atan(d.x, -d.z) - uFront;
  lon = mod(lon + 3.14159265, 6.2831853) - 3.14159265;
  vec3 col;
  if (uFlat < 0.5) {
    float lat = asin(clamp(d.y, -1.0, 1.0));
    vec2 uv = vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.14159265);
    if (uStereo > 0.5) uv.y = 0.5 + uv.y * 0.5;
    col = dec(texture2D(tVid, uv).rgb);
  } else {
    // a curved screen uSpan radians wide, straight ahead; the dark around it picks up a little of the picture's light
    float y = d.y / max(length(d.xz), 1e-4) - uPitch;
    float h = uSpan / uAspect;
    vec2 uv = vec2(0.5 + lon / uSpan, 0.5 + y / h);
    vec2 e = abs(uv - 0.5) - 0.5;
    float outside = max(e.x * uSpan, e.y * h);
    vec3 v = dec(texture2D(tVid, clamp(uv, 0.003, 0.997)).rgb);
    float inside = 1.0 - smoothstep(-0.002, 0.004, outside);
    vec3 spill = v * exp(-max(outside, 0.0) * 4.0) * 0.16;
    col = mix(spill, v, inside);
  }
  // the iris: opens from the screen you came from
  float ang = acos(clamp(dot(d, uFrom), -1.0, 1.0));
  float edge = uReveal * 3.5;
  float m = 1.0 - smoothstep(edge - 0.3, edge, ang);
  float rim = smoothstep(edge - 0.3, edge - 0.06, ang) * m * (1.0 - step(0.999, uReveal));
  gl_FragColor = vec4(unfilm(col * uGain * uHas) + vec3(1.0, 0.1, 0.2) * rim * 1.5, m);
}`;

export class Theater {
  constructor() {
    this.scene = new THREE.Scene();
    this.black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); this.black.needsUpdate = true;
    this.U = {
      tVid: { value: this.black }, uFlat: { value: 0 }, uHas: { value: 0 }, uAspect: { value: 16 / 9 }, uSpan: { value: 2.3 },
      uReveal: { value: 0 }, uGain: { value: 1.0 }, uFront: { value: 0 }, uStereo: { value: 0 }, uPitch: { value: 0 },
      uFrom: { value: new THREE.Vector3(0, 0, -1) }
    };
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, uniforms: this.U, side: THREE.BackSide, depthTest: false, depthWrite: false, transparent: true
    }));
    mesh.frustumCulled = false;
    this.scene.add(mesh);
    this.video = null;        // one element for every clip, so iOS keeps letting it play with sound
    this.tex = null;
    this.item = null;
    this.playing = false; this.ended = false; this.loading = false; this.error = '';
    this.dur = 0;
    this.reveal = 0; this.revealTo = 0;
    this.front = 0;
    this.onEnded = null; this.onChange = null;
    this.wholeFile = null;      // set by the app: url -> promise of an in-memory copy's address
  }

  get active() { return this.reveal > 0.001 || this.revealTo > 0; }
  get covering() { return this.reveal >= 0.999; }
  get flat() { return this.item && this.item.projection === 'flat'; }

  _changed() { if (this.onChange) this.onChange(); }

  _el() {
    if (this.video) return this.video;
    const v = document.createElement('video');
    v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
    v.playsInline = true; v.preload = 'auto'; v.crossOrigin = 'anonymous';
    v.className = 'video-src'; v.setAttribute('aria-hidden', 'true');
    document.body.appendChild(v);
    v.addEventListener('ended', () => this._end());
    v.addEventListener('playing', () => { this.loading = false; this._changed(); });
    v.addEventListener('waiting', () => { this.loading = true; this._changed(); });
    v.addEventListener('pause', () => this._changed());
    v.addEventListener('loadedmetadata', () => {
      if (isFinite(v.duration)) this.dur = v.duration;
      if (v.videoWidth && v.videoHeight) {
        this.U.uAspect.value = v.videoWidth / v.videoHeight;
        // files added by hand: 2:1 is a 360 video, 1:1 is 3D over-under, anything else is a flat picture
        if (this.item && this.item.local) {
          const r = v.videoWidth / v.videoHeight;
          this.U.uFlat.value = Math.abs(r - 2) < 0.12 || Math.abs(r - 1) < 0.1 ? 0 : 1;
          this.U.uStereo.value = Math.abs(r - 1) < 0.1 ? 1 : 0;
        }
      }
      this._changed();
    });
    v.addEventListener('error', () => {
      const it = this.item;
      if (!it) return;
      const fail = () => { this.error = 'This video could not be played.'; this.loading = false; this.playing = false; this._changed(); };
      if (this._retried || it.local) { fail(); return; }
      // try the other way of loading it: from its address, or downloaded whole and played from memory
      this._retried = true;
      const other = v.getAttribute('src') === it.src ? (this.wholeFile ? this.wholeFile(it.src) : null) : it.src;
      Promise.resolve(other).then(u => {
        if (this.item !== it) return;
        if (!u) { fail(); return; }
        v.src = u;
        const p = v.play();
        if (p && p.catch) p.catch(() => { this.playing = false; this.loading = false; this._changed(); });
      });
    });
    this.video = v;
    this.tex = new THREE.VideoTexture(v);
    this.tex.colorSpace = THREE.NoColorSpace;
    this.tex.minFilter = THREE.LinearFilter; this.tex.magFilter = THREE.LinearFilter; this.tex.generateMipmaps = false;
    return v;
  }

  // Call straight from the tap that starts playback: iOS only allows sound from a tap.
  // from: unit vector toward the screen the clip opens out of. heading: where the viewer is looking now.
  open(item, from, heading, pitch) {
    this.item = item;
    this.ended = false; this.error = '';
    this.front = heading;
    this.U.uFront.value = heading;
    this.U.uPitch.value = Math.tan(pitch || 0) * 0;      // the screen sits level
    this.U.uFlat.value = item.projection === 'flat' ? 1 : 0;
    this.U.uStereo.value = item.stereo ? 1 : 0;
    if (from) this.U.uFrom.value.copy(from);
    const v = this._el();
    this.loading = true;
    this.dur = item.dur || 0;
    const src = item.held || item.src;                  // held: already downloaded whole (see main.js)
    this._retried = false;
    if (v.getAttribute('src') !== src) v.src = src;
    try { v.currentTime = 0; } catch (e) { /* not seekable yet */ }
    v.muted = false; v.loop = false;
    this.playing = true;
    const p = v.play();
    if (p && p.catch) p.catch(err => {
      if (err && err.name === 'NotAllowedError') { v.muted = true; v.play().catch(() => { this.playing = false; this._changed(); }); }
      else if (!this.error) { this.playing = false; this._changed(); }
    });
    this.U.tVid.value = this.tex; this.U.uHas.value = 1;
    this.revealTo = 1;
    this._changed();
  }

  close() {
    if (this.video) this.video.pause();
    this.playing = false;
    this.revealTo = 0;
    this._changed();
  }

  time() { return this.video ? this.video.currentTime || 0 : 0; }
  play() {
    if (!this.item || !this.video) return;
    if (this.ended) this.seek(0);
    this.ended = false; this.playing = true;
    this.video.play().catch(() => {});
    this._changed();
  }
  pause() { this.playing = false; if (this.video) this.video.pause(); this._changed(); }
  toggle() { if (this.playing) this.pause(); else this.play(); }
  seek(sec) {
    sec = Math.max(0, Math.min(this.dur || 0, sec));
    if (this.video) { try { this.video.currentTime = sec; } catch (e) { /* ignore */ } }
    if (sec < this.dur - 0.05) this.ended = false;
    this._changed();
  }
  faceFront(heading) { this.front = heading; }

  _end() {
    if (this.ended || !this.item) return;
    this.ended = true; this.playing = false;
    this._changed();
    if (this.onEnded) this.onEnded(this.item);
  }

  update(dt, reduced) {
    const speed = reduced ? 100 : (this.revealTo > this.reveal ? 1.25 : 1.8);
    if (this.reveal < this.revealTo) this.reveal = Math.min(this.revealTo, this.reveal + dt * speed);
    else if (this.reveal > this.revealTo) this.reveal = Math.max(this.revealTo, this.reveal - dt * speed);
    const e = this.reveal;
    this.U.uReveal.value = e * e * (3 - 2 * e);
    // turning the front of the video to a new heading is eased, so "face front" glides
    let d = this.front - this.U.uFront.value;
    d = ((d + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
    this.U.uFront.value += d * Math.min(1, dt * 6);
    if (this.reveal <= 0 && this.revealTo <= 0 && this.item) {
      this.item = null; this.U.uHas.value = 0;
    }
  }
}
