// The curated catalog: 10 picks per category, in rank order.
// These demo entries are 360 scenes drawn in code, standing in for licensed video. To use a real video,
// give an entry a `src` (an equirectangular MP4 that YOURA is licensed to stream, served with CORS)
// and, if it's stereo, `stereo: true` (over-under, left eye on top). The player then streams that file instead.
//
// Scene kinds: 0 aurora, 1 neon drive, 2 ocean, 3 concert, 4 light tunnel, 5 ringed planet,
// 6 desert, 7 stadium, 8 above the clouds, 9 deep space.
// Comfort, set by curators: 1 Calm, 2 Moving, 3 Intense.

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

// [title, kind, [c1, c2, c3], speed, comfort, seconds, flags, why]
// flags: n = new, d = 3D
const RAW = {
  musician: [
    ['Main Stage, Front Row', 3, ['#4A0F24', '#E11737', '#3DB8FF'], 1.0, 2, 124, 'd', 'Stand at the lip of the stage as five rigs sweep over you. Turn around and the crowd keeps going.'],
    ['Synthwave Sunset Drive', 1, ['#1A0B3D', '#FF2E88', '#FF8A3D'], 1.0, 2, 96, '', 'Ride along on the producer’s night drive. Look up for the stars, back for the road.'],
    ['Ring Pulse', 5, ['#3B0A16', '#E8536C', '#E11737'], 0.8, 1, 88, 'n', 'A set on our home planet. The rings ripple out from wherever you stand.'],
    ['Aurora Session', 0, ['#123456', '#38F2A0', '#8E5CFF'], 0.8, 1, 140, '', 'An acoustic set under slow curtains of light. Lean back and look straight up.'],
    ['Laser Cathedral', 3, ['#1C0F3A', '#A64DFF', '#3DFFB0'], 1.15, 2, 118, '', 'The headliner’s view: green and violet beams over a packed floor.'],
    ['Bassline Hyperdrive', 4, ['#1A0408', '#E11737', '#FFD0D8'], 1.5, 3, 64, '', 'The drop hits and the tunnel opens up. Intense, and short on purpose.'],
    ['Orbit Lounge', 9, ['#120A2A', '#7A3CFF', '#FF5A7A'], 0.7, 1, 150, 'd', 'A nebula drifts past a ringed moon. Made for headphones and a dark room.'],
    ['Dune Sessions', 6, ['#4E7FCC', '#E39A55', '#FFE0A3'], 0.7, 1, 132, 'n', 'A set on the dunes at golden hour. Turn around for the sun.'],
    ['Stadium Anthem', 7, ['#1C2E5C', '#E11737', '#F5F5F5'], 1.0, 2, 98, '', 'The whole stadium sings along. Turn slowly and take in every stand.'],
    ['Sunrise Set', 2, ['#2B5FA8', '#FFC08A', '#FFE3A0'], 0.7, 1, 145, '', 'An easy morning set over open water.']
  ],
  athlete: [
    ['Final Whistle, Center Circle', 7, ['#1C2E5C', '#3DB8FF', '#F5F5F5'], 1.0, 2, 120, 'd', 'Stand in the center circle with the team as the stadium erupts.'],
    ['Skydive Over the Coast', 8, ['#2A66C9', '#CFE3F7', '#3F6E8C'], 1.2, 3, 82, '', 'Jump with the skydiver, coast below. Intense; sitting helps.'],
    ['Big Wave Lineup', 2, ['#2E6EB5', '#9FD3F0', '#FFF2C2'], 1.6, 2, 94, 'n', 'Sit on the board beside the surfer and watch the sets roll in.'],
    ['Desert Rally Stage', 6, ['#5A8FD8', '#D98A45', '#FFD9A0'], 1.6, 2, 88, '', 'The co-driver’s seat, flat out across the sand.'],
    ['Night Race Grid', 1, ['#140818', '#FF3B30', '#FFFFFF'], 1.6, 2, 70, '', 'Lights out and away down a glowing track.'],
    ['Wingsuit Line', 8, ['#3A7BD5', '#E2EEF9', '#5B7F4A'], 1.6, 3, 66, 'n', 'Fast and low over the clouds. Our most intense pick.'],
    ['Paddle at Dawn', 2, ['#33598F', '#FFD1A6', '#FFE6B0'], 0.6, 1, 138, '', 'Flat water and first light with a distance paddler. As calm as sport gets.'],
    ['Cup Final Walkout', 7, ['#0E2416', '#2ECC71', '#FFFFFF'], 1.0, 2, 100, 'd', 'Walk out of the tunnel into a green and white wall of noise.'],
    ['Zero-G Training', 9, ['#0B0A1E', '#5C6BFF', '#FF6B6B'], 0.7, 1, 124, '', 'Float free with an astronaut in training and take in the view.'],
    ['Summit Night', 0, ['#101C30', '#B2FF59', '#40C4FF'], 0.7, 1, 134, '', 'The top of the climb, under the aurora.']
  ],
  character: [
    ['The Lighthouse Keeper', 2, ['#1C2A52', '#FF8A5C', '#FFD08A'], 0.6, 1, 128, 'd', 'An evening on the gallery with the keeper as the harbor lights come on.'],
    ['The Night Courier', 1, ['#140A2E', '#FF4FD8', '#49F2FF'], 1.1, 2, 92, 'n', 'Ride along on the last delivery across a neon city.'],
    ['The Aurora Hunter', 0, ['#0F2A45', '#38F2A0', '#7A5CFF'], 0.7, 1, 146, '', 'She has waited all winter for this night. Look up.'],
    ['The Desert Nomad', 6, ['#334E8C', '#E07A4F', '#FFC285'], 0.6, 1, 136, '', 'Make camp at dusk as the dunes go copper.'],
    ['The Stage Manager', 3, ['#3A2208', '#FFB13D', '#FF4D67'], 1.1, 2, 110, '', 'The show from the wings: every cue, every beam.'],
    ['The Test Pilot', 4, ['#0A0614', '#FF4FD8', '#FFFFFF'], 1.4, 3, 62, '', 'Strapped in for a speed run in a tunnel of light. Seated viewing.'],
    ['The Storm Chaser', 8, ['#2A3A52', '#6E7F96', '#26402B'], 1.0, 2, 98, 'n', 'Up above the rain front as it rolls over the hills.'],
    ['The Groundskeeper', 7, ['#0B1430', '#FFD23F', '#2E7BFF'], 0.8, 1, 112, '', 'The empty stadium after the match, lights still on.'],
    ['The Stargazer', 9, ['#0D0B14', '#C08552', '#E6C79C'], 0.6, 1, 144, 'd', 'A ridge-top camp with a sky full of dust and stars.'],
    ['The Last Resident', 5, ['#2B0B12', '#D94C64', '#E11737'], 0.5, 1, 140, '', 'One person, one ringed planet, and all the quiet in the world.']
  ]
};

function build() {
  const all = [];
  const byCat = {};
  CATEGORIES.forEach((cat, ci) => {
    byCat[cat.id] = RAW[cat.id].map(([title, kind, c, speed, comfort, dur, flags, why], i) => {
      const item = {
        id: `${cat.id}-${String(i + 1).padStart(2, '0')}`,
        cat: cat.id,
        rank: i + 1,
        title,
        creator: 'YOURA demo scene',
        kind, c, speed, comfort, dur, why,
        seed: ((ci * 10 + i) * 0.618034) % 1 * 9.0,
        isNew: flags.includes('n'),
        threeD: flags.includes('d'),
        demo: true,
        src: null
      };
      all.push(item);
      return item;
    });
  });
  return { all, byCat };
}

const BUILT = build();
export const ALL = BUILT.all;
export const BY_CAT = BUILT.byCat;
