import React from "react";
import { Button } from "@/components/ui/button";
import { useElasticScrollAnimation } from "@/hooks/useElasticScrollAnimation";

import ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_40ibrxn743hsyg31iyzi_1 from "@assets/ultra_close-up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_40ibrxn743hsyg31iyzi_1.png";

import close_up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__si7n4pzw11pfkxj5appa_3 from "@assets/close-up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__si7n4pzw11pfkxj5appa_3.png";

import professional_hands_interacting_with_translucent_holographic_interfaces_soft_blue_lighting_minimal_m_k8vlwf5k7vwf24l6v228_1 from "@assets/professional_hands_interacting_with_translucent_holographic_interfaces_soft_blue_lighting_minimal_m_k8vlwf5k7vwf24l6v228_1.png";

export const FeatureHighlightSection = (): JSX.Element => {
  const { 
    ref: scrollRef, 
    progress,
    elasticX,
    elasticY,
    parallaxX,
    elasticScale,
    smoothOpacity
  } = useElasticScrollAnimation({
    animationDistance: 450,
    startOffset: 120,
    debugName: "FeatureHighlightSection",
    easing: 'apple', // Apple-style elastic easing
    lerp: 0.05 // Ultra-smooth
  });

  // Elastic animation calculations with different speeds for depth
  const leftMovement = elasticX(90);
  const rightMovement = parallaxX(85, 0.7); // Slightly reduced from 110 to 85
  
  return (
    <section ref={scrollRef} className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-[#e6e6e6]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="items-start gap-16 flex relative self-stretch w-full flex-[0_0_auto]">
          <div 
            className="flex-col items-start gap-8 flex-1 grow flex relative"
            style={{
              transform: `translateX(${leftMovement}px)`
            }}
          >
            <div className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit  font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                    GLOBAL REACH
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="self-stretch  text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                    AI THAT SPEAKS<br />EVERY LANGUAGE
                  </h2>

                  <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Rallo empowers diverse organizations<br />to expand their reach and impact.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <Button
                  variant="ghost"
                  className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Explore Solutions
                </Button>
              </div>
            </div>

            <img
              className="w-80 h-80 relative object-cover"
              alt="Placeholder image"
              src={professional_hands_interacting_with_translucent_holographic_interfaces_soft_blue_lighting_minimal_m_k8vlwf5k7vwf24l6v228_1}
              style={{
                transform: `translateY(${elasticY(50)}px) scale(${elasticScale(0.95, 1.02)})`,
                opacity: smoothOpacity(0.7, 1)
              }}
            />
          </div>

          <img
            className="w-[608px] h-[608px] relative object-cover"
            alt="Placeholder image"
            src={ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_40ibrxn743hsyg31iyzi_1}
            style={{
              transform: `translateX(${-rightMovement}px)`
            }}
          />
        </div>
      </div>
    </section>
  );
};
