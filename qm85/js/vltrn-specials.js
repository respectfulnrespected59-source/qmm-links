// VLTRN SPECIALS (owner 09-25). One per VLTRN on H (or the SPECIAL button) when you fly them:
//   DRONE SWARM    (VLTRN8)  "make mahals VLTRN8 special attack be her drone swarm!!!" — her purple + gold medic drones
//                            deploy round her, HUNT the nearest hostiles for SWARM_TIME s zapping them, then fly home
//   MISSILE CANNON (3BIZZLE) "its my special attack, meaning missles that are supposed to fir off in a 3burst cannon
//                            when my power bars lv2 or more" — fired from flight.js through the real missiles
//   FLAME STRIKE   (3BIZZLE, on foot) "my red flaming plasma sword strike" — the blade ignites and he dashes THROUGH
//                            what's ahead, cutting a burning line (untouchable while he dashes, stopped by walls)
// All skip shielded relays and sleeping towers and pay their kills to the run's score.
import * as THREE from "three";
import { sfx } from "./audio.js";
import { makeGlow } from "./flight-glow.js";

export const SPECIALS = {
  vltrn8: { name: "DRONE SWARM", cooldown: 25 },
  bizzle: { name: "MISSILE CANNON", cooldown: 10, minLevel: 2, foot: { name: "FLAME STRIKE", cooldown: 14 } },
};
export const CANNON = { shots: 3, gap: 0.12 }; // the 3-burst: three heat-seekers, a beat apart
const DRONES = 6;
const SWARM_TIME = 10;
const DEPLOY = 0.6;
const HUNT_RANGE = 90;
const DRONE_SPEED = 42;
const ZAP_EVERY = 0.45;
const ZAP_RANGE = 26;
const DASH_STEP = 2; // m: how finely a flame strike's path is checked for walls
export const STRIKE = { length: 75, time: 0.45, reach: 6, dmg: 6, lockRange: 95, lockCone: Math.cos(THREE.MathUtils.degToRad(35)) };

const additive = (color, opacity) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });

/** A little medic drone off her sheet: gold-trimmed purple body, four spinning rotors, a violet eye, a lotus glow. */
function droneModel() {
  const g = new THREE.Group();
  const purple = new THREE.MeshStandardMaterial({ color: 0x4a1f8a, metalness: 0.7, roughness: 0.3, emissive: 0x2a0f5a, emissiveIntensity: 0.6 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xd4a73a, metalness: 1, roughness: 0.25, emissive: 0x3a2600, emissiveIntensity: 0.5 });
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.1, 12), purple));
  const rotors = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 0.05), gold);
    arm.position.set(Math.cos(a) * 0.22, 0, Math.sin(a) * 0.22);
    arm.rotation.y = -a;
    g.add(arm);
    const rotor = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12).rotateX(-Math.PI / 2), additive(0xe6d2ff, 0.35));
    rotor.position.set(Math.cos(a) * 0.38, 0.05, Math.sin(a) * 0.38);
    g.add(rotor);
    rotors.push(rotor);
  }
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), additive(0xc58bff, 1));
  eye.position.set(0, -0.02, 0.24);
  g.add(eye);
  g.add(makeGlow(0xb56cff, 1.1, 0.4));
  g.userData.spin = (t) => rotors.forEach((r, i) => (r.rotation.y = t * 40 + i));
  return g;
}

function segDistance(p, a, b) {
  const ab = b.clone().sub(a);
  const k = THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / Math.max(ab.lengthSq(), 1e-6), 0, 1);
  return a.clone().addScaledVector(ab, k).distanceTo(p);
}

export class VltrnSpecials {
  /** flight: the FlightBattle (swarm, fx, sparks, score, root, arena). */
  constructor(flight) {
    this.f = flight;
    this.drones = [];
    this.zaps = [];
    this.flames = [];
    this.strikes = []; // live flame strikes: { who: { pos }, from, to, t, hit:Set }
    this.stats = { swarms: 0, zaps: 0, droneKills: 0, strikes: 0, strikeHits: 0 };
  }

