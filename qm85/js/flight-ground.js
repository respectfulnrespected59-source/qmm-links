// FIGHT MODE — QM85 on his feet in Oakland (owner 09-24: "upon landing pressing (F) takes u outta flight mode
// and into FIGHT mode where on the ground his blasters shoot up as he's walking, but pressin (f) again puts him
// back into flight-mode and jumping initiates flight").
//   F (flying low)  -> drop to the street        W/S walk · A/D turn · click / L blasters (aimed UP at the drones) · SHIFT = airbrake in the air
//   SPACE = jump (owner 09-24)   ·   F = blast back into the air (the ONLY way to take off)
//   ROOFTOPS (owner 09-24: "i still couldnt land on rooftops"): F over a real building lands on its roof; the roof
//   edge is a wall (he can't walk off), the Merkabas up there are walkable pickups, F flies again.
import * as THREE from "three";
import { input } from "./input.js";
import { sfx } from "./audio.js";
import { GroundCombat } from "./ground-combat.js";

export const LAND_ALT = 45; // must be this low to land
const STAND_Y = 0.5; // pilot pivots at his middle; feet on the street
const WALK = 10;
const JUMP_V = 7.5;
const GRAVITY = 22;
const TURN = 2.6;
const DROP_TIME = 0.55;
const UP_AIM = THREE.MathUtils.degToRad(28); // no target overhead: blasts climb at this angle
const AIM_RANGE = 90;
const CAM_BACK = 3.6; // close: he is a 1 m robot
const CAM_UP = 1.7;

export class FightMode {
  constructor(flight) {
    this.f = flight;
    this.active = false;
    this.landing = 0;
    this.walk = 0;
    this.hop = 0; // height of the current jump
    this.vy = 0;
    this.floorY = 0; // street = 0, or the roof height he is standing on
    this.roof = null; // the building box under him when on a rooftop
    this.combat = new GroundCombat(this); // 09-25: punch combo, dodge roll, ground pound, superhero landing
  }

  /** Where F would put him down: { y, roof } for a street or a rooftop, null when there is no room. */
  landSpot(pos = this.f.pos) {
    const a = this.f.arena;
    if (!a.walkable || this.f.race) return null; // RING RACES: no landing mid-trial
    if (a.isWater?.(pos.x, pos.z) || (a.shoreX !== undefined && pos.x < a.shoreX)) return null; // the Bay and the lakes are not a street
    const roof = a.roofAt?.(pos);
    if (roof) return pos.y >= roof.y ? { y: roof.y, roof: roof.box } : null; // under the roof line = inside the walls
    return a.groundBlocked(pos) ? null : { y: 0, roof: null };
  }

  get canLand() {
    const f = this.f;
    const spot = this.landSpot();
    return !this.active && Boolean(spot) && f.pos.y - spot.y < LAND_ALT;
  }

  get landOnRoof() {
    return !this.active && Boolean(this.landSpot()?.roof);
  }

  /** Called every flight frame: F near the ground lands. Returns true when a landing started. */
  tryLand() {
    if (!input.pressed("KeyF") || this.active) return false;
    const f = this.f;
    if (!f.arena.walkable) return false;
    const spot = this.landSpot();
    if (!spot) {
      f.hooks.warn("NO ROOM TO LAND — FIND A STREET OR A ROOFTOP");
      return false;
    }
    if (f.pos.y - spot.y >= LAND_ALT) {
      f.hooks.warn("GET LOWER TO LAND — UNDER 45 M");
      return false;
    }
    this.floorY = spot.y;
    this.roof = spot.roof;
    this.active = true;
    this.landing = DROP_TIME;
    this.hop = 0;
    this.vy = 0;
    this.dropFrom = f.pos.y;
    f.pitch = 0;
    f.pitchRate = 0;
    f.yawRate = 0;
    f.bank = 0;
    sfx.thrust();
    f.hooks.onMode?.("fight");
    return true;
  }

  takeOff() {
    const f = this.f;
    this.active = false;
    f.pos.y = this.floorY + STAND_Y + 3;
    f.pitch = 0.55;
    f.speed = 20;
    sfx.thrust();
    f.hooks.onMode?.("flight");
  }

