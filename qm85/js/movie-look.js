// MOVIE WORLD look for realistic Oakland (owner 10-10: "make it look like we are playin in the movie world" — the
// reference is the BakeTunes x QM85 stills: dusk sunset skies, dusty-rose distance haze, deep shadows, lit windows,
// wet streets with light pools, a film grade). Everything is driven by the day cycle's night01 (0 = day, 1 = night),
// so dawn and noon stay close to the old look and the movie grade grows into dusk and night.
// Off switch for side-by-sides: ?movie=0 in the URL, or localStorage qm85_movie = "0".
import * as THREE from "three";

function movieOn() {
  try {
    if (new URLSearchParams(location.search).get("movie") === "0") return false;
    return localStorage.getItem("qm85_movie") !== "0";
  } catch {
    return true;
  }
}
export const MOVIE = movieOn();

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** 0 in daylight, 1 through golden hour and dusk, fading out again into full night. */
const duskBand = (n) => smooth(0.15, 0.7, n) * (1 - smooth(0.82, 1, n));
const nightBand = (n) => smooth(0.82, 1, n);

const DAY_HAZE = new THREE.Color(0x9fb2c6);
const DUSK_HAZE = new THREE.Color(0x9a7480); // dusty rose: the sunset air between the towers
const NIGHT_HAZE = new THREE.Color(0x16142c); // deep indigo, never pure black
const scratch = new THREE.Color();

/** Distance-haze colour for this time of day (main.js writes it into scene.fog every frame). */
export function movieHaze(n, out) {
  out.copy(DAY_HAZE).lerp(DUSK_HAZE, smooth(0.15, 0.75, n));
  return out.lerp(scratch.copy(NIGHT_HAZE), nightBand(n));
}

/** Tone-mapping exposure: a touch darker through dusk (moodier), lifted at night so the streets stay readable. */
export function movieExposure(n) {
  return lerp(lerp(0.82, 0.74, duskBand(n)), 0.92, nightBand(n));
}

/**
 * The physical sky can't reach the deep orange-to-violet of the stills, so the movie sky is tinted: warm at the
 * horizon, violet overhead, strongest at dusk. The env-map scene clones this sky (shared material), so reflections
 * pick the sunset up too. Call once, before the sky first renders.
 */
export function tintSky(material) {
  material.uniforms.movieHorizon = { value: new THREE.Vector3(1, 1, 1) };
  material.uniforms.movieZenith = { value: new THREE.Vector3(1, 1, 1) };
  const hook = "gl_FragColor = vec4( retColor, 1.0 );";
  if (!material.fragmentShader.includes(hook)) return false;
  material.fragmentShader = "uniform vec3 movieHorizon;\nuniform vec3 movieZenith;\n" + material.fragmentShader.replace(hook,
    `retColor *= mix( movieHorizon, movieZenith, smoothstep( 0.0, 0.45, clamp( dot( direction, up ), 0.0, 1.0 ) ) );
      ${hook}`);
  material.needsUpdate = true;
  return true;
}

const NIGHT_HORIZON = new THREE.Vector3(0.85, 0.85, 1.1);
const NIGHT_ZENITH = new THREE.Vector3(0.7, 0.72, 1.0);

/** Physical-sky settings: a hazy orange-violet sunset at dusk, a clear dark sky at night. */
export function movieSky(u, n) {
  const dusk = duskBand(n), night = nightBand(n);
  if (u.movieHorizon) {
    u.movieHorizon.value.set(lerp(1, 1.3, dusk), lerp(1, 0.78, dusk), lerp(1, 0.6, dusk)).lerp(NIGHT_HORIZON, night);
    u.movieZenith.value.set(lerp(1, 0.78, dusk), lerp(1, 0.62, dusk), lerp(1, 1.08, dusk)).lerp(NIGHT_ZENITH, night);
  }
  // ⛔ mieDirectionalG 0.975 made the sun's Mie peak ~3000x stronger: it overflowed the half-float buffers (and the
  // PMREM env built from this sky), so every glossy surface reflected Inf and bloom whited out the frame (10-10).
  u.turbidity.value = lerp(lerp(3.0, 6.0, dusk), 0.9, night);
  u.rayleigh.value = lerp(lerp(3.2, 2.8, dusk), 0.35, night);
  u.mieCoefficient.value = lerp(lerp(0.005, 0.007, dusk), 0.003, night);
  u.mieDirectionalG.value = lerp(0.92, 0.86, dusk); // a wider, softer sunset glow
}

/**
 * Bloom's high-pass gets a clean input: an Inf/NaN pixel (a sunset sun disk overflows the half-float targets) used to
 * smear through the blur mips and turn the WHOLE frame black (10-10 probe: black at dusk and night; fine with bloom
 * off). The real NaN source was road strips + curbs built without normals (fixed in oakland-details.js) — this is the
 * guard. ⚠ ANGLE/D3D may optimise isnan away, and min(NaN, x) returns x there, so it is NOT a NaN fix on its own.
 * Capped at 6 so the sunset glare on the Bay glows without erasing the bridge. Returns false if three's shader text changed and the patch missed.
 */
