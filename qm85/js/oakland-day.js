// DAY CYCLE for the Oakland mission (owner 09-24): "it starts off easy, if u survive till noon it gets more
// difficult and more traffic on the streets, and there's a mid level medium boss to defeat, after that u make it
// to night mode, where the REAL BIG BOSS is waiting". Reaching NOON and NIGHT saves a CHECKPOINT to continue from —
// and (owner 09-30: "u can literally fly around for hours… pause and save progress, to return to later") pausing
// saves the exact moment: clock, position, what's delivered and carried, levels, freed districts.
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
const PHASES = new Set(STOPS.map((s) => s.name));
const CHECKPOINTS = new Set(["NOON", "NIGHT"]); // the automatic saves
const MAX_T = STOPS[4].at + 3 * 3600; // a saved clock past this is nonsense: fall back to the phase's start
const KINDS = new Set(["data", "part"]);
const PILOTS = new Set(["qm85", "vltrn8", "bizzle"]);
const CARRY_MAX = 3;
const SUN_AZIMUTH_DAWN = 100; // the sun tracks east → west across the day
const SUN_AZIMUTH_DUSK = 250;

const lerp = THREE.MathUtils.lerp;
const clamp01 = (v) => Math.min(1, Math.max(0, v));

const count = (v) => (Number.isFinite(v) && v >= 0 ? Math.floor(v) : 0);
const finite = (v, fallback) => (Number.isFinite(v) ? v : fallback);

function stopIndexAt(t) {
  let i = 0;
  for (let k = 0; k < STOPS.length; k++) if (t >= STOPS[k].at) i = k;
  return i;
}

/** Clock hour 6.5..24 at `t` seconds of play, interpolated between stops. */
function hourAt(t) {
  const i = stopIndexAt(t);
  const a = STOPS[i];
  const b = STOPS[i + 1];
  if (!b) return Math.min(24, a.hour + (t - a.at) / 120);
  return lerp(a.hour, b.hour, clamp01((t - a.at) / (b.at - a.at)));
}

/** "14:32" for `t` seconds of play — the save's clock, on cards and buttons. */
export function clockAt(t) {
  const h = hourAt(t);
  const hh = Math.floor(h) % 24;
  const mm = Math.floor((h % 1) * 60);
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

/** The saved run, or null when there is none — or when it's damaged or from an older build (09-25 review: a
 *  record missing `delivered` crashed the SHOT DOWN card on every death, and only clearing storage got out of it).
 *  Every field is validated: this record goes into card HTML and straight into the sim. */
export function loadCheckpoint() {
  try {
    const raw = JSON.parse(localStorage.getItem(CP_KEY) ?? "null");
    if (!raw || typeof raw !== "object" || !PHASES.has(raw.phase)) return null;
    const stop = STOPS.find((s) => s.name === raw.phase);
    const next = STOPS[STOPS.indexOf(stop) + 1];
    const inPhase = Number.isFinite(raw.t) && raw.t >= stop.at && raw.t < (next?.at ?? MAX_T);
    const t = inPhase ? raw.t : stop.at; // a clock that disagrees with its phase: start the phase over
    const d = raw.delivered && typeof raw.delivered === "object" ? raw.delivered : {};
    const pos = Array.isArray(raw.pos) && raw.pos.length === 3 && raw.pos.every(Number.isFinite) ? raw.pos.map(Number) : null;
    return {
      phase: raw.phase,
      savedAt: typeof raw.savedAt === "string" ? raw.savedAt : "",
      t,
      clock: clockAt(t),
      midBossDown: raw.midBossDown === true || STOPS.indexOf(stop) > 2,
      delivered: { data: count(d.data), part: count(d.part) },
      carrying: Array.isArray(raw.carrying) ? raw.carrying.filter((k) => KINDS.has(k)).slice(0, CARRY_MAX) : [],
      thrust: Math.min(3, Math.max(1, count(raw.thrust))),
      blaster: Math.min(5, Math.max(1, count(raw.blaster))),
      score: count(raw.score),
      freed: Array.isArray(raw.freed) ? raw.freed.filter((id) => typeof id === "string") : [],
      pos,
      yaw: finite(raw.yaw, 0),
      pilot: PILOTS.has(raw.pilot) ? raw.pilot : null,
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

function writeCheckpoint(cp) {
  try {
    localStorage.setItem(CP_KEY, JSON.stringify(cp));
    return true;
  } catch {
    return false; // storage blocked: the run still plays, it just won't resume
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

  /**
   * Jump straight to a saved stop (continue from a checkpoint or a pause-save). `t` = the exact saved clock inside
   * that stop; a save made while the Overseer was still up puts him back on the bridge and holds the clock again.
   */
  jumpTo(name, { t = null, midBossDown = false } = {}) {
    const i = STOPS.findIndex((s) => s.name === name);
    if (i < 0) return;
    const next = STOPS[i + 1];
    this.t = t !== null && t >= STOPS[i].at && t < (next?.at ?? MAX_T) ? t : STOPS[i].at;
    this.midBossDown = midBossDown || i > 2; // past the afternoon: the Overseer is history
    this.hooks.onPhase?.(name, this.clock, true);
    if (name === "AFTERNOON" && !this.midBossDown) {
      this.holding = true;
      this.hooks.onMidBoss?.();
    }
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
    return stopIndexAt(this.t);
  }

  /** Clock hour 6.5..24, interpolated between stops. */
  get hour() {
    return hourAt(this.t);
  }

  get clock() {
    return clockAt(this.t);
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

  /** Everything a resume needs, right now. */
  record() {
    return { phase: this.phase, savedAt: new Date().toISOString(), t: this.t, midBossDown: this.midBossDown, ...(this.hooks.snapshot?.() ?? {}) };
  }

  /** PAUSE & SAVE (09-30): write the exact moment. Returns the record (with its clock) or null if storage is blocked. */
  save() {
    const cp = this.record();
    return writeCheckpoint(cp) ? { ...cp, clock: this.clock } : null;
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
      const cp = this.record();
      writeCheckpoint(cp);
      this.hooks.onCheckpoint?.(cp);
    }
  }
}
