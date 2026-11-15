// The curated catalog: five picks for each of the three categories, in rank order.
// The video for a pick is assets/video/<id>.mp4. Until the real clip is there, a stand-in scene plays in its place.
// tools/clips/ingest.py reads each file's length and shape and writes assets/video/clips.json, which is merged in here.

export const CATEGORIES = [
  { id: 'musician', name: 'Musician' },
  { id: 'athlete', name: 'Athlete' },
  { id: 'character', name: 'Character' }
];

export const COMFORT = {
  1: { name: 'Calm', blurb: 'A still or slow camera. Fine for anyone.' },
  2: { name: 'Moving', blurb: 'Walking, drifting or gentle flight.' },
  3: { name: 'Intense', blurb: 'Fast motion, drops and spins. A heads-up comes first.' }
};

// Which rank each of the five screens shows, left to right: #1 is the middle screen, then right, left, far right, far left.
export const SCREEN_RANKS = [5, 3, 1, 2, 4];

// [title, comfort (1 Calm, 2 Moving, 3 Intense), new?, why it's here]
const RAW = {
  musician: [
    ['Main Stage, Front Row', 2, false, 'Stand at the lip of a festival stage as the light rigs sweep over you and the crowd.'],
    ['The Session', 1, false, 'A cellist alone in a wood-panelled studio, close enough to hear the bow.'],
    ['Rooftop Set', 2, true, 'A DJ set on a city rooftop as the skyline lights up behind the booth.'],
    ['Drum Room', 2, false, 'A concrete rehearsal room, one bare bulb, and you right beside the kit.'],
    ['Desert Piano', 1, false, 'A grand piano on cracked desert ground at golden hour, with nothing else for miles.']
  ],
  athlete: [
    ['Final Whistle', 2, false, 'The centre circle of a floodlit stadium as the whole place erupts.'],
    ['Big Wave', 2, true, 'In the water beside the board as a turquoise wave stands up at sunrise.'],
    ['The Climb', 2, false, 'A sheer granite wall high above the valley at dawn, rising beside the climber.'],
    ['Night Sprint', 2, false, 'Track level on a wet night, out of the blocks beside the sprinter.'],
    ['Powder Line', 3, false, 'Close behind a skier carving deep powder through the pines. Fast; sitting helps.']
  ],
  character: [
    ['The Lighthouse Keeper', 1, false, 'Dusk on the gallery with the keeper as the lamp turns and the harbour lights come on.'],
    ['The Night Courier', 2, false, 'Riding at the courier’s shoulder through rain-wet neon streets.'],
    ['The Aurora Hunter', 1, false, 'She has waited all winter on a frozen lake for this sky. Look up.'],
    ['The Clockmaker', 1, true, 'A tiny shop full of ticking clocks, and one man at work under a brass lamp.'],
    ['The Stargazer', 1, false, 'A telescope, a campfire and the Milky Way over a desert ridge.']
  ]
};

export const ALL = [];
export const BY_CAT = {};
for (const cat of CATEGORIES) {
  BY_CAT[cat.id] = RAW[cat.id].map(([title, comfort, isNew, why], i) => {
    const id = `${cat.id}-${i + 1}`;
    const item = {
      id, cat: cat.id, rank: i + 1, title, comfort, isNew, why,
      creator: 'YOURA Studios',
      src: `assets/video/${id}.mp4`,
      poster: `assets/video/${id}.jpg`,
      projection: 'equirect',   // 'equirect' = 360-degree video, 'flat' = an ordinary picture on a giant curved screen
      dur: 0,
      standin: false,
      missing: true
    };
    ALL.push(item);
    return item;
  });
}

// Merge what ingest.py found about the video files.
export function applyClipInfo(info) {
  for (const item of ALL) {
    const c = info && info[item.id];
    if (!c) { item.missing = true; continue; }
    item.missing = false;
    item.dur = c.dur;
    item.projection = c.projection;
    item.standin = !!c.standin;
    item.creator = c.standin ? 'Stand-in scene' : 'YOURA Studios';
  }
}
