"use client";

import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// 1. Define custom ShaderMaterial and Uniforms
const CustomHeroShader = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
    uMouse: new THREE.Vector2(0, 0),
    uReducedMotion: false,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    uniform bool uReducedMotion;
    varying vec2 vUv;

    void main() {
      // Screen coordinate normalization
      vec2 st = gl_FragCoord.xy / uResolution.xy;
      
      // Pause animation if prefers-reduced-motion is active
      float time = uReducedMotion ? 0.0 : uTime * 0.3;
      
      // Mouse-driven offset and mathematical wave pattern
      vec2 mouseOffset = (uMouse - 0.5) * 0.15;
      float patternA = sin(st.x * 4.0 + time + mouseOffset.x);
      float patternB = cos(st.y * 4.0 + time + mouseOffset.y);
      
      // Dark color palette ensuring high contrast for overlaid text
      vec3 baseBg = vec3(0.03, 0.03, 0.08);     // Dark slate
      vec3 primaryHue = vec3(0.15, 0.35, 0.85);   // Electric blue
      vec3 accentHue = vec3(0.0, 0.75, 0.65);    // Emerald green

      // Blending channels
      vec3 mixedColor = mix(baseBg, primaryHue, patternA * 0.5 + 0.5);
      mixedColor = mix(mixedColor, accentHue, patternB * 0.4 + 0.4);

      gl_FragColor = vec4(mixedColor, 1.0);
    }
  `,
);

extend({ CustomHeroShader });

function ShaderPlane() {
  const materialRef = useRef<any>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
      materialRef.current.uResolution.set(state.size.width, state.size.height);
      materialRef.current.uMouse.set(
        (state.pointer.x + 1) / 2,
        (state.pointer.y + 1) / 2,
      );
      materialRef.current.uReducedMotion = reducedMotion;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* @ts-ignore */}
      <customHeroShader ref={materialRef} key={CustomHeroShader.key} />
    </mesh>
  );
}

export default function HeroShader() {
  return (
    <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center">
      <Canvas dpr={[1, 2]} className="absolute inset-0 pointer-events-none">
        <ShaderPlane />
      </Canvas>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-md">
          Adham Hamdy
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-200 font-medium drop-shadow-sm">
          Frontend & Spatial Web Developer
        </p>
      </div>
    </section>
  );
}
