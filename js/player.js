// Full-screen 360 playback. A demo entry plays its scene; an entry with a `src` streams an
// equirectangular video into a texture. Either way the view follows the phone (or a drag).
import { program, drawFullscreen, texture } from './gl.js';
import { FS_VERT, SCENE_FRAG, VIDEO_FRAG } from './scenes.js';

const hex = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };

export class Player {
  constructor(gl, quad) {
    this.gl = gl;
    this.quad = quad;
    this.sceneProg = program(gl, FS_VERT, SCENE_FRAG, ['p']);
    this.videoProg = program(gl, FS_VERT, VIDEO_FRAG, ['p']);
    gl.activeTexture(gl.TEXTURE2);
    this.tex = texture(gl);
    this.texW = 0; this.texH = 0;
    this.video = null;       // one element for every video, so iOS keeps letting it play with sound
    this.item = null;
    this.mode = 'scene';
    this.t = 0; this.dur = 0;
    this.playing = false;
    this.ended = false;
    this.loading = false;
    this.error = '';
    this.hasFrame = false;
    this.newFrame = false;
    this.stereo = 0;
    this.onEnded = null;
    this.onChange = null;
  }

  _changed() { if (this.onChange) this.onChange(); }

  _videoEl() {
    if (this.video) return this.video;
    const v = document.createElement('video');
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.playsInline = true;
    v.preload = 'auto';
    v.crossOrigin = 'anonymous';
    v.className = 'video-src';
    v.setAttribute('aria-hidden', 'true');
    document.body.appendChild(v);
    v.addEventListener('ended', () => this._end());
    v.addEventListener('playing', () => { this.loading = false; this._changed(); });
    v.addEventListener('waiting', () => { this.loading = true; this._changed(); });
    v.addEventListener('pause', () => this._changed());
    v.addEventListener('loadedmetadata', () => {
      if (isFinite(v.duration)) this.dur = v.duration;
      if (this.item && this.item.stereo == null) this.stereo = v.videoHeight >= v.videoWidth * 0.9 ? 1 : 0;
      this._changed();
    });
    v.addEventListener('error', () => {
      if (this.mode !== 'video') return;
      this.error = 'This video could not be played.';
      this.loading = false; this.playing = false;
      this._changed();
    });
    if ('requestVideoFrameCallback' in v) {
      const cb = () => { this.newFrame = true; v.requestVideoFrameCallback(cb); };
      v.requestVideoFrameCallback(cb);
    }
    this.video = v;
    return v;
  }

  // Call straight from the tap that starts playback: iOS only allows sound from a tap.
  open(item) {
    this.item = item;
    this.t = 0;
    this.ended = false;
    this.error = '';
    this.hasFrame = false;
    if (item.src) {
      this.mode = 'video';
      this.stereo = item.stereo == null ? 0 : (item.stereo ? 1 : 0);
      const v = this._videoEl();
      this.loading = true;
      this.dur = item.dur || 0;
      if (v.getAttribute('src') !== item.src) v.src = item.src;
      try { v.currentTime = 0; } catch (e) { /* not seekable yet */ }
      v.muted = false;
      this.playing = true;
      const p = v.play();
      if (p && p.catch) p.catch(err => {
        if (err && err.name === 'NotAllowedError') {
          v.muted = true;
          v.play().catch(() => { this.playing = false; this._changed(); });
        } else if (this.mode === 'video' && !this.error) {
          this.playing = false; this._changed();
        }
      });
    } else {
      this.mode = 'scene';
      if (this.video) this.video.pause();
      this.dur = item.dur;
      this.loading = false;
      this.playing = true;
    }
    this._changed();
  }

  close() {
    if (this.video) {
      this.video.pause();
    }
    this.playing = false;
    this.item = null;
    this._changed();
  }

  time() { return this.mode === 'video' && this.video ? this.video.currentTime : this.t; }

  play() {
    if (!this.item) return;
    if (this.ended) this.seek(0);
    this.ended = false;
    this.playing = true;
    if (this.mode === 'video' && this.video) this.video.play().catch(() => {});
    this._changed();
  }

  pause() {
    this.playing = false;
    if (this.mode === 'video' && this.video) this.video.pause();
    this._changed();
  }

  toggle() { if (this.playing) this.pause(); else this.play(); }

  seek(sec) {
    sec = Math.max(0, Math.min(this.dur || 0, sec));
    if (this.mode === 'video' && this.video) { try { this.video.currentTime = sec; } catch (e) { /* ignore */ } }
    else this.t = sec;
    if (sec < this.dur - 0.05) this.ended = false;
    this._changed();
  }

  _end() {
    if (this.ended) return;
    this.ended = true;
    this.playing = false;
    this._changed();
    if (this.onEnded) this.onEnded(this.item);
  }

  update(dt) {
    if (!this.item) return;
    if (this.mode === 'scene' && this.playing) {
      this.t += dt;
      if (this.t >= this.dur) { this.t = this.dur; this._end(); }
    }
  }

  draw(B, tan, width, height) {
    const gl = this.gl;
    gl.viewport(0, 0, width, height);
    if (this.mode === 'video') {
      const v = this.video;
      if (v && v.readyState >= 2 && v.videoWidth && (this.newFrame || !this.hasFrame || !('requestVideoFrameCallback' in v))) {
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        try {
          if (v.videoWidth === this.texW && v.videoHeight === this.texH) gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGB, gl.UNSIGNED_BYTE, v);
          else { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, v); this.texW = v.videoWidth; this.texH = v.videoHeight; }
          this.hasFrame = true;
        } catch (e) {
          this.error = 'This video can’t be shown here. It needs to come from YOURA’s own address or allow cross-origin use.';
        }
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        this.newFrame = false;
      }
      if (!this.hasFrame) {
        gl.clearColor(0.03, 0.02, 0.025, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        return;
      }
      const u = this.videoProg.u;
      gl.useProgram(this.videoProg.p);
      gl.activeTexture(gl.TEXTURE2);
      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.uniform1i(u.uVid, 2);
      gl.uniform2f(u.uRes, width, height);
      gl.uniform3fv(u.uF, B.F); gl.uniform3fv(u.uR, B.R); gl.uniform3fv(u.uU, B.U);
      gl.uniform2f(u.uTan, tan[0], tan[1]);
      gl.uniform1f(u.uStereo, this.stereo);
      drawFullscreen(gl, this.quad, 0);
      return;
    }
    const it = this.item;
    if (!it) return;
    const u = this.sceneProg.u;
    gl.useProgram(this.sceneProg.p);
    gl.uniform2f(u.uRes, width, height);
    gl.uniform3fv(u.uF, B.F); gl.uniform3fv(u.uR, B.R); gl.uniform3fv(u.uU, B.U);
    gl.uniform2f(u.uTan, tan[0], tan[1]);
    gl.uniform1f(u.uKind, it.kind);
    gl.uniform1f(u.uTime, this.t * (it.speed || 1) + it.seed * 7);
    gl.uniform1f(u.uSeed, it.seed);
    const [c1, c2, c3] = it.c.map(hex);
    gl.uniform3fv(u.uC1, c1); gl.uniform3fv(u.uC2, c2); gl.uniform3fv(u.uC3, c3);
    drawFullscreen(gl, this.quad, 0);
  }
}
