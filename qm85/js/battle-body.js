// THE BATTLE BODY (owner 09-24 audit pick #3): delivering the 10th piece used to show a text card. Now the
// FINALE plays at the QMM Warehouse — the drives and parts he collected fly in and snap onto QM85, he lifts off
// the street on gold thrusters, charges, and bursts into his BATTLE BODY while Rob & Mahal cheer. Then you
// FINISH THE NIGHT in it. It stays unlocked as a skin (localStorage) you can pick on the home screen.
import * as THREE from "three";
import { sfx } from "./audio.js";
import { dataDrive, battlePart } from "./oakland-mission.js";

export const UNLOCK_KEY = "qm85_battle_body";
export const SKIN_KEY = "qm85_skin";
const GOLD = 0xd4a73a;
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

/** QM85's body box in his own (bot-local) space, so the armour sits right whatever the export size. */
function localBox(bot) {
  bot.updateMatrixWorld(true);
  const inv = bot.matrixWorld.clone().invert();
  const box = new THREE.Box3();
  bot.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    o.geometry.computeBoundingBox();
    box.union(o.geometry.boundingBox.clone().applyMatrix4(inv.clone().multiply(o.matrixWorld)));
  });
  return box;
}

const DARK = new THREE.Color(0x26262b); // black-ish dark grey (owner 09-24)
const BULK = 0.2; // +20% size at the full battle body
// armour pieces bolt on as the battle parts come in (fraction of parts delivered)
const STAGES = [
  { at: 0.2, piece: "pauldrons" },
  { at: 0.4, piece: "core" },
  { at: 0.6, piece: "fins" },
  { at: 0.8, piece: "crest" },
  { at: 1.0, piece: "edges" },
];

/** First call: remember his stock look and measure him, so every stage blends from the original. */
function armorState(pilot) {
  if (pilot.armor) return pilot.armor;
  const bot = pilot.bot;
  const box = localBox(bot);
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
  pilot.armor = { k: -1, box, mats, scale: bot.scale.clone(), pieces: new Set() };
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

function addPiece(pilot, st, piece) {
  st.pieces.add(piece);
  const bot = pilot.bot;
  const { box } = st;
  const size = box.getSize(new THREE.Vector3());
  const H = size.y || 1;
  const gold = new THREE.MeshStandardMaterial({ color: GOLD, metalness: 1, roughness: 0.22, emissive: 0x3a2600, emissiveIntensity: 0.5 });
  const glow = (c) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
  const add = (mesh, x, y, z) => {
    mesh.position.set(x, y, z);
    bot.add(mesh);
    return mesh;
  };
  const cx = (box.min.x + box.max.x) / 2;
  const front = box.max.z;
  const back = box.min.z;
  const y = (f) => box.min.y + H * f;
  if (piece === "pauldrons") { // shoulders: arms hang from their origin, so the shoulder is 0,0,0 in arm space
    for (const arm of pilot.arms) {
      if (!arm) continue;
      const p = new THREE.Mesh(new THREE.SphereGeometry(H * 0.1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), gold);
      p.position.set(0, H * 0.02, 0);
      arm.add(p);
    }
  } else if (piece === "core") { // chest reactor
    add(new THREE.Mesh(new THREE.OctahedronGeometry(H * 0.06, 0), glow(0xc58bff)), cx, y(0.58), front + H * 0.01);
    add(new THREE.Mesh(new THREE.TorusGeometry(H * 0.075, H * 0.012, 8, 24), gold), cx, y(0.58), front);
  } else if (piece === "fins") { // two swept gold blades on his back
    st.fins = [-1, 1].map((s) => {
      const fin = add(new THREE.Mesh(new THREE.BoxGeometry(H * 0.03, H * 0.42, H * 0.14), gold), cx + s * size.x * 0.22, y(0.62), back - H * 0.04);
      fin.rotation.set(-0.55, 0, s * 0.45);
      return fin;
    });
  } else if (piece === "crest") { // helmet crest
    add(new THREE.Mesh(new THREE.BoxGeometry(H * 0.03, H * 0.1, H * 0.28), gold), cx, box.max.y + H * 0.02, (front + back) / 2).rotation.x = -0.25;
  } else if (piece === "edges") { // ice-blue edge light on the fins: the body is complete
    for (const fin of st.fins ?? []) {
      const edge = add(new THREE.Mesh(new THREE.BoxGeometry(H * 0.012, H * 0.36, H * 0.02), glow(0x9fe8ff)), fin.position.x, fin.position.y, fin.position.z - H * 0.005);
      edge.rotation.copy(fin.rotation);
    }
  }
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
