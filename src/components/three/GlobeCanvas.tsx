import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Wireframe() {
  const group = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scrollRef.current = v;
  });

  useFrame((_, delta) => {
    if (!group.current) return;
    // slow idle rotation + subtle scroll-linked tilt — transform only
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = -0.25 + scrollRef.current * 0.4;
  });

  const sphereGeo = useMemo(() => new THREE.SphereGeometry(1.6, 48, 32), []);
  const dotsGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions: number[] = [];
    const N = 900;
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      const r = 1.62;
      positions.push(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
    }
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, []);

  return (
    <group ref={group}>
      {/* Soft inner sphere */}
      <mesh geometry={sphereGeo}>
        <meshBasicMaterial color={"#0B0F19"} transparent opacity={0.85} />
      </mesh>
      {/* Wireframe shell */}
      <mesh geometry={sphereGeo}>
        <meshBasicMaterial color={"#6366F1"} wireframe transparent opacity={0.18} />
      </mesh>
      {/* Dot cloud */}
      <points geometry={dotsGeo}>
        <pointsMaterial size={0.022} color={"#A78BFA"} sizeAttenuation transparent opacity={0.9} />
      </points>
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 4.6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <Wireframe />
    </Canvas>
  );
}
