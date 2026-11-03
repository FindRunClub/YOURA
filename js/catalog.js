// The curated catalog: 20 picks per category, in rank order.
// These demo entries are 360 scenes drawn in code, standing in for licensed video. To use a real video,
// give an entry a `src` (an equirectangular MP4 that YOURA is licensed to stream, served with CORS)
// and, if it's stereo, `stereo: true` (over-under, left eye on top). The player then streams that file instead.
//
// Scene kinds: 0 aurora, 1 neon drive, 2 ocean, 3 concert, 4 light tunnel, 5 ringed planet,
// 6 desert, 7 stadium, 8 above the clouds, 9 deep space.
// Comfort, set by curators: 1 Calm, 2 Moving, 3 Intense.

export const CATEGORIES = [
  { id: 'music', name: 'Music' },
  { id: 'sports', name: 'Sports' },
  { id: 'travel', name: 'Travel' },
  { id: 'nature', name: 'Nature' }
];

export const COMFORT = {
  1: { name: 'Calm', blurb: 'A still or slow camera. Fine for anyone.' },
  2: { name: 'Moving', blurb: 'Walking, drifting or gentle flight.' },
  3: { name: 'Intense', blurb: 'Fast motion, drops and spins. A heads-up comes first.' }
};

// [title, kind, [c1, c2, c3], speed, comfort, seconds, flags, why]
// flags: n = new, d = 3D
const RAW = {
  music: [
    ['Main Stage, Front Row', 3, ['#4A0F24', '#E11737', '#3DB8FF'], 1.0, 2, 124, 'd', 'Five moving rigs sweep right over you. Turn around and the crowd keeps going.'],
    ['Synthwave Sunset Drive', 1, ['#1A0B3D', '#FF2E88', '#FF8A3D'], 1.0, 2, 96, '', 'The grid rolls toward you forever. Look up for the stars, back for the road.'],
    ['Ring Pulse', 5, ['#3B0A16', '#E8536C', '#E11737'], 0.8, 1, 88, 'n', 'Our home planet, scored. The rings ripple out from wherever you stand.'],
    ['Light Tunnel', 4, ['#14060E', '#FF3B5C', '#FFFFFF'], 1.2, 3, 72, '', 'Pure speed. Light streaks past on every side; best seated.'],
    ['Aurora Session', 0, ['#123456', '#38F2A0', '#8E5CFF'], 0.8, 1, 140, '', 'Slow curtains of light to a slow set. Lean back and look straight up.'],
    ['Laser Cathedral', 3, ['#1C0F3A', '#A64DFF', '#3DFFB0'], 1.15, 2, 118, '', 'Green and violet beams cross high above a packed floor.'],
    ['Midnight Grid', 1, ['#06122E', '#2E7BFF', '#3DF5FF'], 1.25, 2, 84, 'n', 'Cold blues and a faster road. The sun never quite sets.'],
    ['Orbit Lounge', 9, ['#120A2A', '#7A3CFF', '#FF5A7A'], 0.7, 1, 150, 'd', 'A nebula drifts past a ringed moon. Made for headphones and a dark room.'],
    ['Bassline Hyperdrive', 4, ['#1A0408', '#E11737', '#FFD0D8'], 1.5, 3, 64, '', 'The drop hits and the tunnel opens up. Intense, and short on purpose.'],
    ['Dune Sessions', 6, ['#4E7FCC', '#E39A55', '#FFE0A3'], 0.7, 1, 132, '', 'A set on the dunes at golden hour. Turn around for the sun.'],
    ['Festival Encore', 3, ['#3A2208', '#FFB13D', '#FF4D67'], 1.1, 2, 110, '', 'Gold beams for the last song of the night.'],
    ['Retrowave Coast', 2, ['#5B2A86', '#FF7AA8', '#FFC66B'], 0.9, 1, 102, 'n', 'Pink sky, warm sea and a sun that hangs on the horizon.'],
    ['Red Planet Rave', 5, ['#2A0630', '#C2185B', '#FF3D7F'], 1.2, 1, 90, '', 'The rings pulse faster here. Look down at your feet.'],
    ['Northern Strings', 0, ['#0E2A3A', '#5CFFE1', '#FF7AC8'], 1.0, 1, 126, '', 'Teal and pink aurora, moving with the strings.'],
    ['Stadium Anthem', 7, ['#1C2E5C', '#E11737', '#F5F5F5'], 1.0, 2, 98, 'd', 'The whole stadium sings along. Turn slowly and take in every stand.'],
    ['Neon Skyline Cruise', 1, ['#0B2A2E', '#19E3B1', '#FFE14D'], 1.1, 2, 92, '', 'Teal sky and a yellow sun over the night road.'],
    ['Nebula Drift', 9, ['#0A1A22', '#2EC4B6', '#FF9F1C'], 0.8, 1, 136, '', 'Orange and teal clouds of gas, light-years wide.'],
    ['Skydive Drop', 8, ['#2F6FD1', '#BFD9F5', '#4E7A3A'], 1.3, 3, 76, 'n', 'Out of the plane and through the clouds. Sit down for this one.'],
    ['Strobe Tunnel', 4, ['#050A1A', '#5C8BFF', '#E8F0FF'], 1.4, 3, 58, '', 'White-blue streaks at full speed. Short, bright and fast.'],
    ['Sunrise Set', 2, ['#2B5FA8', '#FFC08A', '#FFE3A0'], 0.7, 1, 145, '', 'An easy morning set over open water.']
  ],
  sports: [
    ['Final Whistle, Center Circle', 7, ['#1C2E5C', '#3DB8FF', '#F5F5F5'], 1.0, 2, 120, 'd', 'Stand in the center circle as the stadium erupts.'],
    ['Skydive Over the Coast', 8, ['#2A66C9', '#CFE3F7', '#3F6E8C'], 1.2, 3, 82, '', 'Freefall with the coast below. Intense; sitting helps.'],
    ['Big Wave Lineup', 2, ['#2E6EB5', '#9FD3F0', '#FFF2C2'], 1.6, 2, 94, 'n', 'Bob in the lineup and watch the sets roll in.'],
    ['Desert Rally Stage', 6, ['#5A8FD8', '#D98A45', '#FFD9A0'], 1.6, 2, 88, '', 'Flat out across the sand. Look back for the dust.'],
    ['Night Race Grid', 1, ['#140818', '#FF3B30', '#FFFFFF'], 1.6, 2, 70, '', 'Lights out and away down a glowing track.'],
    ['Night Match Under Lights', 7, ['#0B1430', '#FFD23F', '#2E7BFF'], 1.0, 2, 112, '', 'Four floodlight towers and a full house. Find the corner flag.'],
    ['Wingsuit Line', 8, ['#3A7BD5', '#E2EEF9', '#5B7F4A'], 1.6, 3, 66, 'n', 'Fast and low over the clouds. Our most intense pick.'],
    ['Hyperloop Sprint', 4, ['#08121A', '#3DF5FF', '#FFFFFF'], 1.6, 3, 54, '', 'A test run at full speed, in a tunnel of light.'],
    ['Paddle at Dawn', 2, ['#33598F', '#FFD1A6', '#FFE6B0'], 0.6, 1, 138, '', 'Flat water and first light. As calm as sport gets.'],
    ['Ice Field Ski Camp', 0, ['#0F2238', '#7DFFB2', '#6E8BFF'], 0.8, 1, 128, '', 'A night on the ice field under a green sky.'],
    ['Derby Day Crowd', 7, ['#2A0E14', '#E11737', '#FFFFFF'], 1.15, 2, 104, '', 'Red and white on every side. Turn and the noise turns with you.'],
    ['Dune Bashing', 6, ['#6A9BE0', '#E7A660', '#FFF0C8'], 1.5, 2, 86, 'n', 'Over the crest and down the other side.'],
    ['Speed Trial', 4, ['#1A1400', '#FFD23F', '#FFFFFF'], 1.5, 3, 60, '', 'Yellow streaks, one direction, no brakes.'],
    ['Open Water Swim', 2, ['#2563A8', '#BCE3FF', '#FFFFFF'], 1.2, 2, 116, '', 'Surface level with the swell. Look down for the deep blue.'],
    ['Track Day Neon', 1, ['#0A0F24', '#7A5CFF', '#3DF5FF'], 1.4, 2, 78, '', 'Lap after lap on a purple track.'],
    ['Cup Final Walkout', 7, ['#0E2416', '#2ECC71', '#FFFFFF'], 1.0, 2, 100, 'd', 'Walk out into a green and white wall of noise.'],
    ['Balloon Ascent', 8, ['#4A86D8', '#F2E3C9', '#7A9A5A'], 0.4, 1, 148, '', 'A slow rise above the clouds at dawn.'],
    ['Zero-G Training', 9, ['#0B0A1E', '#5C6BFF', '#FF6B6B'], 0.7, 1, 124, 'n', 'Float free and take in the view.'],
    ['Sailing the Trades', 2, ['#3F7FCF', '#CFE8FF', '#FFE9A8'], 1.1, 2, 108, '', 'Steady wind and a long horizon.'],
    ['Summit Night', 0, ['#101C30', '#B2FF59', '#40C4FF'], 0.7, 1, 134, '', 'The top of the climb, under the aurora.']
  ],
  travel: [
    ['Over the Clouds', 8, ['#3F7FD9', '#E6F0FA', '#6B8F5A'], 0.35, 1, 142, 'd', 'The window seat, without the window.'],
    ['Desert Camp at Dusk', 6, ['#334E8C', '#E07A4F', '#FFC285'], 0.6, 1, 136, '', 'Low sun, long shadows, the dunes going copper.'],
    ['Island Sunset Deck', 2, ['#3A4E9C', '#FF9E7A', '#FFD27A'], 0.8, 1, 124, 'n', 'Warm water, a slow sun and nothing else for miles.'],
    ['Arctic Lights Lodge', 0, ['#0D2440', '#4CFFB5', '#B06CFF'], 0.8, 1, 140, '', 'Step outside the lodge and look up.'],
    ['Neon City Overpass', 1, ['#140A2E', '#FF4FD8', '#49F2FF'], 1.0, 2, 96, '', 'A night drive over a neon city.'],
    ['Low Orbit Window', 9, ['#0A0F1E', '#3D7BFF', '#FF8C5A'], 0.6, 1, 150, '', 'The view from the station, with a moon close by.'],
    ['Salt Flat Horizon', 6, ['#7FA9E8', '#E8D6C0', '#FFFFFF'], 0.5, 1, 118, '', 'White ground to the edge of the world.'],
    ['Night Ferry Crossing', 2, ['#0E1A33', '#4A5D8F', '#FFC46B'], 1.0, 2, 112, 'n', 'Dark water and harbor lights on the horizon.'],
    ['Red Planet Outpost', 5, ['#3B0A16', '#E8536C', '#B3122E'], 0.6, 1, 126, 'd', 'An outpost on the ringed world. Our planet, up close.'],
    ['Canyon Rim at Noon', 6, ['#3D7DD9', '#D9783A', '#FFDDA6'], 0.7, 1, 104, '', 'Red rock, high sun and a long way down.'],
    ['Rain-Neon Boulevard', 1, ['#091A26', '#FF7A3D', '#3DFFD0'], 0.9, 2, 90, '', 'Orange and teal on a wet night road.'],
    ['Sky Lounge Ascent', 8, ['#2F6FD1', '#F7D8C4', '#5D7FA0'], 0.6, 2, 110, '', 'Climbing through the cloud deck at sunset.'],
    ['Coral Coast Morning', 2, ['#2E8BD0', '#BFF0EC', '#FFF0C0'], 0.7, 1, 132, '', 'Turquoise water, bright sky, an easy swell.'],
    ['Polar Night Camp', 0, ['#160E30', '#C77DFF', '#5CE1E6'], 0.7, 1, 138, 'n', 'Violet light over the snow at the end of the world.'],
    ['Mag-Rail Express', 4, ['#0A0614', '#FF4FD8', '#FFFFFF'], 1.3, 3, 62, '', 'The fastest train never built. Seated viewing.'],
    ['Stargazer Ridge', 9, ['#0D0B14', '#C08552', '#E6C79C'], 0.6, 1, 144, '', 'A ridge-top camp with a sky full of dust and stars.'],
    ['Harbor Lights', 2, ['#1C2A52', '#FF8A5C', '#FFD08A'], 0.6, 1, 120, '', 'Evening on the water as the town lights up.'],
    ['Dune Sea Crossing', 6, ['#5C8DD6', '#C98B4E', '#F2D3A0'], 1.1, 2, 114, '', 'Riding out across the dune sea.'],
    ['Midnight Sun Fjord', 2, ['#6E8FC9', '#FFE2C2', '#FFF6D8'], 0.5, 1, 146, 'd', 'The sun that never sets, mirrored in still water.'],
    ['Lunar Base Dawn', 5, ['#101418', '#8A96A8', '#E11737'], 0.5, 1, 128, '', 'Gray sky, white ground, red rings. Quiet out here.']
  ],
  nature: [
    ['Aurora Over the Ice', 0, ['#0F2A45', '#38F2A0', '#7A5CFF'], 0.7, 1, 150, 'd', 'The classic: green curtains over a frozen lake.'],
    ['Open Ocean Swell', 2, ['#2F6FBF', '#AFD8F5', '#FFF4D0'], 1.0, 1, 130, '', 'Nothing but water and sky, all the way around.'],
    ['Red Dunes at Dawn', 6, ['#4870C2', '#D9653B', '#FFC48A'], 0.5, 1, 126, 'n', 'First light on red sand. Turn to find the sun.'],
    ['Above the Storm', 8, ['#1E3A66', '#8FA6C2', '#2E3D4F'], 0.8, 2, 104, '', 'Dark cloud below, clear sky above.'],
    ['The Milky Way, Overhead', 9, ['#0A0A14', '#5D6BFF', '#E8C27A'], 0.5, 1, 150, '', 'Lie back and look straight up.'],
    ['Green Curtain', 0, ['#0B2030', '#7DFF6B', '#33D6FF'], 1.0, 1, 118, '', 'A fast-moving aurora, bright enough to read by.'],
    ['Golden Hour Lagoon', 2, ['#3A5FA8', '#FFB27A', '#FFD98F'], 0.6, 1, 136, 'n', 'A shallow lagoon going gold.'],
    ['White Sands', 6, ['#8DB6EE', '#EDE3D2', '#FFFFFF'], 0.5, 1, 122, '', 'Gypsum dunes, bright as snow.'],
    ['Cloud Forest Drop', 8, ['#3B79C9', '#D7E8F5', '#2F5E35'], 1.4, 3, 70, '', 'Down through the cloud to the forest canopy. Intense.'],
    ['Comet Night', 9, ['#0B0F1E', '#4DD0E1', '#FF7043'], 0.7, 1, 134, '', 'A cold blue sky and a warm planet low on the horizon.'],
    ['Violet Aurora', 0, ['#140A2A', '#D16BFF', '#FF6BB5'], 0.9, 1, 128, 'd', 'A rare purple display, start to finish.'],
    ['Tidal Flats', 2, ['#5E8CCF', '#E5D7C2', '#FFF0D0'], 0.4, 1, 148, '', 'Wet sand mirrors the sky as the tide goes out.'],
    ['Sirocco', 6, ['#B38A5E', '#D98C4A', '#F2C894'], 1.4, 2, 92, 'n', 'Hot wind, hazy sky, the sand on the move.'],
    ['Monsoon Front', 8, ['#2A3A52', '#6E7F96', '#26402B'], 1.0, 2, 98, '', 'The rain front rolls in over the hills.'],
    ['Nebula Nursery', 9, ['#120818', '#FF4FA3', '#5CE1E6'], 0.6, 1, 142, '', 'Where stars are born, in pink and teal.'],
    ['Arctic Twilight', 0, ['#16243F', '#9CFFDA', '#FFB3E6'], 0.6, 1, 136, '', 'Pastel aurora in the long arctic dusk.'],
    ['Reef Surface', 2, ['#2B9BD6', '#A6F0E8', '#FFFFFF'], 0.8, 1, 124, '', 'Bright water over the reef. Look down for the blue.'],
    ['Ochre Canyon', 6, ['#4D86D9', '#C2622E', '#F5B37A'], 0.6, 1, 116, '', 'Ochre walls and a deep blue sky.'],
    ['Glider Thermals', 8, ['#4A8FE0', '#EAF3FB', '#5A8A4A'], 0.7, 2, 112, 'n', 'Circling up on a summer thermal.'],
    ['Ringed World', 5, ['#2B0B12', '#D94C64', '#E11737'], 0.5, 1, 140, '', 'The planet from our logo, in its quietest hour.']
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
        seed: ((ci * 20 + i) * 0.618034) % 1 * 9.0,
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
