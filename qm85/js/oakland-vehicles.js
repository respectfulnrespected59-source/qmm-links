// Oakland street life (owner 09-24: "i like the non playable trucks and random cars, lets give them a lil more
// detail"): Blender-built sedans, SUVs, box trucks and semis (blender/build_oakland_landmarks.py) with wheels,
// glass, bumpers, head- and tail-lights. Each vehicle type becomes one InstancedMesh per material, so hundreds
// of detailed vehicles cost a handful of draw calls. Moving traffic on the major roads + parked cars at the curb.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const TYPES = [
  { file: "car_sedan", share: 0.5 },
  { file: "car_suv", share: 0.3 },
  { file: "car_boxtruck", share: 0.13 },
  { file: "car_semi", share: 0.07 },
];
const MOVING = 420;
const PARKED = 480; // integrated-GPU budget: every instance is drawn every frame
const MAJOR = new Set(["motorway", "trunk", "primary", "secondary", "tertiary"]);
const PARK_ON = new Set(["residential", "tertiary", "secondary", "unclassified"]);
const HALF_WIDTH = { motorway: 8, trunk: 7, primary: 5.5, secondary: 4.5, tertiary: 4, residential: 3.25, unclassified: 3 };
const PAINTS = [0xf2f2f2, 0x1b1b1e, 0x8a8f96, 0x2c3e66, 0x7a1f24, 0xc9c2b5, 0x3d4a3b, 0xb8862b, 0x4b2a6e].map((c) => new THREE.Color(c));

const rand = (a, b) => a + Math.random() * (b - a);

/** Merge a GLB into one geometry per material, turned so the nose points +Z (the Blender models face -Z). */
async function loadModel(file) {
  const scene = (await new GLTFLoader().loadAsync(`assets/landmarks/${file}.glb`)).scene;
  scene.rotation.y = Math.PI;
  scene.updateMatrixWorld(true);
  const byMat = new Map();
  scene.traverse((o) => {
    if (!o.isMesh) return;
    const g = (o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()).applyMatrix4(o.matrixWorld);
    for (const k of Object.keys(g.attributes)) if (!["position", "normal"].includes(k)) g.deleteAttribute(k);
    if (!byMat.has(o.material.name)) byMat.set(o.material.name, { mat: o.material, geos: [] });
    byMat.get(o.material.name).geos.push(g);
  });
  return [...byMat.values()].map(({ mat, geos }) => ({ mat, geo: mergeGeometries(geos) }));
}

/** One fleet = every type × every material as InstancedMeshes, with a shared per-slot matrix setter. */
const VIEW_RANGE = 900; // moving traffic further than this from QM85 is parked off-map (sub-pixel anyway)

function fleet(root, models, count, { dynamic } = {}) {
  const slots = [];
  const perType = TYPES.map((t) => Math.max(1, Math.round(count * t.share)));
  const meshes = models.map((parts, ti) => parts.map(({ mat, geo }) => {
    const im = new THREE.InstancedMesh(geo, mat, perType[ti]);
    im.castShadow = false; // 1,000+ small casters cost more than their shadows add
    im.frustumCulled = false; // instances span the city; the shared bound would cull them wrongly
    im.userData.dynamic = dynamic; // moving traffic is never re-tiled by oakland-lod.js; the parked fleet is
    root.add(im);
    return im;
  }));
  models.forEach((parts, ti) => {
    for (let i = 0; i < perType[ti]; i++) {
      const color = PAINTS[Math.floor(Math.random() * PAINTS.length)];
      parts.forEach((p, pi) => {
        if (p.mat.name === "Body") meshes[ti][pi].setColorAt(i, color); // only the paint takes a colour
      });
      slots.push({ ti, i });
    }
  });
  const set = (slot, m) => {
    for (const im of meshes[slot.ti]) im.setMatrixAt(slot.i, m);
  };
  const flush = () => meshes.flat().forEach((im) => {
    im.instanceMatrix.needsUpdate = true;
  });
  return { slots, set, flush };
}

function lanesOf(roads) {
  return roads.filter((r) => MAJOR.has(r.k) && r.p.length > 1).map((r) => {
    const segs = [];
    let total = 0;
    for (let i = 0; i < r.p.length - 1; i++) {
      const len = Math.hypot(r.p[i + 1][0] - r.p[i][0], r.p[i + 1][1] - r.p[i][1]);
      segs.push({ a: r.p[i], b: r.p[i + 1], start: total, len });
      total += len;
    }
    return { segs, total, half: HALF_WIDTH[r.k] ?? 4 };
  }).filter((l) => l.total > 60);
}

