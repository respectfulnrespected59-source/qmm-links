// The forces invading CYBERSPACE — QM85's home world — and ours (owner 09-23):
//   VIRUSES          spiky toxic swarmers that dive-bomb (no guns, they ram)
//   PALANTÍR BOTS    the all-seeing-eye drones (named for the seeing stone), leading shots
//   SHADOW OPS       black stealth flying wings of the gov shadow military, 2-round bursts
//   ROBED ACOLYTES   hooded knit-robed bots of the Serpent Priests, slow heavy orbs
//   THE SERPENT PRIEST  boss: a towering robed reptilian priest, 5-orb fans
// The priests are fictional on purpose — the look, not a real church.
import * as THREE from "three";
import { virusModel, palantirModel, shadowOpsModel, acolyteModel, serpentPriestModel } from "./flight-enemy-models.js";

// Models + idle animation live in flight-enemy-models.js (owner 09-24: "more pronounced and detailed").
/** Owner 09-24 (late): regular enemies read too small against the city — model AND hitbox grow. Bosses keep their size. */
export const ENEMY_SIZE = 1.45;
const sized = (cfg) => ({ ...cfg, scale: cfg.scale * ENEMY_SIZE, radius: cfg.radius * ENEMY_SIZE });

export const FACTIONS = {
  virus: {
    name: "VIRUSES", build: virusModel,
    cfg: sized({ scale: 1.2, hp: 1, radius: 0.9, speed: 17, orbit: 2, fireGap: [999, 999], volley: 0, score: 60, shot: 0x9dff5a }),
  },
  palantir: {
    name: "PALANTÍR BOTS", build: palantirModel,
    cfg: sized({ scale: 1.4, hp: 2, radius: 0.9, speed: 13, orbit: 18, fireGap: [1.6, 2.6], volley: 1, score: 100, shot: 0x8ff3ff }),
  },
  shadow: {
    name: "SHADOW OPS", build: shadowOpsModel,
    cfg: sized({ scale: 1.3, hp: 3, radius: 1.3, speed: 20, orbit: 26, fireGap: [1.1, 1.6], volley: 2, score: 150, shot: 0xe8f4ff }),
  },
  acolyte: {
    name: "ROBED ACOLYTES", build: acolyteModel,
    cfg: sized({ scale: 1.6, hp: 4, radius: 1.3, speed: 9, orbit: 20, fireGap: [1.8, 2.6], volley: 1, score: 200, shot: 0x9dff5a }),
  },
};

/** Afternoon mid boss: a hulking Palantír overseer — the eye that runs the drones. */
export const MID_BOSS = {
  name: "THE OVERSEER", build: palantirModel,
  cfg: { scale: 4.2, hp: 34, radius: 3.2, speed: 11, orbit: 30, fireGap: [1.1, 1.5], volley: 3, score: 1500, shot: 0x8ff3ff, boss: true },
};

export const BOSS = {
  name: "THE SERPENT PRIEST", build: serpentPriestModel,
  cfg: { scale: 5, hp: 55, radius: 4, speed: 8, orbit: 34, fireGap: [1.0, 1.4], volley: 5, score: 2500, shot: 0x9dff5a, boss: true },
};

/** Wave line-ups: faction -> count. */
export const WAVE_LINEUPS = [
  { virus: 4, palantir: 3 },
  { shadow: 4, palantir: 3, virus: 4 },
  { acolyte: 4, shadow: 3, virus: 6 },
];

export const lineupNames = (lineup) => Object.keys(lineup).map((k) => FACTIONS[k].name).join(" + ");
