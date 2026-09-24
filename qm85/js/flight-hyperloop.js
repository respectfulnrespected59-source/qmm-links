// HYPER LOOP (owner 09-24): past thruster LV1, double-tap ↑ or ↓ in flight -> QM85 whips a full thruster
// loop (↑ over the top, ↓ under) with his thrusters glowing and smoke pouring off them, the camera swings wide
// like QM3D Racing's drift cam, then he BLASTS OFF boosted in whichever direction you press next
// (← / → = hard 90° break left / right, ↑ = dive out, ↓ = climb out). No press = blast straight ahead.
import * as THREE from "three";
import { input } from "./input.js";
import { sfx } from "./audio.js";

const DOUBLE_TAP = 0.28;
const LOOP_TIME = 0.85;
const AIM_WINDOW = 0.6;
const BLAST_SPEED = 1.35; // × the current thruster level's boost
const SMOKE_EVERY = 0.025;
const SMOKE_LIFE = 1.4;
const MIN_LEVEL = 2;

function smokeTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,0.75)");
  grad.addColorStop(0.5, "rgba(210,205,225,0.35)");
  grad.addColorStop(1, "rgba(200,200,210,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class HyperLoop {
  constructor(root) {
    this.root = root;
    this.state = "idle"; // idle | loop | aim
    this.t = 0;
    this.lastTap = { up: -9, down: -9 };
    this.puffs = [];
    this.puffT = 0;
    this.tex = smokeTexture();
    this.cam = 0; // 0..1 drift-cam amount, eased
  }

  get active() {
    return this.state !== "idle";
  }

  /** Double-tap detection (↑ = over the top, ↓ = under). Returns true when a loop starts. */
  listen(f, now) {
    if (this.active || f.thrust < MIN_LEVEL || f.fight.active || f.mega.busy || f.moves.busy) return false;
    for (const [dir, codes] of [["up", ["ArrowUp", "KeyW"]], ["down", ["ArrowDown", "KeyS"]]]) {
      if (!input.pressed(...codes)) continue;
      if (now - this.lastTap[dir] < DOUBLE_TAP) {
        this.#start(f, dir);
        this.lastTap[dir] = -9;
        return true;
      }
      this.lastTap[dir] = now;
    }
    return false;
  }

  #start(f, dir) {
    this.state = "loop";
    this.t = 0;
    this.sign = dir === "up" ? 1 : -1;
    this.pitch0 = f.pitch;
    this.choice = null;
    sfx.megaCharge();
    f.hooks.onMove?.("hyper");
  }

  /** Owns pitch during the loop and the aim window. Returns true while it's steering. */
  update(dt, f) {
    this.cam = THREE.MathUtils.damp(this.cam, this.active ? 1 : 0, 5, dt);
    this.#smoke(dt, f);
    if (!this.active) return false;
    this.t += dt;
    if (this.state === "loop") {
      const k = Math.min(1, this.t / LOOP_TIME);
      const ease = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
      f.pitch = this.pitch0 + this.sign * ease * Math.PI * 2;
      f.pitchRate = 0;
      f.speed = Math.max(f.speed, 26);
      this.#readChoice();
      if (k >= 1) {
        f.pitch = this.pitch0;
        this.state = "aim";
        this.t = 0;
      }
      return true;
    }
    this.#readChoice();
    if (this.choice || this.t >= AIM_WINDOW) this.#blast(f);
    return true;
  }

  #readChoice() {
    if (this.choice) return;
    if (input.pressed("ArrowLeft", "KeyA")) this.choice = "left";
    else if (input.pressed("ArrowRight", "KeyD")) this.choice = "right";
    else if (this.state === "aim" && input.pressed("ArrowUp", "KeyW")) this.choice = "down"; // flight-sim: ↑ = nose down
    else if (this.state === "aim" && input.pressed("ArrowDown", "KeyS")) this.choice = "up";
  }

  #blast(f) {
    const c = this.choice;
    if (c === "left") f.yaw += Math.PI / 2;
    if (c === "right") f.yaw -= Math.PI / 2;
    f.pitch = c === "up" ? 0.6 : c === "down" ? -0.45 : Math.max(-0.3, Math.min(0.3, this.pitch0));
    f.yawRate = 0;
    f.bank = c === "left" ? -0.9 : c === "right" ? 0.9 : 0;
    f.speed = f.thrustBoost * BLAST_SPEED;
    f.blastT = 1.1;
    f.moves.fovKick = 20;
    this.state = "idle";
    sfx.sonicBoom();
    f.hooks.onMove?.("hyperBlast");
  }

  /** Smoke + glow off the soles while looping (and a short tail after the blast). */
  #smoke(dt, f) {
    const pouring = this.active || this.cam > 0.3;
    this.puffT -= dt;
    if (pouring && this.puffT <= 0) {
      this.puffT = SMOKE_EVERY;
      for (const flame of f.pilot.flames) {
        const at = flame.getWorldPosition(new THREE.Vector3());
        const mat = new THREE.SpriteMaterial({ map: this.tex, transparent: true, depthWrite: false, opacity: 0.8, color: 0xe8e2f2 });
        const s = new THREE.Sprite(mat);
        s.position.copy(at);
        s.scale.setScalar(0.6);
        this.root.add(s);
        this.puffs.push({ s, life: SMOKE_LIFE, drift: new THREE.Vector3((Math.random() - 0.5) * 0.8, 0.6 + Math.random() * 0.5, (Math.random() - 0.5) * 0.8) });
      }
    }
    for (const p of this.puffs) {
      p.life -= dt;
      const k = 1 - p.life / SMOKE_LIFE;
      p.s.position.addScaledVector(p.drift, dt);
      p.s.scale.setScalar(0.6 + k * 4.5);
      p.s.material.opacity = Math.max(0, 0.75 * (1 - k));
      if (p.life <= 0) {
        this.root.remove(p.s);
        p.s.material.dispose();
      }
    }
    this.puffs = this.puffs.filter((p) => p.life > 0);
  }
}
