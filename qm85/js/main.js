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
import { sfx } from "./audio.js";
import { FlightBattle } from "./flight.js";
import { hud } from "./hud.js";
import { touch } from "./touch.js";
import { tutorial } from "./tutorial.js";
import { music } from "./music.js";
import { loadCheckpoint, clearCheckpoint } from "./oakland-day.js";
import { battleBodyUnlocked, chosenSkin, chooseSkin } from "./battle-body.js";

const BOSS_LINES = {
  "THE OVERSEER": "THE EYE THAT RUNS THE DRONES",
  "THE SERPENT PRIEST": "HE CAME FOR THE BATTLE BODY",
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

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  sizeFxaa();
});

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
  scene.environment = null;
  camera.fov = 60;
  camera.updateProjectionMatrix();
  game.flight?.dispose(scene);
  game.flight = null;
  scene.fog = null;
}

// ------------------------------------------------------------ sound + pause
const PLAY_MODES = new Set(["flight"]);

function togglePause() {
  if (!PLAY_MODES.has(game.mode)) return;
  game.paused = !game.paused;
  music.pause(game.paused);
  if (game.paused) sfx.engine.set({ on: false }); // the frame loop stops; hush the thrusters too
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
});
for (const ev of ["pointerdown", "keydown"]) addEventListener(ev, () => music.unlock());
// Back to the title screen from anywhere: a clean reload drops every level, sound and timer at once.
const toMenu = () => location.assign(location.pathname);
hud.controls({ onPause: togglePause, onMute: toggleMute, onVolume: stepVolume, onMenu: toMenu });
hud.sound(music.muted, music.level);
music.onTrackChange((title) => hud.nowPlaying(title));

// ------------------------------------------------------------ stages
function startFlight(zone = game.zone, resume = null) {
  game.zone = zone;
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
      if (flight?.arena.envScene && !jumped) scene.environment = pmrem.fromScene(flight.arena.envScene).texture; // reflections follow the sky
    },
    onCheckpoint: (cp) => setTimeout(() => hud.toast(`CHECKPOINT: ${cp.phase}`), 2600),
    onMode: (mode) => hud.toast(mode === "fight" ? "FIGHT MODE" : "FLIGHT MODE"),
    onMission(kind, data = {}) {
      if (kind === "pickup") hud.toast(`${data.kind === "data" ? "DATA DRIVE" : "BATTLE PART"} SECURED — CARRYING ${data.n}/3`);
      if (kind === "full") hud.toast("HANDS FULL — GET THESE TO THE WAREHOUSE");
      if (kind === "deliver") hud.toast(`DELIVERED — BATTLE BODY ${Math.round(data.progress * 100)}% · THEY'RE COMING FOR YOU`);
      if (kind === "finale") hud.toast("BATTLE BODY — ASSEMBLING");
      if (kind === "complete") { // after the warehouse cutscene: fight the rest of the night IN the battle body
        game.mode = "card";
        hud.card("BATTLE BODY ONLINE", `Every data drive and battle part is inside the QMM Warehouse. Rob and Mahal bolt the last plate on — QM85 doesn't flicker out anymore. Blasters maxed, shield full. Score: ${data.score}. The Serpent Priest is still out there. Unlocked: the BATTLE BODY skin on the home screen.`, "FINISH THE NIGHT", () => {
          game.mode = "flight";
          hud.show("flight", "OAKLAND MISSION — BATTLE BODY");
        });
      }
    },
    onWin(score) {
      game.mode = "card";
      if (zone === "oakland") clearCheckpoint(); // a finished run starts fresh next time
      hud.card("SKY CLEARED", zone === "oakland"
        ? `Night over Oakland: the Serpent Priest is scrap on the Broadway asphalt, the Overseer before him. Rob and Mahal watch the sun come up from the warehouse roof. Score: ${score}.`
        : `The Serpent Priest is down, the Palantír bots are blind, the viruses purged: QM85 world safe, ours too. Score: ${score}.`, "FLY AGAIN", () => startFlight());
    },
    onDeath(score) {
      game.mode = "card";
      const cp = zone === "oakland" ? loadCheckpoint() : null;
      if (cp) { // continue from the last time-of-day checkpoint (owner: "time of day check points")
        hud.card("SHOT DOWN", `The invaders got a lock on him. Score: ${score}. Checkpoint: ${cp.phase}, battle body ${cp.delivered.data + cp.delivered.part}/10, thrusters LV${cp.thrust}, blaster LV${cp.blaster}.`,
          `CONTINUE FROM ${cp.phase}`, () => startFlight("oakland", cp), { label: "RESTART AT DAWN", onClick: () => { clearCheckpoint(); startFlight("oakland"); } });
        return;
      }
      hud.card("SHOT DOWN", `The invaders got a lock on him. Score: ${score}. Small, yes. Harmless, no. Run it back.`, "FLY AGAIN", () => startFlight());
    },
  }, zone, { resume, skin: chosenSkin() });
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
  flight.arena.ready.then(() => {
    if (game.flight !== flight) return;
    if (flight.arena.envScene) { // realistic zone: reflections from the physical sky, Bay haze
      scene.environment = pmrem.fromScene(flight.arena.envScene).texture;
      scene.fog = new THREE.FogExp2(flight.arena.haze, flight.arena.fogDensity);
      scene.background = flight.arena.haze;
      hud.credit(flight.arena.attribution);
      return;
    }
    if (!flight.arena.skyTexture) return;
    const sky = flight.arena.skyTexture.clone();
    sky.mapping = THREE.EquirectangularReflectionMapping;
    sky.needsUpdate = true;
    scene.environment = pmrem.fromEquirectangular(sky).texture; // QM85's armor reflects the city
    hud.credit(flight.arena.attribution ?? "");
    scene.fog = new THREE.FogExp2(flight.arena.haze, flight.arena.fogDensity);
    scene.background = flight.arena.haze;
  });
  hud.show("flight", zone === "oakland" ? "OAKLAND MISSION" : "FLIGHT BATTLE — CYBERSPACE");
  game.mode = "flight";
  tutorial.start(zone, game.tutorialForced); // first flight ever, or the home screen's TUTORIAL button
  game.tutorialForced = false;
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
    if (!s.behind) hud.popup(s.x, s.y, p.text, p.big);
  }
  const hudEl = document.getElementById("hud");
  if (hudEl.hidden !== stats.cutscene) hudEl.hidden = stats.cutscene; // cutscenes play clean: no stats, reticle or arrow
  document.getElementById("reticle").hidden = stats.cutscene;
  if (stats.cutscene) {
    hud.targeting(toScreen(f.reticleWorld()), null);
    hud.waypoint(null);
    hud.prompt("");
    return;
  }
  const wp = f.mission?.waypoint();
  hud.waypoint(wp ? { ...screenMark(wp.clone().setY(Math.max(wp.y, 2))), dist: wp.distanceTo(f.pos) } : null);
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
const clock = new THREE.Clock();

