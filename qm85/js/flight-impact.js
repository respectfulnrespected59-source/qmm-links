// Impacts (owner 09-24): "hitting a truck or car at an angle causes sparks to fly and the bot ricochets off the
// vehicle, and do that for the ground and sides of bldgs so that glitchy blink back to flight shit goes away".
// A hit never teleports him: we find the surface normal, reflect his heading off it, nudge him clear and throw
// sparks. Glancing blows are free; only near head-on impacts cost shield.
import * as THREE from "three";

const HEAD_ON = 0.87; // |dir·n| above this (within ~30° of straight on) = a real crash; anything shallower is a free ricochet
const SPARKS = 34;
const SPARK_LIFE = 0.55;

/** Outward normal of the face of `solid` nearest to `pos` (horizontal). */
export function surfaceNormal(solid, pos) {
  if (solid.pos && solid.half) { // a moving vehicle: oriented box
    const dx = pos.x - solid.pos.x;
    const dz = pos.z - solid.pos.z;
    const c = Math.cos(-solid.yaw);
    const s = Math.sin(-solid.yaw);
    const lx = dx * c + dz * s;
    const lz = -dx * s + dz * c;
    const px = solid.half[0] - Math.abs(lx);
    const pz = solid.half[1] - Math.abs(lz);
    const local = px < pz ? new THREE.Vector3(Math.sign(lx) || 1, 0, 0) : new THREE.Vector3(0, 0, Math.sign(lz) || 1);
    return local.applyAxisAngle(new THREE.Vector3(0, 1, 0), solid.yaw).normalize();
  }
  if (solid.p?.length >= 3) { // a real footprint: nearest edge, pointing away from the building's middle
    let best = null;
    let bestD = Infinity;
    for (let i = 0; i < solid.p.length; i++) {
      const [x1, z1] = solid.p[i];
      const [x2, z2] = solid.p[(i + 1) % solid.p.length];
      const ex = x2 - x1;
      const ez = z2 - z1;
      const len2 = ex * ex + ez * ez || 1;
      const t = THREE.MathUtils.clamp(((pos.x - x1) * ex + (pos.z - z1) * ez) / len2, 0, 1);
      const d = Math.hypot(pos.x - (x1 + ex * t), pos.z - (z1 + ez * t));
      if (d < bestD) {
        bestD = d;
        best = [ex, ez, x1 + ex * t, z1 + ez * t];
      }
    }
    const n = new THREE.Vector3(best[1], 0, -best[0]).normalize();
    if (n.x * (best[2] - solid.x) + n.z * (best[3] - solid.z) < 0) n.negate();
    return n;
  }
  // an axis box (cyberspace towers)
  const px = solid.hw - Math.abs(pos.x - solid.x);
  const pz = solid.hd - Math.abs(pos.z - solid.z);
  return px < pz ? new THREE.Vector3(Math.sign(pos.x - solid.x) || 1, 0, 0) : new THREE.Vector3(0, 0, Math.sign(pos.z - solid.z) || 1);
}

const DEFLECT_TIME = 0.35; // a glancing hit eases him off course over this long (owner: "soft impact", not a snap)
const SHOVE = 9; // m/s sideways push away from the surface, decays fast

/**
 * Start a SOFT deflection off a surface (owner 09-24: "less of a snap, more a soft impact that slightly throws
 * me off course"). f needs yaw, pitch, speed, pos, bank, forward(), and gets a `deflect` the caller eases each
 * frame with applyDeflect(). Returns { headOn } so the caller can decide on damage.
 */
export function ricochet(f, normal, prev) {
  const dir = f.forward();
  const dot = dir.dot(normal);
  const headOn = -dot > HEAD_ON;
  const mirrored = dir.clone();
  if (dot < 0) mirrored.addScaledVector(normal, -2 * dot);
  if (Math.abs(normal.y) > 0.5) { // the street: the nose is nudged back up over the deflect time
    f.deflect = { t: 0, dur: DEFLECT_TIME, pitchTo: Math.abs(Math.asin(THREE.MathUtils.clamp(mirrored.y, -1, 1))) * 0.6 + 0.08, shove: new THREE.Vector3(0, SHOVE * 0.6, 0) };
    f.pos.y = Math.max(f.pos.y, prev.y);
  } else {
    // glancing: only turn HALF of the way to the mirror heading; head-on: the full mirror (he has to come off it)
    const cur = f.yaw;
    const full = Math.atan2(mirrored.x, mirrored.z);
    let delta = Math.atan2(Math.sin(full - cur), Math.cos(full - cur));
    if (!headOn) delta *= 0.5;
    f.deflect = { t: 0, dur: headOn ? DEFLECT_TIME * 0.6 : DEFLECT_TIME, yawFrom: cur, yawDelta: delta, shove: normal.clone().multiplyScalar(SHOVE * (headOn ? 1.4 : 1)) };
    f.pos.x = prev.x + normal.x * 0.6;
    f.pos.z = prev.z + normal.z * 0.6;
  }
  f.speed *= headOn ? 0.55 : 0.88;
  return { headOn };
}

/** Ease an active deflection: smooth yaw/pitch toward the target + a decaying shove. Returns true while active. */
export function applyDeflect(f, dt) {
  const d = f.deflect;
  if (!d) return false;
  const k0 = Math.min(1, d.t / d.dur);
  d.t += dt;
  const k1 = Math.min(1, d.t / d.dur);
  const ease = (k) => 1 - (1 - k) ** 3; // fast start, gentle finish
  if (d.yawDelta !== undefined) {
    f.yaw += d.yawDelta * (ease(k1) - ease(k0));
    f.yawRate *= 0.6; // the stick still works, but the hit leans on it
  }
  if (d.pitchTo !== undefined) f.pitch = THREE.MathUtils.lerp(f.pitch, d.pitchTo, 1 - Math.exp(-dt * 12));
  const shove = d.shove.clone().multiplyScalar(Math.exp(-d.t * 6));
  f.pos.addScaledVector(shove, dt);
  if (k1 >= 1) f.deflect = null;
  return true;
}

/** Spark bursts: hot additive streaks that spray off the contact and fall. */
export class Sparks {
  constructor(root) {
    this.root = root;
    this.list = [];
    this.geo = new THREE.BoxGeometry(0.05, 0.05, 0.35);
    this.mats = [0xfff2b0, 0xffb338, 0xff7a1f].map((c) => new THREE.MeshBasicMaterial({ color: c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  }

  burst(at, normal, strength = 1) {
    const n = Math.round(SPARKS * strength);
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(this.geo, this.mats[i % 3]);
      m.position.copy(at);
      const v = normal.clone().multiplyScalar(4 + Math.random() * 6)
        .add(new THREE.Vector3((Math.random() - 0.5) * 9, Math.random() * 7, (Math.random() - 0.5) * 9));
      m.lookAt(at.clone().add(v));
      this.root.add(m);
      this.list.push({ m, v, life: SPARK_LIFE * (0.6 + Math.random() * 0.6) });
    }
  }

  update(dt) {
    for (const s of this.list) {
      s.life -= dt;
      s.v.y -= 18 * dt;
      s.m.position.addScaledVector(s.v, dt);
      s.m.lookAt(s.m.position.clone().add(s.v));
      if (s.life <= 0) this.root.remove(s.m);
    }
    this.list = this.list.filter((s) => s.life > 0);
  }
}
