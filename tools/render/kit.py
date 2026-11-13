"""Shared building blocks for YOURA's Blender scenes: simple mesh shapes, procedural materials, rigging and cables.

Blender axes: X right, Y forward, Z up. Units are metres. Azimuth is measured from +Y, positive to the right.
"""
import bpy, bmesh, math, random
from mathutils import Vector, Matrix

RAD = math.radians
T = Matrix.Translation
H_WALL = 8.0   # only used by the board-formed concrete material for its streaks


def scene():
    return bpy.context.scene


def polar(r, az, z=0.0):
    """Point at distance r and azimuth az (degrees, 0 = forward +Y, positive to the right)."""
    a = RAD(az)
    return Vector((r * math.sin(a), r * math.cos(a), z))


def facing(az):
    """Rotation about Z that turns local +Y to point outward at azimuth az (local X is then the viewer's right)."""
    return Matrix.Rotation(-RAD(az), 4, 'Z')


def link(ob, lg=None, cam=True):
    scene().collection.objects.link(ob)
    if lg:
        ob.lightgroup = lg
    if not cam:
        ob.visible_camera = False
    return ob


class Mesh:
    """Collects simple shapes into one mesh."""

    def __init__(self):
        self.bm = bmesh.new()

    def _xf(self, geom, m):
        bmesh.ops.transform(self.bm, matrix=m, verts=geom)

    def box(self, size, m, bevel=0.0):
        r = bmesh.ops.create_cube(self.bm, size=1.0)
        vs = r['verts']
        bmesh.ops.scale(self.bm, vec=Vector(size), verts=vs)
        if bevel > 0:
            es = list({e for v in vs for e in v.link_edges})
            rb = bmesh.ops.bevel(self.bm, geom=es, offset=bevel, segments=2, affect='EDGES', profile=0.5)
            vs = list({v for v in rb['verts']} | {v for v in vs if v.is_valid})
        self._xf(vs, m)
        return self

    def cyl(self, r, depth, m, segs=24, r2=None, caps=True):
        res = bmesh.ops.create_cone(self.bm, cap_ends=caps, cap_tris=False, segments=segs,
                                    radius1=r, radius2=r if r2 is None else r2, depth=depth)
        self._xf(res['verts'], m)
        return self

    def tube(self, p0, p1, r, segs=10):
        p0, p1 = Vector(p0), Vector(p1)
        d = p1 - p0
        if d.length < 1e-6:
            return self
        m = Matrix.Translation((p0 + p1) / 2) @ d.to_track_quat('Z', 'Y').to_matrix().to_4x4()
        return self.cyl(r, d.length, m, segs)

    def sphere(self, r, m, segs=32):
        res = bmesh.ops.create_uvsphere(self.bm, u_segments=segs, v_segments=segs // 2, radius=r)
        self._xf(res['verts'], m)
        return self

    def quad(self, pts, uvs=None):
        vs = [self.bm.verts.new(Vector(p)) for p in pts]
        f = self.bm.faces.new(vs)
        if uvs:
            layer = self.bm.loops.layers.uv.verify()
            for loop, uv in zip(f.loops, uvs):
                loop[layer].uv = uv
        return self

    def disc(self, r, m, segs=64, r_in=0.0):
        if r_in <= 0:
            res = bmesh.ops.create_circle(self.bm, cap_ends=True, cap_tris=False, segments=segs, radius=r)
            self._xf(res['verts'], m)
        else:
            vs = []
            for i in range(segs):
                a0, a1 = 2 * math.pi * i / segs, 2 * math.pi * (i + 1) / segs
                p = [Vector((math.cos(a) * rr, math.sin(a) * rr, 0)) for a, rr in ((a0, r_in), (a1, r_in), (a1, r), (a0, r))]
                q = [self.bm.verts.new(x) for x in p]
                self.bm.faces.new(q)
                vs += q
            self._xf(vs, m)
            bmesh.ops.remove_doubles(self.bm, verts=self.bm.verts, dist=1e-5)
        return self

    def done(self, name, mat=None, smooth=False, lg=None, cam=True, sharp=35, recalc=True):
        if recalc:
            bmesh.ops.recalc_face_normals(self.bm, faces=self.bm.faces)
        me = bpy.data.meshes.new(name)
        self.bm.to_mesh(me)
        self.bm.free()
        if smooth:
            me.shade_smooth()
            try:
                me.set_sharp_from_angle(angle=RAD(sharp))
            except Exception:
                pass
        ob = bpy.data.objects.new(name, me)
        if mat is not None:
            me.materials.append(mat)
        return link(ob, lg, cam)



# ---------------------------------------------------------------------------------------------- materials

class Nodes:
    def __init__(self, name):
        self.mat = bpy.data.materials.new(name)
        if not self.mat.node_tree:
            self.mat.use_nodes = True
        self.nt = self.mat.node_tree
        self.bsdf = next((n for n in self.nt.nodes if n.type == 'BSDF_PRINCIPLED'), None)
        self.out = next(n for n in self.nt.nodes if n.type == 'OUTPUT_MATERIAL')

    def new(self, kind, **props):
        n = self.nt.nodes.new(kind)
        for k, v in props.items():
            setattr(n, k, v)
        return n

    def link(self, a, b):
        self.nt.links.new(a, b)

    def set(self, node, **inputs):
        for k, v in inputs.items():
            key = k.replace('_', ' ')
            sock = node.inputs[key]
            if hasattr(v, 'is_linked') or hasattr(v, 'links'):
                self.link(v, sock)
            else:
                sock.default_value = v
        return node

    def coords(self, kind='Object', scale=(1, 1, 1), loc=(0, 0, 0), rot=(0, 0, 0)):
        tc = self.new('ShaderNodeTexCoord')
        mp = self.new('ShaderNodeMapping')
        mp.inputs['Scale'].default_value = scale
        mp.inputs['Location'].default_value = loc
        mp.inputs['Rotation'].default_value = rot
        self.link(tc.outputs[kind], mp.inputs['Vector'])
        return mp.outputs['Vector']

    def noise(self, vec, scale, detail=6.0, rough=0.55, distortion=0.0, color=False):
        n = self.new('ShaderNodeTexNoise')
        self.link(vec, n.inputs['Vector'])
        n.inputs['Scale'].default_value = scale
        n.inputs['Detail'].default_value = detail
        n.inputs['Roughness'].default_value = rough
        n.inputs['Distortion'].default_value = distortion
        return n.outputs[1 if color else 0]

    def voronoi(self, vec, scale, feature='F1', out='Distance', rand=1.0):
        n = self.new('ShaderNodeTexVoronoi', feature=feature)
        self.link(vec, n.inputs['Vector'])
        n.inputs['Scale'].default_value = scale
        n.inputs['Randomness'].default_value = rand
        return n.outputs[out]

    def ramp(self, fac, stops, interp='LINEAR'):
        n = self.new('ShaderNodeValToRGB')
        cr = n.color_ramp
        cr.interpolation = interp
        while len(cr.elements) < len(stops):
            cr.elements.new(0.5)
        for el, (pos, col) in zip(cr.elements, stops):
            el.position = pos
            el.color = col if len(col) == 4 else (*col, 1)
        self.link(fac, n.inputs[0])
        return n.outputs['Color']

    def math(self, op, a, b=None, clamp=False):
        n = self.new('ShaderNodeMath', operation=op, use_clamp=clamp)
        for i, v in enumerate((a, b)):
            if v is None:
                continue
            if hasattr(v, 'links'):
                self.link(v, n.inputs[i])
            else:
                n.inputs[i].default_value = v
        return n.outputs[0]

    def mix(self, fac, a, b, blend='MIX'):
        n = self.new('ShaderNodeMix', data_type='RGBA', blend_type=blend)
        ins = {s.name: s for s in n.inputs if s.type == 'RGBA'}
        f = next(s for s in n.inputs if s.name == 'Factor' and s.type == 'VALUE')
        for sock, v in ((f, fac), (ins['A'], a), (ins['B'], b)):
            if hasattr(v, 'links'):
                self.link(v, sock)
            elif sock is f:
                sock.default_value = v
            else:
                sock.default_value = v if len(v) == 4 else (*v, 1)
        return next(s for s in n.outputs if s.type == 'RGBA')

    def bump(self, height, strength=0.3, distance=0.02, normal=None):
        n = self.new('ShaderNodeBump')
        n.inputs['Strength'].default_value = strength
        n.inputs['Distance'].default_value = distance
        self.link(height, n.inputs['Height'])
        if normal is not None:
            self.link(normal, n.inputs['Normal'])
        return n.outputs['Normal']

    def sep(self, vec):
        n = self.new('ShaderNodeSeparateXYZ')
        self.link(vec, n.inputs[0])
        return n.outputs

    def comb(self, x=0.0, y=0.0, z=0.0):
        n = self.new('ShaderNodeCombineXYZ')
        for i, v in enumerate((x, y, z)):
            if hasattr(v, 'links'):
                self.link(v, n.inputs[i])
            else:
                n.inputs[i].default_value = v
        return n.outputs[0]


def simple(name, color, rough=0.5, metal=0.0, coat=0.0, spec=0.5):
    n = Nodes(name)
    n.set(n.bsdf, Base_Color=(*color, 1), Roughness=rough, Metallic=metal, Coat_Weight=coat, Specular_IOR_Level=spec)
    return n.mat


def emitter(name, color, strength, one_sided=False, glossy_under=False):
    """A light-emitting surface. one_sided: only the front face glows."""
    n = Nodes(name)
    em = n.new('ShaderNodeEmission')
    em.inputs['Color'].default_value = (*color, 1)
    em.inputs['Strength'].default_value = strength
    shader = em.outputs[0]
    if one_sided:
        geo = n.new('ShaderNodeNewGeometry')
        off = n.new('ShaderNodeBsdfDiffuse')
        off.inputs['Color'].default_value = (0, 0, 0, 1)
        mixs = n.new('ShaderNodeMixShader')
        n.link(geo.outputs['Backfacing'], mixs.inputs[0])
        n.link(em.outputs[0], mixs.inputs[1])
        n.link(off.outputs[0], mixs.inputs[2])
        shader = mixs.outputs[0]
    n.nt.nodes.remove(n.bsdf)
    n.link(shader, n.out.inputs['Surface'])
    return n.mat


def mat_concrete_wall():
    """Board-formed concrete: horizontal board marks, panel joints, tie holes, streaks. Uses UVs in metres."""
    n = Nodes('ConcreteWall')
    uvn = n.new('ShaderNodeUVMap')
    uv = uvn.outputs[0]
    u, v, _ = n.sep(uv)
    # large mottling and stains
    big = n.noise(uv, 0.35, 5, 0.6)
    mid = n.noise(uv, 2.2, 8, 0.62)
    fine = n.noise(uv, 38.0, 6, 0.7)
    base = n.ramp(big, [(0.25, (0.115, 0.112, 0.108)), (0.75, (0.215, 0.208, 0.198))])
    base = n.mix(n.math('MULTIPLY', mid, 0.55), base, (0.27, 0.262, 0.25), 'MIX')
    # each board gets a slightly different tone
    board = n.math('FLOOR', n.math('DIVIDE', v, 0.14))
    wn = n.new('ShaderNodeTexWhiteNoise', noise_dimensions='1D')
    n.link(board, wn.inputs['W'])
    base = n.mix(0.5, base, n.mix(wn.outputs['Value'], (0.72, 0.72, 0.72), (1.12, 1.12, 1.12)), 'MULTIPLY')
    # vertical streaks (water marks) running down from the top
    streak_uv = n.comb(n.math('MULTIPLY', u, 3.2), n.math('MULTIPLY', v, 0.12), 0.0)
    streak = n.noise(streak_uv, 2.4, 7, 0.65, 0.6)
    streak_m = n.math('MULTIPLY', n.ramp(streak, [(0.48, (0, 0, 0)), (0.72, (1, 1, 1))]),
                      n.ramp(n.math('DIVIDE', v, H_WALL), [(0.15, (0.15, 0.15, 0.15)), (1.0, (1, 1, 1))]))
    base = n.mix(n.math('MULTIPLY', streak_m, 0.55), base, (0.04, 0.038, 0.034))
    # board grooves and grain (height)
    bf = n.math('FRACT', n.math('DIVIDE', v, 0.14))
    groove = n.math('MULTIPLY', n.math('PINGPONG', bf, 0.5), 2.0)             # 0 at the board edges, 1 in the middle
    groove = n.ramp(groove, [(0.0, (0, 0, 0)), (0.07, (1, 1, 1))])
    grain_uv = n.comb(n.math('MULTIPLY', u, 2.0), n.math('MULTIPLY', v, 40.0), 0.0)
    grain = n.noise(grain_uv, 3.0, 4, 0.6)
    # panel joints every 2.19 m across and 2.8 m up
    ju = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', u, 2.188)), 0.5))
    jv = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', v, 2.8)), 0.5))
    joint = n.math('MINIMUM', n.math('MULTIPLY', n.math('SUBTRACT', 0.5, ju), 2.188), n.math('MULTIPLY', n.math('SUBTRACT', 0.5, jv), 2.8))
    joint_m = n.ramp(joint, [(0.0, (0, 0, 0)), (0.012, (1, 1, 1))])
    base = n.mix(joint_m, (0.03, 0.03, 0.03), base)
    # tie holes on a 0.73 x 0.7 m grid
    tu = n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', u, 0.7293)), 0.5)
    tv = n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', n.math('ADD', v, 0.35), 0.7)), 0.5)
    td = n.math('SQRT', n.math('ADD', n.math('POWER', n.math('MULTIPLY', tu, 0.7293), 2.0), n.math('POWER', n.math('MULTIPLY', tv, 0.7), 2.0)))
    hole = n.ramp(td, [(0.016, (0, 0, 0)), (0.024, (1, 1, 1))])
    base = n.mix(hole, (0.012, 0.012, 0.012), base)
    height = n.math('ADD', n.math('MULTIPLY', groove, 0.5), n.math('MULTIPLY', grain, 0.12))
    height = n.math('ADD', height, n.math('MULTIPLY', fine, 0.1))
    height = n.math('MULTIPLY', n.math('MULTIPLY', height, joint_m), hole)
    rough = n.ramp(mid, [(0.3, (0.72, 0.72, 0.72)), (0.7, (0.92, 0.92, 0.92))])
    n.set(n.bsdf, Base_Color=base, Roughness=rough, Normal=n.bump(height, 0.55, 0.012), Specular_IOR_Level=0.35)
    return n.mat


def mat_concrete_plain(name='ConcretePlain', tone=1.0):
    n = Nodes(name)
    co = n.coords('Object')
    big = n.noise(co, 0.5, 5, 0.6)
    mid = n.noise(co, 3.0, 8, 0.65)
    fine = n.noise(co, 45.0, 5, 0.7)
    base = n.ramp(big, [(0.3, (0.12 * tone, 0.117 * tone, 0.112 * tone)), (0.75, (0.21 * tone, 0.203 * tone, 0.195 * tone))])
    base = n.mix(n.math('MULTIPLY', mid, 0.4), base, (0.25 * tone, 0.243 * tone, 0.232 * tone))
    h = n.math('ADD', n.math('MULTIPLY', mid, 0.5), n.math('MULTIPLY', fine, 0.25))
    n.set(n.bsdf, Base_Color=base, Roughness=n.ramp(mid, [(0.3, (0.7, 0.7, 0.7)), (0.7, (0.9, 0.9, 0.9))]),
          Normal=n.bump(h, 0.35, 0.008), Specular_IOR_Level=0.35)
    return n.mat


def mat_floor():
    """Polished dark concrete: patchy gloss, fine scratches, saw-cut joints, a little dust."""
    n = Nodes('Floor')
    co = n.coords('Object')
    big = n.noise(co, 0.22, 6, 0.6, 0.4)
    mid = n.noise(co, 1.6, 9, 0.62)
    fine = n.noise(co, 60.0, 4, 0.6)
    base = n.ramp(big, [(0.28, (0.032, 0.033, 0.036)), (0.5, (0.055, 0.055, 0.058)), (0.78, (0.085, 0.083, 0.08))])
    base = n.mix(n.math('MULTIPLY', mid, 0.35), base, (0.1, 0.098, 0.094))
    # saw cuts on a 3 m grid
    x, y, _ = n.sep(co)
    jx = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', n.math('ADD', x, 1.5), 3.0)), 0.5))
    jy = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('DIVIDE', n.math('ADD', y, 1.5), 3.0)), 0.5))
    jd = n.math('MULTIPLY', n.math('SUBTRACT', 0.5, n.math('MAXIMUM', jx, jy)), 3.0)
    cut = n.ramp(jd, [(0.0, (0, 0, 0)), (0.006, (1, 1, 1))])
    base = n.mix(cut, (0.008, 0.008, 0.008), base)
    # gloss: mostly polished, with duller worn patches and long scratches
    scr_uv = n.comb(n.math('MULTIPLY', x, 0.6), n.math('MULTIPLY', y, 14.0), 0.0)
    scratch = n.noise(scr_uv, 6.0, 5, 0.7)
    rough = n.ramp(n.math('ADD', n.math('MULTIPLY', big, 0.6), n.math('MULTIPLY', mid, 0.4)),
                   [(0.3, (0.07, 0.07, 0.07)), (0.55, (0.16, 0.16, 0.16)), (0.8, (0.34, 0.34, 0.34))])
    rough = n.math('ADD', rough, n.math('MULTIPLY', n.ramp(scratch, [(0.55, (0, 0, 0)), (0.8, (1, 1, 1))]), 0.1))
    h = n.math('ADD', n.math('MULTIPLY', mid, 0.3), n.math('MULTIPLY', fine, 0.05))
    h = n.math('MULTIPLY', h, cut)
    n.set(n.bsdf, Base_Color=base, Roughness=rough, Normal=n.bump(h, 0.12, 0.004), Specular_IOR_Level=0.6,
          Coat_Weight=0.25, Coat_Roughness=0.08)
    return n.mat


