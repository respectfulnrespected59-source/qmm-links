// Scenery for each world: CYBERSPACE (violet grid + falling data rain) and
// THE QUANTUM WORLD (orbital rings + a swirling foam of probability).
import * as THREE from "three";

function lights(root, key, fill) {
  root.add(new THREE.HemisphereLight(fill, 0x1c1628, 1.35)); // lifted shadows = softer contrast
  const sun = new THREE.DirectionalLight(key, 2.2);
  sun.position.set(6, 14, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, far: 60 });
  root.add(sun);
  return sun;
}

function points(count, color, size, place) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) place(pos, i * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.85, depthWrite: false });
  return new THREE.Points(geo, mat);
}

function cyber(root) {
  const sun = lights(root, 0xd9c2ff, 0x6a3fb0);
  const grid = new THREE.GridHelper(240, 120, 0xa15cff, 0x4b1f8f);
  grid.position.set(0, -6, -20);
  root.add(grid);
  const rain = points(1800, 0xb98cff, 0.07, (a, i) => {
    a[i] = (Math.random() - 0.5) * 80;
    a[i + 1] = Math.random() * 40 - 6;
    a[i + 2] = Math.random() * -90 + 20;
  });
  root.add(rain);
  const cubes = [];
  for (let i = 0; i < 24; i++) {
    const s = 1 + Math.random() * 3;
    const c = new THREE.Mesh(
      new THREE.BoxGeometry(s, s, s),
      new THREE.MeshBasicMaterial({ color: i % 3 ? 0x7a3cff : 0xd4a73a, wireframe: true, transparent: true, opacity: 0.5 }),
    );
    const side = i % 2 ? 1 : -1;
    c.position.set(side * (14 + Math.random() * 20), Math.random() * 16 - 2, -Math.random() * 70 + 10);
    root.add(c);
    cubes.push(c);
  }
  return {
    background: new THREE.Color(0x07020f),
    fog: new THREE.Fog(0x07020f, 25, 85),
    sun,
    update(dt) {
      const p = rain.geometry.attributes.position;
      for (let i = 1; i < p.array.length; i += 3) {
        p.array[i] -= dt * 9;
        if (p.array[i] < -6) p.array[i] += 46;
      }
      p.needsUpdate = true;
      cubes.forEach((c, i) => {
        c.rotation.x += dt * 0.2 * ((i % 3) + 1);
        c.rotation.y += dt * 0.15;
      });
    },
  };
}

function quantum(root) {
  const sun = lights(root, 0xffe2a8, 0x3b2a8a);
  const foam = points(3000, 0xffd27a, 0.06, (a, i) => {
    const r = 10 + Math.random() * 40;
    const t = Math.random() * Math.PI * 2;
    a[i] = Math.cos(t) * r;
    a[i + 1] = (Math.random() - 0.5) * 40;
    a[i + 2] = Math.sin(t) * r - 20;
  });
  root.add(foam);
  const rings = [];
  for (let i = 0; i < 7; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(18 + i * 7, 0.12, 8, 128),
      new THREE.MeshBasicMaterial({ color: i % 2 ? 0x9b4dff : 0xe0b252, transparent: true, opacity: 0.55 }),
    );
    ring.position.set(0, 6, -95); // far behind the course so no ring ever crosses the camera
    ring.rotation.set((Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2, Math.random() * 3);
    root.add(ring);
    rings.push(ring);
  }
  const nucleus = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3, 1),
    new THREE.MeshBasicMaterial({ color: 0xb57bff, wireframe: true }),
  );
  nucleus.position.set(0, 6, -95);
  root.add(nucleus);
  return {
    background: new THREE.Color(0x0c0424),
    fog: new THREE.Fog(0x0c0424, 40, 160),
    sun,
    update(dt, t) {
      foam.rotation.y += dt * 0.05;
      rings.forEach((r, i) => {
        r.rotation.z += dt * 0.1 * (i % 2 ? 1 : -1);
      });
      nucleus.rotation.y = t * 0.3;
      nucleus.scale.setScalar(1 + Math.sin(t * 2) * 0.08);
    },
  };
}

export function buildBackdrop(root, theme) {
  return theme === "quantum" ? quantum(root) : cyber(root);
}
