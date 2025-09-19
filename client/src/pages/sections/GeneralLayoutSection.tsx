import React from "react";
import { Button } from "@/components/ui/button";
import { useSmoothScrollAnimation, getStaggeredProgress } from "@/hooks/useSmoothScrollAnimation";
import { LazyWebP } from "@/components/LazyWebP";

export const GeneralLayoutSection = (): JSX.Element => {
  // Use smooth scroll animation with Apple-like smoothness
  const { ref: scrollRef, progress } = useSmoothScrollAnimation({
    startPoint: 'bottom',  // Start when element enters bottom of screen
    endPoint: 'center',    // Complete slightly above center
    animationDistance: 800, // Longer distance for ultra-smooth motion
    easing: 'smooth',      // Ultra-smooth cubic easing like Apple
    lerp: 0.12,           // Low lerp for floating, water-like motion
    debugName: "GeneralLayout"
  });
  
  // Calculate staggered progress for different elements
  const taglineProgress = getStaggeredProgress(progress, 0, 1.2);     // Starts immediately
  const headingProgress = getStaggeredProgress(progress, 0.15, 1.3);  // 15% delay
  const descriptionProgress = getStaggeredProgress(progress, 0.25, 1.35); // 25% delay
  const buttonProgress = getStaggeredProgress(progress, 0.35, 1.4);    // 35% delay
  
  // Calculate movements with alignment adjustments
  const taglineMovement = -40 + (taglineProgress * 150); // Tagline moved more left for alignment
  const headingMovement = -30 + (headingProgress * 150); // Heading stays at 30px left
  const descriptionMovement = -30 + (descriptionProgress * 150); // Description animates separately
  const buttonMovement = -25 + (buttonProgress * 150); // Button moved right for alignment
  const imageMovement = 280 - (progress * 150); // Image starts at 280, moves 150px left
  
  // Handle watch demo button click
  const handleWatchDemo = () => {
    // Find the ScrollExpandSection and scroll to it
    const scrollExpandSection = document.querySelector('[data-scroll-expand-section]');
    if (scrollExpandSection) {
      // Scroll to the section with smooth behavior
      scrollExpandSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Trigger video autoplay after a delay to ensure scroll completes
      setTimeout(() => {
        // Dispatch custom event to trigger video expansion
        const expandEvent = new CustomEvent('triggerVideoExpansion');
        window.dispatchEvent(expandEvent);
      }, 800);
    }
  };
  
  return (
    <section ref={scrollRef} className="flex flex-col items-center px-16 py-36 relative self-stretch w-full flex-[0_0_auto] bg-[#000000]">
      <div className="flex flex-col max-w-screen-xl items-start gap-0.5 relative w-full flex-[0_0_auto]">
        <div className="flex items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[438px] items-end self-stretch relative">
            <div className="flex flex-col items-end gap-4 relative self-stretch w-full flex-[0_0_auto]">
              {/* RALLO AI - animates first */}
              <div 
                className="inline-flex items-center relative flex-[0_0_auto]"
                style={{ 
                  transform: `translateX(${taglineMovement}px)`
                }}
              >
                <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  RALLO AI
                </div>
              </div>

              <div className="flex flex-col items-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {/* Heading - animates second */}
                <h1 
                  className="relative self-stretch text-right font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-[#ffffff]"
                  style={{ 
                    transform: `translateX(${headingMovement}px)`
                  }}
                >
                  NEVER MISS A CUSTOMER. NEVER MISS A SALE.
                </h1>
                <p 
                  className="relative max-w-[550px] text-right font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-[#ffffff]"
                  style={{ 
                    transform: `translateX(${descriptionMovement}px)`
                  }}
                >
                  Rallo Agents transform missed interactions into revenue opportunities. Engage customers instantly, day or night.
                </p>
              </div>

              {/* Button - animates third */}
              <div 
                className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-6"
                style={{ 
                  transform: `translateX(${buttonMovement}px)`
                }}
              >
                <Button
                  variant="ghost"
                  onClick={handleWatchDemo}
                  className="h-auto inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] bg-transparent border border-solid border-white text-white hover:bg-white hover:text-black"
                >
                  <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                    WATCH DEMO
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 relative flex-1 grow">
            <div
              className=""
              style={{ 
                transform: `translateX(${imageMovement}px)`
              }}
            >
              <img
                className="w-[444px] h-[444px] object-cover rounded-xl"
                alt="Man with crosshairs - forward and backward loop"
                src="/videos/man-crosshairs-loop.webp"
                width={444}
                height={444}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};