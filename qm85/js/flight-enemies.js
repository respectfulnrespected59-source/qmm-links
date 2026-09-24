// The enemy swarm: whatever factions a wave calls for (flight-factions.js) — they swarm, circle
// QM85 and fire leading shots in their faction colour; viruses just ram. One boss per zone.
import * as THREE from "three";
import { FACTIONS, BOSS, MID_BOSS } from "./flight-factions.js";
import { sfx } from "./audio.js";

const SHOT_SPEED = 38;
const SHOT_LIFE = 3;
const FIRE_RANGE = 60;
const GROUND_Y = { acolyte: 2.3, virus: 1.1, palantir: 3 }; // model origin height when standing on the street

const rand = (a, b) => a + Math.random() * (b - a);
const clamp01 = (v) => Math.min(1, Math.max(0, v));

/** Closest distance from point p to the segment a→b. */
export function segDist(p, a, b) {
  const ab = b.clone().sub(a);
  const t = THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / Math.max(ab.lengthSq(), 1e-6), 0, 1);
  return a.clone().addScaledVector(ab, t).distanceTo(p);
}

export class EnemySwarm {
  constructor(root) {
    this.root = root;
    this.bots = [];
    this.shots = [];
    this.shotGeo = new THREE.SphereGeometry(0.22, 10, 8);
    this.shotMats = new Map(); // faction colour -> material
    this.blocked = () => false; // (point) => true when a building or truck is in the way — cover!
    this.difficulty = 1; // set by the day cycle: 1 dawn → ~2.4 night
  }

  get alive() {
    return this.bots.filter((b) => b.alive);
  }

