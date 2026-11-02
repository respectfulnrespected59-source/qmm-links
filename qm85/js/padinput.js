// QM85 - THE CONTROLLER, live (owner 11-02: "we need ALL the games to be xbox controller fitted"). Reads the first connected
// pad every frame (its own loop: the game's loop stops while PAUSED, and MENU has to un-pause it) and presses the keys
// js/gamepad.js maps, through input.press / release - exactly what the phone layer (touch.js) does - so the game has ONE input
// path. In a menu (the home card, the garage, a level card, PAUSED) it walks the visible buttons instead: stick / D-pad move,
// A picks, B backs out, MENU resumes. Rumble on a hit, the MEGA blast and a landing. window.__qm85pad = state for the bench.
import { input } from "./input.js";
import { readPad, padEdges, padKey, stickDirs, heldKeys, menuDir, navPick, PAD } from "./gamepad.js";

const ROOTS = ["#pause", "#card"]; // PAUSED sits over the card, so it wins
const TARGETS = "button, summary, a[href]";
const BACK_WORDS = /^(BACK|CLOSE|CANCEL)$/i;

let opts = {
  isPlaying: () => false, // flying / on foot and not paused: the pad presses keys
  onFoot: () => false, // FIGHT MODE: the on-foot layout
  togglePause: () => {},
  unlockAudio: () => {}, // a pad press may not count as the click browsers want before sound plays - try anyway
  status: () => null, // { shield, mega, foot } while flying: the rumble reads it
  onConnect: () => {}, // (plugged, id)
  onDevice: () => {}, // (inUse): the pad became / stopped being the device in his hands - the hints follow
};

let gp = null;
let prev = null;
let dirs = null;
let downAs = {}; // button -> the key it pressed when it went down (released with it, whatever the context is by then)
let keys = new Set(); // the keys the pad holds in input.js right now
let wasPlaying = false;
let focus = null;
let focusRoot = null;
let focusSig = "";
let moved = false;
let rootSince = 0;
let rootFromPlay = false;
let aFree = true;
let navDir = null;
let navAt = 0;
let inUse = false;
let presses = 0;
let rumbles = 0;
let lastError = null;
let feel = null; // last frame's { shield, mega, foot }
let started = false;
let missing = 0; // frames in a row with no pad listed
const UNPLUG_FRAMES = 3;

const note = (err) => {
  const m = String((err && err.message) || err);
  if (m !== lastError) console.warn("[pad]", m);
  lastError = m;
};

// a key or a click = the keyboard is back in his hands: the hints and the rumble follow the device, not the plug
const handBack = () => {
  if (!inUse) return;
  inUse = false;
  opts.onDevice(false);
};
addEventListener("keydown", handBack, { passive: true });
addEventListener("mousedown", handBack, { passive: true });
const handOn = () => {
  if (inUse) return;
  inUse = true;
  opts.onDevice(true);
};

function firstPad() {
  let list = [];
  try {
    list = navigator.getGamepads ? [...navigator.getGamepads()] : [];
  } catch (err) {
    note(err);
  }
  return list.find((p) => p && p.connected) || null;
}

/** Make input.js hold exactly `next`: a key the pad newly holds is a fresh press (its `pressed` edge fires once); a key it
 *  still holds - or one in `quiet` - is held without an edge (a window blur clears held keys, and a pad has no key repeat). */
function apply(next, quiet = null) {
  for (const k of keys) if (!next.has(k)) input.release(k);
  for (const k of next) {
    if (keys.has(k) || quiet?.has(k)) input.hold(k);
    else input.press(k);
  }
  keys = next;
}

/** Let go of everything (unplugged, paused, a card): nothing keeps boosting or firing on its own. */
function releaseAll() {
  apply(new Set());
  downAs = {};
  dirs = null;
}

