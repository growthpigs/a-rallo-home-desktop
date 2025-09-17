import { useSmoothScrollAnimation } from './useSmoothScrollAnimation';

interface ElasticScrollOptions {
  animationDistance?: number;
  debugName?: string;
  startOffset?: number;
  easing?: 'smooth' | 'elastic' | 'spring' | 'apple';
  lerp?: number;
}

/**
 * Enhanced elastic scroll animation hook using Apple-style spring physics
 * This wraps the smooth scroll animation with sensible defaults for elastic motion
 */
export const useElasticScrollAnimation = (options: ElasticScrollOptions = {}) => {
  const {
    animationDistance = 450,
    debugName = 'ElasticScroll',
    startOffset = 100,
    easing = 'apple', // Use Apple-style easing by default
    lerp = 0.06, // Ultra-smooth lerp for elastic feel
  } = options;

  const scrollAnimation = useSmoothScrollAnimation({
    startPoint: 'bottom',
    endPoint: 'center',
    animationDistance,
    easing,
    lerp,
    debugName,
  });

  // Enhanced animations with elastic properties
  return {
    ref: scrollAnimation.ref,
    progress: scrollAnimation.progress,
    velocity: scrollAnimation.velocity,
    
    // Elastic transforms with velocity awareness
    elasticX: (distance: number = 100) => {
      return scrollAnimation.elasticTransform(distance);
    },
    
    elasticY: (distance: number = 50) => {
      return scrollAnimation.elasticTransform(distance);
    },
    
    // Parallax with different speeds for depth
    parallaxX: (distance: number = 100, speed: number = 0.5) => {
      const velocityBoost = 1 + Math.min(scrollAnimation.velocity * 0.0001, 0.3);
      return scrollAnimation.progress * distance * speed * velocityBoost;
    },
    
    parallaxY: (distance: number = 50, speed: number = 0.5) => {
      const velocityBoost = 1 + Math.min(scrollAnimation.velocity * 0.0001, 0.3);
      return scrollAnimation.progress * distance * speed * velocityBoost;
    },
    
    // Scale with elastic overshoot
    elasticScale: (from: number = 0.9, to: number = 1.05) => {
      const progress = scrollAnimation.progress;
      const scale = from + (to - from) * progress;
      // Add subtle overshoot at the end
      if (progress > 0.8) {
        const overshoot = (progress - 0.8) * 5; // 0 to 1 for last 20%
        return scale + Math.sin(overshoot * Math.PI) * 0.02;
      }
      return scale;
    },
    
    // Opacity with smooth fade
    smoothOpacity: (from: number = 0, to: number = 1) => {
      return scrollAnimation.opacity(from, to);
    },
    
    // Rotation with spring effect
    springRotate: (degrees: number = 5) => {
      const progress = scrollAnimation.progress;
      const rotation = progress * degrees;
      // Add spring wobble
      if (progress > 0.5) {
        const wobble = Math.sin((progress - 0.5) * Math.PI * 4) * (1 - progress);
        return rotation + wobble * 2;
      }
      return rotation;
    },
  };
};