  /** The whole ground frame: movement, collision, pose, camera. */
  update(dt) {
    const f = this.f;
    if (this.landing > 0) {
      this.landing = Math.max(0, this.landing - dt);
      const k = 1 - this.landing / DROP_TIME;
      f.pos.y = THREE.MathUtils.lerp(this.dropFrom, this.floorY + STAND_Y, k * k);
      if (this.landing === 0) this.combat.landed({ fromHeight: this.dropFrom - this.floorY, heroLanding: true }); // from high up: SUPERHERO LANDING
    } else {
      if (input.pressed("KeyF")) {
        this.takeOff();
        return;
      }
      const override = this.combat.update(dt); // a punch lunge or a dodge roll replaces walking this frame
      if (input.pressed("Space") && this.hop === 0 && !this.combat.untouchable) this.vy = JUMP_V;
      if (override) {
        this.#move(override);
      } else {
        const turn = (input.held("KeyA", "ArrowLeft") ? 1 : 0) - (input.held("KeyD", "ArrowRight") ? 1 : 0);
        const go = (input.held("KeyW", "ArrowUp") ? 1 : 0) - (input.held("KeyS", "ArrowDown") ? 0.6 : 0);
        this.lastGo = go;
        f.yaw += turn * TURN * dt;
        const step = new THREE.Vector3(Math.sin(f.yaw), 0, Math.cos(f.yaw)).multiplyScalar(go * WALK * dt);
        this.#move(step);
        this.walk += Math.abs(go) * dt * 9;
      }
      this.speed = override ? 0 : Math.abs(this.lastGo ?? 0) * WALK;
      f.pilot.setSamurai?.(f.power.level >= 3); // 3BIZZLE above LV2 on foot: TRUE SAMURAI, twin flaming blades
      const airborne = this.hop > 0;
      this.vy -= GRAVITY * dt;
      this.hop = Math.max(0, this.hop + this.vy * dt);
      if (this.hop === 0) {
        if (airborne) this.combat.landed(); // a jump (or a GROUND POUND) just touched down
        this.vy = 0;
      }
      f.pos.y = this.floorY + STAND_Y + this.hop;
    }
    f.vel.set(0, 0, 0);
    const pose = this.combat.pose;
    f.pilot.update(dt, { // all three bots share QM85's rig (09-25): they tumble, tuck and punch the same way
      pos: f.pos, yaw: f.yaw, pitch: pose.pitch, bank: pose.bank, boosting: false, spin: 0, t: f.t,
      blink: f.invuln > 0 && Math.floor(f.invuln * 14) % 2 === 1, grounded: true, walk: this.walk, melee: pose.melee,
      hop: this.hop, tuck: this.combat.untouchable || pose.pounding || this.landing > 0,
      speed: this.speed ?? 0, dodging: this.combat.untouchable ? this.combat.dodgeAxis : null,
    });
    f.invuln = Math.max(0, f.invuln - dt);
    this.#camera(dt);
  }

  /** Slide along walls: try the full step, then each axis on its own. */
  #move(step) {
    const f = this.f;
    const probe = (dx, dz) => {
      const ahead = f.pos.clone().add(new THREE.Vector3(dx, 0, dz));
      const lip = ahead.clone().add(new THREE.Vector3(Math.sign(dx) * 0.4, 0, Math.sign(dz) * 0.4));
      if (Math.hypot(ahead.x, ahead.z) >= f.arena.radius) return false;
      if (this.roof) return f.arena.roofAt(lip)?.box === this.roof; // the roof edge is a wall
      return !f.arena.groundBlocked(lip);
    };
    if (probe(step.x, step.z)) f.pos.add(step);
    else if (probe(step.x, 0)) f.pos.x += step.x;
    else if (probe(0, step.z)) f.pos.z += step.z;
  }

  /** Blasters aim UP: the nearest hostile ahead (any height), else forward and climbing. */
  aim(from) {
    const f = this.f;
    const fwd = new THREE.Vector3(Math.sin(f.yaw), 0, Math.cos(f.yaw));
    let best = null;
    let bestD = Infinity;
    for (const b of f.swarm.alive) {
      const to = b.obj.position.clone().sub(from);
      const d = to.length();
      if (d > AIM_RANGE || to.normalize().dot(fwd) < 0.1) continue;
      if (d < bestD) {
        bestD = d;
        best = b;
      }
    }
    if (best) return best.obj.position.clone().sub(from).normalize();
    return fwd.multiplyScalar(Math.cos(UP_AIM)).setY(Math.sin(UP_AIM)).normalize();
  }

  #camera(dt) {
    const f = this.f;
    const cam = f.camera;
    const back = new THREE.Vector3(-Math.sin(f.yaw), 0, -Math.cos(f.yaw));
    const want = f.pos.clone().addScaledVector(back, CAM_BACK).add(new THREE.Vector3(0, CAM_UP, 0)); // all three bots: 1 m minis
    cam.position.lerp(want, 1 - Math.exp(-dt * 10));
    cam.up.lerp(new THREE.Vector3(0, 1, 0), 1 - Math.exp(-dt * 10)).normalize();
    cam.lookAt(f.pos.clone().addScaledVector(back, -6).add(new THREE.Vector3(0, 1.6, 0)));
    cam.fov = 66;
    cam.updateProjectionMatrix();
  }
}