export function sanitizeBloom(bloom) {
  const m = bloom.materialHighPassFilter;
  if (!m) return false;
  if (m.userData.sanitized) return true;
  const hook = "vec4 texel = texture2D( tDiffuse, vUv );";
  if (!m.fragmentShader.includes(hook)) return false;
  m.fragmentShader = m.fragmentShader.replace(hook, `${hook}
      texel.rgb = ( any( isnan( texel.rgb ) ) || any( isinf( texel.rgb ) ) ) ? vec3( 0.0 ) : min( texel.rgb, vec3( bloomCap ) );`)
    .replace("void main()", "uniform float bloomCap;\nvoid main()");
  // the material shares the pass's uniforms object: movie Oakland caps at 6, main.js lifts it for cyberspace (uncapped)
  bloom.highPassUniforms.bloomCap = { value: 6 };
  m.needsUpdate = true;
  m.userData.sanitized = true;
  // half-resolution bloom (the full-res mip chain cost ~7 fps on the integrated GPU); only while a movie arena is up
  const full = bloom.setSize.bind(bloom);
  bloom.setSize = (w, h) => (bloom.halfRes ? full(Math.max(1, Math.round(w / 2)), Math.max(1, Math.round(h / 2))) : full(w, h));
  return true;
}

/**
 * Movie dusk = just AFTER sunset (every still: an orange band on the horizon, no blinding sun disk, the city lit by its
 * own lights). Through the dusk band the sun sits up to 6 degrees lower, so at DUSK it is just under the horizon: the sky
 * goes to afterglow and the 5-degree sun glare that washed out the Bay Bridge (10-10 probe) is gone. Writes into `out`
 * (runs every frame: no allocation) and returns it.
 */
export function movieSunDir(d, n, out) {
  const drop = THREE.MathUtils.degToRad(6) * duskBand(n);
  if (drop <= 0) return out.copy(d);
  const elev = Math.asin(THREE.MathUtils.clamp(d.y, -1, 1));
  const az = Math.atan2(d.z, d.x);
  const e = elev - drop;
  return out.set(Math.cos(e) * Math.cos(az), Math.sin(e), Math.cos(e) * Math.sin(az));
}

/** Night: half the fill and moonlight, so the windows, lamps and wet streets carry the city (stills: dark city, bright lights). */
export function movieNightLights(hemi, sun, n) {
  const k = lerp(1, 0.5, nightBand(n));
  hemi.intensity *= k;
  sun.intensity *= k;
}

/** Bloom on the bright lights only: barely there in daylight, full at dusk and night. */
export function movieBloom(bloom, n) {
  bloom.threshold = 1.6; // HDR, before tone mapping: sunlit walls (~1-2) stay out, lit windows (~2.5+), lamps, headlights and thrusters bloom
  bloom.radius = 0.3; // tight glows: a wide radius smeared the Bay sunset glare over the Bay Bridge (10-10 probe)
  bloom.strength = lerp(0.1, 0.45, smooth(0.3, 0.9, n));
}

/** Film grade (cinematic.js, after tone mapping): contrast, violet-blue lifts, warm gains, a little more colour. */
export function movieGrade(film, n) {
  const dusk = duskBand(n), night = nightBand(n);
  const u = film.uniforms;
  u.movie.value = 1;
  u.contrast.value = lerp(1.04, 1.14, Math.max(dusk, night));
  u.sat.value = lerp(1.06, 1.18, Math.max(dusk, night));
  u.lift.value.set(lerp(0, 0.012, dusk + night), lerp(-0.004, 0.0, night), lerp(0.012, 0.045, Math.max(dusk, night)));
  u.gain.value.set(lerp(1.0, 1.07, dusk) + 0.03 * night, 1.0, lerp(1.0, 0.88, dusk) + 0.05 * night);
}

// MOVIE WORLD BOTS (owner 10-10: "do the bots metal and rim light next"). The stills light every bot like a hero shot:
// glossy painted metal that mirrors the sunset, a warm edge on the sun side, a cool violet edge on the shadow side. It all
// lives in the shader on ONE shared uniform set, because the armour (battle-body.js) clones the bot's materials and writes
// their roughness / metalness / colour itself — the movie look never writes a material property, so both stack.
const BOT = {
  movieGloss: { value: 1 }, // x roughness (map included): below 1 = a glossier coat
  movieEnv: { value: 1 }, // x the reflected sky
  rimWarm: { value: new THREE.Color(0, 0, 0) },
  rimCool: { value: new THREE.Color(0, 0, 0) },
  rimDir: { value: new THREE.Vector3(0, 1, 0) }, // view space: the way the warm edge faces
};
const RIM_POWER = "4.5"; // how thin the edge light is (GLSL float)
const WARM_DUSK = new THREE.Color(1.0, 0.42, 0.14); // the sunset, low on the horizon
const COOL_DUSK = new THREE.Color(0.38, 0.3, 1.0); // violet sky on the shadow side
const WARM_NIGHT = new THREE.Color(1.0, 0.55, 0.2); // sodium streetlight glow from below
const COOL_NIGHT = new THREE.Color(0.45, 0.36, 1.0);
const DOWN = new THREE.Vector3(0, -1, 0);
const rimWorld = new THREE.Vector3();
const botScratch = new THREE.Color();
const botPatched = new WeakSet(); // material.clone() drops onBeforeCompile, so the armour's clones get patched on sight

