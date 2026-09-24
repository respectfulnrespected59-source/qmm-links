// The film finish for FLIGHT BATTLE: grade (violet shadows, warm gold highlights), a touch of
// lens chromatic aberration toward the edges, vignette and moving film grain.
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

const FilmShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    grain: { value: 0.022 }, // UHD pass (owner 09-24: "a little bit grainy")
    vignette: { value: 0.55 },
    aberration: { value: 0.0005 },
    grade: { value: 1 }, // 1 = QMM violet/gold grade (cyberspace), 0 = true colours (realistic Oakland)
    realistic: { value: 0 }, // 1 = filmic S-curve contrast, warm highlights, cool shadows (Oakland)
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float time, grain, vignette, aberration, grade, realistic;
    varying vec2 vUv;
    float rand(vec2 c) { return fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 off = (vUv - 0.5) * aberration * length(vUv - 0.5) * 4.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      float luma = dot(col, vec3(0.299, 0.587, 0.114));
      col += grade * mix(vec3(0.035, 0.0, 0.07), vec3(0.05, 0.03, -0.02), smoothstep(0.2, 0.8, luma)); // violet lows, gold highs
      col = mix(vec3(luma), col, 1.0 + 0.12 * grade);                                                        // a little extra saturation
      // realistic grade: gentle S-curve for contrast, sun-warm highlights, cool blue shadows, slightly richer colour
      vec3 s = col * col * (3.0 - 2.0 * col);
      vec3 graded = mix(col, s, 0.55);
      float l2 = dot(graded, vec3(0.299, 0.587, 0.114));
      graded += mix(vec3(-0.02, -0.01, 0.035), vec3(0.04, 0.02, -0.03), smoothstep(0.15, 0.85, l2));
      graded = mix(vec3(l2), graded, 1.1);
      col = mix(col, graded, realistic);
      float d = distance(vUv, vec2(0.5));
      col *= 1.0 - vignette * smoothstep(0.35, 0.85, d);
      col += (rand(vUv * 911.0 + fract(time * 13.0)) - 0.5) * grain;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

export function createFilmPass() {
  const pass = new ShaderPass(FilmShader);
  pass.enabled = false;
  return pass;
}
