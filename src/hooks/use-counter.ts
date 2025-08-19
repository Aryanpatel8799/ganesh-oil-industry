import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

export const useCounter = ({ end, duration = 2000, delay = 0, suffix = '' }: UseCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      
      const startTime = Date.now() + delay;
      const endTime = startTime + duration;

      const updateCount = () => {
        const now = Date.now();
        
        if (now < startTime) {
          requestAnimationFrame(updateCount);
          return;
        }

        if (now >= endTime) {
          setCount(end);
          return;
        }

        const progress = (now - startTime) / duration;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);
        requestAnimationFrame(updateCount);
      };

      requestAnimationFrame(updateCount);
    }
  }, [inView, hasStarted, end, duration, delay]);

  const displayValue = count === end && suffix ? `${count}${suffix}` : count.toString();
  
  return { ref, value: displayValue, isAnimating: hasStarted && count < end };
};
