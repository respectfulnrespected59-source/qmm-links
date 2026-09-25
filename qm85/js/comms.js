// COPILOT COMMS (owner 09-25: "each bot flys its own mission, with the other 2 as tech support and copilot, NOT ON THE
// SCREEN WITH THE BOT IM PLAYIN WITH, just a little warning pop up when enemies closing in or somethin dope like that").
// Whoever you fly, the other two bots ride the feeds:
//   flying QM85     → VLTRN8 (Mahal) + 3BIZZLE (Rob)      flying 3BIZZLE → QM85 + VLTRN8      flying VLTRN8 → QM85 + 3BIZZLE
// They call what you can't see (a bot on your six, a pack CLOSING IN and from which way, a scout's beam...) and they
// still have your back from off screen: a SHIELD PATCH every few seconds (the garage's heal upgrade speeds it up) and
// Mahal's LOTUS SHIELD when you're nearly down. Calls are checked every frame, each with its own cooldown, and never
// more than one every GAP seconds; threat calls are flagged `alert` (the HUD shows them red).
import * as THREE from "three";
import { sfx } from "./audio.js";

const GAP = 5.5; // seconds between any two calls
const EVERY = { six: 12, closing: 10, beam: 14, shield: 22, relay: 18, lock: 20, stash: 30, special: 25, boss: 40 };
const ALERTS = new Set(["six", "closing", "beam", "shield"]);
const TAIL_RANGE = 32;
const CLOSE_RANGE = 120; // m: a pack inside this, getting nearer, gets called
const CLOSE_PACK = 3;
const CLOSE_SCAN = 0.5; // s between approach checks
const PATCH_EVERY = 14; // s: default shield patch (the garage heal upgrade shortens it)
const LOTUS_AT = 2;
const LOTUS_EVERY = 40;
const LOTUS_TIME = 3;

const CREW = {
  qm85: { label: "QM85", who: "qm85" },
  vltrn8: { label: "VLTRN8 · MAHAL", who: "mahal" },
  bizzle: { label: "3BIZZLE · ROB", who: "rob" },
};
const PILOT_NAME = { qm85: "QM85", vltrn8: "Mahal", bizzle: "Rob" }; // how the crew says the pilot's name

// what each copilot says (n = the pilot's name)
const LINES = {
  vltrn8: {
    six: (n) => `${n}! One on your six — roll!`, closing: (n, k, dir) => `${k} closing from ${dir}, ${n} — I see them, get ready!`,
    beam: (n) => `Palantír beam on you, ${n} — break line of sight!`, shield: (n) => `${n}, shield's low — swing by QMM turf, I got you.`,
    relay: () => "Relay shield's down — light it up!", lock: () => "You got a lock on the big one — send it!",
    stash: () => "Stash is on the street by the relay — land and grab it.", special: (n, s) => `${s} is charged, ${n} — use it!`,
    boss: (n, b) => `Big signal on the map — that's ${b}. Stay sharp.`, patch: () => "Shield patch sent — stay up!",
    lotus: () => "LOTUS SHIELD — I got you!", freed: (n, d) => (d === "lake" ? "The Lake is OURS again!" : "One more block back — keep going!"),
    bigboss: (n, b, fin) => (fin ? "That's the Serpent Priest. Break his pylons first!" : `${b} just lifted off — take that eye down!`),
  },
  bizzle: {
    six: (n) => `${n}, check six — bot on your tail!`, closing: (n, k, dir) => `Heads up ${n} — ${k} coming in hot from ${dir}!`,
    beam: (n) => `Scout's got a beam on you, ${n} — get behind a building!`, shield: (n) => `Shield's getting thin, ${n} — fall back to the warehouse.`,
    relay: () => "That relay's naked — hit it now!", lock: () => "Missile lock on the boss — let it rip!",
    stash: () => "Their stash just dropped at the relay — go get it.", special: (n, s) => `${s} is ready, ${n} — do your thing!`,
    boss: (n, b) => `${b} just showed up on my screen. Heads up, ${n}.`, patch: () => "Rerouted power to your shield — you good!",
    lotus: () => "Lotus shield's up — go go go!", freed: () => "That's how we do it — block's FREE!",
    bigboss: (n, b, fin) => (fin ? "Serpent Priest on the Tribune — his pylons first, then him!" : `${b}'s on the bridge — go get him!`),
  },
  qm85: {
    six: (n) => `Beep! One on your six, ${n} — roll!`, closing: (n, k, dir) => `Uh-oh — ${k} closing from ${dir}! Get 'em, ${n}!`,
    beam: (n) => `Searchlight on you, ${n}! Hide, hide!`, shield: (n) => `${n}, your shield's blinking red — back to base!`,
    relay: () => "Relay's open — zap it!", lock: () => "Lock on the big one — fire fire fire!",
    stash: () => "Loot by the relay! Shiny!", special: (n, s) => `${s} is ready, ${n}!`,
    boss: (n, b) => `${b} is on my radar. I'm scared but you got this!`, patch: () => "Patched your shield — beep boop, all better!",
    lotus: (n) => `Your LOTUS SHIELD is up, ${n} — go!`, freed: () => "We got one back! Yay!",
    bigboss: (n, b, fin) => (fin ? "Serpent Priest! Pylons first — I believe in you!" : `${b}! Bridge! Go go!`),
  },
};

