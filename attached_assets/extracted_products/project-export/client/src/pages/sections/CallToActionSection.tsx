import React from "react";
import { Button } from "@/components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-md items-center gap-8 w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Multiply Your Digital Presence
            </h2>

            <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[27px]">
              Experience the future of automated, intelligent customer
              interactions with Rallo AI agents.
            </p>
          </div>

          <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
            <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] bg-black border border-solid h-auto">
              <span className="relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                Start Free Trial
              </span>
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] border border-solid border-black h-auto"
            >
              <span className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                Book Demo
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
