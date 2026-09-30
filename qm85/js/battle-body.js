// THE BATTLE BODY (owner 09-24 audit pick #3): delivering the 10th piece used to show a text card. Now the
// FINALE plays at the QMM Warehouse — the drives and parts he collected fly in and snap onto QM85, he lifts off
// the street on gold thrusters, charges, and bursts into his BATTLE BODY while Rob & Mahal cheer. Then you
// FINISH THE NIGHT in it. It stays unlocked as a skin (localStorage) you can pick on the home screen.
import * as THREE from "three";
import { sfx } from "./audio.js";
import { dataDrive, battlePart } from "./oakland-mission.js";
import { plateMaterial, goldMaterial, chromeMaterial, emberMaterial, chevronGeometry } from "./armor-parts.js";

export const UNLOCK_KEY = "qm85_battle_body";
export const SKIN_KEY = "qm85_skin";
const DURATION = 9.2;
const SNAP_START = 0.8;
const SNAP_EVERY = 0.32;
const FLY_TIME = 0.55;
const CHARGE_AT = 4.4;
const BURST_AT = 6.0;

const store = {
  get(k) {
    try { return localStorage.getItem(k); } catch { return null; }
  },
  set(k, v) {
    try { localStorage.setItem(k, v); } catch { /* private window: the unlock just won't persist */ }
  },
};

export const battleBodyUnlocked = () => store.get(UNLOCK_KEY) === "1";
export const unlockBattleBody = () => store.set(UNLOCK_KEY, "1");
export const chosenSkin = () => (battleBodyUnlocked() && store.get(SKIN_KEY) === "battle" ? "battle" : "classic");
export const chooseSkin = (skin) => store.set(SKIN_KEY, skin);

/**
 * A part's box in `root`'s own space, so the armour sits right whatever the export size. `skip` = objects to leave
 * out (the limbs, when measuring the body: in flight the arms reach past the head and used to stretch the box).
 */
function localBox(root, skip = new Set()) {
  root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert();
  const box = new THREE.Box3();
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry || skip.has(o)) return;
    o.geometry.computeBoundingBox();
    box.union(o.geometry.boundingBox.clone().applyMatrix4(inv.clone().multiply(o.matrixWorld)));
  });
  return box;
}

const DARK = new THREE.Color(0x26262b); // black-ish dark grey (owner 09-24)
const BULK = 0.2; // +20% size at the full battle body
// armour pieces bolt on as the battle parts come in (fraction of parts delivered). Owner 09-30: "edgy, dangerous
// looking" — and NOTHING tall off the back or the head: in the Superman pose his back faces the shoulder camera,
// and the old gold back fins filled the middle of the screen.
// Owner 09-30 (2): "edgier means more aerodynamic, sleekness, upgraded blasters, a missile launcher or laser blaster
// on the shoulder" — and "NO SPIKES". So the parts are HARDWARE: plates that hug him, barrels, a cannon, a pod.
// v4 (owner, after flying v3: the shoulder caps' flat gold faces filled a quarter of his wide window): NO shoulder pieces.
// "make his normal blasters a little fatter and chrome, keep the wings, add a thin-tipped thruster exhaust to the back of
// the wing pack with a mini rocket launcher on top dead centre — recoil when it fires, heat-seeking, never misses."
const STAGES = [
  { at: 0.2, piece: "blasters" }, // fat chrome forearm blaster barrels: the plasma punches leave real hardware
  { at: 0.4, piece: "core" }, // belly chevron plate with an ember reactor slit (the QMM chest badge stays clear)
  { at: 0.6, piece: "wings" }, // brow fairing + the backpack with FOLD-OUT WINGS and a thin-tipped thruster exhaust
  { at: 0.8, piece: "launcher" }, // wing hardware: a laser barrel on each tip, twin missile tubes mid-wing (Q fires from them)
  { at: 1.0, piece: "rocket" }, // the PACK ROCKET on its rail, top dead centre of the pack (E) + every ember light full
];
const WING_FOLD = Math.PI / 2; // folded: swept down along his back (standing); open: straight out (flight)
const WING_BOOST_SWEEP = 0.4; // boosting: the wings rake back

