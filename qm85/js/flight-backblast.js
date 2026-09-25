// BACK BLAST (owner 09-24: "when im bein shot from behind... an upright aerial 360 spinning blast where the camera
// pans out and orbits with the bot... only capable when at power lv2 or more... the (b) key for back blast").
// B at BLASTER LV2+: QM85 snaps upright, pirouettes a full 360° firing plasma out in every direction as he turns,
// then finishes with a ring nova. The camera pulls wide and orbits WITH the spin. Untouchable while it runs.
import * as THREE from "three";
import { input } from "./input.js";
import { sfx } from "./audio.js";

const MIN_BLASTER = 2;
const SPIN_TIME = 1.1; // one full turn
const FIRE_EVERY = 0.05; // ~22 volleys around the circle
const COOLDOWN = 5;
const NOVA_RADIUS = 28;
const NOVA_DAMAGE = 3;
const HOVER_SPEED = 5; // he nearly stops to spin

export class BackBlast {
  constructor() {
    this.t = 0;
    this.active = false;
    this.cooldown = 0;
    this.cam = 0; // 0..1 orbit-camera blend, eased
    this.fireT = 0;
  }

  get angle() {
    if (!this.active) return 0;
    const k = Math.min(1, this.t / SPIN_TIME);
    return (k * k * (3 - 2 * k)) * Math.PI * 2; // ease in and out of the turn
  }

  /** B pressed: returns a warning string when refused, true when started, false when nothing happened. */
  listen(f) {
    if (!input.pressed("KeyB")) return false;
    if (this.active || f.fight.active || f.mega.busy || f.hyper.active || f.moves.busy) return false;
    if (f.power.level < MIN_BLASTER) return "BACK BLAST NEEDS BLASTER LV2 — GRAB A MERKABA";
    if (this.cooldown > 0) return `BACK BLAST RECHARGING — ${this.cooldown.toFixed(1)} S`;
    this.active = true;
    this.t = 0;
    this.fireT = 0;
    sfx.megaCharge();
    f.hooks.onMove?.("backblast");
    return true;
  }

  /** Runs every flight frame; while active it owns pitch/speed and fires. fire(dir) spawns one volley. */
  update(dt, f, fire) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.cam = THREE.MathUtils.damp(this.cam, this.active ? 1 : 0, this.active ? 7 : 3.5, dt);
    if (!this.active) return false;
    this.t += dt;
    f.pitch = THREE.MathUtils.damp(f.pitch, 0, 10, dt);
    f.bank = THREE.MathUtils.damp(f.bank, 0, 10, dt);
    f.yawRate = 0;
    f.speed = THREE.MathUtils.damp(f.speed, HOVER_SPEED, 8, dt);
    this.fireT -= dt;
    if (this.fireT <= 0 && this.t < SPIN_TIME) {
      this.fireT = FIRE_EVERY;
      const a = f.yaw + this.angle;
      fire(new THREE.Vector3(Math.sin(a), 0.04, Math.cos(a)).normalize());
    }
    if (this.t >= SPIN_TIME) {
      this.active = false;
      this.cooldown = COOLDOWN;
      this.#nova(f);
    }
    return true;
  }

  /** The finish: a ring of plasma that hits everything close, front AND back. */
  #nova(f) {
    let hits = 0;
    for (const b of f.swarm.bots) {
      if (!b.alive || b.shielded || b.obj.position.distanceTo(f.pos) > NOVA_RADIUS) continue; // a relay's shield eats the nova
      b.hp -= NOVA_DAMAGE;
      b.flash = 0.2;
      hits += 1;
      if (b.hp <= 0) {
        f.score += b.score;
        f.swarm.kill(b);
      }
    }
    f.fx.pulse(f.pos, 0xc58bff, NOVA_RADIUS);
    f.shake.add(0.55);
    sfx.megaFire();
    return hits;
  }
}
