import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'javascript', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="code-snippet"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <div className="code-snippet-header">
          <span className="code-snippet-title">{title}</span>
          <span className="code-snippet-language">{language}</span>
        </div>
      )}
      <div className="code-snippet-content">
        <button className="copy-button" onClick={handleCopy}>
          {copied ? (
            /* @ts-ignore */
            <FaCheck />
          ) : (
            /* @ts-ignore */
            <FaCopy />
          )}
        </button>
        <pre className={`language-${language}`}>
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
