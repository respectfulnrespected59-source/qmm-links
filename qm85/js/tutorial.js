// TUTORIAL SEGMENT (owner 09-24: "how do i fire the missles? we need a tutorial segment").
// The first flight walks the player through every control, one step at a time, and each step clears only when
// the player actually DOES it. Runs once (localStorage), replayable from the home screen's TUTORIAL button.
// Phone players see the pad's button names instead of keys. T skips.
import { input } from "./input.js";
import { touch } from "./touch.js";
import { hud } from "./hud.js";

const DONE_KEY = "qm85_tutorial_done";
const MIN_STEP_TIME = 1.2; // a step is shown at least this long before it can clear (no instant skips)
const GIVE_UP_AFTER = 20; // owner 09-24 (phone): a step nobody can finish must not sit on screen forever

const STEPS = [
  {
    id: "steer", key: "←/→ TURN · ↑ DIVE · ↓ CLIMB — carve a turn and change altitude", pad: "STICK — push left/right to turn, UP to dive, DOWN to climb",
    reset: (s, f) => { s.yaw0 = f.yaw; s.pitchMax = 0; },
    done: (s, f) => { s.pitchMax = Math.max(s.pitchMax, Math.abs(f.pitch)); return Math.abs(f.yaw - s.yaw0) > 0.9 && s.pitchMax > 0.2; },
  },
  {
    id: "boost", key: "hold SPACE — BOOST (the bar is your fuel)", pad: "hold BOOST — the bar is your fuel",
    reset: (s) => { s.t = 0; },
    done: (s, f, dt) => { if (f.boosting) s.t += dt; return s.t > 0.6; },
  },
  {
    id: "fire", key: "click / L — PLASMA PUNCHES. Put the ring on a drone", pad: "hold FIRE — plasma punches. Put the ring on a drone",
    reset: (s) => { s.n = 0; },
    done: (s, f) => { s.n += f.lasers.length; return s.n > 0; },
  },
  {
    id: "missile", key: "Q — HEAT-SEEKING MISSILE. Face a drone (it locks the nearest one ahead), 3 in the rack", pad: "MISSILE — face a drone (it locks the nearest one ahead), 3 in the rack",
    reset: (s, f) => { s.ammo0 = f.missiles.ammo; },
    done: (s, f) => f.missiles.ammo < s.ammo0 || input.pressed("KeyQ", "KeyE"), // trying counts: no drone ahead = no lock, but he learned the button
  },
  { // VLTRN SPECIALS (09-25): only when Mahal's or Rob's bot is flying; clears when the cooldown starts (it fired)
    id: "special", key: "H — SPECIAL: VLTRN8's DRONE SWARM · 3BIZZLE's MISSILE CANNON (3 missiles — needs blaster LV2: grab a CYAN beam)", pad: "tap SPECIAL — VLTRN8's drone swarm · 3BIZZLE's missile cannon (blaster LV2+)",
    pilots: ["vltrn8", "bizzle"],
    reset: (s, f) => { s.n0 = f.specialTries ?? 0; },
    done: (s, f) => (f.specialTries ?? 0) > s.n0, // pressing it counts: at LV1 the cannon says why it won't fire yet
  },
  {
    id: "roll", key: "double-tap ← or → — BARREL ROLL (untouchable while rolling)", pad: "flick the stick left or right TWICE — barrel roll",
    reset: (s) => { s.hit = false; },
    done: (s) => s.hit, note: "twirl",
  },
  {
    id: "brake", key: "hold SHIFT — AIRBRAKE: flare, level out, hover", pad: "hold AIRBRAKE — flare, level out, hover",
    reset: (s) => { s.t = 0; },
    done: (s, f, dt) => { if (f.braking) s.t += dt; return s.t > 0.5; },
  },
  {
    id: "land", key: "get under 45 m over a street or rooftop and press F — LAND (F again = fly)", pad: "get under 45 m over a street or rooftop and tap LAND / FLY",
    only: "oakland",
    reset: () => {},
    done: (s, f) => f.fight.active,
  },
  { // GROUND COMBAT (09-25)
    id: "punch", key: "on foot: R — PUNCH (the VLTRNs swing their blades). Press it 3 times fast = the 3-HIT COMBO", pad: "on foot: tap PUNCH / SWORD 3 times fast = the 3-hit combo",
    only: "oakland",
    reset: (s, f) => { s.n0 = f.fight.combat.stats.punches; },
    done: (s, f) => f.fight.combat.stats.punches - s.n0 >= 3,
  },
  {
    id: "dodge", key: "on foot: SHIFT — DODGE ROLL (hold A / D / S to roll that way). SPACE then R = GROUND POUND", pad: "on foot: tap DODGE to roll. JUMP then PUNCH = ground pound",
    only: "oakland",
    reset: (s, f) => { s.n0 = f.fight.combat.stats.dodges; },
    done: (s, f) => f.fight.combat.stats.dodges > s.n0,
  },
];

