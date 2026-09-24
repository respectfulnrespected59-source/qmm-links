// TUTORIAL SEGMENT (owner 09-24: "how do i fire the missles? we need a tutorial segment").
// The first flight walks the player through every control, one step at a time, and each step clears only when
// the player actually DOES it. Runs once (localStorage), replayable from the home screen's TUTORIAL button.
// Phone players see the pad's button names instead of keys. T skips.
import { input } from "./input.js";
import { touch } from "./touch.js";
import { hud } from "./hud.js";

const DONE_KEY = "qm85_tutorial_done";
const MIN_STEP_TIME = 1.2; // a step is shown at least this long before it can clear (no instant skips)

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
    done: (s, f) => f.missiles.ammo < s.ammo0,
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
];

function el() {
  let e = document.getElementById("tutor");
  if (e) return e;
  e = document.createElement("div");
  e.id = "tutor";
  e.hidden = true;
  e.innerHTML = `<b></b><span></span><i>T = skip</i>`;
  document.body.appendChild(e);
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
  start(zone, force = false) {
    this.stop();
    if (!force && Tutorial.isDone()) return;
    this.steps = STEPS.filter((s) => !s.only || s.only === zone);
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
    if (input.pressed("KeyT")) {
      this.#finish(true);
      return;
    }
    const step = this.steps[this.i];
    const did = step.done(this.state, f, dt); // runs every frame so hold-timers count from the moment the step shows
    if (did) this.state.did = true;
    if (this.shownFor >= MIN_STEP_TIME && this.state.did) {
      hud.toast("✓ " + step.id.toUpperCase());
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
