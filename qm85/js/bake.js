// Draw-call baker. Profiling the realistic Oakland on the owner's integrated AMD GPU showed ~1,500 separate
// meshes (hoops, cranes, arena ribs, bridge parts, wall chunks) — the draw-call count, not the triangles,
// was the frame-rate killer. After a zone is built, every STATIC mesh that shares a material is merged into
// one mesh per large tile (so frustum culling still drops what's behind you).
// Anything animated must set userData.dynamic = true (or live outside the baked group).
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const TILE = 900;

function normalise(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  for (const name of Object.keys(g.attributes)) {
    if (!["position", "normal", "uv"].includes(name)) g.deleteAttribute(name);
  }
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) g.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  g.morphAttributes = {};
  g.clearGroups();
  return g;
}

function isBakeable(o) {
  if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || Array.isArray(o.material)) return false;
  if (o.material.isShaderMaterial || o.material.vertexColors) return false; // the Sky; vertex-coloured hills stay whole
  for (let p = o; p; p = p.parent) if (p.userData?.dynamic) return false;
  return true;
}

/** Merge static meshes under `group`. Returns { before, after } mesh counts. */
export function bakeStatic(group) {
  group.updateMatrixWorld(true);
  const buckets = new Map();
  let before = 0;
  group.traverse((o) => {
    if (!o.isMesh) return;
    before += 1;
    if (!isBakeable(o)) return;
    const c = new THREE.Vector3().setFromMatrixPosition(o.matrixWorld);
    const key = `${o.material.uuid}|${Math.floor(c.x / TILE)},${Math.floor(c.z / TILE)}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(o);
  });
  for (const list of buckets.values()) {
    if (list.length < 2) continue;
    const merged = mergeGeometries(list.map((o) => normalise(o.geometry).applyMatrix4(o.matrixWorld)));
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, list[0].material);
    mesh.castShadow = list.some((o) => o.castShadow);
    mesh.receiveShadow = list.some((o) => o.receiveShadow);
    for (const o of list) o.parent.remove(o);
    group.add(mesh);
  }
  let after = 0;
  group.traverse((o) => {
    if (o.isMesh) after += 1;
  });
  return { before, after };
}
