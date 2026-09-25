// LANDMARK BOSS FIGHTS (owner 09-25: "the Overseer fights you on the Bay Bridge; the Serpent Priest comes down on the
// Tribune Tower"). The day's two bosses stop spawning next to the pilot and take real Oakland landmarks instead:
//   THE OVERSEER        hovers over the Bay Bridge's mid-span and patrols the span (anchored): fly out there and
//                       fight him through the towers and cables — the gold arrow points you at him
//   THE SERPENT PRIEST  perches on the Tribune Tower's crown, SHIELDED by three RUNE PYLONS on the tallest rooftops
//                       around it (green links show which), calling acolytes down; destroy the pylons to expose him.
//                       At half health he leaves the tower and hunts you through the streets.
import * as THREE from "three";
import { bridgePoint } from "./race-courses.js";
import { sfx } from "./audio.js";

const OVERSEER_SPAN = { x: 700, y: 95, z: 0 }; // bridge model space: above the deck, mid-span
const OVERSEER_LEASH = 420; // m he roams from the span centre
const PYLONS = 3;
const PYLON = { hp: 14, radius: 3, height: 20, score: 400 };
const SUMMON_EVERY = 14;
const PERCH_RANGE = 150; // the perched priest rains orbs this far

function runePylon() {
  const g = new THREE.Group(); // origin = the glowing rune head (what you shoot); the obelisk hangs below it
  const stone = new THREE.MeshStandardMaterial({ color: 0x14161a, metalness: 0.4, roughness: 0.55, emissive: 0x0a2a0a, emissiveIntensity: 0.4 });
  const obelisk = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 2.2, PYLON.height, 4), stone);
  obelisk.position.y = -PYLON.height / 2 - 1.5;
  g.add(obelisk);
  obelisk.add(new THREE.LineSegments(new THREE.EdgesGeometry(obelisk.geometry), new THREE.LineBasicMaterial({ color: 0x7dff3a })));
  const head = new THREE.Mesh(new THREE.OctahedronGeometry(1.6, 0), new THREE.MeshBasicMaterial({ color: 0x9dff5a, transparent: true, opacity: 0.85 }));
  g.add(head);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.12, 6, 36), new THREE.MeshBasicMaterial({ color: 0x7dff3a }));
  g.add(ring);
  g.userData.animate = (t) => {
    head.rotation.y = t * 1.4;
    ring.rotation.set(Math.PI / 2 + Math.sin(t) * 0.3, 0, t * 0.8);
    head.material.opacity = 0.65 + 0.3 * Math.sin(t * 5);
  };
  return g;
}

export class BossArenas {
  /** hooks: { onExposed(name), onLeaves(name) } */
  constructor(flight, hooks) {
    this.f = flight;
    this.hooks = hooks;
    this.pylons = [];
    this.links = [];
    this.priest = null;
    this.summonT = SUMMON_EVERY;
  }

  /** THE OVERSEER: over the Bay Bridge's mid-span, leashed to it. */
  placeOverseer(bot) {
    const arena = this.f.arena;
    if (arena.shoreX === undefined) return;
    const c = bridgePoint(arena, OVERSEER_SPAN.x, OVERSEER_SPAN.y, OVERSEER_SPAN.z);
    bot.obj.position.copy(c);
    bot.anchor = { center: c, radius: OVERSEER_LEASH };
    bot.landmark = "THE BAY BRIDGE";
  }

