// What YOURA remembers on this device: settings, saved and watched videos, and videos you add.
// Browser storage can be unavailable (private windows, embedded previews), so everything degrades to memory.

const KEY = 'youra.v1';

const DEFAULTS = () => ({
  settings: {
    look: 'motion',        // 'motion' | 'touch'
    invert: false,         // drag moves the view instead of the scene
    recenter: true,        // each video starts with its front ahead of you
    glide: true,           // a flick keeps turning for a moment
    vignette: true,        // darken the edges during fast drag turns
    headsUp: true,         // warn before Intense videos
    hideIntense: false,    // leave Intense videos off the sphere (still in the list)
    breaks: false,         // nudge after 20 minutes
    intro: 'short',        // after the first launch: 'full' | 'short' | 'off'
    autoplay: true         // Up next counts down and plays
  },
  watched: {},             // id -> time watched
  saved: [],               // ids, newest first
  reactions: {},           // id -> 'love' | 'meh'
  firstRunDone: false,
  introSeen: false,
  firstPlayDone: false,
  lastCategory: 'musician'
});

function load() {
  const base = DEFAULTS();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return base;
    const d = JSON.parse(raw);
    return { ...base, ...d, settings: { ...base.settings, ...(d.settings || {}) } };
  } catch (e) {
    return base;
  }
}

export const store = {
  d: load(),
  get s() { return this.d.settings; },
  save() {
    try { localStorage.setItem(KEY, JSON.stringify(this.d)); } catch (e) { /* storage unavailable: keep it in memory */ }
  },
  set(key, value) { this.d.settings[key] = value; this.save(); },
  isSaved(id) { return this.d.saved.includes(id); },
  toggleSaved(id) {
    const i = this.d.saved.indexOf(id);
    if (i >= 0) this.d.saved.splice(i, 1); else this.d.saved.unshift(id);
    this.save();
    return i < 0;
  },
  isWatched(id) { return !!this.d.watched[id]; },
  markWatched(id) { if (!this.d.watched[id]) { this.d.watched[id] = Date.now(); this.save(); return true; } return false; },
  react(id, r) { if (this.d.reactions[id] === r) delete this.d.reactions[id]; else this.d.reactions[id] = r; this.save(); return this.d.reactions[id] || null; },
  reset() {
    this.d = DEFAULTS();
    this.d.firstRunDone = true;
    this.d.introSeen = true;
    try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
    this.save();
  }
};

// Videos you add from Settings. They stay on this device, in IndexedDB.
const memory = new Map();
let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve) => {
    try {
      if (!('indexedDB' in window)) return resolve(null);
      const req = indexedDB.open('youra', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('videos', { keyPath: 'id' });
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
      req.onblocked = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
  return dbPromise;
}

function tx(db, mode, fn) {
  return new Promise((resolve, reject) => {
    try {
      const t = db.transaction('videos', mode);
      const st = t.objectStore('videos');
      const r = fn(st);
      t.oncomplete = () => resolve(r && 'result' in r ? r.result : undefined);
      t.onerror = () => reject(t.error);
      t.onabort = () => reject(t.error);
    } catch (e) { reject(e); }
  });
}

export const videos = {
  persistent: null,
  async all() {
    const db = await openDB();
    this.persistent = !!db;
    if (!db) return [...memory.values()];
    try {
      const list = await tx(db, 'readonly', st => st.getAll());
      return (list || []).sort((a, b) => a.added - b.added);
    } catch (e) {
      return [...memory.values()];
    }
  },
  async put(rec) {
    const db = await openDB();
    if (db) {
      try { await tx(db, 'readwrite', st => st.put(rec)); return true; } catch (e) { /* fall through */ }
    }
    memory.set(rec.id, rec);
    return false;
  },
  async remove(id) {
    memory.delete(id);
    const db = await openDB();
    if (db) { try { await tx(db, 'readwrite', st => st.delete(id)); } catch (e) { /* ignore */ } }
  },
  async clear() {
    memory.clear();
    const db = await openDB();
    if (db) { try { await tx(db, 'readwrite', st => st.clear()); } catch (e) { /* ignore */ } }
  }
};
