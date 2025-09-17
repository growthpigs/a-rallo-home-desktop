import { useEffect, useRef, useState } from "react";
import { useMotionValue, useTransform } from "framer-motion";

interface ScrollProgressOptions {
  offset?: number; // How many pixels before element enters viewport to start animation
  distance?: number; // How many pixels of scrolling to complete the animation
  debugName?: string;
}

export const useScrollProgress = (options: ScrollProgressOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const offset = options.offset ?? 100; // Start 100px before element enters
  const distance = options.distance ?? 300; // Complete over 300px of scrolling
  const debugName = options.debugName || "Unknown";

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when to start (element approaching viewport)
      const startPoint = windowHeight + offset;
      
      // Calculate progress based on element position
      const elementTop = rect.top;
      const distanceFromStart = startPoint - elementTop;
      
      // Calculate progress (0 to 1)
      const rawProgress = distanceFromStart / distance;
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));
      
      setProgress(clampedProgress);
      
      // Debug logging
      if (options.debugName && Math.abs(progress - clampedProgress) > 0.05) {
        console.log(`📈 [${debugName}] Scroll progress:`, {
          progress: clampedProgress.toFixed(2),
          elementTop,
          startPoint,
          distanceFromStart
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, distance, debugName, progress]);

  return { ref, progress };
};

// Progress-based animation variants
export const progressFadeUp = (progress: number) => ({
  opacity: progress,
  y: 30 * (1 - progress),
});

export const progressSlideInLeft = (progress: number) => ({
  opacity: progress,
  x: -60 * (1 - progress),
});

export const progressSlideInRight = (progress: number) => ({
  opacity: progress,
  x: 60 * (1 - progress),
});

export const progressScale = (progress: number) => ({
  opacity: progress,
  scale: 0.8 + 0.2 * progress,
});

// Stagger helper for multiple elements
export const progressStagger = (progress: number, index: number, total: number) => {
  const staggerDelay = 0.1; // 10% stagger between items
  const itemStart = (index / total) * staggerDelay;
  const itemProgress = (progress - itemStart) / (1 - staggerDelay);
  return Math.min(1, Math.max(0, itemProgress));
};