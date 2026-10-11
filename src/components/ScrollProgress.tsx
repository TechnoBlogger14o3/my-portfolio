import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '2px',
        background: '#6fbf96',
        zIndex: 10000,
      }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;

