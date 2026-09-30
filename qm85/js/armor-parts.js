// BATTLE ARMOUR parts (owner 09-30: the bolted-on spheres and box fins "look ridiculous… armour and parts need to
// get more edgy, dangerous looking" — and the tall back fins sat right in front of the shoulder camera).
// Shared by the armour that builds up on the pilot (battle-body.js) and the BATTLE PART pickups (oakland-mission.js),
// so what you collect looks like what bolts on: faceted gunmetal plates, gold rims, ember slits. NO SPIKES (owner 09-30).
import * as THREE from "three";

export const GOLD = 0xd4a73a;
export const GUNMETAL = 0x15151a;
export const EMBER = 0xff7a1a; // burnt orange: QM85's gold + burnt orange + black palette (owner 09-23)
const UP = new THREE.Vector3(0, 1, 0);

/** Faceted black-grey plate: flat shading makes every facet read as a hard edge. */
export const plateMaterial = () => new THREE.MeshStandardMaterial({ color: GUNMETAL, metalness: 0.92, roughness: 0.3, flatShading: true });

/** Chrome (owner 09-30: "make his normal blasters a little fatter, and make em chrome"): mirror-bright, reflects the sky. */
export const chromeMaterial = () => new THREE.MeshStandardMaterial({ color: 0xe8e8ee, metalness: 1, roughness: 0.08 });

export const goldMaterial = (emissiveIntensity = 0.45) =>
  new THREE.MeshStandardMaterial({ color: GOLD, metalness: 1, roughness: 0.2, emissive: 0x3a2600, emissiveIntensity, flatShading: true });

/** Glowing slit / edge light. Additive: it never darkens what is behind it. */
export const emberMaterial = (opacity = 1) =>
  new THREE.MeshBasicMaterial({ color: EMBER, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });

/**
 * A chevron plate: a V-swept slab (stealth-wing outline) extruded along +Z with a bevel, centred on the origin.
 * @param {number} w  width   @param {number} h  height   @param {number} sweep  how far the V points down
 * @param {number} depth  thickness
 */
export function chevronGeometry(w, h, sweep, depth) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2, 0);
  s.lineTo(0, -sweep);
  s.lineTo(w / 2, 0);
  s.lineTo(w / 2, h);
  s.lineTo(0, h - sweep);
  s.lineTo(-w / 2, h);
  s.closePath();
  const bevel = Math.min(depth * 0.4, w * 0.04);
  const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1 });
  geo.translate(0, -h / 2, -depth / 2);
  return geo;
}

/** Point a +Y-up part (a cap) along `dir`. */
export function aim(mesh, dir) {
  mesh.quaternion.setFromUnitVectors(UP, dir.clone().normalize());
  return mesh;
}

/** A low five-sided pyramid: the faceted cap that armours a joint. Axis +Y. */
export function capGeometry(radius, height) {
  return new THREE.CylinderGeometry(0, radius, height, 5).translate(0, height / 2, 0);
}
