// FLIGHT ZONE: OAKLAND, CA — the real downtown (OpenStreetMap footprints + heights, fetched by
// art/fetch_oakland.py) in the "UHD digital realistic" look (oakland-render.js) with the Blender-built
// landmarks (oakland-landmarks.js). This file owns gameplay: collision, rings, power-up roofs, QMM
// seals, Lake Merritt's necklace. Same interface as flight-arena.js so FlightBattle can fly either.
import * as THREE from "three";
import { seedOfLife } from "./sacred.js";
import { renderRealisticOakland, signedArea, inside, trees } from "./oakland-render.js";
import { addLandmarks } from "./oakland-landmarks.js";
import { waterMaterial, bay, hills, sfSkyline, clouds, fillerCity } from "./oakland-scenery.js";
import { roadMarkings, rooftopClutter, antennas, tribuneCrown, portCranes, buildingTrim, intersections, sidewalks, streetTreeSpots } from "./oakland-details.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { bakeStatic } from "./bake.js";
import { addVehicles } from "./oakland-vehicles.js";
import { cullingTiles } from "./oakland-lod.js";
import { WAREHOUSE } from "./oakland-mission.js";

export const OAKLAND_RADIUS = 3800; // minimum play radius; widened to reach the Bay Bridge once the shoreline is known
const ARENA_CLEAR = 170; // real buildings under the QMM Arena lot are cleared
const SEAL_TOWERS = 12;
const RING_COUNT = 24;
const GRID = 60; // collision hash cell (m)
const HAZE = 0x9fb2c6; // Bay Area golden-hour haze (mid-tone, so distance reads blue, not white)

const rand = (a, b) => a + Math.random() * (b - a);

function buildRings(root) {
  return Array.from({ length: RING_COUNT }, (_, i) => {
    const a = (i / RING_COUNT) * Math.PI * 2;
    const r = rand(200, 950);
    const obj = seedOfLife(6, 0.35);
    obj.position.set(Math.cos(a) * r, rand(55, 140), Math.sin(a) * r);
    obj.rotation.y = a + Math.PI / 2;
    root.add(obj);
    return { obj, normal: new THREE.Vector3(0, 0, 1).applyQuaternion(obj.quaternion), taken: false, respawn: 0 };
  });
}

/** QMM seals on the tallest real towers — normal-blended so they read in daylight. */
function buildSeals(root, buildings, sealTex) {
  const boards = [];
  for (const b of [...buildings].sort((p, q) => q.h - p.h).slice(0, SEAL_TOWERS)) {
    const xs = b.p.map((p) => p[0]);
    const zs = b.p.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    const hw = (Math.max(...xs) - Math.min(...xs)) / 2;
    const hd = (Math.max(...zs) - Math.min(...zs)) / 2;
    const size = Math.min(26, Math.min(hw, hd) * 1.6);
    for (const [dx, dz, ry] of [[0, hd + 1, 0], [0, -hd - 1, Math.PI], [hw + 1, 0, Math.PI / 2], [-hw - 1, 0, -Math.PI / 2]]) {
      const mat = new THREE.MeshBasicMaterial({ map: sealTex, transparent: true, opacity: 0.92, depthWrite: false, side: THREE.DoubleSide });
      const seal = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
      seal.position.set(cx + dx, b.h * 0.78, cz + dz);
      seal.rotation.y = ry;
      root.add(seal);
      boards.push({ mat, phase: rand(0, 6) });
    }
  }
  return boards;
}

/** Lake Merritt's necklace of lights along the big shoreline. */
function necklace(root, water) {
  const pts = [];
  for (const poly of water) {
    if (Math.abs(signedArea(poly)) < 40000) continue;
    for (let i = 0; i < poly.length; i++) {
      const [x1, z1] = poly[i];
      const [x2, z2] = poly[(i + 1) % poly.length];
      const steps = Math.floor(Math.hypot(x2 - x1, z2 - z1) / 9);
      for (let s = 0; s < steps; s++) pts.push(x1 + ((x2 - x1) * s) / steps, 3.5, z1 + ((z2 - z1) * s) / steps);
    }
  }
  if (!pts.length) return;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
  root.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffd27a, size: 2.2, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
}

