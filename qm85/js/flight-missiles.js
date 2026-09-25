// HEAT-SEEKING MISSILES (owner 09-24: "add a heat seeking missiles special weapon to our bots arsenal").
//   Q / E (or the MISSILE touch button) fires one from the shoulder pod at the hottest hostile ahead; it arcs
//   out, locks on, and chases with a smoke trail until it hits — splash damage, sparks, a flash. Three in the
//   rack, one reloads every RELOAD s. Bosses eat them too (big damage, not a one-shot).
import * as THREE from "three";
import { sfx } from "./audio.js";
import { makeGlow } from "./flight-glow.js";

export const MISSILE_MAX = 3;
const RELOAD = 9;
const SPEED = 62;
const TURN = 4.2; // rad/s of homing authority
const LIFE = 5.5;
const LOCK_RANGE = 220;
const LOCK_CONE = Math.cos(THREE.MathUtils.degToRad(70));
const DAMAGE = 6;
const SPLASH = 7; // m
const SPLASH_DAMAGE = 3;
const SMOKE_EVERY = 0.03;
// Owner 09-24 (late): "make the missiles more visible" — a bigger body, a hot flare that holds its size at range,
// a thicker smoke column and a gold ember line you can follow across the sky.
const MISSILE_SCALE = 2.1;
const FLARE_SIZE = 2.4; // m, up close
const FLARE_NEAR = 45; // m: past this the flare swells so it stays a readable dot
const FLARE_MAX = 6;

function smokeTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, "rgba(255,255,255,0.8)");
  grad.addColorStop(0.5, "rgba(230,225,240,0.35)");
  grad.addColorStop(1, "rgba(220,220,230,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function missileMesh() {
  const g = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: 0xe8e4f2, metalness: 0.8, roughness: 0.3 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xd4a73a, metalness: 1, roughness: 0.25, emissive: 0x4a3208, emissiveIntensity: 0.4 });
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 10).rotateX(Math.PI / 2), body));
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.25, 10).rotateX(Math.PI / 2), gold);
  nose.position.z = 0.47;
  g.add(nose);
  for (let i = 0; i < 4; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.14, 0.16), gold);
    const a = (i / 4) * Math.PI * 2;
    fin.position.set(Math.cos(a) * 0.09, Math.sin(a) * 0.09, -0.25);
    fin.rotation.z = a;
    g.add(fin);
  }
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.8, 10).rotateX(-Math.PI / 2).translate(0, 0, -0.75),
    new THREE.MeshBasicMaterial({ color: 0xffb338, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(flame);
  const core = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.45, 8).rotateX(-Math.PI / 2).translate(0, 0, -0.55),
    new THREE.MeshBasicMaterial({ color: 0xfff4d6, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(core); // white-hot centre inside the orange plume
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2a2a }));
  eye.position.z = 0.6;
  g.add(eye);
  g.scale.setScalar(MISSILE_SCALE);
  const flare = makeGlow(0xffb84a, FLARE_SIZE / MISSILE_SCALE, 0.9); // the hot exhaust, readable from far off
  flare.position.z = -0.5;
  g.add(flare);
  const hot = makeGlow(0xff8a1f, 1, 1); // solid orange core: additive light vanishes against a bright day sky
  hot.material.blending = THREE.NormalBlending;
  flare.add(hot);
  hot.scale.setScalar(0.45);
  g.userData.flame = flame;
  g.userData.flare = flare;
  return g;
}

export class Missiles {
  constructor(root, flight) {
    this.root = root;
    this.f = flight;
    this.ammo = MISSILE_MAX;
    this.reload = 0;
    this.live = [];
    this.puffs = [];
    this.tex = smokeTexture();
    this.flashGeo = new THREE.SphereGeometry(1, 16, 12);
  }

  /** The hottest hostile ahead: nearest inside the lock cone, bosses preferred. */
  target(from, fwd) {
    let best = null;
    let bestScore = Infinity;
    for (const b of this.f.swarm.alive) {
      const to = b.obj.position.clone().sub(from);
      const d = to.length();
      if (d > LOCK_RANGE || to.normalize().dot(fwd) < LOCK_CONE) continue;
      const score = d * (b.boss ? 0.5 : 1);
      if (score < bestScore) {
        bestScore = score;
        best = b;
      }
    }
    return best;
  }

  /** Fire one. Returns "fired" | "empty" | "no target". */
  fire(from, fwd) {
    if (this.ammo <= 0) return "empty";
    const target = this.target(from, fwd);
    if (!target) return "no target";
    this.ammo -= 1;
    const mesh = missileMesh();
    const side = this.live.length % 2 ? -1 : 1;
    mesh.position.copy(from).add(new THREE.Vector3(side * 0.5, 0.3, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.f.yaw));
    const dir = fwd.clone().add(new THREE.Vector3(side * 0.35, 0.3, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.f.yaw)).normalize(); // arcs out of the pod
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    this.root.add(mesh);
    this.live.push({ mesh, dir, target, life: LIFE, t: 0, puffT: 0 });
    sfx.missile();
    this.f.hooks.onMissile?.(this.ammo);
    return "fired";
  }

