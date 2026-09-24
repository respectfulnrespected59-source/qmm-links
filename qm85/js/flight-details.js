// The life of the flight city: rooftop spires with blinking beacons, gold crowns, light pillars
// firing into the sky, QMM-seal hologram billboards, lanes of flying-car light traffic, and
// drifting haze banks. Everything is cheap (instancing / additive planes) so it holds 60 fps.
import * as THREE from "three";

const TRAFFIC_LANES = 7;
const CARS_PER_LANE = 60;
const PILLAR_EVERY = 6; // every Nth tower fires a light pillar
const BILLBOARD_EVERY = 5;
const HAZE_BANKS = 14;
const BLOCK = 16; // city grid pitch (m); the gap between blocks is the glowing street
const STREET = 5;
const LOWRISE_MAX = 8; // stays under the flight floor (flight.js FLOOR) so it's scenery, not a wall
const CITY_EXTENT = 300;

const rand = (a, b) => a + Math.random() * (b - a);
const glow = (color, opacity) => new THREE.MeshBasicMaterial({
  color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
});

/** A soft round sprite drawn on a canvas — used for beacons and haze. */
function softTexture(inner, outer) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, inner);
  grad.addColorStop(1, outer);
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function rooftops(root, towers) {
  const spireMat = new THREE.MeshStandardMaterial({ color: 0x1a1426, metalness: 0.9, roughness: 0.3 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4a73a, metalness: 1, roughness: 0.25, emissive: 0x3a2a08 });
  const beaconTex = softTexture("rgba(255,255,255,1)", "rgba(255,255,255,0)");
  const beacons = [];
  towers.forEach((t, i) => {
    const h = rand(4, 12);
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.35, h, 8), spireMat);
    spire.position.set(t.x, t.h + h / 2, t.z);
    root.add(spire);
    if (i % 3 === 0) {
      const crown = new THREE.Mesh(new THREE.TorusGeometry(Math.min(t.hw, t.hd) * 0.8, 0.18, 8, 32), goldMat);
      crown.rotation.x = Math.PI / 2;
      crown.position.set(t.x, t.h + 0.6, t.z);
      root.add(crown);
    }
    const beacon = new THREE.Sprite(new THREE.SpriteMaterial({
      map: beaconTex, color: i % 2 ? 0xb57bff : 0xffcf5a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    beacon.position.set(t.x, t.h + h + 0.3, t.z);
    beacon.scale.setScalar(2.2);
    root.add(beacon);
    beacons.push({ sprite: beacon, phase: rand(0, 6), rate: rand(1.2, 2.4) });
  });
  return beacons;
}

function pillars(root, towers) {
  const out = [];
  towers.forEach((t, i) => {
    if (i % PILLAR_EVERY) return;
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.6, 400, 16, 1, true), glow(0xb9a4e8, 0.1)); // pale lavender, not hard violet
    beam.position.set(t.x, t.h + 200, t.z);
    beam.material.fog = false;
    root.add(beam);
    out.push({ beam, phase: rand(0, 6) });
  });
  return out;
}

