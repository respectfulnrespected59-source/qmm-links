// OAKLAND — the "UHD digital realistic" look (owner 09-23): real OSM geometry dressed in photoreal
// materials (art/gen_world_art.py real_* set), a physical golden-hour sky, a low western sun with
// real shadows, asphalt streets with warm streetlights, parks, trees, realistic traffic and water.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { Sky } from "three/addons/objects/Sky.js";

const TALL = 40; // >= this = glass tower
const LOW = 12; // <  this = storefront low-rise
const ROAD_WIDTH = { motorway: 16, trunk: 14, primary: 11, secondary: 9, tertiary: 8, residential: 6.5, unclassified: 6 };
const LIGHT_ROADS = new Set(["motorway", "trunk", "primary", "secondary", "tertiary"]);
const STREETLIGHT_EVERY = 32;
const PARK_TREE_EVERY = 220; // one scattered tree per this many m² of park
const MAX_TREES = 3500;
const SUN_ELEVATION = 3.5; // degrees — sunset over the Bay
const SUN_AZIMUTH = 245; // from the west, over the Bay
const CHUNK = 400; // city split into 400 m tiles so the camera frustum culls everything behind you
const SHADOW_REACH = 480; // sun shadows only around QM85 — a whole-city shadow map sank the integrated GPU

const loader = new THREE.TextureLoader();
const lerp = THREE.MathUtils.lerp;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const rand = (a, b) => a + Math.random() * (b - a);

function tex(name, repeat = 1) {
  return new Promise((resolve) => loader.load(`assets/art/${name}.jpg`, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 16;
    t.wrapS = t.wrapT = THREE.RepeatWrapping; // straight repeats: mirroring turns window grids into kaleidoscopes
    t.repeat.set(repeat, repeat);
    resolve(t);
  }, undefined, () => resolve(null)));
}

export function signedArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, z1] = pts[i];
    const [x2, z2] = pts[(i + 1) % pts.length];
    a += x1 * z2 - x2 * z1;
  }
  return a / 2;
}

/** All walls of a building class as one geometry; UVs in texture tiles of tileU × tileV metres. */
const TINTS = [0xffffff, 0xf2ece2, 0xe6e9f0, 0xf5e6d6, 0xe8f0e6, 0xf0e2e2, 0xdedfe6, 0xf7f1e4].map((c) => new THREE.Color(c));

