import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3 from "@assets/clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3.png";

import extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0 from "@assets/extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0.png";

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

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto]" style={{ backgroundColor: '#fd815aff' }}>
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="items-start gap-16 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-8 relative flex-1 grow">
            <header className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
              <AnimatedElement delay={0} direction="right" distance={80}>
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit  font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                    AGENCY SOLUTION
                  </div>
                </div>
              </AnimatedElement>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <AnimatedElement delay={0.2} direction="right" distance={100}>
                  <h2 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    BUILD YOUR OWN<br />AI SAAS BUSINESS
                  </h2>
                </AnimatedElement>
                
                <AnimatedElement delay={0.4} direction="right" distance={120}>
                  <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    White-label Rallo for your clients. Create custom AI agent suites that generate recurring revenue streams.
                  </p>
                </AnimatedElement>
              </div>
            </header>

            <AnimatedElement delay={0.6} direction="up" distance={80}>
              <img
                className="w-[400px] h-[400px] relative object-cover"
                alt="Placeholder image"
                src={clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3}
              />
            </AnimatedElement>
          </div>

          <div className="flex flex-col items-start gap-8 relative flex-1 grow">
            <div className="items-start justify-end gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="justify-end gap-0.5 pt-[148px] pb-0 px-0 flex-1 grow flex items-start relative">
                <AnimatedElement delay={0.6} direction="left" distance={100}>
                  <img
                    className="w-[296px] h-[296px] relative object-cover"
                    alt="Placeholder image"
                    src={extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0}
                  />
                </AnimatedElement>
              </div>
            </div>

            <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
              <AnimatedElement delay={0.3} direction="left" distance={120}>
                <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Deploy branded AI solutions in days, not months. Full customization, your branding, premium pricing. Agencies using Rallo report 3x revenue growth within 6 months.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={0.7} direction="up" distance={40}>
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-6">
                  <Button
                    variant="ghost"
                    className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                  >
                    Start Building
                  </Button>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};