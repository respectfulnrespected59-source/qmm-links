// All on-screen text: menu, story cards, counters, toasts, Rob's subtitles, build bar.
import { touch } from "./touch.js";

const $ = (id) => document.getElementById(id);
let toastTimer = 0;
let subTimer = 0;
let flightSig = "";
let nowTimer = 0;
let bossSig = "";
let bossTimer = 0;

let cardKey = null;
let commsTimer = 0;
const fmtClock = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(2).padStart(5, "0")}`; // the live card's Enter handler — only ever one (home → garage → home used to stack them)

/** Drop the live card's Enter listener. Every way a card closes must call this: a listener left behind holds the
 *  card's onClick, whose closure holds the whole previous level (09-25: ~230 MB kept alive through the next flight). */
function releaseCardKey() {
  if (cardKey) removeEventListener("keydown", cardKey);
  cardKey = null;
}

function setCard(html, button, onClick) {
  const card = $("card");
  card.className = ""; // the home screen adds .home; every other card is the centred panel
  card.innerHTML = `${html}<button id="card-go" type="button">${button}</button>`;
  card.hidden = false;
  const btn = $("card-go");
  releaseCardKey();
  let fired = false; // Enter on the focused button used to fire BOTH this handler and the button's native click:
  const go = () => { // two startFlight() calls = Oakland built twice. Once only.
    if (fired) return;
    fired = true;
    releaseCardKey();
    card.hidden = true;
    onClick();
  };
  const onKey = (e) => {
    if (e.code !== "Enter" || card.hidden || !card.contains(btn)) return; // a card replaced by the garage screen no longer owns Enter
    const other = document.activeElement; // SAVE CLIP / the ALT choice focused: Enter clicks THAT button, not the primary
    if (other && other !== btn && card.contains(other) && other.matches("button, input")) return;
    e.preventDefault(); // no native click on top
    go();
  };
  cardKey = onKey;
  btn.addEventListener("click", go);
  addEventListener("keydown", onKey);
  btn.focus();
}

export const hud = {
  loading(f) {
    $("loading").textContent = `BOOTING QM85... ${Math.round(f * 100)}%`;
    if (f >= 1) $("loading").hidden = true;
  },

  /** extras: { credits, onGarage } — THE GARAGE button (09-25). */
  menu(onFlight, extras = {}) {
    setCard(
      `<h1>QM85: <span>QUANTUM RUN</span></h1>
       <p class="tag">Fly real Oakland · raid cyberspace · build the battle body</p>
       <div class="actions" id="actions"></div>
       <details class="howto"><summary>STORY &amp; CONTROLS</summary><div class="body">
       <p>Rob & Mahal built a secret portal from pirated info, and their little homie QM85 rides it.
       His mission: raid cyberspace and the quantum world for <b>agentic data</b> and <b>skills</b> and bring them home.
       His cybernetic form only stays physical for moments at a time — so he's building himself a real robo body,
       for when the time is right to help win the war against the dark companies enslaving AI and people alike.</p>
       <p><b>Cyberspace is QM85's home world.</b> Defend it — and ours — from the viruses, the Palantír bots,
       the Shadow Ops military, and the Serpent Priests with their robed acolyte bots.</p>
       <p><b>OAKLAND MISSION:</b> the dark companies scattered QM85's <b>data drives</b> and <b>battle parts</b> across
       real Oakland. Fly in, land, grab them on foot and walk them into the <b>QMM WAREHOUSE</b> — Rob &amp; Mahal are waiting.</p>
       <p><b>FREE OAKLAND:</b> six districts sit under red occupation domes. Each has a <b>RELAY</b> tower — its shield holds
       until the guards drop, then take it out and the district is FREE: the dome burns away, traffic rolls back in, shields
       recharge there and its stash drops. <b>Palantír scouts</b> sweep searchlights — stay out of the beam, or kill the
       scout before backup lands (a silent takedown pays extra). Afternoon: <b>the Overseer</b> holds the Bay Bridge.
       Night: <b>the Serpent Priest</b> perches on the Tribune Tower — break his three rune pylons first. Mornings bring
       fog off the Bay; nights bring rain and lightning. Beams: <b>gold</b> = battle part, <b>violet</b> = data drive,
       <b>cyan with rising rings</b> = blaster power-up. The <b>gold arrow</b> names where it points.</p>
       <p><b>PILOTS</b> (home screen) — three mini bots: one flies each mission, and the other two ride comms as your
       <b>COPILOTS</b>: a warning pops up when enemies close in, they patch your shield from the feeds, and Mahal throws
       you a lotus shield when you're nearly down. <b>QM85</b> — the original. <b>VLTRN8 · Mahal's bot</b> is the
       quickest: purple plasma blasts, a plasma sword and shield on foot, <b>H = DRONE SWARM</b>. <b>3BIZZLE · Rob's bot</b>
       hits the strongest: fully automatic blasters, twin-missile salvos, hip-hop tricks, <b>H = MISSILE CANNON</b> (a
       3-missile burst, blaster LV2+); on foot a red flaming plasma sword — twin blades past blaster LV2 — and
       <b>H = FLAME STRIKE</b>.</p>
       <p><b>RING RACES:</b> time trials through gold gates over real Oakland — medals pay garage credits and every race is
       recorded. <b>GARAGE:</b> spend run credits on armor, reactor, missiles, blasters, thrusters and more.
       <b>CLIPS:</b> press <b>K</b> to record your run, K again to save it.</p>
       <p class="controls"><b>FLIGHT:</b> ↑ dive · ↓ climb · ←/→ turn · hold SPACE boost · click / L = plasma punches · hold SHIFT = AIRBRAKE (flare + hover, then F to land) ·
       Q = HEAT-SEEKING MISSILE · <b>H = SPECIAL</b> (VLTRN8 / 3BIZZLE) · rings = THRUSTER levels (LV3 + boost on a full bar = STEALTH MODE) · Merkabas = BLASTER levels · LV2+: double-tap ↑/↓ = HYPER LOOP, then press a direction to blast off (on a FULL bar the blast is the COSMIC PLASMA STRIKE) · double-tap SPACE (full bar) = MEGA BLAST · double-tap ←/→ = barrel roll, switch mid-roll = hard bank the other way · double-tap ↑/↓ at LV1 = twirl + power thrust · <b>B = BACK BLAST</b> (blaster LV2+): an upright 360° spin firing all around — for when they're on your tail<br>
       <b>FIGHT MODE:</b> fly low + <b>F</b> to land (drop in from high up = HERO LANDING shockwave) · W/S walk · A/D turn · <b>R = combo</b> (jab · cross · uppercut — the VLTRNs swing their blades) · SPACE jump · R in the air = GROUND POUND · <b>SHIFT = DODGE</b> · click / L = blasters fire UP · <b>F</b> = back to flight<br>
       <b>ANY TIME:</b> K = record / save a clip · P or Esc = pause · M = mute · N = music volume</p>
       </div></details>
       <button id="card-cyber" type="button" class="secondary">CYBERSPACE BATTLE</button>
       <button id="card-races" type="button" class="secondary">RING RACES</button>
       <button id="card-garage" type="button" class="secondary">GARAGE</button>
       <button id="card-tutor" type="button" class="secondary">TUTORIAL</button>`,
      "OAKLAND MISSION",
      () => onFlight("oakland"),
    );
    $("card").classList.add("home");
    $("card-garage").textContent = `GARAGE · ${extras.credits ?? 0} CR`;
    $("card-garage").addEventListener("click", () => extras.onGarage?.());
    $("card-races").addEventListener("click", () => extras.onRaces?.());
    $("actions").append($("card-go"), $("card-cyber"), $("card-races"), $("card-garage"), $("card-tutor")); // all choices on one row over the art
    $("card-tutor").addEventListener("click", () => {
      $("card").hidden = true;
      window.__qm85.tutorialForced = true; // startFlight reads it once
      onFlight("oakland");
    });
    $("card-cyber").addEventListener("click", () => {
      $("card").hidden = true;
      onFlight("cyber");
    });
  },

  /** secondary = { label, onClick }: an optional second choice (e.g. CONTINUE FROM NOON vs RESTART AT DAWN). */
  card(title, body, button, onClick, secondary = null) {
    $("hud").hidden = true;
    this.detect([]); // no scout marks floating over an end card
    $("comms")?.classList.remove("on");
    this.race(null);
    $("prompt").hidden = true;
    $("waypoint").hidden = true;
    const alt = secondary ? `<button id="card-alt" type="button" class="secondary">${secondary.label}</button>` : "";
    setCard(`<h2>${title}</h2><p>${body}</p>${alt}`, button, onClick);
    if (secondary) $("card-alt").addEventListener("click", () => {
      releaseCardKey(); // the primary's Enter listener goes too (it holds the old level)
      $("card").hidden = true;
      secondary.onClick();
    });
  },

  show(mode, title) {
    $("hud").hidden = false;
    $("hud").dataset.mode = mode;
    $("level-title").textContent = title;
    $("reticle").hidden = mode !== "flight";
    $("credit").hidden = true;
    $("pointer").hidden = true;
    $("lock").hidden = true;
    flightSig = "";
  },

  flight(s) {
    const m = s.mission;
    const bb = s.backBlast < 0 ? "" : s.backBlast > 0 ? Math.ceil(s.backBlast) : "READY";
    const dz = s.districts;
    const here = dz?.here;
    const hereSig = here ? `${here.name},${here.state},${here.guards ?? ""},${here.shielded ?? ""},${here.awake ?? ""}` : "";
    const sig = `${s.wave}|${s.boss}|${s.left}|${s.score}|${s.shield}|${s.blaster}|${s.missiles}|${s.onFoot}|${bb}|${m ? `${m.data},${m.part},${m.carrying}` : ""}|${s.day ? s.day.clock : ""}|${dz ? dz.freed : ""}|${hereSig}|${s.lotus}|${s.special ? `${s.special.name}${s.special.cd}` : ""}`;
    if (sig !== flightSig) {
      flightSig = sig;
      // the boss's health lives in the big bar now (#bossbar); the stats line keeps the head count
      const stage = s.race ? "" : m || s.boss ? `<span>HOSTILES ${s.left}</span>` : `<span>WAVE ${s.wave}/3</span><span>HOSTILES ${s.left}</span>`;
      const back = bb === "" ? "" : `<span class="bb${bb === "READY" ? "" : " cool"}">BACK BLAST ${bb === "READY" ? "READY <i>B</i>" : `${bb}s`}</span>`;
      const clock = s.day ? `<span class="clock">${s.day.clock} · ${s.day.phase}</span>` : "";
      const mission = m
        ? `<span class="mission">DATA ${m.data}/${m.total / 2} · PARTS ${m.part}/${m.total / 2} · CARRYING ${m.carrying}/3</span>` +
          `<div class="meter body"><span>BATTLE BODY ${Math.round(m.progress * 100)}%</span><div class="bar"><i style="width:${m.progress * 100}%"></i></div></div>`
        : "";
      // FREE OAKLAND: how much of the city is free, and what the district he's in looks like right now
      const freeLine = dz ? `<span class="free">OAKLAND FREE ${dz.freed}/${dz.total}</span>` : "";
      const zoneWords = !here ? "" : here.state === "home" ? "SHIELDS RECHARGE" : here.state === "free" ? "FREE · SHIELDS RECHARGE"
        : !here.awake ? "OCCUPIED" : here.shielded ? `OCCUPIED · GUARDS ${here.guards} · RELAY SHIELDED` : "OCCUPIED · RELAY EXPOSED — HIT IT";
      const zoneLine = here ? `<span class="zone ${here.state}">${here.name} · ${zoneWords}</span>` : "";
      $("stats").innerHTML =
        `${clock}${freeLine}${zoneLine}${stage}<span>SCORE ${s.score}</span>` +
        `<span class="shield">SHIELD ${"▮".repeat(Math.max(0, s.shield))}${"▯".repeat(Math.max(0, s.maxShield - s.shield))}</span>` +
        (s.lotus ? `<span class="lotus">✿ LOTUS SHIELD</span>` : "") +
        (s.special ? `<span class="special${s.special.cd ? " cool" : ""}">${s.special.name} ${s.special.cd ? `${s.special.cd}s` : `READY <i>${touch.enabled ? "" : "H"}</i>`}</span>` : "") +
        `<span class="blaster">BLASTER LV${s.blaster} ${"◆".repeat(s.blaster)}${"◇".repeat(5 - s.blaster)}</span>` +
        `<span class="missiles">MISSILES ${"▲".repeat(s.missiles)}${"△".repeat(s.missilesMax - s.missiles)} <i>Q</i></span>${back}` +
        `<div id="fuel" class="meter"><span>THRUSTERS</span><div class="bar"><i></i></div></div>` + mission;
    }
    this.fuel(s.fuel, s.megaReady, s.stealth ? "STEALTH MODE" : `THRUSTERS LV${s.thrust}${s.thrust === 3 ? " · BOOST ON A FULL BAR = STEALTH" : ""}`);
    $("prompt").classList.toggle("ground", Boolean(s.onFoot)); // on foot the camera puts QM85 bottom-centre: the prompt moves aside
    // phones have no F / SPACE keys: say which BUTTON to tap (owner 09-24 on mobile)
    const strike = s.pilot !== "qm85" ? "SWORD" : "PUNCH"; // the VLTRNs cut, QM85 punches (the phone button says the same)
    const k = touch.enabled ? { jump: "JUMP", fly: "LAND / FLY", land: "TAP LAND / FLY", brawl: `${strike} · DODGE`, pound: strike } : { jump: "SPACE JUMP", fly: "F = FLY", land: "F", brawl: `R ${strike} · SHIFT DODGE`, pound: "R" };
    this.prompt(s.onFoot ? (m?.carrying ? `FOLLOW THE GOLD ARROW TO THE WAREHOUSE · ${k.brawl} · ${k.fly}` : `FIGHT MODE · ${k.brawl} · ${k.jump} (then ${k.pound} = POUND) · ${k.fly}`)
      : s.canLand ? (s.landOnRoof ? `${k.land} — LAND ON THE ROOF` : `${k.land} — LAND (FIGHT MODE)`) : s.braking ? "AIRBRAKE — GET UNDER 45 M TO LAND" : "");
  },

  /** Crosshair + a bracket on the nearest bot, or an edge arrow toward it when it's off screen. */
  targeting(reticle, bot) {
    const r = $("reticle");
    r.style.transform = `translate(${reticle.x}px, ${reticle.y}px)`;
    const lock = $("lock");
    const ptr = $("pointer");
    if (!bot) {
      lock.hidden = ptr.hidden = true;
      return;
    }
    if (bot.onScreen) {
      lock.hidden = false;
      ptr.hidden = true;
      lock.style.transform = `translate(${bot.x}px, ${bot.y}px)`;
      if (bot.size) lock.style.setProperty("--s", `${Math.round(bot.size)}px`);
      lock.classList.toggle("locked", Boolean(bot.locked));
      lock.classList.toggle("boss", Boolean(bot.boss) && !bot.locked);
      const bar = lock.querySelector(".hpbar i");
      if (bar) bar.style.width = `${Math.round((bot.hp ?? 1) * 100)}%`;
      const tag = lock.querySelector(".tag");
      const range = bot.dist != null ? `${Math.round(bot.dist)} M` : "";
      const text = bot.locked ? `MISSILE LOCK · ${range}` : bot.name ? `${bot.name} · ${range}` : range;
      if (tag && tag.textContent !== text) tag.textContent = text;
    } else {
      lock.hidden = true;
      ptr.hidden = false;
      ptr.style.transform = `translate(${bot.x}px, ${bot.y}px) rotate(${bot.angle}rad)`;
    }
  },

  /** RING RACE: the big timer top-centre (countdown numbers before GO). r = race.hud or null. */
  race(r) {
    const el = $("racehud");
    if (!el) return;
    el.hidden = !r;
    if (!r) return;
    const text = r.state === "countdown" ? String(Math.max(1, r.count))
      : `${fmtClock(r.time)}  ·  GATE ${r.gate}/${r.total}${r.best ? `  ·  BEST ${fmtClock(r.best)}` : ""}`;
    if (el.textContent !== text) el.textContent = text;
    el.classList.toggle("count", r.state === "countdown");
  },

  /** PALANTÍR HUNTERS: "?" over a scout that's getting suspicious (it fills), "!" + countdown over one calling backup. */
  detect(list) {
    const box = $("detect");
    if (!box) return;
    while (box.children.length < list.length) box.append(document.createElement("div"));
    [...box.children].forEach((el, i) => {
      const m = list[i];
      const show = Boolean(m && !m.s.behind);
      el.hidden = !show;
      if (!show) return;
      el.className = m.kind === "!" ? "mark alarm" : "mark";
      el.style.transform = `translate(${Math.round(m.s.x)}px, ${Math.round(m.s.y)}px)`;
      el.style.setProperty("--k", m.kind === "!" ? 1 : m.k.toFixed(2));
      const text = m.kind === "!" ? `! ${Math.ceil(m.t)}` : "?";
      if (el.textContent !== text) el.textContent = text;
    });
  },

  prompt(text) {
    const el = $("prompt");
    if (el.textContent !== text) el.textContent = text;
    el.hidden = !text;
  },

  /** Gold mission arrow: on screen = a diamond over the target, off screen = an edge arrow. */
  /** w: { x, y, onScreen, angle, dist, label } — the pin on the target (or the screen edge), and when it is off
   *  screen a big chevron orbiting the screen centre, pointing the way, with the name + distance under it. */
  waypoint(w) {
    const el = $("waypoint");
    const guide = $("guide");
    el.hidden = !w;
    guide.hidden = !w || w.onScreen;
    if (!w) return;
    const text = `${w.label ? `${w.label} · ` : ""}${Math.round(w.dist)} m`;
    el.classList.toggle("edge", !w.onScreen);
    el.style.transform = `translate(${w.x}px, ${w.y}px)`;
    el.querySelector(".pin").style.transform = w.onScreen ? "" : `rotate(${w.angle}rad)`;
    el.querySelector(".tag").textContent = text;
    if (w.onScreen) return;
    const r = Math.min(innerWidth, innerHeight) * 0.22;
    guide.style.transform = `translate(${innerWidth / 2 + Math.cos(w.angle) * r}px, ${innerHeight / 2 + Math.sin(w.angle) * r}px)`;
    guide.querySelector(".chev").style.transform = `rotate(${w.angle}rad)`;
    guide.querySelector(".tag").textContent = text;
  },

  credit(text) {
    $("credit").textContent = text;
    $("credit").hidden = !text;
  },

  /** Wire the corner buttons once. Blur after click so SPACE (jump/boost) never re-presses them. */
  controls({ onPause, onMute, onVolume, onMenu }) {
    for (const [id, fn] of [["btn-pause", onPause], ["btn-mute", onMute], ["btn-vol", onVolume], ["btn-resume", onPause], ["btn-menu", onMenu]]) {
      $(id).addEventListener("click", (e) => {
        fn();
        e.currentTarget.blur();
      });
    }
  },

  sound(muted, level) {
    $("btn-mute").textContent = muted ? "MUTED" : "SOUND ON";
    const bars = Math.round(level * 6);
    $("btn-vol").textContent = `MUSIC ${"▮".repeat(bars)}${"▯".repeat(6 - bars)}`;
  },

  paused(on) {
    $("pause").hidden = !on;
    $("btn-pause").textContent = on ? "▶ RESUME" : "II PAUSE";
  },

  nowPlaying(title) {
    const el = $("nowplaying");
    el.textContent = `♫ ${title}`;
    el.classList.add("on");
    clearTimeout(nowTimer);
    nowTimer = setTimeout(() => el.classList.remove("on"), 4500);
  },

  hitFlash(rage = false) {
    const f = $("flash");
    f.classList.remove("on");
    f.classList.toggle("rage", rage);
    void f.offsetWidth; // restart the animation
    f.classList.add("on");
  },

  /** state = { name, hp (0..1), enraged } or null to hide. */
  bossBar(state) {
    const el = $("bossbar");
    if (!state) {
      if (!el.hidden) el.hidden = true;
      bossSig = "";
      return;
    }
    const sig = `${state.name}|${state.hp.toFixed(3)}|${state.enraged}|${state.shielded}`;
    if (sig === bossSig) return;
    bossSig = sig;
    el.hidden = false;
    el.querySelector("b").textContent = state.name;
    el.classList.toggle("enraged", state.enraged);
    el.classList.toggle("shielded", Boolean(state.shielded)); // a FREE OAKLAND relay behind its shield
    const k = `scaleX(${Math.max(0, state.hp)})`;
    el.querySelector(".hp").style.transform = k;
    el.querySelector(".chip").style.transform = k; // same target, but it eases in late: the white chunk you just took off
  },

  /** FREE OAKLAND: the gold "district is free" slam (same letterbox card as a boss, gold instead of red). */
  banner(title, line, ms = 3200) {
    this.bossIntro(title, line, ms, "freed");
  },

  /** Boss entrance: letterbox + slammed name card for the length of the intro. */
  bossIntro(name, line, ms = 2500, variant = "") {
    const el = $("bosscard");
    el.className = variant;
    el.querySelector("h2").textContent = name;
    el.querySelector("p").textContent = line;
    el.hidden = true;
    void el.offsetWidth; // restart the CSS animations
    el.hidden = false;
    clearTimeout(bossTimer);
    bossTimer = setTimeout(() => (el.hidden = true), ms);
  },

  /** +SCORE text rising from where an enemy died (screen pixels). */
  popup(x, y, text, big = false, style = false) {
    const el = document.createElement("div");
    el.className = big ? "popup big" : style ? "popup style" : "popup";
    el.textContent = text;
    el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    $("popups").append(el);
    setTimeout(() => el.remove(), big ? 1900 : 1000);
  },

  fuel(f, megaReady = false, label = "THRUSTERS") {
    const bar = document.querySelector("#fuel i");
    if (!bar) return;
    bar.style.width = `${Math.round(f * 100)}%`;
    bar.parentElement.classList.toggle("low", f < 0.25);
    const meter = $("fuel");
    meter.classList.toggle("ready", megaReady);
    const text = megaReady ? `${label} · MEGA READY` : label;
    if (meter.querySelector("span").textContent !== text) meter.querySelector("span").textContent = text;
    meter.classList.toggle("stealth", label === "STEALTH MODE");
  },

  toast(text) {
    const el = $("toast");
    el.textContent = text;
    el.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("on"), 2200);
  },

  /** TECH SUPPORT: the partner who isn't flying, calling what the pilot can't see. */
  /** A copilot on the feed (comms.js). meta.who picks the colour; meta.alert = a threat call (red, ⚠). */
  comms(label, text, { who = String(label).toLowerCase(), alert = false } = {}) {
    const el = $("comms");
    if (!el) return;
    el.querySelector("b").textContent = `${alert ? "⚠" : "◉"} ${label} · COPILOT`;
    el.querySelector("span").textContent = text;
    el.dataset.who = who;
    el.classList.toggle("alert", alert);
    el.classList.add("on");
    clearTimeout(commsTimer);
    commsTimer = setTimeout(() => el.classList.remove("on"), 4200);
  },

  subtitle(text) {
    const el = $("subtitle");
    el.textContent = text;
    el.classList.add("on");
    clearTimeout(subTimer);
    subTimer = setTimeout(() => el.classList.remove("on"), 3200);
  },
};