function walls(buildings, tileU, tileV) {
  let quads = 0;
  for (const b of buildings) quads += b.p.length;
  const pos = new Float32Array(quads * 18);
  const uv = new Float32Array(quads * 12);
  const col = new Float32Array(quads * 18);
  let o = 0;
  let u = 0;
  for (const b of buildings) {
    const pts = signedArea(b.p) > 0 ? b.p : [...b.p].reverse();
    // per-building variety (owner: "professional grade"): its own facade tint + a window-grid offset so no two
    // neighbours share the same lit-window pattern
    const seed = Math.abs(Math.floor(b.p[0][0] * 7.3 + b.p[0][1] * 11.7));
    const tint = TINTS[seed % TINTS.length];
    const shift = (seed % 5) * 0.2;
    for (let k = 0; k < b.p.length * 6; k++) col.set([tint.r, tint.g, tint.b], o + k * 3);
    let run = shift * tileU;
    for (let i = 0; i < pts.length; i++) {
      const [x1, z1] = pts[i];
      const [x2, z2] = pts[(i + 1) % pts.length];
      const len = Math.hypot(x2 - x1, z2 - z1);
      const u1 = run / tileU;
      const u2 = (run + len) / tileU;
      const v = b.h / tileV;
      run += len;
      pos.set([x1, 0, z1, x2, 0, z2, x2, b.h, z2, x1, 0, z1, x2, b.h, z2, x1, b.h, z1], o);
      uv.set([u1, 0, u2, 0, u2, v, u1, 0, u2, v, u1, v], u);
      o += 18;
      u += 12;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  return geo;
}

/** Flat polygons at a height (number, or a function of the polygon's index); optional per-polygon colour. */
function flatShapes(polys, y, colorOf = null) {
  const parts = [];
  polys.forEach((p, i) => {
    try {
      const shape = new THREE.Shape(p.map(([x, z]) => new THREE.Vector2(x, -z)));
      const g = new THREE.ShapeGeometry(shape).rotateX(-Math.PI / 2).translate(0, typeof y === "function" ? y(i) : y, 0).toNonIndexed();
      if (colorOf) {
        const c = colorOf(i);
        g.setAttribute("color", new THREE.Float32BufferAttribute(Array.from({ length: g.attributes.position.count }, () => [c.r, c.g, c.b]).flat(), 3));
      }
      parts.push(g);
    } catch {
      // self-intersecting OSM outline: skip it
    }
  });
  return parts.length ? mergeGeometries(parts) : null;
}

function ribbon(path, width, y) {
  const pos = [];
  for (let i = 0; i < path.length - 1; i++) {
    const [x1, z1] = path[i];
    const [x2, z2] = path[i + 1];
    const len = Math.hypot(x2 - x1, z2 - z1) || 1;
    const nx = (-(z2 - z1) / len) * width * 0.5;
    const nz = ((x2 - x1) / len) * width * 0.5;
    pos.push(x1 - nx, y, z1 - nz, x2 - nx, y, z2 - nz, x2 + nx, y, z2 + nz, x1 - nx, y, z1 - nz, x2 + nx, y, z2 + nz, x1 + nx, y, z1 + nz);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

function mesh(geo, mat, { cast = false, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}

function skyAndSun(root) {
  const sky = new Sky();
  sky.scale.setScalar(40000);
  const u = sky.material.uniforms;
  u.turbidity.value = 3.0;
  u.rayleigh.value = 3.2;
  u.mieCoefficient.value = 0.005;
  u.mieDirectionalG.value = 0.92;
  const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - SUN_ELEVATION), THREE.MathUtils.degToRad(SUN_AZIMUTH));
  u.sunPosition.value.copy(sunDir);
  root.add(sky);
  const envScene = new THREE.Scene();
  envScene.add(sky.clone());

  const hemi = new THREE.HemisphereLight(0xcfe0ff, 0x5a4a3a, 1.2);
  root.add(hemi);
  const sun = new THREE.DirectionalLight(0xffd2a0, 3.2);
  sun.position.copy(sunDir).multiplyScalar(2000);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -SHADOW_REACH, right: SHADOW_REACH, top: SHADOW_REACH, bottom: -SHADOW_REACH, near: 10, far: 4000 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 1.5;
  sun.shadow.radius = 4; // softened edges without the PCFSoft cost
  root.add(sun, sun.target);
  /** Keep the sun (and its shadow box) centred on the player. */
  const follow = (pos) => {
    sun.position.copy(pos).addScaledVector(sunDir, 1500);
    sun.target.position.copy(pos);
    sun.target.updateMatrixWorld();
  };
  // stars: a shell of points that only shows at night
  const starPos = [];
  for (let i = 0; i < 1400; i++) {
    const a = Math.random() * Math.PI * 2;
    const e = Math.asin(Math.random() * 0.95 + 0.05);
    starPos.push(Math.cos(a) * Math.cos(e) * 18000, Math.sin(e) * 18000, Math.sin(a) * Math.cos(e) * 18000);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 40, sizeAttenuation: true, transparent: true, opacity: 0, depthWrite: false, fog: false }));
  root.add(stars);
  const lights = { hemi, sun, stars, facades: [], lamps: null };
  /** Drive every light from the day cycle: sun direction + how deep into night (0..1). */
  const setTime = ({ sunDir: d, night01: n }) => {
    sunDir.copy(d);
    u.sunPosition.value.copy(d);
    u.turbidity.value = lerp(3.0, 1.2, n);
    u.rayleigh.value = lerp(3.2, 0.4, n);
    hemi.color.setHex(0xcfe0ff).lerp(new THREE.Color(0x2a3a6a), n);
    hemi.groundColor.setHex(0x5a4a3a).lerp(new THREE.Color(0x0a0a14), n);
    hemi.intensity = lerp(1.2, 0.28, n);
    const daylight = clamp01(d.y * 4); // sun under the horizon = no direct light
    sun.color.setHex(0xffd2a0).lerp(new THREE.Color(0x9ab0ff), n);
    sun.intensity = n > 0.8 ? 0.55 : lerp(3.2 * daylight, 0.55, n); // the moon takes over
    if (n > 0.8) sunDir.set(-0.4, 0.55, 0.3).normalize(); // moonlight from the south-west
    stars.material.opacity = clamp01((n - 0.55) * 2.2);
    for (const m of lights.facades) m.emissiveIntensity = lerp(m.userData.dayGlow, m.userData.nightGlow, n);
    if (lights.lamps) {
      lights.lamps.size = lerp(1.6, 3.6, n);
      lights.lamps.opacity = lerp(0.9, 1, n);
    }
  };
  return { envScene, sunDir, follow, lights, setTime };
}

function streetlights(root, roads) {
  const pts = [];
  for (const r of roads) {
    if (!LIGHT_ROADS.has(r.k)) continue;
    let carry = 0;
    for (let i = 0; i < r.p.length - 1; i++) {
      const [x1, z1] = r.p[i];
      const [x2, z2] = r.p[i + 1];
      const len = Math.hypot(x2 - x1, z2 - z1) || 1;
      const w = (ROAD_WIDTH[r.k] ?? 8) / 2 + 1;
      for (let d = STREETLIGHT_EVERY - carry; d < len; d += STREETLIGHT_EVERY) {
        const k = d / len;
        const side = (Math.floor(d / STREETLIGHT_EVERY) % 2 ? 1 : -1) * w;
        pts.push(x1 + (x2 - x1) * k + (-(z2 - z1) / len) * side, 7.5, z1 + (z2 - z1) * k + ((x2 - x1) / len) * side);
      }
      carry = (carry + len) % STREETLIGHT_EVERY;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
  // real poles + arms under every lamp now that QM85 walks the street
  const count = pts.length / 3;
  const pole = new THREE.InstancedMesh(mergeGeometries([
    new THREE.CylinderGeometry(0.1, 0.14, 7.5, 6).translate(0, 3.75, 0),
    new THREE.BoxGeometry(0.08, 0.08, 1.4).translate(0, 7.45, 0.6),
    new THREE.BoxGeometry(0.35, 0.12, 0.5).translate(0, 7.4, 1.3),
  ]), new THREE.MeshStandardMaterial({ color: 0x3a3d42, metalness: 0.7, roughness: 0.45 }), count);
  const pm = new THREE.Matrix4();
  for (let i = 0; i < count; i++) pm.makeTranslation(pts[i * 3], 0, pts[i * 3 + 2]), pole.setMatrixAt(i, pm);
  pole.castShadow = true;
  root.add(pole);
  const lampMat = new THREE.PointsMaterial({ color: 0xffc27a, size: 1.6, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  root.add(new THREE.Points(geo, lampMat));
  streetlights.lampMat = lampMat;
  return pts.length / 3;
}

export function inside(x, z, pts) {
  let hit = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, zi] = pts[i];
    const [xj, zj] = pts[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) hit = !hit;
  }
  return hit;
}

export function trees(root, city, { shadows = true } = {}) {
  const inWater = (x, z) => (city.water ?? []).some((w) => inside(x, z, w));
  const spots = city.trees.filter(([x, z]) => !inWater(x, z)).map(([x, z]) => [x, z]);
  for (const park of city.parks) {
    const area = Math.abs(signedArea(park));
    const xs = park.map((p) => p[0]);
    const zs = park.map((p) => p[1]);
    const n = Math.min(60, Math.floor(area / PARK_TREE_EVERY));
    for (let i = 0; i < n * 3 && spots.length < MAX_TREES; i++) {
      const x = rand(Math.min(...xs), Math.max(...xs));
      const z = rand(Math.min(...zs), Math.max(...zs));
      if (inside(x, z, park) && !inWater(x, z) && Math.random() < 0.34) spots.push([x, z]);
    }
  }
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.35, 4, 6).translate(0, 2, 0),
    new THREE.MeshStandardMaterial({ color: 0x4a3526, roughness: 0.9 }), spots.length);
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(2.6, 1).translate(0, 5.6, 0),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, flatShading: true }), spots.length);
  const m = new THREE.Matrix4();
  const greens = [0x3f6b35, 0x4f7d3c, 0x355c2e, 0x5b8a45].map((c) => new THREE.Color(c));
  spots.forEach(([x, z], i) => {
    const s = rand(0.8, 1.35);
    m.compose(new THREE.Vector3(x, 0, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand(0, 6)), new THREE.Vector3(s, s * rand(0.9, 1.2), s));
    trunk.setMatrixAt(i, m);
    crown.setMatrixAt(i, m);
    crown.setColorAt(i, greens[i % greens.length]);
  });
  crown.castShadow = shadows;
  root.add(trunk, crown);
  return spots.length;
}


