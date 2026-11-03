// How the viewer looks around: the phone's motion sensors, a finger drag, or both.
// Motion steers the whole view (including roll, so the horizon stays level), and a drag adds a turn on top.
import { DEG, clamp, wrapPi, easeOutCubic, qMul, qAxis, qEulerYXZ, qRot, yawQ, pitchQ, headingOf, pitchOf } from './math.js';

const Q_BACK = [-Math.SQRT1_2, 0, 0, Math.SQRT1_2]; // look out of the back of the phone, not its top edge

export class Look {
  constructor() {
    this.prefer = 'motion';        // what the viewer chose: 'motion' or 'touch'
    this.motion = 'off';           // 'off' | 'pending' | 'on' | 'unavailable'
    this.devQ = null;              // latest phone orientation
    this.yawOff = 0;               // lines the phone's heading up with the scene
    this.yaw = 0;                  // drag (and arrow) turn, radians, positive = right
    this.pitch = 0;                // drag tilt, used only without motion
    this.vyaw = 0; this.vpitch = 0;
    this.zoom = 1;
    this.invert = false;
    this.glide = true;
    this.anim = null;
    this.dragging = false;
    this.lastReading = 0;
    this._onOri = this._onOri.bind(this);
  }

  get usingMotion() { return this.prefer === 'motion' && this.motion === 'on' && !!this.devQ; }

  // Must be called from a tap: iOS asks for permission the first time.
  async enableMotion() {
    if (this.motion === 'on') return true;
    if (typeof window.DeviceOrientationEvent === 'undefined') { this.motion = 'unavailable'; return false; }
    const before = this.heading();
    try {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const answer = await DeviceOrientationEvent.requestPermission();
        if (answer !== 'granted') { this.motion = 'unavailable'; return false; }
      }
    } catch (err) {
      this.motion = 'unavailable';
      return false;
    }
    window.addEventListener('deviceorientation', this._onOri);
    this.motion = 'pending';
    const ok = await new Promise(resolve => {
      const t0 = performance.now();
      const check = () => {
        if (this.devQ) resolve(true);
        else if (performance.now() - t0 > 1600) resolve(false);
        else setTimeout(check, 80);
      };
      check();
    });
    if (!ok) {
      window.removeEventListener('deviceorientation', this._onOri);
      this.motion = 'unavailable';
      return false;
    }
    this.motion = 'on';
    // Keep the same heading on screen when motion takes over.
    const devHeading = headingOf(qRot(this.devQ, [0, 0, -1]));
    this.yawOff = wrapPi(before - devHeading - this.yaw);
    this.pitch = 0; this.vpitch = 0;
    return true;
  }

  _onOri(e) {
    if (e.alpha == null && e.beta == null && e.gamma == null) return;
    const o = (screen.orientation && typeof screen.orientation.angle === 'number') ? screen.orientation.angle : (window.orientation || 0);
    let q = qEulerYXZ((e.beta || 0) * DEG, (e.alpha || 0) * DEG, -(e.gamma || 0) * DEG);
    q = qMul(q, Q_BACK);
    q = qMul(q, qAxis(0, 0, 1, -o * DEG));
    this.devQ = q;
    this.lastReading = performance.now();
  }

  // Switch between motion and touch without the view jumping.
  setPrefer(p) {
    if (p === this.prefer) return;
    const h = this.heading(), e = this.elevation();
    this.prefer = p;
    this.anim = null; this.stopGlide();
    if (p === 'touch') { this.yaw = h; this.pitch = clamp(e, -85 * DEG, 85 * DEG); }
    else if (this.motion === 'on' && this.devQ) {
      const devHeading = headingOf(qRot(this.devQ, [0, 0, -1]));
      this.yaw = 0;
      this.yawOff = wrapPi(h - devHeading);
    }
  }

  // Make the given heading straight ahead, right now. With motion this clears the drag,
  // so wherever the phone points becomes the front.
  recenter(heading = 0) {
    this.anim = null; this.stopGlide();
    if (this.usingMotion) {
      const devHeading = headingOf(qRot(this.devQ, [0, 0, -1]));
      this.yaw = 0;
      this.yawOff = wrapPi(heading - devHeading);
    } else {
      this.yaw = heading;
      this.pitch = 0;
    }
  }

  // The viewer's own rotation (the scene's scripted camera, if any, is applied on top by the caller).
  quat() {
    if (this.usingMotion) return qMul(yawQ(this.yawOff + this.yaw), this.devQ);
    return qMul(yawQ(this.yaw), pitchQ(this.pitch));
  }

  heading() { return headingOf(qRot(this.quat(), [0, 0, -1])); }
  elevation() { return pitchOf(qRot(this.quat(), [0, 0, -1])); }

  // radPerPx: how far one pixel of drag turns the view.
  drag(dx, dy, radPerPx, dt) {
    const s = this.invert ? -1 : 1;
    const dyaw = -dx * radPerPx * s;
    this.yaw += dyaw;
    if (!this.usingMotion) this.pitch = clamp(this.pitch + dy * radPerPx * s, -85 * DEG, 85 * DEG);
    const v = 1 / Math.max(dt, 0.008);
    this.vyaw = 0.75 * this.vyaw + 0.25 * dyaw * v;
    this.vpitch = this.usingMotion ? 0 : 0.75 * this.vpitch + 0.25 * dy * radPerPx * s * v;
    this.anim = null;
  }

  stopGlide() { this.vyaw = 0; this.vpitch = 0; }

  // Turn so the given heading (radians) is straight ahead.
  face(heading, { level = true, duration = 0.7 } = {}) {
    const delta = wrapPi(heading - this.heading());
    this.anim = {
      y0: this.yaw, y1: this.yaw + delta,
      p0: this.pitch, p1: level && !this.usingMotion ? 0 : this.pitch,
      k: 0, dur: Math.max(0.001, duration)
    };
    this.stopGlide();
  }

  turn(by, duration = 0.45) {
    const base = this.anim ? this.anim.y1 : this.yaw;
    this.anim = { y0: this.yaw, y1: base + by, p0: this.pitch, p1: this.pitch, k: 0, dur: duration };
    this.stopGlide();
  }

  update(dt) {
    if (this.anim) {
      const a = this.anim;
      a.k = Math.min(1, a.k + dt / a.dur);
      const e = easeOutCubic(a.k);
      this.yaw = a.y0 + (a.y1 - a.y0) * e;
      this.pitch = a.p0 + (a.p1 - a.p0) * e;
      if (a.k >= 1) this.anim = null;
    } else if (!this.dragging && (this.vyaw || this.vpitch)) {
      if (!this.glide) { this.stopGlide(); return; }
      this.yaw += this.vyaw * dt;
      if (!this.usingMotion) this.pitch = clamp(this.pitch + this.vpitch * dt, -85 * DEG, 85 * DEG);
      const k = Math.exp(-dt * 4.2);
      this.vyaw *= k; this.vpitch *= k;
      if (Math.abs(this.vyaw) + Math.abs(this.vpitch) < 0.002) this.stopGlide();
    }
  }

  // How fast the view is spinning from drag or glide, radians per second (drives the comfort vignette).
  spinSpeed() { return Math.abs(this.vyaw); }
}
