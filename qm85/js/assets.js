// Loads the Blender-built GLBs once and hands out clones.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const NAMES = ["qm85_rig", "rob", "mahal", "sentinel"]; // story mode retired 09-24: only the flight cast loads now
const cache = new Map();

export async function loadAssets(onProgress) {
  const loader = new GLTFLoader();
  let done = 0;
  await Promise.all(
    NAMES.map(async (name) => {
      const gltf = await loader.loadAsync(`assets/${name}.glb`);
      gltf.scene.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      cache.set(name, gltf.scene);
      done += 1;
      onProgress?.(done / NAMES.length);
    }),
  );
}

/** A fresh copy of a model. `ownMaterials` gives it private materials it can fade or tint. */
export function spawn(name, { scale = 1, ownMaterials = false } = {}) {
  const src = cache.get(name);
  if (!src) throw new Error(`asset not loaded: ${name}`);
  const obj = src.clone(true);
  if (ownMaterials) {
    obj.traverse((o) => {
      if (o.isMesh) o.material = o.material.clone();
    });
  }
  obj.scale.setScalar(scale);
  return obj;
}

/** Swap every mesh to a glowing violet wireframe; returns a function that restores the real look. */
export function hologram(obj) {
  const saved = [];
  const holo = new THREE.MeshBasicMaterial({ color: 0x9b4dff, wireframe: true, transparent: true, opacity: 0.7 });
  obj.traverse((o) => {
    if (o.isMesh) {
      saved.push([o, o.material]);
      o.material = holo;
    }
  });
  return () => saved.forEach(([o, m]) => (o.material = m));
}
