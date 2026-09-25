// FREE OAKLAND (owner 09-25: "start with Free Oakland"). Real neighbourhoods start under the dark companies: a red
// surveillance dome, a PALANTÍR RELAY tower in the streets, empty roads. Fly in and the district wakes up — its
// guards scramble and the relay raises a shield. Clear the guards, the shield drops; destroy the relay and the
// district is FREE: the dome burns away, a gold QMM beacon rises, a mural goes up, traffic comes back and the
// data drive + battle part the relay was hoarding spill out onto the street for QM85 to carry home.
//   x = east, z = south, metres from 14th & Broadway (assets/oakland.json origin).
import * as THREE from "three";
import { occupationDome, relayModel, sealBeacon, muralNear, Fireworks, RELAY_HEIGHT } from "./district-art.js";
import { WAREHOUSE } from "./oakland-mission.js";
import { sfx } from "./audio.js";

export const DISTRICTS = [
  { id: "downtown", name: "DOWNTOWN", x: -120, z: -40, r: 380, items: ["data", "part"],
    air: { palantir: 2, virus: 2 }, squad: { acolyte: 1, virus: 1 } },
  { id: "uptown", name: "UPTOWN", x: 330, z: -650, r: 340, items: ["data", "part"],
    air: { palantir: 2, shadow: 1, virus: 1 }, squad: { acolyte: 1 } },
  { id: "lake", name: "LAKE MERRITT", x: 1300, z: -60, r: 620, items: ["data", "part"],
    air: { palantir: 3, virus: 2 }, squad: { virus: 2 } },
  { id: "jacklondon", name: "JACK LONDON", x: 150, z: 1330, r: 420, items: ["data", "part"],
    air: { shadow: 2, palantir: 1, virus: 2 }, squad: { acolyte: 2 } },
  { id: "west", name: "WEST OAKLAND", x: -1700, z: -150, r: 700, items: ["data"],
    air: { shadow: 2, palantir: 2, virus: 2 }, squad: { acolyte: 2, virus: 1 } },
  { id: "port", name: "THE PORT", x: -2800, z: -1650, r: 560, items: ["part"],
    air: { shadow: 3, palantir: 2, virus: 2 }, squad: { acolyte: 2, virus: 2 } },
];
export const HOME = { name: "QMM TURF", x: WAREHOUSE.x, z: WAREHOUSE.z - 10, r: 170 };

const RELAY = { hp: 40, radius: 3.4, shieldRadius: 7.2, fireGap: [1.8, 2.6], volley: 3, range: 115, score: 1000, shot: 0xff3a4a };
const WAKE_RELAY = 220; // m from the relay that wakes a district (09-25: or a scout SPOTS him — flight-hunters.js)
const REGEN_EVERY = 8; // freed ground / home turf: +1 shield this often
const DISSOLVE_TIME = 2.6;
const RISE_TIME = 1.6;
const MURAL_FADE = 2;
const TINT_RATE = 1.6;

const loadTex = (url) => new Promise((resolve) => new THREE.TextureLoader().load(url, (t) => {
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  resolve(t);
}, undefined, () => resolve(null)));

const flat = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

export class Districts {
  /** hooks: { onEnter(d, state), onWake(d), onShieldDown(d), onFreed(d, silent), onRegen() } */
  constructor(root, arena, flight, hooks, buildings) {
    this.root = root;
    this.arena = arena;
    this.f = flight;
    this.hooks = hooks;
    this.buildings = buildings;
    this.fireworks = new Fireworks(root);
    this.list = DISTRICTS.map((def) => ({ ...def, free: false, awake: false, guards: [], bot: null, dome: null }));
    this.current = null; // the district QM85 is in (or HOME), for the HUD + entry toasts
    this.occupied01 = 0; // eased 0..1: how "under occupation" the air around him looks (main.js tints the haze)
    this.regenT = REGEN_EVERY;
    this.tex = null;
    this.textures = Promise.all([loadTex("assets/art/qmm_seal.png"), loadTex("assets/art/mural_qm85.jpg"), loadTex("assets/art/mural_tag.jpg")])
      .then(([seal, muralA, muralB]) => (this.tex = { seal, murals: [muralA, muralB] }));
    for (const d of this.list) this.#occupy(d);
    this.arena.setTrafficHidden?.((x, z) => this.occupiedAt(x, z)); // streets are empty under occupation
  }

