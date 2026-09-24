// Evasive combo system for FLIGHT BATTLE.
//   Double-tap a direction (WASD / arrows)      -> TWIRL: barrel roll + quick jink that way, untouchable.
//   Press a DIFFERENT direction while twirling  -> POWER THRUST: a hard burst that way (chainable).
//   ...and land it late in the twirl on a FULL bar -> COSMIC PLASMA STRIKE: QM85 goes super-mode
//      (gold + burnt-orange plasma with black streaks — owner 09-23: offset all the purple) and rockets THROUGH the enemy that way, wrecking
//      everything on the path.
import * as THREE from "three";
import { input } from "./input.js";
import { sfx } from "./audio.js";
import { segDist } from "./flight-enemies.js";

const DIRS = {
  left: ["KeyA", "ArrowLeft"],
  right: ["KeyD", "ArrowRight"],
  // flight-sim mapping, same as the stick: DOWN key jinks up, UP key jinks down
  up: ["KeyS", "ArrowDown"],
  down: ["KeyW", "ArrowUp"],
};
// + spins his top toward screen-right (measured). Left twirls roll left, right twirls roll right.
const ROLL_SIGN = { left: -1, right: 1, up: 1, down: -1 };
const DOUBLE_TAP = 0.28;
const TWIRL_TIME = 0.5;
const SIDE_TWIRL_TIME = 0.64; // left/right rolls turn slower (owner 09-24: "dial back the boosted twirl roll... so the player isn't so dizzy")
const JINK = 14; // m/s sideways kick on a twirl
const SIDE_JINK = 10;
const THRUST = 42; // m/s burst on a direction switch
const SIDE_THRUST = 30; // a sideways reversal shoves less than a vertical one
const IMPULSE_DECAY = 5; // per second
const SIDE_IMPULSE_DECAY = 6.5; // ...and settles sooner
const isSide = (dir) => dir === "left" || dir === "right";
const COMBO_GRACE = 0.25; // switch still counts this long after the twirl ends
const PERFECT_FROM = 0.55; // twirl progress where the PERFECT window opens
const ULTRA_FUEL = 0.97;
const STRIKE_TIME = 0.42;
const STRIKE_REACH = 55; // how far he flies with no target
const STRIKE_OVERSHOOT = 14; // punch out the far side of the target
const STRIKE_RADIUS = 4;
const STRIKE_CONE = Math.cos(THREE.MathUtils.degToRad(55));
const STRIKE_RANGE = 95;
const BOSS_STRIKE_DAMAGE = 10;
const GHOST_EVERY = 0.035;

const shellMat = (color, opacity, additive = true) => new THREE.MeshBasicMaterial({
  color, transparent: true, opacity, depthWrite: false,
  blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, side: THREE.DoubleSide,
});

export class Maneuvers {
  constructor(root, pilotFrame) {
    this.root = root;
    this.lastTap = {};
    this.twirl = null; // { dir, t }
    this.comboDir = null;
    this.comboUntil = -1;
    this.impulse = new THREE.Vector3();
    this.strike = null; // { from, to, t, hit:Set }
    this.fovKick = 0;
    this.ghosts = [];
    this.#buildAura(pilotFrame);
  }