def mat_metal(name, color=(0.78, 0.79, 0.8), rough=0.32, scratch=0.12):
    n = Nodes(name)
    co = n.coords('Object')
    a = n.noise(co, 7.0, 6, 0.6)
    b = n.noise(co, 90.0, 3, 0.5)
    r = n.math('ADD', rough, n.math('MULTIPLY', n.math('SUBTRACT', a, 0.5), scratch * 2))
    n.set(n.bsdf, Base_Color=(*color, 1), Metallic=1.0, Roughness=r, Normal=n.bump(b, 0.08, 0.002))
    return n.mat


def mat_paint(name, color, rough=0.45, wear=0.25, under=(0.2, 0.19, 0.18)):
    """Painted surface with scuffs that show what is underneath."""
    n = Nodes(name)
    co = n.coords('Object')
    a = n.noise(co, 2.5, 8, 0.7, 0.3)
    b = n.noise(co, 22.0, 5, 0.65)
    m = n.ramp(n.math('ADD', n.math('MULTIPLY', a, 0.7), n.math('MULTIPLY', b, 0.3)), [(0.62 - wear * 0.3, (0, 0, 0)), (0.7, (1, 1, 1))])
    base = n.mix(n.math('MULTIPLY', m, wear * 2.2, clamp=True), (*color, 1), (*under, 1))
    n.set(n.bsdf, Base_Color=base, Roughness=n.math('ADD', rough, n.math('MULTIPLY', m, 0.3)), Normal=n.bump(b, 0.1, 0.002),
          Specular_IOR_Level=0.5)
    return n.mat