let skipRequested = false;

function el() {
  let e = document.getElementById("tutor");
  if (e) return e;
  e = document.createElement("div");
  e.id = "tutor";
  e.hidden = true;
  // phones have no T key: a real SKIP button (the card itself stays click-through so it never blocks flying)
  e.innerHTML = `<b></b><span></span><i>T = skip</i><button type="button" class="tutor-skip">SKIP TUTORIAL</button>`;
  document.body.appendChild(e);
  e.querySelector(".tutor-skip").addEventListener("pointerdown", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    skipRequested = true;
  });
  return e;
}

class Tutorial {
  constructor() {
    this.steps = [];
    this.i = -1;
    this.state = {};
    this.shownFor = 0;
  }

  get active() {
    return this.i >= 0 && this.i < this.steps.length;
  }

  static isDone() {
    try {
      return localStorage.getItem(DONE_KEY) === "1";
    } catch {
      return false;
    }
  }

  static markDone(done) {
    try {
      if (done) localStorage.setItem(DONE_KEY, "1");
      else localStorage.removeItem(DONE_KEY);
    } catch {
      // storage blocked: the tutorial just runs again next time
    }
  }

  /** Called when a flight starts. Runs on the first flight, or when force is set (home screen TUTORIAL button). */
  start(zone, force = false, pilot = "qm85") {
    this.stop();
    if (!force && Tutorial.isDone()) return;
    this.steps = STEPS.filter((s) => (!s.only || s.only === zone) && (!s.pilots || s.pilots.includes(pilot)));
    this.i = 0;
    this.#enter();
  }

  stop() {
    this.i = -1;
    el().hidden = true;
  }

  /** Move events from FlightBattle (twirl, hyper, strike...). */
  note(kind) {
    if (this.active && this.steps[this.i].note === kind) this.state.hit = true;
  }

  update(f, dt) {
    if (!this.active || !f) return;
    this.shownFor += dt;
    if (input.pressed("KeyT") || skipRequested) {
      skipRequested = false;
      this.#finish(true);
      return;
    }
    const step = this.steps[this.i];
    const did = step.done(this.state, f, dt); // runs every frame so hold-timers count from the moment the step shows
    if (did) this.state.did = true;
    const gaveUp = !this.state.did && this.shownFor >= GIVE_UP_AFTER;
    if ((this.shownFor >= MIN_STEP_TIME && this.state.did) || gaveUp) {
      hud.toast(gaveUp ? `${step.id.toUpperCase()} — TRY IT LATER` : "✓ " + step.id.toUpperCase());
      this.i += 1;
      if (this.i >= this.steps.length) this.#finish(false);
      else this.#enter(f);
    }
  }

  #enter(f) {
    const step = this.steps[this.i];
    this.state = {};
    this.shownFor = 0;
    step.reset(this.state, f ?? { yaw: 0, pitch: 0, missiles: { ammo: 3 } });
    const e = el();
    e.querySelector("b").textContent = `TUTORIAL ${this.i + 1}/${this.steps.length}`;
    e.querySelector("span").textContent = touch.enabled ? step.pad : step.key;
    e.hidden = false;
  }

  #finish(skipped) {
    this.stop();
    Tutorial.markDone(true);
    hud.toast(skipped ? "TUTORIAL SKIPPED — replay it from the home screen" : "TUTORIAL COMPLETE — LV2 thrusters unlock the HYPER LOOP (↑↑ / ↓↓)");
  }
}

export const tutorial = new Tutorial();
export const resetTutorial = () => Tutorial.markDone(false);
