import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingCodeProps {
  code: string;
  speed?: number;
  delay?: number;
  language?: string;
}

const TypingCode: React.FC<TypingCodeProps> = ({ 
  code, 
  speed = 50, 
  delay = 0,
  language = 'javascript'
}) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setCurrentIndex(0);
    }
  }, [delay, code]);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, code, speed]);

  return (
    <motion.div
      className="typing-code"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <pre className={`language-${language}`}>
        <code>
          {displayedCode}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="typing-cursor"
          >
            ▋
          </motion.span>
        </code>
      </pre>
    </motion.div>
  );
};

export default TypingCode;
