import { useEffect, useRef, useState, useCallback } from "react";

interface SmoothScrollOptions {
  startPoint?: 'bottom' | 'center' | 'top'; // Where in viewport to start
  endPoint?: 'center' | 'top'; // Where animation completes
  animationDistance?: number; // Pixels to complete animation
  easing?: 'linear' | 'easeInOut' | 'easeOut' | 'easeIn' | 'expo' | 'power2' | 'smooth' | 'elastic' | 'spring' | 'apple';
  lerp?: number; // Linear interpolation factor for smoothing (0.1 = very smooth, 1 = no smoothing)
  debugName?: string;
}

/**
 * Enhanced smooth scroll animation hook for the entire Rallo site
 * Provides smooth, natural scroll-based animations with proper easing
 */
export const useSmoothScrollAnimation = (options: SmoothScrollOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollVelocity, setScrollVelocity] = useState<number>(0);
  const rafRef = useRef<number>();
  const lastProgressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const smoothProgressRef = useRef<number>(0);
  const lastScrollY = useRef<number>(0);
  const lastScrollTime = useRef<number>(Date.now());
  
  const {
    startPoint = 'bottom',
    endPoint = 'center',
    animationDistance = 600,
    easing = 'smooth',
    lerp = 0.08, // Reduced for ultra-smooth, elastic motion
    debugName = 'SmoothScroll'
  } = options;

  // Easing functions for smooth animation
  const easingFunctions = {
    linear: (t: number) => t,
    easeInOut: (t: number) => t < 0.5 
      ? 2 * t * t 
      : -1 + (4 - 2 * t) * t,
    easeOut: (t: number) => t * (2 - t),
    easeIn: (t: number) => t * t,
    // Apple-like exponential easing - smooth deceleration
    expo: (t: number) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    // GSAP-like power2 easing - natural movement
    power2: (t: number) => {
      return t < 0.5 
        ? 2 * t * t 
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    },
    // Ultra-smooth easing with gentle acceleration/deceleration
    smooth: (t: number) => {
      // Cubic bezier approximation of Apple's smooth scroll
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    },
    // Elastic easing with overshoot - bouncy feel
    elastic: (t: number) => {
      if (t === 0) return 0;
      if (t === 1) return 1;
      const p = 0.3;
      const s = p / 4;
      return Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
    },
    // Spring physics simulation - natural bounce
    spring: (t: number) => {
      const spring = 1.70158;
      return t < 0.5
        ? (Math.pow(2 * t, 2) * ((spring + 1) * 2 * t - spring)) / 2
        : (Math.pow(2 * t - 2, 2) * ((spring + 1) * (2 * t - 2) + spring) + 2) / 2;
    },
    // Apple's signature easing - smooth with subtle overshoot
    apple: (t: number) => {
      // Approximation of Apple's scroll behavior
      const c1 = 1.70158;
      const c2 = c1 * 1.525;
      
      return t < 0.5
        ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
        : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
    }
  };

  const applyEasing = useCallback((progress: number) => {
    const easingFunc = easingFunctions[easing];
    return easingFunc(progress);
  }, [easing]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        // Calculate scroll velocity
        const currentScrollY = window.scrollY;
        const currentTime = Date.now();
        const timeDelta = currentTime - lastScrollTime.current;
        const scrollDelta = currentScrollY - lastScrollY.current;
        
        if (timeDelta > 0) {
          const velocity = Math.abs(scrollDelta / timeDelta) * 1000; // pixels per second
          setScrollVelocity(velocity);
          
          // Adjust lerp based on velocity - faster scroll = smoother animation
          const dynamicLerp = Math.max(0.03, lerp - (velocity * 0.00005));
          smoothProgressRef.current += (targetProgressRef.current - smoothProgressRef.current) * dynamicLerp;
        }
        
        lastScrollY.current = currentScrollY;
        lastScrollTime.current = currentTime;

        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate start trigger point
        let triggerPoint = 0;
        switch (startPoint) {
          case 'bottom':
            triggerPoint = windowHeight; // Start when element enters bottom
            break;
          case 'center':
            triggerPoint = windowHeight * 0.5;
            break;
          case 'top':
            triggerPoint = windowHeight * 0.25;
            break;
        }

        // Calculate end point
        let endTrigger = 0;
        switch (endPoint) {
          case 'center':
            endTrigger = windowHeight * 0.4; // Slightly above center
            break;
          case 'top':
            endTrigger = windowHeight * 0.2;
            break;
        }

        // Calculate progress based on element position
        const elementTop = rect.top;
        const elementCenter = rect.top + rect.height / 2;
        
        // Use element center for more natural animation
        const distanceFromTrigger = triggerPoint - elementCenter;
        const totalDistance = triggerPoint - endTrigger;
        
        // Calculate raw progress
        let rawProgress = distanceFromTrigger / totalDistance;
        rawProgress = Math.min(1, Math.max(0, rawProgress));
        
        // Store target progress (raw with easing)
        targetProgressRef.current = applyEasing(rawProgress);
        
        // Note: Lerp is already applied above with velocity adjustment
        
        // Update state only if there's significant change
        const progressDiff = Math.abs(smoothProgressRef.current - lastProgressRef.current);
        if (progressDiff > 0.001) {
          setScrollProgress(smoothProgressRef.current);
          lastProgressRef.current = smoothProgressRef.current;
          
          // Debug logging
          if (progressDiff > 0.05) {
            console.log(`🎯 [${debugName}] Smooth scroll:`, {
              smooth: smoothProgressRef.current.toFixed(3),
              target: targetProgressRef.current.toFixed(3),
              lerp,
              easing
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [startPoint, endPoint, applyEasing, debugName, lerp]);

  return { 
    ref: containerRef, 
    progress: scrollProgress,
    velocity: scrollVelocity,
    // Helper functions for common animations with velocity awareness
    translateX: (distance: number) => scrollProgress * distance * (1 + scrollVelocity * 0.0001),
    translateY: (distance: number) => scrollProgress * distance * (1 + scrollVelocity * 0.0001),
    opacity: (from: number = 0, to: number = 1) => from + scrollProgress * (to - from),
    scale: (from: number = 0.8, to: number = 1) => from + scrollProgress * (to - from),
    // Elastic transform with velocity
    elasticTransform: (distance: number) => {
      const velocityMultiplier = 1 + Math.min(scrollVelocity * 0.0002, 0.5);
      return scrollProgress * distance * velocityMultiplier;
    }
  };
};

/**
 * Calculate staggered progress for multiple elements
 * @param baseProgress - The main scroll progress (0 to 1)
 * @param stagger - Delay percentage (0 to 1) for this element
 * @param speed - How fast this element catches up (default 1.5)
 */
export const getStaggeredProgress = (
  baseProgress: number, 
  stagger: number = 0, 
  speed: number = 1.5
): number => {
  const adjustedProgress = (baseProgress - stagger) * speed;
  return Math.max(0, Math.min(1, adjustedProgress));
};