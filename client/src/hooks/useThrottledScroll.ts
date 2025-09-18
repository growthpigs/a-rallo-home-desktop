import { useEffect, useRef, useCallback } from 'react';

export const useThrottledScroll = (callback: (scrollY: number) => void, delay: number = 16) => {
  const lastRunRef = useRef(0);
  const rafIdRef = useRef<number>();

  const throttledCallback = useCallback(() => {
    const now = Date.now();
    if (now - lastRunRef.current >= delay) {
      callback(window.scrollY);
      lastRunRef.current = now;
    }
  }, [callback, delay]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(throttledCallback);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [throttledCallback]);
};