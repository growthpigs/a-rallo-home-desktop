import React from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../figmaAssets/avatar-image.png)_50%_50%_/_cover]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-md items-start gap-8 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Pricing
              </div>
            </div>

            <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
              <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Scale your digital presence
              </h1>

              <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Flexible pricing plans designed to multiply your business impact
                across every channel
              </p>
            </div>
          </div>

          <div className="inline-flex gap-4 flex-[0_0_auto] items-start relative">
            <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] bg-white border border-solid h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-gray-100">
              Get started
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] border border-solid border-white bg-transparent h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-white hover:text-black"
            >
              Book demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
