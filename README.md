# YOURA

Curated 360° video that you look around by moving your phone.

YOURA opens with **Into the Dot**, its 360° intro. When you land inside the white dot, the 20 picks for a category rise around you on the planet. You turn your phone (or drag) to look across them. Tap one for a preview, then watch it in YOURA's own 360° player, which follows the gyroscope from the first frame.

This is a working web app (a PWA), built mobile-first for iPhone. It has no build step and no dependencies.

## What's in this build

- **Intro.** The original Into the Dot shader, unchanged. It runs Full, Short or Off (after the first launch), with Skip.
- **Home sphere.** Two rows of 10 tiles, one column every 36°.
  - #1 and #2 sit straight ahead, then the picks alternate right and left; #19 and #20 sit behind you.
  - Each tile shows a live preview, with rank, length, comfort bars, NEW, 3D, saved and watched marks.
  - Look at a tile to focus it, or tap one to open its preview.
  - The compass turns you to face #1, and the edge arrows turn one column.
  - Long-press a tile to save it.
- **Categories.** Music, Sports, Travel and Nature, with 20 each, plus Yours for videos you add.
  - A switch sinks the old tiles and raises the new ones, with the new #1 wherever you're looking.
- **Looking around.**
  - Motion uses the full device orientation: turn, tilt, and roll with the horizon kept level.
  - A drag adds a turn on top of motion.
  - Touch only is one tap away.
  - On iPhone, the first launch asks for Motion & Orientation from a tap. After that, the first tap of each launch turns it back on.
- **Player.**
  - Controls: back to the sphere (facing the tile you left), play and pause, seek, face the front, and pinch to zoom.
  - The controls fade after 3 seconds.
  - A first-play hint shows once, and the screen is kept awake.
- **Up next.** A 5-second countdown, Loved it / Not for me, and your progress through the category.
- **Comfort.**
  - A heads-up appears before Intense videos, with **Pick a calmer one** as an option.
  - Optional settings: a vignette during fast drag turns, gliding on or off, hiding Intense videos from the sphere, and a break reminder.
  - With Reduce Motion on, sky pulses, glide and animated transitions turn off.
- **List and Saved.**
  - A flat view of the same picks for anyone who can't or doesn't want to look around.
  - Screen readers get a skip link to it.
- **Settings.** Every option above, plus Replay the intro, Add a 360° video, and Reset.
- **Share.** Links open straight to a video's preview (`#v-music-03`).

### Demo content

The 80 catalog entries are **demo scenes drawn live in code**. They stand in for the licensed 360° videos YOURA will stream: concert rigs, a synthwave drive, ocean, aurora, desert, a stadium, freefall above the clouds, deep space, and the ringed YOURA planet.

They show how the whole experience works end to end, gyroscope included, before any licensing is done.

## Run it locally

```bash
cd youra
python3 -m http.server 8000
```

Then open http://localhost:8000. Any static file server works.

**Motion tracking on a phone needs HTTPS.** iOS only exposes the gyroscope to secure pages. So to try motion on your iPhone, host it as shown below. A local IP address over plain HTTP gets touch only.

## Put it on your iPhone

1. Host the folder on any static HTTPS host. Any of these work:
   - **GitHub Pages:** push this folder to a repository, then Settings › Pages › Deploy from branch.
   - **Netlify Drop:** drag the folder onto https://app.netlify.com/drop.
   - **Cloudflare Pages** or **Vercel:** import the repository with no build command.
2. Open the address in Safari on your iPhone.
3. Tap **Use motion** and allow Motion & Orientation Access.
4. Share › **Add to Home Screen** so it opens full screen, like an app.

## Add licensed videos

Each catalog entry in `js/catalog.js` can point at a real video. To stream one instead of a demo scene, add:

```js
src: 'https://media.example.com/youra/main-stage-front-row-4k.mp4',
stereo: false,   // true for 3D over-under (left eye on top)
demo: false
```

The video must meet these requirements:

- **Equirectangular**, 2:1 (or 1:1 for 3D over-under), with the action at the center of the frame. The center is "the front" the compass points to.
- **H.264 or HEVC MP4**, ideally 3840×1920. iPhones play 4K 360 smoothly; 8K is too heavy for most phones to decode in a browser.
- **Served with CORS** (`Access-Control-Allow-Origin`) if it's on another domain, because WebGL can't draw cross-origin video otherwise.
- **Licensed for streaming in YOURA.** Embedding YouTube's player can't do this: its 360 mode doesn't work in mobile browsers, and its terms forbid pulling the stream into your own player.

You can also try your own files in the app: **Settings › Your videos › Add a 360° video**. Files you add stay on that device, in IndexedDB.

## How it's built

```
index.html           the app page (PWA meta, manifest, icons)
manifest.webmanifest
css/app.css          one dark theme; Jost and IBM Plex Mono
icons/               the "O" from the logo: three red arcs over the white dot
js/
  main.js            app flow: intro → home sphere → player, input, render loop
  views.js           preview sheet, heads-up, first run, Up next, List, Saved, Settings
  intro-src.js       Into the Dot, copied unchanged from the original file
  intro.js           draws the intro, and the planet behind the tiles (sky dimmed)
  tiles.js           the 20 tiles: layout, live previews, labels atlas, focus, picking
  scenes.js          the demo scenes and the equirectangular video shader
  player.js          playback of demo scenes and real 360 video
  look.js            motion (DeviceOrientation → quaternion) plus drag, glide and recenter
  posters.js         still frames of the scenes for the list and sheets
  catalog.js         the 4 × 20 curated picks
  store.js           settings, saved, watched, reactions; your videos in IndexedDB
  math.js, gl.js, ui.js
```

Everything draws in one full-screen WebGL canvas.

- **Intro.** The intro shader ray-traces the logo and the planet.
- **Home.** The same shader keeps drawing the planet, with its sky dimmed, and the tiles are drawn over it as quads in 3D space. Their labels come from a canvas atlas.
- **Player.** The player draws the scene, or samples the video texture, for the direction of each pixel.

Every view is driven by one camera:

```
camera = drag turn × device orientation    (motion on)
camera = drag turn × drag tilt             (touch only)
```

A frame governor lowers the resolution if a phone can't hold the frame rate.

## Toward the App Store

This web app is the fastest way to test the experience on real phones. For the App Store, the same design moves to native Swift:

- **Motion:** Core Motion's device motion. It needs no permission prompt and gives better drift correction.
- **Video:** AVPlayer, drawing into a Metal or RealityKit sphere.
- **Spatial audio:** AVAudioEngine with head tracking.
- **Downloads:** background downloads for offline viewing.

The catalog format and the sphere layout carry over as-is.
