// QM85: QUANTUM RUN - THE CONTROLLER (owner 11-02: "we need ALL the games to be xbox controller fitted....just noticed qm85
// isnt xbox controllable"). Pure: the browser's STANDARD gamepad (an Xbox and a PlayStation pad read the same) -> a snapshot,
// and which KEY each button presses, in the air and on foot. js/padinput.js polls the real pad every frame and presses those
// keys through input.js - the same way the phone layer (touch.js) does - so every move the keyboard has, the pad has, with no
// second code path in the game. The hands follow Sovereign Warfare (Call of Duty): RT shoots, A jumps / boosts, LT brakes.

/** The W3C 'standard' layout, Xbox names. PlayStation: A = cross, B = circle, X = square, Y = triangle, LB/RB = L1/R1,
 *  LT/RT = L2/R2, VIEW = share / create, MENU = options. */
export const BTN = { a: 0, b: 1, x: 2, y: 3, lb: 4, rb: 5, lt: 6, rt: 7, view: 8, menu: 9, l3: 10, r3: 11, up: 12, down: 13, left: 14, right: 15 };

export const PAD = {
  trigger: 0.35, // a trigger counts as pulled past this
  stickOn: 0.5, // the left stick is a direction past this...
  stickOff: 0.35, // ...and stays one until it falls under this (no flicker at the edge = no accidental double-tap barrel roll)
  menuStick: 0.5, // menus: the stick moves the focus past this
  navRepeat: 0.28, // s between menu steps while the stick is held over
  cardGrace: 0.35, // s a card that comes up out of play takes no A - he was mashing boost when he died
};

/** Button -> the key it presses while FLYING. */
export const AIR = Object.freeze({
  a: "Space", // hold = BOOST · double-tap on a full bar = MEGA BLAST
  rt: "KeyL", // hold = PLASMA PUNCHES
  lt: "KeyX", // hold = AIRBRAKE (flare + hover, then land)
  x: "KeyE", // HEAT-SEEKING MISSILE (fires a picked-up pack weapon first, like E)
  b: "KeyB", // BACK BLAST (blaster LV2+)
  y: "KeyF", // LAND
  rb: "KeyH", // SPECIAL (VLTRN8 / 3BIZZLE)
  view: "KeyT", // skip the tutorial
});

/** Button -> the key it presses ON FOOT (FIGHT MODE). */
export const FOOT = Object.freeze({
  a: "Space", // JUMP (then X = GROUND POUND)
  rt: "KeyL", // blasters fire up
  lt: "ShiftLeft", // DODGE ROLL
  x: "KeyR", // PUNCH / SWORD combo
  b: "ShiftLeft", // DODGE ROLL
  y: "KeyF", // back to flight
  rb: "KeyH", // SPECIAL (the VLTRNs' FLAME STRIKE)
  view: "KeyT",
});

/** The left stick / D-pad -> the arrow keys (the game steers digitally: ↑ dives, ↓ climbs, like the keys and the phone stick). */
export const DIRS = Object.freeze({ up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight" });

/** The key a button presses in this context (null = the button does nothing here). */
export function padKey(button, onFoot) {
  return (onFoot ? FOOT : AIR)[button] ?? null;
}

/** A snapshot of the pad: which buttons are down (triggers past PAD.trigger) and the left stick. Null when there is no pad. */
export function readPad(gp) {
  if (!gp || !gp.connected) return null;
  const buttons = gp.buttons || [];
  const axes = gp.axes || [];
  const val = (i) => {
    const b = buttons[i];
    if (b === undefined || b === null) return 0;
    if (typeof b === "number") return b;
    return b.value || (b.pressed ? 1 : 0);
  };
  const ax = (i) => (Number.isFinite(axes[i]) ? axes[i] : 0);
  const held = {};
  for (const [name, i] of Object.entries(BTN)) held[name] = val(i) > (name === "lt" || name === "rt" ? PAD.trigger : 0.5);
  return { id: gp.id || "", standard: gp.mapping === "standard", held, lx: ax(0), ly: ax(1) };
}

/** Which buttons went down and which came up since the last read. */
export function padEdges(prev, held) {
  const down = [];
  const up = [];
  for (const n of Object.keys(held)) {
    const was = Boolean(prev && prev[n]);
    if (held[n] && !was) down.push(n);
    else if (!held[n] && was) up.push(n);
  }
  return { down, up };
}

/** Which directions the left stick holds, with hysteresis: a direction turns on past PAD.stickOn and off under PAD.stickOff,
 *  so a thumb resting near the edge never flickers it (a flicker is a double-tap = a barrel roll). The D-pad adds its own. */
export function stickDirs(prev, lx, ly, held = {}) {
  const on = (was, v) => (was ? v > PAD.stickOff : v > PAD.stickOn);
  const stick = {
    left: on(prev?.stick?.left, -lx),
    right: on(prev?.stick?.right, lx),
    up: on(prev?.stick?.up, -ly),
    down: on(prev?.stick?.down, ly),
  };
  return {
    stick,
    left: stick.left || Boolean(held.left),
    right: stick.right || Boolean(held.right),
    up: stick.up || Boolean(held.up),
    down: stick.down || Boolean(held.down),
  };
}

/** The keys the pad holds right now: each held button keeps the key it pressed when it went DOWN (landing mid-press never
 *  swaps a held key under the thumb), plus the stick's arrows. */
export function heldKeys(downAs, dirs) {
  const keys = new Set(Object.values(downAs).filter(Boolean));
  for (const [d, code] of Object.entries(DIRS)) if (dirs[d]) keys.add(code);
  return keys;
}

/** Menus: the stick or D-pad as one direction (or null). */
export function menuDir(s) {
  if (s.held.up) return "up";
  if (s.held.down) return "down";
  if (s.held.left) return "left";
  if (s.held.right) return "right";
  const m = Math.hypot(s.lx, s.ly);
  if (!(m > PAD.menuStick)) return null;
  const ax = Math.abs(s.lx);
  const ay = Math.abs(s.ly);
  if (Math.max(ax, ay) < Math.min(ax, ay) * 1.25) return null; // near a diagonal: no step (it would flip axes every frame)
  if (ax > ay) return s.lx > 0 ? "right" : "left";
  return s.ly > 0 ? "down" : "up";
}

const NAV = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };

/** The menu button to move to: the nearest centre in the pushed direction (inside a 2:1 cone first, then anywhere ahead).
 *  Returns its index in `cands`, or -1. */
export function navPick(from, cands, dir) {
  const [ux, uy] = NAV[dir] || [0, 0];
  const pick = (cone) => {
    let best = -1;
    let bestScore = Infinity;
    cands.forEach((c, i) => {
      const dx = c.x - from.x;
      const dy = c.y - from.y;
      const along = dx * ux + dy * uy;
      const across = Math.abs(dx * uy - dy * ux);
      if (along <= 4 || (cone && across > along * 2)) return;
      const score = along + across * 2;
      if (score < bestScore) {
        bestScore = score;
        best = i;
      }
    });
    return best;
  };
  const inCone = pick(true);
  return inCone >= 0 ? inCone : pick(false);
}
