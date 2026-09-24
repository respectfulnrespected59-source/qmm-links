// OAKLAND — everything around and above the mapped city, so no horizon is ever empty (owner 09-24:
// "fill in the missing detail gaps"): rippling Bay + lake water, the golden Oakland hills to the east,
// the San Francisco skyline across the Bay, a band of sunset clouds, and city fabric past the map edge.
import * as THREE from "three";

const rand = (a, b) => a + Math.random() * (b - a);
const loader = new THREE.TextureLoader();
const loadTex = (url, srgb = true) => new Promise((resolve) => loader.load(url, (t) => {
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  resolve(t);
}, undefined, () => resolve(null)));

/** Rippling water: sky reflections from the env map + a scrolling normal map (no extra render pass). */
export async function waterMaterial() {
  const normals = await loadTex("assets/art/waternormals.jpg", false);
  if (normals) {
    normals.wrapS = normals.wrapT = THREE.RepeatWrapping;
    normals.repeat.set(60, 60);
  }
  const mat = new THREE.MeshStandardMaterial({
    color: 0x1b3a4c, roughness: 0.06, metalness: 0.85, envMapIntensity: 1.1,
    normalMap: normals, normalScale: new THREE.Vector2(0.55, 0.55), side: THREE.DoubleSide,
    polygonOffset: true, polygonOffsetFactor: -1,
  });
  const tick = (dt) => {
    if (!normals) return;
    normals.offset.x += dt * 0.004;
    normals.offset.y += dt * 0.0025;
  };
  return { mat, tick };
}

/** The Bay: everything west of the shoreline. */
export function bay(root, shoreX, mat) {
  const w = 40000;
  const water = new THREE.Mesh(new THREE.PlaneGeometry(w, 60000).rotateX(-Math.PI / 2), mat);
  water.position.set(shoreX - w / 2, 0.06, 0);
  water.receiveShadow = true;
  root.add(water);
}

/** Height of the hills at local x (metres east of their foot) and z — shared with the filler city. */
export function hillHeight(x, z) {
  if (x <= 0) return 0;
  const rise = Math.min(1, x / 4200);
  const ridge = Math.sin(z * 0.0009) * 60 + Math.sin(z * 0.0031 + 1.7) * 28 + Math.sin(x * 0.002 + z * 0.001) * 35;
  return Math.max(0, rise * rise * (3 - 2 * rise) * 460 + ridge * rise);
}

/** Golden California hills east of the flats, with dark oak patches. */
export function hills(root, startX) {
  const W = 9000;
  const D = 16000;
  const geo = new THREE.PlaneGeometry(W, D, 180, 320).rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = [];
  const gold = new THREE.Color(0xb49a5e);
  const green = new THREE.Color(0x3f5a2e);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + W / 2; // 0 at the foot of the hills
    const z = pos.getZ(i);
    pos.setY(i, hillHeight(x, z));
    const trees = Math.sin(x * 0.011) * Math.sin(z * 0.013) + Math.sin(x * 0.004 + z * 0.006);
    c.copy(gold).lerp(green, THREE.MathUtils.clamp(0.35 + trees * 0.5, 0, 1));
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  mesh.position.set(startX + W / 2, 0, 0);
  mesh.receiveShadow = true;
  root.add(mesh);
}

/** San Francisco across the Bay — reads through the haze behind the Bay Bridge, never reachable. */
export function sfSkyline(root, glass) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial(glass
    ? { map: glass, color: 0xb8c4d2, roughness: 0.3, metalness: 0.3, fog: false }
    : { color: 0x8c9aac, fog: false });
  const box = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const n = 140;
  const towers = new THREE.InstancedMesh(box, mat, n);
  const m = new THREE.Matrix4();
  for (let i = 0; i < n; i++) {
    const r = Math.sqrt(Math.random());
    const a = rand(0, Math.PI * 2);
    const h = 30 + (1 - r) * rand(40, 200);
    m.compose(new THREE.Vector3(Math.cos(a) * r * 1400, 0, Math.sin(a) * r * 900), new THREE.Quaternion(), new THREE.Vector3(rand(25, 55), h, rand(25, 55)));
    towers.setMatrixAt(i, m);
  }
  group.add(towers);
  const salesforce = new THREE.Mesh(new THREE.CylinderGeometry(24, 30, 326, 24).translate(0, 163, 0), mat);
  salesforce.position.set(150, 0, 120);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(24, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat);
  cap.position.set(150, 326, 120);
  const pyramid = new THREE.Mesh(new THREE.ConeGeometry(34, 260, 4).translate(0, 130, 0),
    new THREE.MeshStandardMaterial({ color: 0xdad6cc, roughness: 0.6, fog: false })); // Transamerica
  pyramid.position.set(-260, 0, -140);
  pyramid.rotation.y = Math.PI / 4;
  group.add(salesforce, cap, pyramid);
  group.position.set(-11500, 0, -1400);
  root.add(group);
}