/** "12 o'clock" … "9 o'clock": where `to` sits relative to the pilot's heading (right = -X at yaw 0). */
function clock(to, yaw) {
  const fwd = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
  const right = new THREE.Vector3(-Math.cos(yaw), 0, Math.sin(yaw));
  const a = Math.atan2(to.dot(right), to.dot(fwd));
  const h = ((Math.round(a / (Math.PI / 6)) % 12) + 12) % 12;
  return `${h === 0 ? 12 : h} o'clock`;
}

export class TechSupport {
  /** hooks: { say(label, text, { who, alert }) } · healEvery: the garage's shield-patch cadence. */
  constructor(flight, hooks, { healEvery = PATCH_EVERY } = {}) {
    this.f = flight;
    this.hooks = hooks;
    this.pilot = flight.pilotKey;
    this.copilots = Object.keys(CREW).filter((k) => k !== this.pilot);
    this.medic = this.copilots.includes("vltrn8") ? "vltrn8" : "qm85"; // who sends the patches and the lotus
    this.turn = 0;
    this.gapT = 4;
    this.cd = Object.fromEntries(Object.keys(EVERY).map((k) => [k, 0]));
    this.specialWas = 0;
    this.patchEvery = healEvery;
    this.patchT = healEvery;
    this.lotusCd = 0;
    this.scanT = 0;
    this.near = new WeakMap(); // bot -> last distance (who's getting closer)
    this.stats = { ...Object.fromEntries(Object.keys(EVERY).map((k) => [k, 0])), patches: 0, lotus: 0 };
  }

