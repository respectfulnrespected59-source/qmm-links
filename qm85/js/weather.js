// BAY WEATHER (owner 09-25: "fog + rain nights"). Oakland's day now has weather:
//   DAWN   the marine layer lies on the Bay and West Oakland, and burns off by mid-morning
//   DUSK   the fog rolls in off the water and pushes east over the city
//   NIGHT  it RAINS: streaks around the camera, glowing pools on the wet streets under every streetlight,
//          and LIGHTNING that strikes a real tower (thunder arrives late, by distance)
// Cheap by design for the integrated GPU: fog = a few dozen soft sprites, rain = ONE LineSegments, pools = ONE
// InstancedMesh. main.js reads fogMul (haze density) and flash (a lightning exposure kick).
import * as THREE from "three";
import { sfx } from "./audio.js";

const FOG_BANKS = 26;
const FOG_DRIFT = 5; // m/s east (the fog comes in off the Bay)
const RAIN_DROPS = 2400;
const RAIN_BOX = { x: 70, y: 46, z: 70 };
const RAIN_SPEED = 30;
const DROP_LEN = 1.4;
const WIND = 6; // drops slant with the wind off the Bay
const LIGHTNING_EVERY = [9, 20]; // seconds between strikes at full rain
const SOUND_SPEED = 340;

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const rand = (a, b) => a + Math.random() * (b - a);
const wrap = (v, centre, half) => centre + ((((v - centre) % (half * 2)) + half * 3) % (half * 2)) - half;

function softTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(255,255,255,0.9)");
  grad.addColorStop(0.5, "rgba(255,255,255,0.45)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** How foggy / rainy the city is at clock hour h (6.5 .. 24). */
export function weatherAt(h) {
  const morning = 1 - smooth(7.2, 10.5, h); // the marine layer burns off
  const evening = smooth(18.2, 20.4, h); // and rolls back in
  return { fog01: Math.max(morning * 0.95, evening), rain01: smooth(20.2, 21.2, h), inland: smooth(18.5, 21.5, h) };
}

export class Weather {
  constructor(root, arena) {
    this.root = root;
    this.arena = arena;
    this.fogMul = 1;
    this.flash = 0;
    this.rain01 = 0;
    this.fog01 = 0;
    this.strikes = 0;
    this.lastStrike = null;
    this.bolt = null;
    this.nextStrike = rand(...LIGHTNING_EVERY);
    this.pendingThunder = [];
    this.warm = 3; // first frames after the city is built: draw everything at opacity 0 so the shaders compile NOW,
    // not in the middle of a fight when night falls (measured: the first rain frame dropped to ~13 fps)
    this.#fog();
    this.#rain();
    this.#pools();
  }

  #fog() {
    const tex = softTexture();
    const shore = this.arena.shoreX ?? -3200;
    this.banks = Array.from({ length: FOG_BANKS }, () => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0xe8eef5, transparent: true, opacity: 0, depthWrite: false, fog: true }));
      const size = rand(260, 460);
      s.scale.set(size, size * 0.32, 1);
      // spread from out over the Bay to the West Oakland shore; the dusk advance moves them east
      s.userData = { baseX: rand(shore - 1600, shore + 900), z: rand(-2600, 1900), y: rand(18, 70), phase: rand(0, 6) };
      s.renderOrder = 1;
      s.visible = false;
      this.root.add(s);
      return s;
    });
  }

  #rain() {
    this.drops = new Float32Array(RAIN_DROPS * 3); // world coords; drawn wrapped into a box around the camera
    for (let i = 0; i < RAIN_DROPS; i++) this.drops.set([rand(-RAIN_BOX.x, RAIN_BOX.x), rand(-RAIN_BOX.y, RAIN_BOX.y), rand(-RAIN_BOX.z, RAIN_BOX.z)], i * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(RAIN_DROPS * 6), 3));
    this.rainMat = new THREE.LineBasicMaterial({ color: 0xbfd4ee, transparent: true, opacity: 0, depthWrite: false });
    this.rain = new THREE.LineSegments(geo, this.rainMat);
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.root.add(this.rain);
  }

  /** Wet-street light pools: one soft warm disc on the asphalt under every streetlight. */
  #pools() {
    const pts = this.arena.lampPts ?? [];
    const n = Math.floor(pts.length / 3);
    this.pools = null;
    if (!n) return;
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,200,130,0.9)");
    grad.addColorStop(0.45, "rgba(255,170,90,0.35)");
    grad.addColorStop(1, "rgba(255,160,80,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    this.poolMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 });
    const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), this.poolMat, n);
    const m = new THREE.Matrix4();
    for (let i = 0; i < n; i++) {
      const s = rand(6, 8.5);
      m.compose(new THREE.Vector3(pts[i * 3], 0.09, pts[i * 3 + 2]), new THREE.Quaternion(), new THREE.Vector3(s, 1, s * rand(1.2, 1.8)));
      pools.setMatrixAt(i, m);
    }
    pools.visible = false;
    pools.frustumCulled = false;
    this.pools = pools;
    this.root.add(pools);
  }

  /** day: the DayCycle (null = clear skies, e.g. races). */
  update(dt, t, camera, day) {
    const w = day ? weatherAt(day.hour) : { fog01: 0, rain01: 0, inland: 0 };
    this.fog01 = w.fog01;
    this.rain01 = w.rain01;
    this.fogMul = 1 + w.fog01 * 2.2 + w.rain01 * 0.8; // main.js multiplies the haze density by this
    this.#updateFog(t, w, day);
    this.#updateRain(dt, camera, w.rain01);
    if (this.pools) {
      const k = w.rain01 * (day?.night01 ?? 0);
      this.pools.visible = k > 0.01;
      this.poolMat.opacity = 0.55 * k;
    }
    this.#lightning(dt, camera, w.rain01);
    if (this.warm > 0) {
      this.warm -= 1;
      this.rain.visible = true;
      if (this.pools) this.pools.visible = true;
      this.banks[0].visible = true;
    }
  }

  #updateFog(t, w, day) {
    const night = day?.night01 ?? 0;
    const tint = new THREE.Color(0xe8eef5).lerp(new THREE.Color(0xffd9b0), smooth(18, 19.6, day?.hour ?? 12) * (1 - night)).lerp(new THREE.Color(0x5a6478), night);
    for (const s of this.banks) {
      const u = s.userData;
      s.position.set(u.baseX + w.inland * 2600 + ((t * FOG_DRIFT) % 400), u.y + Math.sin(t * 0.1 + u.phase) * 4, u.z);
      s.material.color.copy(tint);
      s.material.opacity = 0.38 * w.fog01 * (0.75 + 0.25 * Math.sin(t * 0.2 + u.phase));
      s.visible = s.material.opacity > 0.01;
    }
  }

  #updateRain(dt, camera, k) {
    this.rain.visible = k > 0.02;
    if (!this.rain.visible) return;
    this.rainMat.opacity = 0.42 * k;
    const arr = this.rain.geometry.attributes.position.array;
    const c = camera.position;
    for (let i = 0; i < RAIN_DROPS; i++) {
      this.drops[i * 3] += WIND * dt;
      this.drops[i * 3 + 1] -= RAIN_SPEED * dt;
      // fixed in the world, wrapped into a box round the camera: fly through the rain and it streaks past
      const wx = wrap(this.drops[i * 3], c.x, RAIN_BOX.x);
      const wy = wrap(this.drops[i * 3 + 1], c.y, RAIN_BOX.y);
      const wz = wrap(this.drops[i * 3 + 2], c.z, RAIN_BOX.z);
      const o = i * 6;
      const top = wy + DROP_LEN;
      if (top < 0.15) { // under the street: collapse it (no drops piling up on the asphalt)
        arr[o] = arr[o + 3] = wx;
        arr[o + 1] = arr[o + 4] = -50;
        arr[o + 2] = arr[o + 5] = wz;
        continue;
      }
      arr[o] = wx;
      arr[o + 1] = Math.max(0.15, wy);
      arr[o + 2] = wz;
      arr[o + 3] = wx - WIND * 0.04;
      arr[o + 4] = top;
      arr[o + 5] = wz;
    }
    this.rain.geometry.attributes.position.needsUpdate = true;
  }

  /** Lightning at full rain: a jagged bolt onto a real tower, a double exposure kick, thunder by distance. */
  #lightning(dt, camera, k) {
    this.flash = Math.max(0, this.flash - dt * 6);
    for (const th of this.pendingThunder) {
      th.t -= dt;
      if (th.t <= 0) sfx.thunder(th.near);
    }
    this.pendingThunder = this.pendingThunder.filter((th) => th.t > 0);
    if (this.bolt) {
      this.bolt.userData.life -= dt;
      this.bolt.material.opacity = Math.max(0, this.bolt.userData.life / 0.35) * (Math.random() < 0.3 ? 0.4 : 1);
      if (this.bolt.userData.life <= 0) {
        this.root.remove(this.bolt);
        this.bolt.geometry.dispose();
        this.bolt = null;
      }
    }
    if (k < 0.8) return;
    this.nextStrike -= dt;
    if (this.nextStrike > 0) return;
    this.nextStrike = rand(...LIGHTNING_EVERY);
    this.strike(camera);
  }

  strike(camera) {
    const towers = this.arena.tallest ?? [];
    const near = towers.filter((b) => Math.hypot(b.x - camera.position.x, b.z - camera.position.z) < 2500);
    const pool = near.length ? near : towers;
    const target = pool[Math.floor(Math.random() * pool.length)];
    if (!target) return;
    const top = new THREE.Vector3(target.x, target.h + 2, target.z);
    const pts = [];
    let p = top.clone().add(new THREE.Vector3(rand(-60, 60), 520, rand(-60, 60)));
    const from = p.clone();
    const steps = 14;
    for (let i = 1; i <= steps; i++) {
      const q = from.clone().lerp(top, i / steps);
      if (i < steps) q.add(new THREE.Vector3(rand(-18, 18), 0, rand(-18, 18)));
      pts.push(p.clone(), q.clone());
      p = q;
    }
    if (this.bolt) this.root.remove(this.bolt);
    this.bolt = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xeaf2ff, transparent: true, opacity: 1, depthWrite: false, fog: false }));
    this.bolt.frustumCulled = false;
    this.bolt.userData.life = 0.35;
    this.root.add(this.bolt);
    this.flash = 1;
    this.strikes += 1;
    const dist = top.distanceTo(camera.position);
    this.pendingThunder.push({ t: Math.min(4, dist / SOUND_SPEED), near: dist < 700 });
    this.lastStrike = target.name ?? "a tower";
  }

  dispose() {
    for (const s of this.banks) this.root.remove(s);
    this.root.remove(this.rain);
    if (this.pools) this.root.remove(this.pools);
    if (this.bolt) this.root.remove(this.bolt);
  }
}
