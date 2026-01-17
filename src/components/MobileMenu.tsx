import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars } from 'react-icons/fa';

interface MobileMenuProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (section: string) => {
    onSectionClick(section);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* @ts-ignore */}
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-content">
                {sections.map((section) => (
                  <button
                    key={section}
                    className={`mobile-menu-item ${activeSection === section ? 'active' : ''}`}
                    onClick={() => handleSectionClick(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
