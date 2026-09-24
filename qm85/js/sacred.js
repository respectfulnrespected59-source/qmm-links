// Sacred geometry for the pickups (owner 09-23: "make those rings and power up boxes sacred geometrical shapes").
//   seedOfLife  — the fly-through ring: an outer circle holding the 7 interlocking circles, in the XY plane
//                 (so its normal is local +Z, exactly like the torus it replaces).
//   merkaba     — the blaster box: a star tetrahedron (two interlocked tetrahedra) around a glowing
//                 icosahedron core. Call spinMerkaba() each frame for the counter-rotation.
import * as THREE from "three";

const GOLD = 0xffcf5a;
const VIOLET = 0x9b4dff;

function circle(radius, tube, mat, x = 0, y = 0) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 8, 40), mat); // 640 tris: 124 rings were 1,024 each on screen at once
  m.position.set(x, y, 0);
  return m;
}

/** Seed of Life inside an outer ring. `radius` is the outer (fly-through) radius. */
export function seedOfLife(radius, tube) {
  const group = new THREE.Group();
  const gold = new THREE.MeshBasicMaterial({ color: GOLD });
  const inner = new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  const r = radius / 2; // seed circles are half the outer ring, centred on a hexagon of radius r
  group.add(circle(radius, tube, gold));
  group.add(circle(r, tube * 0.45, inner));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    group.add(circle(r, tube * 0.45, inner, Math.cos(a) * r, Math.sin(a) * r));
  }
  const hub = new THREE.Mesh(new THREE.SphereGeometry(tube * 1.6, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  group.add(hub);
  return group;
}

/** Star tetrahedron + icosahedron core. */
export function merkaba(size) {
  const group = new THREE.Group();
  const up = new THREE.Group();
  const down = new THREE.Group();
  const tetra = new THREE.TetrahedronGeometry(size);
  const edges = new THREE.EdgesGeometry(tetra);
  const faceMat = (color) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  up.add(new THREE.Mesh(tetra, faceMat(GOLD)), new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: GOLD })));
  down.add(new THREE.Mesh(tetra, faceMat(VIOLET)), new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xc58bff })));
  // Align the first tetra point-up, then flip the second through the centre: the star.
  up.quaternion.setFromUnitVectors(new THREE.Vector3(1, 1, 1).normalize(), new THREE.Vector3(0, 1, 0));
  down.quaternion.setFromUnitVectors(new THREE.Vector3(1, 1, 1).normalize(), new THREE.Vector3(0, -1, 0));
  const spinUp = new THREE.Group();
  const spinDown = new THREE.Group();
  spinUp.add(up);
  spinDown.add(down);
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(size * 0.32, 0), new THREE.MeshBasicMaterial({ color: 0xffb338 }));
  group.add(spinUp, spinDown, core);
  group.userData = { spinUp, spinDown, core };
  return group;
}

export function spinMerkaba(group, t) {
  const { spinUp, spinDown, core } = group.userData;
  spinUp.rotation.y = t * 1.2;
  spinDown.rotation.y = -t * 1.2; // counter-rotating fields
  core.rotation.set(t * 1.7, t * 1.1, 0);
}
