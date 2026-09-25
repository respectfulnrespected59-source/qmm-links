// FREE OAKLAND MAP (09-25): the whole city at a glance, north up — occupied districts pulse red, freed ones glow
// gold, the QMM Warehouse is the gold square, QM85 is the white arrow. The streets + water are painted once onto
// an offscreen canvas; each redraw (every few frames) only stamps the live layer on top.
const MAP = { x0: -3400, z0: -2600, w: 6400, h: 4600 }; // metres covered (x east, z south)
const REDRAW_EVERY = 4; // frames
const BIG_ROADS = new Set(["motorway", "trunk", "primary", "secondary"]);

export class Minimap {
  constructor(canvas) {
    this.canvas = canvas;
    this.g = canvas?.getContext("2d") ?? null;
    this.bg = null;
    this.frame = 0;
  }

  #px(x, z) {
    const { width, height } = this.canvas;
    return [((x - MAP.x0) / MAP.w) * width, ((z - MAP.z0) / MAP.h) * height];
  }

  /** Paint the static layer: Bay, lakes, big roads. */
  bake(arena) {
    if (!this.g) return;
    const { width, height } = this.canvas;
    const bg = document.createElement("canvas");
    bg.width = width;
    bg.height = height;
    const g = bg.getContext("2d");
    g.fillStyle = "#12101a";
    g.fillRect(0, 0, width, height);
    g.fillStyle = "#16324a"; // the Bay
    const [sx] = this.#px(arena.shoreX ?? MAP.x0, 0);
    g.fillRect(0, 0, Math.max(0, sx), height);
    for (const poly of arena.water ?? []) {
      g.beginPath();
      poly.forEach(([x, z], i) => {
        const [px, py] = this.#px(x, z);
        if (i) g.lineTo(px, py);
        else g.moveTo(px, py);
      });
      g.fill();
    }
    g.lineWidth = width / 220;
    for (const r of arena.roads ?? []) {
      const big = BIG_ROADS.has(r.k);
      g.strokeStyle = big ? "rgba(220, 205, 255, 0.28)" : "rgba(220, 205, 255, 0.08)";
      g.beginPath();
      r.p.forEach(([x, z], i) => {
        const [px, py] = this.#px(x, z);
        if (i) g.lineTo(px, py);
        else g.moveTo(px, py);
      });
      g.stroke();
    }
    this.bg = bg;
  }

  /** f: the FlightBattle. t: seconds (for the pulse). */
  draw(f, t) {
    if (!this.g || !this.bg || !f.districts || (this.frame++ % REDRAW_EVERY)) return;
    const g = this.g;
    const { width } = this.canvas;
    const k = width / MAP.w; // px per metre
    const s = width / 220; // the buffer is drawn at 2x its CSS size: scale strokes, marks and text with it
    g.drawImage(this.bg, 0, 0);
    for (const d of f.districts.mapState()) {
      const [x, y] = this.#px(d.x, d.z);
      const pulse = d.free ? 1 : 0.6 + 0.4 * Math.sin(t * (d.awake ? 8 : 3));
      g.beginPath();
      g.arc(x, y, d.r * k, 0, Math.PI * 2);
      g.fillStyle = d.free ? "rgba(212, 167, 58, 0.28)" : `rgba(255, 42, 68, ${0.14 + 0.12 * pulse})`;
      g.fill();
      g.lineWidth = (d.awake && !d.free ? 2 : 1) * s;
      g.strokeStyle = d.free ? "#ffcf5a" : `rgba(255, 90, 110, ${0.5 + 0.5 * pulse})`;
      g.stroke();
      if (!d.free) { // the relay: a red diamond
        const [rx, ry] = this.#px(d.relay.x, d.relay.z);
        g.fillStyle = "#ff3a4a";
        g.beginPath();
        g.moveTo(rx, ry - 3 * s);
        g.lineTo(rx + 3 * s, ry);
        g.lineTo(rx, ry + 3 * s);
        g.lineTo(rx - 3 * s, ry);
        g.fill();
      }
      // names sit INSIDE each circle, just under the relay: above/below them the neighbours + warehouse collide
      g.font = `700 ${Math.round(7 * s)}px Orbitron, sans-serif`;
      g.textAlign = "center";
      const tw = g.measureText(d.name).width;
      const lx = Math.min(width - tw / 2 - 2 * s, Math.max(tw / 2 + 2 * s, x)); // never clipped at the frame
      const ly = y + 11 * s;
      g.lineWidth = 3 * s;
      g.strokeStyle = "rgba(10, 6, 18, 0.9)";
      g.strokeText(d.name, lx, ly);
      g.fillStyle = d.free ? "#ffe39a" : "#ffd0d6";
      g.fillText(d.name, lx, ly);
    }
    for (const it of f.mission?.items ?? []) { // loose items waiting on the street
      if (it.taken || it.locked) continue;
      const [x, y] = this.#px(it.pos.x, it.pos.z);
      g.fillStyle = it.kind === "data" ? "#c58bff" : "#ffb338";
      g.fillRect(x - 1.5 * s, y - 1.5 * s, 3 * s, 3 * s);
    }
    const [hx, hy] = this.#px(-200, 700);
    g.fillStyle = "#ffcf5a";
    g.fillRect(hx - 3 * s, hy - 3 * s, 6 * s, 6 * s);
    if (f.boss?.alive) {
      const [bx, by] = this.#px(f.boss.obj.position.x, f.boss.obj.position.z);
      g.fillStyle = "#ff2a2a";
      g.beginPath();
      g.arc(bx, by, (4 + Math.sin(t * 10)) * s, 0, Math.PI * 2);
      g.fill();
    }
    const [px, py] = this.#px(f.pos.x, f.pos.z);
    const a = Math.atan2(Math.cos(f.yaw), Math.sin(f.yaw)); // his heading on the canvas (x east, y = z south)
    g.save();
    g.translate(px, py);
    g.rotate(a);
    g.scale(s * 1.2, s * 1.2);
    g.fillStyle = "#ffffff";
    g.strokeStyle = "#000";
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(6, 0);
    g.lineTo(-4, 3.5);
    g.lineTo(-2, 0);
    g.lineTo(-4, -3.5);
    g.closePath();
    g.fill();
    g.stroke();
    g.restore();
  }
}
