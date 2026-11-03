// Small DOM helpers, icons, toasts and an in-page confirm.

export function h(tag, props, ...kids) {
  const el = document.createElement(tag);
  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k === 'html') el.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (typeof v === 'boolean' || typeof v === 'number' && k in el) el[k] = v;
      else el.setAttribute(k, v === true ? '' : v);
    }
  }
  for (const kid of kids.flat(Infinity)) {
    if (kid == null || kid === false) continue;
    el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  return el;
}

const P = {
  back: '<path d="M15 5l-7 7 7 7"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  play: '<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/>',
  pause: '<path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor" stroke="none"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1" fill="currentColor"/><circle cx="4.5" cy="12" r="1" fill="currentColor"/><circle cx="4.5" cy="18" r="1" fill="currentColor"/>',
  saved: '<path d="M6.5 3.5h11v17l-5.5-4-5.5 4z"/>',
  savedOn: '<path d="M6.5 3.5h11v17l-5.5-4-5.5 4z" fill="currentColor"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3L5.5 5.5"/>',
  share: '<path d="M12 15V3.5M7.5 8L12 3.5 16.5 8"/><path d="M5 12.5v6.5a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5v-6.5"/>',
  motion: '<rect x="7" y="3" width="10" height="18" rx="2.2"/><path d="M3.5 8.5a6 6 0 000 7M20.5 8.5a6 6 0 010 7"/>',
  touch: '<path d="M9.5 11V5.5a1.5 1.5 0 013 0V11m0-1.5a1.5 1.5 0 013 0V12m0-1a1.5 1.5 0 013 0v4.5a6 6 0 01-6 6h-.6a6 6 0 01-4.9-2.6L4.6 15a1.5 1.5 0 012.4-1.8l2.5 2.3"/>',
  left: '<path d="M14.5 6l-6 6 6 6"/>',
  right: '<path d="M9.5 6l6 6-6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z"/>',
  heartOn: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z" fill="currentColor"/>',
  meh: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 15.5h7"/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="10" r=".9" fill="currentColor"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<path d="M4.5 7h15M10 7V4.5h4V7M6.5 7l1 13h9l1-13"/>',
  front: '<circle cx="12" cy="12" r="8.5"/><path d="M12 6.5l3 6.5h-6z" fill="currentColor" stroke="none"/>',
  replay: '<path d="M4.5 12a7.5 7.5 0 107.5-7.5H9"/><path d="M11 2l-2.5 2.5L11 7"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".9" fill="currentColor"/>'
};

export function icon(name, size = 22) {
  const s = h('span', { class: 'ico', 'aria-hidden': 'true' });
  s.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
  return s;
}

export function setIcon(el, name, size = 22) {
  const old = el.querySelector('.ico');
  const n = icon(name, size);
  if (old) old.replaceWith(n); else el.prepend(n);
}

// The YOURA mark: the "O" from the logo, three red arcs over the white dot, cut by the planet's curve.
// Same geometry as the intro (centred on the dot, y down).
let markId = 0;
export function mark(size = 40) {
  const id = 'ym' + (++markId);
  const s = h('span', { class: 'mark', 'aria-hidden': 'true' });
  s.innerHTML = `<svg width="${size}" height="${size}" viewBox="-96 -134 192 192"><defs><mask id="${id}"><rect x="-96" y="-134" width="192" height="192" fill="#fff"/><circle cx="-0.51" cy="171.97" r="181.76" fill="#000"/></mask></defs><g fill="none" stroke="#E11737" mask="url(#${id})"><circle r="32.95" stroke-width="12.1"/><circle r="57.38" stroke-width="11.11"/><circle r="81.95" stroke-width="12.11"/></g><circle r="10.74" fill="#fff"/></svg>`;
  return s;
}

export function comfortBars(level) {
  const s = h('span', { class: 'bars', 'aria-hidden': 'true' });
  for (let i = 1; i <= 3; i++) s.append(h('i', { class: i <= level ? 'on' : '' }));
  return s;
}

let toastEl = null, toastTimer = 0;
export function toast(msg, ms = 2600) {
  if (!toastEl) {
    toastEl = h('div', { class: 'toast', role: 'status', 'aria-live': 'polite' });
    document.getElementById('app').append(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('on'), ms);
}

export function confirmDialog({ title, body, ok = 'OK', cancel = 'Cancel', danger = false }) {
  return new Promise(resolve => {
    const done = v => { wrap.classList.remove('open'); setTimeout(() => wrap.remove(), 250); document.removeEventListener('keydown', onKey, true); resolve(v); };
    const onKey = e => { if (e.key === 'Escape') { e.stopPropagation(); done(false); } };
    const okBtn = h('button', { class: 'btn ' + (danger ? 'danger' : 'primary'), onclick: () => done(true) }, ok);
    const wrap = h('div', { class: 'modal', role: 'alertdialog', 'aria-modal': 'true', 'aria-labelledby': 'cd-title' },
      h('div', { class: 'modal-scrim', onclick: () => done(false) }),
      h('div', { class: 'card' },
        h('h2', { id: 'cd-title' }, title),
        body ? h('p', { class: 'muted' }, body) : null,
        h('div', { class: 'row end' }, h('button', { class: 'btn ghost', onclick: () => done(false) }, cancel), okBtn)
      )
    );
    document.getElementById('app').append(wrap);
    document.addEventListener('keydown', onKey, true);
    requestAnimationFrame(() => { wrap.classList.add('open'); okBtn.focus(); });
  });
}

export function fmtTime(sec) {
  sec = Math.max(0, Math.floor(sec || 0));
  return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
}
