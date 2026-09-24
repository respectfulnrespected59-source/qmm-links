// Detailed, animated enemy models (owner 09-24: "make the drones and enemies features more pronounced
// and detailed"). Every builder faces +Z (lookAt aims +Z at QM85) and sets userData.animate(t) for its
// idle motion — EnemySwarm calls it each frame.
import * as THREE from "three";
import { spawn } from "./assets.js";

const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness: 0.5, roughness: 0.45, ...extra });
const glow = (color, opacity = 1) => new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, depthWrite: opacity >= 1 });
const add = (parent, mesh, [x, y, z] = [0, 0, 0], [rx, ry, rz] = [0, 0, 0]) => {
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  parent.add(mesh);
  return mesh;
};

// ---------------------------------------------------------------- VIRUS
// (owner 09-24: "polish up... the green virus too") — a bio-mech pathogen: toxic core with black vein lattice,
// thorn spikes, three whipping tentacles, a slit eye that faces QM85 and a cloud of corrupted packets.
export function virusModel() {
  const g = new THREE.Group();
  const core = add(g, new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 2), std(0x1f6b14, { emissive: 0x2eff2a, emissiveIntensity: 0.55, roughness: 0.55, flatShading: true })));
  const veins = add(core, new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.58, 1)), new THREE.LineBasicMaterial({ color: 0x0a2a08 })));
  const nucleus = add(g, new THREE.Mesh(new THREE.IcosahedronGeometry(0.26, 1), glow(0xd4ff5a)));
  const membrane = add(g, new THREE.Mesh(new THREE.SphereGeometry(0.82, 24, 16),
    new THREE.MeshStandardMaterial({ color: 0x7dff6a, transparent: true, opacity: 0.2, roughness: 0.1, depthWrite: false })));
  // thorns: a stalk with a pointed, glowing tip
  const stalk = new THREE.CylinderGeometry(0.03, 0.07, 0.5, 6).translate(0, 0.25, 0);
  const thorn = new THREE.ConeGeometry(0.075, 0.32, 6).translate(0, 0.64, 0);
  const stalkMat = std(0x7fd84a, { emissive: 0x4dff2a, emissiveIntensity: 0.5 });
  const thornMat = glow(0xeaff7a);
  const dirs = new THREE.IcosahedronGeometry(1, 1).getAttribute("position");
  const seen = new Set();
  for (let i = 0; i < dirs.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(dirs, i).normalize();
    const key = v.toArray().map((n) => n.toFixed(2)).join();
    if (seen.has(key) || v.z > 0.85) continue; // the front is the eye's
    seen.add(key);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
    for (const [geo, mat] of [[stalk, stalkMat], [thorn, thornMat]]) {
      const m = new THREE.Mesh(geo, mat);
      m.quaternion.copy(q);
      m.position.copy(v).multiplyScalar(0.48);
      core.add(m);
    }
  }
  // the eye: a black socket with an acid slit pupil, facing +Z (QM85)
  const socket = add(g, new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10), std(0x050a04, { roughness: 0.2, metalness: 0.3 })), [0, 0.05, 0.62]);
  const pupil = add(socket, new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.06), glow(0xd4ff5a)), [0, 0, 0.17]);
  // three tentacles whipping off the back
  const tentacles = [];
  const tentMat = std(0x2f8a1d, { emissive: 0x2eff2a, emissiveIntensity: 0.25, roughness: 0.7 });
  for (let i = 0; i < 3; i++) {
    const pts = [];
    for (let k = 0; k <= 8; k++) pts.push(new THREE.Vector3(Math.sin(k * 0.9) * 0.12 * k * 0.25, 0, -k * 0.16));
    const t = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.045, 6), tentMat);
    const pivot = new THREE.Group();
    pivot.rotation.z = (i / 3) * Math.PI * 2 + 0.5;
    pivot.add(t);
    t.position.set(0, 0.35, -0.35);
    g.add(pivot);
    tentacles.push({ pivot, t, phase: i * 2.1 });
  }
  // corrupted packets: black cubes with acid edges orbiting the cell
  const packets = new THREE.Group();
  g.add(packets);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const box = add(packets, new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.11, 0.11), std(0x06110a, { roughness: 0.3 })), [Math.cos(a) * 1.05, Math.sin(a * 2) * 0.25, Math.sin(a) * 1.05]);
    box.add(new THREE.LineSegments(new THREE.EdgesGeometry(box.geometry), new THREE.LineBasicMaterial({ color: 0x9dff5a })));
  }
  g.userData.animate = (t) => {
    core.rotation.set(t * 0.5, t * 0.9, 0);
    veins.rotation.y = -t * 0.3;
    membrane.scale.setScalar(1 + Math.sin(t * 4) * 0.07);
    nucleus.scale.setScalar(1 + Math.sin(t * 7) * 0.2);
    packets.rotation.y = t * 1.4;
    packets.rotation.x = Math.sin(t * 0.7) * 0.4;
    pupil.scale.y = 0.35 + 0.65 * Math.abs(Math.sin(t * 1.7)); // the slit narrows and widens
    for (const { t: tube, pivot, phase } of tentacles) {
      tube.rotation.x = Math.sin(t * 3 + phase) * 0.35;
      pivot.rotation.z += Math.sin(t * 1.3 + phase) * 0.004;
    }
  };
  return g;
}

