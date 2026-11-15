// Sheets, cards and panels that sit over the 360 view: preview, comfort heads-up, first-run,
// Up next, List and Saved, and Settings.
import { h, icon, setIcon, mark, comfortBars, confirmDialog, fmtTime } from './ui.js';
import { COMFORT, ALL } from './catalog.js';

// A still for a video: the clip's own poster file, or the frame grabbed when you added it.
function setPoster(img, item) {
  img.onerror = () => img.removeAttribute('src');
  if (item && item.poster) img.src = item.poster; else img.removeAttribute('src');
}

export function createViews(app) {
  const root = document.getElementById('app');
  const { store, toast } = app;
  const stack = [];            // open overlays, top last: { name, el, close, restore }

  function push(name, el, close) {
    const restore = document.activeElement;
    stack.push({ name, el, close, restore });
    app.overlay = name;
  }
  function pop(name) {
    const i = stack.findIndex(s => s.name === name);
    if (i < 0) return null;
    const [s] = stack.splice(i, 1);
    app.overlay = stack.length ? stack[stack.length - 1].name : null;
    if (s.restore && s.restore.focus && document.contains(s.restore)) { try { s.restore.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
    return s;
  }
  function isOpen(name) { return stack.some(s => s.name === name); }
  function focusFirst(el) {
    requestAnimationFrame(() => {
      const f = el.querySelector('[data-autofocus]') || el.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');
      if (f) { try { f.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
    });
  }
  // Opening and closing can overlap (a quick second tap), so each element remembers which one was asked for last.
  function show(el) {
    el._open = true;
    el.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => { if (el._open) el.classList.add('open'); }));
  }
  function hide(el) {
    el._open = false;
    el.classList.remove('open');
    clearTimeout(el._t);
    el._t = setTimeout(() => { if (!el._open) el.hidden = true; }, 340);
  }

  const two = n => String(n).padStart(2, '0');
  const catLabel = item => (item.cat === 'yours' ? 'Yours' : app.catName(item.cat));

  function facts(item, { long = false } = {}) {
    const wrap = h('div', { class: 'facts' });
    if (item.rank) wrap.append(h('span', { class: 'mono' }, '#' + two(item.rank)));
    if (item.dur) wrap.append(h('span', { class: 'mono' }, fmtTime(item.dur)));
    if (item.comfort) wrap.append(h('span', { class: 'comfort' }, comfortBars(item.comfort), COMFORT[item.comfort].name));
    else wrap.append(h('span', null, 'Not rated'));
    if (item.stereo) wrap.append(h('span', { class: 'tag' }, '3D'));
    if (item.isNew && !store.isWatched(item.id)) wrap.append(h('span', { class: 'tag red' }, 'NEW'));
    if (store.isWatched(item.id)) wrap.append(h('span', { class: 'watched' }, icon('check', 16), 'Watched'));
    if (long && item.standin) wrap.append(h('span', { class: 'tag ghost' }, 'Stand-in scene'));
    if (long && item.missing) wrap.append(h('span', { class: 'tag ghost' }, 'Coming soon'));
    return wrap;
  }

  /* --------------------------------------------------------------- preview */

  const pv = {};
  pv.img = h('img', { class: 'pv-img', alt: '' });
  pv.rank = h('span', { class: 'pv-rank mono' });
  pv.title = h('h2', { id: 'pv-title' });
  pv.by = h('div', { class: 'pv-by' });
  pv.facts = h('div');
  pv.why = h('p', { class: 'why' });
  pv.comfort = h('p', { class: 'note' });
  pv.watch = h('button', { class: 'btn primary big', 'data-autofocus': '' }, icon('play', 20), h('span', null, 'Watch in 360°'));
  pv.save = h('button', { class: 'btn icon-btn' }, icon('saved', 20), h('span', null, 'Save'));
  pv.share = h('button', { class: 'btn icon-btn' }, icon('share', 20), h('span', null, 'Share'));
  pv.sheet = h('section', { class: 'sheet', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'pv-title' },
    h('div', { class: 'grab', 'aria-hidden': 'true' }),
    h('div', { class: 'pv-media' }, pv.img, pv.rank,
      h('button', { class: 'round close', 'aria-label': 'Close', onclick: () => closePreview() }, icon('close', 20))),
    pv.title, pv.by, pv.facts,
    h('div', { class: 'actions' }, pv.watch, pv.save, pv.share),
    pv.why, pv.comfort);
  pv.wrap = h('div', { class: 'sheet-wrap', hidden: true }, h('div', { class: 'scrim', onclick: () => closePreview() }), pv.sheet);
  root.append(pv.wrap);

  pv.watch.addEventListener('click', () => { if (pv.item) app.watch(pv.item); });
  pv.save.addEventListener('click', () => {
    if (!pv.item) return;
    const saved = store.toggleSaved(pv.item.id);
    app.refreshTile(pv.item);
    syncSave();
    refresh();
    toast(saved ? 'Saved. Find it under Saved in the dock.' : 'Removed from Saved');
  });
  pv.share.addEventListener('click', () => { if (pv.item) app.share(pv.item); });

  // swipe down to close
  (() => {
    let y0 = null, dy = 0;
    pv.sheet.addEventListener('pointerdown', e => {
      if (e.target.closest('button, a, input')) return;
      if (pv.sheet.scrollTop > 0) return;
      y0 = e.clientY; dy = 0;
      pv.sheet.style.transition = 'none';
    });
    pv.sheet.addEventListener('pointermove', e => {
      if (y0 == null) return;
      dy = Math.max(0, e.clientY - y0);
      pv.sheet.style.transform = `translateY(${dy}px)`;
    });
    const end = () => {
      if (y0 == null) return;
      y0 = null;
      pv.sheet.style.transition = '';
      pv.sheet.style.transform = '';
      if (dy > 90) closePreview();
    };
    pv.sheet.addEventListener('pointerup', end);
    pv.sheet.addEventListener('pointercancel', end);
  })();

  function syncSave() {
    const on = pv.item && store.isSaved(pv.item.id);
    setIcon(pv.save, on ? 'savedOn' : 'saved', 20);
    pv.save.querySelector('span:last-child').textContent = on ? 'Saved' : 'Save';
    pv.save.setAttribute('aria-pressed', String(!!on));
    pv.save.classList.toggle('on', !!on);
  }

  function openPreview(item) {
    if (!item) return;
    pv.item = item;
    setPoster(pv.img, item);
    pv.watch.querySelector('span:last-child').textContent = item.projection === 'flat' ? 'Watch on the big screen' : 'Watch in 360°';
    pv.rank.textContent = two(item.rank);
    pv.title.textContent = item.title;
    pv.by.textContent = `${item.creator} · ${catLabel(item)}`;
    pv.facts.replaceChildren(facts(item, { long: true }));
    pv.why.replaceChildren(h('span', { class: 'label' }, item.local ? 'Your video' : 'Why it’s here'), item.why);
    pv.comfort.textContent = item.comfort ? `${COMFORT[item.comfort].name}: ${COMFORT[item.comfort].blurb}` : 'Not rated for comfort. Videos you add aren’t rated.';
    pv.watch.disabled = !!item.missing;
    pv.share.hidden = !!item.local || app.embedded;   // a link to a local file, or to an embedded preview, goes nowhere
    syncSave();
    if (!isOpen('preview')) {
      show(pv.wrap);
      push('preview', pv.wrap, closePreview);
    }
    focusFirst(pv.sheet);
    try { history.replaceState(null, '', '#v-' + item.id); } catch (e) { /* ignore */ }
  }

  function closePreview() {
    if (!isOpen('preview')) return;
    hide(pv.wrap);
    pop('preview');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* ignore */ }
  }

  /* --------------------------------------------------------------- comfort heads-up */

  const hu = {};
  hu.title = h('h2', { id: 'hu-title' }, 'This one moves fast');
  hu.name = h('div', { class: 'hu-name' });
  hu.dont = h('input', { type: 'checkbox', id: 'hu-dont' });
  hu.go = h('button', { class: 'btn primary', 'data-autofocus': '' }, 'Watch anyway');
  hu.calm = h('button', { class: 'btn' }, 'Pick a calmer one');
  hu.card = h('div', { class: 'card' },
    h('div', { class: 'tag red' }, 'INTENSE MOTION'),
    hu.title, hu.name,
    h('p', { class: 'muted' }, 'Expect quick turns and drops. Sitting down helps, and you can stop at any time.'),
    h('ul', { class: 'tips' }, h('li', null, 'Sit or stand somewhere steady.'), h('li', null, 'Look away from the screen if it’s too much.')),
    h('div', { class: 'stack' }, hu.go, hu.calm),
    h('label', { class: 'check' }, hu.dont, h('span', null, 'Don’t warn me again')));
  hu.wrap = h('div', { class: 'modal', hidden: true, role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'hu-title' },
    h('div', { class: 'modal-scrim', onclick: () => closeHeadsUp() }), hu.card);
  root.append(hu.wrap);

  hu.go.addEventListener('click', () => {
    const item = hu.item;
    if (hu.dont.checked) store.set('headsUp', false);
    closeHeadsUp();
    app.watch(item, { skipHeadsUp: true });
  });
  hu.calm.addEventListener('click', () => {
    const item = hu.item;
    closeHeadsUp();
    const calm = app.items(item.cat)
      .filter(it => it.comfort === 1)
      .sort((a, b) => Math.abs(a.rank - item.rank) - Math.abs(b.rank - item.rank))[0];
    if (!calm) return;
    if (app.mode === 'player') app.exitPlayer();
    closePreview();
    if (app.cat !== calm.cat) app.setCategory(calm.cat, { animate: false });
    app.faceItem(calm);
    setTimeout(() => openPreview(calm), app.reduced ? 0 : 650);
  });

  function showHeadsUp(item) {
    hu.item = item;
    hu.name.textContent = `${two(item.rank)} · ${item.title}`;
    hu.dont.checked = false;
    stopCountdown();
    show(hu.wrap);
    if (!isOpen('headsup')) push('headsup', hu.wrap, closeHeadsUp);
    focusFirst(hu.card);
  }
  function closeHeadsUp() {
    if (!isOpen('headsup')) return;
    hide(hu.wrap);
    pop('headsup');
  }

  /* --------------------------------------------------------------- first run */

  const fr = {};
  fr.motion = h('button', { class: 'btn primary big', 'data-autofocus': '' }, icon('motion', 20), h('span', null, 'Use motion'));
  fr.touch = h('button', { class: 'btn big' }, icon('touch', 20), h('span', null, 'Touch only'));
  fr.list = h('button', { class: 'btn ghost' }, icon('list', 20), h('span', null, 'Browse as a list'));
  fr.body = h('p', { class: 'muted' });
  fr.note = h('p', { class: 'note' });
  fr.card = h('div', { class: 'card firstrun' },
    mark(52),
    h('h2', { id: 'fr-title' }, 'Look around'),
    fr.body, fr.note,
    h('div', { class: 'stack' }, fr.motion, fr.touch, fr.list));
  fr.wrap = h('div', { class: 'modal light', hidden: true, role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'fr-title' },
    h('div', { class: 'modal-scrim' }), fr.card);
  root.append(fr.wrap);

  const finishFirstRun = () => {
    store.d.firstRunDone = true; store.save();
    hide(fr.wrap); pop('firstrun');
    app.syncLook();
  };
  fr.motion.addEventListener('click', () => {
    const p = app.setLook('motion', { quiet: true });   // starts the permission request inside this tap
    finishFirstRun();
    p.then(ok => { if (ok) toast('Motion on. Turn your phone to look around.'); app.afterFirstRun(); });
  });
  fr.touch.addEventListener('click', () => { app.setLook('touch', { quiet: true }); finishFirstRun(); toast('Drag to look around. Switch to motion any time, top right.'); app.afterFirstRun(); });
  fr.list.addEventListener('click', () => { app.setLook(app.look.usingMotion ? 'motion' : 'touch', { quiet: true }); finishFirstRun(); openList(); });

  function showFirstRun() {
    const canMotion = app.hasOrientation;
    fr.body.textContent = app.motionLikely
      ? 'YOURA follows your phone. Turn, tilt and look up, the way you would standing there. A drag adds a turn on top.'
      : 'Drag to look around. On a phone or tablet, YOURA can follow its motion instead.';
    fr.note.textContent = app.embedded
      ? 'This preview can’t read motion sensors. On your iPhone, open YOURA from its own address (and add it to your Home Screen) for full motion tracking.'
      : 'No location access, and nothing leaves your phone.';
    fr.motion.hidden = !(canMotion && app.motionLikely) || app.embedded;
    show(fr.wrap);
    push('firstrun', fr.wrap, () => {});
    focusFirst(fr.card);
  }

  /* --------------------------------------------------------------- up next */

  const un = {};
  un.head = h('span', { class: 'label' }, 'Up next');
  un.count = h('span', { class: 'count mono' });
  un.bar = h('div', { class: 'countbar' }, h('i'));
  un.img = h('img', { alt: '' });
  un.t = h('div', { class: 't' });
  un.m = h('div', { class: 'm' });
  un.next = h('button', { class: 'un-next' }, un.img, h('div', null, un.t, un.m));
  un.play = h('button', { class: 'btn primary', 'data-autofocus': '' }, icon('play', 18), h('span', null, 'Play now'));
  un.back = h('button', { class: 'btn ghost' }, 'Back to the studio');
  un.q = h('div', { class: 'react-q' });
  un.love = h('button', { class: 'chip-btn' }, icon('heart', 18), h('span', null, 'Loved it'));
  un.meh = h('button', { class: 'chip-btn' }, icon('meh', 18), h('span', null, 'Not for me'));
  un.dots = h('div', { class: 'dots', 'aria-hidden': 'true' });
  un.done = h('p', { class: 'muted' });
  un.card = h('div', { class: 'card upnext' },
    h('div', { class: 'un-head' }, un.head, un.count), un.bar,
    un.next, un.done,
    h('div', { class: 'row' }, un.play, un.back),
    h('div', { class: 'react' }, un.q, h('div', { class: 'row' }, un.love, un.meh)),
    un.dots);
  un.wrap = h('div', { class: 'modal', hidden: true, role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Up next' },
    h('div', { class: 'modal-scrim' }), un.card);
  root.append(un.wrap);

  let cd = null;
  function stopCountdown() {
    if (!cd) return;
    clearInterval(cd.timer);
    cd = null;
    un.count.textContent = '';
    un.card.classList.remove('counting');
  }
  un.card.addEventListener('pointerdown', e => { if (!e.target.closest('.btn.primary')) stopCountdown(); });
  un.play.addEventListener('click', () => { const n = un.nextItem; stopCountdown(); if (n) app.watch(n); });
  un.next.addEventListener('click', () => { const n = un.nextItem; stopCountdown(); if (n) app.watch(n); });
  un.back.addEventListener('click', () => { stopCountdown(); app.exitPlayer(); });
  const react = r => {
    const it = un.item;
    if (!it) return;
    const now = store.react(it.id, r);
    syncReact();
    if (now === 'love') toast('Glad you liked it. We’ll use that to pick what’s next.');
    else if (now === 'meh') toast('Thanks. We’ll show fewer like it.');
  };
  un.love.addEventListener('click', () => react('love'));
  un.meh.addEventListener('click', () => react('meh'));
  function syncReact() {
    const r = un.item ? store.d.reactions[un.item.id] : null;
    un.love.classList.toggle('on', r === 'love'); un.love.setAttribute('aria-pressed', String(r === 'love'));
    un.meh.classList.toggle('on', r === 'meh'); un.meh.setAttribute('aria-pressed', String(r === 'meh'));
    setIcon(un.love, r === 'love' ? 'heartOn' : 'heart', 18);
  }

  function showUpNext(item, next) {
    un.item = item;
    un.nextItem = next;
    un.q.textContent = `How was “${item.title}”?`;
    syncReact();
    const list = app.items(item.cat);
    un.dots.replaceChildren(...list.map(it => h('i', { class: (store.isWatched(it.id) ? 'w ' : '') + (it === item ? 'cur' : '') })));
    if (next) {
      un.next.hidden = false; un.play.hidden = false; un.done.hidden = true;
      setPoster(un.img, next);
      un.t.textContent = next.title;
      un.m.textContent = `${two(next.rank)} · ${fmtTime(next.dur)}${next.comfort ? ' · ' + COMFORT[next.comfort].name : ''}`;
    } else {
      un.next.hidden = true; un.play.hidden = true; un.done.hidden = false;
      un.done.textContent = `That’s every video in ${catLabel(item)}. Try another category back in the studio.`;
    }
    show(un.wrap);
    if (!isOpen('upnext')) push('upnext', un.wrap, hideUpNext);
    focusFirst(un.card);
    stopCountdown();
    if (next && store.s.autoplay && !(next.comfort === 3 && store.s.headsUp)) {
      let left = 5;
      un.count.textContent = `in ${left}`;
      un.card.classList.remove('counting'); void un.card.offsetWidth; un.card.classList.add('counting');
      cd = { timer: setInterval(() => {
        left -= 1;
        if (left > 0) { un.count.textContent = `in ${left}`; return; }
        stopCountdown();
        app.watch(next);
      }, 1000) };
    }
  }
  function hideUpNext() {
    stopCountdown();
    if (!isOpen('upnext')) return;
    hide(un.wrap);
    pop('upnext');
  }

  /* --------------------------------------------------------------- list and saved */

  const ls = { mode: 'list', cat: null };
  ls.title = h('h2', { id: 'ls-title' });
  ls.sub = h('p', { class: 'muted small' });
  ls.tabs = h('div', { class: 'tabs', role: 'tablist', 'aria-label': 'Categories' });
  ls.rows = h('ol', { class: 'rows' });
  ls.empty = h('div', { class: 'empty' });
  ls.panel = h('section', { class: 'panel', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'ls-title' },
    h('header', { class: 'panel-head' },
      h('button', { class: 'round close', 'aria-label': 'Close', onclick: () => closePanel('list') }, icon('back', 20)),
      h('div', null, ls.title, ls.sub)),
    ls.tabs,
    h('div', { class: 'panel-body' }, ls.rows, ls.empty));
  ls.wrap = h('div', { class: 'panel-wrap', hidden: true }, ls.panel);
  root.append(ls.wrap);

  function row(item) {
    const img = h('img', { class: 'thumb', alt: '', loading: 'lazy' });
    const saved = store.isSaved(item.id);
    const meta = h('span', { class: 'm' },
      h('span', { class: 'mono' }, fmtTime(item.dur)),
      item.comfort ? h('span', { class: 'comfort' }, comfortBars(item.comfort), COMFORT[item.comfort].name) : h('span', null, 'Not rated'),
      item.stereo ? h('span', { class: 'tag' }, '3D') : null,
      item.isNew && !store.isWatched(item.id) ? h('span', { class: 'tag red' }, 'NEW') : null,
      store.isWatched(item.id) ? h('span', { class: 'watched' }, icon('check', 14), 'Watched') : null,
      ls.mode === 'saved' ? h('span', { class: 'cat' }, catLabel(item)) : null);
    const saveBtn = h('button', {
      class: 'round save' + (saved ? ' on' : ''), 'aria-pressed': String(saved),
      'aria-label': (saved ? 'Remove from Saved: ' : 'Save: ') + item.title
    }, icon(saved ? 'savedOn' : 'saved', 20));
    saveBtn.addEventListener('click', () => {
      const now = store.toggleSaved(item.id);
      app.refreshTile(item);
      toast(now ? 'Saved' : 'Removed from Saved');
      renderList();
    });
    const main = h('button', { class: 'row-main', 'aria-label': `${two(item.rank)}. ${item.title}, ${fmtTime(item.dur)}${item.comfort ? ', ' + COMFORT[item.comfort].name : ''}${store.isWatched(item.id) ? ', watched' : ''}` },
      h('span', { class: 'thumb-wrap' }, img, h('span', { class: 'rk mono' }, two(item.rank))),
      h('span', { class: 'info' }, h('span', { class: 't' }, item.title), meta));
    main.addEventListener('click', () => {
      closePanel('list');
      if (item.cat !== app.cat) app.setCategory(item.cat, { animate: false });
      app.faceItem(item);
      setTimeout(() => openPreview(item), app.reduced ? 0 : 380);
    });
    setPoster(img, item);
    return h('li', { class: store.isWatched(item.id) ? 'is-watched' : '' }, main, saveBtn);
  }

  function renderList() {
    const saved = ls.mode === 'saved';
    ls.title.textContent = saved ? 'Saved' : 'List';
    ls.sub.textContent = saved ? 'Everything you’ve saved, newest first.' : 'The same picks as the studio screens, in rank order. No looking around needed.';
    ls.tabs.hidden = saved;
    if (!saved) {
      ls.tabs.replaceChildren(...app.cats().map(c => {
        const b = h('button', { class: 'chip', role: 'tab', 'aria-selected': String(c.id === ls.cat) }, c.name);
        b.addEventListener('click', () => { ls.cat = c.id; renderList(); });
        return b;
      }));
    }
    const list = saved ? store.d.saved.map(id => app.findItem(id)).filter(Boolean) : app.items(ls.cat);
    ls.rows.replaceChildren(...list.map(row));
    ls.empty.hidden = list.length > 0;
    ls.empty.replaceChildren(saved
      ? h('p', null, 'Nothing saved yet. Long-press a screen in the studio, or tap Save in a preview.')
      : h('p', null, 'No videos here yet.'));
  }

  function openList(mode = 'list') {
    ls.mode = mode;
    ls.cat = app.cat;
    renderList();
    if (!isOpen('list')) { show(ls.wrap); push('list', ls.wrap, () => closePanel('list')); }
    ls.panel.querySelector('.panel-body').scrollTop = 0;
    focusFirst(ls.panel);
  }

  /* --------------------------------------------------------------- settings */

  const st = {};
  st.body = h('div', { class: 'panel-body settings' });
  st.panel = h('section', { class: 'panel', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'st-title' },
    h('header', { class: 'panel-head' },
      h('button', { class: 'round close', 'aria-label': 'Close', onclick: () => closePanel('settings') }, icon('back', 20)),
      h('div', null, h('h2', { id: 'st-title' }, 'Settings'))),
    st.body);
  st.wrap = h('div', { class: 'panel-wrap', hidden: true }, st.panel);
  root.append(st.wrap);

  function sw(key, label, desc, after) {
    const id = 'sw-' + key;
    const b = h('button', { class: 'switch', role: 'switch', id, 'aria-checked': String(!!store.s[key]), 'aria-labelledby': id + '-l' }, h('i'));
    b.addEventListener('click', () => {
      store.set(key, !store.s[key]);
      b.setAttribute('aria-checked', String(!!store.s[key]));
      if (after) after(store.s[key]);
    });
    return h('div', { class: 'set-row' },
      h('div', { class: 'set-text' }, h('div', { class: 'set-label', id: id + '-l' }, label), desc ? h('div', { class: 'set-desc' }, desc) : null),
      b);
  }

  function seg(label, options, get, set, desc) {
    const group = h('div', { class: 'seg', role: 'radiogroup', 'aria-label': label });
    const paint = () => { for (const b of group.children) b.setAttribute('aria-checked', String(b.dataset.v === get())); };
    for (const [v, text] of options) {
      const b = h('button', { role: 'radio', 'data-v': v }, text);
      b.addEventListener('click', async () => { await set(v); paint(); });
      group.append(b);
    }
    paint();
    return h('div', { class: 'set-row col' },
      h('div', { class: 'set-text' }, h('div', { class: 'set-label' }, label), desc ? h('div', { class: 'set-desc' }, desc) : null),
      group);
  }

  function group(title, ...rows) { return h('section', { class: 'set-group' }, h('h3', null, title), h('div', { class: 'set-card' }, ...rows)); }

  function motionStatus() {
    const l = app.look;
    if (l.usingMotion) return 'Motion is on.';
    if (l.motion === 'unavailable') return app.embedded ? 'This preview can’t read motion sensors.' : 'No motion sensor is available here.';
    if (store.s.look === 'motion') return 'Motion starts with your next tap.';
    return 'Touch only.';
  }

  function renderSettings() {
    const file = h('input', { type: 'file', accept: 'video/*,.mp4,.mov,.m4v', class: 'sr', id: 'add-video' });
    file.addEventListener('change', async () => {
      const f = file.files && file.files[0];
      file.value = '';
      if (f && await app.addVideoFile(f)) renderSettings();
    });
    const yours = app.yours.map(it => {
      const rm = h('button', { class: 'round small', 'aria-label': 'Remove ' + it.title }, icon('trash', 18));
      rm.addEventListener('click', async () => {
        const ok = await confirmDialog({ title: 'Remove this video?', body: `“${it.title}” will be removed from this device.`, ok: 'Remove', danger: true });
        if (ok) { await app.removeVideo(it.id); renderSettings(); }
      });
      return h('div', { class: 'set-row' },
        h('div', { class: 'set-text' }, h('div', { class: 'set-label' }, it.title), h('div', { class: 'set-desc mono' }, fmtTime(it.dur) + (it.stereo ? ' · 3D' : ''))),
        rm);
    });
    const status = h('div', { class: 'set-desc', id: 'motion-status' }, motionStatus());
    const reset = h('button', { class: 'btn danger' }, 'Reset YOURA');
    reset.addEventListener('click', async () => {
      const ok = await confirmDialog({ title: 'Reset YOURA?', body: 'This clears your saved videos, watch history, reactions, settings and any videos you added on this device.', ok: 'Reset', danger: true });
      if (ok) { await app.resetAll(); renderSettings(); }
    });
    const replay = h('button', { class: 'btn' }, icon('replay', 18), h('span', null, 'Replay the intro'));
    replay.addEventListener('click', () => { closeAll(); app.replayIntro(); });

    st.body.replaceChildren(
      group('Looking around',
        seg('Look with', [['motion', 'Motion'], ['touch', 'Touch only']], () => (app.look.usingMotion || (store.s.look === 'motion' && app.look.motion !== 'unavailable') ? 'motion' : 'touch'),
          async v => { await app.setLook(v); status.textContent = motionStatus(); }),
        h('div', { class: 'set-row' }, status),
        sw('invert', 'Invert drag', 'Drag moves the view instead of the scene.', () => app.applySettings()),
        sw('recenter', 'Recenter when a video starts', 'Each video begins with its front ahead of you.'),
        sw('glide', 'Drag keeps gliding', 'Off stops the view the moment you let go.', () => app.applySettings()),
        sw('vignette', 'Vignette when spinning fast', 'Darkens the edges during fast drag turns.')),
      group('Comfort',
        sw('headsUp', 'Heads-up before Intense videos', 'One clear choice before fast motion. It never blocks the video.'),
        sw('hideIntense', 'Hide Intense videos from the studio screens', 'They stay in the list.', () => app.applySettings()),
        sw('breaks', 'Break reminder', 'A gentle nudge after 20 minutes of looking around.')),
      group('Intro',
        seg('Each launch', [['full', 'Full'], ['short', 'Short'], ['off', 'Off']], () => store.s.intro, v => store.set('intro', v), 'The first launch always plays it in full.'),
        h('div', { class: 'set-row' }, replay)),
      group('Playback',
        sw('autoplay', 'Play the next video automatically', 'Up next counts down from 5. Never into an Intense video without the heads-up.')),
      group('Your videos',
        h('div', { class: 'set-row col' },
          h('div', { class: 'set-desc' }, 'Add a video from this device to watch it in YOURA’s player, with motion. A 2:1 MP4 plays as 360°, 1:1 as 3D over-under, and any other shape plays on the giant curved screen. It stays on this device.'),
          h('label', { class: 'btn', for: 'add-video' }, icon('plus', 18), h('span', null, 'Add a video')), file),
        ...yours),
      group('About',
        h('div', { class: 'set-row col' },
          h('p', { class: 'set-desc' }, ALL.some(it => it.standin)
            ? 'The studio is a path-traced 3D scene, lit live. The videos on its screens are stand-in scenes for now; real clips take their place as they are added.'
            : 'The studio is a path-traced 3D scene, lit live.'),
          h('p', { class: 'set-desc' }, 'For motion tracking on iPhone, open YOURA in Safari from its own web address and allow Motion & Orientation when asked. Add it to your Home Screen to open it full screen.')),
        h('div', { class: 'set-row' }, reset))
    );
  }

  function openSettings() {
    renderSettings();
    if (!isOpen('settings')) { show(st.wrap); push('settings', st.wrap, () => closePanel('settings')); }
    st.body.scrollTop = 0;
    focusFirst(st.panel);
  }

  function closePanel(name) {
    if (!isOpen(name)) return;
    if (name === 'list') hide(ls.wrap);
    if (name === 'settings') hide(st.wrap);
    pop(name);
  }

  /* --------------------------------------------------------------- shared */

  function closeAll() {
    for (const s of [...stack].reverse()) {
      if (s.name === 'firstrun') continue;
      s.close();
    }
  }

  function refresh() {
    if (isOpen('list')) renderList();
    if (isOpen('preview')) { syncSave(); pv.facts.replaceChildren(facts(pv.item, { long: true })); }
  }

  function handleKey(e) {
    if (e.key !== 'Escape' || !stack.length) return false;
    const top = stack[stack.length - 1];
    if (top.name === 'firstrun') return true;
    top.close();
    return true;
  }

  return {
    openPreview, closePreview,
    showHeadsUp, showFirstRun,
    showUpNext, hideUpNext,
    openList: () => openList('list'), openSaved: () => openList('saved'), openSettings,
    closeAll, refresh, handleKey
  };
}
