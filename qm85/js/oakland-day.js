// DAY CYCLE for the Oakland mission (owner 09-24): "it starts off easy, if u survive till noon it gets more
// difficult and more traffic on the streets, and there's a mid level medium boss to defeat, after that u make it
// to night mode, where the REAL BIG BOSS is waiting". Reaching NOON and NIGHT saves a CHECKPOINT to continue from.
//
//   DAWN  06:30 → NOON 12:00 (easy, half the traffic)        NOON → AFTERNOON 16:30 (hard, full traffic)
//   AFTERNOON: THE OVERSEER (mid boss) — the clock holds until he's down
//   DUSK → NIGHT 21:00: lit windows, streetlights, headlights, stars — and THE SERPENT PRIEST
import * as THREE from "three";

const CP_KEY = "qm85_oakland_checkpoint";
// clock hour at each stop, and the real seconds of play needed to reach it. FREE OAKLAND (09-25) stretched the day
// 1.5x (was 150 / 300 / 380 / 430 s): six districts to liberate need the daylight.
const STOPS = [
  { name: "DAWN", hour: 6.5, at: 0 },
  { name: "NOON", hour: 12, at: 225 },
  { name: "AFTERNOON", hour: 16.5, at: 450 },
  { name: "DUSK", hour: 19.2, at: 570 },
  { name: "NIGHT", hour: 21, at: 645 },
];
const CHECKPOINTS = new Set(["NOON", "NIGHT"]);
const SUN_AZIMUTH_DAWN = 100; // the sun tracks east → west across the day
const SUN_AZIMUTH_DUSK = 250;

const lerp = THREE.MathUtils.lerp;
const clamp01 = (v) => Math.min(1, Math.max(0, v));

const count = (v) => (Number.isFinite(v) && v >= 0 ? Math.floor(v) : 0);

/** The saved checkpoint, or null when there is none — or when it's damaged or from an older build (09-25 review: a
 *  record missing `delivered` crashed the SHOT DOWN card on every death, and only clearing storage got out of it). */
export function loadCheckpoint() {
  try {
    const raw = JSON.parse(localStorage.getItem(CP_KEY) ?? "null");
    if (!raw || typeof raw !== "object" || !CHECKPOINTS.has(raw.phase)) return null; // phase goes into card HTML: only known names
    const d = raw.delivered && typeof raw.delivered === "object" ? raw.delivered : {};
    return {
      ...raw,
      delivered: { data: count(d.data), part: count(d.part) },
      thrust: Math.min(3, Math.max(1, count(raw.thrust))),
      blaster: Math.min(5, Math.max(1, count(raw.blaster))),
      score: count(raw.score),
      freed: Array.isArray(raw.freed) ? raw.freed.filter((id) => typeof id === "string") : [],
    };
  } catch {
    return null;
  }
}

export function clearCheckpoint() {
  try {
    localStorage.removeItem(CP_KEY);
  } catch {
    // nothing to clear
  }
}

export class DayCycle {
  /** hooks: { onPhase(name, clock, jumped), onMidBoss(), onFinalBoss(), onCheckpoint(cp), snapshot() -> extra checkpoint data } */
  constructor(hooks) {
    this.hooks = hooks;
    this.t = 0;
    this.midBossDown = false;
    this.holding = false; // the clock waits for the Overseer
    this.finalSent = false;
  }

  /** Jump straight to a saved stop (continue from a checkpoint). */
  jumpTo(name) {
    const i = STOPS.findIndex((s) => s.name === name);
    if (i < 0) return;
    this.t = STOPS[i].at;
    if (i > 2) this.midBossDown = true; // past the afternoon: the Overseer is history
    this.hooks.onPhase?.(name, this.clock, true);
    if (name === "NIGHT" && !this.finalSent) {
      this.finalSent = true;
      this.hooks.onFinalBoss?.();
    }
  }

  /** The current stop's name — derived from the clock, so it can never disagree with it. */
  get phase() {
    return STOPS[this.stopIndex].name;
  }

  get stopIndex() {
    let i = 0;
    for (let k = 0; k < STOPS.length; k++) if (this.t >= STOPS[k].at) i = k;
    return i;
  }

  /** Clock hour 6.5..24, interpolated between stops. */
  get hour() {
    const i = this.stopIndex;
    const a = STOPS[i];
    const b = STOPS[i + 1];
    if (!b) return Math.min(24, a.hour + (this.t - a.at) / 120);
    return lerp(a.hour, b.hour, clamp01((this.t - a.at) / (b.at - a.at)));
  }

  get clock() {
    const h = this.hour;
    const hh = Math.floor(h) % 24;
    const mm = Math.floor((h % 1) * 60);
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
  }

  /** 0 = full day, 1 = full night (drives every light in the city). */
  get night01() {
    const h = this.hour;
    if (h < 17.5) return 0;
    return clamp01((h - 17.5) / 3.2);
  }

  /** Sun direction for this hour: rises in the east, sinks in the west, dips under the horizon at night. */
  get sunDir() {
    const h = this.hour;
    const day = clamp01((h - 6) / 14.5); // 06:00 → 20:30
    const elev = Math.sin(day * Math.PI) * 58 - 2 + (h > 20.5 ? -(h - 20.5) * 12 : 0);
    const az = lerp(SUN_AZIMUTH_DAWN, SUN_AZIMUTH_DUSK, day);
    return new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - Math.max(-25, elev)), THREE.MathUtils.degToRad(az));
  }

  /** Enemy difficulty: 1 at dawn → ~2.4 at night. Speed, fire rate, hp and "intelligence" scale with it. */
  get difficulty() {
    return 1 + clamp01(this.t / STOPS[4].at) * 1.4;
  }

  /** Share of the traffic that is on the road: half at dawn, all by noon. */
  get traffic01() {
    return lerp(0.5, 1, clamp01(this.t / STOPS[1].at));
  }

  get exposure() {
    return lerp(0.82, 0.95, this.night01);
  }

  update(dt, { midBossAlive }) {
    if (this.holding) {
      if (midBossAlive) return;
      this.holding = false;
      this.midBossDown = true;
    }
    const before = this.stopIndex;
    this.t += dt;
    const after = this.stopIndex;
    if (after !== before) this.#enter(STOPS[after].name);
  }

  #enter(name) {
    this.hooks.onPhase?.(name, this.clock, false);
    if (name === "AFTERNOON" && !this.midBossDown) {
      this.holding = true;
      this.hooks.onMidBoss?.();
    }
    if (name === "NIGHT" && !this.finalSent) {
      this.finalSent = true;
      this.hooks.onFinalBoss?.();
    }
    if (CHECKPOINTS.has(name)) {
      const cp = { phase: name, savedAt: new Date().toISOString(), ...(this.hooks.snapshot?.() ?? {}) };
      try {
        localStorage.setItem(CP_KEY, JSON.stringify(cp));
      } catch {
        // storage blocked: the run still plays, it just won't resume
      }
      this.hooks.onCheckpoint?.(cp);
    }
  }
}
