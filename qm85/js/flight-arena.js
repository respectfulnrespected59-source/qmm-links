// The FLIGHT BATTLE sky: a photoreal megacity panorama wrapped around the horizon, towers clad in
// photoreal facades (lit windows glow), a glowing circuit-city floor, and gold rings that refill
// thrusters + shield. The art is AI-painted over rough layouts (art/gen_world_art.py) — the same
// "blocking render -> photoreal pass" trick as the commercial — and falls back to the line-frame
// look if a texture is missing.
import * as THREE from "three";
import { buildBackdrop } from "./backdrop.js";
import { buildDetails, skinLowrise } from "./flight-details.js";
import { seedOfLife } from "./sacred.js";

export const ARENA_RADIUS = 220;
const TOWER_COUNT = 42;
const RING_COUNT = 18;
const RING_R = 4;
const SKY_R = 520;
const SKY_H = 760;
const HAZE = 0x23272a; // charcoal haze (owner 09-24: "too purple pinky... add dark greys and a little matrix neon green")

const rand = (a, b) => a + Math.random() * (b - a);
const loader = new THREE.TextureLoader();

/**
 * Re-paint a loaded texture toward grey-green (owner 09-24: "a little more grey and green in the cyber world"):
 * desaturate by `amount`, then lean the remaining colour to matrix green. The painted art is violet/orange neon;
 * tints on the material can't get past that, so the pixels themselves are shifted once at load.
 */
function greyGreen(tex, amount = 0.7, green = 1.12) {
  const img = tex.image;
  const c = document.createElement("canvas");
  c.width = img.width;
  c.height = img.height;
  const g = c.getContext("2d");
  g.drawImage(img, 0, 0);
  const id = g.getImageData(0, 0, c.width, c.height);
  const d = id.data;
  for (let i = 0; i < d.length; i += 4) {
    const lum = 0.3 * d[i] + 0.59 * d[i + 1] + 0.11 * d[i + 2];
    d[i] = Math.min(255, (d[i] + (lum - d[i]) * amount) * 0.9);
    d[i + 1] = Math.min(255, (d[i + 1] + (lum - d[i + 1]) * amount) * green);
    d[i + 2] = Math.min(255, (d[i + 2] + (lum - d[i + 2]) * amount) * 0.8);
  }
  g.putImageData(id, 0, 0);
  const out = new THREE.CanvasTexture(c);
  out.colorSpace = tex.colorSpace;
  out.anisotropy = tex.anisotropy;
  out.wrapS = tex.wrapS;
  out.wrapT = tex.wrapT;
  return out;
}

/** Load a texture; resolves null (keeps the fallback look) if the file is missing. */
function loadArt(name) {
  return new Promise((resolve) => {
    loader.load(`assets/art/${name}.jpg`, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 16; // full-res art: keep it sharp at grazing angles
      resolve(tex);
    }, undefined, () => resolve(null));
  });
}

function buildTowers(root) {
  const edgeViolet = new THREE.LineBasicMaterial({ color: 0x9b4dff, transparent: true, opacity: 1 });
  const edgeGold = new THREE.LineBasicMaterial({ color: 0xd4a73a, transparent: true, opacity: 1 });
  const edgeGreen = new THREE.LineBasicMaterial({ color: 0x35ff6a, transparent: true, opacity: 1 }); // matrix green
  const towers = [];
  for (let i = 0; i < TOWER_COUNT; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(30, ARENA_RADIUS - 20);
    const w = rand(6, 14);
    const d = rand(6, 14);
    const h = rand(25, 80);
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color: 0x0f1113, metalness: 0.7, roughness: 0.35, emissive: 0x061a0c });
    const mesh = new THREE.Mesh(geo, mat);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    mesh.position.set(x, h / 2, z);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), i % 4 === 0 ? edgeGold : i % 2 === 0 ? edgeGreen : edgeViolet); // half the towers wear matrix-green edges
    mesh.add(edges);
    root.add(mesh);
    towers.push({ x, z, hw: w / 2, hd: d / 2, h, w, mesh });
  }
  return { towers, edgeMats: [edgeViolet, edgeGold, edgeGreen] };
}

function buildRings(root) {
  const rings = [];
  for (let i = 0; i < RING_COUNT; i++) {
    const a = (i / RING_COUNT) * Math.PI * 2 + rand(-0.2, 0.2);
    const r = rand(40, ARENA_RADIUS - 40);
    const obj = seedOfLife(RING_R, 0.22);
    obj.position.set(Math.cos(a) * r, rand(14, 55), Math.sin(a) * r);
    obj.rotation.y = a + Math.PI / 2; // face along the circle so a lap threads them
    root.add(obj);
    const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(obj.quaternion);
    rings.push({ obj, normal, taken: false, respawn: 0 });
  }
  return rings;
}