def mat_case():
    """Flight-case laminate: black with a fine pebbled texture."""
    n = Nodes('CaseLaminate')
    co = n.coords('Object')
    vz = n.voronoi(co, 260.0)
    a = n.noise(co, 3.0, 6, 0.6)
    n.set(n.bsdf, Base_Color=n.mix(a, (0.012, 0.012, 0.013), (0.028, 0.028, 0.03)), Roughness=n.math('ADD', 0.38, n.math('MULTIPLY', a, 0.2)),
          Normal=n.bump(vz, 0.25, 0.0015), Specular_IOR_Level=0.5)
    return n.mat


def mat_deck():
    """Black stage deck with a fine anti-slip texture."""
    n = Nodes('Deck')
    co = n.coords('Object')
    vz = n.voronoi(co, 420.0)
    a = n.noise(co, 1.5, 7, 0.65)
    n.set(n.bsdf, Base_Color=n.mix(a, (0.01, 0.01, 0.011), (0.03, 0.03, 0.031)), Roughness=n.math('ADD', 0.42, n.math('MULTIPLY', a, 0.25)),
          Normal=n.bump(vz, 0.3, 0.001), Specular_IOR_Level=0.5)
    return n.mat


def mat_hazard():
    n = Nodes('Hazard')
    co = n.coords('Object', rot=(0, 0, RAD(0)))
    x, y, z = n.sep(co)
    d = n.math('FRACT', n.math('MULTIPLY', n.math('ADD', n.math('ADD', x, y), z), 3.3))
    stripe = n.ramp(d, [(0.48, (0.9, 0.62, 0.02)), (0.5, (0.015, 0.015, 0.015))], 'CONSTANT')
    a = n.noise(co, 9.0, 7, 0.7)
    base = n.mix(n.ramp(a, [(0.55, (0, 0, 0)), (0.7, (1, 1, 1))]), stripe, (0.12, 0.11, 0.1))
    n.set(n.bsdf, Base_Color=base, Roughness=0.55)
    return n.mat


