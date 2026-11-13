"""YOURA Studio: the home screen as a film soundstage, built and path-traced with Blender (Cycles).

You stand on your mark in the middle of a dark stage. Ahead, five LED walls (the five videos) stand in an arc
in front of a white cyclorama that glows with coloured light; around you are a camera on a dolly, director's
chairs, film lights, flight cases, a video village and a wardrobe rail. Above hang space lights on a pipe grid.

The viewer never moves (the phone only rotates), so the stage is rendered once as a 360-degree picture.
Each set of lights is written as its own pass (a "light group") so the app can fade and tint them live:
  base  house lights: the space lights overhead, monitors, signs
  beam  the film lights: sky panels, a soft box and Fresnels on stands
  wall  the wash on the cyclorama
  neon  the red arcs of the YOURA sign      dot  the white dot of the sign
  scr1..scr5  the glow each video screen throws on the stage

Run (needs `pip install bpy`):
    python studio.py --res 2048 --spp 64 --out studio.exr --layout layout.json
    python studio.py --res 2048 --matte --out matte.png        # which pixels the screens cover

Blender axes: X right, Y forward (the centre screen is at +Y), Z up. Units are metres.
"""
import bpy, bmesh, math, sys, json, random, argparse, warnings, time, os
from mathutils import Vector, Matrix

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
warnings.filterwarnings('ignore', category=DeprecationWarning)

ap = argparse.ArgumentParser()
ap.add_argument('--res', type=int, default=1024, help='panorama width in pixels (height is half)')
ap.add_argument('--spp', type=int, default=32)
ap.add_argument('--out', default='studio.exr')
ap.add_argument('--layout', default='')
ap.add_argument('--haze', type=float, default=0.006)
ap.add_argument('--border', type=float, nargs=4, default=None, help='min_x max_x min_y max_y (0..1) to render a strip')
ap.add_argument('--threshold', type=float, default=0.02)
ap.add_argument('--seed', type=int, default=7)
ap.add_argument('--matte', action='store_true', help='render only the mask of the five screens')
ap.add_argument('--blend', default='', help='also save the scene as a .blend file')
args = ap.parse_args(sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:])
random.seed(args.seed)

bpy.ops.wm.read_factory_settings(use_empty=True)
from kit import *            # noqa: E402  (after the factory reset, so the kit sees the fresh scene)

EYE = 1.65
X0, X1, Y0, Y1 = -13.0, 13.0, -12.0, 15.0     # the stage walls
H = 11.2                                       # roof
GRID_Z = 8.8                                   # the pipe grid the lights hang from
SCREEN_R = 6.8
SCREEN_W, SCREEN_H = 3.4, 1.9125
SCREEN_Z = 2.0
SCREEN_AZ = [-64, -32, 0, 32, 64]
CYC_R, CYC_AZ, CYC_H = 11.0, 80, 7.4
GROUPS = ['base', 'neon', 'dot', 'beam', 'wall', 'scr1', 'scr2', 'scr3', 'scr4', 'scr5']

sc = bpy.context.scene
vl = sc.view_layers[0]
for g in GROUPS:
    vl.lightgroups.add(name=g)

layout = {'eye': EYE, 'screens': [], 'groups': GROUPS, 'emblem': {}, 'chairs': [],
          'units': 'metres; app axes: x right, y up, z toward the viewer'}


def to_app(v):
    return [round(v.x, 4), round(v.z - EYE, 4), round(-v.y, 4)]


def P(r, az, twist=0.0, z=0.0):
    """Place something at distance r and azimuth az, facing outward (plus a twist, in degrees)."""
    return T(polar(r, az, z)) @ facing(az + twist)


# ---------------------------------------------------------------------------------------------- materials

def mat_stage_floor():
    """Black-painted stage floor: glossy where it's clean, dull where it's scuffed, with sheet seams."""
    n = Nodes('StageFloor')
    co = n.coords('Object')
    x, y, _ = n.sep(co)
    big = n.noise(co, 0.2, 6, 0.6, 0.5)
    mid = n.noise(co, 1.7, 9, 0.62)
    fine = n.noise(co, 70.0, 4, 0.6)
    base = n.ramp(big, [(0.3, (0.012, 0.012, 0.013)), (0.55, (0.022, 0.022, 0.024)), (0.8, (0.04, 0.039, 0.038))])
    base = n.mix(n.math('MULTIPLY', mid, 0.3), base, (0.05, 0.048, 0.046))
    # seams of the 2.44 x 1.22 m floor sheets
    jx = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', n.math('ADD', x, 0.4), 2.44)), 0.5))
    jy = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', n.math('ADD', y, 0.3), 1.22)), 0.5))
    jd = n.math('MINIMUM', n.math('MULTIPLY', n.math('SUBTRACT', 0.5, jx), 2.44), n.math('MULTIPLY', n.math('SUBTRACT', 0.5, jy), 1.22))
    seam = n.ramp(jd, [(0.0, (0, 0, 0)), (0.004, (1, 1, 1))])
    base = n.mix(seam, (0.004, 0.004, 0.004), base)
    # scuffs: long dull marks in two directions
    s1 = n.noise(n.comb(n.math('MULTIPLY', x, 0.5), n.math('MULTIPLY', y, 11.0), 0.0), 5.0, 5, 0.7)
    s2 = n.noise(n.comb(n.math('MULTIPLY', x, 9.0), n.math('MULTIPLY', y, 0.7), 3.0), 4.0, 5, 0.7)
    scuff = n.ramp(n.math('MAXIMUM', s1, s2), [(0.6, (0, 0, 0)), (0.78, (1, 1, 1))])
    base = n.mix(n.math('MULTIPLY', scuff, 0.35), base, (0.075, 0.073, 0.07))
    rough = n.ramp(n.math('ADD', n.math('MULTIPLY', big, 0.55), n.math('MULTIPLY', mid, 0.45)),
                   [(0.3, (0.09, 0.09, 0.09)), (0.55, (0.2, 0.2, 0.2)), (0.8, (0.42, 0.42, 0.42))])
    rough = n.math('ADD', rough, n.math('MULTIPLY', scuff, 0.22))
    h = n.math('MULTIPLY', n.math('ADD', n.math('MULTIPLY', mid, 0.25), n.math('MULTIPLY', fine, 0.05)), seam)
    n.set(n.bsdf, Base_Color=base, Roughness=rough, Normal=n.bump(h, 0.1, 0.003), Specular_IOR_Level=0.55,
          Coat_Weight=0.2, Coat_Roughness=0.1)
    return n.mat


