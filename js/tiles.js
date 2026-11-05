// The tiles in front of the viewer: two rows, a column every 36 degrees, #1 and #2 straight ahead,
// then alternating right and left. Ten picks fill five columns, from 72 degrees left to 72 degrees right.
// Each tile shows a live preview of its scene; labels and badges come from a 2D canvas atlas.
import { program } from './gl.js';
import { SCENE_LIB } from './scenes.js';
import { DEG, clamp, dot, cross, add, scale, dirFrom, smoothstep, easeOutCubic } from './math.js';

const D = 10;                                   // distance to the tiles (arbitrary units)
const HALF_W = Math.tan(14 * DEG) * D;          // 28 degrees wide
const HALF_H = HALF_W * 9 / 16;                 // 16:9
const TITLE_H = HALF_W * 2 * 56 / 512;          // matches the atlas title strip
const GAP = HALF_H * 0.07;
const ROW = 10.5 * DEG;
const CELL_W = 512, POSTER_H = 288, TITLE_PX = 56, CELL_H = POSTER_H + TITLE_PX;
const ATLAS = 2048;
const STRIDE = 26;

export const ROW_PITCH = ROW;
export function slotDir(layout, i) { return dirFrom(layout + slotHeading(i), i % 2 === 0 ? ROW : -ROW); }
export function slotHeading(i) {           // i = 0..19 (rank - 1)
  const p = Math.floor(i / 2);
  const m = p === 0 ? 0 : Math.ceil(p / 2) * (p % 2 ? 1 : -1);
  return m * 36 * DEG;
}

const VERT = `
attribute vec3 aPos; attribute vec2 aUV; attribute vec4 aCell; attribute vec4 aKind;
attribute vec3 aC1; attribute vec3 aC2; attribute vec3 aC3; attribute vec4 aState;
uniform vec3 uF, uR, uU; uniform vec2 uTan;
varying vec2 vUV; varying vec4 vCell; varying vec4 vKind; varying vec3 vC1; varying vec3 vC2; varying vec3 vC3; varying vec4 vState;
void main(){
  float w = dot(aPos, uF);
  gl_Position = vec4(dot(aPos, uR) / uTan.x, dot(aPos, uU) / uTan.y, w - 0.2, w);
  vUV = aUV; vCell = aCell; vKind = aKind; vC1 = aC1; vC2 = aC2; vC3 = aC3; vState = aState;
}`;

const FRAG = `#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform sampler2D uAtlas; uniform float uTime;
varying vec2 vUV; varying vec4 vCell; varying vec4 vKind; varying vec3 vC1; varying vec3 vC2; varying vec3 vC3; varying vec4 vState;
${SCENE_LIB}
float rbox(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
void main(){
  vec2 cuv = vCell.xy + vec2(vUV.x, 1.0 - vUV.y) * vCell.zw;
  vec4 ov = texture2D(uAtlas, cuv);
  float mode = vKind.w;   // 0 live preview + labels, 1 title plate, 2 still image + labels, 3 live preview only
  if (mode > 0.5 && mode < 1.5) { gl_FragColor = ov * vState.x; return; }
  float aspect = vState.w;
  vec2 p = (vUV - 0.5) * vec2(aspect, 1.0);
  float d = rbox(p, vec2(0.5 * aspect, 0.5), 0.05);
  float aa = max(fwidth(d), 1e-4);
  float mask = 1.0 - smoothstep(-aa, aa, d);
  vec3 col;
  if (mode < 0.5 || mode > 2.5) {
    vec3 dir = normalize(vec3((vUV.x - 0.5) * 1.7, (vUV.y - 0.5) * 0.96 + 0.06, -1.0));
    col = scene(vKind.x, dir, uTime * vKind.y + vKind.z * 7.0, vC1, vC2, vC3, vKind.z);
  } else {
    col = ov.rgb;
  }
  if (vState.z > 0.5) col *= 0.42;
  if (mode < 0.5) col = col * (1.0 - ov.a) + ov.rgb;
  float ring = vState.y * smoothstep(-0.034 - aa, -0.034 + aa, d);
  col = mix(col, vec3(0.882, 0.090, 0.216), ring);
  float a = mask * vState.x;
  gl_FragColor = vec4(col * a, a);
}`;

const hex = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };

