// KILL FEEDBACK (owner 09-24 audit pick #1): enemies used to just vanish. Now every kill is a fireball in the
// faction's colour, a shockwave ring, tumbling debris that falls to the street and a spray of embers; bosses go
// down in a chain of blasts. Everything here is additive / unlit so it reads in daylight haze and at night.
import * as THREE from "three";

const COLORS = { // fireball core / outer / debris
  virus: [0xe6ffb0, 0x7dff3a, 0x2f5a12],
  palantir: [0xeaffff, 0x5fd8ff, 0x1c2a3a],
  shadow: [0xfff1c8, 0xff8a2a, 0x151515],
  acolyte: [0xf4e2ff, 0xa45bff, 0x2a1438],
  boss: [0xfff6d0, 0xffb338, 0x1a1208],
};
const DEBRIS = 12;
const GRAVITY = 20;

const additive = (color) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false });

export class KillFX {
  constructor(root) {
    this.root = root;
    this.live = []; // { mesh, life, max, update(k, dt) }
    this.queue = []; // delayed blasts for boss chains: { at, pos, kind, size }
    this.t = 0;
    this.sphere = new THREE.IcosahedronGeometry(1, 2);
    this.ring = new THREE.TorusGeometry(1, 0.08, 6, 40);
    this.chunk = new THREE.BoxGeometry(0.35, 0.22, 0.5);
    this.ember = new THREE.BoxGeometry(0.06, 0.06, 0.4);
    this.debrisMats = new Map();
  }

  /** One kill. size ~ the enemy's scale (1.2 drone … 5 boss). */
  explode(pos, kind = "virus", size = 1.4) {
    const [core, outer, dark] = COLORS[kind] ?? COLORS.virus;
    const s = Math.max(1, size);
    this.#ball(pos, core, s * 1.1, 0.28);
    this.#ball(pos, outer, s * 2.2, 0.45);
    this.#shockwave(pos, outer, s * 5, 0.5);
    this.#debris(pos, dark, s);
    this.#embers(pos, outer, s);
  }

  /** Boss death: a chain of blasts across the body, then the big one. */
  bossDeath(pos, kind = "boss", size = 5) {
    for (let i = 0; i < 6; i++) {
      const off = new THREE.Vector3((Math.random() - 0.5) * size * 1.6, (Math.random() - 0.3) * size * 1.4, (Math.random() - 0.5) * size * 1.6);
      this.queue.push({ at: this.t + i * 0.22, pos: pos.clone().add(off), kind, size: size * 0.45 });
    }
    this.queue.push({ at: this.t + 1.45, pos: pos.clone(), kind, size: size * 1.4, final: true });
  }

  /** Arrival shockwave (boss entrance, enrage, transform). */
  pulse(pos, color, radius = 20) {
    this.#shockwave(pos, color, radius, 0.7);
    this.#ball(pos, color, radius * 0.25, 0.4);
  }

  #ball(pos, color, radius, life) {
    const mesh = new THREE.Mesh(this.sphere, additive(color));
    mesh.position.copy(pos);
    mesh.scale.setScalar(radius * 0.3);
    this.#add(mesh, life, (k) => {
      mesh.scale.setScalar(radius * (0.3 + 0.7 * Math.sqrt(k)));
      mesh.material.opacity = (1 - k) ** 1.5;
    });
  }

  #shockwave(pos, color, radius, life) {
    const mesh = new THREE.Mesh(this.ring, additive(color));
    mesh.position.copy(pos);
    mesh.rotation.set(Math.random() * 0.6 - 0.3 + Math.PI / 2, 0, Math.random() * Math.PI);
    this.#add(mesh, life, (k) => {
      mesh.scale.setScalar(0.5 + radius * (1 - (1 - k) ** 3));
      mesh.material.opacity = (1 - k) * 0.85;
    });
  }

  #debris(pos, color, s) {
    if (!this.debrisMats.has(color)) this.debrisMats.set(color, new THREE.MeshStandardMaterial({ color, metalness: 0.6, roughness: 0.5, emissive: 0x331100, emissiveIntensity: 0.4 }));
    const mat = this.debrisMats.get(color);
    for (let i = 0; i < DEBRIS; i++) {
      const mesh = new THREE.Mesh(this.chunk, mat);
      mesh.position.copy(pos);
      mesh.scale.setScalar(s * (0.4 + Math.random() * 0.8));
      const v = new THREE.Vector3((Math.random() - 0.5), Math.random() * 0.9 + 0.1, (Math.random() - 0.5)).normalize().multiplyScalar(6 + Math.random() * 10 * Math.sqrt(s));
      const spin = new THREE.Vector3(Math.random() * 12 - 6, Math.random() * 12 - 6, Math.random() * 12 - 6);
      this.#add(mesh, 1.6 + Math.random() * 0.8, (_k, dt) => {
        v.y -= GRAVITY * dt;
        mesh.position.addScaledVector(v, dt);
        if (mesh.position.y < 0.2) { // hit the street: bounce once, then rest
          mesh.position.y = 0.2;
          v.set(v.x * 0.4, Math.abs(v.y) * 0.25, v.z * 0.4);
          spin.multiplyScalar(0.5);
        }
        mesh.rotation.x += spin.x * dt;
        mesh.rotation.y += spin.y * dt;
        mesh.rotation.z += spin.z * dt;
      }, false);
    }
  }

  #embers(pos, color, s) {
    for (let i = 0; i < 18; i++) {
      const mesh = new THREE.Mesh(this.ember, additive(i % 3 ? color : 0xfff2b0));
      mesh.position.copy(pos);
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).normalize().multiplyScalar(10 + Math.random() * 16 * Math.sqrt(s));
      this.#add(mesh, 0.5 + Math.random() * 0.5, (k, dt) => {
        v.y -= GRAVITY * 0.6 * dt;
        mesh.position.addScaledVector(v, dt);
        mesh.lookAt(mesh.position.clone().add(v));
        mesh.material.opacity = 1 - k;
      });
    }
  }

  #add(mesh, life, update, ownsMaterial = true) {
    this.root.add(mesh);
    this.live.push({ mesh, life, max: life, update, ownsMaterial });
  }

  /** Returns the chain blasts that fired this frame, so the caller can shake / sound them. */
  update(dt) {
    this.t += dt;
    const fired = [];
    this.queue = this.queue.filter((q) => {
      if (q.at > this.t) return true;
      this.explode(q.pos, q.kind, q.size);
      fired.push(q);
      return false;
    });
    for (const p of this.live) {
      p.life -= dt;
      p.update(1 - Math.max(0, p.life) / p.max, dt);
      if (p.life <= 0) {
        this.root.remove(p.mesh);
        if (p.ownsMaterial) p.mesh.material.dispose();
      }
    }
    this.live = this.live.filter((p) => p.life > 0);
    return fired;
  }
}

/** Trauma-style camera shake: add trauma on hits, it decays; offset = trauma² so small bumps stay subtle. */
export class Shake {
  constructor() {
    this.trauma = 0;
  }

  add(amount) {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  /** Nudges the camera after it has been placed. */
  apply(camera, dt, t) {
    if (this.trauma <= 0) return;
    const s = this.trauma * this.trauma;
    camera.position.x += Math.sin(t * 71) * 0.45 * s;
    camera.position.y += Math.sin(t * 83 + 1.3) * 0.35 * s;
    camera.position.z += Math.sin(t * 67 + 2.1) * 0.45 * s;
    camera.rotateZ(Math.sin(t * 59 + 0.7) * 0.04 * s);
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
  }
}
