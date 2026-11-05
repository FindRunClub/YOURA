// The world behind the intro and the home sphere: the Into the Dot intro (intro/into-the-dot.html),
// running unchanged in its own frame. YOURA owns its clock and its camera: every frame it sets the view
// through the intro's own hook (window.__yra) and renders one picture at a given time.
import { DEG, qMul, yawQ, pitchQ, qRot, headingOf, pitchOf } from './math.js';

const SRC = 'intro/into-the-dot.html';
export const TAN_MIN = Math.tan(30 * DEG);   // the intro frames 60 degrees across the short side

// The intro's field of view: 60 degrees across the short side, no taller than 90 degrees on the planet.
export function worldTan(aspect, onPlanet) {
  let tx, ty;
  if (aspect >= 1) { ty = TAN_MIN; tx = ty * aspect; } else { tx = TAN_MIN; ty = tx / aspect; }
  if (onPlanet && ty > 1) { const k = 1 / ty; tx *= k; ty = 1; }
  return [tx, ty];
}

export class World {
  constructor(parent) {
    this.api = null;
    this.failed = false;
    this.T = { SW: 6.05, LAND: 9.05, END: 22 };
    const f = document.createElement('iframe');
    f.className = 'world';
    f.title = 'YOURA intro';
    f.setAttribute('aria-hidden', 'true');
    f.tabIndex = -1;
    f.style.visibility = 'hidden';   // until its own controls are hidden and YOURA takes over
    // The single-file preview carries the intro inline; the hosted app loads it as its own page.
    if (window.YOURA_INTRO_HTML) f.srcdoc = window.YOURA_INTRO_HTML; else f.src = SRC;
    parent.prepend(f);
    this.frame = f;
    this.ready = new Promise(resolve => {
      const give = ok => { if (this._done) return; this._done = true; this.failed = !ok; resolve(ok); };
      setTimeout(() => give(false), 20000);
      f.addEventListener('load', () => {
        const t0 = performance.now();
        const look = () => {
          let w, d;
          try { w = f.contentWindow; d = f.contentDocument; } catch (e) { give(false); return; }
          if (w && w.__yra && d) {
            const s = d.createElement('style');
            // its own controls, hint and cursor stay hidden: YOURA's interface sits on top
            s.textContent = '#ui,#err{display:none!important}canvas{cursor:default!important;pointer-events:none!important}';
            d.head.appendChild(s);
            this.api = w.__yra;
            this.api.freeze();
            this.T = { SW: this.api.T_SW, LAND: this.api.T_LAND, END: this.api.T_END };
            give(true);
          } else if (d && d.getElementById('err') && getComputedStyle(d.getElementById('err')).display !== 'none') {
            give(false);
          } else if (performance.now() - t0 > 8000) {
            give(false);
          } else setTimeout(look, 50);
        };
        look();
      });
    });
  }

  show(on) { this.frame.style.visibility = on ? 'visible' : 'hidden'; }

  // The intro's own scripted camera at time t, as a rotation in YOURA's terms.
  scripted(t) {
    const [yawDeg, pitchDeg] = this.api.dir(t);
    return qMul(yawQ(-yawDeg * DEG), pitchQ(pitchDeg * DEG));
  }

  // During the intro: its scripted camera moves, and the viewer's own look (heading, elevation) sits on top.
  renderIntro(t, heading, elevation) {
    if (!this.api) return;
    this.api.setView(-heading / DEG, elevation / DEG, 1);
    this.api.renderAt(t);
  }

  // Behind the tiles: cancel the scripted camera so the view is exactly the viewer's own look.
  renderHome(t, heading, elevation) {
    if (!this.api) return;
    const [yawDeg, pitchDeg] = this.api.dir(t);
    this.api.setView(-heading / DEG - yawDeg, elevation / DEG - pitchDeg, 1);
    this.api.renderAt(t);
  }

  // Where the camera actually points at time t for a viewer look (heading, elevation) during the intro.
  introView(t, heading, elevation) {
    if (!this.api) return { heading, elevation };
    const q = qMul(qMul(yawQ(heading), this.scripted(t)), pitchQ(elevation));
    const F = qRot(q, [0, 0, -1]);
    return { heading: headingOf(F), elevation: pitchOf(F) };
  }
}
