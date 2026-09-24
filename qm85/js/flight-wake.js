// WATER WAKE (owner 09-24: "when flyin over water add a wave effect to show our speed blowin the water").
// Low and fast over the Bay or Lake Merritt, QM85's thrust tears up the surface: a rooster tail of spray kicked
// up behind him and a trail of foam rings spreading on the water. Stronger the lower and faster he flies.
import * as THREE from "three";

const WATER_Y = 0.06; // the Bay plane (oakland-scenery.js bay())
const MAX_ALT = 16; // above this the water doesn't feel him
const MIN_SPEED = 10;
const FULL_SPEED = 55;
const SPRAY_MAX = 260;
const RING_EVERY = 0.05;
const RING_LIFE = 1.6;
const CHECK_EVERY = 0.1; // the water-polygon test is not free: cache it

function sprayTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,0.95)");
  grad.addColorStop(0.45, "rgba(235,245,255,0.5)");
  grad.addColorStop(1, "rgba(220,235,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Wake {
  constructor(root) {
    this.root = root;
    this.tex = sprayTexture();
    this.spray = [];
    this.rings = [];
    this.ringGeo = new THREE.RingGeometry(0.8, 1, 40).rotateX(-Math.PI / 2);
    this.emitT = 0;
    this.ringT = 0;
    this.checkT = 0;
    this.over = false;
    this.strength = 0; // 0..1, exposed for tests
  }

  #overWater(f) {
    const a = f.arena;
    if (!a.isWater) return false;
    return (a.shoreX !== undefined && f.pos.x < a.shoreX) || a.isWater(f.pos.x, f.pos.z);
  }

  update(dt, f) {
    this.checkT -= dt;
    if (this.checkT <= 0) {
      this.checkT = CHECK_EVERY;
      this.over = !f.fight.active && this.#overWater(f);
    }
    const alt = f.pos.y - WATER_Y;
    const speed = f.vel.length();
    const low = THREE.MathUtils.clamp((MAX_ALT - alt) / (MAX_ALT - 2), 0, 1);
    const fast = THREE.MathUtils.clamp((speed - MIN_SPEED) / (FULL_SPEED - MIN_SPEED), 0, 1);
    this.strength = this.over && speed > MIN_SPEED ? low * (0.25 + 0.75 * fast) : 0;
    if (this.strength > 0.02) this.#emit(dt, f, speed);
    this.#tick(dt);
  }

  #emit(dt, f, speed) {
    const k = this.strength;
    const fwd = f.vel.clone().setY(0).normalize();
    const side = new THREE.Vector3(-fwd.z, 0, fwd.x);
    // The camera rides 1.75 m behind him at up to 60+ m/s: spray left behind is gone in a few hundredths of a second.
    // So the water is thrown out AHEAD and to the SIDES carrying most of his speed (a speedboat's side spray):
    // it hangs in view, arcs out wide, then falls behind as it slows.
    this.emitT -= dt;
    const rate = 50 + 220 * k;
    while (this.emitT <= 0 && this.spray.length < SPRAY_MAX) {
      this.emitT += 1 / rate;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.tex, color: 0xf2f8ff, transparent: true, opacity: 0.85, depthWrite: false }));
      const s = Math.random() < 0.5 ? 1 : -1; // left or right plume
      sp.position.set(f.pos.x, WATER_Y + 0.2, f.pos.z).addScaledVector(fwd, 2 + Math.random() * 5).addScaledVector(side, s * (1.4 + Math.random() * 2.2)); // out to his sides: keep the middle of the screen clear
      const v = fwd.clone().multiplyScalar(speed * (0.7 + Math.random() * 0.25))
        .addScaledVector(side, s * (4 + Math.random() * 8 * k))
        .add(new THREE.Vector3(0, 2.5 + Math.random() * 7 * k, 0));
      const life = 0.6 + Math.random() * 0.6;
      sp.scale.setScalar(0.5);
      this.root.add(sp);
      this.spray.push({ sp, v, life, max: life, grow: 0.9 + 1.8 * k });
    }
    if (this.emitT < 0) this.emitT = 0; // pool full: don't bank a burst for later
    // foam rings: dropped just ahead of him so they spread across the view before he passes over them
    this.ringT -= dt;
    if (this.ringT <= 0) {
      this.ringT = RING_EVERY;
      const mat = new THREE.MeshBasicMaterial({ color: 0xe8f4ff, transparent: true, opacity: 0.6 * k, depthWrite: false, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(this.ringGeo, mat);
      ring.position.set(f.pos.x, WATER_Y + 0.05, f.pos.z).addScaledVector(fwd, 6);
      ring.scale.setScalar(1 + k);
      this.root.add(ring);
      this.rings.push({ ring, life: RING_LIFE, k, spread: 3 + speed * 0.12 });
    }
  }

  #tick(dt) {
    for (const p of this.spray) {
      p.life -= dt;
      p.v.y -= 14 * dt;
      p.v.multiplyScalar(Math.exp(-dt * 1.4)); // air drag: the spray slows and falls behind him
      p.sp.position.addScaledVector(p.v, dt);
      if (p.sp.position.y < WATER_Y) p.life = 0;
      const t = 1 - Math.max(0, p.life) / p.max;
      p.sp.scale.setScalar(0.6 + t * p.grow);
      p.sp.material.opacity = 0.72 * (1 - t);
      if (p.life <= 0) {
        this.root.remove(p.sp);
        p.sp.material.dispose();
      }
    }
    this.spray = this.spray.filter((p) => p.life > 0);
    for (const r of this.rings) {
      r.life -= dt;
      const t = 1 - Math.max(0, r.life) / RING_LIFE;
      r.ring.scale.setScalar(1 + r.k + t * r.spread);
      r.ring.material.opacity = 0.55 * r.k * (1 - t) ** 1.5;
      if (r.life <= 0) {
        this.root.remove(r.ring);
        r.ring.material.dispose();
      }
    }
    this.rings = this.rings.filter((r) => r.life > 0);
  }
}
