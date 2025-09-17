import { useEffect, useRef, useState } from "react";

interface IndividualScrollAnimationOptions {
  animationDistance?: number; // How many pixels to animate over
  threshold?: number; // Where in viewport to trigger (0.5 = middle, 0.3 = 30% from top)
  debugName?: string;
}

export const useIndividualScrollAnimation = (options: IndividualScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState<number>(0);
  
  const animationDistance = options.animationDistance ?? 200;
  const threshold = options.threshold ?? 0.5; // Middle of viewport by default
  const debugName = options.debugName || "IndividualScroll";

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const elementRect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate the threshold line position in the viewport
      const thresholdLine = viewportHeight * threshold;
      
      // Calculate when element crosses the threshold line
      const elementCenter = elementRect.top + (elementRect.height / 2);
      const distanceFromThreshold = thresholdLine - elementCenter;
      
      // Start animation when element approaches threshold, complete over animationDistance
      const animationProgress = Math.min(1, Math.max(0, (animationDistance - distanceFromThreshold) / animationDistance));
      
      setProgress(animationProgress);
      
      // Debug logging when progress changes significantly
      if (Math.abs(progress - animationProgress) > 0.05) {
        console.log(`📊 [${debugName}] Individual scroll:`, {
          progress: animationProgress.toFixed(2),
          elementTop: elementRect.top.toFixed(0),
          elementCenter: elementCenter.toFixed(0),
          thresholdLine: thresholdLine.toFixed(0),
          distanceFromThreshold: distanceFromThreshold.toFixed(0)
        });
      }
    };

    // Use passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationDistance, threshold, debugName]); // Remove 'progress' from dependencies to prevent infinite loop

  return { ref: elementRef, progress };
};

// Animation helper functions for individual elements
export const individualProgressTranslateX = (progress: number, distance: number) => ({
  transform: `translateX(${progress * distance}px)`
});

export const individualProgressTranslateY = (progress: number, distance: number) => ({
  transform: `translateY(${progress * distance}px)`
});

export const individualProgressScale = (progress: number, fromScale = 0.8, toScale = 1) => ({
  transform: `scale(${fromScale + progress * (toScale - fromScale)})`
});

export const individualProgressOpacity = (progress: number, fromOpacity = 0, toOpacity = 1) => ({
  opacity: fromOpacity + progress * (toOpacity - fromOpacity)
});

// Combined transforms for individual elements
export const individualProgressCombined = (
  progress: number, 
  transforms: {
    x?: number;
    y?: number;
    scale?: { from: number; to: number };
    opacity?: { from: number; to: number };
  }
) => {
  const styles: React.CSSProperties = {};
  
  const transformParts = [];
  
  if (transforms.x !== undefined) {
    transformParts.push(`translateX(${progress * transforms.x}px)`);
  }
  
  if (transforms.y !== undefined) {
    transformParts.push(`translateY(${progress * transforms.y}px)`);
  }
  
  if (transforms.scale) {
    const scale = transforms.scale.from + progress * (transforms.scale.to - transforms.scale.from);
    transformParts.push(`scale(${scale})`);
  }
  
  if (transformParts.length > 0) {
    styles.transform = transformParts.join(' ');
  }
  
  if (transforms.opacity) {
    styles.opacity = transforms.opacity.from + progress * (transforms.opacity.to - transforms.opacity.from);
  }
  
  return styles;
};