  get freed() {
    return this.list.filter((d) => d.free).length;
  }

  get total() {
    return this.list.length;
  }

  /** Is (x, z) inside a district that is still occupied? */
  occupiedAt(x, z) {
    for (const d of this.list) if (!d.free && Math.hypot(x - d.x, z - d.z) < d.r) return true;
    return false;
  }

  districtAt(pos) {
    if (flat(pos, HOME) < HOME.r) return HOME;
    let best = null;
    for (const d of this.list) {
      const k = flat(pos, d) / d.r;
      if (k < 1 && (!best || k < best.k)) best = { d, k };
    }
    return best?.d ?? null;
  }

  /** The relay's street spot: the open road point nearest the district centre, with room for the plinth. */
  #relaySpot(d) {
    const open = (x, z) => {
      if (this.arena.groundBlocked(new THREE.Vector3(x, 1, z)) || this.arena.isWater(x, z)) return false;
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        if (this.arena.groundBlocked(new THREE.Vector3(x + Math.cos(a) * 7, 1, z + Math.sin(a) * 7))) return false;
      }
      return true;
    };
    let best = null;
    for (const r of this.arena.roads ?? []) {
      for (const [x, z] of r.p) {
        const dist = Math.hypot(x - d.x, z - d.z);
        if (dist > d.r * 0.7 || (best && dist >= best.dist)) continue;
        if (open(x, z)) best = { x, z, dist };
      }
    }
    return best ? new THREE.Vector3(best.x, 0, best.z) : new THREE.Vector3(d.x, 0, d.z);
  }

  #occupy(d) {
    d.ground = this.#relaySpot(d);
    d.dome = occupationDome(d.x, d.z, d.r);
    d.dome.material.uniforms.uOrigin.value.copy(d.ground);
    this.root.add(d.dome);
    const relay = relayModel();
    relay.position.copy(d.ground).setY(RELAY_HEIGHT);
    this.root.add(relay);
    d.bot = this.f.swarm.spawnStatic(relay, {
      ...RELAY, faction: "relay", name: `${d.name} RELAY`, boss: true, relay: true, district: d.id,
    });
    d.bot.frozen = true; // asleep until QM85 shows up
    d.bot.shielded = true;
    d.bot.radius = RELAY.shieldRadius;
  }

  /** QM85 arrived: the guards scramble and the relay starts shooting (behind its shield). */
  #wake(d) {
    d.awake = true;
    const late = this.f.swarm.difficulty;
    d.bot.hp = d.bot.maxHp = Math.round(RELAY.hp * (1 + (late - 1) * 0.4));
    d.bot.frozen = false;
    const level = 1 + this.freed * 0.5;
    const air = this.f.swarm.spawnWave(d.ground, d.air, level, { spread: [40, 90] });
    const squad = this.f.swarm.spawnGround(d.ground, d.squad, level);
    d.guards = [...air, ...squad, ...(d.scouts ?? []).filter((s) => s.alive)]; // surviving scouts guard the relay too
    for (const g of d.guards) g.district = d.id;
    this.hooks.onWake?.(d);
  }

  /** A scout raised the alarm (flight-hunters.js): wake the district now. */
  wake(d) {
    if (!d.awake && !d.free) this.#wake(d);
  }

  #dropShield(d) {
    d.bot.shielded = false;
    d.bot.radius = RELAY.radius;
    d.bot.obj.userData.shield.visible = false;
    this.f.fx.pulse(d.bot.obj.position.clone(), 0xff6a8a, 16);
    sfx.shieldDown();
    this.hooks.onShieldDown?.(d);
  }

  /** Called by FlightBattle when a relay dies. */
  relayDown(bot) {
    const d = this.list.find((x) => x.bot === bot);
    if (!d || d.free) return;
    this.#free(d, false);
  }

  #free(d, silent) {
    d.free = true;
    d.freeing = silent ? null : { t: 0 };
    if (silent) {
      this.root.remove(d.dome);
      d.bot.alive = false;
      d.bot.obj.visible = false;
    } else {
      this.fireworks.launch(d.ground);
      sfx.liberate();
    }
    this.textures.then(() => {
      d.beacon = sealBeacon(this.tex.seal);
      d.beacon.position.copy(d.ground);
      this.root.add(d.beacon);
      d.beacon.userData.animate(0, silent ? 1 : 0.001);
      const i = this.list.indexOf(d);
      d.mural = muralNear(this.buildings, d.ground.x, d.ground.z, this.tex.murals[i % 2]);
      if (d.mural) {
        this.root.add(d.mural);
        if (silent) d.mural.material.opacity = 1;
      }
    });
    this.hooks.onFreed?.(d, silent);
  }

  /** Continue from a checkpoint: these districts were already free. */
  restore(ids = []) {
    for (const d of this.list) if (ids.includes(d.id) && !d.free) this.#free(d, true);
  }

  freedIds() {
    return this.list.filter((d) => d.free).map((d) => d.id);
  }

  /** Nearest relay still standing (the HUD arrow's fallback target). */
  nextRelay(pos) {
    let best = null;
    for (const d of this.list) {
      if (d.free) continue;
      const dist = flat(pos, d.ground);
      if (!best || dist < best.dist) best = { d, dist };
    }
    return best ? best.d.ground.clone().setY(RELAY_HEIGHT) : null;
  }

  update(dt, t, camera) {
    const pos = this.f.pos;
    for (const d of this.list) {
      if (d.dome.parent) {
        const u = d.dome.material.uniforms;
        u.uTime.value = t;
        u.uCam.value.copy(camera.position);
      }
      if (!d.free) {
        if (!d.awake && flat(pos, d.ground) < WAKE_RELAY) this.#wake(d); // sneak past the scouts and you pick the moment
        if (d.awake && d.bot.shielded && d.guards.every((g) => !g.alive)) this.#dropShield(d);
      }
      if (d.freeing) this.#animateFreedom(d, dt);
      d.beacon?.userData.animate(t, d.freeing ? Math.min(1, d.freeing.t / RISE_TIME) : 1);
    }
    this.fireworks.update(dt);
    this.#track(dt);
  }

  #animateFreedom(d, dt) {
    const s = d.freeing;
    s.t += dt;
    const k = Math.min(1, s.t / DISSOLVE_TIME);
    d.dome.material.uniforms.uDissolve.value = Math.max(0.001, k);
    if (k >= 1 && d.dome.parent) this.root.remove(d.dome);
    if (d.mural) d.mural.material.opacity = Math.min(1, Math.max(0, (s.t - 1) / MURAL_FADE));
    if (s.t > DISSOLVE_TIME + MURAL_FADE) d.freeing = null;
  }

  /** Which district he's in, entry toasts, the occupation tint and home-turf regen. */
  #track(dt) {
    const here = this.districtAt(this.f.pos);
    if (here !== this.current) {
      this.current = here;
      if (here) this.hooks.onEnter?.(here, here === HOME ? "home" : here.free ? "free" : "occupied");
    }
    const occupied = Boolean(here && here !== HOME && !here.free);
    this.occupied01 = THREE.MathUtils.damp(this.occupied01, occupied ? 1 : 0, TINT_RATE, dt);
    const safe = here === HOME || Boolean(here?.free);
    if (!safe) {
      this.regenT = REGEN_EVERY;
      return;
    }
    this.regenT -= dt;
    if (this.regenT > 0) return;
    this.regenT = REGEN_EVERY;
    this.hooks.onRegen?.();
  }

  /** HUD line for the district he's in. */
  get status() {
    const d = this.current;
    if (!d) return null;
    if (d === HOME) return { name: HOME.name, state: "home" };
    if (d.free) return { name: d.name, state: "free" };
    const guards = d.guards.filter((g) => g.alive).length;
    return { name: d.name, state: "occupied", awake: d.awake, guards, shielded: d.bot.shielded };
  }

  /** The relay he's fighting right now (for the big bar): the current district's, once it's awake. */
  get activeRelay() {
    const d = this.current;
    return d && d !== HOME && !d.free && d.awake && d.bot.alive ? d : null;
  }

  /** Everything the minimap draws. */
  mapState() {
    return this.list.map((d) => ({ id: d.id, name: d.name, x: d.x, z: d.z, r: d.r, free: d.free, awake: d.awake, relay: d.ground }));
  }
}
