// OAKLAND — the small stuff that makes a city read as real up close (owner 09-24: "polish this world ALOT"):
// road markings, rooftop AC clutter, antennas with blinking aviation lights, the Tribune Tower's crown on the
// real building, and the Port of Oakland's container cranes along the real shoreline.
import * as THREE from "three";
import { inside, signedArea } from "./oakland-render.js";

const MARKED = new Set(["trunk", "primary", "secondary", "tertiary"]);
const ROAD_WIDTH = { trunk: 14, primary: 11, secondary: 9, tertiary: 8 };
const ANTENNA_MIN_H = 70;
const CRANES = 7;

const rand = (a, b) => a + Math.random() * (b - a);

/** A strip along a path, shifted sideways by `offset`, with u running at `uPerM` per metre. */
function strip(path, width, y, offset = 0, uPerM = 1) {
  const pos = [];
  const uv = [];
  let run = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const [x1, z1] = path[i];
    const [x2, z2] = path[i + 1];
    const len = Math.hypot(x2 - x1, z2 - z1) || 1;
    const nx = -(z2 - z1) / len;
    const nz = (x2 - x1) / len;
    const [ax, az, bx, bz] = [x1 + nx * offset, z1 + nz * offset, x2 + nx * offset, z2 + nz * offset];
    const hw = width / 2;
    const u1 = run * uPerM;
    const u2 = (run + len) * uPerM;
    run += len;
    pos.push(ax - nx * hw, y, az - nz * hw, bx - nx * hw, y, bz - nz * hw, bx + nx * hw, y, bz + nz * hw,
      ax - nx * hw, y, az - nz * hw, bx + nx * hw, y, bz + nz * hw, ax + nx * hw, y, az + nz * hw);
    uv.push(u1, 0, u2, 0, u2, 1, u1, 0, u2, 1, u1, 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  return g;
}

function dashTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 4;
  const g = c.getContext("2d");
  g.fillStyle = "#e8c24a";
  g.fillRect(0, 0, 36, 4); // ~3.4 m dash, ~2.6 m gap at 6 m per repeat
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Raised concrete sidewalks with a curb face along every street (owner 09-24: "polish up oakland"). */
export function sidewalks(root, roads, merge) {
  const tops = [];
  const curbs = [];
  for (const r of roads) {
    if (r.p.length < 2 || r.k === "motorway") continue;
    const half = (ROAD_WIDTH[r.k] ?? 6.5) / 2;
    for (const side of [1, -1]) {
      tops.push(strip(r.p, 2.6, 0.16, side * (half + 1.3)));
      curbs.push(curbFace(r.p, side * half, 0.16));
    }
  }
  const top = new THREE.Mesh(merge(tops), new THREE.MeshStandardMaterial({ color: 0xa8a49b, roughness: 0.92, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 }));
  const curb = new THREE.Mesh(merge(curbs), new THREE.MeshStandardMaterial({ color: 0xc9c5bc, roughness: 0.8, side: THREE.DoubleSide }));
  top.receiveShadow = true;
  root.add(top, curb);
  return tops.length;
}

/** The little vertical face of the curb along a road edge. */
function curbFace(path, offset, h) {
  const pos = [];
  for (let i = 0; i < path.length - 1; i++) {
    const [x1, z1] = path[i];
    const [x2, z2] = path[i + 1];
    const len = Math.hypot(x2 - x1, z2 - z1) || 1;
    const nx = -(z2 - z1) / len * offset;
    const nz = (x2 - x1) / len * offset;
    pos.push(x1 + nx, 0.02, z1 + nz, x2 + nx, 0.02, z2 + nz, x2 + nx, h, z2 + nz, x1 + nx, 0.02, z1 + nz, x2 + nx, h, z2 + nz, x1 + nx, h, z1 + nz);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  return g;
}

/** Street-tree spots every ~24 m along the through roads, on the sidewalk, clear of buildings and water. */
/** limit: stop once this many spots are found — same spots, same order, without testing the rest of the city (boot 09-24). */
export function streetTreeSpots(roads, blocked, limit = Infinity) {
  const out = [];
  for (const r of roads) {
    if (out.length >= limit) break;
    if (!["primary", "secondary", "tertiary", "residential"].includes(r.k) || r.p.length < 2) continue;
    const off = (ROAD_WIDTH[r.k] ?? 6.5) / 2 + 1.6;
    let carry = 0;
    for (let i = 0; i < r.p.length - 1; i++) {
      const [x1, z1] = r.p[i];
      const [x2, z2] = r.p[i + 1];
      const len = Math.hypot(x2 - x1, z2 - z1) || 1;
      for (let d = 24 - carry; d < len; d += 24) {
        const k = d / len;
        for (const side of [1, -1]) {
          const x = x1 + (x2 - x1) * k - (z2 - z1) / len * off * side;
          const z = z1 + (z2 - z1) * k + (x2 - x1) / len * off * side;
          if (out.length < limit && !blocked(new THREE.Vector3(x, 1, z))) out.push([x, z]);
        }
      }
      carry = (carry + len) % 24;
    }
  }
  return out;
}

export function roadMarkings(root, roads, merge) {
  const center = [];
  const edges = [];
  for (const r of roads) {
    if (!MARKED.has(r.k) || r.p.length < 2) continue;
    const w = ROAD_WIDTH[r.k];
    center.push(strip(r.p, 0.35, 0.1, 0, 1 / 6));
    edges.push(strip(r.p, 0.2, 0.1, w / 2 - 0.7), strip(r.p, 0.2, 0.1, -(w / 2 - 0.7)));
  }
  const opts = { transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, side: THREE.DoubleSide };
  if (center.length) root.add(new THREE.Mesh(merge(center), new THREE.MeshStandardMaterial({ ...opts, map: dashTexture(), alphaTest: 0.5, roughness: 0.6 })));
  if (edges.length) root.add(new THREE.Mesh(merge(edges), new THREE.MeshStandardMaterial({ ...opts, color: 0xe6e6e0, roughness: 0.6 })));
  return center.length;
}

/** AC units, vents and tanks on mid/low-rise roofs, always inside the real outline. */
export function rooftopClutter(root, buildings) {
  const spots = [];
  for (const b of buildings) {
    if (b.h < 8 || b.h > 70) continue;
    const area = Math.abs(signedArea(b.p));
    const xs = b.p.map((p) => p[0]);
    const zs = b.p.map((p) => p[1]);
    const n = Math.min(5, Math.floor(area / 220));
    for (let i = 0, tries = 0; i < n && tries < n * 6; tries++) {
      const x = rand(Math.min(...xs) + 2, Math.max(...xs) - 2);
      const z = rand(Math.min(...zs) + 2, Math.max(...zs) - 2);
      if (!inside(x, z, b.p)) continue;
      spots.push([x, b.h, z, Math.random()]);
      i += 1;
    }
  }
  if (!spots.length) return 0;
  const geo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.45 }), spots.length);
  const m = new THREE.Matrix4();
  const shades = [0xc9ccd0, 0xa9adb2, 0xd8d4ca, 0x8e9196].map((c) => new THREE.Color(c));
  spots.forEach(([x, y, z, kind], i) => {
    const size = kind < 0.2 ? [2.4, 3.2, 2.4] : [rand(1.6, 3.4), rand(1, 1.8), rand(2.2, 4.2)]; // tanks tall, AC units low
    m.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand(0, Math.PI)), new THREE.Vector3(...size));
    im.setMatrixAt(i, m);
    im.setColorAt(i, shades[i % shades.length]);
  });
  im.castShadow = true;
  root.add(im);
  return spots.length;
}

