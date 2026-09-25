// QM85: QUANTUM RUN — game flow. Menu → OAKLAND MISSION (fly + FIGHT MODE) or CYBERSPACE BATTLE.
// Story mode was retired by the owner 09-24 ("git rid of story mode all together").
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { createFilmPass } from "./cinematic.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";
import { loadAssets } from "./assets.js";
import { input } from "./input.js";
import { sfx, clipTap } from "./audio.js";
import { FlightBattle } from "./flight.js";
import { hud } from "./hud.js";
import { touch } from "./touch.js";
import { tutorial } from "./tutorial.js";
import { music } from "./music.js";
import { loadCheckpoint, clearCheckpoint } from "./oakland-day.js";
import { battleBodyUnlocked, chosenSkin, chooseSkin } from "./battle-body.js";
import { Minimap } from "./minimap.js";
import { garage, openGarage } from "./garage.js";
import { COURSES } from "./race-courses.js";
import { loadBests, fmtTime } from "./race.js";
import { SpeedLines } from "./speed-fx.js";
import { ClipRecorder } from "./clip.js";
import { boardSection, boardList, clipSection } from "./share-card.js";

const BOSS_LINES = {
  "THE OVERSEER": "THE EYE THAT RUNS THE DRONES · HE'S TAKEN THE BAY BRIDGE",
  "THE SERPENT PRIEST": "HE CAME FOR THE BATTLE BODY · ON THE TRIBUNE TOWER — BREAK HIS PYLONS",
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, touch.enabled ? 1.5 : 2)); // phones: DPR 3 at full res would crawl
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap; // PCFSoft cost ~half the frame rate on the integrated GPU; PCF + radius is close enough
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.getElementById("stage").appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.01, 300);
scene.add(camera);
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.7, 0.5, 0.82);
composer.addPass(bloom);
const film = createFilmPass();
composer.addPass(new OutputPass());
composer.addPass(film); // grain + grade on the final, tone-mapped image
const fxaa = new ShaderPass(FXAAShader); // smooths the jaggies left by the reduced-resolution render (integrated GPU)
composer.addPass(fxaa);
function sizeFxaa() {
  const r = renderer.getPixelRatio();
  fxaa.material.uniforms.resolution.value.set(1 / (innerWidth * r), 1 / (innerHeight * r));
}
sizeFxaa();
const pmrem = new THREE.PMREMGenerator(renderer);
let envTarget = null; // the PMREM render target behind scene.environment — a new one per sky change: free the last
function setEnvironment(target) {
  envTarget?.dispose();
  envTarget = target;
  scene.environment = target?.texture ?? null;
}
// SHARE-YOUR-RUN CLIPS (09-25): the 3D view + game sound + soundtrack. Races record themselves; K anywhere.
const clip = new ClipRecorder(renderer.domElement, () => {
  const tap = clipTap();
  music.feedClip(tap);
  return [tap.stream];
});
clip.onAutoStop = (blob) => {
  ClipRecorder.save(blob, ClipRecorder.filename(game.race ?? game.zone, blob.type));
  hud.toast("CLIP SAVED — 3 MINUTES IS THE MAX");
};
const recEl = document.getElementById("rec");

addEventListener("resize", () => {
  if (clip.active) finishClip("CLIP SAVED — THE WINDOW CHANGED SIZE"); // a size change mid-clip would corrupt the MP4
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  sizeFxaa();
});

const speedLines = new SpeedLines(camera); // 09-25 SPEED FEEL
const minimapEl = document.getElementById("minimap");
const minimap = new Minimap(minimapEl);

const game = {
  mode: "loading", // loading | card | flight
  zone: "oakland",
  flight: null,
  paused: false,
};
window.__qm85 = game; // handle for automated playtests
game.gl = { renderer, composer, bloom, film, fxaa, scene, camera, sizeFxaa }; // perf probes toggle passes and read renderer.info

function clearScene() {
  camera.up.set(0, 1, 0); // flight loops roll the camera; every other mode expects world-up
  bloom.enabled = true;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  composer.setPixelRatio(Math.min(devicePixelRatio, 2));
  sizeFxaa();
  renderer.toneMappingExposure = 1;
  film.uniforms.grade.value = 1;
  film.uniforms.realistic.value = 0;
  game.paused = false;
  hud.paused(false);
  camera.far = 300;
  camera.near = 0.01;
  film.enabled = false;
  setEnvironment(null);
  camera.fov = 60;
  camera.updateProjectionMatrix();
  game.flight?.dispose(scene);
  game.flight = null;
  scene.fog = null;
  minimapEl.hidden = true;
  clip.discard(); // a level torn down mid-recording: nothing worth keeping (end cards stop their clip first)
}

