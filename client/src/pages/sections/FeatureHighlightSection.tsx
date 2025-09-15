import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

import ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_40ibrxn743hsyg31iyzi_1 from "@assets/ultra_close-up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_40ibrxn743hsyg31iyzi_1.png";

export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-[#e6e6e6]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="items-start gap-16 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start gap-20 flex-1 grow flex relative">
            <div className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                    Global
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                    AI THAT SPEAKS EVERY LANGUAGE
                  </h2>

                  <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Rallo empowers diverse organizations to expand their reach
                    and impact.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Explore Solutions
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto p-0 text-black hover:bg-transparent hover:text-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Watch Demo
                  <ChevronRightIcon className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>

            <img
              className="w-80 h-80 relative object-cover"
              alt="Placeholder image"
              src="/figmaAssets/placeholder-image-16.png"
            />
          </div>

          <img
            className="flex-1 grow h-[608px] relative object-cover"
            alt="Placeholder image"
            src={ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_40ibrxn743hsyg31iyzi_1}
          />
        </div>
      </div>
    </section>
  );
};
