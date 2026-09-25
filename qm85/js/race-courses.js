// RING RACE COURSES (owner 09-25). Built at race start from the REAL map (the arena is already up):
//   BAY BRIDGE RUN   — under the deck, round both towers, over the deck between the cables, back skimming the Bay
//   LAKE MERRITT LAP — a lap of the real shoreline, gates set just off the water
//   DOWNTOWN CANYON  — up Broadway between the towers (Tribune, City Hall, 1900 Broadway, the Ordway) to the Lake
// A gate that lands inside a building is lifted clear of its roof; medals come from the course's real length.
import * as THREE from "three";

// Bay Bridge model space (bay_bridge.glb): the span runs along +X 0..1400, deck 56-60 m, width z ±17, towers at
// x 350 / 1050 (solid ±24 m in z up to 160 m), cables along z ±19. Placement matches oakland-landmarks.js.
const BRIDGE_AT = (shoreX) => new THREE.Vector3(shoreX - 250, 0, -900);
const BRIDGE_YAW = Math.PI - 0.22;
const BRIDGE_GATES = [
  [60, 26, 0], // under the deck, just off the shore end
  [350, 34, 48], // round tower 1 on the south side
  [600, 72, 0], // up and over the deck, between the cable planes
  [820, 28, 0], // dive back under
  [1050, 36, -48], // round tower 2 on the north side
  [1330, 105, 0], // climb over the far end
  [1520, 55, -170], // turn back out over open water
  [1180, 16, -120], // skim the Bay alongside the span
  [700, 14, -115],
  [230, 18, -100],
  [-70, 26, -10], // finish at the shore end
];

// Downtown (x east, z south, from 14th & Broadway): south of downtown, up Broadway, weave the towers, out to the Lake.
const CANYON_GATES = [
  [-80, 30, 720], [-10, 30, 420], [-30, 32, 180], [20, 36, -30], [-70, 40, -170], [120, 42, -300],
  [260, 46, -470], [460, 44, -560], [640, 58, -720], [860, 40, -560], [900, 26, -330],
];

function lakeGates(arena, n = 12) {
  const lake = (arena.water ?? []).reduce((best, w) => (w.length > (best?.length ?? 0) ? w : best), null);
  if (!lake) return [];
  const cx = lake.reduce((s, p) => s + p[0], 0) / lake.length;
  const cz = lake.reduce((s, p) => s + p[1], 0) / lake.length;
  const gates = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const dir = [Math.cos(a), Math.sin(a)];
    let far = 0; // the shoreline's reach in this direction
    for (const [x, z] of lake) {
      const dx = x - cx;
      const dz = z - cz;
      const along = dx * dir[0] + dz * dir[1];
      const across = Math.abs(dx * dir[1] - dz * dir[0]);
      if (along > 0 && across < 90) far = Math.max(far, along);
    }
    const r = Math.max(120, far + 40);
    gates.push([cx + dir[0] * r, i % 2 ? 24 : 14, cz + dir[1] * r]);
  }
  gates.push([...gates[0]]); // back through the first gate = the lap
  return gates;
}

/** A point in the Bay Bridge's model space (x along the span 0..1400, y up, z across) → world, for the live arena. */
export function bridgePoint(arena, x, y, z) {
  const m = new THREE.Matrix4().compose(BRIDGE_AT(arena.shoreX ?? -3200), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), BRIDGE_YAW), new THREE.Vector3(1, 1, 1));
  return new THREE.Vector3(x, y, z).applyMatrix4(m);
}

export const COURSES = [
  { id: "bridge", name: "BAY BRIDGE RUN", blurb: "Under the deck, round the towers, over the top, skim the Bay home." },
  { id: "lake", name: "LAKE MERRITT LAP", blurb: "One lap of the necklace of lights, hugging the shoreline." },
  { id: "canyon", name: "DOWNTOWN CANYON", blurb: "Up Broadway between the towers, out to the Lake." },
];

/** Gate centres (world) + medal times for a course, fitted to the live arena. */
export function buildCourse(id, arena) {
  let pts;
  if (id === "bridge") {
    const m = new THREE.Matrix4().compose(BRIDGE_AT(arena.shoreX ?? -3200), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), BRIDGE_YAW), new THREE.Vector3(1, 1, 1));
    pts = BRIDGE_GATES.map(([x, y, z]) => new THREE.Vector3(x, y, z).applyMatrix4(m));
  } else if (id === "lake") {
    pts = lakeGates(arena).map(([x, y, z]) => new THREE.Vector3(x, y, z));
  } else {
    pts = CANYON_GATES.map(([x, y, z]) => new THREE.Vector3(x, y, z));
  }
  for (const p of pts) { // never inside a building: lift clear of the roof
    for (let guard = 0; guard < 20 && arena.towerAt(p); guard++) p.y = (arena.towerAt(p).h ?? p.y) + 16;
  }
  let length = 0;
  for (let i = 1; i < pts.length; i++) length += pts[i].distanceTo(pts[i - 1]);
  const start = pts[0].clone().addScaledVector(pts[0].clone().sub(pts[1]).setY(0).normalize(), 90); // 90 m before gate 1
  start.y = pts[0].y + 6;
  const toFirst = pts[0].clone().sub(start);
  return {
    id, gates: pts, length,
    start: { pos: start, yaw: Math.atan2(toFirst.x, toFirst.z) },
    medals: { gold: length / 44, silver: length / 35, bronze: length / 27 }, // seconds
  };
}
