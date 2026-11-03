// Draws Into the Dot (the intro) and, once it has landed, the home planet behind the tiles.
// The intro's own shader is used unchanged, with one addition: uDim darkens the red sky to near-black
// and softens the white ground when the tiles rise, so the thumbnails read clearly.
import * as I from './intro-src.js';
import { program, drawFullscreen } from './gl.js';
import { qMul, yawQ, pitchQ, basisFromQ, clamp } from './math.js';

export const INTRO = { T_HOLD: I.T_HOLD, T_SW: I.T_SW, T_LAND: I.T_LAND, T_END: I.T_END, TAN_MIN: I.TAN_MIN, state: I.state };

function patch(src) {
  const a = 'uniform float uSrcE, uMorph, uGroundIn, uPulse, uPulseOn;';
  const b = 'vec3 skyCol = mix(WHITE, sky, rev);';
  const c = 'vec3 groundCol = mix(WHITE, groundColor(P, rd, s), uGroundIn);';
  if (!src.includes(a) || !src.includes(b) || !src.includes(c)) throw new Error('Intro shader changed: cannot add the sky dimmer');
  return src
    .replace(a, a + '\nuniform float uDim;')
    .replace(b, b + `
  vec3 dimSky = mix(vec3(0.36, 0.07, 0.125), vec3(0.055, 0.008, 0.02), smoothstep(-uDip, 0.6, e));
  dimSky = mix(dimSky, vec3(0.62, 0.2, 0.26), pa * 0.7);
  skyCol = mix(skyCol, dimSky, uDim);`)
    .replace(c, c + `
  groundCol *= mix(vec3(1.0), vec3(0.7, 0.64, 0.66), uDim);`);
}

export class IntroRenderer {
  constructor(gl, quad) {
    this.gl = gl;
    this.quad = quad;
    this.prog = program(gl, I.VERT, patch(I.FRAG), ['p']);
    this.seed = 0;
    this._letters();
    const u = this.prog.u;
    gl.useProgram(this.prog.p);
    gl.uniform1i(u.uTex, 0);
    gl.uniform4f(u.uTexMap, I.TEX_X0 - I.HALF, 1 / (I.TEX_X1 - I.TEX_X0), I.HALF - I.TEX_Y0, 1 / I.TEX_YSPAN);
    gl.uniform3f(u.uDot, I.DOT[0], I.DOT[1], I.DOT[2]);
    gl.uniform3f(u.uEarth, I.EARTH[0], I.EARTH[1], I.EARTH[2]);
    gl.uniform4f(u.uBandA, I.BANDS[0], I.BANDS[1], I.BANDS[2], I.BANDS[3]);
    gl.uniform2f(u.uBandB, I.BANDS[4], I.BANDS[5]);
    gl.uniform4f(u.uLayers, I.ZL, I.SL, I.ZA, I.SA);
    gl.uniform1f(u.uRp, I.RP);
    gl.uniform1f(u.uEqui, 0);
  }

  _letters() {
    const gl = this.gl;
    const max = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    const w = max >= I.TEX_W ? I.TEX_W : 2048, h = w / 4;
    const cv = document.createElement('canvas');
    cv.width = w; cv.height = h;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
    const s = w / (I.TEX_X1 - I.TEX_X0);
    ctx.setTransform(s, 0, 0, s, -I.TEX_X0 * s, -I.TEX_Y0 * s);
    ctx.fillStyle = '#fff';
    ctx.fill(new Path2D(I.LETTERS_PATH), 'evenodd');
    this.tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, gl.LUMINANCE, gl.UNSIGNED_BYTE, cv);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const aniso = gl.getExtension('EXT_texture_filter_anisotropic');
    if (aniso) gl.texParameterf(gl.TEXTURE_2D, aniso.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, gl.getParameter(aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));
  }

  // Field of view as the intro frames it: 60 degrees across the short side, no wider than 90 degrees tall on the planet.
  static tan(aspect, world, zoom = 1) {
    let tx, ty;
    if (aspect >= 1) { ty = I.TAN_MIN; tx = ty * aspect; } else { tx = I.TAN_MIN; ty = tx / aspect; }
    if (world === 1 && ty > 1) { const k = 1 / ty; tx *= k; ty = 1; }
    return [tx * zoom, ty * zoom];
  }

  // t: intro clock in seconds. userQ: the viewer's own rotation. dim: 0 for the intro, 1 behind the tiles.
  // reduced: no sky pulses. Returns the camera basis and field of view used, so tiles can match it.
  draw(t, userQ, width, height, { dim = 0, scripted = true, reduced = false } = {}) {
    const gl = this.gl, u = this.prog.u;
    const st = I.state(t);
    const sq = scripted ? qMul(yawQ(-st.yaw), pitchQ(st.pitch)) : [0, 0, 0, 1];
    const B = basisFromQ(qMul(sq, userQ));
    const tan = IntroRenderer.tan(width / height, st.world);
    gl.useProgram(this.prog.p);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.viewport(0, 0, width, height);
    gl.uniform2f(u.uRes, width, height);
    gl.uniform3fv(u.uRo, st.pos);
    gl.uniform3fv(u.uF, B.F); gl.uniform3fv(u.uR, B.R); gl.uniform3fv(u.uU, B.U);
    gl.uniform2f(u.uTan, tan[0], tan[1]);
    gl.uniform1f(u.uWorld, st.world);
    gl.uniform1f(u.uSeed, (this.seed = (this.seed + 7.31) % 1000));
    if (st.world === 0) {
      gl.uniform1f(u.uReveal, st.reveal);
    } else {
      gl.uniform1f(u.uDip, st.dip);
      gl.uniform1f(u.uFront, st.front);
      gl.uniform1f(u.uRingTravel, st.ringTravel);
      gl.uniform1f(u.uRingOn, st.ringOn);
      gl.uniform1f(u.uSrcE, st.srcE);
      gl.uniform1f(u.uMorph, st.morph);
      gl.uniform1f(u.uGroundIn, st.groundIn);
      gl.uniform1f(u.uPulse, st.pulse);
      gl.uniform1f(u.uPulseOn, reduced ? 0 : st.pulseOn * clamp(1 - dim * 0.6, 0, 1));
    }
    gl.uniform1f(u.uDim, dim);
    drawFullscreen(gl, this.quad, 0);
    return { B, tan, world: st.world };
  }
}