def mat_glass_black():
    """The face of a switched-off LED wall: black, softly glossy, with a faint module grid."""
    n = Nodes('ScreenFace')
    uvn = n.new('ShaderNodeUVMap')
    u, v, _ = n.sep(uvn.outputs[0])
    gu = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('MULTIPLY', u, 6.8)), 0.5))
    gv = n.math('ABSOLUTE', n.math('SUBTRACT', n.math('FRACT', n.math('MULTIPLY', v, 3.825)), 0.5))
    seam = n.ramp(n.math('MAXIMUM', gu, gv), [(0.485, (1, 1, 1)), (0.5, (0, 0, 0))])
    co = n.coords('Object')
    a = n.noise(co, 2.0, 6, 0.6)
    n.set(n.bsdf, Base_Color=(0.004, 0.004, 0.005, 1), Roughness=n.math('ADD', 0.5, n.math('MULTIPLY', a, 0.12)),
          Normal=n.bump(seam, 0.25, 0.0006), Specular_IOR_Level=0.22)
    return n.mat



def truss_run(mesh, p0, p1, size=0.29, chord=0.025, lace=0.011):
    """A box truss between two points: four chords with zig-zag lacing."""
    p0, p1 = Vector(p0), Vector(p1)
    d = p1 - p0
    L = d.length
    q = d.to_track_quat('Z', 'Y').to_matrix().to_4x4()
    m = T(p0) @ q
    h = size / 2
    corners = [(-h, -h), (h, -h), (h, h), (-h, h)]
    for cx, cy in corners:
        mesh.tube(m @ Vector((cx, cy, 0)), m @ Vector((cx, cy, L)), chord, 10)
    n = max(1, round(L / size))
    step = L / n
    for k in range(n):
        z0, z1 = k * step, (k + 1) * step
        for s in range(4):
            a, b = corners[s], corners[(s + 1) % 4]
            if (k + s) % 2 == 0:
                mesh.tube(m @ Vector((a[0], a[1], z0)), m @ Vector((b[0], b[1], z1)), lace, 6)
            else:
                mesh.tube(m @ Vector((b[0], b[1], z0)), m @ Vector((a[0], a[1], z1)), lace, 6)
    for z in (0.0, L):
        for s in range(4):
            a, b = corners[s], corners[(s + 1) % 4]
            mesh.tube(m @ Vector((a[0], a[1], z)), m @ Vector((b[0], b[1], z)), lace * 1.3, 6)


