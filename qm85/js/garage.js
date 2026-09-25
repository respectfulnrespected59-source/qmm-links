// THE GARAGE (owner 09-25): every run — win or shot down — banks its score as QMM CREDITS (score ÷ 10), and Rob &
// Mahal build permanent upgrades with them at the warehouse. Opened from the home screen. Everything persists per
// browser (localStorage) and a blocked store just means the garage starts empty.
const KEY = "qm85_garage";
export const CREDIT_RATE = 10; // score points per credit

export const UPGRADES = [
  { id: "armor", name: "ARMOR PLATING", costs: [300, 600, 1000], effect: (lv) => `+${lv} max shield`, line: "ROB: Bolted another plate on your chest. Take a hit for the team." },
  { id: "reactor", name: "REACTOR CORE", costs: [250, 500, 900], effect: (lv) => `thrusters refill +${lv * 25}%, drain −${lv * 10}%`, line: "ROB: Rewired the reactor. Boost longer, recharge faster." },
  { id: "rack", name: "MISSILE RACK", costs: [400, 800], effect: (lv) => `${3 + lv} missiles, reload ${9 - lv * 1.5}s`, line: "ROB: Wider rack. More heat-seekers, less waiting." },
  { id: "blaster", name: "BLASTER HEAD START", costs: [500, 1100], effect: (lv) => `start at BLASTER LV${1 + lv}`, line: "MAHAL: Pre-charged your cannons. Start hot." },
  { id: "thrust", name: "THRUSTER HEAD START", costs: [700], effect: (lv) => `start at THRUSTERS LV${1 + lv}`, line: "ROB: Tuned the thrusters. You leave the warehouse at LV2." },
  { id: "touch", name: "MAHAL'S TOUCH", costs: [350, 750], effect: (lv) => `copilot shield patch every ${14 - lv * 3}s`, line: "MAHAL: I'll patch you up quicker from the feeds. Stay up out there." },
  { id: "magnet", name: "PICKUP MAGNET", costs: [300, 650], effect: (lv) => `grab items, rings + Merkabas from ×${1 + lv * 0.5} as far`, line: "ROB: Magnetized your hands. Stuff comes to YOU now." },
];

function read() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if (raw && typeof raw === "object") return { credits: Math.max(0, Math.floor(Number(raw.credits) || 0)), earned: Number(raw.earned) || 0, levels: { ...raw.levels } };
  } catch {
    // corrupt or blocked: start fresh
  }
  return { credits: 0, earned: 0, levels: {} };
}

function write(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // private window: purchases last for this page only
  }
}

export const garage = {
  state: read(),

  level(id) {
    const def = UPGRADES.find((u) => u.id === id);
    return Math.min(def?.costs.length ?? 0, Math.max(0, Math.floor(Number(this.state.levels[id]) || 0)));
  },

  /** Bank a run's score. Returns the credits it earned. */
  earn(score) {
    const gained = Math.max(0, Math.floor((Number(score) || 0) / CREDIT_RATE));
    this.state = { ...this.state, credits: this.state.credits + gained, earned: this.state.earned + gained };
    write(this.state);
    return gained;
  },

  nextCost(id) {
    const def = UPGRADES.find((u) => u.id === id);
    const lv = this.level(id);
    return def && lv < def.costs.length ? def.costs[lv] : null;
  },

  buy(id) {
    const cost = this.nextCost(id);
    if (cost === null || cost > this.state.credits) return false;
    this.state = { ...this.state, credits: this.state.credits - cost, levels: { ...this.state.levels, [id]: this.level(id) + 1 } };
    write(this.state);
    return true;
  },

  /** What a new run starts with. FlightBattle reads this (opts.loadout). */
  loadout() {
    const lv = (id) => this.level(id);
    return {
      maxShield: 6 + lv("armor"),
      fuelRegen: 1 + lv("reactor") * 0.25,
      fuelDrain: 1 - lv("reactor") * 0.1,
      missiles: 3 + lv("rack"),
      reload: 9 - lv("rack") * 1.5,
      blaster: 1 + lv("blaster"),
      thrust: 1 + lv("thrust"),
      healEvery: 14 - lv("touch") * 3,
      magnet: 1 + lv("magnet") * 0.5,
    };
  },
};

/** The garage screen inside #card. onBack() returns to the home screen. */
export function openGarage(card, onBack, sfx) {
  card.className = "garage";
  card.replaceChildren();
  const h = document.createElement("h2");
  h.textContent = "THE QMM GARAGE";
  const sub = document.createElement("p");
  sub.className = "garage-sub";
  const said = document.createElement("p");
  said.className = "garage-said";
  said.textContent = "ROB: Every run pays. Score ÷ 10 = credits. What are we building?";
  const grid = document.createElement("div");
  grid.className = "garage-grid";
  const back = document.createElement("button");
  back.type = "button";
  back.textContent = "BACK";
  back.addEventListener("click", () => onBack());
  const render = () => {
    sub.textContent = `CREDITS: ${garage.state.credits}`;
    grid.replaceChildren(...UPGRADES.map((u) => {
      const lv = garage.level(u.id);
      const max = u.costs.length;
      const cost = garage.nextCost(u.id);
      const tile = document.createElement("div");
      tile.className = `tile${lv >= max ? " maxed" : ""}`;
      const name = document.createElement("b");
      name.textContent = u.name;
      const pips = document.createElement("span");
      pips.className = "pips";
      pips.textContent = "◆".repeat(lv) + "◇".repeat(max - lv);
      const eff = document.createElement("small");
      eff.textContent = lv ? `NOW: ${u.effect(lv)}` : "NOT BUILT YET";
      const next = document.createElement("small");
      next.className = "next";
      next.textContent = cost === null ? "MAXED OUT" : `NEXT: ${u.effect(lv + 1)}`;
      const buy = document.createElement("button");
      buy.type = "button";
      buy.className = "buy";
      buy.textContent = cost === null ? "✓ MAXED" : `BUILD · ${cost}`;
      buy.disabled = cost === null || cost > garage.state.credits;
      buy.addEventListener("click", () => {
        if (!garage.buy(u.id)) return;
        said.textContent = u.line;
        sfx?.powerUp?.();
        render();
      });
      tile.append(name, pips, eff, next, buy);
      return tile;
    }));
  };
  render();
  card.append(h, sub, said, grid, back);
  card.hidden = false;
  back.focus();
}
