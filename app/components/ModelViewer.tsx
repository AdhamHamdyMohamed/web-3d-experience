"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Float } from "@react-three/drei";
import { useControls } from "leva";
import { Suspense } from "react";

function InteractiveMesh() {
  const { color, roughness, metalness, wireframe } = useControls({
    color: "#3b82f6",
    roughness: { value: 0.2, min: 0, max: 1 },
    metalness: { value: 0.8, min: 0, max: 1 },
    wireframe: false,
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
          wireframe={wireframe}
        />
      </mesh>
    </Float>
  );
}

export default function ModelViewer() {
  return (
    <div className="relative h-screen w-full bg-neutral-950">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: true }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <InteractiveMesh />
          </Stage>
          <OrbitControls makeDefault enableZoom autoRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