  update(dt) {
    if (this.ammo < MISSILE_MAX) {
      this.reload += dt;
      if (this.reload >= RELOAD) {
        this.reload = 0;
        this.ammo += 1;
        this.f.hooks.onMissile?.(this.ammo, true);
      }
    }
    for (const m of this.live) {
      m.t += dt;
      m.life -= dt;
      if (m.target && !m.target.alive) m.target = this.target(m.mesh.position, m.dir);
      if (m.target && m.t > 0.18) { // a beat of straight flight, then it turns hard
        const want = m.target.obj.position.clone().sub(m.mesh.position).normalize();
        const angle = Math.min(m.dir.angleTo(want), TURN * dt);
        if (angle > 1e-4) {
          const axis = new THREE.Vector3().crossVectors(m.dir, want).normalize();
          m.dir.applyAxisAngle(axis, angle).normalize();
        }
      }
      const prev = m.mesh.position.clone();
      m.mesh.position.addScaledVector(m.dir, SPEED * dt);
      m.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), m.dir);
      m.mesh.userData.flame.scale.set(1, 1, 0.8 + Math.random() * 0.5);
      const far = Math.min(FLARE_MAX, Math.max(1, m.mesh.position.distanceTo(this.f.pos) / FLARE_NEAR));
      m.mesh.userData.flare.scale.setScalar(((FLARE_SIZE * far) / MISSILE_SCALE) * (0.85 + Math.random() * 0.3)); // flicker
      m.puffT -= dt;
      if (m.puffT <= 0) {
        m.puffT = SMOKE_EVERY;
        const tail = m.mesh.position.clone().addScaledVector(m.dir, -1.3);
        this.#puff(tail);
        this.#ember(tail);
      }
      const hit = this.f.swarm.hitTest(prev, m.mesh.position, DAMAGE, 0.8);
      const solid = this.f.arena.towerAt?.(m.mesh.position) || this.f.arena.vehicleAt?.(m.mesh.position);
      const floored = m.mesh.position.y <= (this.f.arena.floor ?? 0);
      if (hit || solid || floored || m.life <= 0) {
        this.lastEnd = hit ? "hit" : solid ? "solid" : floored ? "floor" : "timeout"; // playtest probes read this
        this.#explode(m.mesh.position, hit);
        m.life = 0;
      }
      if (m.life <= 0) this.root.remove(m.mesh);
    }
    this.live = this.live.filter((m) => m.life > 0);
    for (const p of this.puffs) {
      p.life -= dt;
      const k = 1 - p.life / p.max;
      p.s.scale.setScalar(p.from + k * p.grow);
      p.s.material.opacity = Math.max(0, p.alpha * (1 - k));
      if (p.life <= 0) {
        this.root.remove(p.s);
        p.s.material.dispose();
      }
    }
    this.puffs = this.puffs.filter((p) => p.life > 0);
  }

  #puff(at) {
    // grey, not white: a white plume disappears against the pale dawn/noon sky
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.tex, transparent: true, depthWrite: false, opacity: 0.7, color: 0x8e8a98 }));
    s.position.copy(at);
    s.scale.setScalar(0.7);
    this.root.add(s);
    this.puffs.push({ s, life: 1.8, max: 1.8, from: 0.7, grow: 4.2, alpha: 0.7 }); // a thick column that lingers
  }

  /** A short-lived gold spark on the smoke line: the trail glows where the missile just was. */
  #ember(at) {
    const s = makeGlow(0xff9a2a, 1.1, 0.8);
    s.material.blending = THREE.NormalBlending; // solid orange: reads in daylight as well as at night
    s.position.copy(at);
    this.root.add(s);
    this.puffs.push({ s, life: 0.45, max: 0.45, from: 1.1, grow: -0.7, alpha: 0.8 });
  }

  /** Splash: every hostile inside SPLASH takes damage; sparks + a gold flash that swells and dies. */
  #explode(at, direct) {
    const f = this.f;
    for (const b of f.swarm.alive) {
      if (b === direct || b.obj.position.distanceTo(at) > SPLASH + b.radius) continue;
      b.hp -= SPLASH_DAMAGE;
      b.flash = 0.3;
      if (b.hp <= 0) {
        f.swarm.kill(b);
        f.score += b.score;
      }
    }
    if (direct && !direct.alive) f.score += direct.score;
    f.sparks.burst(at, new THREE.Vector3(0, 1, 0), 1.6);
    const flash = new THREE.Mesh(this.flashGeo, new THREE.MeshBasicMaterial({ color: 0xffcf5a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    flash.position.copy(at);
    this.root.add(flash);
    this.puffs.push({ s: flash, life: 0.35, max: 0.35, from: 0.35, grow: 2.2, alpha: 0.8 }); // rides the puff fader: grows and fades
    sfx.boom(0.45);
    sfx.clang(true);
    f.hooks.onMissileHit?.(at);
  }
}
