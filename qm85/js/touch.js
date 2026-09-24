// MOBILE FIT (owner 09-24: "make sure its mobile fitted"): a touch layer that drives the same key codes the
// keyboard does, so every move works on a phone. Left half of the screen = a virtual stick (flight-sim: push
// UP to dive, DOWN to climb; flick twice = twirl, flick ↑↑/↓↓ at LV2+ = hyper loop). Right side = buttons:
// BOOST (hold; tap twice on a full bar = MEGA), AIRBRAKE (hold: flare + hover, then LAND), FIRE (hold), MISSILE, LAND/FLY, JUMP. Shown only when the
// device has a coarse pointer (a finger) and the game is in flight.
import { input } from "./input.js";

const DEAD = 0.28; // stick travel (0..1) before a direction counts
const RADIUS = 52; // px of stick travel

const isTouchDevice = () => matchMedia("(pointer: coarse)").matches; // a touchscreen LAPTOP keeps the keyboard layout until a finger is used

const BUTTONS = [
  { id: "boost", label: "BOOST", code: "Space", hold: true },
  { id: "brake", label: "AIRBRAKE", code: "KeyX", hold: true },
  { id: "fire", label: "FIRE", code: "KeyL", hold: true },
  { id: "missile", label: "MISSILE", code: "KeyQ", hold: false },
  { id: "land", label: "LAND / FLY", code: "KeyF", hold: false },
  { id: "jump", label: "JUMP", code: "Space", hold: false },
];

class TouchLayer {
  constructor() {
    this.enabled = isTouchDevice();
    this.root = null;
    this.stick = { id: null, ox: 0, oy: 0, held: new Set() };
    if (this.enabled) this.#build();
    else addEventListener("touchstart", () => { // first real finger on a mouse-first device: bring the pad up
      this.enabled = true;
      this.#build();
    }, { once: true, passive: true });
  }

  #build() {
    const root = document.createElement("div");
    root.id = "touch";
    root.hidden = true;
    root.innerHTML = `
      <div id="stick"><div class="ring"><div class="knob"></div></div><span>DIVE ↑ · CLIMB ↓</span></div>
      <div id="tbuttons">${BUTTONS.map((b) => `<button type="button" data-id="${b.id}" class="tb tb-${b.id}">${b.label}</button>`).join("")}</div>`;
    document.body.appendChild(root);
    this.root = root;
    this.knob = root.querySelector(".knob");
    this.ring = root.querySelector(".ring");
    const zone = root.querySelector("#stick");
    zone.addEventListener("pointerdown", (e) => this.#stickDown(e));
    zone.addEventListener("pointermove", (e) => this.#stickMove(e));
    for (const ev of ["pointerup", "pointercancel", "lostpointercapture"]) zone.addEventListener(ev, (e) => this.#stickUp(e));
    for (const btn of root.querySelectorAll(".tb")) {
      const def = BUTTONS.find((b) => b.id === btn.dataset.id);
      btn.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        try { btn.setPointerCapture(e.pointerId); } catch { /* synthetic events have no active pointer */ }
        btn.classList.add("on");
        input.press(def.code);
        if (!def.hold) setTimeout(() => input.release(def.code), 80); // a tap: down this frame, up right after
      });
      for (const ev of ["pointerup", "pointercancel"]) btn.addEventListener(ev, () => {
        btn.classList.remove("on");
        if (def.hold) input.release(def.code);
      });
    }
    root.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  #stickDown(e) {
    if (this.stick.id !== null) return;
    e.preventDefault();
    this.stick.id = e.pointerId;
    this.stick.ox = e.clientX;
    this.stick.oy = e.clientY;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* synthetic events have no active pointer */ }
    this.ring.style.left = `${e.clientX}px`;
    this.ring.style.top = `${e.clientY}px`;
    this.ring.classList.add("live");
  }

  #stickMove(e) {
    if (e.pointerId !== this.stick.id) return;
    const dx = (e.clientX - this.stick.ox) / RADIUS;
    const dy = (e.clientY - this.stick.oy) / RADIUS;
    const len = Math.hypot(dx, dy);
    const k = len > 1 ? 1 / len : 1;
    this.knob.style.transform = `translate(${dx * k * RADIUS}px, ${dy * k * RADIUS}px)`;
    this.#dirs({
      ArrowLeft: dx < -DEAD, ArrowRight: dx > DEAD,
      ArrowUp: dy < -DEAD, // push up = dive (flight-sim), the same as the ↑ key
      ArrowDown: dy > DEAD,
    });
  }

  #stickUp(e) {
    if (e.pointerId !== this.stick.id) return;
    this.stick.id = null;
    this.knob.style.transform = "";
    this.ring.classList.remove("live");
    this.#dirs({});
  }

  /** Press/release direction codes so `pressed` (once) and `held` behave exactly like the keys. */
  #dirs(want) {
    for (const code of ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]) {
      const on = Boolean(want[code]);
      const was = this.stick.held.has(code);
      if (on && !was) {
        input.press(code);
        this.stick.held.add(code);
      } else if (!on && was) {
        input.release(code);
        this.stick.held.delete(code);
      }
    }
  }

  /** Show the pad only while flying (cards, menus and pause hide it). */
  setVisible(on) {
    if (!this.root) return;
    if (this.root.hidden === !on) return;
    this.root.hidden = !on;
    if (!on) {
      this.#dirs({});
      for (const b of BUTTONS) input.release(b.code);
    }
  }
}

export const touch = new TouchLayer();