// Auto-quality for integrated GPUs: if flight runs under TARGET_FPS, render fewer pixels (never below MIN_RATIO).
const TARGET_FPS = 24;
const MIN_RATIO = 0.75; // never blur below this (UHD pass, owner 09-24)
const RAISE_FPS = 30; // comfortably above the 24 floor: give sharpness back
const QUALITY_GRACE = 4; // seconds after the city is built before we judge the frame rate (shader warm-up)
const quality = { frames: 0, start: performance.now(), since: 0 };
function autoQuality() {
  if (game.lockQuality) return; // perf probes pin the pixel ratio
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
function frame() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  if (game.paused) {
    composer.render(); // frozen frame behind the PAUSED overlay
    input.endFrame();
    requestAnimationFrame(frame);
    return;
  }
  if (game.mode === "flight" && buildingScreen(game.flight)) {
    autoQuality(); // keeps its clock reset while building
    input.endFrame();
    requestAnimationFrame(frame);
    return;
  }
  if (game.mode === "flight") {
    game.flight.step(dt); // hit-stop + boss-death slow motion live in step()
    const day = game.flight.day;
    if (day && scene.fog) { // night mode: haze and sky go deep blue-black, exposure lifts so the streets stay readable
      scene.fog.color.copy(game.flight.arena.haze).lerp(NIGHT_HAZE, day.night01);
      scene.background = scene.fog.color;
      renderer.toneMappingExposure = day.exposure;
    }
    autoQuality();
    if (game.mode === "flight") {
      flightHud();
      tutorial.update(game.flight, dt);
    }
  }
  touch.setVisible(game.mode === "flight" && !game.paused);
  film.uniforms.time.value = clock.elapsedTime;
  if (game.mode !== "loading") composer.render();
  input.endFrame();
  requestAnimationFrame(frame);
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
async function boot() {
  try {
    await loadAssets((f) => hud.loading(f));
  } catch (err) {
    hud.card("LOAD FAILED", `Could not load the 3D assets (${err.message}). Serve this folder over http, not file://.`, "RELOAD", () => location.reload());
    return;
  }
  const jump = Number(new URLSearchParams(location.search).get("level"));
  const zoneFor = { 5: "cyber", 6: "oakland" };
  const forced = zoneFor[jump]; // ?level= jump (testing) routes the menu straight to a zone
  game.mode = "card";
  music.menu(); // Slap in the Saddle on the home screen
  hud.menu((zone) => {
    sfx.unlock();
    startFlight(forced ?? zone);
  });
  skinToggle();
  requestAnimationFrame(frame);
}

boot();
