import React from "react";
import { Button } from "@/components/ui/button";

export const GeneralLayoutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col w-[438px] items-start justify-between self-stretch flex relative">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  RALLO AI
                </div>
              </div>

              <h1 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                NEVER MISS A CUSTOMER. NEVER MISS A SALE.
              </h1>
            </div>

            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Rallo Agents transform missed interactions into revenue
                opportunities. Engage customers instantly, day or night.
              </p>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                <Button
                  variant="outline"
                  className="h-auto inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border border-solid border-black bg-transparent hover:bg-black hover:text-white"
                >
                  <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                    WATCH DEMO
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-8 relative flex-1 grow">
            <img
              className="w-[444px] h-[666px] relative object-cover"
              alt="Placeholder image"
              src="/figmaAssets/placeholder-image.png"
            />

            <img
              className="flex-1 grow h-[302px] relative object-cover"
              alt="Placeholder image"
              src="/figmaAssets/placeholder-image-16.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
