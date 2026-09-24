// FLIGHT BATTLE — QM85 on full thrusters, defending cyberspace (his home world) and Oakland from the invading factions.
// Camera rides behind his right shoulder, low enough to see the soles + thrusters.
// WASD steer · hold SPACE boost · hold SHIFT or L = punch-fired plasma · double-tap SPACE (full bar) = MEGA BLAST.
import * as THREE from "three";
import { input } from "./input.js";
import { sfx } from "./audio.js";
import { buildArena } from "./flight-arena.js";
import { buildOakland } from "./oakland.js";
import { PowerUps } from "./flight-powerups.js";
import { WAVE_LINEUPS, lineupNames, MID_BOSS } from "./flight-factions.js";
import { EnemySwarm } from "./flight-enemies.js";
import { Pilot } from "./flight-pilot.js";
import { MegaBlast } from "./flight-mega.js";
import { Maneuvers } from "./flight-moves.js";
import { FightMode } from "./flight-ground.js";
import { HyperLoop } from "./flight-hyperloop.js";
import { surfaceNormal, ricochet, applyDeflect, Sparks } from "./flight-impact.js";
import { OaklandMission, TOTAL } from "./oakland-mission.js";
import { DayCycle } from "./oakland-day.js";

// Thruster levels (owner 09-24): Seed of Life rings power them up; each level is faster and more nimble.
const THRUSTERS = [null,
  { cruise: 17, boost: 32, agility: 1, response: 1, color: 0xc58bff, name: "LV1" },
  { cruise: 21, boost: 46, agility: 1.3, response: 1.5, color: 0xffb338, name: "LV2" },
  { cruise: 25, boost: 64, agility: 1.7, response: 2.2, color: 0x9fe8ff, name: "LV3" },
];
// Level 3 + a boost started on a FULL bar = STEALTH MODE: stealth-bomber speed with UFO handling.
const STEALTH = { speed: 1.2, agility: 2.4, response: 3.6, bank: 1.25 };
const YAW_RATE = 1.8;
const PITCH_RATE = 1.3;
const PITCH_MAX = 1.05;
const STEER_RESPONSE = 7; // how fast turn/pitch rates ease toward the stick (higher = snappier)
const BANK_MAX = 0.95; // full-rate turn banks ~55 degrees
const FLOOR = 10; // just above the low-rise rooftops (flight-details LOWRISE_MAX)
const CEILING = 110;
const FUEL_DRAIN = 0.32;
const FUEL_REGEN = 0.14;
const LASER_SPEED = 120;
const LASER_LIFE = 0.9;
const AIM_CONE = Math.cos(THREE.MathUtils.degToRad(7));
const MAX_SHIELD = 6;
const INVULN = 0.7;
const SHOULDER = new THREE.Vector3(-0.42, 0.52, -2.15); // behind his right shoulder (his right = -X), feet toward us
const DOUBLE_TAP = 0.3;
const TWIRL_TIME = 0.55; // one stylish barrel roll on a hard dive or climb
const TWIRL_TRIGGER = 0.8; // fraction of max pitch that counts as "hard"
const TWIRL_REARM = 0.45; // level out past this pitch before the next twirl
const MEGA_READY = 0.97;