  #say(speaker, kind, args, { force = false } = {}) {
    if (!force && this.gapT > 0) return false;
    const text = LINES[speaker][kind](PILOT_NAME[this.pilot], ...args);
    this.gapT = GAP;
    this.hooks.say?.(CREW[speaker].label, text, { who: CREW[speaker].who, alert: ALERTS.has(kind) });
    return true;
  }

  #call(kind, ...args) {
    if (this.gapT > 0 || this.cd[kind] > 0) return false;
    const speaker = this.copilots[this.turn++ % this.copilots.length];
    this.cd[kind] = EVERY[kind];
    this.stats[kind] += 1;
    return this.#say(speaker, kind, args);
  }

  /** A moment worth a word from the crew: "freed" (district id) or "bigboss" (bot). */
  cheer(kind, arg) {
    const speaker = this.copilots[this.turn++ % this.copilots.length];
    if (kind === "freed") this.#say(speaker, "freed", [arg], { force: true });
    if (kind === "bigboss") this.#say(speaker, "bigboss", [arg.name, Boolean(arg.final)], { force: true });
  }

  /** Off-screen backup: a shield patch on a timer, the lotus shield when he's nearly down. */
  #support(dt) {
    const f = this.f;
    this.lotusCd = Math.max(0, this.lotusCd - dt);
    if (f.shield <= LOTUS_AT && f.shield > 0 && this.lotusCd <= 0) {
      this.lotusCd = LOTUS_EVERY;
      f.lotusT = LOTUS_TIME;
      this.stats.lotus += 1;
      f.fx?.pulse(f.pos.clone(), 0xff4fd8, 3);
      sfx.lotus();
      this.#say(this.medic, "lotus", [], { force: true });
    }
    if (f.shield >= f.maxShield) {
      this.patchT = this.patchEvery;
      return;
    }
    this.patchT -= dt;
    if (this.patchT > 0) return;
    this.patchT = this.patchEvery;
    f.shield = Math.min(f.maxShield, f.shield + 1);
    this.stats.patches += 1;
    f.fx?.pulse(f.pos.clone(), 0x7dffd0, 1.6);
    sfx.heal();
    this.#say(this.medic, "patch", []);
  }

  /** A pack of CLOSE_PACK+ hostiles inside CLOSE_RANGE, each nearer than last check: call it and say from where. */
  #closing() {
    const f = this.f;
    let n = 0;
    const centre = new THREE.Vector3();
    for (const b of f.swarm.alive) {
      if (b.frozen || b.patrol || b.relay || b.stationary) continue;
      const d = b.obj.position.distanceTo(f.pos);
      const was = this.near.get(b);
      this.near.set(b, d);
      if (d < CLOSE_RANGE && was !== undefined && d < was - 0.5) {
        n += 1;
        centre.add(b.obj.position);
      }
    }
    if (n < CLOSE_PACK) return false;
    const to = centre.divideScalar(n).sub(f.pos).setY(0);
    return this.#call("closing", n, clock(to, f.yaw));
  }

  update(dt) {
    const f = this.f;
    if (f.done || f.race) return;
    this.gapT = Math.max(0, this.gapT - dt);
    for (const k of Object.keys(this.cd)) this.cd[k] = Math.max(0, this.cd[k] - dt);
    this.#support(dt);
    this.scanT -= dt;
    if (this.scanT <= 0) {
      this.scanT = CLOSE_SCAN;
      if (this.#closing()) return;
    }
    const fwd = f.fight.active ? new THREE.Vector3(Math.sin(f.yaw), 0, Math.cos(f.yaw)) : f.forward();
    for (const b of f.swarm.alive) { // the one you can't see: a hostile close behind you
      if (b.frozen || b.patrol || b.relay) continue;
      const to = b.obj.position.clone().sub(f.pos);
      if (to.length() < TAIL_RANGE && to.normalize().dot(fwd) < -0.55 && this.#call("six")) return;
    }
    if (f.hunters?.scouts.some((s) => s.alive && s.patrol && s.patrol.suspicion > 0.4) && this.#call("beam")) return;
    if (f.shield <= 2 && f.shield > 0 && f.lotusT <= 0 && this.#call("shield")) return;
    const relay = f.districts?.activeRelay;
    if (relay && !relay.bot.shielded && relay.bot.obj.position.distanceTo(f.pos) < 400 && this.#call("relay")) return;
    if (f.missileLock?.()?.boss && this.#call("lock")) return;
    if (f.boss?.alive && f.boss.obj.position.distanceTo(f.pos) > 350 && this.#call("boss", f.boss.name)) return;
    const loose = f.mission?.items.some((it) => !it.locked && !it.taken && it.pos.distanceTo(f.pos) < 600);
    if (loose && (f.mission?.carrying.length ?? 0) < 3 && !f.fight.active && this.#call("stash")) return;
    const cdNow = f.specialCd ?? 0;
    if (f.specialName && this.specialWas > 0 && cdNow === 0) this.#call("special", f.specialName);
    this.specialWas = cdNow;
  }
}
