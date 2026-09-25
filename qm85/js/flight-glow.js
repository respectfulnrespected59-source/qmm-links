// Soft additive glow sprites (owner 09-24: enemies and missiles need to read at range against the city).
import * as THREE from "three";
import { shareTexture } from "./dispose.js";

let tex = null;

/** One shared radial-gradient texture: white-hot centre fading to nothing. */
function glowTexture() {
  if (tex) return tex;
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.25, "rgba(255,255,255,0.55)");
  grad.addColorStop(0.6, "rgba(255,255,255,0.12)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  tex = shareTexture(new THREE.CanvasTexture(c)); // cached for every flight: a level teardown must not free it
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const fades = new Map();

/**
 * Soft light-beam falloff for cones and columns (09-25: hard-edged additive cones read as floating slabs).
 * An alphaMap over the geometry's v: bright at the source, gone at the far end. Cylinder/Cone v runs 0 (bottom)
 * → 1 (top); `bright = "top"` for a cone whose apex (the lamp) is the top, `"bottom"` for a column rising from it.
 */
export function beamFade(bright = "top") {
  if (fades.has(bright)) return fades.get(bright);
  const c = document.createElement("canvas");
  c.width = 4;
  c.height = 128;
  const g = c.getContext("2d");
  const grad = g.createLinearGradient(0, 0, 0, 128); // canvas top = v 1 (flipY)
  grad.addColorStop(0, bright === "top" ? "#ffffff" : "#000000");
  grad.addColorStop(0.55, "#5a5a5a");
  grad.addColorStop(1, bright === "top" ? "#000000" : "#ffffff");
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 128);
  const t = shareTexture(new THREE.CanvasTexture(c));
  fades.set(bright, t);
  return t;
}

/**
 * @param {number} color  hex tint
 * @param {number} size   world diameter in metres
 * @param {number} opacity
 * @returns {THREE.Sprite}
 */
export function makeGlow(color, size, opacity = 0.6) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  s.scale.setScalar(size);
  return s;
}
