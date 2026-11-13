// The intro, in real 3D: the YOURA sign stands on a black studio floor. The camera pushes in toward the white
// dot, the three categories fly past, and it goes through the dot into the studio.
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import fontData from 'three/examples/fonts/helvetiker_bold.typeface.json';
import { LETTERS_PATH, HALF, DOT, EARTH, BANDS, RED } from './logo.js';
import { clamp, smoothstep } from './math.js';

const S = 0.012;                          // metres per logo unit: the wordmark is 8 m wide
const TAN_MIN = Math.tan(Math.PI / 6);    // 60 degrees across the short side of the screen
const D0 = (HALF * S) / 0.82 / TAN_MIN;   // start far enough back that the wordmark fits
const T_HOLD = 1.1, T_PUSH = 5.3, PUSH_P = 1.6;

export const INTRO_T = { HOLD: T_HOLD, IN: T_HOLD + T_PUSH, SHORT_START: T_HOLD + T_PUSH * 0.52 };

export class Intro {
  constructor(renderer) {
    const scene = this.scene = new THREE.Scene();
    scene.background = null;
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.42;
    pm.dispose();

    const logo = this.logo = new THREE.Group();
    // letters: thick white enamel with a clear coat
    const svg = new SVGLoader().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${LETTERS_PATH}" fill-rule="evenodd"/></svg>`);
    const shapes = [];
    for (const p of svg.paths) shapes.push(...SVGLoader.createShapes(p));
    const lg = new THREE.ExtrudeGeometry(shapes, { depth: 34, bevelEnabled: true, bevelThickness: 2.4, bevelSize: 1.5, bevelSegments: 3, curveSegments: 14 });
    const enamel = new THREE.MeshPhysicalMaterial({ color: 0xf2f2f0, roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.07 });
    const letters = new THREE.Mesh(lg, enamel);
    letters.scale.set(1, -1, 1);                       // SVG y runs down
    letters.position.set(-HALF, HALF, -17);
    logo.add(letters);
    // the three red arcs, trimmed by the big circle exactly as in the logo
    const vx = DOT[0] - EARTH[0], vy = DOT[1] - EARTH[1], vl = Math.hypot(vx, vy), phi = Math.atan2(vy, vx);
    const half = r => Math.acos(clamp((EARTH[2] * EARTH[2] - vl * vl - r * r) / (2 * r * vl), -1, 1));
    const glow = new THREE.MeshStandardMaterial({ color: 0x18020a, emissive: RED, emissiveIntensity: 2.6, roughness: 0.35 });
    for (let k = 0; k < 3; k++) {
      const r0 = BANDS[k * 2], r1 = BANDS[k * 2 + 1];
      const h0 = half(r0), h1 = half(r1);
      const sh = new THREE.Shape();
      sh.absarc(DOT[0], DOT[1], r1, phi - h1, phi + h1, false);
      sh.absarc(DOT[0], DOT[1], r0, phi + h0, phi - h0, true);
      sh.closePath();
      const g = new THREE.ExtrudeGeometry(sh, { depth: 20, bevelEnabled: true, bevelThickness: 1.6, bevelSize: 1.0, bevelSegments: 2, curveSegments: 72 });
      const m = new THREE.Mesh(g, glow);
      m.position.z = -10;
      logo.add(m);
    }
    this.glow = glow;
    // the dot
    this.dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 7, 7) });
    const dot = new THREE.Mesh(new THREE.SphereGeometry(DOT[2], 48, 32), this.dotMat);
    dot.position.set(DOT[0], DOT[1], 0);
    logo.add(dot);
    logo.scale.setScalar(S);
    logo.position.set(0, 0, -D0);
    scene.add(logo);
    // a mirror image under a dark glossy floor
    const floorY = (HALF - 392) * S - 0.05;
    const mirror = logo.clone();
    mirror.scale.set(S, -S, S);
    mirror.position.y = 2 * floorY;
    scene.add(mirror);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uC: { value: new THREE.Vector3(0, floorY, -D0) } },
      vertexShader: /* glsl */`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */`precision highp float; uniform vec3 uC; varying vec3 vW;
        void main(){ float d = length(vW.xz - uC.xz); gl_FragColor = vec4(vec3(0.004, 0.004, 0.005), mix(0.8, 1.0, smoothstep(2.0, 14.0, d))); }`
    }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = floorY;
    floor.renderOrder = 2;
    scene.add(floor);
    // light from the sign itself, plus a cool rim from behind
    this.redLight = new THREE.PointLight(RED, 60, 30, 2);
    this.redLight.position.set(DOT[0] * S, DOT[1] * S + 0.5, -D0 + 1.2);
    scene.add(this.redLight);
    this.whiteLight = new THREE.PointLight(0xffffff, 14, 12, 2);
    this.whiteLight.position.set(DOT[0] * S, DOT[1] * S, -D0 + 0.5);
    scene.add(this.whiteLight);
    const key = new THREE.DirectionalLight(0xdfe8ff, 1.3);
    key.position.set(-4, 6, 5);
    scene.add(key);

    this.center = new THREE.Vector3(DOT[0] * S, DOT[1] * S, -D0);
    this.dotR = DOT[2] * S;
    this.L0 = this.center.length();
    this.K = Math.log(this.L0 / (0.3 * this.dotR));
    this.aim = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(new THREE.Vector3(), this.center, new THREE.Vector3(0, 1, 0)));
    this._words();
    this._streaks();
    this.q = new THREE.Quaternion();
    this.pos = new THREE.Vector3();
    this.speed = 0;
  }

  // MUSICIAN, ATHLETE, CHARACTER: solid letters hanging along the way in.
  _words() {
    const font = new FontLoader().parse(fontData);
    const mat = new THREE.MeshPhysicalMaterial({ color: 0xf2f2f0, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.08, transparent: true });
    this.words = [];
    const dir = this.center.clone().normalize();
    const side = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
    [['MUSICIAN', 0.40, -1], ['ATHLETE', 0.60, 1], ['CHARACTER', 0.78, -1]].forEach(([text, at, s], k) => {
      const g = new TextGeometry(text, { font, size: 0.34, depth: 0.09, curveSegments: 6, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.008, bevelSegments: 2 });
      g.computeBoundingBox();
      g.translate(-(g.boundingBox.max.x + g.boundingBox.min.x) / 2, -0.17, -0.045);
      const m = new THREE.Mesh(g, mat.clone());
      const dist = this.L0 * (1 - at);                         // how far from the dot along the path
      m.position.copy(this.center).addScaledVector(dir, -dist).addScaledVector(side, s * 0.62).add(new THREE.Vector3(0, s * 0.18 - 0.16, 0));
      m.quaternion.copy(this.aimFor(m.position));
      m.rotateY(s * -0.5);
      m.userData.at = dist;
      this.scene.add(m);
      this.words.push(m);
    });
  }

  aimFor(p) {
    return new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(new THREE.Vector3(), this.center, new THREE.Vector3(0, 1, 0)));
  }

  // Thin streaks of light along the way, which stretch as the camera speeds up.
  _streaks() {
    const N = 220;
    this.sN = N;
    this.sBase = new Float32Array(N * 3);
    const pos = new Float32Array(N * 6), col = new Float32Array(N * 6);
    for (let i = 0; i < N; i++) {
      const a = Math.random() * Math.PI * 2, r = 0.35 + Math.pow(Math.random(), 0.7) * 3.2;
      this.sBase[i * 3] = Math.cos(a) * r; this.sBase[i * 3 + 1] = Math.sin(a) * r; this.sBase[i * 3 + 2] = Math.random();
      const red = Math.random() < 0.4;
      for (let k = 0; k < 2; k++) { col[i * 6 + k * 3] = 1; col[i * 6 + k * 3 + 1] = red ? 0.1 : 0.95; col[i * 6 + k * 3 + 2] = red ? 0.2 : 0.95; }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.sMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.streaks = new THREE.LineSegments(g, this.sMat);
    this.streaks.frustumCulled = false;
    this.scene.add(this.streaks);
    const dir = this.center.clone().normalize();
    const up = new THREE.Vector3(0, 1, 0);
    this.sX = new THREE.Vector3().crossVectors(dir, up).normalize();
    this.sY = new THREE.Vector3().crossVectors(this.sX, dir).normalize();
    this.sDir = dir;
  }

  // Field of view: 60 degrees across the short side.
  fov(aspect) { return 2 * Math.atan(aspect >= 1 ? TAN_MIN : TAN_MIN / aspect) * 180 / Math.PI; }

  // Place the camera for time t (seconds). userQ is the viewer's own look. Returns how white the screen should be.
  apply(t, camera, userQ, reduced) {
    const u = clamp((t - T_HOLD) / T_PUSH, 0, 1);
    const e = Math.pow(u, PUSH_P);
    const drift = smoothstep(0, T_HOLD + 0.6, t) * 0.05;                // a slow creep forward while the sign holds
    const f = Math.exp(-this.K * e) * (1 - drift * (1 - u));
    const dist = this.L0 * f;
    this.pos.copy(this.center).multiplyScalar(1 - f);
    camera.position.copy(this.pos);
    const turn = smoothstep(0.04, 0.6, u);
    this.q.identity().slerp(this.aim, turn);
    camera.quaternion.copy(this.q).multiply(userQ);
    const prev = this._dist == null ? dist : this._dist;
    this.speed = Math.max(0, prev - dist);
    this._dist = dist;
    // words fade in as they come near, and out as the camera passes
    const along = this.L0 - dist;                                         // how far the camera has travelled
    for (const w of this.words) {
      const ahead = (this.L0 - w.userData.at) - along;                     // distance still to go to reach the word
      w.material.opacity = smoothstep(7.0, 3.0, ahead) * smoothstep(-0.2, 0.5, ahead);
      w.visible = w.material.opacity > 0.01;
    }
    // streaks
    const sp = clamp(this.speed * 60, 0, 40);
    this.sMat.opacity = reduced ? 0 : smoothstep(0.6, 6.0, sp) * 0.75;
    if (this.sMat.opacity > 0.01) {
      const p = this.streaks.geometry.attributes.position.array;
      const len = 0.05 + sp * 0.05, span = 14;
      for (let i = 0; i < this.sN; i++) {
        const z = ((this.sBase[i * 3 + 2] * span - along) % span + span) % span - 2;      // metres ahead of the camera
        const bx = this.sBase[i * 3], by = this.sBase[i * 3 + 1];
        const ox = this.pos.x + this.sX.x * bx + this.sY.x * by + this.sDir.x * z;
        const oy = this.pos.y + this.sX.y * bx + this.sY.y * by + this.sDir.y * z;
        const oz = this.pos.z + this.sX.z * bx + this.sY.z * by + this.sDir.z * z;
        p[i * 6] = ox; p[i * 6 + 1] = oy; p[i * 6 + 2] = oz;
        p[i * 6 + 3] = ox + this.sDir.x * len; p[i * 6 + 4] = oy + this.sDir.y * len; p[i * 6 + 5] = oz + this.sDir.z * len;
      }
      this.streaks.geometry.attributes.position.needsUpdate = true;
    }
    this.streaks.visible = this.sMat.opacity > 0.01;
    // the sign breathes a little, and the dot swells as you close in
    this.glow.emissiveIntensity = 2.4 + 0.25 * Math.sin(t * 2.1);
    const near = smoothstep(this.dotR * 30, this.dotR * 2, dist);
    this.dotMat.color.setScalar(7 + 30 * near);
    return smoothstep(this.dotR * 1.6, this.dotR * 0.85, dist);
  }

  reset() { this._dist = null; }
}
