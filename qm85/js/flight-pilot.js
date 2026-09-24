// QM85 in flight: Superman pose (body level, feet trailing at the camera so you see the soles
// and the thrusters), arms stretched out front, and a punch from alternating fists on every shot.
// The Tripo mesh has no skeleton — Blender's split_qm85_arms.py cut the arms off at the shoulders.
import * as THREE from "three";
import { spawn } from "./assets.js";

const LEAN = 1.3; // body tipped forward until it's nearly level
const ARM_REACH = -(Math.PI - 0.18); // arms swung up from hanging to straight out past the head
const ARM_SPREAD = 0.14;
const PUNCH_TIME = 0.12;
const GROUND_AIM = -2.35; // arm rotation that points the fist up-and-forward (arms hang along -Y)
const PUNCH_DIST = 0.2;
const FIST = new THREE.Vector3(0, -0.46, 0.04); // fist, in arm-local space (arm hangs down -Y)

export class Pilot {
  constructor(root) {
    this.root = root; // world space, for the ember trail
    this.frame = new THREE.Group(); // flight frame: yaw / pitch / bank, +Z = where he's flying
    this.frame.rotation.order = "YXZ";
    this.lean = new THREE.Group();
    this.lean.rotation.x = LEAN;
    this.spin = new THREE.Group(); // mega-blast barrel roll spins about his long axis
    this.frame.add(this.lean);
    this.lean.add(this.spin);
    this.bot = spawn("qm85_rig");
    this.bot.position.y = -0.5; // pivot around his middle
    this.spin.add(this.bot);
    this.arms = [this.bot.getObjectByName("QM85_ArmR"), this.bot.getObjectByName("QM85_ArmL")];
    this.armBase = this.arms.map((a) => a.position.clone());
    this.punchT = [0, 0];
    this.#buildThrusters();
    this.#buildCharge();
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
    for (const x of [-0.11, 0.11]) {
      const nozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
      nozzle.position.set(x, -0.49, 0.02);
      this.spin.add(nozzle);
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

  update(dt, { pos, yaw, pitch, bank, boosting, spin, t, blink, grounded = false, walk = 0, thrustColor = 0xc58bff, stealth = false, braking = false }) {
    this.flameMat.color.setHex(thrustColor);
    this.frame.position.copy(pos);
    this.frame.rotation.set(-pitch, yaw, bank);
    this.spin.rotation.y = spin;
    // FIGHT MODE stands him up; flight tips him into the Superman pose
    this.lean.rotation.x = THREE.MathUtils.damp(this.lean.rotation.x, grounded ? 0 : LEAN, 10, dt);
    this.aimHold = Math.max(0, (this.aimHold ?? 0) - dt);
    this.arms.forEach((arm, i) => {
      const side = i === 0 ? -1 : 1; // right arm sits at -X
      this.punchT[i] = Math.max(0, this.punchT[i] - dt);
      const k = this.punchT[i] > 0 ? Math.sin((this.punchT[i] / PUNCH_TIME) * Math.PI) : 0;
      if (grounded) {
        // walking: arms swing; firing: blasters raised up-and-forward at the sky (owner: "shoot up")
        const swing = Math.sin(walk + i * Math.PI) * 0.55;
        const target = this.aimHold > 0 ? GROUND_AIM - k * 0.15 : swing;
        arm.rotation.set(THREE.MathUtils.damp(arm.rotation.x, target, 16, dt), 0, side * 0.12);
        arm.position.copy(this.armBase[i]);
        return;
      }
      const swim = Math.sin(t * 4 + i * Math.PI) * 0.07; // a lazy stroke while cruising
      if (braking) { // AIRBRAKE flare: arms swept wide and back like air brakes
        arm.rotation.set(THREE.MathUtils.damp(arm.rotation.x, ARM_REACH + 0.75, 10, dt), 0, THREE.MathUtils.damp(arm.rotation.z, side * 1.05, 10, dt));
      } else arm.rotation.set(ARM_REACH + swim - k * 0.12, 0, side * ARM_SPREAD);
      arm.position.copy(this.armBase[i]).add(new THREE.Vector3(0, k * PUNCH_DIST, 0));
    });
    this.bot.position.y = grounded ? -0.5 + Math.abs(Math.sin(walk)) * 0.05 : -0.5; // a little step bounce
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
      d.position.y = -0.5 - (d.userData.d + drift * 0.05) * roar;
      d.scale.setScalar((0.8 + 0.4 * Math.sin(t * 40 + d.userData.d * 30)) * (boosting ? 1.5 : 1));
    }
    for (const rim of this.rims) rim.material.color.setHex(thrustColor);
    this.#embers(dt, { grounded, boosting, stealth, thrustColor });
    this.thrustLight.intensity = grounded ? 0 : stealth ? 8 : boosting ? 5 : 2;
    this.thrustLight.color.setHex(thrustColor);
    this.frame.visible = !blink;
  }
}