/** RING RACE finish card: time, medal, record, credits (a medal pays like a good run). */
const MEDAL_PAY = { GOLD: 1500, SILVER: 1000, BRONZE: 600 };
function raceFinished(r) {
  game.mode = "card";
  const course = COURSES.find((c) => c.id === r.course);
  const gained = garage.earn(MEDAL_PAY[r.medal] ?? 300);
  const medal = r.medal ? `${r.medal} MEDAL` : `NO MEDAL — BEAT ${fmtTime(r.medals.bronze)} FOR BRONZE`;
  const best = r.record ? (r.prev ? `NEW RECORD — ${(r.prev - r.time).toFixed(2)}s faster than your old best.` : "FIRST TIME ON THE BOARD.") : `Your best: ${fmtTime(r.prev)}.`;
  hud.card(`${fmtTime(r.time)} · ${medal}`, `${course?.name ?? "RACE"} — ${best} Gold ${fmtTime(r.medals.gold)} · Silver ${fmtTime(r.medals.silver)} · Bronze ${fmtTime(r.medals.bronze)}. +${gained} CREDITS for the garage.`,
    "RACE AGAIN", () => startFlight("oakland", null, r.course), { label: "MAIN MENU", onClick: toMenu });
  const name = course?.name ?? "RACE";
  document.querySelector("#card p")?.after(
    boardSection(r.course, { time: r.time, pilot: flownPilot() }, `${name} BOARD`),
    clipSection(clip.active ? clip.stop() : Promise.resolve(null), r.course, `${fmtTime(r.time)} on ${name} — QM85: QUANTUM RUN`),
  );
  game.lastRace = r;
}

/** The battle-body line for whoever earned it (each bot flies its own mission). */
const SUITED = {
  qm85: "QM85 doesn't flicker out anymore.",
  bizzle: "3BIZZLE's battle body is locked in — the Destroyer of Injustices, fully armoured.",
  vltrn8: "VLTRN8's battle body is locked in — the Majestic Healer, fully armoured.",
};

/** Who actually flew this run (the home toggle can change after). */
function flownPilot() {
  return game.flight?.pilotKey ?? chosenPilot();
}

/** Mission end cards: the run on the zone's board, and the clip if K was rolling. */
function endExtras(score) {
  const p = document.querySelector("#card p");
  if (!p) return;
  const extras = score > 0 ? [boardSection(game.zone, { score, pilot: flownPilot() }, game.zone === "oakland" ? "OAKLAND BOARD" : "HIGH SCORES")] : [];
  if (clip.active) extras.push(clipSection(clip.stop(), game.zone, `Score ${score} — QM85: QUANTUM RUN`));
  p.after(...extras);
}

/** Home → RING RACES: pick a course (your best time on each). */
function racePicker(back) {
  const card = document.getElementById("card");
  card.className = "garage races";
  card.replaceChildren();
  const h = document.createElement("h2");
  h.textContent = "RING RACES";
  const sub = document.createElement("p");
  sub.className = "garage-said";
  sub.textContent = "Time trials on real Oakland. Fly the gold gates in order — boost is your fuel, every gate tops it up.";
  const grid = document.createElement("div");
  grid.className = "garage-grid";
  const bests = loadBests();
  for (const c of COURSES) {
    const tile = document.createElement("div");
    tile.className = "tile";
    const name = document.createElement("b");
    name.textContent = c.name;
    const blurb = document.createElement("small");
    blurb.textContent = c.blurb;
    const best = document.createElement("small");
    best.className = "next";
    best.textContent = bests[c.id] ? `YOUR BEST ${fmtTime(bests[c.id].time)}` : "NO TIME YET";
    const go = document.createElement("button");
    go.type = "button";
    go.className = "buy";
    go.dataset.course = c.id;
    go.textContent = "RACE";
    go.addEventListener("click", () => {
      card.hidden = true;
      sfx.unlock();
      startFlight("oakland", null, c.id);
    });
    tile.append(name, blurb, best, boardList(c.id, null, 3), go);
    grid.append(tile);
  }
  const backBtn = document.createElement("button");
  backBtn.type = "button";
  backBtn.textContent = "BACK";
  backBtn.addEventListener("click", () => back());
  card.append(h, sub, grid, backBtn);
  card.hidden = false;
  backBtn.focus();
}

/** THE GARAGE: bank the run's score as credits; the end card says how many. */
function creditLine(score) {
  const gained = garage.earn(score);
  return ` +${gained} CREDITS banked (${garage.state.credits} total) — spend them in the GARAGE on the home screen.`;
}

