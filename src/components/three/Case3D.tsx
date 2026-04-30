
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export function Case3D({ type }: { type: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {type === "AI" && (
          <mesh>
            <icosahedronGeometry args={[1, 2]} />
            <MeshDistortMaterial
              color="#7c3aed"
              distort={0.4}
              speed={2}
              roughness={0}
            />
          </mesh>
        )}

        {type === "SaaS" && (
          <mesh rotation={[0.3, 0.5, 0]}>
            <boxGeometry args={[1.4, 1.4, 1.4]} />
            <meshStandardMaterial color="#2563eb" metalness={0.6} roughness={0.2} />
          </mesh>
        )}

        {type === "Fintech" && (
          <mesh>
            <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />
            <meshStandardMaterial color="#22c55e" />
          </mesh>
        )}

        {type === "Marketplace" && (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color="#06b6d4" wireframe />
          </mesh>
        )}
      </Float>
    </Canvas>
  );
}