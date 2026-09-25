// END-CARD EXTRAS (owner 09-25: "a leaderboard + share-your-run clip"). The run just finished goes on the board the
// moment the card opens, under the remembered initials — typing new ones only renames it, so skipping the box never
// loses a score. Below it: SAVE CLIP / SHARE for the recording (races record themselves; K records anywhere).
import { board, cleanName, lastName, rememberName, RACE_BOARDS } from "./leaderboard.js";
import { fmtTime } from "./race.js";
import { ClipRecorder } from "./clip.js";

const PILOT_TAG = { qm85: "QM85", vltrn8: "VLTRN8", bizzle: "3BIZZLE" };
const SHOW = 5;

function el(tag, cls = "", text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function button(text, onClick) {
  const b = el("button", "secondary", text);
  b.type = "button";
  b.addEventListener("click", onClick);
  return b;
}

/** Top-n rows of a board; `mine` = the entry id to highlight. */
export function boardList(boardId, mine = null, n = SHOW) {
  const race = RACE_BOARDS.has(boardId);
  const ol = el("ol", "lb");
  const rows = board.top(boardId, n);
  for (const e of rows) {
    const li = el("li", e.id === mine ? "me" : "");
    li.append(el("b", "", e.name), el("span", "", race ? fmtTime(e.time) : String(e.score)), el("small", "", PILOT_TAG[e.pilot] ?? ""));
    ol.append(li);
  }
  if (!rows.length) ol.append(el("li", "empty", "NO RUNS YET"));
  return ol;
}

/** entry: { time } (race) or { score } (mission), plus { pilot }. Adds it now; returns the board block for the card. */
export function boardSection(boardId, entry, title) {
  const name = lastName(entry.pilot);
  const { rank, id } = board.add(boardId, { ...entry, name });
  const wrap = el("div", "lb-wrap");
  wrap.append(el("div", "lb-head", `${title} · ${rank < 0 ? "OFF THE BOARD — BEAT THE TOP 10" : `#${rank + 1} ON THIS DEVICE`}`));
  let list = boardList(boardId, id);
  if (rank >= 0) {
    const row = el("label", "lb-name", "YOUR INITIALS ");
    const input = el("input");
    Object.assign(input, { value: name, maxLength: 3, autocomplete: "off", spellcheck: false });
    input.setAttribute("aria-label", "Your initials");
    const commit = () => {
      input.value = cleanName(input.value);
      rememberName(input.value);
      board.rename(boardId, id, input.value);
      const next = boardList(boardId, id);
      list.replaceWith(next);
      list = next;
    };
    input.addEventListener("keydown", (e) => {
      e.stopPropagation(); // typing initials must not mute (M), pause (P) or fire the card's Enter
      if (e.key !== "Enter") return;
      e.preventDefault();
      input.blur(); // blur fires "change" → commit
    });
    input.addEventListener("input", () => (input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 3)));
    input.addEventListener("change", commit);
    row.append(input);
    wrap.append(row);
  }
  wrap.append(list);
  return wrap;
}

/** SAVE CLIP / SHARE for a recording. clip: Promise<Blob|null> (the recorder is still closing the file). */
export function clipSection(clip, label, shareText) {
  const row = el("div", "clip-row");
  const note = el("small", "clip-note", "SAVING YOUR CLIP…");
  row.append(note);
  clip.then((blob) => {
    if (!blob) {
      row.remove();
      return;
    }
    const name = ClipRecorder.filename(label, blob.type);
    note.textContent = `YOUR RUN ON VIDEO · ${(blob.size / 1048576).toFixed(1)} MB`;
    row.append(button("SAVE CLIP", () => ClipRecorder.save(blob, name)));
    if (ClipRecorder.canShare(blob, name)) {
      row.append(button("SHARE", () => ClipRecorder.share(blob, name, shareText).catch((err) => {
        if (err?.name !== "AbortError") note.textContent = "SHARE DIDN'T GO THROUGH — SAVE IT INSTEAD"; // AbortError = they closed the sheet
      })));
    }
  });
  return row;
}
