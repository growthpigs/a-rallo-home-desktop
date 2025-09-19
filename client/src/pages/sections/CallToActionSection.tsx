import React from "react";
import { Button } from "@/components/ui/button";
import { useUnifiedScrollAnimation } from "@/hooks/useUnifiedScrollAnimation";

export const CallToActionSection = (): JSX.Element => {
  const { ref: scrollRef, progress } = useUnifiedScrollAnimation({
    animationDistance: 350,
    startOffset: 100,
    debugName: "CallToActionSection"
  });

  // Animation calculations - elements slide IN from opposite sides
  const leftMovement = -50 + (progress * 50);  // Text starts -50px LEFT, slides RIGHT to center (0)
  const rightMovement = 60 - (progress * 60);   // Image starts +60px RIGHT, slides LEFT to center (0)
  
  return (
    <section ref={scrollRef} className="flex flex-col items-center gap-20 px-16 py-44 relative self-stretch w-full flex-[0_0_auto]" style={{ backgroundColor: '#4077baff' }}>
      <div className="flex flex-col max-w-screen-xl items-start gap-0.5 relative w-full flex-[0_0_auto]">
        <div className="items-center gap-[50px] flex relative self-stretch w-full flex-[0_0_auto]">
          <div 
            className="flex flex-col items-end gap-8 relative flex-1 grow pr-[50px]"
            style={{
              transform: `translateX(${leftMovement}px)`
            }}
          >
            <div className="flex flex-col items-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="self-stretch text-right text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                CREATE ONCE.
                <br />
                ENGAGE EVERYWHERE.
              </h2>

              <p className="relative max-w-[550px] text-right font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-white text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Start multiplying your digital presence with Rallo&#39;s
                intelligent AI agents.
              </p>
            </div>

            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
              <Button className="inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] bg-white border border-solid border-white h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[#4077baff] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-gray-100">
                Get Instant Access
              </Button>

              <Button
                variant="ghost"
                className="inline-flex items-center justify-center gap-0.5 px-5 py-2.5 relative flex-[0_0_auto] bg-transparent border border-solid border-white h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-white hover:text-[#4077baff]">
                Book Demo
              </Button>
            </div>
          </div>

          <video
            className="flex-1 grow h-[400px] relative object-cover rounded-xl"
            autoPlay
            loop
            muted
            playsInline
            style={{
              transform: `translateX(${rightMovement}px)`
            }}
          >
            <source src="/videos/panels-move-optimized.webm" type="video/webm" />
            <source src="/videos/panels-move.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};