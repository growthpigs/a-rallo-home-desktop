import React from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <section 
      className="flex h-screen items-center justify-center px-16 py-0 relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('https://p129.p0.n0.cdn.zight.com/items/NQuXl2mJ/e8b7ba2f-03c3-4abb-83b5-1a8961737b32.webp?source=client&v=bcb5de4901429c3e82ca5c71698fa6e3')`
      }}
      data-testid="section-hero"
    >
      <div className="flex-col max-w-screen-xl items-start gap-20 flex-1 grow flex relative">
        <div className="flex flex-col max-w-[560px] items-start gap-8 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              You, MULTIPLIED
            </h1>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Create AI-powered video, chat, and voice agents that represent
              you, 24/7. Record once, engage everywhere - while you focus on
              what matters most.
            </p>
          </div>

          <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
            <Button
              className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] h-auto bg-white border border-solid text-black hover:bg-gray-100 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
              variant="outline"
            >
              GET INSTANT ACCESS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