// ---------------------------------------------------------------- PALANTÍR BOT
// (owner 09-24: "polish up those enemy drones alot more") — the seeing-stone drone: Tripo sentinel body wrapped
// in gunmetal armour fins, a big glass eye with a red pupil that dilates, a sweeping scan laser, blinking
// antenna, three flickering thrusters underneath, the data halo and its orbiting nodes.
export function palantirModel() {
  const g = new THREE.Group();
  g.add(spawn("sentinel"));
  const armour = std(0x1b2029, { metalness: 0.85, roughness: 0.35 });
  const cyan = std(0x8ff3ff, { emissive: 0x8ff3ff, emissiveIntensity: 1.2, metalness: 0.9 });
  const halo = add(g, new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.035, 8, 48), cyan), [0, 0, 0], [Math.PI / 2, 0, 0]);
  const nodes = new THREE.Group();
  g.add(nodes);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    add(nodes, new THREE.Mesh(new THREE.OctahedronGeometry(0.1), glow(0xe8fbff)), [Math.cos(a) * 1.05, 0, Math.sin(a) * 1.05]);
  }
  // armour fins: four tapered plates around the body, cyan-edged
  const finGeo = new THREE.ConeGeometry(0.16, 0.7, 4).rotateX(Math.PI).scale(1, 1, 0.35);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const fin = add(g, new THREE.Mesh(finGeo, armour), [Math.cos(a) * 0.62, 0.05, Math.sin(a) * 0.62], [0, -a + Math.PI / 2, 0]);
    fin.add(new THREE.LineSegments(new THREE.EdgesGeometry(finGeo), new THREE.LineBasicMaterial({ color: 0x8ff3ff })));
  }
  // the eye: glossy black lens, cyan iris ring, red pupil
  const lens = add(g, new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 14), std(0x05070a, { metalness: 0.9, roughness: 0.08 })), [0, 0.02, 0.5]);
  add(lens, new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.02, 8, 32), cyan), [0, 0, 0.26]);
  const pupil = add(lens, new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), glow(0xff2a2a)), [0, 0, 0.27]);
  // scan laser: a thin red plane sweeping up and down in front
  const laser = add(g, new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.012), new THREE.MeshBasicMaterial({ color: 0xff3a3a, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })), [0, 0, 1.1]);
  // antenna with a blinking warning light
  add(g, new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.025, 0.55, 6).translate(0, 0.27, 0), armour), [0, 0.55, -0.1]);
  const beacon = add(g, new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), glow(0xff3030, 0.99)), [0, 1.12, -0.1]);
  // three thrusters underneath, flickering
  const jets = [];
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    add(g, new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.22, 10), armour), [Math.cos(a) * 0.32, -0.6, Math.sin(a) * 0.32]);
    jets.push(add(g, new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.5, 10).rotateX(Math.PI).translate(0, -0.25, 0),
      new THREE.MeshBasicMaterial({ color: 0x9ff6ff, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false })), [Math.cos(a) * 0.32, -0.7, Math.sin(a) * 0.32]));
  }
  const beam = add(g, new THREE.Mesh(new THREE.ConeGeometry(0.18, 3.5, 16, 1, true).rotateX(-Math.PI / 2).translate(0, 0, 2.1), // narrow: seen head-on the old cone was a big blue disc that hid the drone
    new THREE.MeshBasicMaterial({ color: 0x8ff3ff, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })));
  g.userData.animate = (t) => {
    halo.rotation.z = t * 1.6;
    nodes.rotation.y = -t * 2.2;
    beam.material.opacity = 0.02 + 0.03 * (0.5 + 0.5 * Math.sin(t * 9)); // a searchlight, not a floodlight
    laser.position.y = Math.sin(t * 2.6) * 0.45;
    laser.material.opacity = 0.45 + 0.35 * (0.5 + 0.5 * Math.sin(t * 17));
    pupil.scale.setScalar(0.8 + 0.5 * (0.5 + 0.5 * Math.sin(t * 3.1)));
    beacon.material.opacity = Math.sin(t * 5) > 0.5 ? 1 : 0.15;
    for (const j of jets) j.scale.set(1, 0.7 + Math.random() * 0.6, 1);
  };
  return g;
}

