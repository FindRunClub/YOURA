// GLSL for the demo 360 scenes that stand in for licensed video, plus the full-screen player shaders.
// Directions use +Y up and -Z as the front; every scene is seamless all the way around.

export const FS_VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

export const SCENE_LIB = `
const float PI = 3.141592653589793;
float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float h31(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p); vec3 u = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(h31(i), h31(i + vec3(1.0, 0.0, 0.0)), u.x), mix(h31(i + vec3(0.0, 1.0, 0.0)), h31(i + vec3(1.0, 1.0, 0.0)), u.x), u.y);
  float b = mix(mix(h31(i + vec3(0.0, 0.0, 1.0)), h31(i + vec3(1.0, 0.0, 1.0)), u.x), mix(h31(i + vec3(0.0, 1.0, 1.0)), h31(i + vec3(1.0, 1.0, 1.0)), u.x), u.y);
  return mix(a, b, u.z);
}
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
float fbm3(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 3; i++) { s += a * vnoise3(p); p = p * 2.07 + 11.3; a *= 0.5; } return s; }
// noise around the horizon that joins up behind you
float ringNoise(float az, float k, float s){ return vnoise(vec2(cos(az), sin(az)) * k + s); }
float starField(vec3 d, float dens, float thr){
  vec3 g = d * dens; vec3 id = floor(g);
  float h = h31(id); vec3 f = fract(g) - 0.5;
  return step(thr, h) * smoothstep(0.2, 0.0, length(f)) * (0.45 + 0.55 * h31(id + 1.7));
}
vec2 groundAt(vec3 d, float height){ return d.xz * (height / max(-d.y, 0.0015)); }

vec3 sAurora(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  float e = d.y; float az = atan(d.x, -d.z);
  vec3 col = mix(c1 * 0.32, c1 * 0.04, smoothstep(-0.05, 0.75, e));
  col += starField(d, 150.0, 0.985) * 0.9 * smoothstep(0.0, 0.2, e);
  vec3 ac = vec3(0.0);
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float base = 0.2 + fi * 0.1 + sin(az * 2.0 + t * 0.12 + fi * 1.7 + s) * 0.07 + sin(az * 5.0 - t * 0.19 + fi) * 0.025;
    float x = e - base;
    float curtain = exp(-max(x, 0.0) * 8.0) * smoothstep(-0.025, 0.0, x);
    float rays = 0.55 + 0.45 * sin(az * 40.0 + fi * 3.0 + t * 0.5) * (0.5 + 0.5 * sin(az * 13.0 - t * 0.3 + fi));
    ac += mix(c2, c3, clamp(x * 3.5 + 0.2 * fi, 0.0, 1.0)) * curtain * rays * (0.75 - 0.18 * fi);
  }
  col += ac * smoothstep(-0.01, 0.06, e);
  col += c2 * 0.12 * exp(-abs(e) * 30.0);
  if (e < 0.0) {
    vec2 P = groundAt(d, 1.0);
    float g = vnoise(P * 0.5);
    vec3 snow = mix(vec3(0.06, 0.07, 0.1), vec3(0.2, 0.23, 0.3), g) + c2 * 0.18 * exp(-length(P) * 0.04);
    col = mix(snow, col, smoothstep(-0.02, 0.0, e));
  }
  return col;
}

vec3 sNeon(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  float e = d.y; float az = atan(d.x, -d.z);
  vec3 col = mix(c2, c1, smoothstep(0.0, 0.55, e));
  col += starField(d, 120.0, 0.988) * 0.8 * smoothstep(0.25, 0.6, e);
  vec3 sunDir = normalize(vec3(0.0, 0.13, -1.0));
  float sd = length(d - sunDir);
  float stripes = step(0.42, fract((d.y - 0.13) * 42.0 - t * 0.25));
  float sun = smoothstep(0.255, 0.245, sd) * mix(stripes, 1.0, smoothstep(0.1, 0.16, d.y));
  col = mix(col, mix(c3, vec3(1.0, 0.92, 0.55), smoothstep(0.0, 0.3, d.y)), sun);
  col += c2 * 0.4 * exp(-sd * 3.5);
  float m = 0.025 + 0.07 * ringNoise(az, 3.0, s) + 0.012 * ringNoise(az, 18.0, s + 4.0);
  if (e > -0.01 && e < m) col = mix(c1 * 0.22, c2 * 0.18, 0.5);
  if (e < 0.0) {
    vec2 P = groundAt(d, 1.0); P.y -= t * 2.2;
    vec2 g = abs(fract(P * 0.5) - 0.5);
    vec2 w = fwidth(P * 0.5) * 1.5 + 0.02;
    float line = max(smoothstep(w.x, 0.0, g.x), smoothstep(w.y, 0.0, g.y));
    float fog = exp(-length(groundAt(d, 1.0)) * 0.025);
    col = mix(c2 * 0.35, mix(c1 * 0.1, c3, line), fog);
  }
  return col;
}

vec3 skyGrad(vec3 d, vec3 c1, vec3 c2, vec3 c3, vec3 sunDir){
  float sun = max(dot(d, sunDir), 0.0);
  vec3 c = mix(c2, c1, smoothstep(-0.02, 0.5, d.y));
  return c + c3 * (pow(sun, 700.0) * 4.0 + pow(sun, 10.0) * 0.32);
}

vec3 sOcean(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  vec3 sunDir = normalize(vec3(0.35, 0.16, -1.0));
  float e = d.y;
  vec3 col = skyGrad(d, c1, c2, c3, sunDir);
  if (e > 0.0) {
    vec2 cp = d.xz / (e + 0.1) * 0.9 + vec2(t * 0.015, s);
    float c = smoothstep(0.55, 0.85, fbm(cp));
    col = mix(col, mix(vec3(1.0), c2, 0.3), c * 0.55 * smoothstep(0.0, 0.18, e));
  } else {
    vec2 P = groundAt(d, 1.0);
    float x = P.x, z = P.y;
    float dx = 0.09 * cos(0.6 * x + 1.1 * t) + 0.1 * cos(1.7 * (x + z) + 1.7 * t);
    float dz = 0.11 * cos(0.9 * z - 0.9 * t + 1.3) + 0.1 * cos(1.7 * (x + z) + 1.7 * t);
    vec3 n = normalize(vec3(-dx, 1.0, -dz));
    n = normalize(mix(n, vec3(0.0, 1.0, 0.0), clamp(length(P) / 70.0, 0.0, 1.0)));
    vec3 r = reflect(d, n); r.y = abs(r.y);
    float fres = 0.03 + 0.97 * pow(1.0 - max(dot(-d, n), 0.0), 5.0);
    vec3 deep = mix(c1 * 0.25, c2 * 0.18, 0.4);
    vec3 water = mix(deep, skyGrad(r, c1, c2, c3, sunDir), fres);
    col = mix(water, col, smoothstep(-0.012, 0.0, e));
  }
  return col;
}

vec3 sConcert(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  float e = d.y; float az = atan(d.x, -d.z);
  vec3 col = c1 * (0.05 + 0.08 * smoothstep(0.5, -0.1, e));
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec3 o = vec3((fi - 2.0) * 1.7, -0.7, -7.0);
    float sw = sin(t * (0.55 + 0.12 * fi) + fi * 1.9 + s) * 0.75;
    vec3 ax = normalize(vec3(sin(sw) * 0.85, 0.9, -0.2 + 0.45 * cos(t * 0.37 + fi)));
    vec3 w0 = -o;
    float b = dot(d, ax), dd = dot(d, w0), ee = dot(ax, w0);
    float den = max(1.0 - b * b, 1e-4);
    float sp = (b * ee - dd) / den;
    float up = (ee - b * dd) / den;
    sp = max(sp, 0.0); up = max(up, 0.0);
    float dist = length(d * sp - (o + ax * up));
    float wdt = 0.06 + 0.09 * up;
    float glow = exp(-dist * dist / (wdt * wdt)) * exp(-up * 0.1);
    vec3 bc = mod(fi, 2.0) < 0.5 ? c2 : c3;
    col += bc * glow * (0.75 + 0.25 * sin(t * 6.0 + fi * 2.3));
  }
  vec2 sp2 = vec2(az * 1.6, (e + 0.1) * 6.0);
  col += mix(c2, c3, 0.5 + 0.5 * sin(t * 0.8)) * 0.55 * exp(-dot(sp2, sp2));
  float crowd = -0.07 + 0.03 * ringNoise(az, 40.0, s) + 0.008 * sin(az * 90.0 + t * 4.0);
  if (e < crowd) col = mix(col, vec3(0.012, 0.01, 0.015), 0.92);
  return col;
}

vec3 sWarp(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  float ang = acos(clamp(-d.z, -1.0, 1.0));
  float phi = atan(d.y, d.x);
  float n = 72.0;
  float lanePos = (phi + PI) / (2.0 * PI) * n;
  float id = floor(lanePos);
  float lane = h11(id + s * 13.0);
  float on = step(0.4, lane);
  float flow = fract(ang * 1.6 - t * (0.45 + lane * 0.8) + lane * 9.0);
  float streak = on * pow(flow, 14.0) * smoothstep(0.02, 0.35, ang);
  streak *= smoothstep(0.5, 0.15, abs(fract(lanePos) - 0.5));
  vec3 col = mix(c1 * 0.25, c1 * 0.05, ang / PI);
  col += streak * mix(c2, c3, lane) * 2.2;
  col += c2 * 0.45 * exp(-ang * 5.0);
  return col;
}

vec3 sPlanet(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  float e = d.y;
  vec3 col = mix(c2, c1, smoothstep(0.0, 0.7, e));
  vec3 sd = normalize(vec3(0.0, 0.07, -1.0));
  float sdist = length(d - sd);
  if (e < 0.0) {
    vec2 P = groundAt(d, 1.0);
    float r = length(P);
    float ring = abs(fract(r * 0.22 - t * 0.28) - 0.5);
    float band = smoothstep(0.1, 0.05, ring) * exp(-r * 0.035);
    vec3 g = mix(vec3(0.99, 0.97, 0.97), c3, band);
    g = mix(g, vec3(1.0, 0.86, 0.87), exp(e * 25.0) * 0.6);
    col = mix(g, col, smoothstep(-0.012, 0.0, e));
  }
  col = mix(col, vec3(1.0), smoothstep(0.034, 0.03, sdist));
  col += vec3(1.0, 0.45, 0.5) * 0.4 * exp(-sdist * 7.0);
  return col;
}

vec3 sDesert(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  vec3 sunDir = normalize(vec3(-0.55, 0.11, -1.0));
  float e = d.y; float az = atan(d.x, -d.z);
  vec3 col = skyGrad(d, c1, c2, c3, sunDir);
  float m = 0.015 + 0.075 * smoothstep(0.45, 0.62, ringNoise(az, 4.0, s)) + 0.012 * ringNoise(az, 30.0, s + 2.0);
  if (e > -0.005 && e < m) col = mix(c2 * 0.5, c1 * 0.35, 0.45) * (0.75 + 0.25 * ringNoise(az, 60.0, s + 5.0));
  if (e < 0.0) {
    vec2 P = groundAt(d, 1.0);
    float dune = fbm(P * 0.12 + vec2(t * 0.012, s));
    float shade = 0.68 + 0.32 * sin(P.x * 0.22 + dune * 7.0);
    vec3 sand = mix(c2 * 0.8, c3, dune) * shade;
    float fog = exp(-length(P) * 0.018);
    col = mix(mix(c2 * 0.9, sand, fog), col, smoothstep(-0.01, 0.0, e));
  }
  return col;
}

vec3 sStadium(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  float e = d.y; float az = atan(d.x, -d.z);
  vec3 col = mix(c1 * 0.14, c1 * 0.03, smoothstep(0.15, 0.85, e));
  col += starField(d, 120.0, 0.99) * 0.5 * smoothstep(0.35, 0.65, e);
  if (e > -0.025 && e < 0.25) {
    float seat = h21(floor(vec2(az * 170.0, e * 130.0)));
    vec3 crowd = mix(c2, c3, step(0.5, seat)) * (0.2 + 0.55 * step(0.62, seat)) * (0.65 + 0.35 * sin(t * 2.2 + seat * 30.0));
    col = mix(col, crowd * 0.7 + c1 * 0.06, smoothstep(0.25, 0.21, e) * smoothstep(-0.025, -0.005, e));
  }
  for (int i = 0; i < 4; i++) {
    float a = float(i) * 1.5708 + 0.7854;
    vec3 L = normalize(vec3(sin(a), 0.45, -cos(a)));
    float l = max(dot(d, L), 0.0);
    col += vec3(1.0, 0.97, 0.9) * (pow(l, 900.0) * 6.0 + pow(l, 26.0) * 0.22);
  }
  if (e < -0.025) {
    vec2 P = groundAt(d, 1.0);
    float stripe = step(0.5, fract(P.y * 0.22));
    vec3 grass = mix(vec3(0.06, 0.3, 0.11), vec3(0.08, 0.37, 0.14), stripe);
    vec2 q = P - vec2(0.0, -11.0);
    float lw = 0.09 + length(P) * 0.004;
    float marks = max(smoothstep(lw, 0.0, abs(length(q) - 4.0)), smoothstep(lw, 0.0, abs(q.y)));
    marks = max(marks, smoothstep(lw, 0.0, abs(abs(q.x) - 15.0)));
    grass = mix(grass, vec3(0.93), marks * exp(-length(P) * 0.025));
    col = mix(grass * (0.75 + 0.25 * exp(-length(P) * 0.02)), col, smoothstep(-0.035, -0.025, e));
  }
  return col;
}

vec3 sClouds(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  float e = d.y;
  vec3 col = mix(c2, c1, smoothstep(-0.15, 0.6, e));
  vec3 sunDir = normalize(vec3(0.4, 0.5, -0.6));
  col += vec3(1.0, 0.95, 0.85) * pow(max(dot(d, sunDir), 0.0), 300.0) * 3.0;
  if (e < 0.06) {
    float h = 1.0 + 5.0 * fract(-t * 0.05);
    vec2 P = d.xz * (h / max(0.06 - e, 0.02));
    float c = fbm(P * 0.16 + s);
    float detail = fbm(P * 0.55 + 3.0);
    vec3 cloud = mix(vec3(0.78, 0.83, 0.9), vec3(1.0), detail);
    float cov = smoothstep(0.42, 0.68, c);
    vec3 below = mix(c3 * 0.6, c3, vnoise(P * 0.04));
    col = mix(mix(below, cloud, cov), col, smoothstep(-0.12, 0.06, e));
  }
  return col;
}

vec3 sSpace(vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  vec3 col = c1 * 0.06;
  col += starField(d, 210.0, 0.982) + starField(d, 90.0, 0.99) * 0.7;
  float n = fbm3(d * 2.4 + vec3(t * 0.01, s, 0.0));
  float n2 = fbm3(d * 4.8 - vec3(0.0, t * 0.012, s) + 5.0);
  col += mix(c2, c3, n2) * smoothstep(0.42, 0.8, n) * 0.95;
  vec3 pc = normalize(vec3(-0.38, -0.12, -1.0));
  float dd = length(d - pc);
  float body = smoothstep(0.205, 0.2, dd);
  float lit = clamp(dot(normalize(d - pc), normalize(vec3(0.7, 0.5, 0.2))) * 0.5 + 0.5, 0.0, 1.0);
  col = mix(col, c3 * 0.5 * (0.25 + 0.75 * lit) * (0.8 + 0.2 * vnoise3(d * 40.0)), body);
  col += c2 * 0.5 * smoothstep(0.02, 0.0, abs(dd - 0.2));
  return col;
}

vec3 scene(float k, vec3 d, float t, vec3 c1, vec3 c2, vec3 c3, float s){
  if (k < 0.5) return sAurora(d, t, c1, c2, c3, s);
  if (k < 1.5) return sNeon(d, t, c1, c2, c3, s);
  if (k < 2.5) return sOcean(d, t, c1, c2, c3, s);
  if (k < 3.5) return sConcert(d, t, c1, c2, c3, s);
  if (k < 4.5) return sWarp(d, t, c1, c2, c3, s);
  if (k < 5.5) return sPlanet(d, t, c1, c2, c3, s);
  if (k < 6.5) return sDesert(d, t, c1, c2, c3, s);
  if (k < 7.5) return sStadium(d, t, c1, c2, c3, s);
  if (k < 8.5) return sClouds(d, t, c1, c2, c3, s);
  return sSpace(d, t, c1, c2, c3, s);
}
`;