/** FREE OAKLAND line for the end cards. */
function freedLine(f) {
  const d = f?.districts;
  return d ? ` Oakland freed: ${d.freed}/${d.total}.` : "";
}

// ------------------------------------------------------------ sound + pause
const PLAY_MODES = new Set(["flight"]);

function togglePause() {
  if (!PLAY_MODES.has(game.mode)) return;
  game.paused = !game.paused;
  music.pause(game.paused);
  clip.pause(game.paused);
  if (game.paused) { // the frame loop stops; hush the thrusters and the rain too
    sfx.engine.set({ on: false });
    sfx.rain.set(0);
  }
  hud.paused(game.paused);
}

function toggleMute() {
  music.toggleMute();
  hud.sound(music.muted, music.level);
}

function stepVolume() {
  music.stepVolume();
  hud.sound(music.muted, music.level);
}

addEventListener("keydown", (e) => {
  if (e.code === "KeyP" || e.code === "Escape") togglePause();
  if (e.code === "KeyM") toggleMute();
  if (e.code === "KeyN") stepVolume();
  if (e.code === "KeyK") toggleClip();
});

/** Stop the clip and save it (a download). */
function finishClip(message) {
  clip.stop().then((blob) => blob && ClipRecorder.save(blob, ClipRecorder.filename(game.race ?? game.zone, blob.type)));
  hud.toast(message);
}

/** K: start / stop a clip anywhere in a flight — stopping saves it. */
function toggleClip() {
  if (!PLAY_MODES.has(game.mode) || game.paused) return;
  if (clip.active) {
    finishClip("CLIP SAVED");
    return;
  }
  hud.toast(clip.start() ? "RECORDING — PRESS K TO STOP AND SAVE" : "THIS BROWSER CAN'T RECORD CLIPS");
}
for (const ev of ["pointerdown", "keydown"]) addEventListener(ev, () => music.unlock());
// Back to the title screen from anywhere: a clean reload drops every level, sound and timer at once.
const toMenu = () => location.assign(location.pathname);
hud.controls({ onPause: togglePause, onMute: toggleMute, onVolume: stepVolume, onMenu: toMenu });
hud.sound(music.muted, music.level);
music.onTrackChange((title) => hud.nowPlaying(title));

// ------------------------------------------------------------ stages
/** The level's city/sky finished loading: minimap, reflections, haze. A module-level function (not a closure in
 *  startFlight) so startFlight's scope never holds `flight` — every card callback made there shares that scope, and
 *  a leftover callback used to keep the whole previous level alive (09-25 heap snapshot). */
function arenaReady(flight) {
  if (game.flight !== flight) return;
  if (flight.districts) { // FREE OAKLAND map (the districts were built in the flight's own ready handler, first)
    minimap.bake(flight.arena);
    minimapEl.hidden = false;
  }
  if (flight.arena.envScene) { // realistic zone: reflections from the physical sky, Bay haze
    setEnvironment(pmrem.fromScene(flight.arena.envScene));
    scene.fog = new THREE.FogExp2(flight.arena.haze, flight.arena.fogDensity);
    scene.background = flight.arena.haze;
    hud.credit(flight.arena.attribution);
    return;
  }
  if (!flight.arena.skyTexture) return;
  const sky = flight.arena.skyTexture.clone();
  sky.mapping = THREE.EquirectangularReflectionMapping;
  sky.needsUpdate = true;
  setEnvironment(pmrem.fromEquirectangular(sky)); // QM85's armor reflects the city
  sky.dispose(); // the clone was only the PMREM input
  hud.credit(flight.arena.attribution ?? "");
  scene.fog = new THREE.FogExp2(flight.arena.haze, flight.arena.fogDensity);
  scene.background = flight.arena.haze;
}