/** Antennas + red aviation beacons on the tall towers. Returns a per-frame blink. */
export function antennas(root, buildings) {
  const mast = new THREE.MeshStandardMaterial({ color: 0x9a9da3, metalness: 0.8, roughness: 0.35 });
  const beacons = [];
  for (const b of buildings.filter((bd) => bd.h >= ANTENNA_MIN_H)) {
    const cx = b.p.reduce((s, p) => s + p[0], 0) / b.p.length;
    const cz = b.p.reduce((s, p) => s + p[1], 0) / b.p.length;
    if (!inside(cx, cz, b.p) || (b.name ?? "").includes("Tribune Tower")) continue; // the Tribune gets its crown instead
    const h = rand(10, 24);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.5, h, 6).translate(0, h / 2, 0), mast);
    m.position.set(cx, b.h, cz);
    root.add(m);
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2a1a, transparent: true }));
    light.userData.dynamic = true; // blinks: never baked
    light.position.set(cx, b.h + h + 0.6, cz);
    root.add(light);
    beacons.push({ mat: light.material, phase: rand(0, 6) });
  }
  return (t) => beacons.forEach((b) => {
    b.mat.opacity = Math.sin(t * 2.4 + b.phase) > 0.4 ? 1 : 0.12;
  });
}

/** The Oakland Tribune Tower's crown, on the real building, scaled to its footprint. */
export function tribuneCrown(root, buildings, crown) {
  const t = buildings.find((b) => (b.name ?? "").includes("Tribune Tower"));
  if (!t || !crown) return false;
  const xs = t.p.map((p) => p[0]);
  const zs = t.p.map((p) => p[1]);
  const span = Math.min(Math.max(...xs) - Math.min(...xs), Math.max(...zs) - Math.min(...zs));
  crown.position.set((Math.min(...xs) + Math.max(...xs)) / 2, t.h, (Math.min(...zs) + Math.max(...zs)) / 2);
  crown.scale.setScalar(Math.max(0.6, Math.min(1.6, span / 15)));
  crown.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });
  root.add(crown);
  return true;
}

