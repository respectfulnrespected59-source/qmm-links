// All on-screen text: menu, story cards, counters, toasts, Rob's subtitles, build bar.
const $ = (id) => document.getElementById(id);
let toastTimer = 0;
let subTimer = 0;
let flightSig = "";
let nowTimer = 0;

function setCard(html, button, onClick) {
  const card = $("card");
  card.className = ""; // the home screen adds .home; every other card is the centred panel
  card.innerHTML = `${html}<button id="card-go" type="button">${button}</button>`;
  card.hidden = false;
  const btn = $("card-go");
  const go = () => {
    removeEventListener("keydown", onKey);
    card.hidden = true;
    onClick();
  };
  const onKey = (e) => {
    if (e.code === "Enter") go();
  };
  btn.addEventListener("click", go);
  addEventListener("keydown", onKey);
  btn.focus();
}

export const hud = {
  loading(f) {
    $("loading").textContent = `BOOTING QM85... ${Math.round(f * 100)}%`;
    if (f >= 1) $("loading").hidden = true;
  },

  menu(onFlight) {
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
       <p class="controls"><b>FLIGHT:</b> ↑ dive · ↓ climb · ←/→ turn · hold SPACE boost · click / L = plasma punches · hold SHIFT = AIRBRAKE (flare + hover, then F to land) ·
       Q = HEAT-SEEKING MISSILE · rings = THRUSTER levels (LV3 + boost on a full bar = STEALTH MODE) · Merkabas = BLASTER levels · LV2+: double-tap ↑/↓ = HYPER LOOP, then press a direction to blast off (on a FULL bar the blast is the COSMIC PLASMA STRIKE) · double-tap SPACE (full bar) = MEGA BLAST · double-tap ←/→ = barrel roll, switch mid-roll = hard bank the other way · double-tap ↑/↓ at LV1 = twirl + power thrust<br>
       <b>FIGHT MODE:</b> fly low + <b>F</b> to land · W/S walk · A/D turn · click / L = blasters fire UP · SPACE jump · <b>F</b> = back to flight</p>
       </div></details>
       <button id="card-cyber" type="button" class="secondary">CYBERSPACE BATTLE</button>`,
      "OAKLAND MISSION",
      () => onFlight("oakland"),
    );
    $("card").classList.add("home");
    $("actions").append($("card-go"), $("card-cyber")); // both choices on one row over the art
    $("card-cyber").addEventListener("click", () => {
      $("card").hidden = true;
      onFlight("cyber");
    });
  },

  /** secondary = { label, onClick }: an optional second choice (e.g. CONTINUE FROM NOON vs RESTART AT DAWN). */
  card(title, body, button, onClick, secondary = null) {
    $("hud").hidden = true;
    $("prompt").hidden = true;
    $("waypoint").hidden = true;
    const alt = secondary ? `<button id="card-alt" type="button" class="secondary">${secondary.label}</button>` : "";
    setCard(`<h2>${title}</h2><p>${body}</p>${alt}`, button, onClick);
    if (secondary) $("card-alt").addEventListener("click", () => {
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
    const sig = `${s.wave}|${s.boss}|${s.left}|${s.score}|${s.shield}|${Math.round(s.bossHp * 40)}|${s.blaster}|${s.missiles}|${s.onFoot}|${m ? `${m.data},${m.part},${m.carrying}` : ""}|${s.day ? s.day.clock : ""}`;
    if (sig !== flightSig) {
      flightSig = sig;
      const stage = s.boss ? `<span class="boss">${s.bossName} ${"█".repeat(Math.ceil(s.bossHp * 20))}</span>`
        : m ? `<span>HOSTILES ${s.left}</span>` : `<span>WAVE ${s.wave}/3</span><span>HOSTILES ${s.left}</span>`;
      const clock = s.day ? `<span class="clock">${s.day.clock} · ${s.day.phase}</span>` : "";
      const mission = m
        ? `<span class="mission">DATA ${m.data}/${m.total / 2} · PARTS ${m.part}/${m.total / 2} · CARRYING ${m.carrying}/3</span>` +
          `<div class="meter body"><span>BATTLE BODY ${Math.round(m.progress * 100)}%</span><div class="bar"><i style="width:${m.progress * 100}%"></i></div></div>`
        : "";
      $("stats").innerHTML =
        `${clock}${stage}<span>SCORE ${s.score}</span>` +
        `<span class="shield">SHIELD ${"▮".repeat(Math.max(0, s.shield))}${"▯".repeat(Math.max(0, s.maxShield - s.shield))}</span>` +
        `<span class="blaster">BLASTER LV${s.blaster} ${"◆".repeat(s.blaster)}${"◇".repeat(5 - s.blaster)}</span>` +
        `<span class="missiles">MISSILES ${"▲".repeat(s.missiles)}${"△".repeat(s.missilesMax - s.missiles)} <i>Q</i></span>` +
        `<div id="fuel" class="meter"><span>THRUSTERS</span><div class="bar"><i></i></div></div>` + mission;
    }
    this.fuel(s.fuel, s.megaReady, s.stealth ? "STEALTH MODE" : `THRUSTERS LV${s.thrust}${s.thrust === 3 ? " · BOOST ON A FULL BAR = STEALTH" : ""}`);
    this.prompt(s.onFoot ? (m?.carrying ? "FOLLOW THE GOLD ARROW TO THE WAREHOUSE · SPACE JUMP · F = FLY" : "FIGHT MODE · SPACE JUMP · F = FLY") : s.canLand ? (s.landOnRoof ? "F — LAND ON THE ROOF" : "F — LAND (FIGHT MODE)") : s.braking ? "AIRBRAKE — GET UNDER 45 M TO LAND" : "");
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
    } else {
      lock.hidden = true;
      ptr.hidden = false;
      ptr.style.transform = `translate(${bot.x}px, ${bot.y}px) rotate(${bot.angle}rad)`;
    }
  },

  prompt(text) {
    const el = $("prompt");
    if (el.textContent !== text) el.textContent = text;
    el.hidden = !text;
  },

  /** Gold mission arrow: on screen = a diamond over the target, off screen = an edge arrow. */
  waypoint(w) {
    const el = $("waypoint");
    el.hidden = !w;
    if (!w) return;
    el.classList.toggle("edge", !w.onScreen);
    el.style.transform = w.onScreen ? `translate(${w.x}px, ${w.y}px)` : `translate(${w.x}px, ${w.y}px) rotate(${w.angle}rad)`;
    el.dataset.dist = `${Math.round(w.dist)} m`;
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

  hitFlash() {
    const f = $("flash");
    f.classList.remove("on");
    void f.offsetWidth; // restart the animation
    f.classList.add("on");
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

  subtitle(text) {
    const el = $("subtitle");
    el.textContent = text;
    el.classList.add("on");
    clearTimeout(subTimer);
    subTimer = setTimeout(() => el.classList.remove("on"), 2600);
  },
};
