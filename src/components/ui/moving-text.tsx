import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MovingTextProps {
  texts: string[];
  className?: string;
  direction?: 'left' | 'right';
  speed?: number;
}

export const MovingText = ({ 
  texts, 
  className = '', 
  direction = 'left',
  speed = 50 
}: MovingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        key={currentIndex}
        initial={{ 
          x: direction === 'left' ? '100%' : '-100%',
          opacity: 0 
        }}
        animate={{ 
          x: 0,
          opacity: 1 
        }}
        exit={{ 
          x: direction === 'left' ? '-100%' : '100%',
          opacity: 0 
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="inline-block"
      >
        {texts[currentIndex]}
      </motion.div>
    </div>
  );
};

export const ScrollingText = ({ 
  text, 
  className = '',
  speed = 30
}: { 
  text: string; 
  className?: string;
  speed?: number;
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: [0, -1000]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {text} • {text} • {text} • {text} • {text} • {text} •
      </motion.div>
    </div>
  );
};
