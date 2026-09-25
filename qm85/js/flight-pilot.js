// QM85 in flight: Superman pose (body level, feet trailing at the camera so you see the soles
// and the thrusters), arms stretched out front, and a punch from alternating fists on every shot.
// The Tripo mesh has no skeleton — Blender's split_qm85_limbs.py cut the arms off at the shoulders and (09-25) the
// legs off at the hips, so he walks, tucks, kicks and braces instead of gliding on stiff legs.
import * as THREE from "three";
import { spawn } from "./assets.js";
import { makeGlow } from "./flight-glow.js";

const LEAN = 1.3; // body tipped forward until it's nearly level
const ARM_REACH = -(Math.PI - 0.18); // arms swung up from hanging to straight out past the head
const ARM_SPREAD = 0.14;
const PUNCH_TIME = 0.12;
const GROUND_AIM = -2.35; // arm rotation that points the fist up-and-forward (arms hang along -Y)
const PUNCH_DIST = 0.2;
const FIST = new THREE.Vector3(0, -0.46, 0.04); // fist, in arm-local space (arm hangs down -Y)
const BLADE_LEN = 0.55; // a plasma blade runs on from the fist along the arm line (the bot is 1 m tall)
const SWAGGER_HZ = 95 / 60; // 3BIZZLE's cruising bob, on the beat

/**
 * THE ROSTER (owner 09-25: "recreate me and mahals bot to be designed similar to QM85's style of cute bot with hidden
 * battle fury"): all three are QM85-family bots on the same limb-split rig (blender/normalize_bot.py +
 * split_qm85_limbs.py), so one class flies, walks and punches them. Each look: the rig, its thruster plume, and the
 * plasma blade(s) it draws on foot (none for QM85 — he punches).
 */
export const PILOT_LOOKS = {
  qm85: { model: "qm85_rig", name: "QM85", melee: 1 },
  bizzle: { model: "bizzle_rig", name: "3BIZZLE", thrust: 0x3dff7a, blade: 0xff3b2b, bladeCore: 0xffe3d6, flaming: true, melee: 1.45, vltrn: true },
  vltrn8: { model: "vltrn8_rig", name: "VLTRN8", thrust: 0xff4fd8, blade: 0xb34dff, bladeCore: 0xffe6ff, melee: 1, vltrn: true },
};