def cable(mesh, p0, p1, sag=0.3, r=0.012, n=14, wobble=0.03):
    """A cable hanging between two points."""
    p0, p1 = Vector(p0), Vector(p1)
    pts = []
    for i in range(n + 1):
        t = i / n
        p = p0.lerp(p1, t)
        p.z -= sag * 4 * t * (1 - t)
        if 0 < i < n:
            p += Vector((random.uniform(-wobble, wobble), random.uniform(-wobble, wobble), 0))
        pts.append(p)
    for a, b in zip(pts, pts[1:]):
        mesh.tube(a, b, r, 8)
        mesh.sphere(r, T(b), 8)


def floor_cable(mesh, pts, r=0.011, wobble=0.05):
    """A cable lying on the floor through the given points."""
    dense = []
    for a, b in zip(pts, pts[1:]):
        a, b = Vector(a), Vector(b)
        n = max(2, int((b - a).length / 0.35))
        for i in range(n):
            p = a.lerp(b, i / n)
            p += Vector((random.uniform(-wobble, wobble), random.uniform(-wobble, wobble), 0))
            p.z = r
            dense.append(p)
    dense.append(Vector((pts[-1][0], pts[-1][1], r)))
    for a, b in zip(dense, dense[1:]):
        mesh.tube(a, b, r, 8)
        mesh.sphere(r, T(b), 8)