/** First call: remember his stock look and measure him, so every stage blends from the original. */
function armorState(pilot) {
  if (pilot.armor) return pilot.armor;
  const bot = pilot.bot;
  const limbs = new Set();
  for (const limb of [...pilot.arms, ...(pilot.legs ?? [])]) limb?.traverse((o) => limbs.add(o));
  const box = localBox(bot, limbs); // head + torso only
  const mats = [];
  bot.traverse((o) => {
    if (!o.isMesh) return;
    const list = Array.isArray(o.material) ? o.material : [o.material];
    const own = list.map((m) => {
      const c = m.clone();
      mats.push({ mat: c, color: c.color?.clone(), metal: c.metalness, rough: c.roughness });
      return c;
    });
    o.material = Array.isArray(o.material) ? own : own[0];
  });
  pilot.armor = { k: -1, box, mats, scale: bot.scale.clone(), pieces: new Set(), lights: [] };
  return pilot.armor;
}

/** k = 0 stock QM85 … 1 full battle body: darker black-grey armour, gold pieces, beefier. */
export function setArmorProgress(pilot, k) {
  const st = armorState(pilot);
  k = THREE.MathUtils.clamp(k, 0, 1);
  if (k <= st.k) return; // armour only ever builds up during a run
  st.k = k;
  for (const m of st.mats) {
    if (m.color) m.mat.color.copy(m.color).lerp(DARK, k * 0.85);
    if (m.metal !== undefined) m.mat.metalness = THREE.MathUtils.lerp(m.metal, 0.9, k);
    if (m.rough !== undefined) m.mat.roughness = THREE.MathUtils.lerp(m.rough, 0.3, k);
    if (m.mat.emissive) {
      m.mat.emissive.setHex(0x3a2600); // a low gold glow warming up as he armours
      m.mat.emissiveIntensity = 0.3 * k;
    }
  }
  pilot.bot.scale.copy(st.scale).multiplyScalar(1 + BULK * k);
  for (const s of STAGES) if (k >= s.at - 1e-6 && !st.pieces.has(s.piece)) addPiece(pilot, st, s.piece);
}

/** The full battle body (finale, or the unlocked skin). */
export function applyBattleBody(pilot) {
  setArmorProgress(pilot, 1);
}

/**
 * Bolt one stage on. Bot space: +Y up, +Z face, the body box = head + torso (H = its height). Arm space: the arm
 * hangs along -Y from its shoulder origin. Every piece hugs the body; spikes only where they read on the silhouette
 * (shoulders, fists, temples) — never up off the back into the shoulder camera.
 */