/** race: a RING RACE course id (09-25) — a time trial on the real map. */
function startFlight(zone = game.zone, resume = null, race = null) {
  game.zone = zone;
  game.race = race;
  clearScene();
  music.game();
  bloom.strength = 0.8;
  camera.fov = 70;
  camera.far = zone === "oakland" ? 30000 : 1500; // Oakland: the Golden Gate is ~14 km out
  camera.near = zone === "oakland" ? 0.25 : 0.01; // 30 km / 0.01 m wrecked depth precision: flat layers flickered at range
  camera.updateProjectionMatrix();
  game.flight = new FlightBattle(scene, camera, {
    onPower: ({ level, source }) => hud.toast(`BLASTER LV${level}${source === "box" ? " — BLASTER BOX" : ""}`),
    onWave: (n, names) => hud.toast(`WAVE ${n} — ${names}`),
    onBoss: (name) => hud.bossIntro(name, BOSS_LINES[name] ?? "HAS RISEN"),
    onBossDown: (name) => hud.toast(`${name} DESTROYED`),
    onEnrage: (name) => {
      hud.hitFlash(true);
      hud.toast(`${name} IS ENRAGED — HE CALLED HIS BOTS IN`);
    },
    onHit: () => hud.hitFlash(),
    onMove(kind) {
      tutorial.note(kind);
      if (kind === "perfect") hud.toast("PERFECT — POWER THRUST");
      if (kind === "strike") hud.toast("COSMIC PLASMA STRIKE");
      if (kind === "hyper") hud.toast("HYPER LOOP — PICK A DIRECTION");
      if (kind === "hyperBlast") hud.toast("BLAST OFF");
    },
    onMega: (kills) => hud.toast(kills ? `MEGA BLAST — ${kills} DOWN` : "MEGA BLAST"),
    warn: (text) => hud.toast(text),
    onThrust: (lv) => hud.toast(lv === 3 ? "THRUSTERS LV3 — BOOST ON A FULL BAR FOR STEALTH MODE" : `THRUSTERS LV${lv}`),
    onStealth: (on) => on && hud.toast("STEALTH MODE"),
    onPhase(name, clock, jumped) {
      const words = { DAWN: "DAWN: THEY ARE STILL WAKING UP", NOON: "NOON: THE HEAT IS ON, MORE TRAFFIC", AFTERNOON: "AFTERNOON: SOMETHING BIG IS COMING", DUSK: "DUSK: GET READY", NIGHT: "NIGHT MODE: THE REAL BOSS IS HERE" };
      hud.toast(`${clock} · ${words[name] ?? name}`);
      const flight = game.flight;
      if (flight?.arena.envScene && !jumped) setEnvironment(pmrem.fromScene(flight.arena.envScene)); // reflections follow the sky
    },
    onCheckpoint: (cp) => setTimeout(() => hud.toast(`CHECKPOINT: ${cp.phase}`), 2600),
    onComms: (label, text, meta) => { // COPILOTS: the two bots you are NOT flying, on the feeds (comms.js)
      hud.comms(label, text, meta);
      sfx.comm();
    },
    onHunt(kind, d = {}) { // PALANTÍR HUNTERS
      if (kind === "spotted") hud.toast(`SPOTTED OVER ${d.name} — KILL THAT SCOUT BEFORE BACKUP ARRIVES`);
      if (kind === "backup") hud.toast("BACKUP ARRIVED — SHADOW OPS INBOUND");
      if (kind === "called") hud.toast("SCOUT DOWN — NO BACKUP");
    },
    onDistrict(kind, d = {}) { // FREE OAKLAND (09-25)
      if (kind === "enter") {
        if (d.state === "occupied") hud.toast(`${d.name} — OCCUPIED · FIND THE RELAY`);
        else if (d.state === "free") hud.toast(`${d.name} — FREE · SHIELDS RECHARGE HERE`);
        else hud.toast("QMM TURF — SHIELDS RECHARGE HERE");
      }
      if (kind === "wake") hud.toast(`${d.name} RELAY IS AWAKE — ${d.guards} GUARDS SCRAMBLING`);
      if (kind === "shield") hud.toast(`${d.name} RELAY SHIELD IS DOWN — TAKE IT OUT`);
      if (kind === "freed") hud.banner(`${d.name} IS FREE`, `OAKLAND ${d.freed}/${d.total} · ${d.items === 1 ? "ITS STASH" : "BOTH ITEMS"} DROPPED AT THE RELAY — LAND AND GRAB`);
    },
    onMode: (mode) => hud.toast(mode === "fight" ? "FIGHT MODE" : "FLIGHT MODE"),
    onMission(kind, data = {}) {
      if (kind === "pickup") hud.toast(`${data.kind === "data" ? "DATA DRIVE" : "BATTLE PART"} SECURED — CARRYING ${data.n}/3`);
      if (kind === "full") hud.toast("HANDS FULL — GET THESE TO THE WAREHOUSE");
      if (kind === "deliver") hud.toast(`DELIVERED — BATTLE BODY ${Math.round(data.progress * 100)}% · THEY'RE COMING FOR YOU`);
      if (kind === "finale") hud.toast("BATTLE BODY — ASSEMBLING");
      if (kind === "complete") { // after the warehouse cutscene: fight the rest of the night IN the battle body
        game.mode = "card";
        hud.card("BATTLE BODY ONLINE", `Every data drive and battle part is inside the QMM Warehouse. Rob and Mahal bolt the last plate on — ${SUITED[flownPilot()] ?? SUITED.qm85} Blasters maxed, shield full. Score: ${data.score}. The Serpent Priest is still out there. Unlocked: the BATTLE BODY skin on the home screen.`, "FINISH THE NIGHT", () => {
          game.mode = "flight";
          hud.show("flight", "OAKLAND MISSION — BATTLE BODY");
        });
      }
    },
    onWin(score) {
      game.mode = "card";
      const credits = creditLine(score);
      if (zone === "oakland") clearCheckpoint(); // a finished run starts fresh next time
      hud.card("SKY CLEARED", zone === "oakland"
        ? `Night over Oakland: the Serpent Priest is scrap on the Broadway asphalt, the Overseer before him. Rob and Mahal watch the sun come up from the warehouse roof. Score: ${score}.${freedLine(game.flight)}${credits}`
        : `The Serpent Priest is down, the Palantír bots are blind, the viruses purged: QM85 world safe, ours too. Score: ${score}.${credits}`, "FLY AGAIN", () => startFlight());
      endExtras(score);
    },
    onRace(kind, d = {}) { // RING RACES
      if (kind === "go") {
        hud.toast("GO!");
        if (!clip.active) clip.start(); // every race is on video from GO to the line
      }
      if (kind === "gate") hud.toast(d.split === null ? `GATE ${d.i}/${d.total}` : `GATE ${d.i}/${d.total} · ${d.split <= 0 ? "−" : "+"}${Math.abs(d.split).toFixed(2)}s vs BEST`);
      if (kind === "finish") raceFinished(d);
    },
    onDeath(score) {
      game.mode = "card";
      if (game.race) { // a race wipeout is a crash, not a shoot-down
        clip.discard(); // nobody wants the crash on video
        hud.card("WIPEOUT", "Clipped the city at full thrust. The gates are still out there.", "RACE AGAIN", () => startFlight("oakland", null, game.race), { label: "MAIN MENU", onClick: toMenu });
        return;
      }
      const credits = creditLine(score);
      const cp = zone === "oakland" ? loadCheckpoint() : null;
      if (cp) { // continue from the last time-of-day checkpoint (owner: "time of day check points")
        hud.card("SHOT DOWN", `The invaders got a lock on him. Score: ${score}. Checkpoint: ${cp.phase}, battle body ${cp.delivered.data + cp.delivered.part}/10, Oakland freed ${cp.freed?.length ?? 0}/6, thrusters LV${cp.thrust}, blaster LV${cp.blaster}.${credits}`,
          `CONTINUE FROM ${cp.phase}`, () => startFlight("oakland", cp), { label: "RESTART AT DAWN", onClick: () => { clearCheckpoint(); startFlight("oakland"); } });
        endExtras(score);
        return;
      }
      hud.card("SHOT DOWN", `The invaders got a lock on him. Score: ${score}. Small, yes. Harmless, no. Run it back.${credits}`, "FLY AGAIN", () => startFlight());
      endExtras(score);
    },
  }, zone, { resume, skin: chosenSkin(), loadout: garage.loadout(), race, wingmate: !race, pilot: chosenPilot() });
  scene.background = game.flight.background;
  scene.fog = game.flight.fog;
  film.enabled = true;
  const flight = game.flight;
  film.uniforms.grade.value = flight.arena.grade ?? 1;
  film.uniforms.realistic.value = flight.arena.realistic ?? 0; // Oakland: filmic contrast, warm highs, cool lows
  if (flight.arena.bloom !== undefined) bloom.strength = flight.arena.bloom;
  bloom.enabled = bloom.strength > 0;
  renderer.toneMappingExposure = flight.arena.exposure ?? 1;
  const ratio = Math.min(devicePixelRatio, flight.arena.pixelRatio ?? 2);
  renderer.setPixelRatio(ratio);
  composer.setPixelRatio(ratio);
  sizeFxaa();
  flight.arena.ready.then(arenaReady.bind(null, flight)); // bind, not an arrow: see arenaReady
  const course = race && COURSES.find((c) => c.id === race);
  hud.show("flight", course ? `RING RACE — ${course.name}` : zone === "oakland" ? "OAKLAND MISSION" : "FLIGHT BATTLE — CYBERSPACE");
  game.mode = "flight";
  if (!race) tutorial.start(zone, game.tutorialForced, game.flight.pilotKey); // first flight ever, or the home screen's TUTORIAL button
  game.tutorialForced = false;
}