/** Container cranes along the working waterfront, booms out over the water. Returns colliders. */
export function portCranes(root, crane, shoreX, zFrom = -2600, spacing = 150) {
  if (!crane) return [];
  const colliders = [];
  for (let i = 0; i < CRANES; i++) {
    const c = crane.clone();
    const x = shoreX + 30;
    const z = zFrom + i * spacing;
    c.position.set(x, 0, z);
    c.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
    root.add(c);
    const p = [[x - 11, z - 9], [x + 11, z - 9], [x + 11, z + 9], [x - 11, z + 9]];
    colliders.push({ x, z, hw: 11, hd: 9, h: 90, name: "Port crane", p });
  }
  return colliders;
}

// ---------------------------------------------------------------- building trim (owner 09-24: "building borders")
/** A ring of wall quads around a footprint, pushed `out` metres outward, from y0 to y1. */
function ringQuads(pos, pts, y0, y1, out) {
  const ccw = signedArea(pts) > 0 ? pts : [...pts].reverse();
  for (let i = 0; i < ccw.length; i++) {
    const [x1, z1] = ccw[i];
    const [x2, z2] = ccw[(i + 1) % ccw.length];
    const len = Math.hypot(x2 - x1, z2 - z1) || 1;
    const nx = (z2 - z1) / len * out; // outward normal for this winding
    const nz = -(x2 - x1) / len * out;
    const a = [x1 + nx, z1 + nz];
    const b = [x2 + nx, z2 + nz];
    pos.push(a[0], y0, a[1], b[0], y0, b[1], b[0], y1, b[1], a[0], y0, a[1], b[0], y1, b[1], a[0], y1, a[1]);
  }
}

/** Roofline cornices + a darker stone base on every building: edges read clean instead of melting into the sky. */
export function buildingTrim(root, buildings) {
  const TILE = 400; // chunked like the walls so the camera culls trim behind you
  const tiles = new Map();
  for (const b of buildings) {
    if (b.p.length < 3 || b.h < 6) continue; // sheds and kiosks don't need a cornice
    const key = `${Math.floor(b.p[0][0] / TILE)},${Math.floor(b.p[0][1] / TILE)}`;
    if (!tiles.has(key)) tiles.set(key, { stone: [], metal: [], base: [] });
    const t = tiles.get(key);
    const tower = b.h >= 40;
    ringQuads(tower ? t.metal : t.stone, b.p, b.h - (tower ? 1.2 : 0.8), b.h + (tower ? 0.4 : 0.9), tower ? 0.18 : 0.3);
    ringQuads(t.base, b.p, 0, Math.min(3.6, b.h * 0.3), 0.12);
  }
  const mats = {
    stone: new THREE.MeshStandardMaterial({ color: 0xcfc6b4, roughness: 0.8, metalness: 0.05, side: THREE.DoubleSide }),
    metal: new THREE.MeshStandardMaterial({ color: 0x2c3038, roughness: 0.35, metalness: 0.8, side: THREE.DoubleSide }),
    base: new THREE.MeshStandardMaterial({ color: 0x3f3c3a, roughness: 0.85, metalness: 0.1, side: THREE.DoubleSide }),
  };
  for (const t of tiles.values()) {
    for (const [kind, arr] of Object.entries(t)) {
      if (!arr.length) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(arr, 3));
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, mats[kind]);
      m.castShadow = kind !== "base";
      // the baker merges these per 900 m tile + material: few draw calls, still culled per tile
      root.add(m);
    }
  }
  return tiles.size;
}

// ---------------------------------------------------------------- intersections: crosswalks + traffic lights
const SIGNAL_ROADS = new Set(["trunk", "primary", "secondary", "tertiary"]);
const SIGNAL_CYCLE = [["green", 5], ["yellow", 1.4], ["red", 4.6]];
const SIGNAL_COLORS = { red: new THREE.Color(0xff2a1a), yellow: new THREE.Color(0xffb020), green: new THREE.Color(0x2aff6a), off: new THREE.Color(0x1a1a1a) };
const MAX_SIGNALS = 260;

