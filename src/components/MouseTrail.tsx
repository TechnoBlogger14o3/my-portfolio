import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const MouseTrail: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor trail */}
      <motion.div
        className="mouse-trail"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />

      {/* Secondary trail particles */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="trail-particle"
          animate={{
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
            opacity: isVisible ? 0.3 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.3,
            delay: index * 0.05,
          }}
          style={{
            position: 'fixed',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: `hsl(${240 + index * 20}, 70%, 60%)`,
            pointerEvents: 'none',
            zIndex: 9998,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail; 