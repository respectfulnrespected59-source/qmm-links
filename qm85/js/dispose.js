// GPU CLEANUP (09-25 review: every RACE AGAIN / FLY AGAIN left the whole old level on the GPU — +250 geometries and
// +230 MB heap per race restart, because three.js keeps an undisposed geometry alive). One rule for the whole game:
// anything cached across flights or cloned from a cache is tagged `userData.shared` (geometry, material AND texture)
// and survives; everything else under a torn-down node is freed.
const mats = (o) => (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []);

/** Every texture a material holds: its maps, and shader uniforms that carry one. */
function texturesOf(m) {
  const out = [];
  for (const v of Object.values(m)) if (v?.isTexture) out.push(v);
  for (const u of Object.values(m.uniforms ?? {})) if (u?.value?.isTexture) out.push(u.value);
  return out;
}

export function shareTexture(t) {
  if (t) t.userData.shared = true;
  return t;
}

/** Tag a cached template so no teardown ever frees what its clones share. */
export function markShared(root) {
  root.traverse((o) => {
    if (o.geometry) o.geometry.userData.shared = true;
    for (const m of mats(o)) {
      m.userData.shared = true;
      for (const t of texturesOf(m)) shareTexture(t);
    }
  });
}

/** Free everything under `root` that isn't shared. Safe to call twice; freed resources re-upload if drawn again. */
export function disposeTree(root) {
  if (!root) return;
  const seen = new Set();
  const free = (res) => {
    if (!res || res.userData?.shared || seen.has(res)) return;
    seen.add(res);
    res.dispose();
  };
  root.traverse((o) => {
    if (o.geometry && !o.isSprite) free(o.geometry); // a Sprite's quad is three.js's own static geometry
    for (const m of mats(o)) {
      if (m.userData.shared) continue;
      for (const t of texturesOf(m)) free(t);
      free(m);
    }
    if (o.isInstancedMesh) o.dispose(); // its per-instance buffers
    if (o.isLight) o.dispose(); // a shadow-casting light's shadow map (+1 texture per restart otherwise)
    if (o.isSkinnedMesh && !seen.has(o.skeleton)) {
      seen.add(o.skeleton);
      o.skeleton.dispose(); // the bone texture (each clone gets its own skeleton)
    }
  });
}

export function disposeTexture(t) {
  if (t?.isTexture && !t.userData.shared) t.dispose();
}