/** What the gold arrow points at, and its name: { pos, label } or null. */
function waypointTarget(f) {
  const gate = f.race?.waypoint();
  if (gate) return { pos: gate, label: "NEXT GATE" };
  const boss = f.arenas?.waypoint(f.pos);
  if (boss) return { pos: boss, label: f.boss === f.arenas.priest && f.boss.shielded ? "RUNE PYLON" : f.boss?.name ?? "BOSS" };
  return f.mission?.target() ?? null;
}

/** World point -> screen pixels; `behind` when it is behind the camera. */
function toScreen(p) {
  const v = p.clone().project(camera);
  return { x: (v.x * 0.5 + 0.5) * innerWidth, y: (-v.y * 0.5 + 0.5) * innerHeight, behind: v.z > 1, ndc: v };
}

/** Screen position for a world point: on screen, or clamped to the edge with an angle. */
function screenMark(p) {
  const s = toScreen(p);
  const onScreen = !s.behind && Math.abs(s.ndc.x) < 0.95 && Math.abs(s.ndc.y) < 0.95;
  if (onScreen) return { onScreen, x: s.x, y: s.y };
  let dx = s.ndc.x;
  let dy = -s.ndc.y;
  if (s.behind) {
    dx = -dx;
    dy = -dy;
  }
  const angle = Math.atan2(dy, dx);
  return { onScreen: false, angle, x: innerWidth / 2 + Math.cos(angle) * (innerWidth / 2 - 40), y: innerHeight / 2 + Math.sin(angle) * (innerHeight / 2 - 40) };
}