export class Pilot {
  constructor(root, look = PILOT_LOOKS.qm85) {
    this.root = root; // world space, for the ember trail
    this.look = look;
    this.isVltrn = Boolean(look.vltrn); // Rob's / Mahal's bot: H special, plasma blades on foot
    this.samurai = false;
    this.flexT = 0;
    this.frame = new THREE.Group(); // flight frame: yaw / pitch / bank, +Z = where he's flying
    this.frame.rotation.order = "YXZ";
    this.lean = new THREE.Group();
    this.lean.rotation.x = LEAN;
    this.spin = new THREE.Group(); // mega-blast barrel roll spins about his long axis
    this.frame.add(this.lean);
    this.lean.add(this.spin);
    this.bot = spawn(look.model);
    this.bot.position.y = -0.5; // pivot around his middle
    this.spin.add(this.bot);
    this.arms = [this.bot.getObjectByName("QM85_ArmR"), this.bot.getObjectByName("QM85_ArmL")];
    this.armBase = this.arms.map((a) => a.position.clone());
    this.legs = [this.bot.getObjectByName("QM85_LegR"), this.bot.getObjectByName("QM85_LegL")]; // may be missing on an old rig
    this.punchT = [0, 0];
    this.#buildThrusters();
    this.#buildCharge();
    this.#mountThrustersOnFeet();
    this.blades = look.blade ? this.arms.map((arm) => this.#blade(arm)) : [];
    const fill = new THREE.PointLight(0xfff1e0, 1.2, 5); // soft fill from the camera side
    fill.position.set(-0.6, 1.2, -2.4);
    this.frame.add(fill);
    root.add(this.frame);
  }

  #buildThrusters() {
    // UHD thruster (owner 09-24: "more UHD drip to our bots thrusters and boosters"): a chrome nozzle with a lit
    // rim, a white-hot core inside a coloured plume inside a soft halo, shock-diamond rings down the plume, a long
    // boost streak, and a trail of hot embers left behind in world space.
    const additive = (color, opacity) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });
    const mat = additive(0xc58bff, 0.55);
    this.flameMat = mat; // recoloured per thruster level
    this.haloMat = additive(0xc58bff, 0.14);
    this.streakMat = additive(0xc58bff, 0.0);
    this.diamondMat = additive(0xffffff, 0.5);
    this.coreMat = additive(0xfff4ff, 0.7);
    // Cone base at the sole, tip trailing away down his legs' line (-Y in body space).
    const geo = new THREE.ConeGeometry(0.065, 0.4, 14).rotateX(Math.PI).translate(0, -0.2, 0);
    const haloGeo = new THREE.ConeGeometry(0.11, 0.55, 14).rotateX(Math.PI).translate(0, -0.26, 0);
    const coreGeo = new THREE.ConeGeometry(0.032, 0.26, 10).rotateX(Math.PI).translate(0, -0.13, 0);
    const streakGeo = new THREE.PlaneGeometry(0.16, 1.2).translate(0, -0.6, 0);
    const nozzleGeo = new THREE.CylinderGeometry(0.075, 0.06, 0.06, 16, 1, true);
    const nozzleMat = new THREE.MeshStandardMaterial({ color: 0x2a2530, metalness: 1, roughness: 0.25, side: THREE.DoubleSide });
    const rimGeo = new THREE.TorusGeometry(0.07, 0.008, 6, 20).rotateX(Math.PI / 2);
    const diamondGeo = new THREE.TorusGeometry(0.03, 0.006, 6, 14).rotateX(Math.PI / 2);
    this.flames = [];
    this.halos = [];
    this.cores = [];
    this.streaks = [];
    this.diamonds = [];
    this.rims = [];
    this.nozzles = [];
    for (const x of [-0.11, 0.11]) {
      const nozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
      nozzle.position.set(x, -0.49, 0.02);
      this.spin.add(nozzle);
      this.nozzles.push(nozzle);
      const rim = new THREE.Mesh(rimGeo, additive(0xc58bff, 0.9));
      rim.position.set(x, -0.515, 0.02);
      this.spin.add(rim);
      this.rims.push(rim);
      const f = new THREE.Mesh(geo, mat);
      f.position.set(x, -0.5, 0.02);
      this.spin.add(f);
      this.flames.push(f);
      const h = new THREE.Mesh(haloGeo, this.haloMat);
      h.position.copy(f.position);
      this.spin.add(h);
      this.halos.push(h);
      const c = new THREE.Mesh(coreGeo, this.coreMat);
      c.position.copy(f.position);
      this.spin.add(c);
      this.cores.push(c);
      const streak = new THREE.Group(); // two crossed planes read from every angle
      for (const ry of [0, Math.PI / 2]) {
        const q = new THREE.Mesh(streakGeo, this.streakMat);
        q.rotation.y = ry;
        streak.add(q);
      }
      streak.position.copy(f.position);
      this.spin.add(streak);
      this.streaks.push(streak);
      const rings = [0.1, 0.19, 0.29].map((d) => {
        const r = new THREE.Mesh(diamondGeo, this.diamondMat);
        r.position.set(x, -0.5 - d, 0.02);
        r.userData.d = d;
        this.spin.add(r);
        return r;
      });
      this.diamonds.push(...rings);
    }
    this.thrustLight = new THREE.PointLight(0xb57bff, 2, 3);
    this.thrustLight.position.set(0, -0.8, 0);
    this.spin.add(this.thrustLight);
    // embers: hot sprites shed off the soles, drifting back and dying
    const c = document.createElement("canvas");
    c.width = c.height = 32;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.35, "rgba(255,240,255,0.6)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 32, 32);
    this.emberTex = new THREE.CanvasTexture(c);
    this.embers = [];
    this.emberT = 0;
  }

  /** Each sole's thruster rides its own leg now (09-25), so the nozzles move with the feet when he walks. */
  #mountThrustersOnFeet() {
    if (!this.legs.every(Boolean)) return;
    this.frame.updateMatrixWorld(true);
    const byLeg = (x) => this.legs[x < 0 ? 0 : 1]; // right leg sits at -X
    const parts = [...this.flames, ...this.halos, ...this.cores, ...this.streaks, ...this.rims, ...this.nozzles, ...this.diamonds];
    for (const part of parts) byLeg(part.position.x).attach(part);
    for (const d of this.diamonds) d.userData.base = d.position.clone();
  }

  /**
   * Leg pose. Legs hang along -Y from the hip; rotation.x < 0 swings the foot FORWARD.
   * walk: opposite to the arms · air on foot: knees tucked · punch: fighting stance · roll / pound: full tuck ·
   * flight: a lazy flutter kick, locked straight on boost, dropped forward like landing gear on the airbrake.
   */
  #legs(dt, { grounded, walk, t, hop, melee, boosting, braking, tuck }) {
    if (!this.legs.every(Boolean)) return;
    this.legs.forEach((leg, i) => {
      let target;
      if (tuck) target = -1.05;
      else if (grounded && hop > 0.05) target = i === 0 ? -0.55 : -0.25; // mid-jump: knees up, one leading
      else if (grounded && melee) target = i === (melee.side === 0 ? 1 : 0) ? -0.38 : 0.28; // lead with the opposite foot
      else if (grounded) target = -Math.sin(walk + i * Math.PI) * 0.6; // opposite to the same side's arm (arm + = back, leg − = forward)
      else if (braking) target = -0.7 - i * 0.12;
      else if (boosting) target = 0.05;
      else target = Math.sin(t * 3 + i * Math.PI) * 0.1; // flutter kick while cruising
      leg.rotation.x = THREE.MathUtils.damp(leg.rotation.x, target, grounded ? 18 : 8, dt);
    });
  }

  /** Shed embers behind the soles: a few while cruising, a stream on boost, a river in STEALTH. */
  #embers(dt, { grounded, boosting, stealth, thrustColor }) {
    const rate = grounded ? 0 : stealth ? 90 : boosting ? 45 : 8;
    this.emberT -= dt;
    if (rate && this.emberT <= 0) {
      this.emberT = 1 / rate;
      const flame = this.flames[this.embers.length % 2];
      const at = flame.getWorldPosition(new THREE.Vector3());
      const back = new THREE.Vector3(0, -1, 0).applyQuaternion(flame.getWorldQuaternion(new THREE.Quaternion()));
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.emberTex, color: thrustColor, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
      sp.position.copy(at).addScaledVector(back, 0.2);
      sp.scale.setScalar(0.09 + Math.random() * 0.07);
      this.root.add(sp);
      const life = boosting || stealth ? 0.55 : 0.35;
      this.embers.push({ sp, life, max: life, v: back.multiplyScalar(3 + Math.random() * 4).add(new THREE.Vector3((Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2)) });
    }
    for (const e of this.embers) {
      e.life -= dt;
      e.sp.position.addScaledVector(e.v, dt);
      e.v.multiplyScalar(Math.exp(-dt * 2.5));
      const k = e.life / e.max;
      e.sp.material.opacity = Math.max(0, k) * 0.9;
      e.sp.scale.setScalar(0.08 + (1 - k) * 0.22);
      if (e.life <= 0) {
        this.root.remove(e.sp);
        e.sp.material.dispose();
      }
    }
    this.embers = this.embers.filter((e) => e.life > 0);
  }

  #buildCharge() {
    this.charge = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.16, 2),
      new THREE.MeshBasicMaterial({ color: 0xd9a8ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    this.charge.position.set(0, 0.62, 0.1); // between his outstretched fists
    this.charge.visible = false;
    this.spin.add(this.charge);
  }

  /** A plasma blade in this arm's fist: white-hot core, coloured glow, flame licks for 3BIZZLE. Lit on foot only. */
  #blade(arm) {
    const g = new THREE.Group();
    g.position.copy(FIST);
    // held like a sword: out of the fist, forward and a little up (the arm hangs along -Y, so -Y turned to +Z, tipped
    // 20° up) — a swing raises it, and at rest it's a ready stance, never stabbing the street
    g.rotation.x = -Math.PI / 2 - 0.35;
    const along = (r, len) => new THREE.CylinderGeometry(r, r * 0.75, len, 10).translate(0, -len / 2, 0);
    const add = (color, opacity) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });
    g.add(new THREE.Mesh(along(0.032, BLADE_LEN), add(this.look.bladeCore, 1)));
    const glow = new THREE.Mesh(along(0.085, BLADE_LEN * 1.06), add(this.look.blade, 0.7));
    g.add(glow);
    const licks = this.look.flaming ? [0.15, 0.3, 0.45].map((d) => { // 3BIZZLE: red FLAMING plasma
      const s = makeGlow(0xff5a1f, 0.16, 0.55);
      s.position.y = -d;
      g.add(s);
      return s;
    }) : [];
    g.visible = false;
    arm.add(g);
    return { g, glow, licks };
  }

  /** 3BIZZLE past blaster LV2 on foot: the TRUE SAMURAI — a blade in each fist, and they hit harder. */
  setSamurai(on) {
    this.samurai = Boolean(on) && this.look.flaming === true;
  }

  get meleeMult() {
    return (this.look.melee ?? 1) * (this.samurai ? 1.6 : 1);
  }

  /** Where a special fires from: the right fist (no punch animation). */
  muzzle() {
    this.frame.updateMatrixWorld(true);
    return this.arms[0].localToWorld(FIST.clone());
  }

  /** 3BIZZLE's show-off: arms thrown wide for a beat after a trick lands. */
  flex() {
    this.flexT = 0.6;
  }

  #updateBlades(dt, grounded, t) {
    const lit = grounded ? (this.samurai ? 2 : 1) : 0; // one blade in the right fist, both as the samurai
    this.blades.forEach((b, i) => {
      b.g.visible = i < lit;
      if (!b.g.visible) return;
      const hum = 0.85 + 0.15 * Math.sin(t * 38 + i * 2);
      b.glow.scale.set(hum, 1, hum);
      for (const [k, s] of b.licks.entries()) s.scale.setScalar(0.12 + 0.08 * Math.abs(Math.sin(t * 17 + k * 1.7 + i)));
    });
  }

  /** Punch with one fist (0 = right, 1 = left); returns that fist's world position. */
  punch(side) {
    this.punchT[side] = PUNCH_TIME;
    this.aimHold = 0.7; // on the ground the arms stay raised for a beat after each shot
    this.frame.updateMatrixWorld(true);
    return this.arms[side].localToWorld(FIST.clone());
  }

  /** f: 0..1 charge of the mega orb; 0 hides it. */
  setCharge(f) {
    this.charge.visible = f > 0;
    this.charge.scale.setScalar(0.3 + f * 1.8);
    this.charge.rotation.y += 0.3;
  }

  chargeWorld() {
    return this.charge.getWorldPosition(new THREE.Vector3());
  }

  update(dt, { pos, yaw, pitch, bank, boosting, spin, t, blink, grounded = false, walk = 0, thrustColor = 0xc58bff, stealth = false, braking = false, upright = false, melee = null, hop = 0, tuck = false, swagger = false }) {
    if (this.look.thrust && thrustColor !== 0xffffff) thrustColor = this.look.thrust; // each bot's own plume (stealth stays white)
    this.flexT = Math.max(0, this.flexT - dt);
    this.flameMat.color.setHex(thrustColor);
    this.frame.position.copy(pos);
    this.frame.rotation.set(-pitch, yaw, bank);
    this.spin.rotation.y = spin;
    const bob = swagger && !grounded ? Math.sin(t * Math.PI * 2 * SWAGGER_HZ) : 0; // 3BIZZLE cruises with a lean on the beat
    this.spin.rotation.z = THREE.MathUtils.damp(this.spin.rotation.z, bob * 0.12, 8, dt);
    // FIGHT MODE and the BACK BLAST stand him up; flight tips him into the Superman pose
    this.lean.rotation.x = THREE.MathUtils.damp(this.lean.rotation.x, grounded || upright ? 0 : LEAN, upright ? 18 : 10, dt);
    this.aimHold = Math.max(0, (this.aimHold ?? 0) - dt);
    this.arms.forEach((arm, i) => {
      const side = i === 0 ? -1 : 1; // right arm sits at -X
      this.punchT[i] = Math.max(0, this.punchT[i] - dt);
      const k = this.punchT[i] > 0 ? Math.sin((this.punchT[i] / PUNCH_TIME) * Math.PI) : 0;
      if (grounded) {
        // walking: arms swing; firing: blasters raised up-and-forward at the sky (owner: "shoot up")
        const swing = Math.sin(walk + i * Math.PI) * 0.55;
        let target = this.aimHold > 0 ? GROUND_AIM - k * 0.15 : swing;
        let rate = 16;
        if (melee && melee.side === i) { // GROUND COMBAT: the punching fist drives straight out (uppercut: low to high)
          target = melee.kind === "uppercut" ? THREE.MathUtils.lerp(-0.5, -2.9, melee.out) : THREE.MathUtils.lerp(-0.9, -1.62, melee.out);
          rate = 40;
        } else if (melee) target = -0.9; // the other fist guards the chin
        arm.rotation.set(THREE.MathUtils.damp(arm.rotation.x, target, rate, dt), 0, side * 0.12);
        arm.position.copy(this.armBase[i]);
        return;
      }
      const swim = Math.sin(t * 4 + i * Math.PI) * 0.07; // a lazy stroke while cruising
      if (braking) { // AIRBRAKE flare: arms swept wide and back like air brakes
        arm.rotation.set(THREE.MathUtils.damp(arm.rotation.x, ARM_REACH + 0.75, 10, dt), 0, THREE.MathUtils.damp(arm.rotation.z, side * 1.05, 10, dt));
      } else if (this.flexT > 0) { // the show-off flex: arms thrown wide, then back to the Superman reach
        const w = Math.sin((this.flexT / 0.6) * Math.PI);
        arm.rotation.set(ARM_REACH + 0.9 * w, 0, side * (ARM_SPREAD + 1.2 * w));
      } else arm.rotation.set(ARM_REACH + swim - k * 0.12, 0, side * ARM_SPREAD);
      arm.position.copy(this.armBase[i]).add(new THREE.Vector3(0, k * PUNCH_DIST, 0));
    });
    this.bot.position.y = grounded ? -0.5 + Math.abs(Math.sin(walk)) * 0.05 : -0.5; // a little step bounce
    this.#legs(dt, { grounded, walk, t, hop, melee, boosting, braking, tuck });
    this.#updateBlades(dt, grounded, t);
    const roar = braking ? 0.55 : stealth ? 4.2 : boosting ? 2.4 : 1; // STEALTH MODE: long plasma trails; the brake throttles the plume
    const flicker = () => 0.85 + Math.random() * 0.3;
    this.haloMat.color.setHex(thrustColor);
    this.streakMat.color.setHex(thrustColor);
    this.streakMat.opacity = THREE.MathUtils.damp(this.streakMat.opacity, stealth ? 0.42 : boosting ? 0.3 : 0, 8, dt);
    this.coreMat.opacity = stealth ? 0.95 : boosting ? 0.85 : 0.6;
    this.haloMat.opacity = stealth ? 0.22 : boosting ? 0.18 : 0.12;
    for (const [i, f] of this.flames.entries()) {
      const r = roar * flicker();
      f.visible = !grounded;
      f.scale.set(1, r, 1);
      this.halos[i].visible = !grounded;
      const flare = braking ? 1.9 : boosting ? 1.25 : 1; // the brake splays the plume wide and short
      this.halos[i].scale.set(flare, r * 1.05, flare);
      this.cores[i].visible = !grounded;
      this.cores[i].scale.set(1, r * 0.9 * flicker(), 1);
      this.streaks[i].visible = !grounded && this.streakMat.opacity > 0.02;
      this.streaks[i].scale.set(1, roar * 1.6, 1);
    }
    for (const d of this.diamonds) { // shock diamonds ride down the plume and spread with the roar
      d.visible = !grounded;
      const drift = (t * 6) % 1;
      const baseY = d.userData.base ? d.userData.base.y + d.userData.d : -0.5; // mounted on a leg: relative to the sole
      d.position.y = baseY - (d.userData.d + drift * 0.05) * roar;
      d.scale.setScalar((0.8 + 0.4 * Math.sin(t * 40 + d.userData.d * 30)) * (boosting ? 1.5 : 1));
    }
    for (const rim of this.rims) rim.material.color.setHex(thrustColor);
    this.#embers(dt, { grounded, boosting, stealth, thrustColor });
    this.thrustLight.intensity = grounded ? 0 : stealth ? 8 : boosting ? 5 : 2;
    this.thrustLight.color.setHex(thrustColor);
    this.frame.visible = !blink;
  }
}