function addPiece(pilot, st, piece) {
  st.pieces.add(piece);
  const bot = pilot.bot;
  const { box } = st;
  const size = box.getSize(new THREE.Vector3());
  const H = size.y || 1;
  const plate = plateMaterial();
  const gold = goldMaterial();
  const sleek = plateMaterial(); // small hardware: the same gunmetal, smooth-shaded
  sleek.flatShading = false;
  const chrome = chromeMaterial();
  const pack = pilot.look?.pack ?? {}; // per-pilot pack: VLTRN8 pink + lotus + laser top; 3BIZZLE green plume, red accents
  const packPlate = pack.pink ? new THREE.MeshStandardMaterial({ color: 0xff3fcf, metalness: 0.75, roughness: 0.3, flatShading: true }) : plate;
  const accent = pack.accent ? new THREE.MeshStandardMaterial({ color: pack.accent, metalness: 0.9, roughness: 0.25, emissive: pack.accent, emissiveIntensity: 0.25, flatShading: true }) : gold;
  const at = (parent, mesh, x, y, z) => {
    mesh.position.set(x, y, z);
    parent.add(mesh);
    return mesh;
  };
  const cx = (box.min.x + box.max.x) / 2;
  const cz = (box.min.z + box.max.z) / 2;
  const front = box.max.z;
  const top = box.max.y;
  const bottom = box.min.y;
  if (piece === "core") { // abdominal chevron plate under the QMM badge, gold rim, ember reactor slit
    const y = bottom + H * 0.14;
    const z = front - H * 0.012;
    at(bot, new THREE.Mesh(chevronGeometry(size.x * 0.5, H * 0.15, H * 0.05, H * 0.03), plate), cx, y, z).rotation.x = 0.15;
    at(bot, new THREE.Mesh(chevronGeometry(size.x * 0.56, H * 0.17, H * 0.056, H * 0.02), gold), cx, y, z - H * 0.01).rotation.x = 0.15;
    const slit = at(bot, new THREE.Mesh(new THREE.BoxGeometry(H * 0.02, H * 0.1, H * 0.01), emberMaterial(0.5)), cx, y, front + H * 0.01);
    st.lights.push(slit);
  } else if (piece === "blasters") { // forearm housing + gold band, a barrel down the outer forearm on past the fist
    const blades = new Set(); // the VLTRNs' hidden plasma blades hang off the arms: 0.55 m long — never part of the forearm's size
    for (const b of pilot.blades ?? []) b.g.traverse((o) => blades.add(o));
    pilot.arms.forEach((arm, i) => {
      if (!arm) return;
      const side = i === 0 ? -1 : 1;
      const ab = localBox(arm, blades);
      const len = -ab.min.y || H * 0.64;
      const r = Math.max(ab.max.x - ab.min.x, ab.max.z - ab.min.z) / 2 || H * 0.1;
      const ax = (ab.min.x + ab.max.x) / 2;
      const az = (ab.min.z + ab.max.z) / 2;
      at(arm, new THREE.Mesh(new THREE.CylinderGeometry(r * 1.08, r * 1.0, len * 0.28, 6), plate), ax, -len * 0.62, az);
      at(arm, new THREE.Mesh(new THREE.CylinderGeometry(r * 1.12, r * 1.12, len * 0.04, 6), gold), ax, -len * 0.5, az);
      const bx = ax + side * r * 0.95; // the barrel rides the outside of the forearm, muzzle just past the knuckles
      const by = -len * 0.5;
      at(arm, new THREE.Mesh(barrel(len * 0.58, r * 0.32), chrome), bx, by, az).rotation.x = Math.PI; // fat + chrome (owner)
      at(arm, new THREE.Mesh(new THREE.BoxGeometry(r * 0.14, len * 0.4, r * 0.12), gold), bx + side * r * 0.3, by - len * 0.25, az); // sight rail
      at(arm, new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, r * 0.4, len * 0.04, 12), gold), bx, by - len * 0.55, az); // muzzle ring
      st.lights.push(at(arm, new THREE.Mesh(new THREE.CylinderGeometry(r * 0.22, r * 0.22, len * 0.012, 12), emberMaterial(0.4)), bx, by - len * 0.585, az));
    });
  } else if (piece === "wings") { // brow fairing (eyes clear underneath) + the backpack with its fold-out wings
    const y = top - H * 0.24;
    at(bot, new THREE.Mesh(chevronGeometry(size.x * 0.62, H * 0.07, H * 0.03, H * 0.02), plate), cx, y, front - H * 0.03).rotation.x = -0.3;
    at(bot, new THREE.Mesh(chevronGeometry(size.x * 0.66, H * 0.085, H * 0.034, H * 0.012), gold), cx, y, front - H * 0.04).rotation.x = -0.3;
    st.brow = { y: y - H * 0.05, z: front - H * 0.02, w: size.x * 0.5 };
    // the pack: a low chevron slab on the upper back (thin toward the camera), gold rim, ember vent
    const back = box.min.z;
    const py = bottom + H * 0.3;
    const packMesh = at(bot, new THREE.Mesh(chevronGeometry(size.x * 0.3, H * 0.2, H * 0.03, H * 0.055), packPlate), cx, py, back - H * 0.02);
    packMesh.rotation.y = Math.PI; // the V faces out the back
    at(bot, new THREE.Mesh(chevronGeometry(size.x * 0.33, H * 0.22, H * 0.033, H * 0.03), gold), cx, py, back - H * 0.01).rotation.y = Math.PI;
    st.lights.push(at(bot, new THREE.Mesh(new THREE.BoxGeometry(size.x * 0.16, H * 0.012, H * 0.01), emberMaterial(0.45)), cx, py - H * 0.06, back - H * 0.05));
    // wings: thin swept planforms in the bot's X/Y plane (level with him in flight), hinged at the pack's sides
    st.wings = [-1, 1].map((side) => {
      const hinge = new THREE.Group();
      hinge.position.set(cx + side * size.x * 0.12, py + H * 0.02, back - H * 0.04);
      hinge.scale.x = side; // one planform, mirrored (three.js flips the winding for a negative scale)
      bot.add(hinge);
      hinge.add(new THREE.Mesh(wingGeometry(H), packPlate));
      const pin = new THREE.Mesh(new THREE.BoxGeometry(H * 0.46, H * 0.012, H * 0.016), gold); // leading-edge pinline
      pin.position.set(H * 0.23, H * 0.06, 0);
      pin.rotation.z = -0.15;
      hinge.add(pin);
      return hinge;
    });
    // thin-tipped thruster exhaust off the bottom of the pack (owner): chrome nozzle tapering to a point, ember plume
    const nz = back - H * 0.05;
    at(bot, new THREE.Mesh(new THREE.CylinderGeometry(H * 0.045, H * 0.012, H * 0.18, 12).translate(0, -H * 0.09, 0), chrome), cx, py - H * 0.1, nz);
    at(bot, new THREE.Mesh(new THREE.CylinderGeometry(H * 0.05, H * 0.05, H * 0.014, 12), gold), cx, py - H * 0.1, nz); // collar
    if (pack.lotus) { // VLTRN8: the nozzle blooms a lotus like her shield — two rings of petals around the collar
      const petal = new THREE.MeshStandardMaterial({ color: 0xff8ae6, emissive: 0xff2fb0, emissiveIntensity: 0.55, metalness: 0.3, roughness: 0.5 });
      for (const [n, ring, tilt] of [[8, H * 0.06, 0.55], [6, H * 0.04, 0.95]]) {
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2 + (n === 6 ? Math.PI / 6 : 0);
          const p = new THREE.Mesh(new THREE.SphereGeometry(H * 0.022, 8, 6), petal);
          p.scale.set(1, 0.4, 2.1);
          p.position.set(cx + Math.cos(a) * ring, py - H * 0.1 - ring * 0.5, nz + Math.sin(a) * ring);
          p.lookAt(cx + Math.cos(a) * ring * 3, py - H * 0.1 - ring * 0.5 - tilt * H * 0.15, nz + Math.sin(a) * ring * 3); // petals lean out and down
          bot.add(p);
        }
      }
    }
    const plumeMat = emberMaterial(0.35);
    if (pack.plume) plumeMat.color.setHex(pack.plume); // each bot's own exhaust colour
    const plume = at(bot, new THREE.Mesh(new THREE.ConeGeometry(H * 0.026, H * 0.34, 12).rotateX(Math.PI).translate(0, -H * 0.17, 0), plumeMat), cx, py - H * 0.27, nz);
    plume.visible = false;
    st.fold = WING_FOLD;
    st.animate = (dt, { grounded, boosting }) => { // folded along his back on the ground; out in flight; raked on boost
      const target = grounded ? WING_FOLD : boosting ? WING_BOOST_SWEEP : 0;
      st.fold = THREE.MathUtils.damp(st.fold, target, grounded ? 5 : 3.5, dt);
      for (const [i, hinge] of st.wings.entries()) hinge.rotation.z = -(i === 0 ? -1 : 1) * st.fold;
      plume.visible = !grounded;
      plume.scale.set(1, (boosting ? 1.7 : 0.9) * (0.85 + Math.random() * 0.3), 1);
    };
    st.animate(0, { grounded: true, boosting: false });
  } else if (piece === "launcher") { // wing hardware: a laser barrel at each tip, twin missile tubes mid-wing; body complete
    st.pods = [];
    for (const hinge of st.wings ?? []) {
      const b = new THREE.Mesh(barrel(H * 0.24, H * 0.014), sleek); // tip laser, pointing +Y = ahead in flight
      b.position.set(H * 0.4, -H * 0.06, 0);
      hinge.add(b);
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.02, H * 0.02, H * 0.02, 10), gold);
      ring.position.set(H * 0.4, H * 0.15, 0);
      hinge.add(ring);
      const lens = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.01, H * 0.01, H * 0.008, 10), emberMaterial(0.4));
      lens.position.set(H * 0.4, H * 0.185, 0);
      hinge.add(lens);
      st.lights.push(lens);
      const pod = new THREE.Mesh(new THREE.BoxGeometry(H * 0.07, H * 0.11, H * 0.03), plate); // missile pod on the top face
      pod.position.set(H * 0.22, 0, -H * 0.02);
      hinge.add(pod);
      const podTrim = new THREE.Mesh(new THREE.BoxGeometry(H * 0.074, H * 0.014, H * 0.032), gold);
      podTrim.position.set(H * 0.22, H * 0.04, -H * 0.02);
      hinge.add(podTrim);
      for (const tx of [-1, 1]) {
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.014, H * 0.014, H * 0.02, 8), sleek);
        tube.position.set(H * 0.22 + tx * H * 0.018, H * 0.06, -H * 0.02);
        hinge.add(tube);
        const tip = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.01, H * 0.01, H * 0.006, 8), emberMaterial(0.4));
        tip.position.set(H * 0.22 + tx * H * 0.018, H * 0.072, -H * 0.02);
        hinge.add(tip);
        st.lights.push(tip);
      }
      st.pods.push(pod); // flight.js: missiles leave the wings, alternating sides
    }
  } else if (piece === "rocket") { // top dead centre of the pack (E): the PACK ROCKET on its rail — or VLTRN8's laser cannon
    const py = bottom + H * 0.3;
    const rz = box.min.z - H * 0.085; // on top of the pack (up, toward the sky, in flight)
    at(bot, new THREE.Mesh(new THREE.BoxGeometry(H * 0.05, H * 0.24, H * 0.018), packPlate), cx, py + H * 0.02, rz); // rail
    at(bot, new THREE.Mesh(new THREE.BoxGeometry(H * 0.056, H * 0.02, H * 0.02), gold), cx, py - H * 0.09, rz); // rail foot
    if (pack.top === "laser") { // "a sick laser blaster, but like a nuke": fat chrome barrel, pink energy rings, pink lens
      const cannon = new THREE.Group();
      cannon.add(new THREE.Mesh(new THREE.CylinderGeometry(H * 0.04, H * 0.05, H * 0.3, 14), chrome));
      for (const y of [-0.06, 0.02, 0.1]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(H * 0.05, H * 0.008, 8, 24).rotateX(Math.PI / 2), emberMaterial(0.6));
        ring.material.color.setHex(0xff4fd8);
        ring.position.y = H * y;
        cannon.add(ring);
        st.lights.push(ring);
      }
      const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.055, H * 0.055, H * 0.03, 14), gold);
      muzzle.position.y = H * 0.16;
      cannon.add(muzzle);
      const lens = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.03, H * 0.03, H * 0.012, 14), emberMaterial(0.7));
      lens.material.color.setHex(0xffb3f0);
      lens.position.y = H * 0.18;
      cannon.add(lens);
      st.lights.push(lens);
      at(bot, cannon, cx, py + H * 0.03, rz - H * 0.05);
      st.packTop = { kind: "laser", mesh: cannon };
    } else {
      const round = new THREE.Group();
      round.add(new THREE.Mesh(new THREE.CylinderGeometry(H * 0.03, H * 0.03, H * 0.22, 12), chrome));
      const nose = new THREE.Mesh(new THREE.ConeGeometry(H * 0.03, H * 0.09, 12), accent);
      nose.position.y = H * 0.155;
      round.add(nose);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.031, H * 0.031, H * 0.02, 12), emberMaterial(0.6)); // ember stripe
      band.position.y = H * 0.09;
      round.add(band);
      st.lights.push(band);
      for (let i = 0; i < 4; i++) { // tail fins
        const fin = new THREE.Mesh(new THREE.BoxGeometry(H * 0.006, H * 0.05, H * 0.03), accent);
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        fin.position.set(Math.cos(a) * H * 0.038, -H * 0.085, Math.sin(a) * H * 0.038);
        fin.rotation.y = -a;
        round.add(fin);
      }
      at(bot, round, cx, py + H * 0.03, rz - H * 0.038);
      st.packTop = { kind: "rocket", mesh: round }; // flight.js: launches from here, hides it while the next one loads
    }
    for (const l of st.lights) l.material.opacity = 1;
    if (st.brow) at(bot, new THREE.Mesh(new THREE.BoxGeometry(st.brow.w, H * 0.007, H * 0.01), emberMaterial(0.9)), cx, st.brow.y, st.brow.z);
  }
}