function rumble(strong, weak, ms) {
  const act = gp && gp.vibrationActuator;
  if (!act || !act.playEffect || !inUse) return; // a pad on the desk while he plays on the keys stays still
  rumbles++;
  try {
    const r = act.playEffect("dual-rumble", { startDelay: 0, duration: ms, strongMagnitude: strong, weakMagnitude: weak });
    if (r && r.catch) r.catch(note);
  } catch (err) {
    note(err);
  }
}

/** Rumble from what the game did this frame: a hit, the MEGA blast going off, touching down in FIGHT MODE. */
function feelFrame() {
  const now = opts.status();
  if (now && feel) {
    if (now.shield < feel.shield) rumble(0.7, 0.45, 180);
    if (now.mega && !feel.mega) rumble(1, 0.7, 480);
    if (now.foot && !feel.foot) rumble(0.55, 0.3, 150);
  }
  feel = now;
}

// held straight through a card or PAUSED: the trigger / brake / stick carry on - quietly (review 11-02: a stick held through a
// pause came back as a fresh tap = half a double-tap barrel roll; RT held through a resume stayed dead until re-pulled).
// A / B / X / Y are never carried: an A still down from mashing a card must not boost, it has to come up first.
const CARRY = ["rt", "lt"];

function play(s, e, entering) {
  const foot = opts.onFoot();
  for (const n of e.up) delete downAs[n];
  for (const n of e.down) {
    if (n === "menu") {
      presses++;
      opts.togglePause();
      continue;
    }
    const k = padKey(n, foot);
    if (!k) continue;
    downAs[n] = k;
    presses++;
  }
  let quiet = null;
  if (entering) {
    quiet = new Set();
    for (const n of CARRY) {
      const k = s.held[n] && !e.down.includes(n) ? padKey(n, foot) : null;
      if (!k) continue;
      downAs[n] = k;
      quiet.add(k);
    }
  }
  dirs = stickDirs(dirs, s.lx, s.ly, s.held);
  if (entering) for (const code of heldKeys({}, dirs)) quiet.add(code);
  apply(heldKeys(downAs, dirs), quiet);
  feelFrame();
}

// ---- the menus: walk the visible buttons ----
function visible(el) {
  return el.getClientRects().length > 0 && getComputedStyle(el).visibility !== "hidden";
}

function targets() {
  const root = ROOTS.map((q) => document.querySelector(q)).find((el) => el && !el.hidden && visible(el)) || null;
  if (!root) return { root, list: [] };
  const list = [...root.querySelectorAll(TARGETS)].filter((el) => !el.disabled && visible(el));
  return { root, list };
}

const centre = (el) => {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};

function setFocus(el) {
  if (focus === el) return;
  if (focus) focus.classList.remove("padfocus");
  focus = el;
  if (!el) return;
  el.classList.add("padfocus");
  try {
    el.focus({ preventScroll: true });
    el.scrollIntoView({ block: "nearest", inline: "nearest" });
  } catch (err) {
    note(err);
  }
}

