// Keyboard + mouse state. `pressed` fires once per key-down; `held` stays true while down.
const held = new Set();
const pressed = new Set();
let dragX = 0;
let dragging = false;

addEventListener("keydown", (e) => {
  if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault();
  if (!held.has(e.code)) pressed.add(e.code);
  held.add(e.code);
});
addEventListener("keyup", (e) => held.delete(e.code));
addEventListener("blur", () => held.clear());

addEventListener("mousedown", (e) => {
  if (e.button === 0) pressed.add("Mouse0");
  if (e.button === 2) dragging = true;
  held.add(`Mouse${e.button}`);
});
addEventListener("mouseup", (e) => {
  if (e.button === 2) dragging = false;
  held.delete(`Mouse${e.button}`);
});
addEventListener("mousemove", (e) => {
  if (dragging) dragX += e.movementX;
});
addEventListener("contextmenu", (e) => e.preventDefault());

export const input = {
  /** Touch layer (touch.js): synthesize a key press / release. */
  press(code) {
    if (!held.has(code)) pressed.add(code);
    held.add(code);
  },
  release(code) {
    held.delete(code);
  },
  held: (...codes) => codes.some((c) => held.has(c)),
  pressed: (...codes) => codes.some((c) => pressed.has(c)),
  /** Horizontal right-drag since the last frame, in pixels. */
  takeDrag() {
    const d = dragX;
    dragX = 0;
    return d;
  },
  endFrame() {
    pressed.clear();
  },
};