  #buildAura(frame) {
    this.aura = new THREE.Group();
    // A tight violet shell so he stays visible inside it...
    const plasma = new THREE.Mesh(new THREE.SphereGeometry(0.8, 24, 16), shellMat(0xd98a1f, 0.1)); // burnt-orange shell, kept dim so bloom does not blow it out
    const halo = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 16), shellMat(0x7a2e08, 0.05));
    // ...and a trail of violet, gold and BLACK flame streaks behind him (-Z).
    this.flames = [];
    const flameGeo = new THREE.ConeGeometry(0.15, 1.8, 8).rotateX(-Math.PI / 2).translate(0, 0, -1.1);
    const colors = [[0xffb338, true], [0xc4541a, true], [0x000000, false]]; // gold, burnt orange, black
    for (let i = 0; i < 9; i++) {
      const [color, add] = colors[i % 3];
      const f = new THREE.Mesh(flameGeo, shellMat(color, add ? 0.32 : 0.55, add));
      const a = (i / 9) * Math.PI * 2;
      f.position.set(Math.cos(a) * 0.42, Math.sin(a) * 0.42, 0);
      this.aura.add(f);
      this.flames.push(f);
    }
    this.aura.add(plasma, halo);
    this.auraShells = [plasma, halo];
    this.aura.visible = false;
    frame.add(this.aura);
    this.ghostGeo = new THREE.SphereGeometry(0.45, 12, 8);
  }

  get busy() {
    return Boolean(this.strike);
  }

  get untouchable() {
    return Boolean(this.twirl || this.strike);
  }

  /** Roll angle to add to the pilot. */
  get spin() {
    if (!this.twirl) return 0;
    const k = Math.min(1, this.twirl.t / this.twirl.dur);
    return k * k * (3 - 2 * k) * Math.PI * 2 * ROLL_SIGN[this.twirl.dir];
  }

  /**
   * ctx: { t, dt, pos, yaw, fuel, swarm, spendFuel(), onKill(bot, pts), onMove(kind), aimDir(dir) }
   * Returns true while a strike owns his position (normal flight paused).
   */
  update(ctx) {
    const { dt } = ctx;
    this.#readTaps(ctx);
    if (this.twirl) {
      this.twirl.t += dt;
      if (this.twirl.t >= this.twirl.dur) this.twirl = null;
    }
    ctx.pos.addScaledVector(this.impulse, dt);
    this.impulse.multiplyScalar(Math.exp(-(isSide(this.comboDir) ? SIDE_IMPULSE_DECAY : IMPULSE_DECAY) * dt));
    this.fovKick = THREE.MathUtils.damp(this.fovKick, 0, 6, dt);
    this.#updateGhosts(dt);
    return this.#updateStrike(ctx);
  }

  #dirVector(dir, yaw) {
    const right = new THREE.Vector3(-Math.cos(yaw), 0, Math.sin(yaw));
    if (dir === "right") return right;
    if (dir === "left") return right.negate();
    return new THREE.Vector3(0, dir === "up" ? 1 : -1, 0);
  }

  #readTaps(ctx) {
    if (this.strike) return;
    for (const [dir, codes] of Object.entries(DIRS)) {
      if (!input.pressed(...codes)) continue;
      if (ctx.noVertical && (dir === "up" || dir === "down") && !(ctx.t <= this.comboUntil)) continue; // hyper loop owns these
      const inCombo = ctx.t <= this.comboUntil && this.comboDir !== dir;
      if (inCombo) {
        this.#switch(dir, ctx);
      } else if (ctx.t - (this.lastTap[dir] ?? -9) < DOUBLE_TAP) {
        this.#startTwirl(dir, ctx);
        continue; // don't let this tap count toward the next double-tap
      }
      this.lastTap[dir] = ctx.t;
    }
  }

  #startTwirl(dir, ctx) {
    const dur = isSide(dir) ? SIDE_TWIRL_TIME : TWIRL_TIME;
    this.twirl = { dir, t: 0, dur };
    this.comboDir = dir;
    this.comboUntil = ctx.t + dur + COMBO_GRACE;
    this.lastTap[dir] = -9;
    this.impulse.addScaledVector(this.#dirVector(dir, ctx.yaw), isSide(dir) ? SIDE_JINK : JINK);
    sfx.twirl();
    ctx.onMove("twirl");
  }

  #switch(dir, ctx) {
    const progress = this.twirl ? this.twirl.t / this.twirl.dur : 1;
    const perfect = progress >= PERFECT_FROM;
    const vec = this.#dirVector(dir, ctx.yaw);
    this.comboDir = dir;
    this.comboUntil = ctx.t + COMBO_GRACE + 0.2; // chains keep flowing
    if (perfect && ctx.fuel >= ULTRA_FUEL) {
      ctx.spendFuel();
      this.#startStrike(vec, ctx);
      return;
    }
    this.impulse.copy(vec).multiplyScalar(isSide(dir) ? SIDE_THRUST : THRUST);
    this.fovKick = isSide(dir) ? 7 : 12; // a softer lens punch on sideways reversals
    sfx.thrust();
    ctx.onMove(perfect ? "perfect" : "thrust");
  }

  #startStrike(vec, ctx) {
    const from = ctx.pos.clone();
    let best = null;
    let bestD = Infinity;
    for (const bot of ctx.swarm.alive) {
      const to = bot.obj.position.clone().sub(from);
      const d = to.length();
      if (d > STRIKE_RANGE || to.normalize().dot(vec) < STRIKE_CONE) continue;
      if (d < bestD) {
        bestD = d;
        best = bot;
      }
    }
    const dir = best ? best.obj.position.clone().sub(from).normalize() : vec.clone();
    const len = best ? bestD + STRIKE_OVERSHOOT : STRIKE_REACH;
    this.strike = { from, to: from.clone().addScaledVector(dir, len), dir, t: 0, hit: new Set(), ghostT: 0 };
    this.twirl = null;
    this.impulse.set(0, 0, 0);
    this.aura.visible = true;
    this.fovKick = 22;
    sfx.strike();
    ctx.onMove("strike");
    ctx.aimDir(dir);
  }

  #updateStrike(ctx) {
    const s = this.strike;
    if (!s) return false;
    s.t += ctx.dt;
    const k = Math.min(1, s.t / STRIKE_TIME);
    const prev = ctx.pos.clone();
    ctx.pos.lerpVectors(s.from, s.to, 1 - (1 - k) ** 3); // explosive start, easing out
    for (const bot of ctx.swarm.alive) {
      if (s.hit.has(bot) || segDist(bot.obj.position, prev, ctx.pos) > STRIKE_RADIUS + bot.radius) continue;
      s.hit.add(bot);
      if (bot.boss) {
        bot.hp -= BOSS_STRIKE_DAMAGE;
        bot.flash = 0.4;
        if (bot.hp > 0) continue;
      }
      ctx.swarm.kill(bot);
      ctx.onKill(bot, bot.boss ? 2500 : 200);
    }
    s.ghostT -= ctx.dt;
    if (s.ghostT <= 0) {
      s.ghostT = GHOST_EVERY;
      this.#ghost(ctx.pos);
    }
    const pulse = 1 + Math.sin(s.t * 60) * 0.08;
    this.auraShells.forEach((m, i) => m.scale.setScalar(pulse * (1 + i * 0.1)));
    for (const f of this.flames) f.scale.set(1, 1, 0.7 + Math.random() * 0.8);
    if (k >= 1) {
      this.strike = null;
      this.aura.visible = false;
      ctx.onMove("strikeEnd");
    }
    return true;
  }

  #ghost(at) {
    const mesh = new THREE.Mesh(this.ghostGeo, shellMat(this.ghosts.length % 2 ? 0xffb338 : 0xc4541a, 0.2));
    mesh.position.copy(at);
    this.root.add(mesh);
    this.ghosts.push({ mesh, life: 0.25 });
  }

  #updateGhosts(dt) {
    for (const g of this.ghosts) {
      g.life -= dt;
      g.mesh.material.opacity = Math.max(0, g.life / 0.25) * 0.2;
      g.mesh.scale.setScalar(1 + (0.25 - g.life) * 2);
      if (g.life <= 0) {
        this.root.remove(g.mesh);
        g.mesh.material.dispose();
      }
    }
    this.ghosts = this.ghosts.filter((g) => g.life > 0);
  }
}
