// FREE OAKLAND art (owner 09-25): what an OCCUPIED district looks like — a red surveillance dome over the real
// neighbourhood and a PALANTÍR RELAY tower in its streets — and what FREEDOM looks like: the dome burns away from
// the relay outward, a gold QMM beacon rises where the tower stood, a fresh mural goes up on a real wall and gold
// fireworks go off. Everything here is unlit (MeshBasic / shader) so it costs no lights on the integrated GPU.
import * as THREE from "three";
import { beamFade } from "./flight-glow.js";

export const RELAY_HEIGHT = 26; // metres from the street to the eye
const RED = 0xff2a44;
const GOLD = 0xd4a73a;

const basic = (color, opacity = 1, additive = false) => new THREE.MeshBasicMaterial({
  color, transparent: opacity < 1 || additive, opacity, depthWrite: !additive && opacity >= 1,
  blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, side: additive ? THREE.DoubleSide : THREE.FrontSide,
});
const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness: 0.85, roughness: 0.25, ...extra });

// ------------------------------------------------------------------ the occupation dome
const DOME_VERT = /* glsl */ `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec3 vLocal;
  void main() {
    vLocal = position;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;
const DOME_FRAG = /* glsl */ `
  uniform vec3 uColor, uEdge, uCam, uOrigin;
  uniform float uTime, uDissolve, uAlpha, uRadius;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec3 vLocal;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  void main() {
    vec3 n = normalize(vLocal);
    // freedom burns outward from the relay: distance from it (0..1 of the dome) plus a ragged noise edge
    float spread = distance(vWorld.xz, uOrigin.xz) / (uRadius * 2.0) + noise(vWorld.xz * 0.018 + n.y * 3.0) * 0.35;
    float cut = uDissolve * 1.5 - spread;
    if (uDissolve > 0.0 && cut > 0.0) discard;
    vec3 V = normalize(uCam - vWorld);
    float fres = pow(1.0 - abs(dot(V, normalize(vNormalW))), 2.2);
    float lon = atan(n.z, n.x) / 6.2831853 * 56.0;
    float lat = asin(clamp(n.y, -1.0, 1.0)) / 1.5707963 * 11.0;
    float grid = max(smoothstep(0.9, 1.0, abs(fract(lon) - 0.5) * 2.0), smoothstep(0.9, 1.0, abs(fract(lat) - 0.5) * 2.0));
    float band = exp(-pow((n.y - fract(uTime * 0.07)) * 16.0, 2.0)); // a scan line climbing the dome
    float a = uAlpha * (0.035 + 0.5 * fres + 0.3 * grid + 0.45 * band);
    vec3 col = mix(uColor, uEdge, band * 0.6 + grid * 0.25);
    float burn = uDissolve > 0.0 ? smoothstep(-0.08, 0.0, cut) : 0.0; // gold edge where it is burning away
    col = mix(col, vec3(1.0, 0.8, 0.35), burn);
    a = max(a, burn * 0.9);
    a *= smoothstep(0.0, 0.05, n.y); // soft where it meets the street
    gl_FragColor = vec4(col, a);
  }`;

/** A flattened surveillance dome of radius r over (x, z). Returns the mesh; update via its uniforms. */
export function occupationDome(x, z, r) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: DOME_VERT,
    fragmentShader: DOME_FRAG,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uColor: { value: new THREE.Color(0x8a0f2a) },
      uEdge: { value: new THREE.Color(0xff4a5a) },
      uCam: { value: new THREE.Vector3() },
      uOrigin: { value: new THREE.Vector3(x, 0, z) },
      uTime: { value: 0 },
      uDissolve: { value: 0 },
      uAlpha: { value: 1 },
      uRadius: { value: r },
    },
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 56, 14, 0, Math.PI * 2, 0, Math.PI / 2), mat);
  dome.scale.y = 0.5;
  dome.position.set(x, 0, z);
  dome.renderOrder = 2; // after the city's own transparent bits
  dome.frustumCulled = false; // the camera often sits INSIDE it
  return dome;
}

// ------------------------------------------------------------------ the relay tower
/**
 * PALANTÍR RELAY: an obsidian spire on a hex plinth with a floating red eye in a spinning cage, two sweeping
 * searchlights and a red beacon column you can see from across town. The group's ORIGIN IS THE EYE (so aim
 * assist, missiles and hit tests all go for the eye); everything else hangs below it. userData.animate(t, target).
 */
export function relayModel() {
  const g = new THREE.Group();
  const H = RELAY_HEIGHT;
  const obsidian = std(0x0b0a10, { roughness: 0.18 });
  const redGlow = basic(RED);
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 6.8, 2.6, 6), std(0x15131b, { roughness: 0.5 }));
  plinth.position.y = -H + 1.3;
  g.add(plinth);
  const spireGeo = new THREE.ConeGeometry(2.8, H - 4.5, 4);
  const spire = new THREE.Mesh(spireGeo, obsidian);
  spire.position.y = -H + 2.6 + (H - 4.5) / 2;
  spire.add(new THREE.LineSegments(new THREE.EdgesGeometry(spireGeo), new THREE.LineBasicMaterial({ color: RED })));
  g.add(spire);
  for (let i = 0; i < 3; i++) { // three blade fins with glowing red spines
    const a = (i / 3) * Math.PI * 2;
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.35, H * 0.55, 3.2), obsidian);
    fin.position.set(Math.cos(a) * 3.2, -H + 2.6 + H * 0.27, Math.sin(a) * 3.2);
    fin.rotation.y = -a;
    g.add(fin);
    const spine = new THREE.Mesh(new THREE.BoxGeometry(0.12, H * 0.5, 0.12), redGlow);
    spine.position.set(Math.cos(a) * 3.35, fin.position.y, Math.sin(a) * 3.35);
    g.add(spine);
  }
  const eye = new THREE.Group(); // the eye turns to watch QM85
  g.add(eye);
  eye.add(new THREE.Mesh(new THREE.SphereGeometry(2.1, 28, 18), std(0x040406, { roughness: 0.05 })));
  const iris = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.12, 10, 40), redGlow);
  iris.position.z = 1.75;
  eye.add(iris);
  const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 10), basic(0xff6a6a));
  pupil.position.z = 1.85;
  eye.add(pupil);
  const cage = [0, 1].map((k) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.1 + k * 0.5, 0.1, 6, 48), std(0x2a2630));
    ring.add(...[0, 1, 2, 3].map((i) => {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), redGlow);
      const a = (i / 4) * Math.PI * 2;
      lamp.position.set(Math.cos(a) * (3.1 + k * 0.5), Math.sin(a) * (3.1 + k * 0.5), 0);
      return lamp;
    }));
    g.add(ring);
    return ring;
  });
  // searchlights: long thin cones sweeping the street
  const lights = new THREE.Group();
  g.add(lights);
  const coneGeo = new THREE.ConeGeometry(8, 70, 18, 1, true).translate(0, -35, 0);
  const coneMat = basic(RED, 0.05, true);
  coneMat.alphaMap = beamFade("top"); // bright at the eye, fading out on the street
  for (const s of [1, -1]) {
    const cone = new THREE.Mesh(coneGeo, coneMat);
    cone.rotation.z = s * 1.05;
    lights.add(cone);
  }
  // a red column into the sky: the target reads from across the city
  const columnMat = basic(RED, 0.16, true);
  columnMat.alphaMap = beamFade("bottom"); // strong at the tower, dissolving into the sky
  const column = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 420, 10, 1, true).translate(0, 210, 0), columnMat);
  g.add(column);
  // the shield bubble (up while the district's guards live)
  const shield = new THREE.Mesh(new THREE.IcosahedronGeometry(7, 2), new THREE.MeshBasicMaterial({
    color: 0xff6a8a, wireframe: true, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  g.add(shield);
  const shell = new THREE.Mesh(new THREE.SphereGeometry(6.9, 24, 16), basic(0xff2a5a, 0.08, true));
  shield.add(shell);
  const look = new THREE.Vector3();
  g.userData.shield = shield;
  g.userData.column = column;
  g.userData.animate = (t, target) => {
    cage[0].rotation.set(t * 0.9, t * 0.6, 0);
    cage[1].rotation.set(-t * 0.5, 0, t * 0.8);
    lights.rotation.y = t * 0.45;
    pupil.scale.setScalar(0.8 + 0.35 * Math.sin(t * 4));
    coneMat.opacity = 0.035 + 0.02 * Math.sin(t * 7);
    shield.rotation.y = t * 0.3;
    shield.scale.setScalar(1 + 0.03 * Math.sin(t * 6));
    if (target) {
      g.updateMatrixWorld();
      eye.lookAt(look.copy(target));
    }
  };
  return g;
}

// ------------------------------------------------------------------ freedom
/** The gold QMM beacon where a relay fell: a light column, a spinning seal hologram and a ground ring. */
export function sealBeacon(sealTex) {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.4, 320, 12, 1, true).translate(0, 160, 0), basic(GOLD, 0.2, true)));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(9, 0.25, 8, 64), basic(0xffcf5a, 0.9));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.3;
  g.add(ring);
  let seal = null;
  if (sealTex) {
    seal = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), new THREE.MeshBasicMaterial({ map: sealTex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }));
    seal.position.y = 34;
    g.add(seal);
  }
  g.userData.animate = (t, rise) => {
    g.scale.setScalar(Math.max(0.001, rise));
    if (seal) {
      seal.rotation.y = t * 0.8;
      seal.position.y = 34 + Math.sin(t * 1.3) * 1.2;
    }
    ring.scale.setScalar(1 + 0.05 * Math.sin(t * 3));
  };
  return g;
}

/**
 * A fresh mural on a real wall near (x, z): the longest outward face of a mid-rise building within `reach`.
 * Returns the mesh (its material fades in via opacity) or null when there's no good wall.
 */
export function muralNear(buildings, x, z, tex, reach = 260) {
  if (!tex) return null;
  let best = null;
  for (const b of buildings) {
    if (b.h < 9 || b.h > 40) continue;
    const [px, pz] = b.p[0];
    if (Math.abs(px - x) > reach || Math.abs(pz - z) > reach) continue;
    const cx = b.p.reduce((s, p) => s + p[0], 0) / b.p.length;
    const cz = b.p.reduce((s, p) => s + p[1], 0) / b.p.length;
    for (let i = 0; i < b.p.length; i++) {
      const [x1, z1] = b.p[i];
      const [x2, z2] = b.p[(i + 1) % b.p.length];
      const len = Math.hypot(x2 - x1, z2 - z1);
      if (len < 16) continue;
      const score = len - Math.hypot((x1 + x2) / 2 - x, (z1 + z2) / 2 - z) * 0.08;
      if (!best || score > best.score) best = { score, x1, z1, x2, z2, len, cx, cz, h: b.h };
    }
  }
  if (!best) return null;
  const { x1, z1, x2, z2, len, cx, cz, h } = best;
  const mx = (x1 + x2) / 2;
  const mz = (z1 + z2) / 2;
  let nx = (z2 - z1) / len;
  let nz = -(x2 - x1) / len;
  if (nx * (mx - cx) + nz * (mz - cz) < 0) {
    nx = -nx;
    nz = -nz;
  }
  const w = Math.min(len * 0.85, 26);
  const mh = Math.min(h * 0.8, w * 0.5625);
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, polygonOffset: true, polygonOffsetFactor: -4 });
  const mural = new THREE.Mesh(new THREE.PlaneGeometry(w, mh), mat);
  mural.position.set(mx + nx * 0.3, mh / 2 + 0.6, mz + nz * 0.3);
  mural.rotation.y = Math.atan2(nx, nz);
  return mural;
}

/** Gold + violet fireworks over a freed district. update(dt) returns false once every shell has burned out. */
export class Fireworks {
  constructor(root) {
    this.root = root;
    this.live = [];
  }

  launch(at, shells = 6) {
    for (let s = 0; s < shells; s++) {
      const n = 70;
      const pos = new Float32Array(n * 3);
      const vel = [];
      const burstAt = at.clone().add(new THREE.Vector3((Math.random() - 0.5) * 60, 55 + Math.random() * 45, (Math.random() - 0.5) * 60));
      for (let i = 0; i < n; i++) {
        pos.set([burstAt.x, burstAt.y, burstAt.z], i * 3);
        vel.push(new THREE.Vector3().randomDirection().multiplyScalar(14 + Math.random() * 10));
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({
        color: s % 3 === 2 ? 0xc58bff : s % 2 ? 0xffcf5a : 0xfff1c8, size: 2.6, transparent: true, opacity: 1,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      pts.frustumCulled = false;
      this.root.add(pts);
      this.live.push({ pts, vel, life: 2.2, max: 2.2, delay: s * 0.28 });
    }
  }

  update(dt) {
    for (const f of this.live) {
      if (f.delay > 0) {
        f.delay -= dt;
        f.pts.visible = false;
        continue;
      }
      f.pts.visible = true;
      f.life -= dt;
      const arr = f.pts.geometry.attributes.position.array;
      f.vel.forEach((v, i) => {
        v.y -= 9 * dt;
        v.multiplyScalar(Math.exp(-dt * 1.2));
        arr[i * 3] += v.x * dt;
        arr[i * 3 + 1] += v.y * dt;
        arr[i * 3 + 2] += v.z * dt;
      });
      f.pts.geometry.attributes.position.needsUpdate = true;
      f.pts.material.opacity = Math.max(0, f.life / f.max);
      if (f.life <= 0) {
        this.root.remove(f.pts);
        f.pts.geometry.dispose();
        f.pts.material.dispose();
      }
    }
    this.live = this.live.filter((f) => f.life > 0);
    return this.live.length > 0;
  }
}