const BOT_HOOKS = ["#include <roughnessmap_fragment>", "#include <emissivemap_fragment>", "#include <lights_fragment_maps>"];
let botHookWarned = false;

function patchBotMaterial(m) {
  m.onBeforeCompile = (shader) => {
    const missing = BOT_HOOKS.filter((h) => !shader.fragmentShader.includes(h));
    if (missing.length) { // a three.js upgrade renamed a chunk: render the stock bot rather than half a patch
      if (!botHookWarned) console.warn("movie-look: bot shader hooks missing, stock look kept:", missing);
      botHookWarned = true;
      return;
    }
    Object.assign(shader.uniforms, BOT);
    shader.fragmentShader = "uniform float movieGloss;\nuniform float movieEnv;\nuniform vec3 rimWarm;\nuniform vec3 rimCool;\nuniform vec3 rimDir;\n"
      + shader.fragmentShader
        .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\n\troughnessFactor *= movieGloss;")
        .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
	float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), ${RIM_POWER} );
	totalEmissiveRadiance += rimF * mix( rimCool, rimWarm, smoothstep( -0.3, 0.7, dot( normal, rimDir ) ) );`)
        .replace("#include <lights_fragment_maps>", "#include <lights_fragment_maps>\n#if defined( RE_IndirectSpecular )\n\tradiance *= movieEnv;\n#endif");
  };
  m.customProgramCacheKey = () => "qm85-movie-bot";
  m.needsUpdate = true;
  botPatched.add(m);
}

/** Movie Oakland: the pilot bot gets its own copies of the shared model materials, so the menu's bots keep theirs. */
export function movieBotSetup(bot) {
  bot.traverse((o) => {
    if (!o.isMesh || !o.material?.isMeshStandardMaterial || !o.material.userData.shared) return;
    const m = o.material.clone();
    m.userData.shared = false; // freed with the flight; its textures stay shared (dispose.js)
    o.material = m;
  });
}

/** Every frame: gloss + reflections from golden hour on, a warm sun-side edge at dusk, streetlight + violet edges at night. */
export function movieBot(bot, n, sunDir, camera) {
  bot.traverse((o) => {
    if (o.isMesh && o.material?.isMeshStandardMaterial && !botPatched.has(o.material)) patchBotMaterial(o.material);
  });
  const dusk = duskBand(n), night = nightBand(n), glow = smooth(0.15, 0.7, n);
  BOT.movieGloss.value = lerp(1, 0.6, glow);
  BOT.movieEnv.value = lerp(1, 1.8, glow);
  BOT.rimWarm.value.copy(WARM_DUSK).multiplyScalar(0.9 * dusk).add(botScratch.copy(WARM_NIGHT).multiplyScalar(0.3 * night));
  BOT.rimCool.value.copy(COOL_DUSK).multiplyScalar(0.3 * dusk).add(botScratch.copy(COOL_NIGHT).multiplyScalar(0.45 * night));
  // the warm edge faces the sunset on the horizon at dusk, then turns to the streetlights below at night
  rimWorld.set(sunDir.x, 0.15, sunDir.z).normalize().lerp(DOWN, night).normalize();
  BOT.rimDir.value.copy(rimWorld).transformDirection(camera.matrixWorldInverse);
}

/** How wet the streets read: after-rain from golden hour on (the movie look), soaked when it actually rains. */
export function wetness(n, rain01 = 0) {
  return Math.max(rain01, 0.85 * smooth(0.2, 0.8, n));
}

/** Wet asphalt: glossy enough to catch the sky and the lamps, darker the wetter it gets. */
export function wetAsphalt(mat, wet) {
  mat.roughness = lerp(0.92, 0.3, wet);
  mat.metalness = lerp(0, 0.12, wet);
  mat.envMapIntensity = lerp(1, 1.6, wet);
  mat.color.setHex(0x2c2c2f).multiplyScalar(lerp(1, 0.7, wet));
}

/**
 * Lit windows only: the facade art has the lit windows painted in (warm yellow panes) — the whole texture used to be
 * the emissive map, so at night entire beige walls glowed. This keeps the emission to the warm bright panes and
 * boosts them, so the windows (and only the windows) carry into the bloom.
 */
export function windowsOnly(mat) {
  mat.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#ifdef USE_EMISSIVEMAP
        vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
        float warmPane = clamp( ( ( emissiveColor.r + emissiveColor.g ) * 0.5 - emissiveColor.b - 0.2 ) * 4.0, 0.0, 1.0 )
          * smoothstep( 0.35, 0.65, emissiveColor.g );
        totalEmissiveRadiance *= emissiveColor.rgb * warmPane * 3.2;
      #endif`,
    );
  };
  mat.customProgramCacheKey = () => "qm85-movie-windows";
  mat.needsUpdate = true;
}