def flight_case(case, edge, m, size, wheels=True):
    sx, sy, sz = size
    z0 = 0.11 if wheels else 0.0
    case.box((sx, sy, sz), m @ T((0, 0, z0 + sz / 2)), 0.004)
    e = 0.028
    for x in (-1, 1):
        for y in (-1, 1):
            edge.box((e, e, sz), m @ T((x * (sx / 2 - e / 2 + 0.003), y * (sy / 2 - e / 2 + 0.003), z0 + sz / 2)), 0.004)
    for z in (z0 + e / 2 - 0.003, z0 + sz - e / 2 + 0.003, z0 + sz * 0.72):
        for y in (-1, 1):
            edge.box((sx + 0.006, e * 0.6, e), m @ T((0, y * (sy / 2 - e * 0.3 + 0.003), z)), 0.003)
        for x in (-1, 1):
            edge.box((e * 0.6, sy + 0.006, e), m @ T((x * (sx / 2 - e * 0.3 + 0.003), 0, z)), 0.003)
    for x in (-1, 1):                                              # corner balls
        for y in (-1, 1):
            for z in (z0, z0 + sz):
                edge.sphere(0.03, m @ T((x * sx / 2, y * sy / 2, z)), 10)
    for x in (-0.3, 0.3):                                          # latches and handles
        edge.box((0.09, 0.012, 0.11), m @ T((x * sx, -sy / 2 - 0.004, z0 + sz * 0.72)), 0.004)
    edge.box((0.16, 0.012, 0.1), m @ T((sx / 2 + 0.004, 0, z0 + sz * 0.45)) @ Matrix.Rotation(RAD(90), 4, 'Z'), 0.004)
    if wheels:
        for x in (-1, 1):
            for y in (-1, 1):
                p = m @ Vector((x * (sx / 2 - 0.09), y * (sy / 2 - 0.09), 0.05))
                case.cyl(0.05, 0.035, T(p) @ Matrix.Rotation(RAD(90), 4, 'Y') @ Matrix.Rotation(random.uniform(0, 3), 4, 'X'), 14)
                edge.box((0.07, 0.07, 0.012), m @ T((x * (sx / 2 - 0.09), y * (sy / 2 - 0.09), 0.104)))




