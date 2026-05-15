import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Sparkles, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.25, 1]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#6d28d9"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  );
}

function Wireframe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.1;
    ref.current.rotation.y -= delta * 0.15;
  });
  return (
    <Icosahedron ref={ref} args={[1.85, 1]}>
      <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.25} />
    </Icosahedron>
  );
}

function Ring({ tilt = 0, color = "#7c3aed", radius = 2.4, speed = 0.4 }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
  });
  return (
    <Torus
      ref={ref}
      args={[radius, 0.012, 16, 128]}
      rotation={[Math.PI / 2 + tilt, 0, 0]}
    >
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </Torus>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[3, -3, 2]} intensity={0.8} color="#3b82f6" />
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
      <Core />
      <Wireframe />
      <Ring tilt={0} radius={2.4} color="#a78bfa" speed={0.35} />
      <Ring tilt={0.6} radius={2.7} color="#7c3aed" speed={-0.25} />
      <Ring tilt={-0.5} radius={3.0} color="#3b82f6" speed={0.2} />
      <Sparkles count={60} scale={6} size={2.5} speed={0.4} color="#c4b5fd" />
    </>
  );
}

const BrandHero3D = () => {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[560px]">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsla(270,80%,60%,0.18)_0%,_transparent_60%)] blur-2xl pointer-events-none" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        className="!absolute inset-0"
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default BrandHero3D;