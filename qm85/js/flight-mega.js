// MEGA BLAST — double-tap SPACE (and hold) with a FULL thruster bar. QM85 corkscrews through
// two barrel rolls while a plasma orb charges between his fists, then unloads: a huge beam dead
// ahead plus a nova shockwave. Every invader in the beam or the blast radius is gone; the
// boss takes a heavy chunk.
import * as THREE from "three";
import { sfx } from "./audio.js";
import { segDist } from "./flight-enemies.js";

const SWIRL_TIME = 1.0;
const SWIRL_TURNS = 2;
const BEAM_LEN = 170;
const BEAM_WIDTH = 4;
const NOVA_RADIUS = 45;
const FX_TIME = 0.7;
const BOSS_DAMAGE = 14;
const KILL_SCORE = 150;

const additive = (color) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });

export class MegaBlast {
  constructor(root) {
    this.root = root;
    this.phase = "idle"; // idle | swirl | fx
    this.t = 0;
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 24, 1, true).rotateX(Math.PI / 2).translate(0, 0, 0.5), additive(0xc58bff));
    this.beamCore = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1, 16, 1, true).rotateX(Math.PI / 2).translate(0, 0, 0.5), additive(0xfff4d6));
    this.nova = new THREE.Mesh(new THREE.TorusGeometry(1, 0.08, 8, 64), additive(0xffcf5a));
    this.novaSphere = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), additive(0x9b4dff));
    for (const m of [this.beam, this.beamCore, this.nova, this.novaSphere]) {
      m.visible = false;
      root.add(m);
    }
  }

  get busy() {
    return this.phase !== "idle";
  }

  start() {
    this.phase = "swirl";
    this.t = 0;
    sfx.megaCharge();
  }

  /** ctx: { pilot, pos, forward, swarm, onKill(bot, score), onFire(kills) }. Returns the extra roll angle. */
  update(dt, ctx) {
    if (this.phase === "idle") return 0;
    this.t += dt;
    if (this.phase === "swirl") {
      const k = Math.min(1, this.t / SWIRL_TIME);
      ctx.pilot.setCharge(k);
      if (k >= 1) this.#fire(ctx);
      const ease = k * k * (3 - 2 * k);
      return ease * SWIRL_TURNS * Math.PI * 2;
    }
    this.#animateFx();
    return 0;
  }

  #fire(ctx) {
    this.phase = "fx";
    this.t = 0;
    const from = ctx.pilot.chargeWorld();
    ctx.pilot.setCharge(0);
    const dir = ctx.forward.clone();
    const to = from.clone().addScaledVector(dir, BEAM_LEN);
    const look = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    for (const m of [this.beam, this.beamCore]) {
      m.position.copy(from);
      m.quaternion.copy(look);
      m.visible = true;
    }
    this.nova.position.copy(ctx.pos);
    this.nova.quaternion.copy(look);
    this.novaSphere.position.copy(ctx.pos);
    this.nova.visible = this.novaSphere.visible = true;
    let kills = 0;
    for (const bot of ctx.swarm.alive) {
      const p = bot.obj.position;
      const inBeam = segDist(p, from, to) < BEAM_WIDTH + bot.radius;
      const inNova = p.distanceTo(ctx.pos) < NOVA_RADIUS;
      if (!inBeam && !inNova) continue;
      if (bot.shielded) continue; // FREE OAKLAND: a shielded relay shrugs it off
      if (bot.boss) {
        bot.hp -= BOSS_DAMAGE;
        bot.flash = 0.4;
        if (bot.hp > 0) continue;
      }
      ctx.swarm.kill(bot);
      ctx.onKill(bot, bot.boss ? 2500 : KILL_SCORE);
      kills += 1;
    }
    sfx.megaFire();
    ctx.onFire(kills);
  }

  #animateFx() {
    const k = Math.min(1, this.t / FX_TIME);
    const fade = 1 - k;
    const w = BEAM_WIDTH * (1 - k * 0.6);
    this.beam.scale.set(w, w, BEAM_LEN);
    this.beamCore.scale.set(w * 0.5, w * 0.5, BEAM_LEN);
    const r = 1 + k * NOVA_RADIUS;
    this.nova.scale.set(r, r, r);
    this.novaSphere.scale.setScalar(r * 0.9);
    this.beam.material.opacity = 0.8 * fade;
    this.beamCore.material.opacity = fade;
    this.nova.material.opacity = fade;
    this.novaSphere.material.opacity = 0.25 * fade;
    if (k >= 1) {
      this.phase = "idle";
      for (const m of [this.beam, this.beamCore, this.nova, this.novaSphere]) m.visible = false;
    }
  }
}