// Full-screen procedural scene, used by the player and the poster renderer.
export const SCENE_FRAG = `#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 uRes;
uniform vec3 uF, uR, uU;
uniform vec2 uTan;
uniform float uKind, uTime, uSeed;
uniform vec3 uC1, uC2, uC3;
${SCENE_LIB}
void main(){
  vec2 ndc = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  vec3 d = normalize(uF + ndc.x * uTan.x * uR + ndc.y * uTan.y * uU);
  vec3 col = scene(uKind, d, uTime, uC1, uC2, uC3, uSeed);
  col += (h21(gl_FragCoord.xy + fract(uTime) * 91.0) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}`;

// Equirectangular 360 video: the middle of the frame is the front.
export const VIDEO_FRAG = `precision highp float;
uniform vec2 uRes;
uniform vec3 uF, uR, uU;
uniform vec2 uTan;
uniform sampler2D uVid;
uniform float uStereo;
const float PI = 3.141592653589793;
void main(){
  vec2 ndc = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  vec3 d = normalize(uF + ndc.x * uTan.x * uR + ndc.y * uTan.y * uU);
  float lon = atan(d.x, -d.z);
  float lat = asin(clamp(d.y, -1.0, 1.0));
  vec2 uv = vec2(0.5 + lon / (2.0 * PI), 0.5 + lat / PI);
  if (uStereo > 0.5) uv.y = 0.5 + uv.y * 0.5;
  gl_FragColor = vec4(texture2D(uVid, uv).rgb, 1.0);
}`;
