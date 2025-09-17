import { useEffect, useRef, useState } from 'react';

interface ScrollDirectionState {
  direction: 'up' | 'down' | null;
  scrollY: number;
  velocity: number;
}

export const useScrollDirection = () => {
  const [state, setState] = useState<ScrollDirectionState>({
    direction: null,
    scrollY: 0,
    velocity: 0
  });
  
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTimestamp - lastTimestamp.current;
      
      const velocity = deltaTime > 0 ? Math.abs(deltaY) / deltaTime : 0;
      
      let direction: 'up' | 'down' | null = null;
      if (Math.abs(deltaY) > 1) { // Ignore tiny movements
        direction = deltaY > 0 ? 'down' : 'up';
      }
      
      setState({
        direction,
        scrollY: currentScrollY,
        velocity
      });
      
      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTimestamp;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};