"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

interface SkillOrbProps {
  iconUrl?: string;
  name: string;
  color?: string;
  position?: [number, number, number];
  delay?: number;
}

function Orb({ name, color = "#22D3EE", position = [0, 0, 0], delay = 0 }: SkillOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      
      // Scale animation on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color={color}
          wireframe={!hovered}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.1}
        />
        
        {hovered && (
          <Html center distanceFactor={10}>
            <div className="bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-sm font-medium whitespace-nowrap shadow-xl transform -translate-y-8">
              {name}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  );
}

export function SkillOrb({ skills }: { skills: { name: string; color: string }[] }) {
  // Distribute orbs in a circle or pattern
  const count = skills.length;
  const radius = count > 3 ? 2.5 : 1.5;

  return (
    <div className="w-full h-[300px] cursor-pointer">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
        
        <group>
          {skills.map((skill, index) => {
            const angle = (index / count) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle * 2) * 0.5; // slight wave
            const z = Math.sin(angle) * radius;
            
            return (
              <Orb
                key={skill.name}
                name={skill.name}
                color={skill.color}
                position={[x, y, z]}
                delay={index}
              />
            );
          })}
        </group>
      </Canvas>
    </div>
  );
}