// ---------------------------------------------------------------- SHADOW OPS JET
export function shadowOpsModel() {
  const g = new THREE.Group();
  const hull = std(0x0b0b0e, { metalness: 0.9, roughness: 0.28 });
  const panel = std(0x1c1d22, { metalness: 0.8, roughness: 0.4 });
  const wingGeo = new THREE.ConeGeometry(1.7, 2.6, 3).rotateX(Math.PI / 2).scale(1, 0.1, 1);
  add(g, new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 2.2, 6, 12).rotateX(Math.PI / 2), hull)); // fuselage along Z
  add(g, new THREE.Mesh(wingGeo, hull), [0, -0.05, -0.2]); // delta wing
  add(g, new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 10).scale(1, 0.7, 2.2),
    new THREE.MeshStandardMaterial({ color: 0x2a3a4a, metalness: 1, roughness: 0.05 })), [0, 0.2, 0.55]); // canopy
  for (const x of [-0.45, 0.45]) {
    add(g, new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.55, 0.5), panel), [x, 0.3, -1.1], [0, 0, x > 0 ? -0.35 : 0.35]); // canted tails
    add(g, new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.9, 12).rotateX(Math.PI / 2), panel), [x * 0.7, -0.05, -1.05]); // nacelles
    add(g, new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 8).rotateX(Math.PI / 2), panel), [x * 2, -0.12, -0.1]); // weapon pods
  }
  const exhaust = [-0.32, 0.32].map((x) => add(g, new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.9, 12).rotateX(-Math.PI / 2).translate(0, 0, -0.45),
    new THREE.MeshBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })), [x, -0.05, -1.5]));
  const strobes = [[-1.55, 0xff3030], [1.55, 0x30ff60]].map(([x, c]) => add(g, new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), glow(c, 0.99)), [x, -0.05, -1.0]));
  const edge = new THREE.LineSegments(new THREE.EdgesGeometry(wingGeo), new THREE.LineBasicMaterial({ color: 0xcfe8ff }));
  edge.position.set(0, -0.05, -0.2);
  g.add(edge);
  for (const x of [-1.1, -0.75, 0.75, 1.1]) { // belly missiles
    add(g, new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.7, 8).rotateX(Math.PI / 2), std(0x9aa3ad, { metalness: 0.8, roughness: 0.3 })), [x, -0.2, 0.1]);
    add(g, new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.12, 8).rotateX(Math.PI / 2), glow(0xff5a3a, 0.99)), [x, -0.2, 0.5]);
  }
  for (const x of [-0.32, 0.32]) add(g, new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.02, 6, 16), glow(0x9fd8ff, 0.99)), [x, -0.05, -1.5]); // afterburner rings
  add(g, new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.5), glow(0xff3030, 0.99)), [0, 0.05, 1.35]); // nose probe light
  g.userData.animate = (t) => {
    for (const e of exhaust) e.scale.set(1, 1, 0.8 + Math.random() * 0.5);
    const on = Math.sin(t * 6) > 0.6;
    for (const s of strobes) s.material.opacity = on ? 1 : 0.1;
  };
  return g;
}

// ---------------------------------------------------------------- ROBES (acolyte + serpent priest)
let knit = null;
function knitTexture() {
  if (knit) return knit;
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const x = c.getContext("2d");
  x.fillStyle = "#3b3348"; // lighter charcoal-plum so the knit reads against the night city
  x.fillRect(0, 0, 128, 128);
  x.strokeStyle = "#6a5c80";
  x.lineWidth = 3;
  for (let y = 0; y < 128; y += 8) {
    for (let k = 0; k < 128; k += 8) {
      x.beginPath();
      x.moveTo(k, y);
      x.lineTo(k + 4, y + 6);
      x.lineTo(k + 8, y);
      x.stroke();
    }
  }
  knit = new THREE.CanvasTexture(c);
  knit.wrapS = knit.wrapT = THREE.RepeatWrapping;
  knit.repeat.set(3, 4);
  knit.colorSpace = THREE.SRGBColorSpace;
  return knit;
}

function runeRing(radius, color, count = 10) {
  const ring = new THREE.Group();
  const mat = glow(color, 0.9);
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    add(ring, new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.03), mat), [Math.cos(a) * radius, 0, Math.sin(a) * radius], [0, -a, 0]);
  }
  add(ring, new THREE.Mesh(new THREE.TorusGeometry(radius, 0.015, 6, 64), mat), [0, 0, 0], [Math.PI / 2, 0, 0]);
  return ring;
}