  /** Worth hitting: never a shielded relay, a sleeping tower or a scout that hasn't seen anyone yet. */
  #targets() {
    return this.f.swarm.alive.filter((b) => !b.frozen && !b.shielded);
  }

  #hurt(b, dmg) {
    if (!b.alive || b.shielded) return false;
    b.hp -= dmg;
    b.flash = 0.3;
    if (b.hp > 0) return false;
    this.f.swarm.kill(b);
    this.f.score += b.score;
    return true;
  }

  // ------------------------------------------------------------ DRONE SWARM (VLTRN8)
  /** owner: { pos: Vector3 } — whoever launched them (the player or the VLTRN8 wingmate). */
  launchSwarm(owner) {
    this.stats.swarms += 1;
    sfx.droneSwarm();
    for (let i = 0; i < DRONES; i++) {
      const obj = droneModel();
      obj.position.copy(owner.pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.6, 0.6, (Math.random() - 0.5) * 0.6));
      obj.scale.setScalar(1.3);
      this.f.root.add(obj);
      this.drones.push({ obj, owner, t: 0, slot: (i / DRONES) * Math.PI * 2, zapT: Math.random() * ZAP_EVERY, target: null });
    }
  }

  #updateDrones(dt, t) {
    const targets = this.#targets();
    for (const d of this.drones) {
      d.t += dt;
      d.obj.userData.spin(t);
      let goal = d.owner.pos.clone().add(new THREE.Vector3(Math.cos(d.slot + t * 1.6) * 3.2, 1.4 + Math.sin(t * 3 + d.slot) * 0.3, Math.sin(d.slot + t * 1.6) * 3.2));
      if (d.t > DEPLOY && d.t < SWARM_TIME) {
        if (!d.target?.alive) d.target = this.#nearest(targets, d.owner.pos, d.obj.position);
        if (d.target) { // circle the target at zap range and fire
          const tp = d.target.obj.position;
          goal = tp.clone().add(new THREE.Vector3(Math.cos(d.slot + t * 2.4) * 8, 3 + Math.sin(t * 2 + d.slot), Math.sin(d.slot + t * 2.4) * 8));
          d.zapT -= dt;
          if (d.zapT <= 0 && d.obj.position.distanceTo(tp) < ZAP_RANGE) {
            d.zapT = ZAP_EVERY;
            this.#zap(d.obj.position, tp, d.target);
          }
        }
      }
      const step = goal.sub(d.obj.position);
      const len = step.length();
      if (len > 0.01) d.obj.position.addScaledVector(step.divideScalar(len), Math.min(len, DRONE_SPEED * dt));
      d.obj.lookAt(d.target?.alive ? d.target.obj.position : d.owner.pos);
      if ((d.t > SWARM_TIME && d.obj.position.distanceTo(d.owner.pos) < 2.5) || d.t > SWARM_TIME + 4) d.done = true; // home: dissolve
    }
    for (const d of this.drones.filter((x) => x.done)) {
      this.f.sparks.burst(d.obj.position.clone(), new THREE.Vector3(0, 1, 0), 0.3);
      this.f.root.remove(d.obj);
    }
    this.drones = this.drones.filter((d) => !d.done);
  }

  #nearest(targets, owner, from) {
    let best = null;
    let bestD = Infinity;
    for (const b of targets) {
      if (b.obj.position.distanceTo(owner) > HUNT_RANGE) continue;
      const d = b.obj.position.distanceTo(from);
      if (d < bestD) {
        bestD = d;
        best = b;
      }
    }
    return best;
  }

  #zap(from, to, target) {
    this.stats.zaps += 1;
    const geo = new THREE.BufferGeometry().setFromPoints([from.clone(), to.clone()]);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xd9a8ff, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
    line.frustumCulled = false;
    this.f.root.add(line);
    this.zaps.push({ line, life: 0.1 });
    if (this.#hurt(target, 1)) this.stats.droneKills += 1;
    sfx.droneZap();
  }

  // ------------------------------------------------------------ FLAME STRIKE (3BIZZLE)
  /**
   * who: { pos (Vector3, moved by the strike), body (VltrnBody) }. aim: forward. Locks onto the nearest hostile in a
   * cone ahead (so the dash goes THROUGH it), else cuts straight ahead. Returns the strike (its `active` flag).
   */
  flameStrike(who, aim) {
    const from = who.pos.clone();
    const onFoot = Boolean(who.isPlayer && this.f.fight?.active);
    let dir = aim.clone().normalize();
    let best = null;
    let bestD = STRIKE.lockRange;
    for (const b of this.#targets()) {
      const to = b.obj.position.clone().sub(from);
      const d = to.length();
      if (d < bestD && to.normalize().dot(dir) > STRIKE.lockCone) {
        bestD = d;
        best = b;
      }
    }
    if (best) dir = best.obj.position.clone().sub(from).normalize();
    if (onFoot) dir.setY(0).normalize(); // on foot the cut runs down the street, never up into the sky
    const wanted = best ? Math.min(STRIKE.length, bestD + 18) : STRIKE.length; // punch through and out the far side
    const length = this.#clipDash(from, dir, wanted, onFoot);
    const s = { who, from, to: from.clone().addScaledVector(dir, length), dir, t: 0, hit: new Set(), active: true };
    this.strikes.push(s);
    this.stats.strikes += 1;
    who.body?.combo?.(2); // the finisher cut, blade drawn and burning
    sfx.flameStrike();
    return s;
  }

  /** How far a dash can run before the first wall — a building (in the air), or on foot the same rules as walking:
   *  footprints, the arena edge, the roof edge. 09-25 review: an on-foot strike carried 3BIZZLE 75 m through buildings. */
  #clipDash(from, dir, length, onFoot) {
    const a = this.f.arena;
    const roof = onFoot ? this.f.fight.roof : null;
    const p = new THREE.Vector3();
    let clear = 0;
    for (let d = DASH_STEP; d <= length; d += DASH_STEP) {
      p.copy(from).addScaledVector(dir, d);
      const wall = onFoot
        ? Math.hypot(p.x, p.z) >= a.radius || (roof ? a.roofAt?.(p)?.box !== roof : Boolean(a.groundBlocked?.(p)))
        : Boolean(a.towerAt?.(p));
      if (wall) break;
      clear = d;
    }
    return clear;
  }

  get dashing() {
    return this.strikes.some((s) => s.active && s.who.isPlayer);
  }

  #updateStrikes(dt) {
    for (const s of this.strikes) {
      s.t += dt;
      const k = Math.min(1, s.t / STRIKE.time);
      const prev = s.who.pos.clone();
      s.who.pos.lerpVectors(s.from, s.to, 1 - (1 - k) ** 3); // explosive start, easing out
      for (const b of this.#targets()) {
        if (s.hit.has(b) || segDistance(b.obj.position, prev, s.who.pos) > STRIKE.reach + b.radius) continue;
        s.hit.add(b);
        this.stats.strikeHits += 1;
        this.#hurt(b, STRIKE.dmg * (s.who.isPlayer ? this.f.dmgMult ?? 1 : 1.45)); // 3BIZZLE hits the strongest, AI or you
        this.f.fx.explode(b.obj.position.clone(), "shadow", 1.4);
      }
      for (let i = 0; i < 3; i++) this.#flame(prev.clone().lerp(s.who.pos, i / 3));
      if (k >= 1) s.active = false;
    }
    this.strikes = this.strikes.filter((s) => s.active);
    for (const fl of this.flames) {
      fl.life -= dt;
      const k = Math.max(0, fl.life / fl.max);
      fl.s.material.opacity = 0.9 * k;
      fl.s.scale.setScalar(fl.size * (1.6 - k * 0.6));
      fl.s.position.y += dt * 2;
      if (fl.life <= 0) {
        this.f.root.remove(fl.s);
        fl.s.material.dispose();
      }
    }
    this.flames = this.flames.filter((fl) => fl.life > 0);
  }

  /** A burning ember sprite left along the strike line: red-hot core, orange falloff. */
  #flame(at) {
    // never in the lens's face: the camera trails 3 m behind a dashing VLTRN and a near ember floods the screen orange
    if (at.distanceTo(this.f.camera.position) < 8) return;
    const s = makeGlow(Math.random() < 0.5 ? 0xff2b2b : 0xff8a2a, 1, 0.75);
    s.position.copy(at).add(new THREE.Vector3((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8));
    const size = 0.5 + Math.random() * 0.6;
    this.f.root.add(s);
    this.flames.push({ s, life: 0.6, max: 0.6, size });
  }

  update(dt, t) {
    this.#updateDrones(dt, t);
    this.#updateStrikes(dt);
    for (const z of this.zaps) {
      z.life -= dt;
      z.line.material.opacity = Math.max(0, z.life / 0.1);
      if (z.life <= 0) {
        this.f.root.remove(z.line);
        z.line.geometry.dispose();
        z.line.material.dispose();
      }
    }
    this.zaps = this.zaps.filter((z) => z.life > 0);
  }

  dispose() {
    for (const d of this.drones) this.f.root.remove(d.obj);
    for (const z of this.zaps) this.f.root.remove(z.line);
    for (const fl of this.flames) this.f.root.remove(fl.s);
  }
}