/** Moving traffic + parked cars. `blocked(pos)` keeps parked cars out of buildings. */
export async function addVehicles(root, roads, blocked) {
  const models = await Promise.all(TYPES.map((t) => loadModel(t.file).catch(() => null)));
  if (models.some((mdl) => !mdl)) return { update() {}, stats: { vehicles: 0 } };
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const one = new THREE.Vector3(1, 1, 1);
  const up = new THREE.Vector3(0, 1, 0);
  const p = new THREE.Vector3();

  // parked: along residential/secondary curbs, never inside a building
  const still = fleet(root, models, PARKED);
  let placed = 0;
  const curbs = roads.filter((r) => PARK_ON.has(r.k) && r.p.length > 1);
  for (let tries = 0; curbs.length && placed < still.slots.length && tries < PARKED * 6; tries++) {
    const r = curbs[Math.floor(Math.random() * curbs.length)];
    const i = Math.floor(Math.random() * (r.p.length - 1));
    const [x1, z1] = r.p[i];
    const [x2, z2] = r.p[i + 1];
    const len = Math.hypot(x2 - x1, z2 - z1);
    if (len < 12) continue;
    const k = rand(0.15, 0.85);
    const side = Math.random() < 0.5 ? 1 : -1;
    const off = (HALF_WIDTH[r.k] ?? 3.5) - 1.1;
    p.set(x1 + (x2 - x1) * k + (-(z2 - z1) / len) * off * side, 0.02, z1 + (z2 - z1) * k + ((x2 - x1) / len) * off * side);
    if (blocked(p)) continue;
    q.setFromAxisAngle(up, Math.atan2(x2 - x1, z2 - z1) + (side > 0 ? 0 : Math.PI));
    still.set(still.slots[placed], m.compose(p, q, one));
    placed += 1;
  }
  for (let i = placed; i < still.slots.length; i++) still.set(still.slots[i], m.compose(p.set(0, -50, 0), q, one)); // unused slots: out of sight
  still.flush();

  // moving: on the major roads, drive on the right
  const lanes = lanesOf(roads);
  if (!lanes.length) return { update() {}, stats: { vehicles: placed, parked: placed } };
  const moving = fleet(root, models, MOVING, { dynamic: true });
  const cars = moving.slots.map((slot) => {
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
    const truck = slot.ti >= 2;
    return { slot, lane, truck, s: rand(0, lane.total), v: rand(truck ? 7 : 9, truck ? 11 : 16) * (Math.random() < 0.5 ? 1 : -1),
      pos: new THREE.Vector3(), yaw: 0, half: slot.ti === 3 ? [1.35, 8.1] : slot.ti === 2 ? [1.25, 3.7] : [1, 2.4], top: [1.5, 1.9, 4.2, 5.0][slot.ti] };
  });
  let density = 1; // share of the moving fleet on the road (the day cycle: half at dawn, all by noon)
  let focus = null; // QM85's position: traffic outside VIEW_RANGE keeps driving but isn't drawn
  const parkedOffMap = m.compose(new THREE.Vector3(0, -60, 0), q, one).clone();
  const update = (dt) => {
    for (const [i, c] of cars.entries()) {
      if (i > cars.length * density) {
        moving.set(c.slot, parkedOffMap);
        continue;
      }
      c.s = (c.s + c.v * dt + c.lane.total) % c.lane.total;
      const seg = c.lane.segs.find((sg) => c.s >= sg.start && c.s <= sg.start + sg.len) ?? c.lane.segs[0];
      const k = (c.s - seg.start) / (seg.len || 1);
      const dx = seg.b[0] - seg.a[0];
      const dz = seg.b[1] - seg.a[1];
      const len = Math.hypot(dx, dz) || 1;
      const side = (c.v > 0 ? 1 : -1) * Math.max(1.8, c.lane.half * 0.5);
      p.set(seg.a[0] + dx * k + (-dz / len) * side, 0.02, seg.a[1] + dz * k + (dx / len) * side);
      q.setFromAxisAngle(up, Math.atan2(dx, dz) + (c.v > 0 ? 0 : Math.PI));
      c.pos.copy(p);
      c.yaw = Math.atan2(dx, dz) + (c.v > 0 ? 0 : Math.PI);
      const far = focus && Math.hypot(p.x - focus.x, p.z - focus.z) > VIEW_RANGE;
      moving.set(c.slot, far ? parkedOffMap : m.compose(p, q, one));
    }
    moving.flush();
  };
  const trucks = cars.filter((c) => c.truck);
  /** The moving vehicle a point is inside (shots stop, QM85 bounces), or null. */
  const vehicleAt = (pt) => {
    for (const [i, c] of cars.entries()) {
      if (i > cars.length * density || pt.y > c.top) continue;
      const dx = pt.x - c.pos.x;
      const dz = pt.z - c.pos.z;
      if (dx * dx + dz * dz > 81) continue;
      const cs = Math.cos(-c.yaw);
      const sn = Math.sin(-c.yaw);
      const lx = dx * cs + dz * sn;
      const lz = -dx * sn + dz * cs;
      if (Math.abs(lx) < c.half[0] && Math.abs(lz) < c.half[1]) return c;
    }
    return null;
  };
  /** A live "top of a random truck" follower for power-ups riding in traffic. */
  const truckRider = () => {
    const c = trucks[Math.floor(Math.random() * trucks.length)];
    return c ? () => c.pos.clone().setY(c.top) : null;
  };
  update(0);
  const setDensity = (f) => (density = f);
  const setFocus = (pos) => (focus = pos);
  return { update, vehicleAt, truckRider, setDensity, setFocus, stats: { vehicles: cars.length + placed, parked: placed, trucks: trucks.length } };
}
