import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const WatercolorMaterial = shaderMaterial(
  {
    uTime: 0,
    uQuality: 1,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uResolution: new THREE.Vector2(1920, 1080),
    uColorA: new THREE.Color(0x0a1628),
    uColorB: new THREE.Color(0x00e5ff),
    uColorC: new THREE.Color(0xffd700),
    uColorD: new THREE.Color(0x1a4325),
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uQuality;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    uniform vec3 uColorD;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      int maxOctaves = int(3.0 + 3.0 * uQuality);
      for (int i = 0; i < 6; i++) {
        if (i >= maxOctaves) break;
        value += amplitude * noise(p * frequency);
        frequency *= 2.02;
        amplitude *= 0.5;
      }
      return value;
    }

    float warpedFbm(vec2 p, float time) {
      vec2 warp = vec2(
        fbm(p * 0.5 + time * 0.03),
        fbm(p * 0.5 + time * 0.03 + 100.0)
      );
      return fbm(p + warp * 0.3);
    }

    void main() {
      vec2 uv = vUv;
      vec2 mouseNorm = uMouse / uResolution;
      float mouseDist = distance(uv, mouseNorm);
      float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.3;
      float time = uTime * 0.1;
      float n1 = warpedFbm(uv * 3.0 + time, time);
      float n2 = warpedFbm(uv * 6.0 - time * 0.5, time) * 0.5;
      float n3 = warpedFbm(uv * 12.0 + time * 0.25, time) * 0.25;
      float combined = n1 + n2 + n3;
      combined += mouseInfluence * (1.0 - combined);
      float vignette = 1.0 - distance(uv, vec2(0.5)) * 1.2;
      vignette = smoothstep(0.0, 1.0, vignette);
      combined *= vignette;
      vec3 base = uColorA;
      float cyanMask = smoothstep(0.2, 0.5, combined);
      vec3 layer1 = mix(base, uColorB, cyanMask * 0.4);
      float goldMask = smoothstep(0.4, 0.7, combined);
      vec3 layer2 = mix(layer1, uColorC, goldMask * 0.3);
      float greenMask = smoothstep(0.6, 0.85, combined);
      vec3 finalColor = mix(layer2, uColorD, greenMask * 0.2);
      float paper = noise(uv * 200.0) * 0.02;
      finalColor += paper;
      float scan = sin(uv.y * uResolution.y * 0.5) * 0.01;
      finalColor += scan;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
)

extend({ WatercolorMaterial })

export { WatercolorMaterial }