/** Robe, belt, hem glow, hood, face (reptile snout for the priest), slit eyes, sleeves. Returns { hem, face }. */
function robe(g, { skin, eyes, snout, gold }) {
  const robeMat = std(0xffffff, { map: knitTexture(), roughness: 0.9, metalness: 0.1, side: THREE.DoubleSide, emissive: 0xffffff, emissiveMap: knitTexture(), emissiveIntensity: 0.35 });
  const goldMat = std(0xd4a73a, { metalness: 1, roughness: 0.3, emissive: 0x3a2a08 });
  add(g, new THREE.Mesh(new THREE.ConeGeometry(0.75, 2.2, 20, 1, true), robeMat), [0, -0.3, 0]);
  add(g, new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 6, 24), goldMat), [0, -0.1, 0], [Math.PI / 2, 0, 0]); // rope belt
  if (gold) for (const y of [-1.2, 0.35]) add(g, new THREE.Mesh(new THREE.TorusGeometry(y < 0 ? 0.72 : 0.3, 0.04, 6, 32), goldMat), [0, y, 0], [Math.PI / 2, 0, 0]);
  const hem = add(g, new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.03, 6, 40), glow(eyes, 0.9)), [0, -1.38, 0], [Math.PI / 2, 0, 0]);
  add(g, new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), std(0x3b3348, { roughness: 0.9, side: THREE.DoubleSide })), [0, 0.95, 0], [-0.35, 0, 0]); // hood
  const face = add(g, new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 12), std(skin, { roughness: 0.55, flatShading: snout, emissive: skin, emissiveIntensity: 0.9 })), [0, 0.85, snout ? 0.12 : 0.08]);
  face.scale.set(0.9, 1, snout ? 1.45 : 1);
  for (const x of [-0.11, 0.11]) add(g, new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 0.02), glow(eyes)), [x, 0.9, snout ? 0.43 : 0.36]); // slit eyes
  if (snout) for (const x of [-0.05, 0.05]) add(g, new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.1, 5), std(0xf2eee0)), [x, 0.7, 0.5], [Math.PI, 0, 0]); // fangs
  for (const s of [-1, 1]) { // sleeves reaching forward, hands at the cuffs
    add(g, new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.17, 0.75, 10), robeMat), [s * 0.45, 0.25, 0.25], [1.1, 0, s * 0.25]);
    add(g, new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), std(skin)), [s * 0.5, 0.12, 0.58]);
  }
  return { hem, face };
}

export function acolyteModel() {
  const g = new THREE.Group();
  const { hem } = robe(g, { skin: 0x1c1826, eyes: 0x9dff5a, snout: false, gold: false });
  const lantern = add(g, new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 1), glow(0x9dff5a)), [0, 0.1, 0.62]);
  const runes = add(g, runeRing(1.0, 0x9dff5a, 8), [0, 0.2, 0]);
  g.userData.animate = (t) => {
    runes.rotation.y = t * 1.2;
    lantern.scale.setScalar(1 + Math.sin(t * 5) * 0.25);
    hem.material.opacity = 0.6 + 0.35 * Math.sin(t * 3);
  };
  return g;
}

export function serpentPriestModel() {
  const g = new THREE.Group();
  const { hem, face } = robe(g, { skin: 0x2e5a26, eyes: 0xffcf5a, snout: true, gold: true });
  const goldMat = std(0xd4a73a, { metalness: 1, roughness: 0.25, emissive: 0x3a2a08 });
  add(g, new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.75, 4), goldMat), [0, 1.58, 0]); // mitre
  add(g, new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.02, 6, 20), glow(0x9dff5a)), [0, 1.52, 0.2]); // eye emblem
  add(g, new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.3), std(0x1d0f2a, { side: THREE.DoubleSide, roughness: 0.8 })), [0, -0.2, -0.45], [0.12, 0, 0]); // cape
  const staff = new THREE.Group();
  add(staff, new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 3, 8), goldMat));
  const coil = [];
  for (let i = 0; i <= 60; i++) coil.push(new THREE.Vector3(Math.cos(i * 0.5) * 0.09, -1.2 + i * 0.04, Math.sin(i * 0.5) * 0.09));
  add(staff, new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(coil), 120, 0.025, 6), std(0x2e5a26, { roughness: 0.5 }))); // serpent coil
  const orb = add(staff, new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 1), glow(0x9dff5a)), [0, 1.65, 0]);
  add(g, staff, [0.62, 0.2, 0.4]);
  const halo = add(g, runeRing(1.25, 0xffcf5a, 14), [0, 1.0, -0.35], [Math.PI / 2, 0, 0]);
  g.userData.animate = (t) => {
    halo.rotation.z = t * 0.8;
    orb.scale.setScalar(1 + Math.sin(t * 4) * 0.25);
    hem.material.opacity = 0.6 + 0.35 * Math.sin(t * 2);
    face.rotation.y = Math.sin(t * 1.5) * 0.25; // the serpent head sways
  };
  return g;
}
