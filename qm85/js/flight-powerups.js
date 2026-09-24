// BLASTER POWER-UPS. Glowing blaster boxes sit on random low rooftops (a light beam marks each one);
// fly through a box — or a gold ring — and QM85's blaster levels up. Taking a hit drops a level.
//   LV1 twin bolts · LV2 faster · LV3 3-way spread · LV4 heavy bolts (2 dmg) · LV5 5-way gold/burnt-orange storm
import * as THREE from "three";
import { sfx } from "./audio.js";
import { merkaba, spinMerkaba } from "./sacred.js";

export const MAX_LEVEL = 5;
const ACTIVE_BOXES = 6;
const PICKUP_RADIUS = 4;
const RESPAWN_AFTER = 6;
const MIN_BOX_Y = 12; // keep boxes above the flight floor
const RIDERS = 4; // Merkabas riding on moving trucks (owner 09-24)

const deg = THREE.MathUtils.degToRad;
const LEVELS = [
  null,
  // owner 09-23: "make his blaster shots bigger on every level" — thick = bolt radius multiplier, len = metres
  { gap: 0.11, spread: [0], dmg: 1, color: 0xd9a8ff, thick: 1.6, len: 2.6 },
  { gap: 0.08, spread: [0], dmg: 1, color: 0xe2b8ff, thick: 2.2, len: 3.0 },
  { gap: 0.08, spread: [-4, 0, 4], dmg: 1, color: 0xffd08a, thick: 2.8, len: 3.4 },
  { gap: 0.075, spread: [-4, 0, 4], dmg: 2, color: 0xffb338, thick: 3.6, len: 3.8 },
  { gap: 0.065, spread: [-8, -4, 0, 4, 8], dmg: 2, color: 0xff8a2a, thick: 4.6, len: 4.4 },
];

export class PowerUps {
  /** spots(): [{x, z, h}] — rooftops to spawn on (the arena may fill these in once the city loads). */
  constructor(root, spots) {
    this.root = root;
    this.spots = spots;
    this.riderSource = null; // () => (() => Vector3) | null — set by zones with traffic
    this.level = 1;
    this.boxes = [];
    this.pending = 0; // boxes waiting to respawn
    this.timers = [];
    const BOLT_R = 0.05;
    this.mats = LEVELS.map((l) => l && new THREE.MeshBasicMaterial({ color: 0xffffff })); // white-hot core
    this.geos = LEVELS.map((l) => l && new THREE.CylinderGeometry(BOLT_R * l.thick, BOLT_R * l.thick, l.len, 8).rotateX(Math.PI / 2));
    // a coloured plasma sheath around the core, so bigger levels read as bigger blasts
    this.glowMats = LEVELS.map((l) => l && new THREE.MeshBasicMaterial({ color: l.color, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.glowGeos = LEVELS.map((l) => l && new THREE.CylinderGeometry(BOLT_R * l.thick * 2.6, BOLT_R * l.thick * 2.6, l.len * 1.15, 10).rotateX(Math.PI / 2));
    this.radii = LEVELS.map((l) => l && BOLT_R * l.thick * 2.6);
    this.beamGeo = new THREE.CylinderGeometry(0.25, 0.6, 40, 8, 1, true).translate(0, 20, 0);
  }

  get config() {
    return LEVELS[this.level];
  }

  bolt() {
    const i = this.level;
    return { geo: this.geos[i], mat: this.mats[i], glowGeo: this.glowGeos[i], glowMat: this.glowMats[i], radius: this.radii[i] };
  }

  /** This level's spread: `dir` rotated about world up by each spread angle. */
  spreadDirs(dir) {
    const up = new THREE.Vector3(0, 1, 0);
    return this.config.spread.map((a) => dir.clone().applyAxisAngle(up, deg(a)));
  }

  levelUp(source) {
    if (this.level < MAX_LEVEL) this.level += 1;
    sfx.powerUp();
    return { level: this.level, source };
  }

  levelDown() {
    this.level = Math.max(1, this.level - 1);
  }

  #spawnOne(rider = false) {
    const follow = rider ? this.riderSource?.() : null;
    if (rider && !follow) return false;
    const spots = rider ? [] : this.spots();
    if (!rider && !spots.length) return false;
    const s = rider ? { x: 0, z: 0, h: 0 } : spots[Math.floor(Math.random() * spots.length)];
    const group = new THREE.Group();
    const star = merkaba(1.8); // the "blaster box" is a Merkaba
    const beam = new THREE.Mesh(this.beamGeo, new THREE.MeshBasicMaterial({
      color: 0xffb338, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    }));
    group.add(star, beam);
    const y = Math.max(s.h + 2.5, MIN_BOX_Y);
    group.position.set(s.x, y, s.z);
    this.root.add(group);
    this.boxes.push({ group, star, base: y, phase: Math.random() * 6, follow });
    return true;
  }

  /** Returns a pickup event {level, source} when he flies through a box this frame. */
  update(dt, t, pos) {
    const riders = this.boxes.filter((b) => b.follow).length;
    while (this.boxes.length - riders + this.pending < ACTIVE_BOXES && this.#spawnOne()) { /* fill the rooftops */ }
    for (let r = riders; r < RIDERS && this.riderSource && this.#spawnOne(true); r++) { /* and the trucks */ }
    this.timers = this.timers.filter((tm) => {
      tm.left -= dt;
      if (tm.left > 0) return true;
      this.pending -= 1;
      return false;
    });
    let event = null;
    for (const b of this.boxes) {
      if (b.follow) {
        const top = b.follow();
        b.group.position.set(top.x, top.y + 1.8 + Math.sin(t * 3 + b.phase) * 0.2, top.z); // riding the truck roof
      } else {
        b.group.position.y = b.base + Math.sin(t * 2 + b.phase) * 0.4;
      }
      spinMerkaba(b.star, t + b.phase);
      if (!event && b.group.position.distanceTo(pos) < PICKUP_RADIUS) {
        b.dead = true;
        this.root.remove(b.group);
        if (!b.follow) { // rooftop boxes wait to respawn; truck riders hop onto another truck right away
          this.pending += 1;
          this.timers.push({ left: RESPAWN_AFTER });
        }
        event = this.levelUp("box");
      }
    }
    this.boxes = this.boxes.filter((b) => !b.dead);
    return event;
  }
}
