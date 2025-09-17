import { useEffect, useRef, useState } from 'react';
import { useScrollDirection } from './useScrollDirection';

interface ConvergenceState {
  progress: number; // 0 = separated, 1 = converged
  isConverging: boolean;
  isConverged: boolean;
}

export const useConvergenceAnimation = (debugName?: string) => {
  const elementRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<ConvergenceState>({
    progress: 0,
    isConverging: false,
    isConverged: false
  });
  
  const { direction } = useScrollDirection();
  const lastScrollDirection = useRef<'up' | 'down' | null>(null);
  const hasEnteredViewport = useRef(false);
  const convergenceCompleted = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if element is visible in viewport
      const isVisible = rect.bottom > 0 && rect.top < viewportHeight;
      const isEnteringFromBottom = rect.top < viewportHeight && rect.top > viewportHeight * 0.8;
      
      // Track when element first enters viewport from bottom
      if (isEnteringFromBottom && !hasEnteredViewport.current) {
        hasEnteredViewport.current = true;
        convergenceCompleted.current = false;
      }

      // Calculate convergence progress based on scroll direction and position
      let newProgress = state.progress;
      let isConverging = false;
      let isConverged = false;

      if (direction === 'down' && hasEnteredViewport.current && !convergenceCompleted.current) {
        // Scrolling down: converge from bottom entry to center
        const convergenceZone = viewportHeight * 0.6; // 60% of viewport height for convergence
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromBottom = viewportHeight - elementCenter;
        
        newProgress = Math.min(1, Math.max(0, (convergenceZone - distanceFromBottom) / convergenceZone));
        isConverging = newProgress < 1;
        
        if (newProgress >= 1) {
          convergenceCompleted.current = true;
          isConverged = true;
        }
      } else if (direction === 'up' && convergenceCompleted.current) {
        // Scrolling up: maintain converged state until element is high enough to start separating
        const separationPoint = viewportHeight * 0.3; // Start separating when element top is 30% from top
        
        if (rect.top > separationPoint) {
          // Start separating
          const separationZone = viewportHeight * 0.3;
          const separationProgress = (rect.top - separationPoint) / separationZone;
          newProgress = Math.max(0, 1 - separationProgress);
          
          if (newProgress <= 0) {
            hasEnteredViewport.current = false;
            convergenceCompleted.current = false;
          }
        } else {
          // Stay converged
          newProgress = 1;
          isConverged = true;
        }
      }

      setState({
        progress: newProgress,
        isConverging,
        isConverged
      });

      // Debug logging
      if (debugName && (Math.abs(state.progress - newProgress) > 0.05 || direction !== lastScrollDirection.current)) {
        console.log(`🎯 [${debugName}] Scroll: ${direction}, Progress: ${newProgress.toFixed(2)}, Converged: ${isConverged}, ElementTop: ${rect.top.toFixed(0)}`);
      }
      
      lastScrollDirection.current = direction;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [direction, state.progress, debugName]);

  return { ref: elementRef, ...state };
};