function billboards(root, towers) {
  const seal = new THREE.TextureLoader().load("assets/art/qmm_seal.png");
  seal.colorSpace = THREE.SRGBColorSpace;
  const out = [];
  towers.forEach((t, i) => {
    if (i % BILLBOARD_EVERY !== 2 || t.h < 35) return;
    const size = Math.min(t.w, 12) * 0.9;
    const mat = new THREE.MeshBasicMaterial({ map: seal, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const face = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    // hang it just off the face that looks toward the arena centre
    const toCentre = Math.atan2(-t.x, -t.z);
    face.rotation.y = toCentre;
    face.position.set(t.x + Math.sin(toCentre) * (t.hd + 0.6), t.h * 0.7, t.z + Math.cos(toCentre) * (t.hd + 0.6));
    root.add(face);
    out.push({ mat, phase: rand(0, 6) });
  });
  return out;
}

function traffic(root) {
  const total = TRAFFIC_LANES * CARS_PER_LANE;
  const geo = new THREE.BoxGeometry(0.35, 0.18, 1.6);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
  const mesh = new THREE.InstancedMesh(geo, mat, total);
  const palette = [new THREE.Color(0xffe2c4), new THREE.Color(0xcdb8f0), new THREE.Color(0xf4f1ea), new THREE.Color(0xf6c9b2)]; // warm-soft traffic
  const lanes = [];
  for (let l = 0; l < TRAFFIC_LANES; l++) {
    lanes.push({ r: rand(40, 190), y: rand(8, 60), speed: rand(0.05, 0.12) * (l % 2 ? 1 : -1), tilt: rand(-0.08, 0.08) });
  }
  const cars = [];
  for (let i = 0; i < total; i++) {
    const lane = lanes[i % TRAFFIC_LANES];
    cars.push({ lane, a: rand(0, Math.PI * 2), jitter: rand(-1.5, 1.5) });
    mesh.setColorAt(i, palette[i % palette.length]);
  }
  mesh.frustumCulled = false;
  root.add(mesh);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const s = new THREE.Vector3(1, 1, 1);
  const p = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  return {
    update(dt) {
      cars.forEach((c, i) => {
        c.a += c.lane.speed * dt;
        const r = c.lane.r + c.jitter;
        p.set(Math.cos(c.a) * r, c.lane.y + Math.sin(c.a * 3) * c.lane.tilt * r * 0.1, Math.sin(c.a) * r);
        q.setFromAxisAngle(up, -c.a + (c.lane.speed > 0 ? 0 : Math.PI)); // nose along the lane
        mesh.setMatrixAt(i, m.compose(p, q, s));
      });
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}

function haze(root) {
  const tex = softTexture("rgba(120,70,200,0.55)", "rgba(40,10,80,0)");
  const banks = [];
  for (let i = 0; i < HAZE_BANKS; i++) {
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: rand(0.25, 0.5), depthWrite: false, blending: THREE.AdditiveBlending });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(rand(90, 170), rand(40, 70)), mat);
    const a = rand(0, Math.PI * 2);
    const r = rand(60, 230);
    plane.position.set(Math.cos(a) * r, rand(70, 115), Math.sin(a) * r);
    plane.rotation.x = -Math.PI / 2 + rand(-0.15, 0.15);
    root.add(plane);
    banks.push({ plane, drift: rand(0.4, 1.2) });
  }
  return banks;
}

/** A real city surface: ~1k instanced low-rise blocks between the streets, skinned later with the facade art. */
function lowrise(root, towers) {
  const cells = [];
  for (let x = -CITY_EXTENT; x <= CITY_EXTENT; x += BLOCK) {
    for (let z = -CITY_EXTENT; z <= CITY_EXTENT; z += BLOCK) {
      if (Math.hypot(x, z) > CITY_EXTENT) continue;
      if (towers.some((t) => Math.abs(x - t.x) < t.hw + BLOCK / 2 && Math.abs(z - t.z) < t.hd + BLOCK / 2)) continue;
      cells.push([x, z]);
    }
  }
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a2440, metalness: 0.5, roughness: 0.45, emissive: 0x0c0618 });
  const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), mat, cells.length);
  const m = new THREE.Matrix4();
  cells.forEach(([x, z], i) => {
    const w = BLOCK - STREET - rand(0, 3);
    const d = BLOCK - STREET - rand(0, 3);
    const h = rand(2, LOWRISE_MAX);
    cells[i] = [x, z, h];
    m.compose(new THREE.Vector3(x, 0, z), new THREE.Quaternion(), new THREE.Vector3(w, h, d));
    mesh.setMatrixAt(i, m);
  });
  mesh.receiveShadow = true;
  root.add(mesh);
  return { mesh, count: cells.length, roofs: cells.map(([x, z, h]) => ({ x, z, h })) };
}

/** Put the photoreal facade on the low-rise too (called once the art loads). */
export function skinLowrise(details, facade) {
  const map = facade.clone();
  map.wrapS = map.wrapT = THREE.MirroredRepeatWrapping;
  map.repeat.set(0.5, 0.25); // a slice of the facade per block, so windows stay building-scale
  map.needsUpdate = true;
  Object.assign(details.lowrise.mesh.material, { map, emissiveMap: map, color: new THREE.Color(0xd9d0e6) });
  details.lowrise.mesh.material.emissive.setHex(0xffffff);
  details.lowrise.mesh.material.emissiveIntensity = 0.45;
  details.lowrise.mesh.material.needsUpdate = true;
}

export function buildDetails(root, towers) {
  const blocks = lowrise(root, towers);
  const beacons = rooftops(root, towers);
  const beams = pillars(root, towers);
  const boards = billboards(root, towers);
  const cars = traffic(root);
  const banks = haze(root);
  return {
    lowrise: blocks,
    update(dt, t) {
      for (const b of beacons) b.sprite.material.opacity = 0.35 + 0.65 * Math.max(0, Math.sin(t * b.rate * Math.PI + b.phase));
      for (const b of beams) b.beam.material.opacity = 0.1 + 0.06 * Math.sin(t * 0.8 + b.phase);
      for (const b of boards) b.mat.opacity = Math.random() < 0.015 ? 0.25 : 0.75 + 0.1 * Math.sin(t * 3 + b.phase); // hologram flicker
      for (const b of banks) b.plane.position.x += b.drift * dt;
      cars.update(dt);
    },
  };
}
