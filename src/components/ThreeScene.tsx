import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useInView } from 'framer-motion';

// Animated sphere component
const AnimatedSphere = ({ position = [0, 0, 0], color = '#3099BC', speed = 0.3, distort = 0.3 }) => {
  const sphereRef = useRef(null);
  
  useFrame(() => {
    if (!sphereRef.current) return;
    sphereRef.current.rotation.x += 0.003;
    sphereRef.current.rotation.y += 0.005;
  });

  return (
    <Sphere
      visible
      args={[1, 64, 64]}
      ref={sphereRef}
      position={position}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

// Floating particles
const Particles = ({ count = 100, color = '#F0BC5E', size = 0.02 }) => {
  const ref = useRef(null);
  
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.0003;
    ref.current.rotation.y += 0.0005;
  });

  // Generate random positions for particles
  const particles = Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
    size: Math.random() * size + 0.01,
  }));

  return (
    <group ref={ref}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

// Main Three.js Scene component
const ThreeScene = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className={`relative h-full w-full ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedSphere position={[0, 0, 0]} color="#3099BC" />
        <AnimatedSphere position={[-2.5, 1, -2]} color="#267A97" distort={0.4} scale={0.6} />
        <AnimatedSphere position={[2, -1, -1]} color="#F0BC5E" distort={0.2} scale={0.4} />
        <Particles count={150} color="#F0BC5E" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;