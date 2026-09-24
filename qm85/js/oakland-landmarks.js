// The Oakland "drip" (owner 09-23): Blender-built landmarks (blender/build_oakland_landmarks.py) placed
// into the real map, plus the real OSM basketball courts and graffiti murals on real walls.
//   Bay Bridge  — over the Bay west of downtown, fly-by-able (solid towers)
//   Golden Gate — far west on the horizon, NOT reachable ("thats frisco not oakland")
//   QMM ARENA   — south-east of Lake Merritt; solid outer wall, open bowl you can dive into
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const BAY_BRIDGE_YAW = Math.PI - 0.22; // runs west-north-west out over the Bay, starting just off the real shore
const GOLDEN_GATE = { pos: [-12500, 0, -6200], yaw: Math.PI / 2 + 0.15, scale: 1.25 }; // horizon only
const ARENA = { pos: [1750, 0, 1850], yaw: 0.35 };
const ARENA_WALL = { outer: [122, 94], inner: [100, 74], h: 42 };
const MURALS = 16;

const gltf = new GLTFLoader();
const load = (name) => gltf.loadAsync(`assets/landmarks/${name}.glb`).then((g) => g.scene).catch(() => null);
const loadTex = (name) => new Promise((resolve) => new THREE.TextureLoader().load(`assets/art/${name}.jpg`, (t) => {
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 16;
  resolve(t);
}, undefined, () => resolve(null)));

function place(obj, { pos, yaw, scale = 1 }) {
  obj.position.set(...pos);
  obj.rotation.y = yaw;
  obj.scale.setScalar(scale);
  obj.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return obj;
}

/** A world-space rectangle collider (for bridge towers), in the same {x,z,hw,hd,h,p} shape as buildings. */
function rectCollider(obj, localX, localZ, hw, hd, h, name) {
  const c = new THREE.Vector3(localX, 0, localZ).applyMatrix4(obj.matrixWorld);
  const p = [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(([dx, dz]) => {
    const v = new THREE.Vector3(localX + dx, 0, localZ + dz).applyMatrix4(obj.matrixWorld);
    return [v.x, v.z];
  });
  const xs = p.map((q) => q[0]);
  const zs = p.map((q) => q[1]);
  return { x: c.x, z: c.z, hw: (Math.max(...xs) - Math.min(...xs)) / 2, hd: (Math.max(...zs) - Math.min(...zs)) / 2, h, name, p };
}

function courtTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 272;
  const g = c.getContext("2d");
  g.fillStyle = "#2c5f8a";
  g.fillRect(0, 0, 512, 272);
  g.fillStyle = "#b5552a";
  g.fillRect(20, 20, 472, 232);
  g.strokeStyle = "#ffffff";
  g.lineWidth = 4;
  g.strokeRect(20, 20, 472, 232);
  g.beginPath();
  g.moveTo(256, 20);
  g.lineTo(256, 252);
  g.stroke();
  g.beginPath();
  g.arc(256, 136, 34, 0, Math.PI * 2);
  g.stroke();
  for (const x of [20, 492]) {
    const dir = x === 20 ? 1 : -1;
    g.strokeRect(Math.min(x, x + dir * 110), 86, 110, 100);
    g.beginPath();
    g.arc(x, 136, 128, -Math.PI / 2.4, Math.PI / 2.4, dir < 0);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Real OSM courts: a painted surface along the court's long axis and a hoop at each end. */
function courts(root, polys, hoop) {
  const mat = new THREE.MeshStandardMaterial({ map: courtTexture(), roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -3 });
  for (const poly of polys) {
    let best = [0, 1, 0];
    for (let i = 0; i < poly.length; i++) {
      const [x1, z1] = poly[i];
      const [x2, z2] = poly[(i + 1) % poly.length];
      const len = Math.hypot(x2 - x1, z2 - z1);
      if (len > best[2]) best = [i, (i + 1) % poly.length, len];
    }
    const [a, b] = [poly[best[0]], poly[best[1]]];
    const yaw = Math.atan2(b[0] - a[0], b[1] - a[1]);
    const cx = poly.reduce((s, p) => s + p[0], 0) / poly.length;
    const cz = poly.reduce((s, p) => s + p[1], 0) / poly.length;
    const len = Math.max(20, Math.min(32, best[2]));
    const court = new THREE.Mesh(new THREE.PlaneGeometry(len * 0.53, len).rotateX(-Math.PI / 2), mat);
    court.position.set(cx, 0.1, cz);
    court.rotation.y = yaw;
    court.receiveShadow = true;
    root.add(court);
    if (!hoop) continue;
    hoop.traverse((o) => { // the Blender rim torus is 7,200 tris; a 240-tri torus reads the same from the air
      if (o.isMesh && o.material.name === "HoopRim" && !o.userData.slim) {
        o.geometry = new THREE.TorusGeometry(0.23, 0.02, 6, 20).rotateX(Math.PI / 2);
        o.userData.slim = true;
      }
    });
    for (const end of [-1, 1]) {
      const h = hoop.clone();
      const along = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)).multiplyScalar(end * (len / 2 + 1.2));
      h.position.set(cx + along.x, 0, cz + along.z);
      h.rotation.y = yaw + (end > 0 ? Math.PI / 2 : -Math.PI / 2); // backboard faces the court
      root.add(h);
    }
  }
  return polys.length;
}