  /** THE SERPENT PRIEST: perched on the Tribune Tower, shielded by rune pylons on nearby rooftops. */
  placePriest(bot) {
    const tower = this.#tribune();
    if (!tower) return;
    const top = new THREE.Vector3(tower.x, tower.h + 22, tower.z);
    bot.obj.position.copy(top);
    bot.anchor = { center: top, radius: 0, perch: true };
    bot.range = PERCH_RANGE;
    bot.landmark = "THE TRIBUNE TOWER";
    bot.shielded = true;
    this.priest = bot;
    this.summonT = SUMMON_EVERY;
    const roofs = [...(this.f.arena.buildings ?? [])]
      .map((b) => ({ b, x: b.p.reduce((s, q) => s + q[0], 0) / b.p.length, z: b.p.reduce((s, q) => s + q[1], 0) / b.p.length }))
      .filter((r) => r.b.h > 40 && Math.hypot(r.x - tower.x, r.z - tower.z) > 60 && Math.hypot(r.x - tower.x, r.z - tower.z) < 450)
      .sort((p, q) => q.b.h - p.b.h);
    const picked = [];
    for (const r of roofs) { // three tall rooftops, spread out
      if (picked.every((p) => Math.hypot(p.x - r.x, p.z - r.z) > 120)) picked.push(r);
      if (picked.length === PYLONS) break;
    }
    for (const r of picked) {
      const obj = runePylon();
      obj.position.set(r.x, r.b.h + PYLON.height + 1.5, r.z);
      this.f.root.add(obj);
      const pylon = this.f.swarm.spawnStatic(obj, { hp: PYLON.hp, radius: PYLON.radius, fireGap: [2.4, 3.4], volley: 1, range: 110, score: PYLON.score, shot: 0x9dff5a, faction: "acolyte", name: "RUNE PYLON", pylon: true });
      this.pylons.push(pylon);
      const geo = new THREE.BufferGeometry().setFromPoints([obj.position.clone(), top.clone()]);
      const link = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x7dff3a, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
      link.frustumCulled = false;
      this.f.root.add(link);
      this.links.push({ link, pylon, geo });
    }
    if (!this.pylons.length) bot.shielded = false; // no rooftops found: a straight fight
  }

  #tribune() {
    const t = (this.f.arena.buildings ?? []).find((b) => (b.name ?? "").includes("Tribune Tower"));
    if (!t) return null;
    return { x: t.p.reduce((s, q) => s + q[0], 0) / t.p.length, z: t.p.reduce((s, q) => s + q[1], 0) / t.p.length, h: t.h };
  }

  update(dt, t) {
    for (const l of this.links) { // the links pulse and die with their pylon
      l.link.visible = l.pylon.alive && Boolean(this.priest?.alive);
      l.link.material.opacity = 0.35 + 0.25 * Math.sin(t * 6);
      if (this.priest && l.link.visible) l.geo.setFromPoints([l.pylon.obj.position.clone(), this.priest.obj.position.clone()]);
    }
    const p = this.priest;
    if (!p?.alive) return;
    if (p.shielded && this.pylons.length && this.pylons.every((y) => !y.alive)) {
      p.shielded = false;
      this.f.fx.pulse(p.obj.position.clone(), 0x7dff3a, 14);
      sfx.shieldDown();
      this.hooks.onExposed?.(p.name);
    }
    if (p.anchor?.perch && p.enraged) { // half health: he leaves the tower and hunts
      p.anchor = null;
      p.range = undefined;
      this.hooks.onLeaves?.(p.name);
    }
    if (p.anchor?.perch) {
      this.summonT -= dt;
      if (this.summonT <= 0) { // acolytes come down off the tower
        this.summonT = SUMMON_EVERY;
        this.f.swarm.spawnWave(p.obj.position, { acolyte: 2 }, 2, { spread: [20, 40] });
      }
    }
  }

  /** Where the HUD arrow should point while a landmark boss is up and far away. */
  waypoint(from) {
    const b = this.f.boss;
    if (!b?.alive || !b.landmark) return null;
    if (b.obj.position.distanceTo(from) < 160) return null;
    if (b === this.priest && b.shielded) { // shielded: point at the nearest living pylon
      let best = null;
      for (const y of this.pylons) if (y.alive && (!best || y.obj.position.distanceTo(from) < best.obj.position.distanceTo(from))) best = y;
      if (best) return best.obj.position;
    }
    return b.obj.position;
  }
}
