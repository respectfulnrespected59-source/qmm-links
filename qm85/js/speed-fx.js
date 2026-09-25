// SPEED FEEL (owner 09-25: "so top speed actually feels fast"). Two cheap layers driven by the pilot's real speed:
//   SPEED LINES — streaks in a tube around the camera rushing past, fading in above SPEED_FROM m/s, longer and
//                 brighter the faster he goes (one LineSegments in camera space)
//   EDGE BLUR   — update() returns 0..BLUR_MAX for the film pass (cinematic.js `speed`): screen edges smear toward
//                 the centre on boost / stealth, nothing at cruise
import * as THREE from "three";

const LINES = 140;
const SPEED_FROM = 30; // m/s: below this nothing shows
const SPEED_FULL = 70; // m/s: full effect (stealth mode tops out ~77, VLTRN8 ~94)
const TUBE = [2.2, 7]; // m: inner / outer radius of the streak tube around the lens
const DEPTH = [-60, -8]; // m: where streaks are born (in front of the camera, which looks down -Z)
const BLUR_MAX = 0.55;

const rand = (a, b) => a + Math.random() * (b - a);

export class SpeedLines {
  constructor(camera) {
    this.camera = camera;
    this.k = 0;
    this.pts = Array.from({ length: LINES }, () => this.#spawn(rand(DEPTH[0], 0)));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(LINES * 6), 3));
    this.mat = new THREE.LineBasicMaterial({ color: 0xf1e6ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, fog: false });
    this.lines = new THREE.LineSegments(geo, this.mat);
    this.lines.frustumCulled = false;
    this.lines.renderOrder = 10;
    this.lines.visible = false;
    camera.add(this.lines);
  }

  #spawn(z) {
    const a = Math.random() * Math.PI * 2;
    const r = rand(...TUBE);
    return { x: Math.cos(a) * r, y: Math.sin(a) * r * 0.62, z }; // an oval tube: the screen is wider than tall
  }

  /** speed: m/s (0 on foot / in cutscenes). Returns the edge-blur strength for the film pass. */
  update(dt, speed) {
    const target = THREE.MathUtils.clamp((speed - SPEED_FROM) / (SPEED_FULL - SPEED_FROM), 0, 1);
    this.k = THREE.MathUtils.damp(this.k, target, 5, dt);
    this.lines.visible = this.k > 0.01;
    if (!this.lines.visible) return 0;
    this.mat.opacity = 0.55 * this.k;
    const arr = this.lines.geometry.attributes.position.array;
    const len = 1 + this.k * 5;
    const rush = speed * 1.6 * dt; // a little faster than he flies: it reads as speed, not drift
    this.pts.forEach((pt, i) => {
      pt.z += rush;
      if (pt.z > 1) Object.assign(pt, this.#spawn(rand(DEPTH[0], DEPTH[1])));
      const o = i * 6;
      arr[o] = pt.x;
      arr[o + 1] = pt.y;
      arr[o + 2] = pt.z;
      arr[o + 3] = pt.x;
      arr[o + 4] = pt.y;
      arr[o + 5] = pt.z - len;
    });
    this.lines.geometry.attributes.position.needsUpdate = true;
    return this.k * BLUR_MAX;
  }

  hide() {
    this.k = 0;
    this.lines.visible = false;
  }
}