export class Tiles {
  constructor(gl) {
    this.gl = gl;
    this.prog = program(gl, VERT, FRAG, ['aPos', 'aUV', 'aCell', 'aKind', 'aC1', 'aC2', 'aC3', 'aState']);
    this.buf = gl.createBuffer();
    this.data = new Float32Array(40 * 6 * STRIDE);
    this.atlas = document.createElement('canvas');
    this.atlas.width = ATLAS; this.atlas.height = ATLAS;
    this.ctx = this.atlas.getContext('2d');
    this.tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const aniso = gl.getExtension('EXT_texture_filter_anisotropic');
    if (aniso) gl.texParameterf(gl.TEXTURE_2D, aniso.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, gl.getParameter(aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));
    this.dirty = true;
    this.items = [];       // the current picks
    this.prevItems = null; // the old picks sinking away during a category switch
    this.layout = 0;       // heading of #1
    this.prevLayout = 0;
    this.swap = 1;         // 0..1 progress of a category switch (1 = settled)
    this.rise = 1;         // 0..1 the first rise after landing
    this.geo = [];         // last frame's tile geometry, for picking
    this.focus = -1;
    this.focusAmt = new Float32Array(20);
    this.flags = () => ({});
  }

  setItems(items, layoutHeading, { animate = true } = {}) {
    if (animate && this.items.length) {
      this.prevItems = this.items;
      this.prevLayout = this.layout;
      this.swap = 0;
    } else {
      this.prevItems = null;
      this.swap = 1;
    }
    this.items = items;
    this.layout = layoutHeading;
    this.focus = -1;
    this.focusAmt.fill(0);
    this.redrawAll();
  }

  redrawAll() {
    this.ctx.clearRect(0, 0, ATLAS, ATLAS);
    this.items.forEach((it, i) => { if (it) this.drawCell(i); });
    this.dirty = true;
  }

  // Redraw one tile's labels (call after watched/saved changes).
  drawCell(i) {
    const it = this.items[i];
    if (!it) return;
    const f = this.flags(it) || {};
    const ctx = this.ctx;
    const x = (i % 4) * CELL_W, y = Math.floor(i / 4) * CELL_H;
    ctx.save();
    ctx.clearRect(x, y, CELL_W, CELL_H);
    ctx.beginPath(); ctx.rect(x, y, CELL_W, CELL_H); ctx.clip();
    if (it.posterImg && it.posterImg.complete && it.posterImg.naturalWidth) {
      // a 16:9 still of the video's front, made when it was added
      ctx.drawImage(it.posterImg, x, y, CELL_W, POSTER_H);
    } else if (it.posterImg) {
      ctx.fillStyle = '#2A2226'; ctx.fillRect(x, y, CELL_W, POSTER_H);
    }
    const mono = '"IBM Plex Mono", ui-monospace, Menlo, monospace';
    const sans = 'Jost, "Avenir Next", system-ui, sans-serif';
    let bx = x + 16;
    if (f.isNew && !f.watched) {
      ctx.font = `600 22px ${sans}`;
      const w = ctx.measureText('NEW').width + 22;
      pill(ctx, bx, y + 16, w, 32, 6, '#E11737');
      ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle'; ctx.fillText('NEW', bx + 11, y + 33);
      bx += w + 8;
    }
    if (it.threeD) {
      ctx.font = `500 20px ${mono}`;
      const w = ctx.measureText('3D').width + 20;
      pill(ctx, bx, y + 16, w, 32, 6, 'rgba(0,0,0,0.72)');
      ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle'; ctx.fillText('3D', bx + 10, y + 33);
    }
    if (f.saved) {
      ctx.fillStyle = '#E11737';
      ctx.beginPath();
      ctx.moveTo(x + CELL_W - 64, y); ctx.lineTo(x + CELL_W - 26, y); ctx.lineTo(x + CELL_W - 26, y + 54);
      ctx.lineTo(x + CELL_W - 45, y + 41); ctx.lineTo(x + CELL_W - 64, y + 54); ctx.closePath(); ctx.fill();
    }
    // rank
    ctx.font = `500 28px ${mono}`;
    ctx.textBaseline = 'alphabetic';
    ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 8;
    ctx.fillStyle = '#fff';
    ctx.fillText(String(i + 1).padStart(2, '0'), x + 18, y + POSTER_H - 18);
    ctx.shadowBlur = 0;
    // length and comfort, bottom right
    ctx.font = `400 22px ${mono}`;
    const dur = fmt(it.dur);
    const dw = ctx.measureText(dur).width + 18;
    pill(ctx, x + CELL_W - 16 - dw, y + POSTER_H - 48, dw, 32, 6, 'rgba(0,0,0,0.72)');
    ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle';
    ctx.fillText(dur, x + CELL_W - 16 - dw + 9, y + POSTER_H - 31);
    const cw = 50;
    pill(ctx, x + CELL_W - 16 - dw - 8 - cw, y + POSTER_H - 48, cw, 32, 6, 'rgba(0,0,0,0.72)');
    for (let b = 0; b < 3; b++) {
      const bh = 8 + b * 6;
      ctx.fillStyle = b < it.comfort ? '#fff' : '#5A5A5A';
      ctx.fillRect(x + CELL_W - 16 - dw - 8 - cw + 11 + b * 11, y + POSTER_H - 22 - bh, 7, bh);
    }
    if (f.watched) {
      const cx = x + CELL_W / 2, cy = y + POSTER_H / 2;
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(cx, cy, 34, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#141414'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(cx - 14, cy + 1); ctx.lineTo(cx - 4, cy + 11); ctx.lineTo(cx + 15, cy - 10); ctx.stroke();
    }
    // title strip
    pill(ctx, x, y + POSTER_H + 4, CELL_W, TITLE_PX - 8, 10, 'rgba(8,6,7,0.78)');
    ctx.font = `500 25px ${sans}`;
    ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle';
    ctx.fillText(ellipsize(ctx, it.title, CELL_W - 36), x + 18, y + POSTER_H + TITLE_PX / 2 + 1);
    ctx.restore();
    this.dirty = true;
  }

  _upload() {
    const gl = this.gl;
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.atlas);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.generateMipmap(gl.TEXTURE_2D);
    this.dirty = false;
  }