function flightHud() {
  const f = game.flight;
  const stats = f.stats;
  hud.flight(stats);
  hud.bossBar(stats.bossBar);
  for (const p of f.popups.splice(0)) { // +SCORE where each enemy died
    const s = toScreen(p.pos);
    if (!s.behind) hud.popup(s.x, s.y, p.text, p.big, p.style);
  }
  const hudEl = document.getElementById("hud");
  if (hudEl.hidden !== stats.cutscene) hudEl.hidden = stats.cutscene; // cutscenes play clean: no stats, reticle or arrow
  if (f.districts) {
    if (minimapEl.hidden !== stats.cutscene) minimapEl.hidden = stats.cutscene;
    minimap.draw(f, clock.elapsedTime);
  }
  document.getElementById("reticle").hidden = stats.cutscene;
  if (stats.cutscene) {
    hud.detect([]);
    hud.targeting(toScreen(f.reticleWorld()), null);
    hud.waypoint(null);
    hud.prompt("");
    return;
  }
  hud.detect((f.hunters?.markers() ?? []).map((m) => ({ ...m, s: toScreen(m.pos.clone().add(DETECT_LIFT)) }))); // "?" wary scouts, "!" alarm
  hud.race(stats.race);
  const aim = waypointTarget(f); // the gold arrow: the next gate, the landmark boss (or his pylon), else the mission
  hud.waypoint(aim ? { ...screenMark(aim.pos.clone().setY(Math.max(aim.pos.y, 2))), dist: aim.pos.distanceTo(f.pos), label: aim.label } : null);
  const reticle = toScreen(f.reticleWorld());
  const lockOn = f.missileLock(); // what Q would hit gets the marker first, else the nearest bot
  const bot = lockOn ?? f.nearestBot();
  if (!bot) return hud.targeting(reticle, null);
  const s = toScreen(bot.obj.position);
  const onScreen = !s.behind && Math.abs(s.ndc.x) < 0.95 && Math.abs(s.ndc.y) < 0.95;
  if (onScreen) {
    const dist = bot.obj.position.distanceTo(camera.position);
    const px = ((bot.radius * 1.7) / (dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))) * (innerHeight / 2);
    return hud.targeting(reticle, {
      onScreen, x: s.x, y: s.y, size: Math.min(220, Math.max(46, px * 2)), // brackets hug the bot, never a speck or a wall
      locked: bot === lockOn, boss: bot.boss, name: bot.boss ? bot.name : "", hp: Math.min(1, Math.max(0, bot.hp / bot.maxHp)),
      dist: bot.obj.position.distanceTo(f.pos),
    });
  }
  let dx = s.ndc.x;
  let dy = -s.ndc.y;
  if (s.behind) {
    dx = -dx;
    dy = -dy;
  }
  const angle = Math.atan2(dy, dx);
  const cx = innerWidth / 2 + Math.cos(angle) * (innerWidth / 2 - 40);
  const cy = innerHeight / 2 + Math.sin(angle) * (innerHeight / 2 - 40);
  return hud.targeting(reticle, { onScreen: false, x: cx, y: cy, angle });
}

