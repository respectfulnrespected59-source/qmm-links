// PALANTÍR HUNTERS (owner 09-25): every occupied district is watched. Two PALANTÍR SCOUTS patrol over it, sweeping
// the streets with searchlights. Stay in a beam (clear line of sight) and the eye fills up — SPOTTED: the district
// wakes and BACKUP arrives in BACKUP_IN seconds unless that scout dies first. Kill a scout before it ever sees you
// = SILENT TAKEDOWN. STEALTH MODE halves how far they can see. Scouts far from QM85 aren't drawn at all.
import * as THREE from "three";
import { FACTIONS } from "./flight-factions.js";
import { sfx } from "./audio.js";
import { beamFade } from "./flight-glow.js";

const SCOUTS_PER_DISTRICT = 2;
const SEE_RANGE = 78;
const CONE_HALF = THREE.MathUtils.degToRad(16);
const CONE_TILT = 0.6; // radians the beam points below the scout's heading
const SWEEP = 0.9; // radians the beam swings each side
const SPOT_TIME = 1.1; // seconds in the beam to be spotted (faster at night)
const CLOSE = 12; // this close he's noticed from any angle
const COOL = 0.45; // suspicion drains per second out of the beam
export const BACKUP_IN = 4;
const BACKUP = { shadow: 2, virus: 2 };
export const SILENT_BONUS = 150;
const DRAW_RANGE = 800; // patrolling scouts beyond this aren't rendered (integrated-GPU draw-call budget)
const PATROL_SPEED = 9;
const COLORS = { calm: new THREE.Color(0x8ff3ff), wary: new THREE.Color(0xffd24a), spotted: new THREE.Color(0xff3040) };

function searchlight() {
  const len = SEE_RANGE;
  const geo = new THREE.ConeGeometry(Math.tan(CONE_HALF) * len, len, 20, 1, true).translate(0, -len / 2, 0).rotateX(-Math.PI / 2); // apex at origin, opens along +Z
  // the cone's apex (the lamp) is its top in geometry space: bright there, fading to nothing at the far end
  const mat = new THREE.MeshBasicMaterial({ color: COLORS.calm, transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, alphaMap: beamFade("top") });
  const pivot = new THREE.Group(); // pivot sweeps (Y) and tilts (X); the cone is fixed inside it
  pivot.add(new THREE.Mesh(geo, mat));
  return { pivot, mat };
}

export class Hunters {
  /** hooks: { onSpotted(name), onBackup(), onCalled(), onSilent(pos) } */
  constructor(flight, districts, hooks) {
    this.f = flight;
    this.districts = districts;
    this.hooks = hooks;
    this.scouts = [];
    this.alarms = []; // { scout, t, district }
    this.stats = { spawned: 0, spotted: 0, silent: 0, backups: 0, called: 0 };
    for (const d of districts.list) if (!d.free) this.#post(d);
    flight.swarm.patrolUpdate = (b, dt, t) => this.#patrol(b, dt, t);
  }