  /** lineup: { factionKey: count } */
  spawnWave(center, lineup, level) {
    for (const [key, count] of Object.entries(lineup)) {
      const f = FACTIONS[key];
      for (let i = 0; i < count; i++) {
        const a = rand(0, Math.PI * 2);
        const r = rand(70, 120);
        const d = this.difficulty;
        const pace = (1 + level * 0.2) * d;
        this.#add(new THREE.Vector3(center.x + Math.cos(a) * r, rand(20, 60), center.z + Math.sin(a) * r), f.build, {
          ...f.cfg, faction: key, speed: f.cfg.speed + level + (d - 1) * 4, orbit: f.cfg.orbit * rand(0.8, 1.2) / (0.7 + d * 0.3),
          fireGap: f.cfg.fireGap.map((g) => g / pace), hp: Math.round(f.cfg.hp * (1 + (d - 1) * 0.6)),
          volley: f.cfg.volley + (d > 1.9 && f.cfg.volley ? 1 : 0), // night: an extra round per burst
        });
      }
    }
  }

  /** Street-level squad (Oakland FIGHT MODE): they stand on the ground and close in on foot. */
  spawnGround(center, lineup, level) {
    for (const [key, count] of Object.entries(lineup)) {
      const f = FACTIONS[key];
      for (let i = 0; i < count; i++) {
        const a = rand(0, Math.PI * 2);
        const r = rand(35, 60);
        this.#add(new THREE.Vector3(center.x + Math.cos(a) * r, GROUND_Y[key] ?? 1.5, center.z + Math.sin(a) * r), f.build, {
          ...f.cfg, faction: key, ground: true, groundY: GROUND_Y[key] ?? 1.5,
          speed: Math.min(f.cfg.speed, 7) + level * 0.3, orbit: rand(6, 11),
          fireGap: f.cfg.fireGap.map((g) => g / (1 + level * 0.12)),
        });
      }
    }
  }

  spawnBoss(center, def = BOSS) {
    const at = new THREE.Vector3(center.x, 55, center.z + 110);
    return this.#add(at, def.build, { ...def.cfg, faction: "boss", name: def.name, final: def === BOSS });
  }

  #add(pos, build, cfg) {
    const obj = build();
    obj.scale.setScalar(cfg.scale);
    obj.position.copy(pos);
    this.root.add(obj);
    const bot = { obj, ...cfg, maxHp: cfg.hp, alive: true, cd: rand(...cfg.fireGap), flash: 0, phase: rand(0, 6) };
    this.bots.push(bot);
    return bot;
  }

  /** player: { pos, vel, center() } ; returns damage dealt to the player this frame. */
  update(dt, t, player) {
    let damage = 0;
    const target = player.center();
    for (const b of this.bots) {
      if (!b.alive) continue;
      b.phase += dt * 0.6;
      const orbit = new THREE.Vector3(Math.cos(b.phase) * b.orbit, b.ground ? 0 : Math.sin(b.phase * 1.3) * 6 + 3, Math.sin(b.phase) * b.orbit);
      const goal = target.clone().add(orbit);
      if (b.ground) goal.y = b.groundY; // squads walk the street
      else { // owner 09-24: bots dipping under the roof line when he stands on a rooftop = "spawning under me"
        const roof = player.arena?.roofAt?.(goal);
        if (roof) goal.y = Math.max(goal.y, roof.y + 5);
      }
      const step = goal.sub(b.obj.position);
      const len = step.length();
      if (len > 0.1) b.obj.position.addScaledVector(step.divideScalar(len), Math.min(len, b.speed * dt));
      b.obj.position.y = b.ground ? b.groundY : Math.max(3, b.obj.position.y);
      if (!b.ground) {
        const under = player.arena?.roofAt?.(b.obj.position);
        if (under) b.obj.position.y = Math.max(b.obj.position.y, under.y + 3);
      }
      if (b.ground) b.obj.lookAt(target.x, b.obj.position.y, target.z); // stay upright on foot
      else b.obj.lookAt(target);
      b.obj.userData.animate?.(t + b.phase);
      b.flash = Math.max(0, b.flash - dt);
      b.obj.scale.setScalar(b.scale * (1 + b.flash * 0.35));
      const dist = b.obj.position.distanceTo(target);
      if (dist < b.radius + 0.7) {
        damage += b.boss ? 2 : 1;
        if (!b.boss) this.kill(b);
        continue;
      }
      b.cd -= dt;
      if (b.cd <= 0 && dist < FIRE_RANGE * (b.boss ? 1.6 : 1)) {
        b.cd = rand(...b.fireGap);
        this.#fire(b, player, dist);
      }
    }
    damage += this.#updateShots(dt, target);
    return damage;
  }

  #fire(b, player, dist) {
    // "intelligence": dawn bots aim where you ARE; by night they lead the shot properly and stop wasting rounds on cover
    const iq = clamp01((this.difficulty - 1) / 1.4);
    const lead = player.center().addScaledVector(player.vel, (dist / SHOT_SPEED) * (0.3 + iq * 0.75));
    if (iq > 0.5 && this.blocked(b.obj.position.clone().lerp(lead, 0.5))) return; // a wall or truck in the way: hold fire
    const from = b.obj.position.clone();
    const base = lead.sub(from).normalize();
    for (let i = 0; i < b.volley; i++) {
      const dir = base.clone();
      if (b.volley > 1) dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), (i - (b.volley - 1) / 2) * 0.12).normalize(); // centred fan
      if (!this.shotMats.has(b.shot)) this.shotMats.set(b.shot, new THREE.MeshBasicMaterial({ color: b.shot }));
      const mesh = new THREE.Mesh(this.shotGeo, this.shotMats.get(b.shot));
      mesh.position.copy(from).addScaledVector(dir, b.radius + 0.3);
      mesh.scale.setScalar(b.boss ? 2 : 1);
      this.root.add(mesh);
      this.shots.push({ mesh, dir, life: SHOT_LIFE, r: b.boss ? 0.9 : 0.7 });
    }
    sfx.enemyShot();
  }

  #updateShots(dt, target) {
    let damage = 0;
    for (const s of this.shots) {
      const prev = s.mesh.position.clone();
      s.mesh.position.addScaledVector(s.dir, SHOT_SPEED * dt);
      s.life -= dt;
      if (this.blocked(s.mesh.position)) {
        s.life = 0; // splashed on a truck or a wall
      } else if (segDist(target, prev, s.mesh.position) < s.r) {
        damage += 1;
        s.life = 0;
      }
      if (s.life <= 0) this.root.remove(s.mesh);
    }
    this.shots = this.shots.filter((s) => s.life > 0);
    return damage;
  }

  /** A laser segment a→b: returns the bot it hit (and applies the hit), or null. */
  hitTest(a, b, dmg = 1, boltRadius = 0) {
    for (const bot of this.bots) {
      if (!bot.alive || segDist(bot.obj.position, a, b) > bot.radius + boltRadius) continue;
      bot.hp -= dmg;
      bot.flash = 0.2;
      if (bot.hp <= 0) this.kill(bot);
      return bot;
    }
    return null;
  }

  kill(bot) {
    bot.alive = false;
    bot.obj.visible = false;
    sfx.boom();
  }

  /** Nearest living bot inside a cone around `dir` from `from` (for aim assist), or null. */
  aimTarget(from, dir, cosCone) {
    let best = null;
    let bestD = Infinity;
    for (const bot of this.bots) {
      if (!bot.alive) continue;
      const to = bot.obj.position.clone().sub(from);
      const d = to.length();
      if (d > 140 || to.normalize().dot(dir) < cosCone) continue;
      if (d < bestD) {
        bestD = d;
        best = bot;
      }
    }
    return best;
  }
}