/** Builds the realistic city from oakland.json. Returns { envScene, sunDir, updateTraffic, stats }. */
export async function renderRealisticOakland(root, city, extent, { shoreX = -extent * 3 } = {}) {
  const [glass, midrise, lowrise, roof, ground] = await Promise.all([
    tex("real_glass"), tex("real_midrise"), tex("real_lowrise"), tex("real_roof", 1 / 25), tex("real_ground"),
  ]);
  const { envScene, sunDir, follow, lights, setTime } = skyAndSun(root);

  // The paver floor stops at the shoreline: running it under the Bay made it z-fight through the water.
  const floorW = extent * 3 - shoreX;
  const floorD = extent * 6;
  const floorGeo = new THREE.PlaneGeometry(floorW, floorD).rotateX(-Math.PI / 2).translate(shoreX + floorW / 2, 0, 0);
  const uv = floorGeo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * floorW / 12, uv.getY(i) * floorD / 12); // tile every 12 m (pavers ~1 m)
  root.add(mesh(floorGeo, new THREE.MeshStandardMaterial(ground ? { map: ground, color: 0x9a9894, roughness: 0.95 } : { color: 0x6b6a66, roughness: 0.95 })));

  const facade = (map, fallback, glossy) => {
    const m = new THREE.MeshStandardMaterial(map
    ? { map, emissiveMap: map, emissive: 0xfff1d6, emissiveIntensity: glossy ? 0.16 : 0.11, roughness: glossy ? 0.14 : 0.75, metalness: glossy ? 0.5 : 0.05, envMapIntensity: glossy ? 0.55 : 0.3, side: THREE.DoubleSide, vertexColors: true }
    : { color: fallback, roughness: 0.6, side: THREE.DoubleSide, vertexColors: true }); // dusk: the lit windows in the art glow warm
    m.userData.dayGlow = glossy ? 0.16 : 0.11;
    m.userData.nightGlow = glossy ? 0.85 : 0.65; // night mode: every lit window in the art becomes a real light
    lights.facades.push(m);
    return m;
  }; // OSM winds some footprints backwards: single-sided walls went hollow
  const classes = [
    { test: (b) => b.h >= TALL, mat: facade(glass, 0x5b6b7c, true), tile: [20, 30] },
    { test: (b) => b.h >= LOW && b.h < TALL, mat: facade(midrise, 0x8a5a44, false), tile: [18, 24] },
    { test: (b) => b.h < LOW, mat: facade(lowrise, 0xb5a68c, false), tile: [20, 12] },
  ];
  // One mesh per class per 400 m tile (not one per class for the whole city) so frustum culling works.
  const tiles = new Map();
  for (const b of city.buildings) {
    const key = `${Math.floor(b.p[0][0] / CHUNK)},${Math.floor(b.p[0][1] / CHUNK)}`;
    if (!tiles.has(key)) tiles.set(key, []);
    tiles.get(key).push(b);
  }
  // every roof gets its own tone (gravel grey, tar black, warm tan, white membrane) so the city stops looking stamped
  const ROOF_TONES = [0x8f8c87, 0x5d5b58, 0xa89a82, 0xc9c7c2, 0x6f6a62, 0x7d8288].map((c) => new THREE.Color(c));
  const roofMat = new THREE.MeshStandardMaterial(roof ? { map: roof, vertexColors: true, roughness: 0.9, side: THREE.DoubleSide } : { vertexColors: true, roughness: 0.9, side: THREE.DoubleSide });
  for (const list of tiles.values()) {
    for (const c of classes) {
      const mine = list.filter((b) => c.test(b));
      if (mine.length) root.add(mesh(walls(mine, ...c.tile), c.mat, { cast: true }));
    }
    const roofs = flatShapes(list.map((b) => b.p), (i) => list[i].h, (i) => ROOF_TONES[Math.floor(Math.abs(list[i].p[0][0] * 7 + list[i].p[0][1] * 13)) % ROOF_TONES.length]);
    if (roofs) root.add(mesh(roofs, roofMat));
  }

  const asphalt = new THREE.MeshStandardMaterial({ color: 0x2c2c2f, roughness: 0.92, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
  const roadGeos = city.roads.filter((r) => r.p.length > 1).map((r) => ribbon(r.p, ROAD_WIDTH[r.k] ?? 6, 0.06));
  if (roadGeos.length) root.add(mesh(mergeGeometries(roadGeos), asphalt));

  const parks = flatShapes(city.parks ?? [], 0.04);
  if (parks) root.add(mesh(parks, new THREE.MeshStandardMaterial({ color: 0x4a6a36, roughness: 0.95, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1 })));

  const water = flatShapes(city.water, 0.35); // well above park/ground planes: no shoreline z-fighting
  const waterMesh = water ? mesh(water, new THREE.MeshStandardMaterial({ color: 0x1f3d4c, roughness: 0.08, metalness: 0.7, envMapIntensity: 1.2, side: THREE.DoubleSide })) : null;
  if (waterMesh) root.add(waterMesh);

  const stats = { lights: streetlights(root, city.roads), trees: trees(root, { ...city, trees: city.trees ?? [], parks: city.parks ?? [] }) };
  lights.lamps = streetlights.lampMat;
  return { envScene, sunDir, stats, textures: { glass, midrise, lowrise }, waterMesh, follow, chunks: tiles.size, lights, setTime };
}