// ------------------------------------------------------------ camera + loop
const NIGHT_HAZE = new THREE.Color(0x0b0d1a);
const DETECT_LIFT = new THREE.Vector3(0, 3.2, 0); // scout alert marks float above the drone
const OCCUPIED_HAZE = new THREE.Color(0x3a0f1f); // FREE OAKLAND: the air under a surveillance dome goes red-dark
const OCCUPIED_TINT = 0.5;
const OCCUPIED_DIM = 0.12;
const clock = new THREE.Clock();

// Auto-quality for integrated GPUs: if flight runs under TARGET_FPS, render fewer pixels (never below MIN_RATIO).
const TARGET_FPS = 24;
const MIN_RATIO = 0.75; // never blur below this (UHD pass, owner 09-24)
const RAISE_FPS = 30; // comfortably above the 24 floor: give sharpness back
const QUALITY_GRACE = 4; // seconds after the city is built before we judge the frame rate (shader warm-up)
const quality = { frames: 0, start: performance.now(), since: 0 };
function autoQuality() {
  if (game.lockQuality) return; // perf probes pin the pixel ratio
  if (clip.active) { // a resolution change mid-clip corrupts an avc1 MP4: hold it, and restart the meter so the
    quality.start = performance.now(); // held stretch doesn't read as one long slow frame afterwards
    quality.frames = 0;
    return;
  }
  const f = game.flight;
  // owner 09-24 "takes a long time to clearly display the level": the 1-fps frames WHILE the city builds used to
  // drop the pixel ratio for the whole run, and it never came back. Judge only a built, warmed-up city.
  if (!f?.built) {
    quality.since = performance.now();
    quality.frames = 0;
    quality.start = performance.now();
    return;
  }
  if (performance.now() - quality.since < QUALITY_GRACE * 1000) return;
  quality.frames += 1;
  const elapsed = (performance.now() - quality.start) / 1000; // real time: the game dt is capped, so it hides slow frames
  if (elapsed < 2.5) return;
  const fps = quality.frames / elapsed;
  quality.frames = 0;
  quality.start = performance.now();
  const current = renderer.getPixelRatio();
  const top = Math.min(devicePixelRatio, f.arena.pixelRatio ?? 2);
  let next = current;
  if (fps < TARGET_FPS && current > MIN_RATIO) next = Math.max(MIN_RATIO, current * 0.85);
  else if (fps > RAISE_FPS && current < top) next = Math.min(top, current * 1.12);
  if (next === current) return;
  renderer.setPixelRatio(next);
  composer.setPixelRatio(next);
  sizeFxaa();
}

