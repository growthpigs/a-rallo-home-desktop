import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const ContentWrapperSection = (): JSX.Element => {

  return (
    <section className="gap-20 px-16 py-28 flex flex-col items-center relative w-full bg-white">
      <div className="flex-col max-w-screen-xl items-start gap-20 w-full flex-[0_0_auto] mb-[-73.00px] flex relative">
        <header className="flex-col max-w-screen-md items-start gap-8 w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Solutions
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="self-stretch text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                POWERFUL AI<br />AGENTS FOR EVERY NEED
              </h2>

              <p className="relative max-w-[540px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Discover how Rallo transforms your digital communication
                strategy.
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            className="inline-flex items-center gap-2 relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
          >
            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                Learn More
              </span>
              <ChevronRightIcon className="relative w-5 h-5" />
            </div>
          </Button>
        </header>
      </div>
    </section>
  );
};
