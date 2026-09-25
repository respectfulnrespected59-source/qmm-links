// GROUND COMBAT (owner 09-25, "real ground combat"): FIGHT MODE used to be walk + shoot up. Now QM85 brawls:
//   R          PUNCH COMBO — jab, cross, PLASMA UPPERCUT (the third hit launches them). Keep pressing inside the
//              combo window to chain; each punch lunges him forward a step.
//   SHIFT      DODGE ROLL — a quick roll the way you're steering (W forward, S back, A/D sideways); untouchable.
//   R mid-jump GROUND POUND — he slams down and a shockwave rolls out along the street.
//   landing from high up (F from 12 m+) = SUPERHERO LANDING: the same shockwave, for free.
// Every effect here is FLAT on the street (a ring + dust), never a glowing ball: the ground camera is 3.6 m away.
import * as THREE from "three";
import { input } from "./input.js";
import { sfx } from "./audio.js";

// knock = metres the hit shoves them: jab + cross only nudge (so the string stays in reach), the uppercut launches
const COMBO = [
  { kind: "jab", time: 0.22, dmg: 1, reach: 3.4, lunge: 1.0, stop: 0.04, knock: 0.6 },
  { kind: "cross", time: 0.24, dmg: 1, reach: 3.4, lunge: 1.0, stop: 0.05, knock: 0.8 },
  { kind: "uppercut", time: 0.36, dmg: 3, reach: 3.8, lunge: 1.4, stop: 0.09, knock: 4.5, launch: true },
];
const COMBO_WINDOW = 0.45; // after a punch ends, press again within this to chain
const PUNCH_CONE = Math.cos(THREE.MathUtils.degToRad(40));
const PUNCH_HEIGHT = 4; // reaches bots this far above the street (ground squads + hovering drones)
const KNOCKBACK = 3; // shockwaves (pound / landing) shove this far x1.4
const LAUNCH_UP = 5;
const DODGE_TIME = 0.45;
const DODGE_DIST = 7;
const DODGE_COOLDOWN = 0.8;
const POUND_SPEED = 32;
const POUND = { radius: 7, dmg: 3 };
export const HERO_LANDING_FROM = 12; // m above the floor: an F-landing from this high hits like a ground pound
const LANDING = { radius: 9, dmg: 2 };

export class GroundCombat {
  constructor(fight) {
    this.fight = fight;
    this.f = fight.f;
    this.step = 0; // index into COMBO of the NEXT punch
    this.punchT = 0;
    this.windowT = 0;
    this.current = null;
    this.dodgeT = 0;
    this.dodgeCd = 0;
    this.dodgeDir = new THREE.Vector3();
    this.dodgeAxis = "forward";
    this.dodgeSide = 1;
    this.pounding = false;
    this.rings = [];
    this.dustTex = null;
    this.lastWave = null;
    this.stats = { punches: 0, hits: 0, dodges: 0, pounds: 0, landings: 0 };
  }

  get untouchable() {
    return this.dodgeT > 0;
  }

  /** Pose for the pilot: which fist is out and how far, plus the dodge roll. */
  get pose() {
    const k = this.current ? 1 - this.punchT / this.current.time : 0;
    const out = this.current ? Math.sin(Math.min(1, k * 1.4) * Math.PI) : 0;
    const roll = this.dodgeT > 0 ? (1 - this.dodgeT / DODGE_TIME) * Math.PI * 2 : 0;
    return {
      // the punch that is out right now: jab = right fist, cross = left, uppercut = right (step already advanced)
      melee: this.current ? { side: this.step === 2 ? 1 : 0, out, kind: this.current.kind } : null,
      pitch: this.dodgeAxis === "forward" ? -roll : this.dodgeAxis === "back" ? roll : 0,
      bank: this.dodgeAxis === "side" ? roll * this.dodgeSide : 0,
      pounding: this.pounding,
    };
  }

