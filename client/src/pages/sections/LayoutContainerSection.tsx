import React from "react";
import { Button } from "@/components/ui/button";
import { useUnifiedScrollAnimation } from "@/hooks/useUnifiedScrollAnimation";

export const LayoutContainerSection = (): JSX.Element => {
  // Use unified scroll animation system
  const { ref: scrollRef, progress } = useUnifiedScrollAnimation({
    animationDistance: 400,
    startOffset: 100,
    debugName: "LayoutContainer"
  });
  
  // DEBUG: Log section boundaries
  React.useEffect(() => {
    const section = scrollRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      console.log('🔍 LayoutContainerSection boundaries:', {
        top: rect.top,
        height: rect.height,
        paddingTop: window.getComputedStyle(section).paddingTop,
        paddingBottom: window.getComputedStyle(section).paddingBottom,
        marginTop: window.getComputedStyle(section).marginTop,
        marginBottom: window.getComputedStyle(section).marginBottom
      });
    }
  }, []);
  
  // Calculate smooth movements for different elements
  const globeScale = 0.5 + (progress * 0.5); // Scale from 50% to 100%
  // Removed slide animations for centered layout
  
  return (
    <section ref={scrollRef} className="flex flex-col items-center relative w-full" style={{ backgroundColor: '#ded8ca', paddingTop: '120px', paddingBottom: '60px', minHeight: '575px' }}>
      <div className="flex flex-col items-center px-16 w-full">
        <div className="flex flex-col max-w-screen-xl items-center w-full">
          <div className="flex flex-col max-w-screen-md items-center gap-2 w-full">
            {/* Globe icon with scale animation - increased by 15% */}
            <img
              className="transition-transform duration-300 ease-out"
              alt="Globe icon"
              src="/figmaAssets/agents-globe.svg"
              style={{
                width: '120px',
                height: '120px',
                transform: `scale(${globeScale})`,
                marginBottom: '16px'
              }}
            />

            <div className="flex flex-col items-center gap-4 w-full" style={{ marginTop: '-22px' }}>
              {/* Heading centered */}
              <div 
                className="inline-flex items-center"
              >
                <h3 className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  OMNICHANNEL REACH
                </h3>
              </div>

              {/* Content - no opacity changes */}
              <div 
                className="flex flex-col items-center gap-3 w-full"
              >
                <h1 className="text-[length:var(--heading-h2-font-size)] text-center leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                  YOUR PRESENCE, EVERYWHERE
                </h1>

                <p className="max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Deploy your AI agents across websites, mobile apps, social media, and voice channels. One platform, infinite touchpoints.
                </p>
              </div>
            </div>

            {/* Button centered */}
            <div 
              className="inline-flex items-center gap-1 mt-6"
            >
              <Button
                variant="ghost"
                className="h-auto px-6 py-3 bg-transparent border border-black text-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-black hover:text-white"
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};