def mat_stage_wall():
    """Stage walls: scuffed black paint to 2.7 m, quilted sound blankets above. UVs are in metres."""
    n = Nodes('StageWall')
    uv = n.new('ShaderNodeUVMap').outputs[0]
    u, v, _ = n.sep(uv)
    big = n.noise(uv, 0.5, 5, 0.6)
    mid = n.noise(uv, 4.0, 7, 0.65)
    fine = n.noise(uv, 180.0, 3, 0.6)
    # quilted squares, 0.34 m, sewn along their edges
    qu = n.math('MULTIPLY', n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', u, 0.34)), 0.5)), 2.0)
    qv = n.math('MULTIPLY', n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', v, 0.34)), 0.5)), 2.0)
    edge = n.math('MAXIMUM', qu, qv)
    pillow = n.ramp(edge, [(0.0, (1, 1, 1)), (0.7, (0.85, 0.85, 0.85)), (0.93, (0.35, 0.35, 0.35)), (1.0, (0, 0, 0))])
    # the blankets are 2.44 m wide and hang with a small gap between them
    bu = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', u, 2.44)), 0.5))
    gap = n.ramp(n.math('MULTIPLY', n.math('SUBTRACT', 0.5, bu), 2.44), [(0.0, (0, 0, 0)), (0.02, (1, 1, 1))])
    quilt = n.ramp(n.math('ADD', n.math('MULTIPLY', big, 0.6), n.math('MULTIPLY', mid, 0.4)),
                   [(0.3, (0.016, 0.016, 0.018)), (0.75, (0.04, 0.04, 0.044))])
    quilt = n.mix(n.ramp(edge, [(0.9, (0, 0, 0)), (0.97, (1, 1, 1))]), quilt, (0.008, 0.008, 0.009))
    quilt = n.mix(gap, (0.003, 0.003, 0.003), quilt)
    # painted lower wall with scuffs and trolley marks
    sc_uv = n.comb(n.math('MULTIPLY', u, 0.7), n.math('MULTIPLY', v, 9.0), 0.0)
    marks = n.ramp(n.noise(sc_uv, 5.0, 6, 0.7), [(0.56, (0, 0, 0)), (0.74, (1, 1, 1))])
    low = n.ramp(n.math('DIVIDE', v, 2.7), [(0.0, (1, 1, 1)), (0.55, (0.25, 0.25, 0.25)), (1.0, (0.1, 0.1, 0.1))])
    paint = n.mix(n.math('MULTIPLY', n.math('MULTIPLY', marks, low), 0.6), (0.014, 0.014, 0.016), (0.11, 0.105, 0.1))
    paint = n.mix(n.math('MULTIPLY', mid, 0.25), paint, (0.03, 0.03, 0.032))
    upper = n.math('GREATER_THAN', v, 2.7)
    base = n.mix(upper, paint, quilt)
    rough = n.mix(upper, n.mix(marks, (0.38, 0.38, 0.38), (0.7, 0.7, 0.7)), (0.96, 0.96, 0.96))
    h = n.math('ADD', n.math('MULTIPLY', n.math('MULTIPLY', pillow, gap), upper), n.math('MULTIPLY', fine, 0.03))
    n.set(n.bsdf, Base_Color=base, Roughness=rough, Normal=n.bump(h, 0.7, 0.03), Specular_IOR_Level=0.3, Sheen_Weight=0.25)
    return n.mat


def mat_cyc():
    """Cyclorama paint: matt white, greyer and scuffed near the floor."""
    n = Nodes('Cyc')
    co = n.coords('Object')
    _, _, z = n.sep(co)
    a = n.noise(co, 1.3, 7, 0.65)
    b = n.noise(co, 14.0, 5, 0.6)
    dirt = n.math('MULTIPLY', n.ramp(z, [(0.0, (1, 1, 1)), (0.12, (0.35, 0.35, 0.35)), (0.3, (0, 0, 0))]),
                  n.ramp(a, [(0.35, (0.3, 0.3, 0.3)), (0.7, (1, 1, 1))]))
    base = n.mix(n.math('MULTIPLY', dirt, 0.5), (0.7, 0.7, 0.69), (0.3, 0.29, 0.28))
    base = n.mix(n.math('MULTIPLY', b, 0.08), base, (0.5, 0.5, 0.5))
    n.set(n.bsdf, Base_Color=base, Roughness=0.62, Normal=n.bump(b, 0.04, 0.002), Specular_IOR_Level=0.35)
    return n.mat


def mat_wood(name='Wood', color=(0.42, 0.27, 0.14), scale=1.0):
    n = Nodes(name)
    co = n.coords('Object', scale=(scale * 1.0, scale * 9.0, scale * 9.0))
    g = n.noise(co, 6.0, 7, 0.7, 1.2)
    f = n.noise(n.coords('Object'), 60.0, 4, 0.6)
    dark = tuple(c * 0.55 for c in color)
    base = n.mix(n.ramp(g, [(0.35, (0, 0, 0)), (0.7, (1, 1, 1))]), (*dark, 1), (*color, 1))
    n.set(n.bsdf, Base_Color=base, Roughness=n.math('ADD', 0.45, n.math('MULTIPLY', g, 0.2)), Normal=n.bump(f, 0.08, 0.002),
          Specular_IOR_Level=0.4)
    return n.mat


def mat_cloth(name, color, rough=0.9, weave=900.0):
    n = Nodes(name)
    co = n.coords('Object')
    x, y, z = n.sep(co)
    w = n.math('MULTIPLY', n.math('SINE', n.math('MULTIPLY', n.math('ADD', x, y), weave)), n.math('SINE', n.math('MULTIPLY', z, weave)))
    a = n.noise(co, 9.0, 5, 0.6)
    base = n.mix(n.math('MULTIPLY', a, 0.3), (*color, 1), (*[c * 0.6 for c in color], 1))
    n.set(n.bsdf, Base_Color=base, Roughness=rough, Normal=n.bump(w, 0.25, 0.0008), Sheen_Weight=0.4, Specular_IOR_Level=0.3)
    return n.mat


def mat_stripes(name, a=(0.85, 0.85, 0.83), b=(0.012, 0.012, 0.012), freq=14.0):
    n = Nodes(name)
    x, y, z = n.sep(n.coords('Object'))
    d = n.math('FRACT', n.math('MULTIPLY', n.math('ADD', n.math('ADD', x, y), z), freq))
    n.set(n.bsdf, Base_Color=n.ramp(d, [(0.49, (*a, 1)), (0.5, (*b, 1))], 'CONSTANT'), Roughness=0.5)
    return n.mat


def mat_roof():
    """Underside of the roof: dark ribbed metal deck."""
    n = Nodes('Roof')
    x, y, _ = n.sep(n.coords('Object'))
    rib = n.math('ABSOLUTE', n.math('SINE', n.math('MULTIPLY', y, 15.0)))
    a = n.noise(n.coords('Object'), 0.6, 5, 0.6)
    n.set(n.bsdf, Base_Color=n.mix(a, (0.01, 0.01, 0.011), (0.03, 0.03, 0.032)), Roughness=0.7, Metallic=0.6,
          Normal=n.bump(rib, 0.6, 0.03))
    return n.mat


M = {}


def build_materials():
    M['floor'] = mat_stage_floor()
    M['wall'] = mat_stage_wall()
    M['cyc'] = mat_cyc()
    M['roof'] = mat_roof()
    M['alu'] = mat_metal('Aluminium', (0.80, 0.81, 0.82), 0.3, 0.1)
    M['steel'] = mat_metal('Steel', (0.42, 0.43, 0.45), 0.42, 0.18)
    M['steel_dark'] = mat_metal('SteelDark', (0.07, 0.07, 0.08), 0.45, 0.15)
    M['chrome'] = mat_metal('Chrome', (0.9, 0.9, 0.9), 0.12, 0.05)
    M['black'] = mat_paint('BlackPaint', (0.012, 0.012, 0.013), 0.4, 0.08, (0.2, 0.2, 0.21))
    M['grey'] = mat_paint('GreyPaint', (0.06, 0.063, 0.068), 0.42, 0.2, (0.2, 0.2, 0.2))
    M['door'] = mat_paint('DoorPaint', (0.05, 0.055, 0.06), 0.42, 0.3, (0.25, 0.23, 0.22))
    M['yellow'] = mat_paint('YellowPaint', (0.75, 0.5, 0.03), 0.45, 0.2, (0.2, 0.2, 0.2))
    M['rubber'] = simple('Rubber', (0.014, 0.014, 0.015), 0.62)
    M['case'] = mat_case()
    M['hazard'] = mat_hazard()
    M['screen'] = mat_glass_black()
    M['wood'] = mat_wood()
    M['wood_pale'] = mat_wood('WoodPale', (0.55, 0.42, 0.26), 0.7)
    M['canvas'] = mat_cloth('Canvas', (0.012, 0.012, 0.014))
    M['sand'] = mat_cloth('SandbagCloth', (0.05, 0.045, 0.035), 0.85, 500.0)
    M['white_paint'] = simple('StencilWhite', (0.6, 0.6, 0.58), 0.6)
    M['tape'] = simple('Tape', (0.85, 0.72, 0.05), 0.5)
    M['tape_w'] = simple('TapeWhite', (0.7, 0.7, 0.68), 0.5)
    M['print'] = emitter('PrintWhite', (0.9, 0.9, 0.88), 0.35)        # lettering on the chairs: faintly self-lit so it stays readable
    M['lens'] = simple('Lens', (0.01, 0.012, 0.02), 0.04, 0.0, 1.0)
    M['silk'] = simple('Silk', (0.8, 0.8, 0.78), 0.8)
    M['slate'] = simple('Slate', (0.02, 0.02, 0.022), 0.35)
    M['stripes'] = mat_stripes('ClapperStripes')
    M['ladder'] = mat_paint('LadderYellow', (0.8, 0.45, 0.02), 0.5, 0.25, (0.5, 0.5, 0.5))
    # emitters
    M['e_neon'] = emitter('NeonRed', (1.0, 0.035, 0.07), 34.0)
    M['e_dot'] = emitter('DotWhite', (1.0, 0.98, 0.96), 20.0)
    M['e_space'] = emitter('SpaceLightSilk', (1.0, 0.86, 0.7), 2.4)
    M['e_space_b'] = emitter('SpaceLightBase', (1.0, 0.9, 0.78), 5.0)
    M['e_panel'] = emitter('SkyPanel', (1.0, 1.0, 1.0), 22.0)
    M['e_soft'] = emitter('SoftBox', (1.0, 1.0, 1.0), 14.0)
    M['e_fresnel'] = emitter('FresnelLens', (1.0, 1.0, 1.0), 90.0)
    M['e_bar'] = emitter('CycLight', (1.0, 1.0, 1.0), 40.0)
    M['e_monitor'] = emitter('Monitor', (0.45, 0.6, 0.85), 1.6)
    M['e_cam'] = emitter('CamMonitor', (0.5, 0.65, 0.9), 1.2)
    M['e_rec'] = emitter('RecordingSign', (1.0, 0.04, 0.03), 5.0)
    M['e_exit'] = emitter('ExitGreen', (0.1, 1.0, 0.35), 4.0)
    M['e_led_r'] = emitter('RackRed', (1.0, 0.05, 0.03), 8.0)
    M['e_led_g'] = emitter('RackGreen', (0.1, 1.0, 0.2), 8.0)
    for i in range(5):
        M[f'e_scr{i + 1}'] = emitter(f'ScreenLight{i + 1}', (1, 1, 1), 5.0, one_sided=True)
    for k, c in enumerate([(0.35, 0.02, 0.03), (0.6, 0.42, 0.06), (0.05, 0.1, 0.28), (0.015, 0.015, 0.018), (0.6, 0.57, 0.5),
                           (0.04, 0.16, 0.09), (0.5, 0.12, 0.25), (0.3, 0.3, 0.33), (0.45, 0.2, 0.06)]):
        M[f'cloth{k}'] = mat_cloth(f'Garment{k}', c, 0.85, 700.0)


# ---------------------------------------------------------------------------------------------- the stage

def build_shell():
    fl = Mesh()
    fl.quad([(X0, Y0, 0), (X1, Y0, 0), (X1, Y1, 0), (X0, Y1, 0)])
    fl.done('Floor', M['floor'])
    walls = Mesh()
    u = 0.0
    for a, b in (((X0, Y1), (X1, Y1)), ((X1, Y1), (X1, Y0)), ((X1, Y0), (X0, Y0)), ((X0, Y0), (X0, Y1))):
        L = (Vector(b) - Vector(a)).length
        walls.quad([(a[0], a[1], 0), (b[0], b[1], 0), (b[0], b[1], H), (a[0], a[1], H)], [(u, 0), (u + L, 0), (u + L, H), (u, H)])
        u += L
    walls.done('Walls', M['wall'])
    roof = Mesh()
    roof.quad([(X0, Y0, H), (X0, Y1, H), (X1, Y1, H), (X1, Y0, H)])
    roof.done('Roof', M['roof'])
    # a timber rail where the paint meets the blankets, and a skirting board
    rail = Mesh()
    for (cx, cy, sx, sy) in ((0, Y1 - 0.03, X1 - X0, 0.06), (0, Y0 + 0.03, X1 - X0, 0.06), (X0 + 0.03, (Y0 + Y1) / 2, 0.06, Y1 - Y0), (X1 - 0.03, (Y0 + Y1) / 2, 0.06, Y1 - Y0)):
        rail.box((sx, sy, 0.12), T((cx, cy, 2.7)), 0.01)
        rail.box((sx, sy, 0.16), T((cx, cy, 0.08)), 0.01)
    rail.done('WallRails', M['black'], smooth=True)
    # steel columns along the side and back walls
    col = Mesh()
    spots = [(X0 + 0.22, y, 0) for y in (-8, -2.5, 3, 8.5)] + [(X1 - 0.22, y, 180) for y in (-8, -2.5, 3, 8.5)] + [(x, Y0 + 0.22, 90) for x in (-8.5, 8.5)]
    for x, y, rz in spots:
        m = T((x, y, H / 2)) @ Matrix.Rotation(RAD(rz), 4, 'Z')
        col.box((0.02, 0.3, H), m)
        col.box((0.28, 0.025, H), m @ T((0, -0.15, 0)))
        col.box((0.28, 0.025, H), m @ T((0, 0.15, 0)))
        col.box((0.4, 0.45, 0.02), T((x, y, 0.01)) @ Matrix.Rotation(RAD(rz), 4, 'Z'))
    col.done('Columns', M['grey'], smooth=True)
    # roof trusses and the pipe grid
    tr = Mesh()
    for y in (-8, -2.5, 3, 8.5, 13.2):
        truss_run(tr, (X0 + 0.3, y, H - 0.75), (X1 - 0.3, y, H - 0.75), 0.9, 0.05, 0.022)
    tr.done('RoofTrusses', M['grey'], smooth=True)
    grid = Mesh()
    y = Y0 + 1.0
    while y < Y1 - 0.5:
        grid.tube((X0 + 0.4, y, GRID_Z), (X1 - 0.4, y, GRID_Z), 0.024, 10)
        y += 1.6
    x = X0 + 1.0
    while x < X1 - 0.5:
        grid.tube((x, Y0 + 0.4, GRID_Z + 0.05), (x, Y1 - 0.4, GRID_Z + 0.05), 0.024, 10)
        x += 1.6
    for ty in (-8, -2.5, 3, 8.5, 13.2):                              # hangers from the trusses
        x = X0 + 1.0
        while x < X1 - 0.5:
            grid.tube((x, ty, GRID_Z + 0.05), (x, ty, H - 1.2), 0.008, 6)
            x += 3.2
    grid.done('PipeGrid', M['steel_dark'], smooth=True)
    # catwalks along both side walls and the back wall
    deck = Mesh(); rails = Mesh()
    z = 6.9

    def catwalk(a, b, inward):
        a, b, inward = Vector((a[0], a[1], 0)), Vector((b[0], b[1], 0)), Vector(inward)
        d = (b - a)
        L = d.length
        mid = (a + b) / 2 + inward * 0.6
        m = T((mid.x, mid.y, z)) @ Matrix.Rotation(math.atan2(d.y, d.x), 4, 'Z')
        deck.box((L, 1.2, 0.05), m, 0.006)
        deck.box((L, 0.05, 0.16), m @ T((0, 0.6, -0.06)))
        n = int(L / 1.6)
        for k in range(n + 1):
            p = a + d * (k / n) + inward * 1.18
            rails.tube((p.x, p.y, z), (p.x, p.y, z + 1.1), 0.02, 8)
            q = a + d * (k / n)
            rails.tube((q.x + inward.x * 1.15, q.y + inward.y * 1.15, z - 0.03), (q.x + inward.x * 0.02, q.y + inward.y * 0.02, z - 0.9), 0.022, 8)
        for h in (0.55, 1.1):
            p0 = a + inward * 1.18
            p1 = b + inward * 1.18
            rails.tube((p0.x, p0.y, z + h), (p1.x, p1.y, z + h), 0.018, 8)
    catwalk((X0, Y0 + 0.2), (X0, Y1 - 4.5), (1, 0, 0))
    catwalk((X1, Y0 + 0.2), (X1, Y1 - 4.5), (-1, 0, 0))
    catwalk((X0 + 1.2, Y0), (X1 - 1.2, Y0), (0, 1, 0))
    deck.done('CatwalkDecks', M['steel_dark'], smooth=True)
    rails.done('CatwalkRails', M['steel'], smooth=True)


def build_cyc():
    """The cyclorama: a curved white wall with a cove at the floor, washed with light from above and below."""
    cyc = Mesh()
    c = 1.3
    prof = [(CYC_R - c - 1.3, 0.004)]
    for k in range(13):
        a = RAD(90 * k / 12)
        prof.append((CYC_R - c + c * math.sin(a), c - c * math.cos(a) + 0.004))
    prof.append((CYC_R, CYC_H))
    n = 120
    for i in range(n):
        a0 = -CYC_AZ + 2 * CYC_AZ * i / n
        a1 = -CYC_AZ + 2 * CYC_AZ * (i + 1) / n
        for (r0, z0), (r1, z1) in zip(prof, prof[1:]):
            cyc.quad([polar(r0, a0, z0), polar(r0, a1, z0), polar(r1, a1, z1), polar(r1, a0, z1)])
    bmesh.ops.remove_doubles(cyc.bm, verts=cyc.bm.verts, dist=1e-4)
    cyc.done('Cyc', M['cyc'], smooth=True, sharp=85)
    # the timber frame you can see at its ends and along the top
    frame = Mesh()
    for s in (-1, 1):
        for rr in (CYC_R + 0.08, CYC_R + 0.7):
            frame.box((0.09, 0.09, CYC_H), P(rr, s * (CYC_AZ + 0.3), 0, CYC_H / 2))
        for zz in (0.6, 2.4, 4.2, 6.0, CYC_H - 0.05):
            frame.box((0.07, 0.7, 0.07), P(CYC_R + 0.39, s * (CYC_AZ + 0.3), 0, zz))
    for i in range(n // 4):
        a0 = -CYC_AZ + 2 * CYC_AZ * i / (n // 4)
        a1 = -CYC_AZ + 2 * CYC_AZ * (i + 1) / (n // 4)
        frame.tube(polar(CYC_R + 0.05, a0, CYC_H + 0.03), polar(CYC_R + 0.05, a1, CYC_H + 0.03), 0.045, 6)
    frame.done('CycFrame', M['wood_pale'], smooth=True)
    # cyc lights: a row hung from the grid, and a ground row on the floor
    body = Mesh(); glow = Mesh()
    for az in range(-72, 73, 12):
        top = polar(8.9, az, GRID_Z - 0.55)
        tgt = polar(CYC_R, az, 3.4)
        m = look(top, tgt)
        body.box((1.0, 0.2, 0.24), m, 0.02)
        body.tube(top + Vector((0, 0, 0.12)), Vector((top.x, top.y, GRID_Z)), 0.012, 6)
        glow.box((0.92, 0.012, 0.17), m @ T((0, 0.105, 0)))
        area_light(f'CycTop{az}', m @ Vector((0, 0.13, 0)), tgt, 0.92, 950, 'wall', size_y=0.17, spread=115)
        g = polar(9.55, az, 0.09)
        tg = polar(CYC_R, az, 2.6)
        mg = look(g, tg)
        body.box((1.0, 0.13, 0.12), mg, 0.012)
        glow.box((0.94, 0.012, 0.07), mg @ T((0, 0.07, 0)))
        area_light(f'CycGround{az}', mg @ Vector((0, 0.09, 0)), tg, 0.94, 420, 'wall', size_y=0.07, spread=80)
    body.done('CycLightBodies', M['black'], smooth=True)
    glow.done('CycLightGlow', M['e_bar'], lg='wall')


def build_rig():
    """The five LED walls on their truss."""
    truss = Mesh(); plates = Mesh(); frames = Mesh(); cab = Mesh(); wires = Mesh()
    tower_az = [-80, -48, -16, 16, 48, 80]
    top_z = 4.55
    tr = SCREEN_R + 0.3
    tops = []
    for az in tower_az:
        truss_run(truss, polar(tr, az, 0.03), polar(tr, az, top_z))
        plates.box((0.75, 0.75, 0.03), P(tr, az, 0, 0.015), 0.004)
        for k in (-1, 1):
            plates.box((0.07, 0.9, 0.05), P(tr, az, 0, 0.045) @ Matrix.Rotation(RAD(45 * k), 4, 'Z') @ T((0, 0.45, 0)), 0.006)
        tops.append(polar(tr, az, top_z))
    for a, b in zip(tops, tops[1:]):
        truss_run(truss, a, b)
    hw, hh = SCREEN_W / 2, SCREEN_H / 2
    for i, az in enumerate(SCREEN_AZ):
        m = P(SCREEN_R, az, 0, SCREEN_Z)
        face = Mesh()
        face.quad([m @ Vector(p) for p in ((-hw, 0, -hh), (hw, 0, -hh), (hw, 0, hh), (-hw, 0, hh))], [(0, 0), (1, 0), (1, 1), (0, 1)])
        face.done(f'ScreenFace{i + 1}', M['screen'], recalc=False)
        # the light the screen gives off: hidden from the camera, because the app draws the video itself
        glow = Mesh()
        glow.quad([m @ Vector(p) for p in ((-hw, -0.004, -hh), (hw, -0.004, -hh), (hw, -0.004, hh), (-hw, -0.004, hh))])
        glow.done(f'ScreenGlow{i + 1}', M[f'e_scr{i + 1}'], lg=f'scr{i + 1}', cam=False, recalc=False)
        cab.box((SCREEN_W + 0.05, 0.09, SCREEN_H + 0.05), m @ T((0, 0.05, 0)), 0.006)
        for x in (-hw - 0.012, hw + 0.012):
            frames.box((0.024, 0.11, SCREEN_H + 0.06), m @ T((x, 0.04, 0)), 0.004)
        for z in (-hh - 0.012, hh + 0.012):
            frames.box((SCREEN_W + 0.06, 0.11, 0.024), m @ T((0, 0.04, z)), 0.004)
        for x in (-1.1, 0, 1.1):
            frames.box((0.06, 0.06, SCREEN_H + 0.9), m @ T((x, 0.14, -0.3)), 0.004)
            foot = m @ Vector((x, 0.3, 0))
            plates.box((0.45, 0.6, 0.025), T((foot.x, foot.y, 0.0125)) @ facing(az), 0.004)
        frames.box((SCREEN_W, 0.05, 0.05), m @ T((0, 0.14, -hh - 0.25)), 0.004)
        for x in (-1.2, 1.2):
            a = m @ Vector((x, 0.06, hh + 0.02))
            wires.tube(a, Vector((a.x, a.y, top_z - 0.15)) + polar(1, az) * 0.24, 0.006, 6)
        right = facing(az) @ Vector((1, 0, 0))
        layout['screens'].append({'id': i + 1, 'az': az, 'center': to_app(polar(SCREEN_R, az, SCREEN_Z)),
                                  'right': [round(right.x, 5), round(right.z, 5), round(-right.y, 5)], 'up': [0, 1, 0],
                                  'width': SCREEN_W, 'height': SCREEN_H})
    for top in tops:                                                 # chain hoists up to the grid, clear of the sign
        wires.tube(top + Vector((0, 0, 0.15)), Vector((top.x, top.y, GRID_Z)), 0.007, 6)
        cab.box((0.18, 0.18, 0.3), T(top + Vector((0, 0, 0.42))), 0.02)
    truss.done('Truss', M['alu'], smooth=True)
    plates.done('BasePlates', M['steel'], smooth=True)
    frames.done('ScreenFrames', M['steel_dark'], smooth=True)
    cab.done('ScreenCabinets', M['black'], smooth=True)
    wires.done('HangWires', M['steel'], smooth=True)
    return tr


def build_emblem():
    """The YOURA sign: three red neon arcs over a glowing white dot, on a black frame hung from the grid."""
    c = Vector((0, 10.3, 6.5))
    neon = Mesh(); mount = Mesh()
    radii = [0.8, 1.38, 1.98]
    tube = [0.042, 0.042, 0.046]
    a0, a1 = -9, 189
    for r, tr_ in zip(radii, tube):
        n = 120
        pts = [c + Vector((math.cos(RAD(a0 + (a1 - a0) * k / n)) * r, 0, math.sin(RAD(a0 + (a1 - a0) * k / n)) * r)) for k in range(n + 1)]
        for p, q in zip(pts, pts[1:]):
            neon.tube(p, q, tr_, 12)
            neon.sphere(tr_, T(q), 10)
        neon.sphere(tr_, T(pts[0]), 10)
        for k in range(0, n + 1, 15):
            mount.tube(pts[k] + Vector((0, 0.02, 0)), pts[k] + Vector((0, 0.16, 0)), 0.01, 6)
    neon.done('NeonArcs', M['e_neon'], smooth=True, lg='neon')
    # the frame behind the tubes
    y = c.y + 0.16
    xs, z0, z1 = 2.2, c.z - 0.5, c.z + 2.15
    for a, b in (((-xs, z0), (xs, z0)), ((xs, z0), (xs, z1)), ((xs, z1), (-xs, z1)), ((-xs, z1), (-xs, z0)),
                 ((-xs, c.z), (xs, c.z)), ((0, z0), (0, z1)), ((-xs, z0), (0, z1)), ((xs, z0), (0, z1)),
                 ((-xs * 0.5, z0), (-xs * 0.5, z1)), ((xs * 0.5, z0), (xs * 0.5, z1))):
        mount.tube((a[0], y, a[1]), (b[0], y, b[1]), 0.016, 8)
    for x in (-xs, xs):
        mount.tube((x, y, z1), (x, y, GRID_Z), 0.005, 6)
    mount.tube(c + Vector((0, 0.03, 0)), c + Vector((0, 0.16, 0)), 0.04, 10)
    mount.done('SignFrame', M['steel_dark'], smooth=True)
    dot = Mesh()
    dot.sphere(0.29, T(c), 48)
    dot.done('SignDot', M['e_dot'], smooth=True, lg='dot')
    layout['emblem'] = {'center': to_app(c), 'radii': radii, 'dot': 0.29}


def build_space_lights():
    """Space lights: silk lanterns hung from the grid. The house lights of the stage."""
    ring = Mesh(); silk = Mesh(); base = Mesh(); rods = Mesh()
    k = 0
    for x in (-7.8, -2.6, 2.6, 7.8):
        for y in (-7.5, -1.5, 4.6):
            z = 7.35
            ring.cyl(0.44, 0.1, T((x, y, z + 0.38)), 32)
            for a in (0, 90, 180, 270):
                rods.tube((x + math.cos(RAD(a)) * 0.4, y + math.sin(RAD(a)) * 0.4, z + 0.42), (x, y, z + 0.95), 0.006, 6)
            rods.tube((x, y, z + 0.95), (x, y, GRID_Z), 0.008, 6)
            silk.cyl(0.43, 0.7, T((x, y, z)), 32, caps=False)
            base.disc(0.43, T((x, y, z - 0.35)), 32)
            L = bpy.data.lights.new(f'Space{k}', 'POINT')
            L.energy = 330; L.shadow_soft_size = 0.3; L.color = (1.0, 0.86, 0.7)
            ob = bpy.data.objects.new(f'Space{k}', L)
            ob.location = (x, y, z - 0.5)
            link(ob, 'base')
            k += 1
    ring.done('SpaceLightRings', M['black'], smooth=True)
    rods.done('SpaceLightRods', M['steel_dark'], smooth=True)
    silk.done('SpaceLightSilk', M['e_space'], smooth=True, lg='base')
    base.done('SpaceLightBase', M['e_space_b'], lg='base')


def build_film_lights():
    """The film lights: sky panels on the grid, a soft box and three Fresnels on stands."""
    body = Mesh(); panel = Mesh(); stands = Mesh(); soft = Mesh(); lens = Mesh(); doors = Mesh(); flags = Mesh(); silkm = Mesh(); bags = Mesh()

    def sandbag(p, rz):
        m = T((p[0], p[1], 0.05)) @ Matrix.Rotation(RAD(rz), 4, 'Z')
        bags.box((0.2, 0.26, 0.085), m @ T((-0.11, 0, 0)), 0.035)
        bags.box((0.2, 0.26, 0.085), m @ T((0.11, 0, 0)), 0.035)
        bags.box((0.06, 0.1, 0.05), m @ T((0, 0, 0.03)), 0.015)

    # sky panels: soft rectangles of light above and around the mark
    for k, (x, y) in enumerate(((-3.4, 2.6), (3.4, 2.6), (-3.6, -3.2), (3.6, -3.2))):
        pos = Vector((x, y, GRID_Z - 0.6))
        tgt = Vector((x * 0.25, y * 0.25, 0.6))
        m = look(pos, tgt)
        body.box((1.3, 0.14, 0.72), m, 0.02)
        for s in (-1, 1):
            body.box((0.03, 0.1, 0.5), m @ T((s * 0.7, -0.05, 0)), 0.006)
        body.tube(pos + Vector((0, 0, 0.3)), Vector((x, y, GRID_Z)), 0.014, 8)
        panel.box((1.2, 0.012, 0.62), m @ T((0, 0.075, 0)))
        area_light(f'SkyPanel{k}', m @ Vector((0, 0.1, 0)), tgt, 1.2, 2100, 'beam', size_y=0.62, spread=105)
    # a big soft box on a stand, left of the mark
    base_p = polar(4.7, -106)
    top = stand(stands, base_p, 2.45)
    sandbag(base_p + Vector((0.3, 0.15, 0)), 30)
    tgt = Vector((0.6, 1.2, 0.9))
    m = look(top + Vector((0, 0, 0.1)), tgt)
    soft.box((0.3, 0.3, 0.3), m @ T((0, -0.25, 0)), 0.03)
    for sx, sz in ((-1, -1), (1, -1), (1, 1), (-1, 1)):                  # the fabric box: four tapering sides
        soft.quad([m @ Vector((sx * 0.15, -0.1, sz * 0.15)), m @ Vector((-sz * 0.15 if sx == sz else sz * 0.15, -0.1, sx * 0.15 if sx == sz else -sx * 0.15)),
                   m @ Vector((-sz * 0.6 if sx == sz else sz * 0.6, 0.5, sx * 0.45 if sx == sz else -sx * 0.45)), m @ Vector((sx * 0.6, 0.5, sz * 0.45))])
    silkm.box((1.2, 0.01, 0.9), m @ T((0, 0.5, 0)))
    area_light('SoftBox', m @ Vector((0, 0.53, 0)), tgt, 1.2, 950, 'beam', size_y=0.9, spread=130)
    # a flag on a C-stand beside it
    fb = polar(5.3, -92)
    ft = stand(stands, fb, 2.1, 0.5)
    sandbag(fb + Vector((-0.25, 0.2, 0)), -20)
    stands.tube(ft, ft + Vector((0.5, -0.5, 0.3)), 0.012, 8)
    flags.box((0.62, 0.012, 0.92), look(ft + Vector((0.5, -0.5, 0.75)), Vector((0, 0, 1.5))), 0.004)
    # Fresnels with barn doors
    for k, (r, az, tg, hgt) in enumerate(((6.3, 106, polar(4.4, 30, 0.8), 2.7), (6.6, -149, polar(6.6, -128, 1.0), 2.5), (5.9, 163, polar(6.3, 143, 1.0), 2.4))):
        b = polar(r, az)
        top = stand(stands, b, hgt)
        sandbag(b + Vector((0.28, -0.2, 0)), 50 * k)
        head = top + Vector((0, 0, 0.22))
        m = look(head, tg)
        body.cyl(0.17, 0.32, m @ Matrix.Rotation(RAD(90), 4, 'X'), 28)
        body.box((0.05, 0.4, 0.05), T(top + Vector((0, 0, 0.02))) @ Matrix.Rotation(math.atan2(tg.y - b.y, tg.x - b.x), 4, 'Z'), 0.01)
        for s in (-1, 1):
            body.box((0.02, 0.05, 0.24), T(top + Vector((0, 0, 0.12))) @ Matrix.Rotation(math.atan2(tg.y - b.y, tg.x - b.x), 4, 'Z') @ T((0, s * 0.19, 0)), 0.004)
        lens.disc(0.15, m @ T((0, 0.165, 0)) @ Matrix.Rotation(RAD(-90), 4, 'X'), 28)
        for a in (0, 90, 180, 270):                                      # barn doors
            dm = m @ T((0, 0.17, 0)) @ Matrix.Rotation(RAD(a), 4, 'Y') @ T((0.17, 0, 0)) @ Matrix.Rotation(RAD(-38), 4, 'Z') @ T((0.11, 0.0, 0))
            doors.box((0.22, 0.006, 0.26 if a % 180 == 0 else 0.3), dm, 0.002)
        spot_light(f'Fresnel{k}', m @ Vector((0, 0.2, 0)), tg, 2600, 'beam', cone=46, blend=0.6, soft=0.12)
    body.done('LightBodies', M['black'], smooth=True)
    panel.done('SkyPanelGlow', M['e_panel'], lg='beam')
    stands.done('Stands', M['chrome'], smooth=True)
    soft.done('SoftBoxBody', M['canvas'], smooth=False)
    silkm.done('SoftBoxFront', M['e_soft'], lg='beam')
    lens.done('FresnelLenses', M['e_fresnel'], lg='beam')
    doors.done('BarnDoors', M['black'], smooth=True)
    flags.done('Flags', M['canvas'], smooth=True)
    bags.done('Sandbags', M['sand'], smooth=True)


def build_camera():
    """A cinema camera riding low on a dolly, on track, pointed at the centre screen."""
    a, b = Vector((-4.05, 1.3, 0)), Vector((-1.95, 5.0, 0))
    d = (b - a).normalized()
    side = Vector((d.y, -d.x, 0))
    track = Mesh(); ties = Mesh()
    for s in (-0.31, 0.31):
        track.tube(a + side * s + Vector((0, 0, 0.06)), b + side * s + Vector((0, 0, 0.06)), 0.021, 12)
    n = int((b - a).length / 0.62)
    for k in range(n + 1):
        p = a.lerp(b, k / n)
        ties.box((0.78, 0.09, 0.035), T((p.x, p.y, 0.02)) @ Matrix.Rotation(math.atan2(side.y, side.x), 4, 'Z'), 0.004)
    track.done('DollyTrack', M['alu'], smooth=True)
    ties.done('TrackTies', M['black'], smooth=True)
    c = a.lerp(b, 0.56)
    yaw = math.atan2(d.y, d.x) - math.pi / 2                             # local +Y along the track
    m = T((c.x, c.y, 0)) @ Matrix.Rotation(yaw, 4, 'Z')
    body = Mesh(); metal = Mesh(); rubber = Mesh(); glass = Mesh(); screen = Mesh()
    body.box((0.78, 1.25, 0.07), m @ T((0, 0, 0.215)), 0.012)            # the deck
    for sx in (-0.31, 0.31):
        for sy in (-0.45, 0.45):
            metal.box((0.1, 0.34, 0.05), m @ T((sx, sy, 0.16)), 0.008)
            for w in (-0.11, 0.11):
                rubber.cyl(0.05, 0.04, m @ T((sx, sy + w, 0.115)) @ Matrix.Rotation(RAD(90), 4, 'Y'), 16)
    metal.tube(m @ Vector((-0.3, -0.6, 0.25)), m @ Vector((-0.3, -0.6, 1.0)), 0.016, 8)   # push bar
    metal.tube(m @ Vector((0.3, -0.6, 0.25)), m @ Vector((0.3, -0.6, 1.0)), 0.016, 8)
    metal.tube(m @ Vector((-0.3, -0.6, 1.0)), m @ Vector((0.3, -0.6, 1.0)), 0.016, 8)
    body.cyl(0.16, 0.05, m @ T((0.0, -0.32, 0.62)), 24)                  # operator's seat
    metal.tube(m @ Vector((0, -0.32, 0.25)), m @ Vector((0, -0.32, 0.6)), 0.02, 8)
    metal.cyl(0.07, 0.3, m @ T((0, 0.2, 0.4)), 16)                       # column
    metal.cyl(0.1, 0.06, m @ T((0, 0.2, 0.58)), 20)
    head = m @ Vector((0, 0.2, 0.62))
    tgt = polar(SCREEN_R, 0, SCREEN_Z)
    cm = look(head + Vector((0, 0, 0.19)), Vector((tgt.x, tgt.y, head.z + 0.19 + 0.9)))
    body.box((0.16, 0.12, 0.1), T(head + Vector((0, 0, 0.05))) @ Matrix.Rotation(math.atan2(tgt.x - head.x, tgt.y - head.y) * -1, 4, 'Z'), 0.01)
    body.box((0.17, 0.34, 0.19), cm, 0.012)                              # camera body
    body.box((0.12, 0.08, 0.15), cm @ T((0, -0.21, -0.01)), 0.01)        # battery
    body.cyl(0.058, 0.2, cm @ T((0, 0.27, 0.0)) @ Matrix.Rotation(RAD(90), 4, 'X'), 24)   # lens
    body.cyl(0.066, 0.05, cm @ T((0, 0.3, 0.0)) @ Matrix.Rotation(RAD(90), 4, 'X'), 24)
    body.box((0.21, 0.07, 0.16), cm @ T((0, 0.405, 0.0)), 0.006)          # matte box
    body.box((0.23, 0.14, 0.006), cm @ T((0, 0.47, 0.105)) @ Matrix.Rotation(RAD(18), 4, 'X'))   # top flag
    glass.disc(0.05, cm @ T((0, 0.372, 0)) @ Matrix.Rotation(RAD(-90), 4, 'X'), 24)
    for s in (-0.035, 0.035):
        metal.tube(cm @ Vector((s, 0.05, -0.115)), cm @ Vector((s, 0.42, -0.115)), 0.0075, 8)     # rods
    metal.tube(cm @ Vector((0, -0.08, 0.1)), cm @ Vector((0, -0.08, 0.15)), 0.008, 6)             # top handle
    metal.tube(cm @ Vector((0, 0.1, 0.1)), cm @ Vector((0, 0.1, 0.15)), 0.008, 6)
    metal.tube(cm @ Vector((0, -0.1, 0.15)), cm @ Vector((0, 0.12, 0.15)), 0.011, 8)
    metal.cyl(0.03, 0.02, cm @ T((0.1, 0.22, -0.02)) @ Matrix.Rotation(RAD(90), 4, 'Y'), 16)     # follow focus
    mm = cm @ T((-0.17, -0.02, 0.1)) @ Matrix.Rotation(RAD(-25), 4, 'Z')
    body.box((0.16, 0.02, 0.105), mm, 0.004)                             # side monitor, facing the operator
    screen.box((0.145, 0.002, 0.09), mm @ T((0, -0.011, 0)))
    body.done('CameraBody', M['black'], smooth=True)
    metal.done('CameraMetal', M['steel_dark'], smooth=True)
    rubber.done('DollyWheels', M['rubber'], smooth=True)
    glass.done('CameraGlass', M['lens'])
    screen.done('CameraMonitor', M['e_cam'], lg='base')
    layout['camera'] = {'center': to_app(head + Vector((0, 0, 0.19)))}


def build_chairs():
    """Three director's chairs facing the screens, one for each category."""
    wood = Mesh(); cloth = Mesh()
    for name, r, az, twist in (('MUSICIAN', 4.35, 21, -5), ('ATHLETE', 4.55, 31.5, 4), ('CHARACTER', 4.3, 42, -9)):
        m = P(r, az, twist)
        for sx in (-0.27, 0.27):
            wood.tube(m @ Vector((sx, -0.23, 0.0)), m @ Vector((sx, 0.23, 0.76)), 0.017, 4)
            wood.tube(m @ Vector((sx, 0.23, 0.0)), m @ Vector((sx, -0.23, 0.76)), 0.017, 4)
            wood.tube(m @ Vector((sx, -0.23, 0.76)), m @ Vector((sx, 0.23, 0.76)), 0.016, 4)
            for sy in (-0.21, 0.21):
                wood.tube(m @ Vector((sx, sy, 0.76)), m @ Vector((sx, sy, 1.02 if sy > 0 else 1.24)), 0.016, 4)
            wood.box((0.05, 0.52, 0.022), m @ T((sx, 0.0, 1.03)), 0.006)      # armrest
        wood.tube(m @ Vector((-0.27, 0.23, 0.32)), m @ Vector((0.27, 0.23, 0.32)), 0.014, 4)   # footrest
        wood.tube(m @ Vector((-0.27, -0.23, 0.0)), m @ Vector((0.27, -0.23, 0.0)), 0.012, 4)
        wood.tube(m @ Vector((-0.27, 0.23, 0.0)), m @ Vector((0.27, 0.23, 0.0)), 0.012, 4)
        cloth.box((0.54, 0.44, 0.012), m @ T((0, 0, 0.765)), 0.004)            # seat
        cloth.box((0.56, 0.012, 0.21), m @ T((0, -0.21, 1.13)), 0.003)         # back
        text(name, 0.058, m @ T((0, -0.2175, 1.105)) @ Matrix.Rotation(RAD(90), 4, 'X'), M['print'], f'Chair{name}')
        layout['chairs'].append({'name': name, 'back': to_app(m @ Vector((0, -0.2175, 1.13)))})
    wood.done('ChairFrames', M['wood'], smooth=False)
    cloth.done('ChairCanvas', M['canvas'], smooth=True)


def build_village():
    """Video village behind the mark: a cart with two monitors and a pair of stools."""
    m = P(6.4, 150, 180 + 6)                                              # its front faces the viewer
    frame = Mesh(); shelf = Mesh(); mon = Mesh(); scr = Mesh(); rub = Mesh()
    for sx in (-0.55, 0.55):
        for sy in (-0.3, 0.3):
            frame.tube(m @ Vector((sx, sy, 0.1)), m @ Vector((sx, sy, 1.05)), 0.016, 8)
            rub.cyl(0.05, 0.035, m @ T((sx, sy, 0.05)) @ Matrix.Rotation(RAD(90), 4, 'Y'), 14)
    for z in (0.32, 1.05):
        shelf.box((1.16, 0.66, 0.03), m @ T((0, 0, z)), 0.006)
    shelf.box((0.5, 0.36, 0.14), m @ T((-0.25, 0, 0.4)), 0.01)            # recorder boxes on the lower shelf
    shelf.box((0.36, 0.3, 0.22), m @ T((0.3, 0.02, 0.44)), 0.01)
    for sx, tilt in ((-0.31, 7), (0.31, -7)):
        mm = m @ T((sx, 0.05, 1.36)) @ Matrix.Rotation(RAD(tilt), 4, 'Z')
        mon.box((0.6, 0.05, 0.37), mm, 0.008)
        mon.box((0.07, 0.07, 0.14), m @ T((sx, 0.08, 1.12)), 0.004)
        mon.box((0.26, 0.2, 0.015), m @ T((sx, 0.08, 1.072)), 0.004)
        scr.box((0.55, 0.002, 0.32), mm @ T((0, -0.026, 0)))
    for k, (x, y) in enumerate(((-0.4, -0.95), (0.45, -1.05))):          # stools
        p = m @ Vector((x, y, 0))
        frame.cyl(0.17, 0.04, T((p.x, p.y, 0.66)), 20)
        for a in (0, 120, 240):
            frame.tube((p.x, p.y, 0.64), (p.x + math.cos(RAD(a + 40 * k)) * 0.2, p.y + math.sin(RAD(a + 40 * k)) * 0.2, 0.0), 0.012, 6)
    frame.done('VillageFrame', M['chrome'], smooth=True)
    shelf.done('VillageShelves', M['black'], smooth=True)
    mon.done('VillageMonitors', M['black'], smooth=True)
    rub.done('VillageWheels', M['rubber'], smooth=True)
    scr.done('VillageScreens', M['e_monitor'], lg='base')


def build_wardrobe():
    """A wardrobe rail with costumes, back-left."""
    m = P(6.7, -131, 28)
    rail = Mesh(); rub = Mesh()
    for sx in (-0.8, 0.8):
        rail.tube(m @ Vector((sx, 0, 0.12)), m @ Vector((sx, 0, 1.75)), 0.016, 8)
        rail.tube(m @ Vector((sx, -0.28, 0.12)), m @ Vector((sx, 0.28, 0.12)), 0.016, 8)
        for sy in (-0.28, 0.28):
            rub.cyl(0.045, 0.03, m @ T((sx, sy, 0.05)) @ Matrix.Rotation(RAD(90), 4, 'Y'), 12)
    rail.tube(m @ Vector((-0.8, 0, 1.75)), m @ Vector((0.8, 0, 1.75)), 0.016, 8)
    rail.tube(m @ Vector((-0.8, 0, 0.12)), m @ Vector((0.8, 0, 0.12)), 0.014, 8)
    x = -0.7
    k = 0
    while x < 0.7:
        w = random.uniform(0.05, 0.1)
        L = random.uniform(0.75, 1.25)
        g = Mesh()
        g.box((w, 0.46, L), m @ T((x + w / 2, random.uniform(-0.02, 0.02), 1.68 - L / 2)) @ Matrix.Rotation(RAD(random.uniform(-4, 4)), 4, 'Z'), 0.02)
        g.done(f'Garment{k}', M[f'cloth{k % 9}'], smooth=True)
        rail.tube(m @ Vector((x + w / 2, 0, 1.7)), m @ Vector((x + w / 2, 0, 1.76)), 0.004, 4)
        x += w + random.uniform(0.012, 0.05)
        k += 1
    rail.done('WardrobeRail', M['chrome'], smooth=True)
    rub.done('WardrobeWheels', M['rubber'], smooth=True)


def build_door():
    """The big stage door in the back wall, with its red recording light."""
    y = Y0 + 0.07
    d = Mesh()
    d.box((5.2, 0.1, 6.0), T((0, y, 3.0)), 0.01)
    for x in (-2.0, -1.0, 0, 1.0, 2.0):
        d.box((0.08, 0.16, 5.9), T((x, y + 0.03, 3.0)), 0.008)
    for z in (0.7, 3.0, 5.4):
        d.box((5.1, 0.15, 0.08), T((0, y + 0.03, z)), 0.008)
    d.done('StageDoor', M['door'], smooth=True)
    f = Mesh()
    f.box((6.2, 0.14, 0.2), T((0, y + 0.02, 6.2)), 0.01)
    for x in (-2.75, 2.75):
        f.box((0.22, 0.22, 6.2), T((x, y + 0.03, 3.1)), 0.012)
    f.box((1.0, 0.05, 2.1), T((3.9, y, 1.05)), 0.008)                      # the small door beside it
    f.box((0.04, 0.06, 0.14), T((3.55, y + 0.06, 1.05)), 0.008)
    f.done('DoorFrame', M['steel'], smooth=True)
    hz = Mesh()
    hz.box((5.2, 0.11, 0.5), T((0, y + 0.004, 0.25)), 0.004)
    hz.done('DoorHazard', M['hazard'])
    box = Mesh()
    box.box((1.5, 0.1, 0.36), T((0, y + 0.1, 6.75)), 0.012)
    box.box((0.5, 0.08, 0.2), T((3.9, y + 0.06, 2.4)), 0.01)
    box.cyl(0.09, 0.08, T((-3.25, y + 0.12, 6.4)), 16)
    box.done('SignBoxes', M['black'], smooth=True)
    rec = Mesh()
    rec.box((1.4, 0.012, 0.27), T((0, y + 0.155, 6.75)))
    rec.sphere(0.075, T((-3.25, y + 0.12, 6.5)), 16)
    rec.done('RecordingGlow', M['e_rec'], lg='base')
    text('RECORDING', 0.17, T((0, y + 0.17, 6.685)) @ Matrix.Rotation(RAD(90), 4, 'X') @ Matrix.Rotation(RAD(180), 4, 'Y'), M['slate'], 'RecText', 0.002)
    ex = Mesh()
    ex.box((0.44, 0.012, 0.15), T((3.9, y + 0.105, 2.4)))
    ex.done('ExitGlow', M['e_exit'], lg='base')


def build_dressing(tr):
    """Everything else that makes the stage look used: cases, apple boxes, a slate, ladder, cables, marks."""
    case = Mesh(); edge = Mesh(); cab = Mesh(); rack = Mesh(); grille = Mesh()
    leds = {'r': Mesh(), 'g': Mesh()}
    for az, r, twist, size in ((118, 8.6, 14, (1.2, 0.6, 0.75)), (125, 9.2, -8, (0.8, 0.6, 0.6)), (112, 9.7, 30, (1.2, 0.6, 0.95)),
                               (-108, 9.4, -20, (1.2, 0.6, 0.75)), (-101, 9.9, 6, (0.6, 0.6, 1.1)), (96, 10.6, 4, (1.0, 0.55, 0.5)),
                               (171, 9.6, 10, (1.2, 0.6, 0.75)), (-168, 10.0, -6, (0.8, 0.6, 0.9))):
        flight_case(case, edge, P(r, az, twist), size)
    flight_case(case, edge, P(8.6, 118, 34, 0.86), (0.8, 0.55, 0.45), wheels=False)
    # the dimmer rack that feeds the screens, at the left end of the rig
    m = P(8.7, -96, 12)
    rack.box((0.62, 0.7, 1.5), m @ T((0, 0, 0.86)), 0.01)
    for row in range(9):
        z = 0.3 + row * 0.15
        grille.box((0.54, 0.012, 0.125), m @ T((0, -0.352, z)), 0.003)
        for c in range(6):
            if random.random() < 0.75:
                leds[random.choice('gggr')].box((0.012, 0.004, 0.012), m @ T((-0.22 + c * 0.045, -0.36, z + 0.03)))
    # floor cables: rig to rack, lights to a distro box by the right wall
    for az in (-80, -48, -16, 16, 48):
        floor_cable(cab, [polar(tr + 0.25, az), polar(8.6, az - 8), polar(9.0, (az - 96) / 2 - 22), polar(8.6, -96)], random.choice((0.011, 0.014)))
    floor_cable(cab, [polar(tr + 0.2, 80), polar(8.9, 62), polar(9.3, 20), polar(9.3, -40), polar(8.9, -92)], 0.016)
    distro = polar(11.0, 98)
    rack.box((0.5, 0.36, 0.3), T((distro.x, distro.y, 0.15)), 0.02)
    for src in (polar(6.3, 106), polar(5.9, 163), polar(6.0, 150)):
        floor_cable(cab, [src, src.lerp(distro, 0.5) + Vector((0.4, -0.5, 0)), distro], 0.012)
    floor_cable(cab, [polar(4.7, -106), polar(7.5, -112), polar(9.6, -112)], 0.012)
    for az in (-64, -32, 0, 32, 64):
        cable(cab, polar(tr - 0.05, az, 4.35), polar(SCREEN_R + 0.2, az + 2, SCREEN_Z + SCREEN_H / 2 + 0.02), 0.25, 0.012)
        cable(cab, polar(SCREEN_R + 0.16, az - 6, SCREEN_Z - SCREEN_H / 2), polar(tr + 0.2, az - 14, 0.02), 0.3, 0.014)
    for k in range(7):                                                   # a coil of cable
        r = 0.26 + 0.012 * (k % 3)
        for j in range(24):
            c0 = polar(7.6, 128) + Vector((math.cos(RAD(15 * j)) * r, math.sin(RAD(15 * j)) * r, 0.014 + k * 0.024))
            c1 = polar(7.6, 128) + Vector((math.cos(RAD(15 * j + 15)) * r, math.sin(RAD(15 * j + 15)) * r, 0.014 + k * 0.024))
            cab.tube(c0, c1, 0.012, 6)
    case.done('FlightCases', M['case'], smooth=True)
    edge.done('CaseEdges', M['alu'], smooth=True)
    cab.done('Cables', M['rubber'], smooth=True)
    rack.done('Rack', M['black'], smooth=True)
    grille.done('Grilles', M['steel_dark'], smooth=True)
    leds['r'].done('RackLedsR', M['e_led_r'], lg='base')
    leds['g'].done('RackLedsG', M['e_led_g'], lg='base')
    # apple boxes: a stack by the mark with the slate on it, and more by the chairs
    apple = Mesh()

    def abox(m, h):
        apple.box((0.5, 0.3, h), m @ T((0, 0, h / 2)), 0.004)
    m = P(2.35, -27, 18)
    abox(m, 0.2); abox(m @ T((0.02, 0.01, 0.2)) @ Matrix.Rotation(RAD(8), 4, 'Z'), 0.1)
    m2 = P(5.3, 50, -12)
    abox(m2, 0.2); abox(m2 @ T((0, 0, 0.2)), 0.2); abox(m2 @ T((0.55, 0.05, 0)) @ Matrix.Rotation(RAD(20), 4, 'Z'), 0.1)
    abox(P(3.3, -62, 40), 0.2)
    apple.done('AppleBoxes', M['wood_pale'], smooth=True)
    slate = Mesh(); sticks = Mesh(); marks = Mesh()
    sm = m @ T((0.0, -0.02, 0.3)) @ Matrix.Rotation(RAD(-14), 4, 'X')    # leaning back on the boxes, facing the viewer
    slate.box((0.28, 0.012, 0.2), sm @ T((0, 0, 0.1)), 0.003)
    sticks.box((0.29, 0.016, 0.028), sm @ T((0, 0, 0.215)), 0.002)
    sticks.box((0.29, 0.016, 0.028), sm @ T((-0.012, 0, 0.262)) @ Matrix.Rotation(RAD(-12), 4, 'Y'), 0.002)
    for z in (0.15, 0.1, 0.05):
        marks.box((0.26, 0.002, 0.003), sm @ T((0, -0.007, z)))
    marks.box((0.003, 0.002, 0.1), sm @ T((-0.04, -0.007, 0.1)))
    marks.box((0.003, 0.002, 0.1), sm @ T((0.05, -0.007, 0.1)))
    slate.done('Slate', M['slate'], smooth=True)
    sticks.done('SlateSticks', M['stripes'])
    marks.done('SlateLines', M['white_paint'])
    # a step ladder against the left wall
    lad = Mesh()
    lm = P(11.4, -76, 90)
    for sx in (-0.26, 0.26):
        lad.tube(lm @ Vector((sx, -0.55, 0)), lm @ Vector((sx * 0.8, 0, 2.3)), 0.022, 4)
        lad.tube(lm @ Vector((sx, 0.55, 0)), lm @ Vector((sx * 0.8, 0, 2.3)), 0.018, 4)
    for k in range(1, 8):
        t = k / 8
        lad.box((0.5 - 0.1 * t, 0.08, 0.025), lm @ T((0, -0.55 * (1 - t), 2.3 * t)), 0.004)
    lad.box((0.46, 0.3, 0.03), lm @ T((0, 0, 2.32)), 0.006)
    lad.done('Ladder', M['ladder'], smooth=False)
    # tape on the floor: the viewer's T mark, and a few crosses
    tape = Mesh(); tape_w = Mesh()
    tape.box((0.34, 0.05, 0.0012), T((0, 0.12, 0.0008)))
    tape.box((0.05, 0.3, 0.0012), T((0, -0.03, 0.0008)))
    for (x, y, rz) in ((1.8, 3.2, 20), (-1.2, 2.4, -35), (3.1, 0.6, 60), (-3.0, -1.4, 10), (0.8, -2.6, -50)):
        mm = T((x, y, 0.0008)) @ Matrix.Rotation(RAD(rz), 4, 'Z')
        tape_w.box((0.22, 0.045, 0.0012), mm @ Matrix.Rotation(RAD(45), 4, 'Z'))
        tape_w.box((0.22, 0.045, 0.0012), mm @ Matrix.Rotation(RAD(-45), 4, 'Z'))
    tape.done('TapeMark', M['tape'])
    tape_w.done('TapeCrosses', M['tape_w'])
    # lettering on the walls
    text('STAGE 01', 1.05, T((X0 + 0.012, -3.4, 1.05)) @ Matrix.Rotation(RAD(90), 4, 'Z') @ Matrix.Rotation(RAD(90), 4, 'X'), M['white_paint'], 'StageNo', 0.001)
    text('YOURA STUDIOS', 0.8, T((X1 - 0.012, -3.4, 1.2)) @ Matrix.Rotation(RAD(-90), 4, 'Z') @ Matrix.Rotation(RAD(90), 4, 'X'), M['white_paint'], 'StudioName', 0.001)


def build_haze(density):
    hz = Mesh()
    hz.box((X1 - X0 - 0.2, Y1 - Y0 - 0.2, H - 0.2), T(((X0 + X1) / 2, (Y0 + Y1) / 2, H / 2)))
    n = Nodes('Haze')
    n.nt.nodes.remove(n.bsdf)
    vol = n.new('ShaderNodeVolumeScatter')
    vol.inputs['Density'].default_value = density
    vol.inputs['Anisotropy'].default_value = 0.35
    vol.inputs['Color'].default_value = (0.9, 0.92, 1.0, 1)
    n.link(vol.outputs[0], n.out.inputs['Volume'])
    ob = hz.done('Haze', n.mat)
    ob.visible_shadow = False


def setup_render():
    w = bpy.data.worlds.new('World')
    if not w.node_tree:
        w.use_nodes = True
    bg = next(n for n in w.node_tree.nodes if n.type == 'BACKGROUND')
    bg.inputs['Color'].default_value = (0, 0, 0, 1)
    bg.inputs['Strength'].default_value = 0.0
    sc.world = w
    cam = bpy.data.cameras.new('Pano')
    cam.type = 'PANO'
    cam.panorama_type = 'EQUIRECTANGULAR'
    cam.clip_start = 0.05
    ob = bpy.data.objects.new('Pano', cam)
    ob.location = (0, 0, EYE)
    ob.rotation_euler = (RAD(90), 0, 0)
    sc.collection.objects.link(ob)
    sc.camera = ob
    r = sc.render
    r.engine = 'CYCLES'
    r.resolution_x = args.res
    r.resolution_y = args.res // 2
    r.resolution_percentage = 100
    if args.border:
        r.use_border = True
        r.use_crop_to_border = True
        r.border_min_x, r.border_max_x, r.border_min_y, r.border_max_y = args.border
    c = sc.cycles
    c.device = 'CPU'
    c.seed = args.seed
    c.caustics_reflective = False
    c.caustics_refractive = False
    r.filepath = args.out
    ims = r.image_settings
    if args.matte:
        # only the screens, white on black: everything else just blocks the view
        white = emitter('MatteWhite', (1, 1, 1), 1.0)
        for o in sc.objects:
            if o.type == 'LIGHT' or o.name == 'Haze' or o.name.startswith('ScreenGlow'):
                o.hide_render = True
            elif o.name.startswith('ScreenFace'):
                o.data.materials.clear()
                o.data.materials.append(white)
            elif o.type in ('MESH', 'FONT'):
                o.is_holdout = True
        c.samples = 24
        c.use_adaptive_sampling = False
        c.max_bounces = 0
        c.use_denoising = False
        ims.media_type = 'IMAGE'
        ims.file_format = 'PNG'
        ims.color_mode = 'BW'
        ims.color_depth = '8'
        sc.view_settings.view_transform = 'Standard'
        return
    c.samples = args.spp
    c.use_adaptive_sampling = True
    c.adaptive_threshold = args.threshold
    c.adaptive_min_samples = max(8, args.spp // 6)
    c.max_bounces = 7
    c.diffuse_bounces = 4
    c.glossy_bounces = 4
    c.transmission_bounces = 2
    c.volume_bounces = 1
    c.transparent_max_bounces = 4
    c.sample_clamp_indirect = 8.0
    c.blur_glossy = 0.6
    c.use_denoising = True
    c.denoiser = 'OPENIMAGEDENOISE'
    vl.use_pass_z = True
    vl.cycles.denoising_store_passes = True
    ims.media_type = 'MULTI_LAYER_IMAGE'
    ims.file_format = 'OPEN_EXR_MULTILAYER'
    ims.color_depth = '32'
    ims.exr_codec = 'ZIP'


t0 = time.time()
build_materials()
build_shell()
build_cyc()
tr = build_rig()
build_emblem()
build_space_lights()
build_film_lights()
build_camera()
build_chairs()
build_village()
build_wardrobe()
build_door()
build_dressing(tr)
if args.haze > 0 and not args.matte:
    build_haze(args.haze)
setup_render()
faces = sum(len(o.data.polygons) for o in sc.objects if o.type == 'MESH')
print(f'scene built in {time.time() - t0:.1f}s: {len(sc.objects)} objects, {faces} faces')
if args.layout:
    json.dump(layout, open(args.layout, 'w'), indent=1)
if args.blend:
    bpy.ops.wm.save_as_mainfile(filepath=args.blend)
t0 = time.time()
bpy.ops.render.render(write_still=True)
print(f'rendered {args.res}x{args.res // 2} at {args.spp} spp in {time.time() - t0:.1f}s -> {args.out}')
