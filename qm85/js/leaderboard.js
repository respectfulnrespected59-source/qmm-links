// LEADERBOARDS (owner 09-25: "a leaderboard + share-your-run clip"). Local to this browser for now — a GLOBAL board needs
// a small server, which is the owner's call (where it lives, who can post). Boards: one per ring-race course (fastest
// first) and the Oakland mission (highest score first). Ten entries kept, top five shown.
const KEY = "qm85_boards";
const KEEP = 10;
export const RACE_BOARDS = new Set(["bridge", "lake", "canyon"]);

/** A usable row for that board: races rank by time, the mission by score. */
const validEntry = (boardId) => (e) =>
  Boolean(e) && typeof e === "object" && typeof e.id === "string" && Number.isFinite(RACE_BOARDS.has(boardId) ? e.time : e.score);

/** Every board, with anything damaged dropped (09-25 review: a hand-edited `{bridge: {}}` threw on the next finish and
 *  froze the game until storage was cleared). */
function read() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? "{}");
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
    return Object.fromEntries(Object.entries(raw)
      .filter(([, list]) => Array.isArray(list))
      .map(([id, list]) => [id, list.filter(validEntry(id)).map((e) => ({ ...e, name: cleanName(e.name) }))]));
  } catch {
    return {};
  }
}

function write(all) {
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    // private window: the board lasts this page only
  }
}

/** Clean initials: 1-3 letters or digits, upper case. */
export const cleanName = (s) => String(s ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 3) || "???";

const NAME_KEY = "qm85_initials";
const PILOT_INITIALS = { qm85: "QM8", vltrn8: "MAH", bizzle: "ROB" };

/** The initials a new entry starts with: the last ones typed on this browser, else the pilot's. */
export function lastName(pilot) {
  try {
    const saved = localStorage.getItem(NAME_KEY);
    if (saved) return cleanName(saved);
  } catch {
    // blocked storage: fall through to the pilot's initials
  }
  return PILOT_INITIALS[pilot] ?? "QM8";
}

export function rememberName(name) {
  try {
    localStorage.setItem(NAME_KEY, cleanName(name));
  } catch {
    // private window: initials last this page only
  }
}

export const board = {
  top(id, n = 5) {
    return (read()[id] ?? []).slice(0, n);
  },

  /** entry: { name, time? (races), score? (mission), pilot }. Returns { rank (0-based, -1 = missed the cut), id }. */
  add(boardId, entry) {
    const all = read();
    const id = Math.random().toString(36).slice(2, 8);
    const race = RACE_BOARDS.has(boardId);
    const list = [...(all[boardId] ?? []), { ...entry, id, name: cleanName(entry.name), at: new Date().toISOString() }]
      .sort((a, b) => (race ? a.time - b.time : b.score - a.score))
      .slice(0, KEEP);
    write({ ...all, [boardId]: list });
    return { rank: list.findIndex((e) => e.id === id), id };
  },

  /** New initials on an entry already on the board (the end card adds it first, the player types after). */
  rename(boardId, id, name) {
    const all = read();
    const list = (all[boardId] ?? []).map((e) => (e.id === id ? { ...e, name: cleanName(name) } : e));
    write({ ...all, [boardId]: list });
  },
};