/** One wing planform (the left; the right is the mirror): root at the hinge, span along +X, swept back, thin in Z. */
function wingGeometry(H) {
  const s = new THREE.Shape();
  s.moveTo(0, H * 0.09); // leading edge, root
  s.lineTo(H * 0.46, H * 0.02); // leading edge, tip (swept back)
  s.lineTo(H * 0.46, -H * 0.06); // tip chord
  s.lineTo(H * 0.1, -H * 0.11); // trailing edge
  s.lineTo(0, -H * 0.1);
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth: H * 0.012, bevelEnabled: true, bevelThickness: H * 0.004, bevelSize: H * 0.004, bevelSegments: 1 });
  geo.translate(0, 0, -H * 0.006);
  return geo;
}

/** A smooth gun barrel: base at the origin, muzzle `len` along +Y. */
function barrel(len, r) {
  return new THREE.CylinderGeometry(r, r, len, 12).translate(0, len / 2, 0);
}

/** The warehouse cutscene. update(dt) returns true while it is still playing. */
export class Finale {
  constructor(flight) {
    this.f = flight;
    this.t = 0;
    this.snapped = 0;
    this.burst = false;
    this.charging = false;
    this.root = new THREE.Group();
    flight.root.add(this.root);
    this.at = flight.pos.clone();
    this.ground = this.at.y;
    this.pieces = [];
    for (let i = 0; i < 10; i++) {
      const obj = i % 2 ? battlePart() : dataDrive();
      obj.userData.y = 2.2 + (i % 3) * 0.6;
      obj.scale.setScalar(0.7);
      this.root.add(obj);
      this.pieces.push(obj);
    }
    this.charge = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2),
      new THREE.MeshBasicMaterial({ color: 0xffcf5a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.charge.position.copy(this.at).add(new THREE.Vector3(0, 0.9, 0));
    this.root.add(this.charge);
    sfx.gate();
  }

  update(dt) {
    const f = this.f;
    this.t += dt;
    const t = this.t;
    const heart = this.at.clone().add(new THREE.Vector3(0, 0.9, 0));
    // pieces orbit him, then one by one fly in and snap on
    this.pieces.forEach((p, i) => {
      if (!p.visible) return;
      const start = SNAP_START + i * SNAP_EVERY;
      p.rotation.y += dt * 3;
      if (t < start) {
        const a = t * 1.4 + (i / 10) * Math.PI * 2;
        p.position.set(this.at.x + Math.cos(a) * 3.2, this.ground + p.userData.y * 0.7 + Math.sin(t * 3 + i) * 0.2, this.at.z + Math.sin(a) * 3.2);
        return;
      }
      const k = Math.min(1, (t - start) / FLY_TIME);
      p.position.lerp(heart, Math.min(1, dt * 10 + k * k * 0.5));
      p.scale.setScalar(0.7 * (1 - k * 0.8));
      if (k >= 1) {
        p.visible = false;
        this.snapped += 1;
        sfx.snap(this.snapped);
        f.fx.pulse(heart, i % 2 ? 0xffb338 : 0x9b4dff, 3);
        f.shake.add(0.08);
      }
    });
    // charge up and lift off the street on gold thrusters
    const lift = t < CHARGE_AT ? 0 : Math.min(1, (t - CHARGE_AT) / 1.2);
    if (t >= CHARGE_AT && !this.charging) {
      this.charging = true;
      sfx.transform();
    }
    if (t >= CHARGE_AT && t < BURST_AT) {
      const k = (t - CHARGE_AT) / (BURST_AT - CHARGE_AT);
      this.charge.scale.setScalar(0.3 + k * 1.6);
      this.charge.material.opacity = 0.15 + k * 0.45;
      this.charge.position.y = this.ground + 0.9 + lift * 0.9;
      f.shake.add(dt * 0.25);
    }
    if (t >= BURST_AT && !this.burst) {
      this.burst = true;
      this.charge.visible = false;
      applyBattleBody(f.pilot);
      unlockBattleBody();
      const at = heart.clone().setY(this.ground + 1.8);
      f.fx.pulse(at, 0xffcf5a, 26);
      f.fx.pulse(at, 0xc58bff, 14);
      f.shake.add(0.9);
    }
    // hover 0.9 m through the burst, then settle back onto the street
    const settle = t > BURST_AT + 1.6 ? Math.min(1, (t - BURST_AT - 1.6) / 1.1) : 0;
    const hover = (t < BURST_AT ? lift : 1) * 0.9 * (1 - settle);
    const pos = this.at.clone().setY(this.ground + hover);
    f.pilot.update(dt, {
      pos, yaw: Math.PI, pitch: 0, bank: 0, boosting: t >= CHARGE_AT && settle < 1, spin: 0, t: f.t + t, blink: false,
      grounded: t < CHARGE_AT || settle >= 1, upright: true, thrustColor: 0xffb338,
    });
    // Rob & Mahal hop and cheer once he's whole
    for (const [i, who] of (f.mission?.crew ?? []).entries()) {
      who.position.y = t > BURST_AT ? Math.abs(Math.sin((t + i * 0.3) * 7)) * 0.45 : 0;
    }
    this.#camera(dt, t, pos);
    if (t < DURATION) return true;
    for (const who of f.mission?.crew ?? []) who.position.y = 0;
    f.root.remove(this.root);
    return false;
  }

  /** In front of him (he faces downtown, -Z): a slow push in, then a quarter orbit after the burst. */
  #camera(dt, t, pos) {
    const cam = this.f.camera;
    const orbit = -0.35 + Math.max(0, t - BURST_AT) * 0.22;
    const dist = t < BURST_AT ? 4.6 - t * 0.12 : 3.6 + (t - BURST_AT) * 0.35; // he's waist-high: stay close
    const want = pos.clone().add(new THREE.Vector3(Math.sin(orbit) * dist, 1.35, -Math.cos(orbit) * dist)); // just above his head, clear of a curb
    cam.position.lerp(want, 1 - Math.exp(-dt * 4));
    cam.up.set(0, 1, 0);
    cam.fov = THREE.MathUtils.damp(cam.fov, 46, 3, dt); // a longer lens makes the little man the hero of the shot
    cam.updateProjectionMatrix();
    cam.lookAt(pos.clone().add(new THREE.Vector3(0, 0.55, 0)));
    this.f.shake.apply(cam, dt, this.f.t + t);
  }
}
