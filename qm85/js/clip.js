// SHARE-YOUR-RUN CLIPS (owner 09-25: "a leaderboard + share-your-run clip"). Records the 3D view at 30 fps with the
// game's sound and the soundtrack into an MP4 (WebM where MP4 isn't offered) the player can SAVE (download) or SHARE (phone share sheet → IG /
// TikTok / messages). Ring races record themselves from GO to the finish line; K starts / stops a clip anywhere.
// The HUD is HTML on top of the canvas, so clips are the clean 3D picture — no stats or buttons in the shot.
const FPS = 30;
const BITRATE = 5_000_000;
const MAX_SECONDS = 180; // a clip stops itself after three minutes

// MP4 (H.264 + AAC) first: it uploads straight to IG / TikTok / YouTube, shows a real duration (Chrome's WebM clips
// have none), and H.264 is usually encoded on the GPU. WebM is the fallback; VP8 before VP9 (lighter to encode).
function pickMime() {
  const types = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9,opus", "video/webm"];
  return types.find((t) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(t)) ?? "";
}

export class ClipRecorder {
  /** canvas: the renderer's canvas · audioStreams(): MediaStream[] with the game + music audio (may be empty). */
  constructor(canvas, audioStreams = () => []) {
    this.canvas = canvas;
    this.audioStreams = audioStreams;
    this.rec = null;
    this.chunks = [];
    this.startedAt = 0;
    this.onAutoStop = null; // (blob) => void when the three-minute cap ends a clip
    this.supported = typeof MediaRecorder !== "undefined" && typeof canvas.captureStream === "function";
  }

  get recording() {
    return Boolean(this.rec && this.rec.state === "recording");
  }

  /** Rolling OR paused (the game's pause menu holds the clip, it doesn't end it). */
  get active() {
    return Boolean(this.rec && this.rec.state !== "inactive");
  }

  get seconds() {
    return this.recording ? (performance.now() - this.startedAt) / 1000 : 0;
  }

  /** The game paused / resumed: no frozen frames in the clip, and the clock skips the pause. */
  pause(on) {
    if (on && this.rec?.state === "recording") {
      this.rec.pause();
      this.heldAt = performance.now();
    } else if (!on && this.rec?.state === "paused") {
      this.rec.resume();
      this.startedAt += performance.now() - this.heldAt;
    }
  }

  start() {
    if (!this.supported || this.active) return false;
    try {
      const stream = this.canvas.captureStream(FPS);
      // a CLONE of the shared audio track: stopping this clip's tracks must never end the tap the next clip uses
      for (const s of this.audioStreams()) for (const track of s?.getAudioTracks?.() ?? []) stream.addTrack(track.clone());
      this.stream = stream;
      this.chunks = [];
      const mimeType = pickMime();
      this.rec = new MediaRecorder(stream, mimeType ? { mimeType, videoBitsPerSecond: BITRATE } : { videoBitsPerSecond: BITRATE });
      this.rec.ondataavailable = (e) => { if (e.data?.size) this.chunks.push(e.data); };
      this.rec.start(500);
      this.startedAt = performance.now();
      clearTimeout(this.cap);
      this.cap = setTimeout(() => this.stop().then((blob) => blob && this.onAutoStop?.(blob)), MAX_SECONDS * 1000);
      return true;
    } catch (err) {
      console.warn("[clip] recording unavailable:", err?.message ?? err);
      this.rec = null;
      return false;
    }
  }

  /** Stop; resolves to the clip Blob (or null when nothing was recording). */
  stop() {
    clearTimeout(this.cap);
    const rec = this.rec;
    if (!rec || rec.state === "inactive") return Promise.resolve(null);
    return new Promise((resolve) => {
      rec.onstop = () => {
        const blob = this.chunks.length ? new Blob(this.chunks, { type: rec.mimeType || "video/webm" }) : null;
        this.chunks = [];
        this.rec = null;
        this.#release();
        resolve(blob);
      };
      rec.stop();
    });
  }

  /** Throw the recording away (a wipeout, back to the menu). */
  discard() {
    clearTimeout(this.cap);
    if (this.rec && this.rec.state !== "inactive") {
      this.rec.onstop = null;
      this.rec.stop();
    }
    this.rec = null;
    this.chunks = [];
    this.#release();
  }

  /** End this clip's capture tracks (the canvas feed + its audio clone) so nothing keeps capturing after it. */
  #release() {
    for (const track of this.stream?.getTracks() ?? []) track.stop();
    this.stream = null;
  }

  /** Safari records MP4, everyone else WebM: the extension follows the clip's real type. */
  static filename(label, type = "video/webm") {
    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
    return `qm85-${label}-${stamp}.${type.includes("mp4") ? "mp4" : "webm"}`;
  }

  static save(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  static canShare(blob, name) {
    try {
      return Boolean(navigator.canShare?.({ files: [new File([blob], name, { type: blob.type })] }));
    } catch {
      return false; // canShare throws on some browsers for unsupported types: no share button there
    }
  }

  static async share(blob, name, text) {
    const file = new File([blob], name, { type: blob.type });
    await navigator.share({ files: [file], title: "QM85: QUANTUM RUN", text });
  }
}
