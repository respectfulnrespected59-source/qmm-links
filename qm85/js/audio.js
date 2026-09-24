// Tiny WebAudio synth — every sound is generated, no audio files to ship.
let ctx = null;
let master = null;
let sfxMuted = false;

function ac() {
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

/** Every sound goes through one master gain so mute is a single switch. */
function out() {
  const a = ac();
  if (!master) {
    master = a.createGain();
    master.connect(a.destination);
  }
  master.gain.value = sfxMuted ? 0 : 1;
  return master;
}

export function setSfxMuted(m) {
  sfxMuted = m;
  if (master) master.gain.value = m ? 0 : 1;
}

function tone(freq, dur, { type = "square", vol = 0.08, slide = 0, delay = 0 } = {}) {
  const a = ac();
  const t = a.currentTime + delay;
  const osc = a.createOscillator();
  const gain = a.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(out());
  osc.start(t);
  osc.stop(t + dur);
}

function noise(dur, vol = 0.1) {
  const a = ac();
  const buf = a.createBuffer(1, a.sampleRate * dur, a.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = a.createBufferSource();
  const gain = a.createGain();
  gain.gain.value = vol;
  src.buffer = buf;
  src.connect(gain).connect(out());
  src.start();
}

/**
 * THRUSTER ENGINE — a ROCKET, not a buzz (owner 09-24). Three noise layers, no oscillators:
 *   rumble  — deep lowpassed noise, the motor's body
 *   roar    — bandpassed noise that opens up with speed and boost (the exhaust)
 *   crackle — slow random pops modulating the roar, the way a real engine sputters at the edges
 * STEALTH MODE trades roar for an airy high hiss.
 */
const engine = {
  nodes: null,
  build() {
    const a = ac();
    const noise = () => {
      const buf = a.createBuffer(1, a.sampleRate * 3, a.sampleRate);
      const d = buf.getChannelData(0);
      let last = 0;
      for (let i = 0; i < d.length; i++) { // pink-ish: integrate a little so the low end is rich
        const w = Math.random() * 2 - 1;
        last = (last + 0.02 * w) / 1.02;
        d[i] = last * 3.5 + w * 0.1;
      }
      const src = a.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      src.start();
      return src;
    };
    const bus = a.createGain();
    bus.gain.value = 0;
    const rumbleLP = a.createBiquadFilter();
    rumbleLP.type = "lowpass";
    rumbleLP.frequency.value = 140;
    rumbleLP.Q.value = 0.9;
    const rumbleGain = a.createGain();
    noise().connect(rumbleLP).connect(rumbleGain).connect(bus);
    const roarBP = a.createBiquadFilter();
    roarBP.type = "bandpass";
    roarBP.frequency.value = 320;
    roarBP.Q.value = 0.6;
    const roarGain = a.createGain();
    const crackle = a.createGain();
    crackle.gain.value = 1;
    noise().connect(roarBP).connect(crackle).connect(roarGain).connect(bus);
    const hissHP = a.createBiquadFilter();
    hissHP.type = "highpass";
    hissHP.frequency.value = 2600;
    const hissGain = a.createGain();
    hissGain.gain.value = 0;
    noise().connect(hissHP).connect(hissGain).connect(bus);
    bus.connect(out());
    this.nodes = { bus, rumbleLP, rumbleGain, roarBP, roarGain, crackle, hissGain };
    this.crackleAt = 0;
  },
  /** speed01 0..1 of this level's top boost; call every flight frame. on=false fades it out. */
  set({ on, speed01 = 0, boosting = false, level = 1, stealth = false, braking = false }) {
    if (!ctx && !on) return;
    if (!this.nodes) this.build();
    const n = this.nodes;
    const a = ac();
    const t = a.currentTime;
    const drive = on ? Math.min(1, 0.3 + speed01 * 0.7) : 0;
    n.bus.gain.setTargetAtTime(on ? 1 : 0, t, on ? 0.12 : 0.2);
    n.rumbleLP.frequency.setTargetAtTime(110 + drive * 90 + (boosting ? 60 : 0), t, 0.15);
    n.rumbleGain.gain.setTargetAtTime(0.16 + drive * 0.1 + level * 0.02 + (boosting ? 0.14 : 0), t, boosting ? 0.06 : 0.15); // boost SLAMS in (owner: more intensity on boost)
    n.roarBP.frequency.setTargetAtTime(260 + drive * 380 + (boosting ? 260 : 0) + level * 40, t, 0.12);
    n.roarGain.gain.setTargetAtTime((stealth ? 0.03 : 0.05) + drive * 0.05 + (boosting ? 0.17 : 0), t, boosting ? 0.05 : 0.12);
    n.hissGain.gain.setTargetAtTime(braking ? 0.05 : stealth ? 0.035 : boosting ? 0.02 : 0, t, braking ? 0.05 : 0.2); // AIRBRAKE = a hard hiss of bleed air
    if (t > this.crackleAt) { // random pops in the roar
      this.crackleAt = t + 0.05 + Math.random() * 0.12;
      n.crackle.gain.setTargetAtTime(0.7 + Math.random() * 0.6, t, 0.02);
    }
  },
};

let drive = null; // shared distortion curve for the blaster growl
let cannonNoise = null;
function driveCurve() {
  if (drive) return drive;
  drive = new Float32Array(1024);
  for (let i = 0; i < 1024; i++) {
    const x = (i / 1023) * 2 - 1;
    drive[i] = Math.tanh(x * 6) * 0.9; // hard-ish saturation: a snarl, not a buzz
  }
  return drive;
}

/** One blaster shot. Level 1..5 = deeper, longer, heavier. Kept short so rapid fire never smears. */
function plasmaCannon(level) {
  const a = ac();
  const t = a.currentTime;
  const k = (level - 1) / 4; // 0..1
  const len = 0.2 + k * 0.1;
  const bus = a.createGain();
  bus.gain.value = 0.72; // headroom: four layers stacked over the music
  bus.connect(out());
  // 1. CRACK: a bright noise snap, high-passed, 25 ms
  if (!cannonNoise) { // built once: rapid fire must not generate noise every shot
    cannonNoise = a.createBuffer(1, Math.ceil(a.sampleRate * 0.35), a.sampleRate);
    const d = cannonNoise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  const nBuf = cannonNoise;
  const crack = a.createBufferSource();
  crack.buffer = nBuf;
  const hp = a.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 2200;
  const cg = a.createGain();
  cg.gain.setValueAtTime(0.28, t);
  cg.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
  crack.connect(hp).connect(cg).connect(bus);
  crack.start(t);
  crack.stop(t + 0.04);
  // 2. GROWL: two detuned saws through the distortion, pitch diving, low-pass closing
  const shaper = a.createWaveShaper();
  shaper.curve = driveCurve();
  shaper.oversample = "2x";
  const lp = a.createBiquadFilter();
  lp.type = "lowpass";
  lp.Q.value = 6;
  lp.frequency.setValueAtTime(4200, t);
  lp.frequency.exponentialRampToValueAtTime(260, t + len);
  const gg = a.createGain();
  gg.gain.setValueAtTime(0.0001, t);
  gg.gain.exponentialRampToValueAtTime(0.16 + k * 0.05, t + 0.008);
  gg.gain.exponentialRampToValueAtTime(0.0001, t + len);
  shaper.connect(lp).connect(gg).connect(bus);
  for (const det of [-14, 11]) {
    const o = a.createOscillator();
    o.type = "sawtooth";
    o.detune.value = det;
    o.frequency.setValueAtTime(420 - k * 140, t);
    o.frequency.exponentialRampToValueAtTime(55 - k * 12, t + len);
    o.connect(shaper);
    o.start(t);
    o.stop(t + len + 0.02);
  }
  // 3. SUB PUNCH: a sine kick you feel more than hear
  const sub = a.createOscillator();
  sub.type = "sine";
  sub.frequency.setValueAtTime(130 - k * 20, t);
  sub.frequency.exponentialRampToValueAtTime(38, t + 0.16 + k * 0.06);
  const sg = a.createGain();
  sg.gain.setValueAtTime(0.0001, t);
  sg.gain.exponentialRampToValueAtTime(0.42 + k * 0.12, t + 0.006);
  sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.2 + k * 0.08);
  sub.connect(sg).connect(bus);
  sub.start(t);
  sub.stop(t + 0.32);
  // 4. GRIT TAIL: band-passed noise that decays after the shot (the "debris")
  const grit = a.createBufferSource();
  grit.buffer = nBuf;
  const bp = a.createBiquadFilter();
  bp.type = "bandpass";
  bp.Q.value = 0.8;
  bp.frequency.setValueAtTime(1600, t);
  bp.frequency.exponentialRampToValueAtTime(300, t + len);
  const tg = a.createGain();
  tg.gain.setValueAtTime(0.0001, t);
  tg.gain.exponentialRampToValueAtTime(0.07 + k * 0.05, t + 0.02);
  tg.gain.exponentialRampToValueAtTime(0.0001, t + len);
  grit.connect(bp).connect(tg).connect(bus);
  grit.start(t);
  grit.stop(t + len);
}

/** Noise through a filter whose cutoff sweeps f0 -> f1 (explosions, roars, debris). */
function sweptNoise(dur, vol, { type = "lowpass", f0 = 4000, f1 = 200, q = 0.8, delay = 0, decay = 0.3 } = {}) {
  const a = ac();
  const t = a.currentTime + delay;
  const len = Math.floor(a.sampleRate * dur);
  const buf = a.createBuffer(1, len, a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (a.sampleRate * decay));
  const src = a.createBufferSource();
  src.buffer = buf;
  const filt = a.createBiquadFilter();
  filt.type = type;
  filt.Q.value = q;
  filt.frequency.setValueAtTime(f0, t);
  filt.frequency.exponentialRampToValueAtTime(Math.max(40, f1), t + dur);
  const g = a.createGain();
  g.gain.value = vol;
  src.connect(filt).connect(g).connect(out());
  src.start(t);
}

/** Every faction dies with its own voice (owner 09-24 audit: kills were one generic boom). */
const DEATH = {
  virus: () => { // wet goo pop + bubbling
    sweptNoise(0.35, 0.3, { f0: 1800, f1: 160, decay: 0.08 });
    tone(240, 0.22, { type: "sine", slide: -190, vol: 0.14 });
    [520, 380, 610].forEach((f, i) => tone(f, 0.06, { type: "sine", slide: -200, vol: 0.05, delay: 0.06 + i * 0.05 }));
  },
  palantir: () => { // electric short-out, the eye pops, then a falling whine
    for (let i = 0; i < 5; i++) tone(1400 + Math.random() * 2200, 0.04, { type: "square", vol: 0.035, delay: i * 0.035 });
    sweptNoise(0.45, 0.24, { type: "bandpass", f0: 5000, f1: 400, q: 2, decay: 0.15 });
    tone(1600, 0.6, { type: "sawtooth", slide: -1450, vol: 0.05, delay: 0.08 });
  },
  shadow: () => { // jet breaking up: sub boom + roaring debris
    tone(80, 0.8, { type: "sine", slide: -50, vol: 0.3 });
    sweptNoise(1.1, 0.34, { f0: 6000, f1: 150, decay: 0.35 });
    tone(2600, 0.05, { type: "square", slide: -2200, vol: 0.05 });
  },
  acolyte: () => { // the robe tears, a hollow cursed bell rings out
    sweptNoise(0.6, 0.26, { type: "bandpass", f0: 900, f1: 250, q: 1.5, decay: 0.2 });
    [330, 333, 495].forEach((f) => tone(f, 0.9, { type: "triangle", vol: 0.05 }));
  },
  boss: () => { // a building-sized detonation
    tone(55, 1.8, { type: "sine", slide: -30, vol: 0.45 });
    sweptNoise(2.2, 0.45, { f0: 7000, f1: 90, decay: 0.7 });
    tone(3000, 0.08, { type: "square", slide: -2700, vol: 0.07 });
  },
};

export const sfx = {
  engine,
  explode: (kind = "virus") => (DEATH[kind] ?? DEATH.virus)(),
  // BOSS ENTRANCE: two detuned low saws growling through a lowpass that opens and closes, over a rumble
  roar: () => {
    const a = ac();
    const t = a.currentTime;
    const lp = a.createBiquadFilter();
    lp.type = "lowpass";
    lp.Q.value = 6;
    lp.frequency.setValueAtTime(180, t);
    lp.frequency.exponentialRampToValueAtTime(1400, t + 0.5);
    lp.frequency.exponentialRampToValueAtTime(140, t + 1.7);
    const g = a.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.15);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.9);
    lp.connect(g).connect(out());
    for (const [f, det] of [[62, 0], [62, 9], [124, -5]]) {
      const o = a.createOscillator();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(f, t);
      o.frequency.linearRampToValueAtTime(f * 0.8, t + 1.8);
      o.detune.value = det * 10;
      o.connect(lp);
      o.start(t);
      o.stop(t + 2);
    }
    sweptNoise(1.8, 0.16, { f0: 600, f1: 80, decay: 0.8 });
  },
  enrage: () => { [880, 660, 880, 660].forEach((f, i) => tone(f, 0.14, { type: "square", vol: 0.06, delay: i * 0.16 })); sfx.roar(); },
  snap: (i = 0) => { tone(1800 + i * 90, 0.08, { type: "triangle", slide: -900, vol: 0.06 }); tone(140, 0.12, { type: "square", slide: -60, vol: 0.08 }); },
  transform: () => {
    tone(110, 1.6, { type: "sawtooth", slide: 1700, vol: 0.07 });
    [392, 523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, 0.35, { type: "triangle", vol: 0.05, delay: 1.2 + i * 0.07 }));
    tone(60, 1.4, { type: "sine", slide: -30, vol: 0.4, delay: 1.6 });
    sweptNoise(1.6, 0.35, { f0: 8000, f1: 120, decay: 0.5, delay: 1.6 });
  },
  // HYPER BOOST: a deep boom that drops away under a sharp supersonic crack
  sonicBoom: () => {
    const a = ac();
    const t = a.currentTime;
    const boom = a.createOscillator();
    boom.type = "sine";
    boom.frequency.setValueAtTime(95, t);
    boom.frequency.exponentialRampToValueAtTime(28, t + 0.9);
    const bg = a.createGain();
    bg.gain.setValueAtTime(0.0001, t);
    bg.gain.exponentialRampToValueAtTime(0.45, t + 0.02);
    bg.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    boom.connect(bg).connect(out());
    boom.start(t);
    boom.stop(t + 1.2);
    const len = a.sampleRate * 1.2;
    const buf = a.createBuffer(1, len, a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (a.sampleRate * 0.25));
    const src = a.createBufferSource();
    src.buffer = buf;
    const lp = a.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(6000, t);
    lp.frequency.exponentialRampToValueAtTime(180, t + 1);
    const ng = a.createGain();
    ng.gain.value = 0.35;
    src.connect(lp).connect(ng).connect(out());
    src.start(t);
    tone(3200, 0.06, { type: "square", slide: -2600, vol: 0.06, delay: 0.015 }); // the crack
  },
  unlock: () => ac(),
  jump: () => tone(420, 0.15, { slide: 380, vol: 0.05 }),
  shard: () => [880, 1320].forEach((f, i) => tone(f, 0.12, { type: "triangle", delay: i * 0.06 })),
  orb: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.2, { type: "triangle", delay: i * 0.07 })),
  blast: () => tone(900, 0.18, { type: "sawtooth", slide: -700, vol: 0.06 }),
  boom: () => noise(0.35, 0.18),
  // MISSILE launch: a whoosh of noise under a rising-then-falling whistle
  missile: () => { noise(0.5, 0.16); tone(900, 0.45, { type: "sine", slide: -600, vol: 0.06 }); tone(180, 0.3, { type: "sawtooth", slide: 220, vol: 0.05 }); },
  hurt: () => tone(200, 0.3, { type: "sawtooth", slide: -140, vol: 0.1 }),
  gate: () => [300, 450, 600].forEach((f, i) => tone(f, 0.3, { type: "sine", delay: i * 0.1, vol: 0.1 })),
  portal: () => tone(200, 1.2, { type: "sine", slide: 1400, vol: 0.12 }),
  crunch: () => noise(0.12, 0.25),
  alert: () => tone(1200, 0.25, { type: "square", vol: 0.07 }),
  caught: () => [400, 300, 200].forEach((f, i) => tone(f, 0.2, { type: "square", delay: i * 0.12, vol: 0.09 })),
  build: () => tone(110, 0.08, { type: "square", vol: 0.04 }),
  // owner 09-23: "a more powerful blasting sound" — a crack, a body and a sub thump, all heavier per level
  // PLASMA CANNON (owner 09-24: "more dangerously destructive"): crack + distorted growl + sub punch + grit tail.
  laser: (level = 1) => plasmaCannon(level),
  enemyShot: () => tone(520, 0.14, { type: "sine", slide: -300, vol: 0.04 }),
  powerUp: () => [392, 523, 659, 880, 1175].forEach((f, i) => tone(f, 0.16, { type: "square", delay: i * 0.05, vol: 0.05 })),
  thrust: () => { noise(0.25, 0.14); tone(260, 0.3, { type: "sawtooth", slide: 500, vol: 0.05 }); },
  strike: () => { tone(120, 0.5, { type: "sawtooth", slide: 1800, vol: 0.09 }); noise(0.5, 0.25); },
  // metal-on-metal: a bright ping over a noise scrape; head-on adds a low crunch
  clang: (hard = false) => {
    tone(2400 + Math.random() * 800, 0.18, { type: "triangle", slide: -1200, vol: 0.05 });
    noise(hard ? 0.35 : 0.18, hard ? 0.22 : 0.12);
    if (hard) tone(110, 0.3, { type: "square", slide: -60, vol: 0.1 });
  },
  twirl: () => tone(300, 0.45, { type: "triangle", slide: 900, vol: 0.05 }),
  megaCharge: () => tone(180, 1.0, { type: "sawtooth", slide: 1600, vol: 0.06 }),
  megaFire: () => {
    noise(0.9, 0.3);
    tone(90, 0.9, { type: "square", slide: -60, vol: 0.12 });
  },
};
