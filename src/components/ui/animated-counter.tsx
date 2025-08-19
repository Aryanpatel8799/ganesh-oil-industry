import { useCounter } from '@/hooks/use-counter';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
  prefix?: string;
  text?: string; // For displaying text instead of numbers (like "ISO")
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  delay = 0, 
  suffix = '', 
  prefix = '',
  className = '',
  text
}: AnimatedCounterProps) => {
  const { ref, value, isAnimating } = useCounter({ end, duration, delay, suffix });

  return (
    <motion.div 
      ref={ref}
      className={`${className} ${isAnimating ? 'text-emerald-600' : ''}`}
      initial={{ scale: 1 }}
      animate={{ 
        scale: isAnimating ? [1, 1.1, 1] : 1,
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {text || `${prefix}${value}`}
    </motion.div>
  );
};
