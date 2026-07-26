'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLogoMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.85 : 1.65}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color={hovered ? '#F59E0B' : '#A81D1D'}
          roughness={0.15}
          metalness={0.85}
          distort={0.25}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

export function Hero3DCanvas() {
  const [isSupported, setIsSupported] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setIsSupported(supported);
    } catch {
      setIsSupported(false);
    }
  }, []);

  return (
    <div className="relative w-full min-h-[420px] md:min-h-[500px] bg-[#111827] text-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex items-center justify-center">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] via-[#8B1717]/20 to-[#F59E0B]/10 pointer-events-none" />

      {/* 3D WebGL Canvas */}
      {mounted && isSupported ? (
        <div className="w-full h-full min-h-[420px] md:min-h-[500px] relative z-10">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#F59E0B" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#A81D1D" />
            <FloatingLogoMesh />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
        </div>
      ) : (
        /* Fallback Static Visual for Low-Bandwidth / Non-WebGL Devices */
        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center gap-3">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#8B1717] via-[#A81D1D] to-[#F59E0B] flex items-center justify-center text-white text-3xl font-black shadow-2xl animate-pulse border-2 border-amber-400">
            AF
          </div>
          <p className="text-amber-400 font-black tracking-widest text-sm uppercase">ADDIS FOODIES</p>
        </div>
      )}

      {/* Hero Content Overlay */}
      <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 z-20 pointer-events-none text-left flex flex-col gap-2">
        <span className="inline-block px-3.5 py-1 bg-[#A81D1D] text-white text-xs font-black uppercase rounded-full tracking-wider shadow-md w-fit">
          ✨ Official Digital Concierge v5.0
        </span>
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-md font-syne">
          Discover Addis Ababa’s Culinary Scene
        </h1>
        <p className="text-zinc-300 text-xs md:text-base font-medium max-w-xl">
          Curated food reviews, landmark festival engine, itemized ETB price receipts, and commercial food promotions across Ethiopia.
        </p>
      </div>
    </div>
  );
}
export default Hero3DCanvas;
