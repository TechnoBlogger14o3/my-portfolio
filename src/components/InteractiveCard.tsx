import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  children?: React.ReactNode;
}

// 3D Icon component
const ThreeDIcon = ({ color, icon: IconComponent }: { color: string; icon: React.ComponentType<{ className?: string }> }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.9}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
  title, 
  description, 
  icon: IconComponent, 
  color, 
  children 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(event.clientX - centerX);
      mouseY.set(event.clientY - centerY);
    }
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="interactive-card"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        rotateX: isHovered ? springRotateX : 0,
        rotateY: isHovered ? springRotateY : 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.3 }}
    >
      <div className="card-content">
        <div className="card-header">
          <div className="card-icon-3d">
            <Canvas style={{ width: '60px', height: '60px' }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <ThreeDIcon color={color} icon={IconComponent} />
            </Canvas>
          </div>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        {children}
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="card-glow"
        style={{
          background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default InteractiveCard; 