/** While the zone builds: hold the sim and show progress instead of a frozen half-built city. */
function buildingScreen(f) {
  const el = document.getElementById("loading");
  const building = !f.built;
  if (el.hidden === !building) return building;
  el.hidden = !building;
  if (building) el.textContent = game.zone === "oakland" ? "BUILDING REAL OAKLAND…" : "BOOTING CYBERSPACE…";
  document.getElementById("hud").hidden = building;
  return building;
}
/** The REC light: shown while a clip rolls, the clock ticks once a second (no DOM write per frame). */
function recLight() {
  const sec = clip.recording ? Math.floor(clip.seconds) : -1;
  if (sec === game.recSec) return;
  game.recSec = sec;
  recEl.hidden = sec < 0;
  if (sec >= 0) recEl.textContent = `REC ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}

function tick() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  recLight();
  if (game.paused) {
    composer.render(); // frozen frame behind the PAUSED overlay
    input.endFrame();
    return;
  }
  if (game.mode === "flight" && buildingScreen(game.flight)) {
    autoQuality(); // keeps its clock reset while building
    input.endFrame();
    return;
  }
  if (game.mode === "flight") {
    game.flight.step(dt); // hit-stop + boss-death slow motion live in step()
    const day = game.flight.day;
    if (day && scene.fog) { // night mode: haze and sky go deep blue-black, exposure lifts so the streets stay readable
      scene.fog.color.copy(game.flight.arena.haze).lerp(NIGHT_HAZE, day.night01);
      const occ = game.flight.districts?.occupied01 ?? 0;
      if (occ > 0.001) scene.fog.color.lerp(OCCUPIED_HAZE, occ * OCCUPIED_TINT);
      scene.background = scene.fog.color;
      const w = game.flight.weather; // 09-25: fog thickens the haze; lightning kicks the exposure
      if (w && scene.fog.isFogExp2) scene.fog.density = game.flight.arena.fogDensity * w.fogMul;
      renderer.toneMappingExposure = day.exposure * (1 - OCCUPIED_DIM * occ) * (1 + (w?.flash ?? 0) * 1.6);
    }
    autoQuality();
    if (game.mode === "flight") {
      flightHud();
      tutorial.update(game.flight, dt);
    }
  }
  touch.setVisible(game.mode === "flight" && !game.paused);
  touch.setGround(Boolean(game.mode === "flight" && game.flight?.fight.active), game.flight?.pilot.isVltrn ? "SWORD" : "PUNCH"); // PUNCH (SWORD) / DODGE on foot
  touch.setSpecial(game.mode === "flight" ? game.flight?.specialName ?? null : null); // the VLTRN pilot's SPECIAL button (H)
  film.uniforms.time.value = clock.elapsedTime;
  const f = game.mode === "flight" && !game.paused ? game.flight : null;
  const fast = f && !f.fight.active && !f.intro && !f.finale && !f.race?.holding ? f.speed : 0;
  film.uniforms.speed.value = speedLines.update(dt, fast);
  if (game.mode !== "loading") composer.render();
  input.endFrame();
}

// One bad frame must never stop the game (09-25 review: an exception anywhere in a frame used to skip the
// requestAnimationFrame at its end — the picture froze for good). Schedule first, report the first few errors.
let frameErrors = 0;
function frame() {
  requestAnimationFrame(frame);
  try {
    tick();
  } catch (err) {
    if (frameErrors++ < 3) console.error("[frame]", err);
  }
}

/**
 * THE ROSTER (09-25): who flies — QM85 (VLTRN8 + 3BIZZLE on his wings), VLTRN8 (Mahal's bot) or 3BIZZLE (Rob's bot)
 * (QM85 covers either VLTRN). Remembered per browser; an old "mahal" choice means VLTRN8.
 */
const PILOT_KEY = "qm85_pilot";
const PILOTS = ["qm85", "vltrn8", "bizzle"];
const PILOT_LABEL = { qm85: "QM85", vltrn8: "VLTRN8 · MAHAL", bizzle: "3BIZZLE · ROB" };
function chosenPilot() {
  try {
    const v = localStorage.getItem(PILOT_KEY);
    return v === "mahal" ? "vltrn8" : PILOTS.includes(v) ? v : "qm85";
  } catch {
    return "qm85";
  }
}
function pilotToggle() {
  const actions = document.getElementById("actions");
  if (!actions) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "secondary";
  btn.id = "card-pilot";
  const label = () => (btn.textContent = `PILOT: ${PILOT_LABEL[chosenPilot()]}`);
  label();
  btn.addEventListener("click", () => {
    try {
      localStorage.setItem(PILOT_KEY, PILOTS[(PILOTS.indexOf(chosenPilot()) + 1) % PILOTS.length]);
    } catch {
      // private window: the choice lasts until reload
    }
    label();
    btn.blur();
  });
  actions.append(btn);
}

/** Home screen: once the battle body is earned, a toggle to fly in it from the start. */
function skinToggle() {
  if (!battleBodyUnlocked()) return;
  const actions = document.getElementById("actions");
  if (!actions) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "secondary";
  const label = () => (btn.textContent = `SKIN: ${chosenSkin() === "battle" ? "BATTLE BODY" : "CLASSIC"}`);
  label();
  btn.addEventListener("click", () => {
    chooseSkin(chosenSkin() === "battle" ? "classic" : "battle");
    label();
    btn.blur();
  });
  actions.append(btn);
}

// ------------------------------------------------------------ boot
/** Card bodies are HTML: text from outside the game (an error message) goes in escaped. */
const escapeHtml = (text) => String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

async function boot() {
  try {
    await loadAssets((f) => hud.loading(f)); // the cast: QM85, 3BIZZLE and VLTRN8 are all mini bots on one rig style
  } catch (err) {
    hud.card("LOAD FAILED", `Could not load the 3D assets (${escapeHtml(err.message)}). Serve this folder over http, not file://.`, "RELOAD", () => location.reload());
    return;
  }
  const jump = Number(new URLSearchParams(location.search).get("level"));
  const zoneFor = { 5: "cyber", 6: "oakland" };
  const forced = zoneFor[jump]; // ?level= jump (testing) routes the menu straight to a zone
  game.mode = "card";
  music.menu(); // Slap in the Saddle on the home screen
  const home = () => {
    hud.menu((zone) => {
      sfx.unlock();
      startFlight(forced ?? zone);
    }, { credits: garage.state.credits, onGarage: () => openGarage(document.getElementById("card"), home, sfx), onRaces: () => racePicker(home) });
    pilotToggle();
    skinToggle();
  };
  home();
  requestAnimationFrame(frame);
}

boot();