function boxOf(b) {
  const xs = b.p.map((p) => p[0]);
  const zs = b.p.map((p) => p[1]);
  return { x: (Math.min(...xs) + Math.max(...xs)) / 2, z: (Math.min(...zs) + Math.max(...zs)) / 2,
    hw: (Math.max(...xs) - Math.min(...xs)) / 2, hd: (Math.max(...zs) - Math.min(...zs)) / 2, h: b.h, name: b.name, p: b.p };
}

export function buildOakland(root) {
  const world = new THREE.Group(); // every static piece of the city — merged by bakeStatic() once built
  root.add(world);
  const grid = new Map(); // "cx,cz" -> collision boxes (flight: tall enough to hit in the air)
  const ground = new Map(); // "cx,cz" -> EVERY footprint (FIGHT MODE walks into low buildings too)
  let waterPolys = [];
  const towers = [];
  const rings = buildRings(root);
  let seals = [];
  let updateTraffic = () => {};
  let arenaHit = () => false;
  let ticks = [];
  const index = (box) => {
    towers.push(box);
    const key = `${Math.floor(box.x / GRID)},${Math.floor(box.z / GRID)}`;
    if (!grid.has(key)) grid.set(key, []);
    grid.get(key).push(box);
  };
  const indexGround = (box) => {
    const key = `${Math.floor(box.x / GRID)},${Math.floor(box.z / GRID)}`;
    if (!ground.has(key)) ground.set(key, []);
    ground.get(key).push(box);
  };
  const lookup = (map, pos, test) => {
    const cx = Math.floor(pos.x / GRID);
    const cz = Math.floor(pos.z / GRID);
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (const t of map.get(`${cx + i},${cz + j}`) ?? []) if (test(t)) return t;
      }
    }
    return null;
  };

  const arena = {
    radius: OAKLAND_RADIUS,
    ceiling: 320, // well above the Ordway (123 m), the Bay Bridge towers (160 m) and every lifted ring
    far: 30000, // the Golden Gate sits ~14 km out on the horizon
    grade: 0, // no violet film grade here — true colours
    realistic: 1, // filmic contrast + warm/cool split toning (cinematic.js)
    bloom: 0, // off: nearly invisible in daylight and its mip chain is costly on an integrated GPU
    pixelRatio: 1, // integrated-GPU budget: full-res pixels are the first thing to give up
    exposure: 0.82, // a bright physical sky + ACES washes out at 1.0
    start: { pos: new THREE.Vector3(0, 75, 420), yaw: Math.PI }, // edge of downtown, towers dead ahead up Broadway
    walkable: true, // FIGHT MODE: F lands him on the street
    floor: 2.2, // skim the streets — duck behind trucks (owner 09-24)
    roads: [],
    backdrop: { background: new THREE.Color(HAZE), update() {} },
    towers,
    rings,
    rooftops: [],
    haze: new THREE.Color(HAZE),
    fogDensity: 0.00017,
    skyTexture: null,
    envScene: null,
    attribution: "",
    ready: Promise.all([
      fetch("assets/oakland.json").then((r) => r.json()),
      new Promise((resolve) => new THREE.TextureLoader().load("assets/art/qmm_seal.png", resolve, undefined, () => resolve(null))),
    ]).then(async ([city, seal]) => {
      arena.attribution = city.attribution;
      const ARENA_AT = [1750, 1850];
      city.buildings = city.buildings.filter((b) => Math.hypot(b.p[0][0] - ARENA_AT[0], b.p[0][1] - ARENA_AT[1]) > ARENA_CLEAR
        && Math.hypot(b.p[0][0] - WAREHOUSE.x, b.p[0][1] - WAREHOUSE.z) > WAREHOUSE.clear); // the QMM Warehouse lot
      arena.roads = city.roads;
      waterPolys = city.water;
      const bounds = { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity };
      for (const b of city.buildings) { // a loop, not Math.min(...all): 150k+ coords overflow the call stack
        for (const [x, z] of b.p) {
          if (x < bounds.minX) bounds.minX = x;
          if (x > bounds.maxX) bounds.maxX = x;
          if (z < bounds.minZ) bounds.minZ = z;
          if (z > bounds.maxZ) bounds.maxZ = z;
        }
      }
      const shoreX = bounds.minX - 120; // the Bay starts just past the westernmost real building
      const hillsX = bounds.maxX + 250;
      arena.radius = Math.max(OAKLAND_RADIUS, -shoreX + 1900); // the Bay Bridge must stay reachable
      const look = await renderRealisticOakland(world, city, arena.radius);
      arena.envScene = look.envScene;
      const marks = await addLandmarks(world, city, { shoreX });
      arenaHit = marks.arenaHit;
      const water = await waterMaterial();
      bay(world, shoreX, water.mat);
      if (look.waterMesh) look.waterMesh.material = water.mat; // lake + estuary ripple with the Bay
      hills(world, hillsX);
      sfSkyline(world, look.textures.glass);
      const drift = clouds(root, look.sunDir); // clouds drift: kept out of the baked world
      const filler = fillerCity(world, { bounds, shoreX, hillsX, avoid: [[...marks.arenaPos, 260]], lowTex: look.textures.lowrise, midTex: look.textures.midrise });
      const marked = roadMarkings(world, city.roads, mergeGeometries);
      sidewalks(world, city.roads, mergeGeometries);
      buildingTrim(world, city.buildings);
      const signals = intersections(root, city.roads, mergeGeometries); // lit heads animate: outside the baked world
      const clutter = rooftopClutter(world, city.buildings);
      const blink = antennas(world, city.buildings);
      const tribune = tribuneCrown(world, city.buildings, marks.crown);
      portCranes(world, marks.crane, shoreX, bounds.minZ + 300).forEach((c) => {
        index(c);
        indexGround(c);
      });
      if (marks.warehouse) {
        marks.warehouse.position.set(WAREHOUSE.x, 0, WAREHOUSE.z);
        marks.warehouse.rotation.y = WAREHOUSE.yaw;
        world.add(marks.warehouse);
        const { x, z, hw, hd, h } = WAREHOUSE;
        const wbox = { x, z, hw, hd, h, name: "QMM Warehouse", p: [[x - hw, z - hd], [x + hw, z - hd], [x + hw, z + hd], [x - hw, z + hd]] };
        index(wbox);
        indexGround(wbox);
      }
      ticks = [(dt) => water.tick(dt), (dt) => drift(dt), (dt, t) => blink(t), (dt, t) => signals(t)];
      arena.follow = look.follow;
      arena.setTime = look.setTime;
      const meshes = bakeStatic(world);
      Object.assign(marks.stats, { meshesBefore: meshes.before, meshesAfter: meshes.after, chunks: look.chunks, filler, marked, clutter, tribune, shoreX: Math.round(shoreX), radius: Math.round(arena.radius) });
      necklace(world, city.water);
      if (seal) {
        seal.colorSpace = THREE.SRGBColorSpace;
        seals = buildSeals(world, city.buildings, seal);
      }
      for (const b of city.buildings) {
        const box = boxOf(b);
        if (b.h >= 12 && b.h <= 40 && box.hw > 6 && box.hd > 6) arena.rooftops.push(box);
        if (b.h >= 3) index(box); // Oakland flies street-low (floor 2 m): every real building is solid
        indexGround(box);
      }
      marks.colliders.forEach((c) => {
        index(c);
        indexGround(c);
      });
      const lining = streetTreeSpots(city.roads, (p) => arena.groundBlocked(p) || arena.isWater(p.x, p.z));
      Object.assign(marks.stats, { streetTrees: trees(root, { trees: lining.slice(0, 4000), parks: [], water: [] }, { shadows: false }) });
      const traffic = await addVehicles(root, city.roads, (p) => arena.groundBlocked(p));
      updateTraffic = traffic.update;
      arena.setTraffic = traffic.setDensity;
      arena.vehicleAt = traffic.vehicleAt ?? (() => null);
      arena.truckRider = traffic.truckRider ?? (() => null);
      Object.assign(marks.stats, traffic.stats);
      const lod = cullingTiles(root); // AFTER everything static is in: split city-wide meshes into culling tiles
      Object.assign(marks.stats, { lodSplit: lod.stats.split, lodTiles: lod.stats.tiles });
      arena.follow = (pos) => {
        look.follow(pos);
        lod.update(pos);
        traffic.setFocus?.(pos);
      };
      lod.update(arena.start.pos);
      for (const ring of rings) { // lift any ring that landed inside a real building
        let t = arena.towerAt(ring.obj.position);
        while (t) {
          ring.obj.position.y = t.h + 15;
          t = arena.towerAt(ring.obj.position);
        }
      }
      arena.rooftops = arena.rooftops.filter((r) => inside(r.x, r.z, r.p) && !arena.towerAt(new THREE.Vector3(r.x, Math.max(r.h + 2.5, 12), r.z)));
      return { buildings: city.buildings.length, roads: city.roads.length, ...look.stats, ...marks.stats };
    }),
    update(dt, t) {
      for (const ring of rings) {
        ring.obj.rotation.z += dt * 1.5;
        if (ring.taken && (ring.respawn -= dt) <= 0) {
          ring.taken = false;
          ring.obj.visible = true;
        }
      }
      updateTraffic(dt);
      for (const tick of ticks) tick(dt, t);
    },
    ringHit(pos) {
      for (const ring of rings) {
        if (ring.taken) continue;
        const off = pos.clone().sub(ring.obj.position);
        if (off.length() < 6.5 && Math.abs(off.dot(ring.normal)) < 2) {
          ring.taken = true;
          ring.respawn = 25;
          ring.obj.visible = false;
          return ring;
        }
      }
      return null;
    },
    /** FIGHT MODE rooftop landing (owner 09-24): the real building under (x, z), or null on open street. */
    roofAt(pos) {
      const t = lookup(ground, pos, (b) => Math.abs(pos.x - b.x) < b.hw + 0.3 && Math.abs(pos.z - b.z) < b.hd + 0.3 && inside(pos.x, pos.z, b.p));
      return t ? { y: t.h, box: t } : null;
    },
    /** FIGHT MODE: is this street point inside any real footprint (or the arena wall)? */
    groundBlocked(pos) {
      if (arenaHit(new THREE.Vector3(pos.x, 1, pos.z))) return true;
      return Boolean(lookup(ground, pos, (t) => Math.abs(pos.x - t.x) < t.hw + 0.3 && Math.abs(pos.z - t.z) < t.hd + 0.3 && inside(pos.x, pos.z, t.p)));
    },
    isWater(x, z) {
      return waterPolys.some((w) => inside(x, z, w));
    },
    towerAt(pos) {
      if (arenaHit(pos)) return { h: 42, name: "QMM Arena" };
      const cx = Math.floor(pos.x / GRID);
      const cz = Math.floor(pos.z / GRID);
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          for (const t of grid.get(`${cx + i},${cz + j}`) ?? []) {
            if (pos.y < t.h + 0.4 && Math.abs(pos.x - t.x) < t.hw + 0.4 && Math.abs(pos.z - t.z) < t.hd + 0.4 && inside(pos.x, pos.z, t.p)) return t;
          }
        }
      }
      return null;
    },
  };
  return arena;
}