def text(body, size, matrix, mat, name='Text', extrude=0.0008, align='CENTER'):
    """Flat lettering (stencils, name plates). Lies in its local XY plane, reading along +X."""
    cu = bpy.data.curves.new(name, 'FONT')
    cu.body = body
    cu.size = size
    cu.align_x = align
    cu.extrude = extrude
    ob = bpy.data.objects.new(name, cu)
    ob.matrix_world = matrix
    cu.materials.append(mat)
    scene().collection.objects.link(ob)
    return ob


def stand(mesh, base, height, spread=0.55, r=0.016):
    """A light stand: three legs and a riser. Returns the top point."""
    base = Vector(base)
    hub = base + Vector((0, 0, 0.5))
    for a in (20, 140, 260):
        foot = base + Vector((math.cos(RAD(a)) * spread, math.sin(RAD(a)) * spread, 0.015))
        mesh.tube(hub, foot, r, 8)
        mesh.tube(base + Vector((0, 0, 0.22)), foot.lerp(hub, 0.45), r * 0.7, 6)
    top = base + Vector((0, 0, height))
    mesh.tube(base + Vector((0, 0, 0.18)), top, r * 1.25, 10)
    for z in (0.5, height * 0.62):
        mesh.cyl(r * 2.2, 0.05, T(base + Vector((0, 0, z))), 10)
    return top


def aim(ob, pos, target):
    """Point a light (or camera) at a target."""
    pos, target = Vector(pos), Vector(target)
    ob.location = pos
    ob.rotation_euler = (target - pos).to_track_quat('-Z', 'Y').to_euler()


def area_light(name, pos, target, size, energy, lg, color=(1, 1, 1), size_y=None, spread=None):
    L = bpy.data.lights.new(name, 'AREA')
    L.shape = 'RECTANGLE' if size_y else 'DISK'
    L.size = size
    if size_y:
        L.size_y = size_y
    L.energy = energy
    L.color = color
    if spread:
        L.spread = RAD(spread)
    ob = bpy.data.objects.new(name, L)
    aim(ob, pos, target)
    return link(ob, lg)


def spot_light(name, pos, target, energy, lg, cone=40, blend=0.5, color=(1, 1, 1), soft=0.08):
    L = bpy.data.lights.new(name, 'SPOT')
    L.energy = energy
    L.spot_size = RAD(cone)
    L.spot_blend = blend
    L.shadow_soft_size = soft
    L.color = color
    ob = bpy.data.objects.new(name, L)
    aim(ob, pos, target)
    return link(ob, lg)


def look(pos, target):
    """Matrix at pos whose local +Y points at target (local Z stays as upright as it can)."""
    pos, target = Vector(pos), Vector(target)
    return T(pos) @ (target - pos).to_track_quat('Y', 'Z').to_matrix().to_4x4()