  update(dt, F) {
    if (this.swap < 1) { this.swap = Math.min(1, this.swap + dt / 0.75); if (this.swap >= 1) this.prevItems = null; }
    if (this.rise < 1) this.rise = Math.min(1, this.rise + dt / 1.1);
    // focus: the tile nearest the middle of the view, within reach
    let best = -1, bestAng = 17 * DEG;
    if (this.swap >= 1 && this.rise >= 1) {
      for (let i = 0; i < this.items.length; i++) {
        if (!this.items[i]) continue;
        const c = dirFrom(this.layout + slotHeading(i), i % 2 === 0 ? ROW : -ROW);
        const ang = Math.acos(clamp(dot(c, F), -1, 1));
        if (ang < bestAng) { bestAng = ang; best = i; }
      }
    }
    this.focus = best;
    for (let i = 0; i < 20; i++) {
      const target = i === best ? 1 : 0;
      this.focusAmt[i] += (target - this.focusAmt[i]) * Math.min(1, dt * 12);
    }
  }

  // Returns the slot index under a view ray, or -1.
  pick(ray) {
    let hit = -1, bestT = Infinity;
    for (const g of this.geo) {
      const denom = dot(ray, g.n);
      if (denom <= 0.01) continue;
      const t = g.dist / denom;
      const P = scale(ray, t);
      const lx = P[0] - g.c[0], ly = P[1] - g.c[1], lz = P[2] - g.c[2];
      const u = (lx * g.R[0] + ly * g.R[1] + lz * g.R[2]) / g.hw;
      const v = (lx * g.U[0] + ly * g.U[1] + lz * g.U[2]) / g.hh;
      if (Math.abs(u) <= 1.04 && v >= g.vMin && v <= g.vMax && t < bestT) { bestT = t; hit = g.i; }
    }
    return hit;
  }