/** Nodes shared by 2+ roads, at least one of them a through road. */
function findIntersections(roads) {
  const seen = new Map();
  for (const r of roads) {
    r.p.forEach(([x, z], i) => {
      const key = `${Math.round(x)},${Math.round(z)}`;
      if (!seen.has(key)) seen.set(key, { x, z, arms: [], major: false });
      const node = seen.get(key);
      node.major ||= SIGNAL_ROADS.has(r.k);
      for (const j of [i - 1, i + 1]) {
        if (j < 0 || j >= r.p.length) continue;
        node.arms.push({ dx: r.p[j][0] - x, dz: r.p[j][1] - z, w: ROAD_WIDTH[r.k] ?? 6.5 });
      }
    });
  }
  return [...seen.values()].filter((n) => n.major && n.arms.length >= 3).slice(0, MAX_SIGNALS);
}

export function intersections(root, roads, merge) {
  const nodes = findIntersections(roads);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  // zebra crosswalk stripes on every arm
  const stripes = [];
  for (const n of nodes) {
    for (const a of n.arms) {
      const len = Math.hypot(a.dx, a.dz);
      if (len < 12) continue;
      const ux = a.dx / len;
      const uz = a.dz / len;
      const cx = n.x + ux * 7;
      const cz = n.z + uz * 7;
      const yaw = Math.atan2(ux, uz);
      for (let s = -a.w / 2 + 0.6; s <= a.w / 2 - 0.6; s += 1.1) stripes.push([cx + uz * s, cz - ux * s, yaw]);
    }
  }
  if (stripes.length) {
    const zebra = new THREE.InstancedMesh(new THREE.BoxGeometry(0.55, 0.03, 3), new THREE.MeshStandardMaterial({ color: 0xe8e6de, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -5 }), stripes.length);
    stripes.forEach(([x, z, yaw], i) => zebra.setMatrixAt(i, m.compose(new THREE.Vector3(x, 0.12, z), q.setFromAxisAngle(up, yaw), new THREE.Vector3(1, 1, 1))));
    root.add(zebra);
  }
  // signal poles on two opposite corners, with a lit head that cycles
  const poles = [];
  for (const n of nodes) {
    const a = n.arms[0];
    const len = Math.hypot(a.dx, a.dz) || 1;
    const yaw = Math.atan2(a.dx / len, a.dz / len);
    const off = (a.w / 2) + 2.5;
    for (const sgn of [1, -1]) {
      const cx = n.x + Math.cos(yaw) * off * sgn + Math.sin(yaw) * off * sgn;
      const cz = n.z - Math.sin(yaw) * off * sgn + Math.cos(yaw) * off * sgn;
      poles.push({ x: cx, z: cz, yaw: yaw + (sgn > 0 ? Math.PI : 0), phase: Math.random() * 11 });
    }
  }
  if (!poles.length) return () => {};
  const frame = merge([
    new THREE.CylinderGeometry(0.12, 0.16, 6, 8).translate(0, 3, 0),
    new THREE.BoxGeometry(0.1, 0.1, 4.2).translate(0, 5.8, 2.1),
    new THREE.BoxGeometry(0.45, 1.25, 0.4).translate(0, 5.3, 4.1),
  ]);
  const poleMesh = new THREE.InstancedMesh(frame, new THREE.MeshStandardMaterial({ color: 0x2e3238, metalness: 0.6, roughness: 0.45 }), poles.length);
  const lamp = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffffff }), poles.length * 3);
  poles.forEach((p, i) => {
    const base = m.compose(new THREE.Vector3(p.x, 0, p.z), q.setFromAxisAngle(up, p.yaw), new THREE.Vector3(1, 1, 1));
    poleMesh.setMatrixAt(i, base);
    [5.7, 5.3, 4.9].forEach((y, k) => {
      const at = new THREE.Vector3(0, y, 4.33).applyMatrix4(base);
      lamp.setMatrixAt(i * 3 + k, new THREE.Matrix4().makeTranslation(at.x, at.y, at.z));
    });
  });
  poleMesh.castShadow = true;
  root.add(poleMesh, lamp);
  let last = -1;
  return (t) => {
    const tick = Math.floor(t * 4); // update 4× a second — the cycle is slow
    if (tick === last) return;
    last = tick;
    const total = SIGNAL_CYCLE.reduce((s, [, d]) => s + d, 0);
    poles.forEach((p, i) => {
      let tt = (t + p.phase + (i % 2 ? total / 2 : 0)) % total; // the cross street is out of phase
      let state = "red";
      for (const [name, d] of SIGNAL_CYCLE) {
        if (tt < d) {
          state = name;
          break;
        }
        tt -= d;
      }
      ["red", "yellow", "green"].forEach((c, k) => lamp.setColorAt(i * 3 + k, c === state ? SIGNAL_COLORS[c] : SIGNAL_COLORS.off));
    });
    lamp.instanceColor.needsUpdate = true;
  };
}
