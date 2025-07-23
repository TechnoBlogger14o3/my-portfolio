import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes
const FloatingShape = ({ position, color, shape = 'box' }: { 
  position: [number, number, number]; 
  color: string; 
  shape?: 'box' | 'sphere' | 'torus' | 'octahedron';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return new THREE.SphereGeometry(0.5, 16, 16);
      case 'torus':
        return new THREE.TorusGeometry(0.3, 0.1, 8, 16);
      case 'octahedron':
        return new THREE.OctahedronGeometry(0.4);
      default:
        return new THREE.BoxGeometry(0.8, 0.8, 0.8);
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <primitive object={geometry} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

// Particle system
const Particles = ({ count = 100 }: { count?: number }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  useFrame((state) => {
    if (mesh.current) {
      for (let i = 0; i < count; i++) {
        const t = state.clock.elapsedTime + i * 0.1;
        dummy.position.set(
          Math.sin(t * 0.5) * 10,
          Math.cos(t * 0.3) * 5,
          Math.sin(t * 0.2) * 5
        );
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#667eea" transparent opacity={0.6} />
    </instancedMesh>
  );
};

// Main 3D scene component
const Scene = () => {
  const shapes = [
    { position: [-3, 2, 0] as [number, number, number], color: '#667eea', shape: 'box' as const },
    { position: [3, -1, 2] as [number, number, number], color: '#764ba2', shape: 'sphere' as const },
    { position: [-2, -2, -2] as [number, number, number], color: '#ffd700', shape: 'torus' as const },
    { position: [4, 1, -1] as [number, number, number], color: '#ff6b6b', shape: 'octahedron' as const },
    { position: [0, 3, 3] as [number, number, number], color: '#4ecdc4', shape: 'sphere' as const },
    { position: [-4, 0, 1] as [number, number, number], color: '#45b7d1', shape: 'box' as const },
  ];

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#667eea" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#764ba2" />

      {/* Floating shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}

      {/* Particle system */}
      <Particles count={150} />

      {/* Camera controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

// Main component
const InteractiveBackground: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      position: 'absolute', 
      top: 0, 
      left: 0,
      zIndex: 1,
      opacity: 0.3
    }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground; 