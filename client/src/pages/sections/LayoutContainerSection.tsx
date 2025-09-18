import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Individual element component with STANDARDIZED intersection observer
const AnimatedElement = ({ children, delay = 0, direction = 'up', distance = 60 }: { 
  children: React.ReactNode, 
  delay?: number, 
  direction?: 'up' | 'down' | 'left' | 'right',
  distance?: number 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // STANDARDIZED THRESHOLD: Complete when element center reaches viewport center
      // This matches ServiceOverviewSection for consistent completion timing
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Element is at least partially visible
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        
        // Distance from bottom of viewport to center
        const totalDistance = viewportHeight / 2;
        
        // How far the element center has traveled from bottom
        const distanceTraveled = viewportHeight - elementCenter;
        
        // Calculate 0-1 progress with delay adjustment
        const baseProgress = Math.min(1, Math.max(0, distanceTraveled / totalDistance));
        const delayedProgress = Math.min(1, Math.max(0, baseProgress - (delay * 0.3)));
        setProgress(delayedProgress / (1 - (delay * 0.3)));
      } else if (rect.top >= viewportHeight) {
        // Element is below viewport
        setProgress(0);
      } else if (rect.bottom <= 0) {
        // Element is above viewport - keep at full progress
        setProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  // Smooth overshoot and settle animation
  const smoothOvershoot = (t: number) => {
    const overshootAmount = 0.08;
    if (t < 0.7) {
      const adjustedT = t / 0.7;
      return (1 + overshootAmount) * (adjustedT * adjustedT * (3 - 2 * adjustedT));
    } else {
      const adjustedT = (t - 0.7) / 0.3;
      return (1 + overshootAmount) - overshootAmount * (adjustedT * adjustedT * (3 - 2 * adjustedT));
    }
  };

  const easedProgress = smoothOvershoot(progress);
  
  let transform = '';
  switch(direction) {
    case 'up':
      transform = `translateY(${distance - (easedProgress * distance)}px)`;
      break;
    case 'down':
      transform = `translateY(${-distance + (easedProgress * distance)}px)`;
      break;
    case 'left':
      transform = `translateX(${distance - (easedProgress * distance)}px)`;
      break;
    case 'right':
      transform = `translateX(${-distance + (easedProgress * distance)}px)`;
      break;
  }

  return (
    <div
      ref={elementRef}
      style={{
        transform,
        opacity: Math.min(1, progress * 2), // Fade in quickly
        transition: 'none'
      }}
    >
      {children}
    </div>
  );
};

// Special animated globe with rotation using STANDARDIZED threshold
const AnimatedGlobe = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // STANDARDIZED THRESHOLD: Complete when element center reaches viewport center
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Element is at least partially visible
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        
        // Distance from bottom of viewport to center
        const totalDistance = viewportHeight / 2;
        
        // How far the element center has traveled from bottom
        const distanceTraveled = viewportHeight - elementCenter;
        
        // Calculate 0-1 progress
        const newProgress = Math.min(1, Math.max(0, distanceTraveled / totalDistance));
        setProgress(newProgress);
      } else if (rect.top >= viewportHeight) {
        // Element is below viewport
        setProgress(0);
      } else if (rect.bottom <= 0) {
        // Element is above viewport - keep at full progress
        setProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Globe rotates from 90 degrees (thin line) with 2.5 spins to settle at 0
  const rotationY = 90 + (progress * (360 * 2.5 + 90)); // Start at 90, spin 2.5 times + 90 to reach 0
  const scale = 0.3 + (progress * 0.7); // Scale from 30% to 100%
  const opacity = Math.min(1, progress * 2);

  return (
    <div
      ref={elementRef}
      style={{
        transform: `rotateY(${rotationY}deg) scale(${scale})`,
        opacity,
        transition: 'none',
        transformStyle: 'preserve-3d',
        marginTop: '40px', // Move down 20% more
        marginBottom: '16px'
      }}
    >
      <img
        alt="Globe icon"
        src="/figmaAssets/agents-globe.svg"
        style={{
          width: '100px',
          height: '100px',
          display: 'block'
        }}
      />
    </div>
  );
};

export const LayoutContainerSection = (): JSX.Element => {
  
  return (
    <section className="flex flex-col items-center relative w-full" style={{ backgroundColor: '#ded8ca', paddingTop: '120px', paddingBottom: '110px', minHeight: '575px' }}>
      <div className="flex flex-col items-center px-16 w-full">
        <div className="flex flex-col max-w-screen-xl items-center w-full">
          <div className="flex flex-col max-w-screen-md items-center gap-2 w-full">
            {/* Globe icon with rotation animation */}
            <AnimatedGlobe />

            <div className="flex flex-col items-center gap-4 w-full" style={{ marginTop: '-22px' }}>
              {/* Heading centered */}
              <AnimatedElement delay={0.2} direction="up" distance={40}>
                <div className="inline-flex items-center">
                  <h3 className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                    OMNICHANNEL REACH
                  </h3>
                </div>
              </AnimatedElement>

              {/* Content with independent animations */}
              <div className="flex flex-col items-center gap-3 w-full">
                <AnimatedElement delay={0.4} direction="up" distance={50}>
                  <h1 className="text-[length:var(--heading-h2-font-size)] text-center leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                    YOUR PRESENCE, EVERYWHERE
                  </h1>
                </AnimatedElement>

                <AnimatedElement delay={0.6} direction="up" distance={60}>
                  <p className="max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Deploy your AI agents across websites, mobile apps, social media, and voice channels. One platform, infinite touchpoints.
                  </p>
                </AnimatedElement>
              </div>
            </div>

            {/* Button centered with animation */}
            <AnimatedElement delay={0.8} direction="up" distance={40}>
              <div className="inline-flex items-center gap-1 mt-6">
                <Button
                  variant="ghost"
                  className="h-auto px-6 py-3 bg-transparent border border-black text-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-black hover:text-white"
                >
                  GET STARTED
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};