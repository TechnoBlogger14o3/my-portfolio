import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  commands: string[];
  delay?: number;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ commands, delay = 1000 }) => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < commands.length) {
      const timer = setTimeout(() => {
        setDisplayedCommands([...displayedCommands, commands[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, commands, delay, displayedCommands]);

  return (
    <motion.div
      className="terminal-window"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <div className="terminal-title">Terminal — Portfolio</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-prompt">
          <span className="prompt-user">coder@portfolio</span>
          <span className="prompt-symbol">:~$</span>
        </div>
        {displayedCommands.map((cmd, index) => (
          <motion.div
            key={index}
            className="terminal-line"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="command">{cmd}</span>
            {index === displayedCommands.length - 1 && (
              <span className="cursor">▋</span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
