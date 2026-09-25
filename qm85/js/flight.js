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
import { Pilot, PILOT_LOOKS } from "./flight-pilot.js";
import { MegaBlast } from "./flight-mega.js";
import { Maneuvers } from "./flight-moves.js";
import { Missiles } from "./flight-missiles.js";
import { FightMode } from "./flight-ground.js";
import { HyperLoop } from "./flight-hyperloop.js";
import { surfaceNormal, ricochet, applyDeflect, Sparks } from "./flight-impact.js";
import { OaklandMission, TOTAL } from "./oakland-mission.js";
import { DayCycle } from "./oakland-day.js";
import { KillFX, Shake } from "./flight-fx.js";
import { BackBlast } from "./flight-backblast.js";
import { Wake } from "./flight-wake.js";
import { Finale, applyBattleBody, setArmorProgress } from "./battle-body.js";
import { disposeTree, disposeTexture } from "./dispose.js";
import { Districts } from "./oakland-districts.js";
import { Hunters } from "./flight-hunters.js";
import { Race } from "./race.js";
import { Weather } from "./weather.js";
import { TechSupport } from "./comms.js";
import { BossArenas } from "./boss-arenas.js";
import { VltrnSpecials, SPECIALS, CANNON } from "./vltrn-specials.js";

// Air drift (owner 09-24): at high speed the turn rate softens and his velocity lags the nose, so he floats and
// slides through sharp turns instead of snapping — fast but controllable.
const DRIFT_FROM = 26; // m/s where drift starts creeping in
const DRIFT_FULL = 60; // m/s where it's at full float
const GRIP_LOW = 60; // how fast velocity swings onto the nose at cruise (≈ no slide)
const GRIP_HIGH = 7; // ...and flat out: a mild slide, ~15-20° at the peak of a hard turn
const HIGH_SPEED_TURN = 0.72; // turn-rate multiplier at full speed
const HIT_STOP = 0.045; // freeze-frame on a kill
const BOSS_HIT_STOP = 0.14;
const BOSS_SLOWMO = 1.6; // real seconds of slow motion when a boss dies
const SLOWMO_SCALE = 0.3;
const BOSS_INTRO = 2.6;
const WIN_DELAY = 2.4; // let the boss death play before the win card
const RELAY_SLOWMO = 0.9; // a relay falling gets a beat of slow motion too
const DISTRICT_SCORE = 1000;
// Owner 09-25: "make mahals vltrn8 be the quickest, mine hits the strongest and is a bit of a show off"
const PILOT_STATS = {
  qm85: { speed: 1, agility: 1, dmg: 1 },
  vltrn8: { speed: 1.22, agility: 1.3, dmg: 1 }, // the quickest
  bizzle: { speed: 0.96, agility: 1, dmg: 1.45, style: true }, // hits the strongest, flies with swagger
};
const STYLE_WORDS = ["FRESH!", "SHEESH!", "CLEAN!", "SHOWBOAT!", "TOO SMOOTH!", "DESTROYER DRIP!"];
// 3BIZZLE (owner 09-25: "my blasters are supposed to be fully automatic"): a faster trigger, a tighter stream (never
// wider than 3 bolts, so his LV5 puts no more bolts in the air than QM85's), each bolt a little lighter — he still out-hits.
const AUTO_GAP = 0.6;
const AUTO_DMG = 0.6;
const AUTO_SPREAD = 3;
// bolt glow per blaster level for Rob's and Mahal's bots (QM85 keeps the powerups' violet → gold → orange)
const BOLT_TINT = {
  bizzle: [null, 0xff4a3a, 0xff3b2b, 0xff5a1f, 0xff3218, 0xff2a10], // red plasma
  vltrn8: [null, 0xc58bff, 0xd47bff, 0xe46cf0, 0xf05ce0, 0xff4fd0], // purple plasma warming to hot pink
};

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
const BRAKE_SPEED = 3.5; // AIRBRAKE (owner 09-24, mobile landings): hold X = flare and hover at this speed
const BRAKE_DAMP = 7;
const FLOOR = 10; // just above the low-rise rooftops (flight-details LOWRISE_MAX)
const CEILING = 110;
const FUEL_DRAIN = 0.32;
const FUEL_REGEN = 0.14;
const LASER_SPEED = 120;
const LASER_LIFE = 0.9;
const AIM_CONE = Math.cos(THREE.MathUtils.degToRad(7));
const MAX_SHIELD = 6; // base; the garage's ARMOR PLATING adds to it per run (this.maxShield)
const INVULN = 0.7;
const SHOULDER = new THREE.Vector3(-0.38, 0.45, -1.75); // behind his right shoulder (his right = -X), feet toward us; owner 09-24: a little tighter for precise control
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
    // THE ROSTER (09-25): QM85, or the VLTRN pair — VLTRN8 (Mahal's bot) / 3BIZZLE (Rob's bot)
    this.pilotKey = opts.pilot === "mahal" ? "vltrn8" : opts.pilot ?? "qm85";
    this.pilot = new Pilot(this.root, PILOT_LOOKS[this.pilotKey] ?? PILOT_LOOKS.qm85); // all three: QM85-family mini bots
    this.pilot.isPlayer = true;
    this.stats0 = PILOT_STATS[this.pilotKey] ?? PILOT_STATS.qm85;
    this.dmgMult = this.stats0.dmg; // bolts, missiles (and the cannon), the flame strike and drone zaps all read this
    this.specialCd = 0; // H: VLTRN8 DRONE SWARM · 3BIZZLE MISSILE CANNON (on foot: FLAME STRIKE)
    this.cannonQueue = []; // 3BIZZLE's 3-burst: shots waiting their beat
    const L = opts.loadout ?? {}; // THE GARAGE (09-25): permanent upgrades bought with credits
    this.loadout = L;
    this.maxShield = L.maxShield ?? opts.maxShield ?? MAX_SHIELD;
    this.fuelRegenK = L.fuelRegen ?? 1;
    this.fuelDrainK = L.fuelDrain ?? 1;
    this.magnet = L.magnet ?? 1;
    this.lotusT = 0; // Mahal's lotus shield: untouchable while > 0
    this.mega = new MegaBlast(this.root);
    this.moves = new Maneuvers(this.root, this.pilot.frame);
    this.fight = new FightMode(this);
    this.hyper = new HyperLoop(this.root);
    this.sparks = new Sparks(this.root);
    this.missiles = new Missiles(this.root, this);
    this.specials = new VltrnSpecials(this);
    this.missiles.max = this.missiles.ammo = (opts.loadout?.missiles ?? this.missiles.max) + (this.pilotKey === "bizzle" ? 3 : 0); // his missiles are signature: a bigger rack
    this.missiles.reloadTime = opts.loadout?.reload ?? this.missiles.reloadTime;
    this.fx = new KillFX(this.root);
    this.shake = new Shake();
    this.backBlast = new BackBlast();
    this.wake = new Wake(this.root);
    this.freeze = 0; // hit-stop, real seconds
    this.slowmo = 0; // boss-death slow motion, real seconds
    this.popups = []; // { pos, text, big } drained by the HUD each frame
    this.intro = null; // boss entrance cutscene
    this.finale = null; // battle body cutscene
    this.winDelay = 0;
    this.boomT = -1; // one death sound per burst, not five stacked
    this.swarm.onKill = (bot, rammed) => this.#onKill(bot, rammed);
    this.swarm.onShieldHit = (bot) => this.#onShieldHit(bot);
    this.swarm.onEnrage = (bot) => this.#onEnrage(bot);
    this.impactT = 0; // debounce: one spark shower + clang per contact
    this.blastT = 0; // after a hyper-loop blast, hold the burst speed for a beat
    this.swarm.blocked = (p) => Boolean(this.arena.vehicleAt?.(p) || (p.y < 400 && this.arena.towerAt(p)));
    this.built = !this.arena.ready; // zones without an async build are ready at once
    this.arena.ready?.then(() => {
      this.built = true; // main.js holds the sim (and hides the half-built city) until this flips
      if (this.arena.truckRider) this.power.riderSource = () => this.arena.truckRider();
    });
    this.mission = null;
    this.districts = null;
    this.hunters = null;
    this.weather = null;
    this.comms = null;
    this.arenas = null;
    this.shieldPingT = 0;
    this.day = null;
    this.resume = opts.resume ?? null;
    this.race = null;
    this.raceId = opts.race ?? null; // RING RACE (09-25): a time trial — no enemies, no clock, no districts
    if (zone === "oakland" && this.raceId) {
      this.arena.ready.then(() => {
        if (this.done) return;
        this.race = new Race(this.root, this.arena, this, this.raceId, {
          onGate: (i, total, split) => hooks.onRace?.("gate", { i, total, split }),
          onGo: () => hooks.onRace?.("go", {}),
          onFinish: (result) => {
            this.done = true;
            hooks.onRace?.("finish", result);
          },
        });
        this.pos.copy(this.race.course.start.pos);
        this.yaw = this.race.course.start.yaw;
        this.pitch = 0;
        this.thrust = 3; // races fly on full thrusters: boost management is the skill
        this.fuel = 1;
        this.speed = THRUSTERS[3].cruise;
        this.camBase = null;
      });
    } else if (zone === "oakland") {
      this.day = new DayCycle({
        onPhase: (name, clock, jumped) => hooks.onPhase?.(name, clock, jumped),
        onMidBoss: () => { // 09-25 LANDMARK: the Overseer takes the Bay Bridge
          const bot = this.swarm.spawnBoss(this.pos, MID_BOSS);
          this.arenas?.placeOverseer(bot);
          this.#bossArrives(bot);
        },
        onFinalBoss: () => { // 09-25 LANDMARK: the Serpent Priest perches on the Tribune Tower, pylon-shielded
          const bot = this.swarm.spawnBoss(this.pos);
          this.arenas?.placePriest(bot);
          this.#bossArrives(bot);
        },
        onCheckpoint: (cp) => hooks.onCheckpoint?.(cp),
        snapshot: () => ({ delivered: this.mission ? { ...this.mission.delivered } : { data: 0, part: 0 }, thrust: this.thrust, blaster: this.power.level, score: this.score, freed: this.districts?.freedIds() ?? [] }),
      });
      this.arena.ready.then(() => {
        if (this.done) return;
        if (this.resume) { // continue from the checkpoint's time of day with what he'd earned
          this.thrust = Math.max(this.resume.thrust ?? 1, L.thrust ?? 1);
          this.power.level = Math.max(this.resume.blaster ?? 1, L.blaster ?? 1);
          this.score = this.resume.score ?? 0;
        }
        this.weather = new Weather(this.root, this.arena); // 09-25: morning marine layer, dusk fog, rain nights
        this.arenas = new BossArenas(this, { // 09-25: the bosses take the Bay Bridge + the Tribune Tower
          onExposed: (name) => hooks.warn(`${name} IS EXPOSED — HIT HIM!`),
          onLeaves: (name) => hooks.warn(`${name} LEFT THE TOWER — HE'S HUNTING YOU`),
        });
        this.districts = this.#buildDistricts(); // FREE OAKLAND (09-25): the relays hold the items
        this.mission = new OaklandMission(this.root, this.arena, this, {
          onPickup: (kind, n) => hooks.onMission?.("pickup", { kind, n }),
          onFull: () => hooks.onMission?.("full"),
          onDeliver: (state) => {
            hooks.onMission?.("deliver", state);
            this.#armorUp(); // every battle part darkens + golds + bulks his armour (owner 09-24)
          },
          onBoss: (name) => hooks.onBoss(name),
          onComplete: () => {
            this.power.level = 5; // the battle body: blasters maxed, shield full
            this.shield = this.maxShield;
            this.finale = new Finale(this); // the warehouse cutscene, then the "complete" card
            hooks.onMission?.("finale");
          },
        }, this.districts);
        if (this.resume) {
          this.districts.restore(this.resume.freed ?? []);
          this.mission.restore(this.resume.delivered);
          this.day.jumpTo(this.resume.phase);
          this.#armorUp();
        }
        this.hunters = new Hunters(this, this.districts, { // PALANTÍR SCOUTS over every district still occupied
          onSpotted: (name) => hooks.onHunt?.("spotted", { name }),
          onBackup: () => hooks.onHunt?.("backup", {}),
          onCalled: () => hooks.onHunt?.("called", {}),
          onSilent: (pos) => {
            this.popups.push({ pos, text: "SILENT TAKEDOWN +150", big: false });
            hooks.onHunt?.("silent", {});
          },
        });
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
    // ONE BOT ON SCREEN (owner 09-25: "we CAN NOT have all 3 charecters on the screen at once"): the other two ride
    // comms as copilots — warnings, a shield patch, Mahal's lotus (comms.js). No wingmates fly with you any more.
    this.wingmates = [];
    this.comms = opts.race ? null : new TechSupport(this, { say: (label, text, meta) => hooks.onComms?.(label, text, meta) }, { healEvery: L.healEvery });
    if (opts.skin === "battle" && this.armorPilot) applyBattleBody(this.armorPilot); // the battle body is QM85's, whoever flies
    this.pitch = 0;
    this.bank = 0;
    this.yawRate = 0;
    this.pitchRate = 0;
    this.thrust = L.thrust ?? 1;
    this.power.level = L.blaster ?? 1;
    this.boosting = false;
    this.stealth = false;
    this.speed = THRUSTERS[this.thrust].cruise;
    this.fuel = 1;
    this.shield = this.maxShield;
    this.invuln = 0;
    this.cooldown = 0;
    this.side = 1;
    this.score = 0;
    this.wave = 0;
    this.boss = null;
    this.done = false;
    this.t = 0;
    this.outWarned = false;
    if (!this.raceId) this.#nextWave();
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
      this.#bossArrives(this.swarm.spawnBoss(this.pos));
    }
  }

  /** The frame entry point: hit-stop freezes, a boss death plays in slow motion, then a normal update. */
  step(dt) {
    if (this.freeze > 0) {
      this.freeze -= dt;
      return;
    }
    if (this.slowmo > 0) {
      this.slowmo -= dt;
      dt *= SLOWMO_SCALE;
    }
    this.update(dt);
  }

  update(dt) {
    if (this.done) {
      sfx.engine.set({ on: false }); // win / shot down: no thrusters humming under the card
      sfx.rain.set(0);
      return;
    }
    this.t += dt;
    this.dt = dt;
    for (const q of this.fx.update(dt)) { // boss death chain blasts
      this.shake.add(q.final ? 1 : 0.3);
      sfx.explode(q.final ? "chainEnd" : "chain");
    }
    if (this.finale) return this.#cutscene(dt, () => this.#updateFinale(dt));
    if (this.intro) return this.#cutscene(dt, () => this.#updateIntro(dt));
    if (this.race?.holding) return this.#raceCountdown(dt);
    const prevPos = this.pos.clone(); // for the race gates' plane-crossing test
    this.#boostState();
    if (this.fight.active) {
      this.fight.update(dt); // FIGHT MODE owns movement, pose and camera
      this.shake.apply(this.camera, dt, this.t);
      this.camBase = null; // back in the air, flight smooths from wherever the fight cam left it
    } else {
      const refused = this.backBlast.listen(this);
      if (typeof refused === "string") this.hooks.warn(refused);
      if (!this.backBlast.active) this.hyper.listen(this, this.t);
      const spinning = this.backBlast.update(dt, this, (dir) => this.#spinFire(dir));
      if (!spinning && !this.hyper.update(dt, this)) this.#steer(dt); // the hyper loop / back blast own pitch while they run
      if (!spinning) this.#megaInput();
      this.#combos(dt);
      this.striking ||= this.specials.dashing; // a FLAME STRIKE owns his position while it cuts
      this.#fly(dt);
      this.wake.update(dt, this); // low + fast over water: spray + foam
      this.fight.tryLand(); // F near the street
    }
    if (!this.backBlast.active) this.#shoot(dt);
    if (this.pilot.isVltrn) this.#special(dt);
    this.#cannon();
    this.#updateLasers(dt);
    this.#fireMissile();
    this.missiles.update(dt);
    this.sparks.update(dt);
    const lvTop = THRUSTERS[this.thrust].boost * STEALTH.speed;
    sfx.engine.set({ on: !this.fight.active && !this.done, speed01: this.speed / lvTop, boosting: this.boosting || this.blastT > 0, level: this.thrust, stealth: this.stealth, braking: this.braking });
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
    this.lotusT = Math.max(0, this.lotusT - dt);
    this.specials.update(dt, this.t);
    this.#pickups();
    if (!this.fight.active) this.#placeCamera(dt);
    this.mission?.update(dt, this.t);
    this.race?.update(dt, prevPos);
    this.districts?.update(dt, this.t, this.camera);
    this.hunters?.update(dt);
    this.hunters?.tick(dt);
    this.comms?.update(dt);
    this.arenas?.update(dt, this.t);
    this.#weather(dt);
    this.shieldPingT = Math.max(0, this.shieldPingT - dt);
    this.#progress();
  }

  /** Boost + STEALTH MODE state, decided once per frame before steering. */
  #boostState() {
    const brake = input.held("ShiftLeft", "ShiftRight", "KeyX", "ControlLeft", "ControlRight") && !this.mega.busy && !this.fight.active && !this.hyper.active && !this.moves.busy;
    if (brake !== this.braking) this.hooks.onBrake?.(brake);
    this.braking = brake;
    const want = !brake && input.held("Space") && this.fuel > 0 && !this.mega.busy && !this.fight.active;
    if (want && !this.boosting) this.stealth = this.thrust === 3 && this.fuel >= MEGA_READY; // must START on a full bar
    if (!want && this.stealth) this.hooks.onStealth?.(false);
    else if (want && this.stealth && !this.boosting) this.hooks.onStealth?.(true);
    if (!want) this.stealth = false;
    this.boosting = want;
  }

  #steer(dt) {
    const lv = THRUSTERS[this.thrust];
    const agility = (this.stealth ? STEALTH.agility : lv.agility) * this.stats0.agility;
    const response = STEER_RESPONSE * (this.stealth ? STEALTH.response : lv.response);
    const turn = (input.held("KeyA", "ArrowLeft") ? 1 : 0) - (input.held("KeyD", "ArrowRight") ? 1 : 0);
    // Flight-sim stick (owner 09-24): UP pushes the nose DOWN (dive), DOWN pulls it UP (climb).
    const climb = (input.held("KeyS", "ArrowDown") ? 1 : 0) - (input.held("KeyW", "ArrowUp") ? 1 : 0);
    // Rates ease in and out, so a tap is a small precise correction and a hold is a full carve.
    const inverted = Math.cos(this.pitch) < 0; // over the top of a loop: keep left/right screen-correct
    const hi = this.driftAmount; // 0 at cruise … 1 flat out: softer, floatier turns
    const turnScale = THREE.MathUtils.lerp(1, HIGH_SPEED_TURN, hi);
    this.yawRate = THREE.MathUtils.damp(this.yawRate, (inverted ? -turn : turn) * YAW_RATE * agility * turnScale, response * THREE.MathUtils.lerp(1, 0.6, hi), dt);
    this.pitchRate = THREE.MathUtils.damp(this.pitchRate, climb * PITCH_RATE * agility, response, dt);
    this.yaw += this.yawRate * dt;
    // Owner 09-24: a held climb goes all the way over — full loops (hold W) and outside loops (hold S).
    this.pitch += this.pitchRate * dt;
    this.pitch = Math.atan2(Math.sin(this.pitch), Math.cos(this.pitch)); // keep in (-π, π]
    if (!climb && Math.abs(this.pitch) < PITCH_MAX) this.pitch = THREE.MathUtils.damp(this.pitch, 0, this.braking ? 5 : 0.9, dt); // only near level; the brake levels him fast
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
      strikeNow: this.pendingStrike, // set by the hyper loop's blast-out (flight-hyperloop.js)
      clearStrike: () => { this.pendingStrike = null; },
      bankTo: (dir) => { // a side switch snaps the turn rate the new way (owner: "smoothly rolling then quickly banking")
        const lv = THRUSTERS[this.thrust];
        this.yawRate = (dir === "left" ? 1 : -1) * YAW_RATE * (this.stealth ? STEALTH.agility : lv.agility) * 1.25;
      },
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
    const drain = (FUEL_DRAIN * this.fuelDrainK) / (1 + 0.3 * (this.thrust - 1)); // bigger levels, bigger tank; the REACTOR CORE helps
    this.fuel = boosting ? Math.max(0, this.fuel - drain * dt) : Math.min(1, this.fuel + FUEL_REGEN * this.fuelRegenK * dt);
    const top = this.braking ? BRAKE_SPEED : (boosting ? lv.boost * (this.stealth ? STEALTH.speed : 1) : lv.cruise) * this.stats0.speed;
    this.blastT = this.braking ? 0 : Math.max(0, this.blastT - dt); // the brake also kills a hyper blast
    if (this.blastT === 0) this.speed = THREE.MathUtils.damp(this.speed, top, this.braking ? BRAKE_DAMP : this.stealth ? 5 : 3, dt);
    applyDeflect(this, dt); // an impact eases him off course over a third of a second
    this.#driftVelocity(dt);
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
      onFire: (kills) => {
        this.shake.add(0.8);
        this.hooks.onMega(kills);
      },
    });
    this.pilot.update(dt, {
      pos: this.pos, yaw: this.yaw, pitch: this.pitch, bank: this.bank, boosting: boosting || this.mega.busy || this.backBlast.active, braking: this.braking,
      thrustColor: this.stealth ? 0xffffff : lv.color, stealth: this.stealth, upright: this.backBlast.active,
      spin: (spin + this.twirlAngle + this.moves.spin) * (this.stats0.style ? 2 : 1) + this.backBlast.angle, t: this.t, blink: this.invuln > 0 && Math.floor(this.invuln * 14) % 2 === 1,
      swagger: this.stats0.style && !boosting && !this.braking,
    });
    this.#showOff();
    this.invuln = Math.max(0, this.invuln - dt);
  }

  /** 3BIZZLE's hip-hop flair: when a roll / twirl / hyper loop lands, he flexes (arms up) and the crowd hears a scratch. */
  #showOff() {
    if (!this.stats0.style) return;
    const tricking = this.twirlT > 0 || this.moves.untouchable || this.hyper.active; // moves.busy is only the cosmic strike
    if (this.wasTricking && !tricking) {
      this.pilot.flex();
      this.popups.push({ pos: this.pos.clone().add(new THREE.Vector3(0, 2.4, 0)), text: STYLE_WORDS[Math.floor(Math.random() * STYLE_WORDS.length)], big: false, style: true });
      sfx.scratch();
      this.styleCount = (this.styleCount ?? 0) + 1;
    }
    this.wasTricking = tricking;
  }

  /** 0 at cruise … 1 at DRIFT_FULL speed. */
  get driftAmount() {
    return THREE.MathUtils.clamp((this.speed - DRIFT_FROM) / (DRIFT_FULL - DRIFT_FROM), 0, 1);
  }

  /** Air drift: velocity swings onto the nose quickly at cruise, lazily flat out — he slides through fast turns. */
  #driftVelocity(dt) {
    const want = this.forward().multiplyScalar(this.speed);
    const scripted = this.striking || this.hyper.active || this.blastT > 0 || this.backBlast.active || this.braking || this.mega.busy;
    if (!this.driftVel || scripted) this.driftVel = want.clone();
    else {
      const grip = THREE.MathUtils.lerp(GRIP_LOW, GRIP_HIGH, this.driftAmount);
      this.driftVel.lerp(want, 1 - Math.exp(-grip * dt));
      if (this.driftVel.lengthSq() > 1e-6) this.driftVel.setLength(this.speed);
    }
    this.vel.copy(this.driftVel);
  }

  /** Ricochet + sparks + clang; damage only when it was near head-on. */
  #impact(normal, prev, contact) {
    const { headOn } = ricochet(this, normal, prev);
    this.driftVel = null; // a ricochet snaps velocity to the new heading — never slide INTO the wall
    if (this.impactT > 0) return;
    this.impactT = 0.4;
    this.shake.add(headOn ? 0.6 : 0.25);
    this.sparks.burst(contact, normal, headOn ? 1.4 : 0.8);
    sfx.clang(headOn);
    if (headOn) this.#takeHit(1);
  }

  /** H (or SPECIAL): VLTRN8 launches her DRONE SWARM · 3BIZZLE fires his MISSILE CANNON (blaster LV2+; on foot the
   *  FLAME STRIKE dashes through what's ahead). */
  #special(dt) {
    this.specialCd = Math.max(0, this.specialCd - dt);
    if (!input.pressed("KeyH")) return;
    this.specialTries = (this.specialTries ?? 0) + 1; // the tutorial counts the press (the cannon may refuse at LV1)
    const base = SPECIALS[this.pilotKey];
    const onFoot = Boolean(this.fight.active && base.foot);
    const sp = onFoot ? base.foot : base;
    if (this.specialCd > 0) {
      this.hooks.warn(`${sp.name} RECHARGING — ${Math.ceil(this.specialCd)}s`);
      return;
    }
    if (this.pilotKey === "vltrn8") this.specials.launchSwarm(this);
    else if (onFoot) this.specials.flameStrike({ pos: this.pos, body: this.pilot, isPlayer: true }, this.fight.aim(this.pos));
    else if (this.power.level < (sp.minLevel ?? 1)) { // "when my power bars lv2 or more"
      this.hooks.warn(`${sp.name} — NEEDS BLASTER LV${sp.minLevel}`);
      return;
    } else if (!this.missiles.target(this.pilot.muzzle(), this.forward())) {
      this.hooks.warn("NO LOCK — NOTHING AHEAD");
      return;
    } else for (let i = 0; i < CANNON.shots; i++) this.cannonQueue.push(this.t + i * CANNON.gap); // the 3-burst
    this.specialCd = sp.cooldown;
    this.hooks.warn(sp.name);
  }

  /** The MISSILE CANNON's burst: one real heat-seeker per beat, off the special (the Q rack is untouched). */
  #cannon() {
    while (this.cannonQueue.length && this.cannonQueue[0] <= this.t) {
      this.cannonQueue.shift();
      this.missiles.fire(this.pilot.muzzle(), this.forward(), { free: true });
    }
  }

  /** Q / E (or the MISSILE touch button): one heat-seeker at the hottest hostile ahead. */
  #fireMissile() {
    if (!input.pressed("KeyQ", "KeyE") || this.mega.busy) return;
    const fwd = this.fight.active ? this.fight.aim(this.pos) : this.forward();
    const result = this.missiles.fire(this.pos.clone(), fwd);
    if (this.pilotKey === "bizzle" && result === "fired") this.missiles.fire(this.pos.clone(), fwd); // 3BIZZLE: a TWIN SALVO
    if (result === "empty") this.hooks.warn?.("MISSILES RELOADING");
    else if (result === "no target") this.hooks.warn?.("NO LOCK — NOTHING AHEAD");
  }

  #shoot(dt) {
    this.cooldown -= dt;
    const firing = !this.mega.busy && input.held("KeyL", "Mouse0"); // click / trackpad / L fire; SHIFT is the AIRBRAKE
    if (!firing) {
      this.cooldown = Math.max(0, this.cooldown);
      return;
    }
    // the leftover time carries over (09-25): resetting the cooldown each frame capped every blaster near the frame rate —
    // on the laptop 3BIZZLE's "fully automatic" fired barely faster than QM85. At most 2 volleys in one frame.
    for (let shots = 0; this.cooldown <= 0 && shots < 2; shots++) this.#volley();
  }

  #volley() {
    const cfg = this.power.config;
    const auto = this.pilotKey === "bizzle"; // 3BIZZLE: fully automatic
    this.cooldown += cfg.gap * (auto ? AUTO_GAP : 1);
    this.side = 1 - Math.max(0, this.side); // alternate fists: 0 = right, 1 = left
    const fwd = this.forward();
    const from = this.pilot.punch(this.side);
    const target = this.swarm.aimTarget(this.pos, fwd, AIM_CONE);
    const aim = this.fight.active ? this.fight.aim(from) : target ? target.obj.position.clone().sub(from).normalize() : fwd;
    this.#bolts(from, aim, cfg.dmg * this.dmgMult * (auto ? AUTO_DMG : 1));
    this.shotN = (this.shotN ?? 0) + 1;
    if (!auto || this.shotN % 2) sfx.laser(this.power.level); // the auto stream sounds every other round
  }

  /** One volley at the current blaster level (spread and all) from `from` along `aim`. */
  #bolts(from, aim, dmg) {
    const { geo, mat, glowGeo, glowMat, radius } = this.#boltLook();
    let dirs = this.power.spreadDirs(aim);
    if (this.pilotKey === "bizzle" && dirs.length > AUTO_SPREAD) dirs = dirs.filter((_, i) => i % 2 === 0).slice(0, AUTO_SPREAD);
    for (const dir of dirs) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.add(new THREE.Mesh(glowGeo, glowMat));
      mesh.position.copy(from);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
      this.root.add(mesh);
      this.lasers.push({ mesh, dir, life: LASER_LIFE, dmg, r: radius });
    }
  }

  /** This pilot's bolt at this level: QM85's blaster rods · 3BIZZLE's rods in red plasma · VLTRN8's glowing plasma
   *  ORBS (owner 09-25: "make mahals blaster more plasma and less spinning thingy"). Cached per level, freed on dispose. */
  #boltLook() {
    const base = this.power.bolt();
    const tint = BOLT_TINT[this.pilotKey];
    if (!tint) return base;
    this.boltCache ??= [];
    const lv = this.power.level;
    if (!this.boltCache[lv]) {
      const orb = this.pilotKey === "vltrn8";
      const glowMat = base.glowMat.clone();
      glowMat.color.setHex(tint[lv]);
      if (orb) glowMat.opacity = 0.6;
      const r = base.radius;
      this.boltCache[lv] = {
        geo: orb ? new THREE.SphereGeometry(r * 0.45, 10, 8).scale(1, 1, 1.8) : base.geo,
        mat: base.mat,
        glowGeo: orb ? new THREE.SphereGeometry(r * 1.05, 12, 10).scale(1, 1, 2.4) : base.glowGeo,
        glowMat,
        radius: r,
        own: orb,
      };
    }
    return this.boltCache[lv];
  }

  /** BACK BLAST volley: alternate fists, outward along the spin; the cannon sound on every other shot. */
  #spinFire(dir) {
    this.side = 1 - Math.max(0, this.side);
    const from = this.pilot.punch(this.side);
    this.#bolts(from, dir, this.power.config.dmg);
    this.spinShots = (this.spinShots ?? 0) + 1;
    if (this.spinShots % 2) sfx.laser(this.power.level);
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
    if (this.lotusT > 0) { // Mahal's lotus shield eats it
      if (this.shieldPingT <= 0) sfx.shieldPing();
      this.shieldPingT = 0.25;
      return;
    }
    if (this.invuln > 0 || this.mega.busy || this.hyper.active || this.backBlast.active || this.moves.untouchable || this.twirlT > TWIRL_TIME * 0.2) return; // untouchable mid move
    if (this.fight.active && this.fight.combat.untouchable) return; // mid DODGE ROLL
    if (this.specials.dashing) return; // mid FLAME STRIKE
    this.shake.add(0.45);
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
    const box = this.power.update(this.dt, this.t, this.center(), this.magnet);
    if (box) this.hooks.onPower(box);
    if (!this.arena.ringHit(this.center(), this.magnet)) return;
    if (this.thrust < 3) this.thrust += 1; // rings power the THRUSTERS (Merkabas power the blasters)
    this.hooks.onThrust?.(this.thrust);
    sfx.powerUp();
    this.fuel = 1;
    this.shield = Math.min(this.maxShield, this.shield + 1);
    this.score += 50;
  }

  #progress() {
    if (this.boss?.final && !this.boss.alive && !this.done) { // the Serpent Priest is down: let his death play, then win
      this.winDelay -= this.dt;
      if (this.winDelay > 0) return;
      this.done = true;
      this.hooks.onWin(this.score);
      return;
    }
    if (this.zone === "oakland") return; // Oakland is won at NIGHT, above
    if (this.done || this.swarm.alive.length || this.boss) return;
    this.#nextWave();
  }

  // ------------------------------------------------------------ kills, bosses, cutscenes

  #onKill(bot, rammed) {
    const pos = bot.obj.position.clone();
    this.hunters?.onKill(bot); // an unaware scout = SILENT TAKEDOWN bonus
    if (bot.relay) { // FREE OAKLAND: a relay tower comes down and its district is free
      this.fx.bossDeath(pos, "boss", 3.5);
      sfx.explode("overseer");
      this.shake.add(1);
      this.freeze = BOSS_HIT_STOP;
      this.slowmo = RELAY_SLOWMO;
      this.popups.push({ pos, text: `+${bot.score}`, big: true });
      this.districts?.relayDown(bot);
      return;
    }
    if (bot.boss) {
      this.fx.bossDeath(pos, "boss", bot.scale);
      sfx.explode(bot.final ? "boss" : "overseer");
      this.shake.add(1);
      this.freeze = BOSS_HIT_STOP;
      this.slowmo = BOSS_SLOWMO;
      this.popups.push({ pos, text: `+${bot.score}`, big: true });
      this.hooks.onBossDown?.(bot.name);
      if (bot.final) {
        this.winDelay = WIN_DELAY;
        for (const b of this.swarm.alive) if (!b.relay) this.swarm.kill(b, true); // his minions fall with him (relays are districts, not minions)
      }
      return;
    }
    this.fx.explode(pos, bot.faction, bot.scale);
    if (this.t - this.boomT > 0.06) { // a mega blast kills five at once: one death sound, not a stack
      this.boomT = this.t;
      sfx.explode(bot.faction);
    }
    this.shake.add(rammed ? 0.45 : 0.16 + bot.scale * 0.03);
    this.freeze = Math.max(this.freeze, HIT_STOP);
    if (!rammed) this.popups.push({ pos, text: `+${bot.score}`, big: false });
  }

  /** A shot splashed on a relay's shield: sparks, a ping, and (not too often) the hint. */
  #onShieldHit(bot) {
    if (this.shieldPingT > 0) return;
    this.shieldPingT = 0.25;
    this.sparks.burst(bot.obj.position.clone(), new THREE.Vector3(0, 1, 0), 0.6);
    sfx.shieldPing();
    if ((this.shieldHintT ?? -99) + 4 < this.t) {
      this.shieldHintT = this.t;
      this.hooks.warn(bot.relay ? "RELAY SHIELDED — TAKE OUT ITS GUARDS FIRST" : `${bot.name} IS SHIELDED — BREAK HIS RUNE PYLONS`);
    }
  }

  /** FREE OAKLAND: the six districts, their relays, and what freeing one does to the run. */
  #buildDistricts() {
    const hooks = this.hooks;
    return new Districts(this.root, this.arena, this, {
      onEnter: (d, state) => hooks.onDistrict?.("enter", { name: d.name, state }),
      onWake: (d) => hooks.onDistrict?.("wake", { name: d.name, guards: d.guards.length }),
      onShieldDown: (d) => hooks.onDistrict?.("shield", { name: d.name }),
      onFreed: (d, silent) => {
        this.mission?.unlock(d);
        if (silent) return;
        this.score += DISTRICT_SCORE;
        this.shield = Math.min(this.maxShield, this.shield + 1);
        this.shake.add(0.6);
        this.comms?.cheer("freed", d.id);
        hooks.onDistrict?.("freed", { name: d.name, freed: this.districts.freed, total: this.districts.total, items: d.items.length });
      },
      onRegen: () => {
        if (this.shield >= this.maxShield || this.done) return;
        this.shield += 1;
        hooks.onDistrict?.("regen", {});
      },
    }, this.arena.buildings ?? []);
  }

  /** Half health: red pulse, alarm + roar, and he calls his own faction in. */
  #onEnrage(bot) {
    const at = bot.obj.position.clone();
    this.fx.pulse(at, 0xff3b3b, bot.scale * 7);
    this.shake.add(0.5);
    sfx.enrage();
    this.swarm.spawnWave(at, { [bot.final ? "acolyte" : "palantir"]: 4 }, 3);
    this.hooks.onEnrage?.(bot.name);
  }

  /** Boss entrance: he rises out of a shockwave while the camera cuts to him; the fight holds for the intro. */
  #bossArrives(bot) {
    this.boss = bot;
    bot.frozen = true;
    this.intro = { bot, t: 0 };
    this.fx.pulse(bot.obj.position, bot.final ? 0x7dff3a : 0x5fd8ff, bot.scale * 8);
    this.shake.add(0.6);
    sfx.roar();
    this.comms?.cheer("bigboss", bot);
    this.hooks.onBoss(bot.name, bot.final);
  }

  #weather(dt) {
    if (!this.weather) return;
    this.weather.update(dt, this.t, this.camera, this.day);
    sfx.rain.set(this.done ? 0 : this.weather.rain01);
  }

  /** RING RACE 3-2-1: he hovers on the start line, the camera settles behind him, the city keeps living. */
  #raceCountdown(dt) {
    this.race.update(dt, this.pos);
    this.speed = THRUSTERS[this.thrust].cruise;
    this.fuel = 1;
    sfx.engine.set({ on: true, speed01: 0.2, boosting: false, level: this.thrust });
    this.pilot.update(dt, { pos: this.pos, yaw: this.yaw, pitch: 0, bank: 0, boosting: false, spin: 0, t: this.t, blink: false, thrustColor: THRUSTERS[this.thrust].color });
    this.arena.update(dt, this.t);
    this.arena.follow?.(this.pos);
    this.#placeCamera(dt);
  }

  /** Cutscene frame: the world idles, the effects play, no input, no damage. */
  #cutscene(dt, body) {
    sfx.engine.set({ on: false });
    this.#weather(dt); // the rain keeps falling through a boss entrance
    this.arena.update(dt, this.t);
    this.sparks.update(dt);
    this.#updateLasers(dt);
    body();
  }

  #updateIntro(dt) {
    const { bot } = this.intro;
    this.intro.t += dt;
    const k = Math.min(1, this.intro.t / 1.1);
    bot.obj.scale.setScalar(bot.scale * (0.15 + 0.85 * (1 - (1 - k) ** 3))); // he RISES
    bot.obj.userData.animate?.(this.t);
    const bp = bot.obj.position;
    const toward = this.pos.clone().sub(bp).setY(0).normalize();
    const side = new THREE.Vector3(-toward.z, 0, toward.x);
    const dist = bot.scale * 5.5;
    const want = bp.clone().addScaledVector(toward, dist).addScaledVector(side, dist * 0.35 * Math.sin(this.intro.t * 0.8)).add(new THREE.Vector3(0, bot.scale * 0.9, 0));
    this.camera.position.lerp(want, 1 - Math.exp(-dt * 5));
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(bp);
    this.shake.apply(this.camera, dt, this.t);
    this.pilot.update(dt, { pos: this.pos, yaw: this.yaw, pitch: this.pitch, bank: 0, boosting: false, spin: 0, t: this.t, blink: false });
    if (this.intro.t < BOSS_INTRO) return;
    bot.frozen = false;
    bot.obj.scale.setScalar(bot.scale);
    this.intro = null;
    this.invuln = 1.2; // a beat to get your bearings as the camera swings back
    this.camBase = null;
  }

  #updateFinale(dt) {
    if (this.finale.update(dt)) return;
    this.finale = null;
    this.camBase = null;
    this.hooks.onMission?.("complete", { score: this.score });
  }

  /** Battle parts delivered so far → how far his armour has turned black-grey + gold and bulked up. */
  /** Whoever you fly earns the battle body (each bot flies its own mission). */
  get armorPilot() {
    return this.pilot;
  }

  /** H's name right now: 3BIZZLE's is the MISSILE CANNON in the air and the FLAME STRIKE on foot. */
  get specialName() {
    const sp = SPECIALS[this.pilotKey];
    return sp ? (this.fight?.active && sp.foot ? sp.foot.name : sp.name) : null;
  }

  #armorUp() {
    const target = this.armorPilot;
    if (!this.mission || !target) return;
    const before = target.armor?.k ?? 0;
    setArmorProgress(target, this.mission.delivered.part / (TOTAL / 2));
    if ((target.armor?.k ?? 0) > before && !this.resume) { // a new piece bolted on: gold flash
      this.fx.pulse(this.pos.clone().add(new THREE.Vector3(0, 1, 0)), 0xd4a73a, 5);
      this.shake.add(0.2);
      sfx.snap(3);
    }
  }

  #placeCamera(dt) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-this.pitch, this.yaw, this.bank * 0.25, "YXZ")); // full pitch: stays behind him through a loop
    const drift = this.hyper.cam; // hyper loop: QM3D-Racing-style drift cam — pulls wide, swings out, lags behind
    const pull = this.moves.busy ? 2.4 : 1 + drift * 0.9; // widen out so the whole comet / loop reads
    const offset = SHOULDER.clone().multiplyScalar(pull).add(new THREE.Vector3(-drift * 2.0, drift * 0.8, 0));
    const want = this.pos.clone().add(offset.applyQuaternion(q));
    // BACK BLAST: pull wide and ORBIT with the spin (a little ahead of him so you see the fists firing outward)
    const orbit = this.backBlast.cam;
    if (orbit > 0.001) {
      const a = this.yaw + Math.PI + this.backBlast.angle * 0.85;
      const ring = this.pos.clone().add(new THREE.Vector3(Math.sin(a) * 6.5, 2.2, Math.cos(a) * 6.5));
      want.lerp(ring, orbit);
    }
    want.y = Math.max(want.y, (this.arena.floor ?? 0) - 1.2); // never dip under the street and see the sky through it
    if (this.camBase) this.camera.position.copy(this.camBase); // smooth from the un-shaken spot
    this.camera.position.lerp(want, 1 - Math.exp(-dt * (14 - drift * 9 - orbit * 6)));
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
    const ahead = this.pos.clone().addScaledVector(this.forward(), 30).addScaledVector(up, 0.6);
    const look = ahead.lerp(this.pos, Math.max(drift * 0.9, orbit)); // drift / orbit cams watch HIM, not the sky ahead
    this.camera.up.lerp(orbit > 0.5 ? new THREE.Vector3(0, 1, 0) : up, 1 - Math.exp(-dt * 10)).normalize(); // roll with him — no flip at the top of a loop
    this.camera.lookAt(look);
    this.stealthFov = THREE.MathUtils.damp(this.stealthFov ?? 0, this.stealth ? 14 : this.boosting ? 4 * this.thrust : 0, 4, dt);
    this.camera.fov = 70 + this.moves.fovKick + this.stealthFov + drift * 8 + orbit * 10;
    this.camera.updateProjectionMatrix();
    this.camBase = this.camera.position.clone();
    this.shake.apply(this.camera, dt, this.t);
  }

  /** The big bottom bar: the day's boss first, else the relay of the district he's fighting in. */
  #bigBar() {
    if (this.boss && this.boss.alive && !this.intro) return { name: this.boss.name, hp: Math.max(0, this.boss.hp / this.boss.maxHp), enraged: Boolean(this.boss.enraged), shielded: Boolean(this.boss.shielded) };
    const d = this.districts?.activeRelay;
    if (!d) return null;
    return { name: d.bot.name, hp: Math.max(0, d.bot.hp / d.bot.maxHp), enraged: false, shielded: d.bot.shielded };
  }

  /** Screen-space helpers for the HUD. */
  reticleWorld() {
    return this.pos.clone().addScaledVector(this.forward(), 40);
  }

  /** What Q would lock right now (same aim + rule the missile uses), or null when the rack is empty. */
  missileLock() {
    if (this.missiles.ammo <= 0) return null;
    const fwd = this.fight.active ? this.fight.aim(this.pos) : this.forward();
    return this.missiles.target(this.pos, fwd);
  }

  nearestBot() {
    let best = null;
    let d = Infinity;
    for (const b of this.swarm.alive) {
      if (b.frozen) continue; // a sleeping relay across town isn't "the nearest threat"
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
      bossBar: this.#bigBar(),
      backBlast: this.power.level >= 2 ? (this.backBlast.cooldown > 0 ? this.backBlast.cooldown : 0) : -1,
      cutscene: Boolean(this.intro || this.finale),
      left: this.swarm.alive.length,
      score: this.score,
      shield: this.shield,
      maxShield: this.maxShield,
      lotus: this.lotusT > 0,
      special: this.pilot.isVltrn ? { name: this.specialName, cd: Math.ceil(this.specialCd) } : null,
      pilot: this.pilotKey,
      fuel: this.fuel,
      blaster: this.power.level,
      missiles: this.missiles.ammo,
      missilesMax: this.missiles.max,
      thrust: this.thrust,
      stealth: this.stealth,
      megaReady: this.fuel >= MEGA_READY && !this.mega.busy,
      onFoot: this.fight.active,
      canLand: this.fight.canLand,
      braking: this.braking,
      landOnRoof: this.fight.landOnRoof,
      altitude: this.pos.y,
      day: this.day && { phase: this.day.phase, clock: this.day.clock, night: this.day.night01 },
      districts: this.districts && { freed: this.districts.freed, total: this.districts.total, here: this.districts.status },
      race: this.race?.hud ?? null,
      mission: this.mission && {
        data: this.mission.delivered.data, part: this.mission.delivered.part, total: TOTAL,
        carrying: this.mission.carrying.length, progress: this.mission.progress,
      },
    };
  }

  dispose(scene) {
    sfx.engine.set({ on: false });
    sfx.rain.set(0);
    // 09-25 review: removing the root only hid the old level — three.js kept every geometry alive (+250 geometries,
    // +230 MB per RACE AGAIN). Free the whole tree FIRST (the subsystems below detach their parts from it), then
    // what lives outside it: the sky scene the reflections are rendered from, and the cyber sky texture.
    disposeTree(this.root);
    disposeTree(this.arena.envScene);
    disposeTexture(this.arena.skyTexture);
    this.weather?.dispose();
    for (const b of this.boltCache ?? []) { // tinted bolt looks live outside the tree when no bolt is in the air
      if (!b) continue;
      b.glowMat.dispose();
      if (b.own) {
        b.geo.dispose();
        b.glowGeo.dispose();
      }
    }
    this.specials.dispose();
    this.power.dispose(); // shared bolt looks + beam pieces (outside the tree when unused)
    // per-flight textures/geometry held by systems whose meshes come and go (09-25 review): with no puff, flash or spray
    // alive at teardown the tree walk never reaches them
    for (const r of [this.missiles.tex, this.missiles.flashGeo, this.wake.tex, this.wake.ringGeo, this.hyper.tex]) r?.dispose();
    scene.remove(this.root);
  }
}
