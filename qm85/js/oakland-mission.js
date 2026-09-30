// OAKLAND MISSION (owner 09-24): "grab information, and his robo battle parts, and bring them to the QMM
// warehouse, so he has to be able to land and walk to the warehouse... even have a little battle on the ground
// as the game gets more difficult". Rob & Mahal wait at the warehouse door — QM85's crew.
//   DATA DRIVES (violet) + BATTLE PARTS (gold) sit on real Oakland streets under tall light beams.
//   Pick-up and delivery happen ON FOOT only (F to land). Carry up to 3.
//   Every delivery sends a bigger ground squad; near the end the Serpent Priest comes for the body.
import * as THREE from "three";
import { spawn } from "./assets.js";
import { sfx } from "./audio.js";
import { plateMaterial, goldMaterial, emberMaterial, chevronGeometry } from "./armor-parts.js";

export const WAREHOUSE = { x: -200, z: 700, yaw: Math.PI, hw: 23, hd: 16, h: 17, clear: 55 }; // door faces downtown (-Z)
const DOOR = new THREE.Vector3(-200, 0.5, 680);
const DOOR_RADIUS = 7;
const PER_KIND = 5;
export const TOTAL = PER_KIND * 2;
const CARRY_MAX = 3;
const PICK_RADIUS = 3;
const SPAWN_MIN = 140;
const SPAWN_MAX = 1000;
const AIR_TOPUP_EVERY = 14;

const rand = (a, b) => a + Math.random() * (b - a);
const glow = (color, opacity = 1) => new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, depthWrite: opacity >= 1 });

export function dataDrive() {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.35, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x1a1030, metalness: 0.8, roughness: 0.25, emissive: 0x6a2cc8, emissiveIntensity: 0.5 })));
  for (let i = 0; i < 5; i++) {
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 0.04), glow(0xc58bff));
    line.position.set(0, 0.18, -0.3 + i * 0.15);
    g.add(line);
  }
  const chip = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.3), glow(0xffcf5a));
  chip.position.y = 0.2;
  g.add(chip);
  return g;
}

/** A BATTLE PART: an armour plate like the ones that bolt onto him — gunmetal chevron, gold rim, a smaller plate
 *  layered on top, an ember slit (owner 09-30: "edgy, dangerous looking" — and "NO SPIKES"). */
export function battlePart() {
  const g = new THREE.Group();
  const gold = goldMaterial(0.6);
  g.add(new THREE.Mesh(chevronGeometry(1.2, 0.5, 0.18, 0.12), plateMaterial()));
  const rim = new THREE.Mesh(chevronGeometry(1.32, 0.56, 0.2, 0.06), gold);
  rim.position.z = -0.06;
  g.add(rim);
  const upper = new THREE.Mesh(chevronGeometry(0.72, 0.26, 0.11, 0.08), plateMaterial());
  upper.position.set(0, 0.16, 0.08);
  g.add(upper);
  const slit = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.02), emberMaterial(0.95));
  slit.position.set(0, -0.08, 0.08);
  g.add(slit);
  return g;
}

function beam(color) {
  return new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.6, 90, 12, 1, true).translate(0, 45, 0),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
}

export class OaklandMission {
  /**
   * hooks: { onPickup(kind, carrying), onDeliver(state), onFull(), onBoss(name), onComplete() }
   * districts (FREE OAKLAND, 09-25): each relay hoards its district's items — they stay locked until it falls.
   */
  constructor(root, arena, flight, hooks, districts = null) {
    this.root = root;
    this.arena = arena;
    this.f = flight;
    this.hooks = hooks;
    this.districts = districts;
    this.items = [];
    this.carrying = [];
    this.delivered = { data: 0, part: 0 };
    this.airTimer = AIR_TOPUP_EVERY;
    this.fullWarned = 0;
    this.done = false;
    this.#crew();
    if (districts) this.#stash(districts);
    else this.#scatter();
  }