  draw(B, tan, time) {
    const gl = this.gl;
    if (this.dirty) this._upload();
    let n = 0;
    const out = this.data;
    this.geo = [];
    const push = (list, layout, phase, live) => {
      list.forEach((it, i) => {
        if (!it) return;
        // sinking (phase < 0) or rising (phase > 0) during a category switch, and the first rise after landing
        let k = 1, drop = 0;
        if (phase !== 0) {
          const local = clamp((phase > 0 ? (this.swap - 0.35) / 0.65 : this.swap / 0.45) - (i % 10) * 0.012, 0, 1);
          k = phase > 0 ? easeOutCubic(local) : 1 - easeOutCubic(local);
          drop = (1 - k) * (phase > 0 ? 16 : 22) * DEG;
        }
        if (live && this.rise < 1) {
          const r = easeOutCubic(clamp((this.rise - (i % 10) * 0.035) / 0.65, 0, 1));
          k *= r; drop += (1 - r) * 20 * DEG;
        }
        if (k <= 0.001) return;
        const top = i % 2 === 0;
        const heading = layout + slotHeading(i);
        const fa = live ? this.focusAmt[i] : 0;
        const pitch = (top ? ROW : -ROW) - drop + (top ? 0.5 : -0.5) * fa * DEG;
        const dist = D * (1 - 0.025 * fa);
        const cu = dirFrom(heading, pitch);
        const c = scale(cu, dist);
        const R = [Math.cos(heading), 0, Math.sin(heading)];
        const U = cross(scale(cu, -1), R);
        const s = 1 + 0.05 * fa;
        const hw = HALF_W * s, hh = HALF_H * s;
        const f = this.flags(it) || {};
        const cellX = (i % 4) * CELL_W / ATLAS, cellY = Math.floor(i / 4) * CELL_H / ATLAS;
        const c1 = hex(it.c[0]), c2 = hex(it.c[1]), c3 = hex(it.c[2]);
        const mode = !live ? 3 : it.posterImg ? 2 : 0;
        n = quad(out, n, c, R, U, hw, hh, [cellX, cellY, CELL_W / ATLAS, POSTER_H / ATLAS], [it.kind ?? 0, it.speed ?? 1, it.seed ?? 0, mode], c1, c2, c3, [k, fa, f.watched ? 1 : 0, hw / hh]);
        if (!live) return;
        const off = hh + GAP * s + TITLE_H * s / 2;
        const tc = add(c, scale(U, top ? off : -off));
        n = quad(out, n, tc, R, U, hw, TITLE_H * s / 2, [cellX, cellY + POSTER_H / ATLAS, CELL_W / ATLAS, TITLE_PX / ATLAS], [0, 0, 0, 1], c1, c2, c3, [k, 0, 0, 1]);
        const ext = 1 + (GAP + TITLE_H) / HALF_H;
        if (live && k > 0.5) this.geo.push({ i, c, n: cu, dist: dot(c, cu), R, U, hw, hh, vMin: top ? -1.04 : -ext, vMax: top ? ext : 1.04 });
      });
    };
    if (this.prevItems && this.swap < 1) push(this.prevItems, this.prevLayout, -1, false);
    push(this.items, this.layout, this.prevItems && this.swap < 1 ? 1 : 0, true);
    if (!n) return;

    gl.useProgram(this.prog.p);
    const u = this.prog.u;
    gl.uniform3fv(u.uF, B.F); gl.uniform3fv(u.uR, B.R); gl.uniform3fv(u.uU, B.U);
    gl.uniform2f(u.uTan, tan[0], tan[1]);
    gl.uniform1f(u.uTime, time);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.uniform1i(u.uAtlas, 1);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.bufferData(gl.ARRAY_BUFFER, out.subarray(0, n * STRIDE), gl.DYNAMIC_DRAW);
    const sizes = [3, 2, 4, 4, 3, 3, 3, 4];
    let off = 0;
    for (let a = 0; a < sizes.length; a++) {
      gl.enableVertexAttribArray(a);
      gl.vertexAttribPointer(a, sizes[a], gl.FLOAT, false, STRIDE * 4, off * 4);
      off += sizes[a];
    }
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.drawArrays(gl.TRIANGLES, 0, n);
    gl.disable(gl.BLEND);
    for (let a = 1; a < sizes.length; a++) gl.disableVertexAttribArray(a);
  }
}

function quad(out, n, c, R, U, hw, hh, cell, kind, c1, c2, c3, state) {
  const corners = [[-1, -1, 0, 0], [1, -1, 1, 0], [1, 1, 1, 1], [-1, -1, 0, 0], [1, 1, 1, 1], [-1, 1, 0, 1]];
  for (const [sx, sy, u, v] of corners) {
    let o = n * STRIDE;
    out[o++] = c[0] + R[0] * hw * sx + U[0] * hh * sy;
    out[o++] = c[1] + R[1] * hw * sx + U[1] * hh * sy;
    out[o++] = c[2] + R[2] * hw * sx + U[2] * hh * sy;
    out[o++] = u; out[o++] = v;
    out[o++] = cell[0]; out[o++] = cell[1]; out[o++] = cell[2]; out[o++] = cell[3];
    out[o++] = kind[0]; out[o++] = kind[1]; out[o++] = kind[2]; out[o++] = kind[3];
    out[o++] = c1[0]; out[o++] = c1[1]; out[o++] = c1[2];
    out[o++] = c2[0]; out[o++] = c2[1]; out[o++] = c2[2];
    out[o++] = c3[0]; out[o++] = c3[1]; out[o++] = c3[2];
    out[o++] = state[0]; out[o++] = state[1]; out[o++] = state[2]; out[o++] = state[3];
    n++;
  }
  return n;
}

function pill(ctx, x, y, w, h, r, fill) {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); ctx.fill();
}

function ellipsize(ctx, text, max) {
  if (ctx.measureText(text).width <= max) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(t + '…').width > max) t = t.slice(0, -1);
  return t.trimEnd() + '…';
}

export function fmt(sec) {
  sec = Math.max(0, Math.round(sec));
  return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
}