function menu(s, e, now) {
  const { root, list } = targets();
  if (!root || !list.length) {
    setFocus(null);
    focusRoot = null;
    return;
  }
  // #card is ONE element whose insides get swapped (home -> RING RACES -> the garage -> BACK): a new set of buttons is a new
  // screen too, or an A still down from the last one lands on the new one's BACK (review 11-02)
  // ids + tags only: a button's own words changing (BUY -> OWNED in the garage) is the same screen
  const sig = `${root.id}|${list.length}|${list.slice(0, 6).map((el) => el.id || el.tagName).join(",")}`;
  if (root !== focusRoot || sig !== focusSig) {
    rootFromPlay = root !== focusRoot ? wasPlaying : false;
    focusRoot = root;
    focusSig = sig;
    moved = false;
    rootSince = now;
    aFree = !s.held.a;
  }
  // a card that came up out of play (dead, level done, PAUSED) while he was mashing A: no A for a beat, and A has to come up
  // once first - the Sovereign lesson (an A tap 250 ms after its end card started a new run). B / MENU are never held back.
  if (!s.held.a) aFree = true;
  const grace = rootFromPlay && now - rootSince < PAD.cardGrace * 1000;
  // until he walks it himself, keep to the screen's own pick: the button the card focused (Enter's button) unless that is BACK,
  // else the main one, else the first that isn't BACK
  if (!moved || !list.includes(focus)) {
    const isBack = (el) => BACK_WORDS.test(el.textContent.trim());
    const own = list.includes(document.activeElement) && !isBack(document.activeElement) ? document.activeElement : null;
    setFocus(own || root.querySelector("#card-go, #btn-resume") || list.find((el) => !isBack(el)) || list[0]);
  }
  const dir = menuDir(s);
  if (!dir) navDir = null;
  else if (dir !== navDir || now - navAt > PAD.navRepeat * 1000) {
    navDir = dir;
    navAt = now;
    moved = true;
    const others = list.filter((el) => el !== focus);
    const i = navPick(centre(focus), others.map(centre), dir);
    if (i >= 0) setFocus(others[i]);
  }
  const paused = root.id === "pause";
  if (e.down.includes("a") && aFree && !grace && focus) {
    presses++;
    focus.click();
  } else if (e.down.includes("b") || (e.down.includes("menu") && paused)) {
    presses++;
    if (paused) opts.togglePause();
    else list.find((el) => BACK_WORDS.test(el.textContent.trim()))?.click();
  }
}

function frame(now) {
  requestAnimationFrame(frame);
  try {
    const p = firstPad();
    if (!p && gp) missing++;
    if (p) missing = 0;
    // a browser may stop listing pads while the window is in the background: that is not an unplug - only a few frames with
    // no pad while the page is in front is (review 11-02). In the background, just let go of the keys.
    const front = document.visibilityState === "visible" && document.hasFocus();
    if (!p && gp && !front) {
      if (keys.size) releaseAll();
      wasPlaying = false; // back in front, the next play frame is an 'entering' one: a trigger still held carries on quietly
      return;
    }
    if (!p) {
      if (gp && missing >= UNPLUG_FRAMES) { // unplugged: let go of everything; mid-flight that is a pause, like a console
        const playing = opts.isPlaying();
        gp = null;
        releaseAll();
        prev = null;
        setFocus(null);
        if (playing) opts.togglePause();
        inUse = false;
        opts.onDevice(false);
        opts.onConnect(false, "");
      }
      return;
    }
    const fresh = !gp;
    gp = p;
    if (fresh) opts.onConnect(true, p.id || "");
    const s = readPad(p);
    if (!s) return;
    const e = padEdges(prev && prev.held, s.held);
    if (e.down.length || Math.hypot(s.lx, s.ly) > PAD.stickOn) {
      handOn();
      if (e.down.length) opts.unlockAudio();
    }
    const playing = opts.isPlaying();
    if (playing) {
      if (!wasPlaying) { // the next card / PAUSED is a fresh screen: its A grace applies again (Unerased review 11-02: only the first did)
        setFocus(null);
        focusRoot = null;
        focusSig = "";
      }
      play(s, e, !wasPlaying);
    } else {
      if (wasPlaying || keys.size) releaseAll();
      feel = null;
      menu(s, e, now);
    }
    wasPlaying = playing;
    prev = s;
  } catch (err) {
    note(err);
  }
}

export const pad = {
  /** main.js wires the game in and starts the loop (once). */
  configure(o) {
    opts = { ...opts, ...o };
    if (started) return;
    started = true;
    requestAnimationFrame(frame);
  },
  rumble,
  /** The pad is plugged in AND the device in his hands (since its last press, until a key or a click). */
  get active() {
    return Boolean(gp) && inUse;
  },
  get state() {
    return {
      active: Boolean(gp) && inUse, plugged: Boolean(gp), id: gp ? gp.id : "", standard: gp ? gp.mapping === "standard" : false,
      keys: [...keys], presses, rumbles, lastError,
      focus: focus ? focus.id || focus.textContent.trim().slice(0, 24) : null,
    };
  },
};

Object.defineProperty(window, "__qm85pad", { get: () => pad.state, configurable: true });
