# YOURA

Curated video that you look around by moving your phone, in a film studio you can stand in.

YOURA opens on its logo in 3D and flies you through the white dot. You arrive on a dark film stage, and the lights come up: house lights, the neon sign, the colour wash on the back wall, the film lights, then five video screens. Turn your phone (or drag) to look around the whole stage. Tap a screen for a preview, then watch it in YOURA's own player, which follows the phone from the first frame.

It is a web app (a PWA), built mobile-first for iPhone.

## Open it

Viewing `index.html` on GitHub, or opening it as a file, shows nothing: the app has to be served by a web server.

**On your phone, with motion:** turn on GitHub Pages for this repository (Settings › Pages › Deploy from a branch › pick this branch and `/ (root)`). GitHub gives you an `https://` address. Open it in Safari, tap **Use motion**, allow Motion & Orientation, then Share › **Add to Home Screen** to run it full screen.

**On a computer:**

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Any static file server works, and so do Netlify Drop, Cloudflare Pages and Vercel (no build command needed).

Motion tracking needs HTTPS. iOS only gives the gyroscope to secure pages, so a local address over plain HTTP gets touch only.

## What's in it

- **Intro.** The YOURA logo as solid 3D letters with glowing arcs, mirrored in a dark floor. The camera pushes into the dot past MUSICIAN, ATHLETE and CHARACTER. It runs Full, Short or Off after the first launch, with Skip.
- **The studio.** A film stage you stand in the middle of: a curved back wall washed with colour, five LED screens on truss, the neon sign, a camera on a dolly, director's chairs, a wardrobe rail, flight cases and the stage door.
  - The five screens play live previews of the category's five picks. #1 is the middle screen, then the picks alternate right and left.
  - Each screen shows its number, title, length and comfort level, plus NEW, saved and watched marks.
  - Look at a screen to focus it, or tap one to open its preview. Long-press a screen to save it.
  - The compass turns you back to #1, and the edge arrows turn one screen.
- **Categories.** Musician, Athlete and Character, five picks each, plus Yours for videos you add. Switching category changes the pictures and the colour of the stage lighting.
- **Looking around.**
  - Motion uses the full device orientation: turn, tilt, and roll with the horizon kept level. A drag adds a turn on top.
  - Touch only is one tap away.
  - On iPhone, the first launch asks for Motion & Orientation from a tap. After that, the first tap of each launch turns it back on.
- **Player.**
  - A 360° video wraps all the way round you. An ordinary video plays on a giant curved screen that you look across.
  - It opens out of the screen you picked. Controls: back to the studio, play and pause, seek, face the front, and pinch to zoom. They fade after 3 seconds.
- **Up next.** A 5-second countdown, Loved it / Not for me, and your progress through the category.
- **Comfort.** A heads-up before Intense videos, with **Pick a calmer one** as an option. Optional settings: a vignette during fast drag turns, gliding on or off, hiding Intense videos from the screens, and a break reminder. With Reduce Motion on, the intro and animated transitions are skipped.
- **List and Saved.** A flat view of the same picks for anyone who can't or doesn't want to look around.
- **Share.** Links open straight to a video's preview (`#v-musician-3`).

## The videos

The 15 slots are `assets/video/musician-1.mp4` to `character-5.mp4`. Right now they hold **stand-in scenes** (short 360° clips drawn in code), marked "Stand-in scene" in the app.

To put a real clip in a slot:

1. Save it over the slot's file, for example `assets/video/athlete-2.mp4`. Use H.264 MP4.
2. Run `python3 tools/clips/ingest.py` (it needs `ffmpeg`).

The script reads each clip's shape: 2:1 is treated as 360° video, anything else as an ordinary video for the giant screen. It also makes the posters and the three preview videos that the studio screens play, and writes `assets/video/clips.json`.

Titles, comfort levels and the "why it's here" lines are in `js/catalog.js`. `docs/higgsfield-brief.md` has matching prompts for generating the 15 clips.

You can also try your own files in the app: **Settings › Your videos › Add a video**. They stay on that device.

## How it's built

```
index.html            the page (PWA meta, manifest, icons)
app.js                the built app: everything in js/ plus three.js, in one file
css/app.css           one dark theme; Jost and IBM Plex Mono
assets/studio/        the studio: one 360° image per set of lights, plus mattes and layout
assets/video/         the clips, their posters, the preview videos and clips.json
js/
  main.js             app flow: intro → studio → player, input, the frame loop
  gfx.js              the renderer: HDR buffer, bloom, film tone curve, vignette, grain
  intro3d.js          the 3D logo intro
  stage.js            the studio: adds up the sets of lights, draws the five screens
  theater.js          the player: 360° video, or the giant curved screen
  views.js            preview sheet, heads-up, first run, Up next, List, Saved, Settings
  look.js             motion (DeviceOrientation → quaternion) plus drag, glide and recenter
  catalog.js          the 3 × 5 picks
  store.js            settings, saved, watched, reactions; your videos in IndexedDB
  logo.js, math.js, ui.js
tools/render/         the Blender scene of the studio and the scripts that turn renders into assets
tools/clips/          the stand-in clip renderer and ingest.py
```

**The studio is rendered ahead of time.** A phone only turns on the spot, so the stage is a path-traced 360° picture made in Blender (`tools/render/studio.py`). Each set of lights is rendered separately: house lights, neon, the wall wash, the film lights, and the glow of each screen. Light adds up, so the app fades and tints each set live. That is how the lights come up one by one, how the wall changes colour with the category, and how the floor picks up the colour of whatever is playing on each screen.

**Changing the code.** `app.js` is committed, so hosting needs no build. After editing anything in `js/`:

```bash
npm install
```

```bash
npm run build
```

**Re-rendering the studio** (optional, slow: about half an hour on 4 CPU cores):

```bash
pip install bpy==5.3.0 numpy pillow OpenEXR
```

```bash
python tools/render/studio.py --res 5120 --spp 28 --out studio.exr --layout layout.json
```

```bash
python tools/render/studio.py --res 4096 --matte --out matte.png
```

```bash
python tools/render/post.py studio.exr --layout layout.json --matte matte.png --out assets/studio --base 2048
```

## Toward the App Store

This web app is the fastest way to test the experience on real phones. For the App Store, the same design moves to native Swift: Core Motion for device motion (no permission prompt, better drift correction), AVPlayer drawing into Metal or RealityKit, AVAudioEngine for head-tracked spatial audio, and background downloads for offline viewing. The studio assets, the catalog format and the screen layout carry over as they are.
