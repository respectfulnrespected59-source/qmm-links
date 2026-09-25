// QMM soundtrack. Home screen: SLAP IN THE SADDLE (owner 09-23). In play: the QM 3D RACING songs,
// shuffled (owner 09-23: same songs as QM3D Racing, never the retired remix beats).
// M = mute all · N = step music volume · settings remembered per browser.
import { setSfxMuted } from "./audio.js";

const MENU = { file: "slap_in_the_saddle.mp3", title: "SLAP IN THE SADDLE" };
const TRACKS = [
  { file: "t01_supasilky.mp3", title: "SUPA SILKY" },
  { file: "t04_scfl.mp3", title: "SCFL" },
  { file: "t06_heat_rock_caravan.mp3", title: "HEAT ROCK CARAVAN" },
  { file: "t08_slap_jazz_rodeo.mp3", title: "SLAP JAZZ RODEO" },
  { file: "t15_the_lion_rises.mp3", title: "THE LION RISES" },
  { file: "t16_battle_of_kirina.mp3", title: "BATTLE OF KIRINA" },
  { file: "t18_buffalo_woman_rising.mp3", title: "BUFFALO WOMAN RISING" },
  // owner 09-24: "add them all" — the Oakland / Bay beats from the archive, level-matched to the racing set
  { file: "t20_oakland_aftershock.mp3", title: "OAKLAND AFTERSHOCK" },
  { file: "t21_bay_drums_battle_flutes.mp3", title: "BAY DRUMS & BATTLE FLUTES" },
  { file: "t22_bay_breeze_body_drop.mp3", title: "BAY BREEZE BODY DROP" },
  { file: "t23_oakland_gold_run.mp3", title: "OAKLAND GOLD RUN" },
  { file: "t24_desert_siege_freestyle.mp3", title: "DESERT SIEGE FREESTYLE" },
  { file: "t25_soulful_slapper_east.mp3", title: "SOULFUL SLAPPER FROM THE EAST" },
  { file: "t26_pyramid_corners.mp3", title: "PYRAMID CORNERS" },
  { file: "t27_rain_on_73rd.mp3", title: "RAIN ON 73RD" },
  { file: "t28_summer_heat.mp3", title: "SUMMER HEAT" },
  { file: "t29_concrete_fist.mp3", title: "CONCRETE FIST" },
  { file: "t30_resonant_strike_1.mp3", title: "RESONANT STRIKE I" },
  { file: "t31_resonant_strike_2.mp3", title: "RESONANT STRIKE II" },
  { file: "t32_resonant_strike_3.mp3", title: "RESONANT STRIKE III" },
  { file: "t33_ring_of_bone_1.mp3", title: "RING OF BONE I" },
  { file: "t34_ring_of_bone_2.mp3", title: "RING OF BONE II" },
];
export const VOLUME_STEPS = [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1];
const DEFAULT_STEP = 3;

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback; // private window / blocked storage: defaults are fine
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // not persisting is harmless
  }
}

const el = new Audio();
el.preload = "auto";
let step = Math.min(VOLUME_STEPS.length - 1, Math.max(0, Number(load("qm85_music_step", DEFAULT_STEP)) || 0));
let muted = Boolean(load("qm85_muted", false));
let order = [];
let mode = "off"; // off | menu | game
let onTrack = () => {};

let feed = null; // clip recording: { gain, stream, src, track } — the soundtrack mixed into audio.js clipTap()

function apply() {
  el.volume = VOLUME_STEPS[step];
  el.muted = muted;
  setSfxMuted(muted);
  if (feed) feed.gain.gain.value = muted ? 0 : VOLUME_STEPS[step]; // a captured stream ignores el.volume
}

/** (Re)bind the capture's current audio track: a new song swaps the stream's tracks. */
function bindFeed() {
  const track = feed?.stream.getAudioTracks().find((t) => t.readyState === "live");
  if (!track || feed.track === track) return;
  feed.src?.disconnect();
  feed.src = feed.gain.context.createMediaStreamSource(new MediaStream([track]));
  feed.src.connect(feed.gain);
  feed.track = track;
}

function shuffled() {
  const a = TRACKS.map((_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function start(track, loop) {
  el.src = `assets/music/${track.file}`;
  el.loop = loop;
  el.dataset.title = track.title;
  el.play().then(() => onTrack(track.title)).catch(() => {
    // autoplay is blocked until the first click/key — unlock() retries on that gesture
  });
}

function nextGameTrack() {
  if (!order.length) order = shuffled();
  start(TRACKS[order.shift()], false);
}

el.addEventListener("ended", () => {
  if (mode === "game") nextGameTrack();
});

export const music = {
  get muted() {
    return muted;
  },
  get level() {
    return step / (VOLUME_STEPS.length - 1);
  },
  get title() {
    return el.dataset.title ?? "";
  },
  onTrackChange(fn) {
    onTrack = fn;
  },
  menu() {
    if (mode === "menu") return;
    mode = "menu";
    start(MENU, true);
  },
  game() {
    if (mode === "game") return;
    mode = "game";
    nextGameTrack();
  },
  /** Browsers block audio until a gesture; call on the first click/key to start what should be playing. */
  unlock() {
    if (el.paused && mode !== "off") el.play().then(() => onTrack(this.title)).catch(() => {});
  },
  pause(paused) {
    if (paused) el.pause();
    else el.play().catch(() => {});
  },
  toggleMute() {
    muted = !muted;
    save("qm85_muted", muted);
    apply();
    return muted;
  },
  stepVolume() {
    step = (step + 1) % VOLUME_STEPS.length;
    save("qm85_music_step", step);
    if (muted && step > 0) this.toggleMute();
    apply();
    return this.level;
  },
  /** Mix the soundtrack into a clip recording (tap = audio.js clipTap()). Browsers without element capture
   *  (Firefox, Safari) record the game sounds only. */
  feedClip(tap) {
    if (feed || typeof el.captureStream !== "function") return;
    try {
      const gain = tap.ctx.createGain();
      gain.connect(tap.input);
      feed = { gain, stream: el.captureStream(), src: null, track: null };
      feed.stream.addEventListener("addtrack", bindFeed);
      bindFeed();
      apply();
    } catch (err) {
      console.warn("[music] clip capture unavailable:", err?.message ?? err);
      feed = null;
    }
  },
};

apply();