export class FlightBattle {
  /** hooks: { onWave(n), onBoss(), onHit(), onThrust(lv), onStealth(on), onMission(kind, data), onMode(mode), onMega(kills), onMove(kind), onWin(score), onDeath(score), warn(text) } */
  constructor(scene, camera, hooks, zone = "cyber", opts = {}) {
    this.camera = camera;
    this.hooks = hooks;
    this.root = new THREE.Group();
    scene.add(this.root);
    this.zone = zone;
    this.arena = zone === "oakland" ? buildOakland(this.root) : buildArena(this.root);
    this.power = new PowerUps(this.root, () => this.arena.rooftops);
    this.swarm = new EnemySwarm(this.root);
    this.pilot = new Pilot(this.root);
    this.mega = new MegaBlast(this.root);
    this.moves = new Maneuvers(this.root, this.pilot.frame);
    this.fight = new FightMode(this);
    this.hyper = new HyperLoop(this.root);
    this.sparks = new Sparks(this.root);
    this.impactT = 0; // debounce: one spark shower + clang per contact
    this.blastT = 0; // after a hyper-loop blast, hold the burst speed for a beat
    this.swarm.blocked = (p) => Boolean(this.arena.vehicleAt?.(p) || (p.y < 400 && this.arena.towerAt(p)));
    this.arena.ready.then(() => {
      if (this.arena.truckRider) this.power.riderSource = () => this.arena.truckRider();
    });
    this.mission = null;
    this.day = null;
    this.resume = opts.resume ?? null;
    if (zone === "oakland") {
      this.day = new DayCycle({
        onPhase: (name, clock, jumped) => hooks.onPhase?.(name, clock, jumped),
        onMidBoss: () => {
          this.boss = this.swarm.spawnBoss(this.pos, MID_BOSS);
          hooks.onBoss(this.boss.name);
        },
        onFinalBoss: () => {
          this.boss = this.swarm.spawnBoss(this.pos);
          hooks.onBoss(this.boss.name);
        },
        onCheckpoint: (cp) => hooks.onCheckpoint?.(cp),
        snapshot: () => ({ delivered: this.mission ? { ...this.mission.delivered } : { data: 0, part: 0 }, thrust: this.thrust, blaster: this.power.level, score: this.score }),
      });
      this.arena.ready.then(() => {
        if (this.done) return;
        if (this.resume) { // continue from the checkpoint's time of day with what he'd earned
          this.thrust = this.resume.thrust ?? 1;
          this.power.level = this.resume.blaster ?? 1;
          this.score = this.resume.score ?? 0;
        }
        this.mission = new OaklandMission(this.root, this.arena, this, {
          onPickup: (kind, n) => hooks.onMission?.("pickup", { kind, n }),
          onFull: () => hooks.onMission?.("full"),
          onDeliver: (state) => hooks.onMission?.("deliver", state),
          onBoss: (name) => hooks.onBoss(name),
          onComplete: () => {
            hooks.onMission?.("complete", { score: this.score });
            this.power.level = 5; // the battle body: blasters maxed, shield full
            this.shield = MAX_SHIELD;
          },
        });
        if (this.resume) {
          this.mission.restore(this.resume.delivered);
          this.day.jumpTo(this.resume.phase);
        }
      });
    }
    this.striking = false;
    this.lastTap = -1;
    this.twirlT = 0;
    this.twirlDir = 0;
    this.twirlArmed = true;
    this.fuelAtTap = 0;
    this.lasers = [];
    this.pos = this.arena.start.pos.clone();
    this.vel = new THREE.Vector3();
    this.yaw = this.arena.start.yaw;
    this.pitch = 0;
    this.bank = 0;
    this.yawRate = 0;
    this.pitchRate = 0;
    this.thrust = 1;
    this.boosting = false;
    this.stealth = false;
    this.speed = THRUSTERS[1].cruise;
    this.fuel = 1;
    this.shield = MAX_SHIELD;
    this.invuln = 0;
    this.cooldown = 0;
    this.side = 1;
    this.score = 0;
    this.wave = 0;
    this.boss = null;
    this.done = false;
    this.t = 0;
    this.outWarned = false;
    this.#nextWave();
    this.#placeCamera(1);
  }

  get background() {
    return this.arena.backdrop.background;
  }

  get fog() {
    return new THREE.Fog(0x160a2c, 60, 300);
  }

  center() {
    return this.pos.clone(); // the pilot pivots around his middle
  }

  get thrustBoost() {
    return THRUSTERS[this.thrust].boost;
  }

  forward() {
    const c = Math.cos(this.pitch);
    return new THREE.Vector3(Math.sin(this.yaw) * c, Math.sin(this.pitch), Math.cos(this.yaw) * c);
  }


