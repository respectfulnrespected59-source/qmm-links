// RING RACES (owner 09-25): time trials on the real map. 3-2-1-GO, then fly the gates IN ORDER — the next gate
// burns gold with a light column over it, the one after is a faint outline, passed gates vanish. Pass = cross the
// gate's plane inside its ring, travelling the right way. Your best time and splits live in localStorage; every
// gate shows your split against the best run.
import * as THREE from "three";
import { buildCourse } from "./race-courses.js";
import { sfx } from "./audio.js";

const GATE_R = 7.5; // ring radius — pass inside this
const COUNTDOWN = 3;
const BEST_KEY = "qm85_race_best";

export function loadBests() {
  try {
    const raw = JSON.parse(localStorage.getItem(BEST_KEY) ?? "{}");
    return raw && typeof raw === "object" ? raw : {};
  } catch {
    return {};
  }
}

function saveBest(id, run) {
  try {
    localStorage.setItem(BEST_KEY, JSON.stringify({ ...loadBests(), [id]: run }));
  } catch {
    // private window: the best just won't stick
  }
}

export const fmtTime = (s) => {
  if (!Number.isFinite(s)) return "--:--.--";
  const m = Math.floor(s / 60);
  const sec = s - m * 60;
  return `${m}:${sec.toFixed(2).padStart(5, "0")}`;
};

function numberSprite(label, finish) {
  const c = document.createElement("canvas");
  c.width = 192;
  c.height = 128;
  const g = c.getContext("2d");
  g.font = "900 64px Orbitron, Arial Black, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.lineWidth = 8;
  g.strokeStyle = "#1a1004";
  g.strokeText(label, 96, 68);
  g.fillStyle = finish ? "#ffffff" : "#ffcf5a";
  g.fillText(label, 96, 68);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  s.scale.set(7.5, 5, 1);
  return s;
}

export class Race {
  /** hooks: { onGate(i, total, split), onFinish(result), onGo() } */
  constructor(root, arena, flight, courseId, hooks) {
    this.root = root;
    this.f = flight;
    this.hooks = hooks;
    this.course = buildCourse(courseId, arena);
    this.best = loadBests()[courseId] ?? null;
    this.state = "countdown";
    this.count = COUNTDOWN;
    this.lastBeep = COUNTDOWN + 1;
    this.t = 0;
    this.next = 0;
    this.splits = [];
    this.gates = this.course.gates.map((c, i) => this.#gate(c, i));
    this.#show();
  }

  get holding() {
    return this.state === "countdown";
  }

  get total() {
    return this.gates.length;
  }

  #gate(center, i) {
    const pts = this.course.gates;
    const to = (pts[i + 1] ?? pts[i]).clone().sub(pts[i - 1] ?? pts[i]);
    if (to.lengthSq() < 1) to.set(0, 0, 1);
    const normal = to.normalize();
    const finish = i === pts.length - 1;
    const g = new THREE.Group();
    g.position.copy(center);
    g.lookAt(center.clone().add(normal));
    const mat = new THREE.MeshBasicMaterial({ color: finish ? 0xffffff : 0xffcf5a, transparent: true, opacity: 1 });
    g.add(new THREE.Mesh(new THREE.TorusGeometry(GATE_R, 0.4, 10, 48), mat));
    const glow = new THREE.MeshBasicMaterial({ color: finish ? 0xfff6d0 : 0xffb338, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false });
    g.add(new THREE.Mesh(new THREE.TorusGeometry(GATE_R, 1.2, 8, 48), glow));
    const num = numberSprite(finish ? "FIN" : String(i + 1), finish);
    num.position.y = GATE_R + 3;
    g.add(num);
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 300, 8, 1, true).translate(0, 150 + GATE_R, 0),
      new THREE.MeshBasicMaterial({ color: 0xffcf5a, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    column.quaternion.copy(g.quaternion).invert(); // the column stays vertical whichever way the ring faces
    g.add(column);
    this.root.add(g);
    return { g, mat, glow, column, center: center.clone(), normal, finish };
  }

  /** Next gate: bright + column; the one after: faint outline; the rest hidden. */
  #show() {
    this.gates.forEach((gate, i) => {
      const rel = i - this.next;
      gate.g.visible = rel === 0 || rel === 1;
      gate.column.visible = rel === 0;
      gate.mat.opacity = rel === 0 ? 1 : 0.35;
      gate.glow.visible = rel === 0;
    });
  }

  waypoint() {
    return this.gates[this.next]?.center ?? null;
  }

  update(dt, prevPos) {
    if (this.state === "countdown") {
      this.count -= dt;
      const whole = Math.ceil(this.count);
      if (whole < this.lastBeep && whole > 0) {
        this.lastBeep = whole;
        sfx.countBeep(false);
      }
      if (this.count <= 0) {
        this.state = "racing";
        sfx.countBeep(true);
        this.hooks.onGo?.();
      }
      return;
    }
    if (this.state !== "racing") return;
    this.t += dt;
    const gate = this.gates[this.next];
    gate.g.scale.setScalar(1 + 0.06 * Math.sin(this.t * 8));
    if (this.#crossed(gate, prevPos, this.f.pos)) this.#pass();
  }

  #crossed(gate, a, b) {
    const s0 = a.clone().sub(gate.center).dot(gate.normal);
    const s1 = b.clone().sub(gate.center).dot(gate.normal);
    if (!(s0 < 0 && s1 >= 0)) return false; // must go through the right way
    const hit = a.clone().lerp(b, s0 / (s0 - s1));
    return hit.distanceTo(gate.center) < GATE_R * 1.08;
  }

  #pass() {
    const i = this.next;
    this.splits.push(this.t);
    const bestSplit = this.best?.splits?.[i];
    const split = Number.isFinite(bestSplit) ? this.t - bestSplit : null;
    this.gates[i].g.visible = false;
    this.next += 1;
    sfx.gatePass(this.next === this.total);
    this.f.fuel = Math.min(1, this.f.fuel + 0.12); // every gate tops the tank up a little: clean lines pay
    if (this.next >= this.total) {
      this.#finish();
      return;
    }
    this.#show();
    this.hooks.onGate?.(this.next, this.total, split);
  }

  #finish() {
    this.state = "done";
    const time = this.t;
    const m = this.course.medals;
    const medal = time <= m.gold ? "GOLD" : time <= m.silver ? "SILVER" : time <= m.bronze ? "BRONZE" : null;
    const prev = this.best?.time ?? Infinity;
    const record = time < prev;
    if (record) saveBest(this.course.id, { time, splits: this.splits, at: new Date().toISOString() });
    this.hooks.onFinish?.({ course: this.course.id, time, medal, record, prev: Number.isFinite(prev) ? prev : null, medals: m, length: this.course.length });
  }

  /** HUD numbers. */
  get hud() {
    return {
      state: this.state, count: Math.ceil(this.count), time: this.t, gate: Math.min(this.next + 1, this.total), total: this.total,
      best: this.best?.time ?? null, medals: this.course.medals,
    };
  }

  dispose() {
    for (const g of this.gates) this.root.remove(g.g);
  }
}