  #addItem(kind, pos, extra = {}) {
    const obj = kind === "data" ? dataDrive() : battlePart();
    obj.position.copy(pos);
    const pillar = beam(kind === "data" ? 0x9b4dff : 0xffb338);
    pillar.position.set(pos.x, 0, pos.z);
    this.root.add(obj, pillar);
    const it = { kind, obj, pillar, pos, taken: false, phase: rand(0, 6), ...extra };
    obj.visible = pillar.visible = !it.locked;
    this.items.push(it);
    return it;
  }

  /** FREE OAKLAND: one item per kind each district lists, hidden and locked at its relay. */
  #stash(districts) {
    for (const d of districts.list) {
      for (const kind of d.items) this.#addItem(kind, d.ground.clone().setY(1), { locked: true, district: d.id });
    }
  }

  /** A district fell: its items spill out around the relay's plinth, on open street. */
  unlock(district) {
    const mine = this.items.filter((it) => it.district === district.id && it.locked);
    mine.forEach((it, i) => {
      for (let tries = 0; tries < 24; tries++) {
        const a = (i / Math.max(1, mine.length)) * Math.PI * 2 + tries * 0.7;
        const r = 10 + tries * 0.8;
        const p = new THREE.Vector3(district.ground.x + Math.cos(a) * r, 1, district.ground.z + Math.sin(a) * r);
        if (this.arena.groundBlocked(p) || this.arena.isWater(p.x, p.z)) continue;
        it.pos.copy(p);
        break;
      }
      it.locked = false;
      it.obj.position.copy(it.pos);
      it.pillar.position.set(it.pos.x, 0, it.pos.z);
      it.obj.visible = it.pillar.visible = !it.taken;
    });
  }

  get total() {
    return this.delivered.data + this.delivered.part;
  }

  get progress() {
    return this.total / TOTAL;
  }

  /** Rob & Mahal at the door, facing the street. */
  #crew() {
    this.crew = []; // the finale makes them cheer
    for (const [name, dx] of [["rob", -9], ["mahal", 9]]) { // the humans are the crew; their VLTRNs fight
      const who = spawn(name);
      who.position.set(DOOR.x + dx, 0, DOOR.z - 3);
      who.rotation.y = Math.PI; // face downtown (-Z)
      who.traverse((o) => {
        if (o.isMesh) o.castShadow = true;
      });
      this.root.add(who);
      this.crew.push(who);
    }
    this.doorGlow = new THREE.Mesh(new THREE.TorusGeometry(DOOR_RADIUS, 0.18, 8, 48), glow(0xffcf5a, 0.8));
    this.doorGlow.rotation.x = Math.PI / 2;
    this.doorGlow.position.set(DOOR.x, 0.2, DOOR.z);
    this.root.add(this.doorGlow);
  }

  /** Items on real streets: road points in a ring around the warehouse, on dry, open ground. */
  #scatter() {
    const roads = this.arena.roads ?? [];
    const kinds = [...Array(PER_KIND).fill("data"), ...Array(PER_KIND).fill("part")];
    for (let tries = 0; kinds.length && tries < 6000; tries++) {
      const r = roads[Math.floor(Math.random() * roads.length)];
      if (!r || r.p.length < 2) continue;
      const i = Math.floor(Math.random() * (r.p.length - 1));
      const k = Math.random();
      const x = r.p[i][0] + (r.p[i + 1][0] - r.p[i][0]) * k;
      const z = r.p[i][1] + (r.p[i + 1][1] - r.p[i][1]) * k;
      const d = Math.hypot(x - DOOR.x, z - DOOR.z);
      if (d < SPAWN_MIN || d > SPAWN_MAX) continue;
      const pos = new THREE.Vector3(x, 1, z);
      if (this.arena.groundBlocked(pos) || this.arena.isWater(x, z)) continue;
      if (this.items.some((it) => it.pos.distanceTo(pos) < 120)) continue; // spread them out
      const kind = kinds.pop();
      const obj = kind === "data" ? dataDrive() : battlePart();
      obj.position.copy(pos);
      const pillar = beam(kind === "data" ? 0x9b4dff : 0xffb338);
      pillar.position.set(x, 0, z);
      this.root.add(obj, pillar);
      this.items.push({ kind, obj, pillar, pos, taken: false, phase: rand(0, 6) });
    }
  }

  /** Where the HUD arrow points: the warehouse door when carrying (and it's closer or he's full), else the nearest item. */
  waypoint() {
    return this.target().pos;
  }

  /** Where the gold arrow points, and what to call it on screen (09-25: the arrow names its target). */
  target() {
    let best = null;
    let d = Infinity;
    for (const it of this.items) {
      if (it.taken || it.locked) continue;
      const dist = it.pos.distanceTo(this.f.pos);
      if (dist < d) {
        d = dist;
        best = it;
      }
    }
    const home = { pos: DOOR, label: "WAREHOUSE" };
    if (!best && !this.carrying.length && this.districts) { // go free the next district
      const relay = this.districts.nextRelay(this.f.pos);
      return relay ? { pos: relay, label: "RELAY" } : home;
    }
    if (!best || this.carrying.length >= CARRY_MAX) return home;
    if (this.carrying.length && DOOR.distanceTo(this.f.pos) < d) return home;
    return { pos: best.pos, label: best.kind === "data" ? "DATA DRIVE" : "BATTLE PART" };
  }

  update(dt, t) {
    if (this.done) return;
    const f = this.f;
    const onFoot = f.fight.active && f.fight.landing === 0;
    this.fullWarned = Math.max(0, this.fullWarned - dt);
    for (const it of this.items) {
      if (it.taken || it.locked) continue;
      it.obj.rotation.y = t * 1.5 + it.phase;
      it.obj.position.y = 1 + Math.sin(t * 2 + it.phase) * 0.25;
      if (!onFoot || Math.hypot(it.pos.x - f.pos.x, it.pos.z - f.pos.z) > PICK_RADIUS * (f.magnet ?? 1)) continue;
      if (this.carrying.length >= CARRY_MAX) {
        if (!this.fullWarned) this.hooks.onFull();
        this.fullWarned = 3;
        continue;
      }
      it.taken = true;
      it.obj.visible = it.pillar.visible = false;
      this.carrying.push(it.kind);
      sfx.orb();
      this.hooks.onPickup(it.kind, this.carrying.length);
    }
    this.doorGlow.material.opacity = this.carrying.length ? 0.5 + 0.4 * Math.sin(t * 6) : 0.35;
    if (onFoot && this.carrying.length && Math.hypot(DOOR.x - f.pos.x, DOOR.z - f.pos.z) < DOOR_RADIUS) this.#deliver();
    this.#airPressure(dt);
  }

  #deliver() {
    for (const kind of this.carrying) this.delivered[kind] += 1;
    this.carrying = [];
    sfx.gate();
    this.hooks.onDeliver({ ...this.delivered, total: this.total, progress: this.progress });
    if (this.total >= TOTAL) {
      this.done = true;
      this.hooks.onComplete();
      return;
    }
    // the ground gets hotter with every delivery (bosses come with the clock — oakland-day.js)
    const n = this.total;
    this.f.swarm.spawnGround(this.f.pos, { acolyte: 1 + Math.floor(n / 2), virus: 1 + Math.floor(n / 3) }, n);
  }

  /** Continue from a save: N of each kind already delivered, and what he was carrying (09-30: PAUSE & SAVE mid-run). */
  restore(delivered, carrying = []) {
    // unlocked (freed-district) items count first, so a restored run never re-hides what was already won
    const order = [...this.items].sort((a, b) => Number(Boolean(a.locked)) - Number(Boolean(b.locked)));
    const take = (kind) => {
      const it = order.find((o) => o.kind === kind && !o.taken);
      if (!it) return false;
      it.taken = true;
      it.obj.visible = it.pillar.visible = false;
      return true;
    };
    for (const kind of ["data", "part"]) {
      for (let n = delivered?.[kind] ?? 0; n > 0 && take(kind); n--) this.delivered[kind] += 1;
    }
    for (const kind of carrying.slice(0, CARRY_MAX)) if (take(kind)) this.carrying.push(kind);
    if (this.total >= TOTAL) this.done = true;
  }

  /** Keep the sky contested: top the air patrol up as the mission advances — and as the day gets late. */
  #airPressure(dt) {
    this.airTimer -= dt;
    if (this.airTimer > 0) return;
    this.airTimer = AIR_TOPUP_EVERY;
    const late = (this.f.day?.difficulty ?? 1) - 1; // 0 dawn → 1.4 night
    const airborne = this.f.swarm.alive.filter((b) => !b.ground && !b.boss && !b.patrol).length; // patrolling scouts aren't the air fight
    if (airborne >= 3 + this.total + Math.round(late * 4)) return;
    const lineup = { palantir: 1 + Math.floor(this.total / 3) + Math.round(late), virus: 1 };
    if (this.total >= 3 || late > 0.4) lineup.shadow = 1 + Math.floor(late);
    if (late > 1) lineup.acolyte = 1;
    this.f.swarm.spawnWave(this.f.pos, lineup, 1 + this.total / 3);
  }
}