/** A band of sunset clouds high over the Bay (soft canvas sprites laid flat). Returns a per-frame drift. */
export function clouds(root, sunDir) {
  const cv = document.createElement("canvas");
  cv.width = cv.height = 256;
  const g = cv.getContext("2d");
  for (let i = 0; i < 26; i++) {
    const x = rand(50, 206);
    const y = rand(90, 166);
    const r = rand(26, 70);
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, "rgba(255,255,255,0.55)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grad;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const warm = new THREE.Color(0xffc49a);
  const cool = new THREE.Color(0xb9b4d6);
  const sunFlat = new THREE.Vector3(sunDir.x, 0, sunDir.z).normalize();
  const list = [];
  for (let i = 0; i < 46; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(1500, 14000);
    const dir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    const sunward = Math.max(0, dir.dot(sunFlat));
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false,
      color: cool.clone().lerp(warm, sunward), opacity: rand(0.5, 0.85) });
    const w = rand(1200, 3200);
    const cloud = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 0.5).rotateX(-Math.PI / 2), mat);
    cloud.position.set(dir.x * r, rand(900, 1500), dir.z * r);
    cloud.rotation.y = rand(0, Math.PI);
    root.add(cloud);
    list.push({ cloud, drift: rand(1.5, 4) });
  }
  return (dt) => list.forEach((c) => {
    c.cloud.position.x += c.drift * dt;
  });
}

/**
 * City fabric past the edge of the map: instanced low/mid-rise blocks on a street grid, on land only
 * (east of the shore, up onto the hill foot), never inside the mapped area, the lake or the arena.
 */
export function fillerCity(root, { bounds, shoreX, hillsX, avoid, lowTex, midTex }) {
  const BLOCK = 64; // bigger blocks, fewer instances — reads the same from the air, costs a third
  const REACH = 4200;
  const tall = [];
  const low = [];
  for (let x = shoreX + 60; x < hillsX + 1200; x += BLOCK) {
    for (let z = -REACH; z <= REACH; z += BLOCK) {
      if (x > bounds.minX - 30 && x < bounds.maxX + 30 && z > bounds.minZ - 30 && z < bounds.maxZ + 30) continue;
      if (avoid.some(([ax, az, r]) => Math.hypot(x - ax, z - az) < r)) continue;
      (Math.random() < 0.18 ? tall : low).push([x, z]);
    }
  }
  const make = (list, tex, hMin, hMax, tint) => {
    if (!list.length) return;
    const side = new THREE.MeshStandardMaterial(tex ? { map: tex, color: tint, roughness: 0.7 } : { color: 0x9c8f80, roughness: 0.8 });
    const roof = new THREE.MeshStandardMaterial({ color: 0x55534f, roughness: 0.92 }); // gravel roofs, not windows on top
    // BoxGeometry face order: +x, -x, +y (roof), -y, +z, -z
    const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), [side, side, roof, roof, side, side], list.length);
    const m = new THREE.Matrix4();
    list.forEach(([x, z], i) => {
      const base = hillHeight(x - hillsX, z) * 0.98; // sit on the hill foot, not float or sink
      m.compose(new THREE.Vector3(x + rand(-4, 4), base, z + rand(-4, 4)), new THREE.Quaternion(),
        new THREE.Vector3(BLOCK - rand(8, 16), rand(hMin, hMax), BLOCK - rand(8, 16)));
      im.setMatrixAt(i, m);
    });
    im.receiveShadow = true;
    root.add(im);
  };
  make(low, lowTex, 5, 13, 0xd8d0c4);
  make(tall, midTex, 14, 34, 0xcfc6ba);
  return tall.length + low.length;
}
