"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Pipeline() {
  const ref = useRef<any>();

  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.25, 16, 100]} />
      <meshStandardMaterial color="#22c55e" />
    </mesh>
  );
}

function Network() {
  const group = useRef<any>();

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group}>
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 2, Math.cos(i) * 2, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      ))}
    </group>
  );
}

function AgentFlow() {
  const ref = useRef<any>();

  useFrame(({ clock }) => {
    ref.current.position.x = Math.sin(clock.elapsedTime) * 1.5;
  });

  return (
    <Trail width={0.2} length={5} color={"#a855f7"}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#a855f7" />
      </mesh>
    </Trail>
  );
}

function Conversion() {
  const ref = useRef<any>();

  useFrame(({ clock }) => {
    ref.current.scale.x = 1 + Math.sin(clock.elapsedTime * 2) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color="#06b6d4" />
    </mesh>
  );
}

export function Case3D({ visual }: { visual: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {visual === "pipeline-fast" && <Pipeline />}
        {visual === "network-scale" && <Network />}
        {visual === "agent-flow" && <AgentFlow />}
        {visual === "conversion-boost" && <Conversion />}
      </Float>
    </Canvas>
  );
}