  #post(d) {
    d.scouts = [];
    for (let i = 0; i < SCOUTS_PER_DISTRICT; i++) {
      const [bot] = this.f.swarm.spawnWave(d.ground, { palantir: 1 }, 1, { spread: [60, 110] });
      const light = searchlight();
      bot.obj.add(light.pivot);
      bot.patrol = {
        district: d, light, suspicion: 0, state: "patrol", angle: (i / SCOUTS_PER_DISTRICT) * Math.PI * 2,
        radius: THREE.MathUtils.lerp(55, Math.min(140, d.r * 0.45), Math.random()), height: 42 + Math.random() * 26, sweepPhase: Math.random() * 6,
      };
      bot.fireGap = FACTIONS.palantir.cfg.fireGap.slice();
      d.scouts.push(bot);
      this.scouts.push(bot);
      this.stats.spawned += 1;
    }
  }

  /** Called by the swarm for a patrolling scout instead of its chase logic (no firing while it patrols). */
  #patrol(b, dt, t) {
    const p = b.patrol;
    const d = p.district;
    p.angle += (PATROL_SPEED / p.radius) * dt;
    const goal = new THREE.Vector3(d.ground.x + Math.cos(p.angle) * p.radius, p.height, d.ground.z + Math.sin(p.angle) * p.radius);
    const step = goal.clone().sub(b.obj.position);
    const len = step.length();
    if (len > 0.05) b.obj.position.addScaledVector(step.divideScalar(len), Math.min(len, Math.max(PATROL_SPEED, len) * dt));
    const heading = new THREE.Vector3(-Math.sin(p.angle), 0, Math.cos(p.angle)); // tangent of the circuit
    b.obj.lookAt(b.obj.position.clone().add(heading));
    p.light.pivot.rotation.set(CONE_TILT, Math.sin(t * 0.9 + p.sweepPhase) * SWEEP, 0);
    b.obj.userData.animate?.(t + b.phase);
    b.obj.visible = b.obj.position.distanceTo(this.f.pos) < DRAW_RANGE;
  }

  /** Is QM85 inside this scout's beam with nothing in between? */
  #sees(b) {
    const f = this.f;
    const eye = b.obj.position;
    const to = f.pos.clone().sub(eye);
    const dist = to.length();
    if (dist > SEE_RANGE * (f.stealth ? 0.5 : 1)) return false;
    if (dist > CLOSE) {
      const axis = new THREE.Vector3(0, 0, 1).applyQuaternion(b.patrol.light.pivot.getWorldQuaternion(new THREE.Quaternion()));
      if (to.clone().normalize().dot(axis) < Math.cos(CONE_HALF)) return false;
    }
    for (const k of [0.25, 0.5, 0.75]) if (f.swarm.blocked(eye.clone().lerp(f.pos, k))) return false; // a building in the way
    return true;
  }

  update(dt) {
    const night = this.f.day?.night01 ?? 0;
    for (const b of this.scouts) {
      const p = b.patrol;
      if (!b.alive || !p || p.state !== "patrol") continue;
      if (p.district.free) continue; // its district fell: it just drifts until someone shoots it
      if (b.hp < b.maxHp) { // shot and survived: it knows
        this.#spot(b);
        continue;
      }
      const close = this.f.pos.distanceTo(b.obj.position) < CLOSE;
      p.suspicion = this.#sees(b) ? p.suspicion + (dt / SPOT_TIME) * (1 + night * 0.5) * (close ? 3 : 1) : Math.max(0, p.suspicion - COOL * dt);
      p.light.mat.color.copy(p.suspicion > 0.02 ? COLORS.wary : COLORS.calm);
      p.light.mat.opacity = 0.07 + p.suspicion * 0.18;
      if (p.suspicion >= 1) this.#spot(b);
    }
    for (const a of this.alarms) {
      a.t -= dt;
      if (!a.scout.alive) { // killed before it could call it in
        a.done = true;
        this.stats.called += 1;
        this.hooks.onCalled?.();
        continue;
      }
      if (a.t > 0) continue;
      a.done = true;
      this.stats.backups += 1;
      const made = this.f.swarm.spawnWave(a.scout.obj.position, BACKUP, 1 + this.districts.freed * 0.4, { spread: [50, 80] });
      if (!a.district.free && a.district.bot.shielded) for (const g of made) a.district.guards.push(g); // backup holds the relay shield too
      this.hooks.onBackup?.();
    }
    this.alarms = this.alarms.filter((a) => !a.done);
  }

  #spot(b) {
    const p = b.patrol;
    p.state = "hunt";
    p.suspicion = 1;
    p.light.mat.color.copy(COLORS.spotted);
    p.light.mat.opacity = 0.2;
    p.light.pivot.userData.fade = 0.9; // the beam burns red for a beat, then the scout switches to guns
    b.obj.visible = true;
    b.spotted = p;
    delete b.patrol; // from here the swarm chases with it like any drone
    this.stats.spotted += 1;
    const d = p.district;
    if (!d.free) this.districts.wake(d);
    this.alarms.push({ scout: b, t: BACKUP_IN, district: d });
    sfx.spotted();
    this.hooks.onSpotted?.(d.name);
  }

  /** Fade the red beams of scouts that already spotted him. */
  tick(dt) {
    for (const b of this.scouts) {
      const light = b.spotted?.light;
      if (!light?.pivot.visible) continue;
      light.pivot.userData.fade -= dt;
      if (light.pivot.userData.fade <= 0) light.pivot.visible = false;
    }
  }

  /** FlightBattle routes every kill here: a scout that never saw him is a silent takedown. */
  onKill(bot) {
    if (!bot.patrol || bot.patrol.state !== "patrol") return false;
    this.stats.silent += 1;
    this.f.score += SILENT_BONUS;
    this.hooks.onSilent?.(bot.obj.position.clone());
    return true;
  }

  /** HUD: wary scouts ("?", filling) and the one about to call backup ("!", counting down). */
  markers() {
    const list = [];
    for (const b of this.scouts) {
      if (b.alive && b.patrol && b.patrol.suspicion > 0.05 && b.obj.visible) list.push({ pos: b.obj.position, kind: "?", k: b.patrol.suspicion });
    }
    for (const a of this.alarms) list.push({ pos: a.scout.obj.position, kind: "!", k: a.t / BACKUP_IN, t: a.t });
    return list;
  }
}
