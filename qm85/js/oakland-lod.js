// Culling tiles + distance LOD for the realistic Oakland (perf pass, 09-24).
// Profiling on the owner's integrated GPU: 4.2M triangles were drawn EVERY frame — the roads, sidewalks,
// curbs, trees and lamps were each ONE city-wide mesh, so frustum culling never dropped a thing (only ~10%
// of the scene was culled at the start pose). This splits every city-spanning mesh into TILE-sized pieces
// (merged geometry by triangle centroid, instanced meshes by instance position) so what's behind QM85 is
// culled, and hides small street detail past a distance where it is smaller than a pixel anyway.
import * as THREE from "three";

const TILE = 800;
const BIG_MESH_TRIS = 20000; // split a merged mesh only when it's heavy...
const SPREAD = 1200; // ...and actually spans the city (bounding radius)
const BIG_INSTANCED = 60; // instance count worth splitting (the parked fleets are 34–240 per type)
const LOD_BASE = 450; // small detail hides past LOD_BASE + LOD_PER_METRE × its own size
const LOD_PER_METRE = 150;
const LOD_MAX = 1000;

const tileKey = (x, z) => `${Math.floor(x / TILE)},${Math.floor(z / TILE)}`;

function isDynamic(o) {
  for (let p = o; p; p = p.parent) if (p.userData?.dynamic) return true;
  return false;
}

function triCount(geo) {
  return geo.index ? geo.index.count / 3 : (geo.attributes.position?.count ?? 0) / 3;
}

/** Split a world-space, non-indexed geometry into one geometry per tile (every attribute preserved). */
function splitGeometry(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const pos = g.attributes.position;
  const groups = new Map();
  for (let i = 0; i < pos.count; i += 3) {
    const cx = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 3;
    const cz = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 3;
    const k = tileKey(cx, cz);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(i);
  }
  const out = [];
  for (const tris of groups.values()) {
    const ng = new THREE.BufferGeometry();
    for (const [name, src] of Object.entries(g.attributes)) {
      const size = src.itemSize;
      const arr = new src.array.constructor(tris.length * 3 * size);
      let w = 0;
      for (const i of tris) for (let v = 0; v < 3; v++) for (let c = 0; c < size; c++) arr[w++] = src.array[(i + v) * size + c];
      ng.setAttribute(name, new THREE.BufferAttribute(arr, size, src.normalized));
    }
    ng.computeBoundingSphere();
    out.push(ng);
  }
  return out;
}

function splitMesh(o) {
  const geo = o.geometry.clone().applyMatrix4(o.matrixWorld);
  return splitGeometry(geo).map((g) => {
    const m = new THREE.Mesh(g, o.material);
    m.castShadow = o.castShadow;
    m.receiveShadow = o.receiveShadow;
    return m;
  });
}

function splitInstanced(im) {
  const m = new THREE.Matrix4();
  const p = new THREE.Vector3();
  const color = new THREE.Color();
  const groups = new Map();
  for (let i = 0; i < im.count; i++) {
    im.getMatrixAt(i, m);
    p.setFromMatrixPosition(m).applyMatrix4(im.matrixWorld);
    const k = tileKey(p.x, p.z);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(i);
  }
  return [...groups.values()].map((ids) => {
    const n = new THREE.InstancedMesh(im.geometry, im.material, ids.length);
    ids.forEach((i, j) => {
      im.getMatrixAt(i, m);
      n.setMatrixAt(j, m);
      if (im.instanceColor) {
        im.getColorAt(i, color);
        n.setColorAt(j, color);
      }
    });
    n.applyMatrix4(im.matrixWorld);
    n.castShadow = im.castShadow;
    n.receiveShadow = im.receiveShadow;
    n.computeBoundingSphere();
    return n;
  });
}

/**
 * Re-tile `root` for culling. Returns { update(pos), stats } — call update() from the arena's follow hook so
 * small detail fades out with distance. Meshes marked userData.dynamic (traffic) are left alone.
 */
export function cullingTiles(root) {
  root.updateMatrixWorld(true);
  const victims = [];
  root.traverse((o) => {
    if (!o.isMesh || isDynamic(o) || o.material?.isShaderMaterial) return;
    if (o.isInstancedMesh) {
      if (o.count >= BIG_INSTANCED) victims.push(o);
      return;
    }
    if (o.isSkinnedMesh || Array.isArray(o.material)) return;
    if (!o.geometry.boundingSphere) o.geometry.computeBoundingSphere();
    const radius = o.geometry.boundingSphere.radius * Math.max(o.scale.x, o.scale.z);
    if (triCount(o.geometry) >= BIG_MESH_TRIS && radius >= SPREAD) victims.push(o);
  });
  const lod = [];
  const stats = { split: victims.length, tiles: 0, lod: 0 };
  for (const o of victims) {
    const pieces = o.isInstancedMesh ? splitInstanced(o) : splitMesh(o);
    o.parent.remove(o);
    for (const piece of pieces) root.add(piece);
    stats.tiles += pieces.length;
    if (!o.isInstancedMesh) continue;
    // instanced small stuff (trees, curbs, lamps, clutter): hide it once it is far enough to be sub-pixel
    o.geometry.computeBoundingSphere();
    const size = o.geometry.boundingSphere.radius;
    const range = Math.min(LOD_MAX, LOD_BASE + size * LOD_PER_METRE);
    root.updateMatrixWorld(true);
    for (const piece of pieces) {
      const center = piece.boundingSphere.center.clone().applyMatrix4(piece.matrixWorld);
      lod.push({ mesh: piece, center, range });
      stats.lod += 1;
    }
  }
  const update = (pos) => {
    for (const t of lod) t.mesh.visible = Math.hypot(t.center.x - pos.x, t.center.z - pos.z) < t.range + TILE * 0.71;
  };
  return { update, stats };
}
