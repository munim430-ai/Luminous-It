import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Beacon() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.05 + 1;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#f97316"
            speed={3}
            distort={0.15}
            radius={1}
            emissive="#ec4899"
            emissiveIntensity={1.5}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>
      {/* Radiant Glow Layers */}
      <Sphere args={[1.4, 32, 32]}>
        <meshBasicMaterial color="#f97316" transparent opacity={0.1} />
      </Sphere>
      <Sphere args={[1.8, 32, 32]}>
        <meshBasicMaterial color="#ec4899" transparent opacity={0.05} />
      </Sphere>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <pointLight position={[-10, -10, -10]} color="#ec4899" intensity={1.5} />
        
        <Beacon />
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