function skinTowers(towers, edgeMats, facade) {
  for (const t of towers) {
    const map = facade.clone();
    map.wrapS = map.wrapT = THREE.MirroredRepeatWrapping;
    map.repeat.set(Math.max(1, t.w / 10), Math.max(1, t.h / 16));
    map.needsUpdate = true;
    Object.assign(t.mesh.material, { map, emissiveMap: map, color: new THREE.Color([0xb9c4bd, 0xa9adad, 0x9fd6ae, 0xb3bcb6][Math.abs(Math.round(t.x + t.z)) % 4]), metalness: 0.6, roughness: 0.35 }) // per-tower tint: grey-green / steel grey / matrix green / a little of the old lilac;
    t.mesh.material.emissive.copy(t.mesh.material.color); // the WINDOW GLOW takes the tint too (emissive ignores `color`)
    t.mesh.material.emissiveIntensity = 0.38; // lit windows glow, dark glass stays dark — softened 09-24
    t.mesh.material.needsUpdate = true;
  }
  for (const m of edgeMats) m.opacity = 0.35; // keep a whisper of the line frame
}

function skinSky(root, sky) {
  sky.wrapS = THREE.MirroredRepeatWrapping;
  sky.repeat.set(3, 1); // mirrored three times around the ring: no seam
  const ring = new THREE.Mesh(
    new THREE.CylinderGeometry(SKY_R, SKY_R, SKY_H, 96, 1, true),
    new THREE.MeshBasicMaterial({ map: sky, color: 0x9aa4a0, side: THREE.BackSide, fog: false, depthWrite: false }), // greyed so the painted neon sky sits back in charcoal
  );
  ring.position.y = SKY_H * 0.3; // tall enough that its top edge never enters the frame
  ring.renderOrder = -1;
  root.add(ring);
}

function skinGround(root, ground, grid) {
  ground.wrapS = ground.wrapT = THREE.MirroredRepeatWrapping;
  ground.repeat.set(6, 6); // larger, so the street grid reads at city scale between the blocks
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(ARENA_RADIUS * 3, ARENA_RADIUS * 3),
    new THREE.MeshStandardMaterial({ map: ground, emissiveMap: ground, color: 0xa4b3aa, emissive: 0x9fb3a6, emissiveIntensity: 0.45, metalness: 0.5, roughness: 0.3 }), // grey-green over the painted violet floor
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.05;
  root.add(floor);
  grid.material.opacity = 0.15;
  grid.material.transparent = true;
}

export function buildArena(root) {
  const backdrop = buildBackdrop(root, "cyber");
  const grid = new THREE.GridHelper(ARENA_RADIUS * 2.4, 90, 0x35ff6a, 0x143d22); // matrix green floor grid
  root.add(grid);
  const edge = new THREE.Mesh(
    new THREE.CylinderGeometry(ARENA_RADIUS, ARENA_RADIUS, 160, 64, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x35ff6a, wireframe: true, transparent: true, opacity: 0.06 }),
  );
  edge.position.y = 60;
  root.add(edge);
  const { towers, edgeMats } = buildTowers(root);
  const details = buildDetails(root, towers);
  const arena = {
    radius: ARENA_RADIUS,
    grade: 0.3, // light touch of the violet/gold grade — greys and matrix green carry the level now
    bloom: 0.5,
    start: { pos: new THREE.Vector3(0, 28, -ARENA_RADIUS + 40), yaw: 0 },
    rooftops: details.lowrise.roofs,
    backdrop,
    towers,
    rings: buildRings(root),
    haze: new THREE.Color(HAZE),
    fogDensity: 0.0036, // a veil of charcoal haze over the neon
    skyTexture: null,
    /** Resolves once the photoreal art is on (or known missing). */
    ready: Promise.all([loadArt("sky"), loadArt("facade"), loadArt("ground")]).then(([sky, facade, ground]) => {
      if (sky) {
        skinSky(root, greyGreen(sky, 0.55, 1.08)); // the painted neon horizon goes overcast-grey with a green cast
        arena.skyTexture = sky;
        root.traverse((o) => {
          if (o.material?.wireframe && o !== edge) o.visible = false; // the floating wire cubes: line-frame only
        });
      }
      if (facade) {
        const steel = greyGreen(facade, 0.7, 1.12);
        skinTowers(towers, edgeMats, steel);
        skinLowrise(details, steel);
      }
      if (ground) skinGround(root, greyGreen(ground, 0.75, 1.15), grid);
      return { sky: Boolean(sky), facade: Boolean(facade), ground: Boolean(ground) };
    }),
    update(dt, t) {
      backdrop.update(dt, t);
      details.update(dt, t);
      for (const ring of this.rings) {
        ring.obj.rotation.z += dt * 1.5;
        if (ring.taken && (ring.respawn -= dt) <= 0) {
          ring.taken = false;
          ring.obj.visible = true;
        }
      }
    },
    /** Returns the ring the point just flew through, or null. */
    ringHit(pos, reach = 1) { // reach: the garage's PICKUP MAGNET
      for (const ring of this.rings) {
        if (ring.taken) continue;
        const off = pos.clone().sub(ring.obj.position);
        if (off.length() < (RING_R + 0.5) * reach && Math.abs(off.dot(ring.normal)) < 1.6 * reach) {
          ring.taken = true;
          ring.respawn = 20;
          ring.obj.visible = false;
          return ring;
        }
      }
      return null;
    },
    /** The tower a point is inside of, or null. */
    towerAt(pos) {
      return this.towers.find((t) => Math.abs(pos.x - t.x) < t.hw + 0.4 && Math.abs(pos.z - t.z) < t.hd + 0.4 && pos.y < t.h + 0.4) ?? null;
    },
  };
  return arena;
}