  /** Called each FIGHT MODE frame (after the landing drop). Returns a step vector that REPLACES walking, or null. */
  update(dt) {
    this.windowT = Math.max(0, this.windowT - dt);
    this.dodgeCd = Math.max(0, this.dodgeCd - dt);
    this.#updateRings(dt);
    if (this.dodgeT > 0) return this.#dodging(dt);
    if (input.pressed("ShiftLeft", "ShiftRight") && this.dodgeCd <= 0 && !this.pounding) return this.#startDodge();
    if (input.pressed("KeyR")) {
      if (this.fight.hop > 0.6 && !this.pounding) this.#startPound();
      else if (this.fight.hop === 0 && this.punchT <= 0) this.#punch();
    }
    if (this.punchT > 0) {
      this.punchT = Math.max(0, this.punchT - dt);
      const c = this.current;
      const lunge = this.#forward().multiplyScalar((c.lunge / c.time) * dt);
      if (this.punchT === 0) {
        this.windowT = this.step === 0 ? 0 : COMBO_WINDOW; // the uppercut ends the string
        this.current = null;
      }
      return lunge;
    }
    if (this.windowT === 0 && this.step !== 0) this.step = 0; // the chain went cold
    return null;
  }

  #forward() {
    return new THREE.Vector3(Math.sin(this.f.yaw), 0, Math.cos(this.f.yaw));
  }

  #punch() {
    const move = COMBO[this.step];
    this.current = move;
    this.punchT = move.time;
    this.step = (this.step + 1) % COMBO.length;
    this.stats.punches += 1;
    this.f.pilot.combo?.(COMBO.indexOf(move)); // a VLTRN plays the matching sword cut (3BIZZLE samurai: dual blades)
    sfx.punch(move.kind);
    const hits = this.#hitCone(move); // the hit lands at the start of the swing: it reads better than waiting
    if (hits) {
      this.f.freeze = Math.max(this.f.freeze, move.stop);
      this.f.shake.add(move.launch ? 0.4 : 0.15);
      sfx.impact(move.launch);
    }
  }

  #hitCone(move) {
    const f = this.f;
    const fwd = this.#forward();
    let hits = 0;
    for (const b of f.swarm.alive) {
      if (b.frozen || b.relay) continue;
      const to = b.obj.position.clone().sub(f.pos);
      const up = to.y;
      to.y = 0;
      const d = to.length();
      if (d > move.reach + b.radius || up > PUNCH_HEIGHT || up < -2) continue;
      if (d > 0.4 && to.normalize().dot(fwd) < PUNCH_CONE) continue;
      hits += 1;
      this.stats.hits += 1;
      const at = b.obj.position.clone().lerp(f.pos, 0.35).setY(f.pos.y + 0.4);
      f.sparks.burst(at, fwd.clone().negate(), move.launch ? 1.2 : 0.7);
      this.#damage(b, move.dmg * (this.f.pilot.meleeMult ?? 1));
      if (b.alive) { // knock it back (and up, on the uppercut)
        b.obj.position.addScaledVector(fwd, move.knock);
        if (move.launch && !b.ground) b.obj.position.y += LAUNCH_UP;
      }
    }
    return hits;
  }

  #damage(b, dmg) {
    if (b.shielded) return;
    b.hp -= dmg;
    b.flash = 0.25;
    if (b.hp > 0) return;
    this.f.swarm.kill(b);
    this.f.score += b.score;
  }

  #startDodge() {
    const fwd = this.#forward();
    const left = new THREE.Vector3(fwd.z, 0, -fwd.x);
    if (input.held("KeyA", "ArrowLeft")) {
      this.dodgeDir.copy(left);
      this.dodgeAxis = "side";
      this.dodgeSide = 1;
    } else if (input.held("KeyD", "ArrowRight")) {
      this.dodgeDir.copy(left).negate();
      this.dodgeAxis = "side";
      this.dodgeSide = -1;
    } else if (input.held("KeyS", "ArrowDown")) {
      this.dodgeDir.copy(fwd).negate();
      this.dodgeAxis = "back";
    } else {
      this.dodgeDir.copy(fwd);
      this.dodgeAxis = "forward";
    }
    this.dodgeT = DODGE_TIME;
    this.dodgeCd = DODGE_TIME + DODGE_COOLDOWN;
    this.f.pilot.dodge?.(this.dodgeAxis === "side" ? (this.dodgeSide > 0 ? "left" : "right") : this.dodgeAxis);
    this.current = null;
    this.punchT = 0;
    this.stats.dodges += 1;
    sfx.dodge();
    this.#dust(this.f.pos.clone().setY(this.fight.floorY + 0.05), 6, 0.6);
    return this.#dodging(0);
  }

  #dodging(dt) {
    this.dodgeT = Math.max(0, this.dodgeT - dt);
    return this.dodgeDir.clone().multiplyScalar((DODGE_DIST / DODGE_TIME) * dt);
  }

  #startPound() {
    this.pounding = true;
    this.fight.vy = -POUND_SPEED;
    this.stats.pounds += 1;
    sfx.thrust();
  }

  /** FightMode tells us his feet touched down this frame. */
  landed({ fromHeight = 0, heroLanding = false } = {}) {
    if (this.pounding) {
      this.pounding = false;
      this.#shockwave(POUND, 0xc58bff, "pound");
      return;
    }
    if (heroLanding && fromHeight >= HERO_LANDING_FROM) {
      this.stats.landings += 1;
      this.#shockwave(LANDING, 0xffcf5a, "landing");
    }
  }

  #shockwave({ radius, dmg }, color, kind) {
    const f = this.f;
    const at = f.pos.clone().setY(this.fight.floorY + 0.06);
    let hits = 0;
    for (const b of f.swarm.alive) {
      if (b.frozen || b.relay) continue;
      const to = b.obj.position.clone().sub(at);
      if (to.y > PUNCH_HEIGHT + 2) continue;
      to.y = 0;
      const d = to.length();
      if (d > radius + b.radius) continue;
      hits += 1;
      this.#damage(b, dmg);
      if (b.alive && d > 0.1) b.obj.position.addScaledVector(to.normalize(), KNOCKBACK * 1.4);
    }
    this.#ring(at, radius, color);
    this.#dust(at, 14, 1.1);
    f.shake.add(kind === "landing" ? 0.9 : 0.7);
    f.freeze = Math.max(f.freeze, 0.06);
    sfx.slam(kind === "landing");
    this.lastWave = { kind, hits, radius };
  }

  /** A flat expanding ring on the street + a crack decal that fades. */
  #ring(at, radius, color) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.7, 1, 48).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    ring.position.copy(at);
    this.f.root.add(ring);
    const crack = new THREE.Mesh(new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0x0a0810, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    crack.position.copy(at).setY(at.y - 0.02);
    crack.scale.setScalar(radius * 0.35);
    this.f.root.add(crack);
    this.rings.push({ mesh: ring, life: 0.5, max: 0.5, radius, grow: true });
    this.rings.push({ mesh: crack, life: 2.5, max: 2.5, radius: radius * 0.35, grow: false });
  }

  #dust(at, n, size) {
    if (!this.dustTex) {
      const c = document.createElement("canvas");
      c.width = c.height = 32;
      const g = c.getContext("2d");
      const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(200,190,180,0.9)");
      grad.addColorStop(1, "rgba(200,190,180,0)");
      g.fillStyle = grad;
      g.fillRect(0, 0, 32, 32);
      this.dustTex = new THREE.CanvasTexture(c);
    }
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.dustTex, color: 0x9a948c, transparent: true, opacity: 0.7, depthWrite: false }));
      s.position.copy(at).add(new THREE.Vector3(Math.cos(a) * 0.6, 0.3, Math.sin(a) * 0.6));
      s.scale.setScalar(size);
      this.f.root.add(s);
      this.rings.push({ mesh: s, life: 0.9, max: 0.9, dust: new THREE.Vector3(Math.cos(a), 0.25, Math.sin(a)).multiplyScalar(5 + Math.random() * 3), size });
    }
  }

  #updateRings(dt) {
    for (const r of this.rings) {
      r.life -= dt;
      const k = 1 - Math.max(0, r.life / r.max);
      if (r.dust) {
        r.mesh.position.addScaledVector(r.dust, dt);
        r.dust.multiplyScalar(Math.exp(-dt * 3));
        r.mesh.scale.setScalar(r.size * (1 + k * 2.2));
        r.mesh.material.opacity = 0.7 * (1 - k);
      } else if (r.grow) {
        r.mesh.scale.setScalar(0.5 + r.radius * (1 - (1 - k) ** 3));
        r.mesh.material.opacity = 0.85 * (1 - k);
      } else {
        r.mesh.material.opacity = 0.55 * (1 - k);
      }
      if (r.life <= 0) {
        this.f.root.remove(r.mesh);
        r.mesh.material.dispose();
      }
    }
    this.rings = this.rings.filter((r) => r.life > 0);
  }
}
