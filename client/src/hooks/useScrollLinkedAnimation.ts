import { useEffect, useRef, useState } from 'react';

export const useScrollLinkedAnimation = (debugName?: string) => {
  const elementRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress to complete animation when element is in middle of viewport
      // Start immediately when element enters viewport bottom
      // Complete when element is in the middle third of viewport
      const elementHeight = rect.height;
      const elementTop = rect.top;
      
      // Animation completes when element top reaches middle of viewport
      const middleZone = viewportHeight * 0.5; // Middle of viewport
      const startPoint = viewportHeight; // Bottom of viewport
      
      // Distance traveled from bottom to middle
      const distanceTraveled = startPoint - elementTop;
      const totalDistance = viewportHeight * 0.5; // Only use bottom half of viewport for animation
      
      // Convert to 0-1 progress - reaches 1.0 when element is in middle of viewport
      const rawProgress = Math.max(0, Math.min(1, distanceTraveled / totalDistance));
      
      setProgress(rawProgress);

      // Debug logging
      if (debugName && Math.abs(progress - rawProgress) > 0.01) {
        console.log(`📏 [${debugName}] Scroll: ${window.scrollY.toFixed(0)}, Progress: ${rawProgress.toFixed(3)}, ElementTop: ${rect.top.toFixed(0)}`);
      }
    };

    // Use passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [debugName, progress]);

  return { ref: elementRef, progress };
};