/** Graffiti murals on real walls (outward-facing, a hair off the wall). */
function murals(root, buildings, textures) {
  const mats = textures.filter(Boolean).map((map) => new THREE.MeshStandardMaterial({ map, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -4 }));
  if (!mats.length) return 0;
  const candidates = buildings.filter((b) => b.h >= 9 && b.h <= 38);
  const stride = Math.max(1, Math.floor(candidates.length / (MURALS * 3)));
  let placed = 0;
  for (let n = 0; n < candidates.length && placed < MURALS; n += stride) {
    const b = candidates[n];
    const cx = b.p.reduce((s, p) => s + p[0], 0) / b.p.length;
    const cz = b.p.reduce((s, p) => s + p[1], 0) / b.p.length;
    let edge = null;
    for (let i = 0; i < b.p.length; i++) {
      const [x1, z1] = b.p[i];
      const [x2, z2] = b.p[(i + 1) % b.p.length];
      const len = Math.hypot(x2 - x1, z2 - z1);
      if (len >= 18 && (!edge || len > edge.len)) edge = { x1, z1, x2, z2, len };
    }
    if (!edge) continue;
    const mx = (edge.x1 + edge.x2) / 2;
    const mz = (edge.z1 + edge.z2) / 2;
    let nx = (edge.z2 - edge.z1) / edge.len;
    let nz = -(edge.x2 - edge.x1) / edge.len;
    if (nx * (mx - cx) + nz * (mz - cz) < 0) {
      nx = -nx;
      nz = -nz;
    }
    const w = Math.min(edge.len * 0.85, 28);
    const h = Math.min(b.h * 0.8, w * 0.5625);
    const mural = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mats[placed % mats.length]);
    mural.position.set(mx + nx * 0.25, h / 2 + 0.5, mz + nz * 0.25);
    mural.rotation.y = Math.atan2(nx, nz);
    mural.receiveShadow = true;
    root.add(mural);
    placed += 1;
  }
  return placed;
}

/** Adds every landmark; returns colliders (bridge towers) and a test for the arena's ring wall. */
export async function addLandmarks(root, city, { shoreX }) {
  const [bridge, gate, arena, hoop, muralA, muralB, crane, crown, warehouse] = await Promise.all([
    load("bay_bridge"), load("golden_gate"), load("qmm_arena"), load("hoop"), loadTex("mural_qm85"), loadTex("mural_tag"),
    load("port_crane"), load("tribune_crown"), load("qmm_warehouse"),
  ]);
  const colliders = [];
  if (bridge) {
    root.add(place(bridge, { pos: [shoreX - 250, 0, -900], yaw: BAY_BRIDGE_YAW }));
    bridge.updateMatrixWorld(true);
    for (const tx of [350, 1050]) colliders.push(rectCollider(bridge, tx, 0, 6, 24, 160, "Bay Bridge tower"));
  }
  if (gate) {
    root.add(place(gate, GOLDEN_GATE));
    gate.traverse((o) => {
      if (o.isMesh) o.material.fog = false; // ~14 km out: let it read through the haze
    });
  }
  let arenaHit = () => false;
  if (arena) {
    root.add(place(arena, ARENA));
    const [ax, , az] = ARENA.pos;
    const c = Math.cos(-ARENA.yaw);
    const s = Math.sin(-ARENA.yaw);
    arenaHit = (pos) => {
      if (pos.y > ARENA_WALL.h) return false;
      const dx = pos.x - ax;
      const dz = pos.z - az;
      const lx = dx * c - dz * s;
      const lz = dx * s + dz * c;
      const outer = (lx / ARENA_WALL.outer[0]) ** 2 + (lz / ARENA_WALL.outer[1]) ** 2;
      const inner = (lx / ARENA_WALL.inner[0]) ** 2 + (lz / ARENA_WALL.inner[1]) ** 2;
      return outer < 1 && inner > 1; // the ring wall — the bowl itself is open
    };
  }
  const stats = {
    courts: courts(root, city.courts ?? [], hoop),
    murals: murals(root, city.buildings, [muralA, muralB]),
    bridge: Boolean(bridge), gate: Boolean(gate), arena: Boolean(arena),
  };
  return { colliders, arenaHit, stats, crane, crown, warehouse, arenaPos: [ARENA.pos[0], ARENA.pos[2]] };
}
