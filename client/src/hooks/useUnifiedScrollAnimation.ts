import { useEffect, useRef, useState } from "react";

interface UnifiedScrollAnimationOptions {
  animationDistance?: number; // How many pixels of scrolling to complete animation
  debugName?: string;
  startOffset?: number; // Pixels before element to start animation
}

export const useUnifiedScrollAnimation = (options: UnifiedScrollAnimationOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  const animationDistance = options.animationDistance ?? 400;
  const debugName = options.debugName || "UnifiedScroll";
  const startOffset = options.startOffset ?? 0;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = containerRect.top;
      const elementHeight = containerRect.height;
      
      // Calculate trigger point - element should animate when it's in the middle of viewport
      // Start when element top reaches 75% of viewport height (closer to center)
      const triggerPoint = windowHeight * 0.75;
      
      // How far we've scrolled past the trigger point
      const scrolledPastTrigger = triggerPoint - elementTop;
      
      // Apply startOffset and calculate progress
      const adjustedProgress = (scrolledPastTrigger - startOffset) / animationDistance;
      
      // Clamp between 0 and 1
      const progress = Math.min(1, Math.max(0, adjustedProgress));
      setScrollProgress(progress);
      
      // Debug logging when progress changes significantly
      if (Math.abs(scrollProgress - progress) > 0.05) {
        console.log(`📊 [${debugName}] Scroll progress:`, {
          progress: progress.toFixed(2),
          elementTop,
          triggerPoint,
          scrolledPastTrigger,
          animationDistance
        });
      }
    };

    // Use passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationDistance, debugName, startOffset, scrollProgress]);

  return { ref: containerRef, progress: scrollProgress };
};

// Animation helper functions using same approach as video
export const progressTranslateX = (progress: number, distance: number) => ({
  transform: `translateX(${progress * distance}px)`
});

export const progressTranslateY = (progress: number, distance: number) => ({
  transform: `translateY(${progress * distance}px)`
});

export const progressScale = (progress: number, fromScale = 0.8, toScale = 1) => ({
  transform: `scale(${fromScale + progress * (toScale - fromScale)})`
});

export const progressOpacity = (progress: number, fromOpacity = 0, toOpacity = 1) => ({
  opacity: fromOpacity + progress * (toOpacity - fromOpacity)
});

// Combined transforms
export const progressCombined = (
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