  #nextWave() {
    this.wave += 1;
    if (this.wave <= WAVE_LINEUPS.length) {
      const lineup = WAVE_LINEUPS[this.wave - 1];
      this.swarm.spawnWave(this.pos, lineup, this.wave);
      this.hooks.onWave(this.wave, lineupNames(lineup));
    } else {
      this.boss = this.swarm.spawnBoss(this.pos);
      this.hooks.onBoss(this.boss.name);
    }
  }

  update(dt) {
    if (this.done) {
      sfx.engine.set({ on: false }); // win / shot down: no thrusters humming under the card
      return;
    }
    this.t += dt;
    this.dt = dt;
    this.#boostState();
    if (this.fight.active) {
      this.fight.update(dt); // FIGHT MODE owns movement, pose and camera
    } else {
      this.hyper.listen(this, this.t);
      if (!this.hyper.update(dt, this)) this.#steer(dt); // the hyper loop owns pitch while it runs
      this.#megaInput();
      this.#combos(dt);
      this.#fly(dt);
      this.fight.tryLand(); // F near the street
    }
    this.#shoot(dt);
    this.#updateLasers(dt);
    this.sparks.update(dt);
    const lvTop = THRUSTERS[this.thrust].boost * STEALTH.speed;
    sfx.engine.set({ on: !this.fight.active && !this.done, speed01: this.speed / lvTop, boosting: this.boosting || this.blastT > 0, level: this.thrust, stealth: this.stealth });
    this.arena.update(dt, this.t);
    this.arena.follow?.(this.pos); // realistic zones keep sun shadows centred on QM85
    if (this.day) {
      this.day.update(dt, { midBossAlive: Boolean(this.boss && !this.boss.final && this.boss.alive) });
      this.swarm.difficulty = this.day.difficulty;
      this.arena.setTime?.({ sunDir: this.day.sunDir, night01: this.day.night01 });
      this.arena.setTraffic?.(this.day.traffic01);
    }
    const dmg = this.swarm.update(dt, this.t, this);
    if (dmg) this.#takeHit(dmg);
    this.#pickups();
    if (!this.fight.active) this.#placeCamera(dt);
    this.mission?.update(dt, this.t);
    this.#progress();
  }

  /** Boost + STEALTH MODE state, decided once per frame before steering. */
  #boostState() {
    const want = input.held("Space") && this.fuel > 0 && !this.mega.busy && !this.fight.active;
    if (want && !this.boosting) this.stealth = this.thrust === 3 && this.fuel >= MEGA_READY; // must START on a full bar
    if (!want && this.stealth) this.hooks.onStealth?.(false);
    else if (want && this.stealth && !this.boosting) this.hooks.onStealth?.(true);
    if (!want) this.stealth = false;
    this.boosting = want;
  }

  #steer(dt) {
    const lv = THRUSTERS[this.thrust];
    const agility = this.stealth ? STEALTH.agility : lv.agility;
    const response = STEER_RESPONSE * (this.stealth ? STEALTH.response : lv.response);
    const turn = (input.held("KeyA", "ArrowLeft") ? 1 : 0) - (input.held("KeyD", "ArrowRight") ? 1 : 0);
    // Flight-sim stick (owner 09-24): UP pushes the nose DOWN (dive), DOWN pulls it UP (climb).
    const climb = (input.held("KeyS", "ArrowDown") ? 1 : 0) - (input.held("KeyW", "ArrowUp") ? 1 : 0);
    // Rates ease in and out, so a tap is a small precise correction and a hold is a full carve.
    const inverted = Math.cos(this.pitch) < 0; // over the top of a loop: keep left/right screen-correct
    this.yawRate = THREE.MathUtils.damp(this.yawRate, (inverted ? -turn : turn) * YAW_RATE * agility, response, dt);
    this.pitchRate = THREE.MathUtils.damp(this.pitchRate, climb * PITCH_RATE * agility, response, dt);
    this.yaw += this.yawRate * dt;
    // Owner 09-24: a held climb goes all the way over — full loops (hold W) and outside loops (hold S).
    this.pitch += this.pitchRate * dt;
    this.pitch = Math.atan2(Math.sin(this.pitch), Math.cos(this.pitch)); // keep in (-π, π]
    if (!climb && Math.abs(this.pitch) < PITCH_MAX) this.pitch = THREE.MathUtils.damp(this.pitch, 0, 0.9, dt); // only near level
    // Bank follows the ACTUAL turn rate (not the key), so it rolls in and out with the carve.
    this.bank = THREE.MathUtils.damp(this.bank, -(this.yawRate / (YAW_RATE * agility)) * BANK_MAX * (this.stealth ? STEALTH.bank : 1), 9 * (this.stealth ? 1.6 : 1), dt);
    this.#twirl(dt, climb);
    const out = Math.hypot(this.pos.x, this.pos.z) > this.arena.radius;
    if (out) {
      const home = Math.atan2(-this.pos.x, -this.pos.z);
      const diff = Math.atan2(Math.sin(home - this.yaw), Math.cos(home - this.yaw));
      this.yaw += Math.sign(diff) * YAW_RATE * 1.4 * dt;
      if (!this.outWarned) this.hooks.warn("EDGE OF THE GRID — TURNING BACK");
    }
    this.outWarned = out;
  }

  /** Double-tap twirls, direction-switch thrusts and the COSMIC PLASMA STRIKE (flight-moves.js). */
  #combos(dt) {
    this.striking = this.moves.update({
      t: this.t, dt, pos: this.pos, yaw: this.yaw, fuel: this.fuel, swarm: this.swarm,
      noVertical: this.thrust >= 2, // past LV1, double-tap ↑/↓ is the HYPER LOOP, not a twirl
      spendFuel: () => (this.fuel = 0),
      onKill: (_bot, points) => (this.score += points),
      onMove: (kind) => this.hooks.onMove(kind),
      aimDir: (dir) => {
        this.yaw = Math.atan2(dir.x, dir.z);
        this.pitch = THREE.MathUtils.clamp(Math.asin(dir.y), -PITCH_MAX, PITCH_MAX);
      },
    });
  }

  /** Hard dive or hard climb = a quick evasive barrel roll (dives roll one way, climbs the other). */
  #twirl(dt, climb) {
    this.twirlT = Math.max(0, this.twirlT - dt);
    if (Math.abs(this.pitch) < PITCH_MAX * TWIRL_REARM) this.twirlArmed = true;
    const hard = climb !== 0 && Math.sign(this.pitch) === climb && Math.abs(this.pitch) > PITCH_MAX * TWIRL_TRIGGER;
    if (!hard || !this.twirlArmed || this.twirlT > 0 || this.mega.busy) return;
    this.twirlArmed = false;
    this.twirlT = TWIRL_TIME;
    this.twirlDir = climb;
    sfx.twirl();
  }

  get twirlAngle() {
    if (this.twirlT <= 0) return 0;
    const k = 1 - this.twirlT / TWIRL_TIME;
    return k * k * (3 - 2 * k) * Math.PI * 2 * this.twirlDir;
  }

  /** Double-tap SPACE with a full bar (measured at the first tap) = MEGA BLAST. */
  #megaInput() {
    if (!input.pressed("Space")) return;
    if (this.t - this.lastTap > DOUBLE_TAP) {
      this.lastTap = this.t;
      this.fuelAtTap = this.fuel;
      return;
    }
    this.lastTap = -1;
    if (this.mega.busy) return;
    if (this.fuelAtTap < MEGA_READY) {
      this.hooks.warn("MEGA BLAST NEEDS A FULL THRUSTER BAR");
      return;
    }
    this.fuel = 0;
    this.mega.start();
  }

  #fly(dt) {
    const boosting = this.boosting;
    const lv = THRUSTERS[this.thrust];
    const drain = FUEL_DRAIN / (1 + 0.3 * (this.thrust - 1)); // bigger levels, bigger tank
    this.fuel = boosting ? Math.max(0, this.fuel - drain * dt) : Math.min(1, this.fuel + FUEL_REGEN * dt);
    const top = boosting ? lv.boost * (this.stealth ? STEALTH.speed : 1) : lv.cruise;
    this.blastT = Math.max(0, this.blastT - dt);
    if (this.blastT === 0) this.speed = THREE.MathUtils.damp(this.speed, top, this.stealth ? 5 : 3, dt);
    applyDeflect(this, dt); // an impact eases him off course over a third of a second
    this.vel.copy(this.forward()).multiplyScalar(this.speed);
    const prev = this.pos.clone();
    if (!this.striking) this.pos.addScaledVector(this.vel, dt); // the strike owns his position
    const floor = this.arena.floor ?? FLOOR;
    this.impactT = Math.max(0, this.impactT - dt);
    if (this.pos.y < floor) {
      const diving = Math.sin(this.pitch) < -0.25 && Math.cos(this.pitch) > 0;
      if (diving) { // struck the street nose-down: skip off it in a shower of sparks
        this.#impact(new THREE.Vector3(0, 1, 0), prev, this.pos.clone().setY(floor - 0.4));
      } else if (Math.sin(this.pitch) < 0.15) {
        this.pitch = Math.cos(this.pitch) >= 0 ? 0.15 : Math.PI - 0.15; // shallow: just level off, upright or inverted
      }
      this.pos.y = Math.max(this.pos.y, floor);
    }
    this.pos.y = Math.min(this.pos.y, this.arena.ceiling ?? CEILING); // each zone sets its own sky limit
    // Collisions never teleport him (owner 09-24): onto a roof he SKIMS it; into a wall or a vehicle's side he
    // RICOCHETS off with sparks (flight-impact.js) — only a near head-on crash costs shield.
    const solid = this.arena.vehicleAt?.(this.pos) ?? this.arena.towerAt(this.pos);
    if (solid) {
      const top = solid.top ?? solid.h;
      if (prev.y >= top - 0.3) {
        this.pos.y = top + 0.9; // roof skim: slide across the top
        if (Math.sin(this.pitch) < 0) this.pitch *= 0.5;
      } else {
        const n = surfaceNormal(solid, prev);
        this.#impact(n, prev, prev.clone().addScaledVector(n, -0.3));
      }
    }
    const spin = this.mega.update(dt, {
      pilot: this.pilot,
      pos: this.pos,
      forward: this.forward(),
      swarm: this.swarm,
      onKill: (_bot, points) => (this.score += points),
      onFire: (kills) => this.hooks.onMega(kills),
    });
    this.pilot.update(dt, {
      pos: this.pos, yaw: this.yaw, pitch: this.pitch, bank: this.bank, boosting: boosting || this.mega.busy,
      thrustColor: this.stealth ? 0xffffff : lv.color, stealth: this.stealth,
      spin: spin + this.twirlAngle + this.moves.spin, t: this.t, blink: this.invuln > 0 && Math.floor(this.invuln * 14) % 2 === 1,
    });
    this.invuln = Math.max(0, this.invuln - dt);
  }

  /** Ricochet + sparks + clang; damage only when it was near head-on. */
  #impact(normal, prev, contact) {
    const { headOn } = ricochet(this, normal, prev);
    if (this.impactT > 0) return;
    this.impactT = 0.4;
    this.sparks.burst(contact, normal, headOn ? 1.4 : 0.8);
    sfx.clang(headOn);
    if (headOn) this.#takeHit(1);
  }

  #shoot(dt) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.mega.busy || this.cooldown > 0) return;
    if (!input.held("ShiftLeft", "ShiftRight", "KeyL", "Mouse0")) return; // F is the flight/FIGHT switch now
    const cfg = this.power.config;
    this.cooldown = cfg.gap;
    this.side = 1 - Math.max(0, this.side); // alternate fists: 0 = right, 1 = left
    const fwd = this.forward();
    const from = this.pilot.punch(this.side);
    const target = this.swarm.aimTarget(this.pos, fwd, AIM_CONE);
    const aim = this.fight.active ? this.fight.aim(from) : target ? target.obj.position.clone().sub(from).normalize() : fwd;
    const { geo, mat, glowGeo, glowMat, radius } = this.power.bolt();
    for (const dir of this.power.spreadDirs(aim)) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.add(new THREE.Mesh(glowGeo, glowMat));
      mesh.position.copy(from);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
      this.root.add(mesh);
      this.lasers.push({ mesh, dir, life: LASER_LIFE, dmg: cfg.dmg, r: radius });
    }
    sfx.laser(this.power.level);
  }

  #updateLasers(dt) {
    for (const l of this.lasers) {
      const prev = l.mesh.position.clone();
      l.mesh.position.addScaledVector(l.dir, LASER_SPEED * dt);
      l.life -= dt;
      const hit = this.swarm.hitTest(prev, l.mesh.position, l.dmg, l.r);
      if (hit) {
        l.life = 0;
        if (!hit.alive) this.score += hit.score;
      }
      if (l.life <= 0) this.root.remove(l.mesh);
    }
    this.lasers = this.lasers.filter((l) => l.life > 0);
  }

  #takeHit(n) {
    if (this.invuln > 0 || this.mega.busy || this.hyper.active || this.moves.untouchable || this.twirlT > TWIRL_TIME * 0.2) return; // untouchable mid move
    this.shield -= n;
    this.invuln = INVULN;
    this.power.levelDown();
    sfx.hurt();
    this.hooks.onHit();
    if (this.shield <= 0) {
      this.done = true;
      this.hooks.onDeath(this.score);
    }
  }

  #pickups() {
    const box = this.power.update(this.dt, this.t, this.center());
    if (box) this.hooks.onPower(box);
    if (!this.arena.ringHit(this.center())) return;
    if (this.thrust < 3) this.thrust += 1; // rings power the THRUSTERS (Merkabas power the blasters)
    this.hooks.onThrust?.(this.thrust);
    sfx.powerUp();
    this.fuel = 1;
    this.shield = Math.min(MAX_SHIELD, this.shield + 1);
    this.score += 50;
  }

  #progress() {
    if (this.zone === "oakland") { // Oakland is won at NIGHT: the Serpent Priest goes down
      if (this.boss?.final && !this.boss.alive && !this.done) {
        this.done = true;
        this.hooks.onWin(this.score);
      }
      return;
    }
    if (this.done || this.swarm.alive.length) return;
    if (this.boss) {
      this.done = true;
      this.hooks.onWin(this.score);
      return;
    }
    this.#nextWave();
  }

  #placeCamera(dt) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-this.pitch, this.yaw, this.bank * 0.25, "YXZ")); // full pitch: stays behind him through a loop
    const drift = this.hyper.cam; // hyper loop: QM3D-Racing-style drift cam — pulls wide, swings out, lags behind
    const pull = this.moves.busy ? 2.4 : 1 + drift * 0.9; // widen out so the whole comet / loop reads
    const offset = SHOULDER.clone().multiplyScalar(pull).add(new THREE.Vector3(-drift * 2.0, drift * 0.8, 0));
    const want = this.pos.clone().add(offset.applyQuaternion(q));
    want.y = Math.max(want.y, (this.arena.floor ?? 0) - 1.2); // never dip under the street and see the sky through it
    this.camera.position.lerp(want, 1 - Math.exp(-dt * (14 - drift * 9)));
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
    const ahead = this.pos.clone().addScaledVector(this.forward(), 30).addScaledVector(up, 0.6);
    const look = ahead.lerp(this.pos, drift * 0.9); // drift cam watches HIM through the loop, not the sky ahead
    this.camera.up.lerp(up, 1 - Math.exp(-dt * 10)).normalize(); // roll with him — no flip at the top of a loop
    this.camera.lookAt(look);
    this.stealthFov = THREE.MathUtils.damp(this.stealthFov ?? 0, this.stealth ? 14 : this.boosting ? 4 * this.thrust : 0, 4, dt);
    this.camera.fov = 70 + this.moves.fovKick + this.stealthFov + drift * 8;
    this.camera.updateProjectionMatrix();
  }

  /** Screen-space helpers for the HUD. */
  reticleWorld() {
    return this.pos.clone().addScaledVector(this.forward(), 40);
  }

  nearestBot() {
    let best = null;
    let d = Infinity;
    for (const b of this.swarm.alive) {
      const dist = b.obj.position.distanceTo(this.pos);
      if (dist < d) {
        d = dist;
        best = b;
      }
    }
    return best;
  }

  get stats() {
    return {
      wave: Math.min(this.wave, WAVE_LINEUPS.length),
      bossName: this.boss?.name ?? "",
      boss: Boolean(this.boss),
      bossHp: this.boss ? Math.max(0, this.boss.hp / this.boss.maxHp) : 0,
      left: this.swarm.alive.length,
      score: this.score,
      shield: this.shield,
      maxShield: MAX_SHIELD,
      fuel: this.fuel,
      blaster: this.power.level,
      thrust: this.thrust,
      stealth: this.stealth,
      megaReady: this.fuel >= MEGA_READY && !this.mega.busy,
      onFoot: this.fight.active,
      canLand: this.fight.canLand,
      landOnRoof: this.fight.landOnRoof,
      altitude: this.pos.y,
      day: this.day && { phase: this.day.phase, clock: this.day.clock, night: this.day.night01 },
      mission: this.mission && {
        data: this.mission.delivered.data, part: this.mission.delivered.part, total: TOTAL,
        carrying: this.mission.carrying.length, progress: this.mission.progress,
      },
    };
  }

  dispose(scene) {
    sfx.engine.set({ on: false });
    scene.remove(this.root);
  }
}
