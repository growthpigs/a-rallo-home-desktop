import React from "react";
import { Separator } from "@/components/ui/separator";

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl items-start gap-20 flex w-full">
        <div className="flex items-center gap-20 w-full">
          <img
            className="flex-1 h-[640px] object-cover"
            alt="Placeholder image"
            src="/figmaAssets/placeholder-image.png"
          />

          <div className="flex-col items-start gap-8 flex-1 flex">
            <img
              className="flex-[0_0_auto]"
              alt="Stars"
              src="/figmaAssets/stars.svg"
            />

            <blockquote className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
              "Rallo has revolutionized our customer engagement strategy,
              providing 24/7 intelligent interactions that feel genuinely
              personal."
            </blockquote>

            <div className="inline-flex items-center gap-5">
              <div className="inline-flex flex-col items-start">
                <div className="w-fit mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-regular-semi-bold-font-style)]">
                  Jane Doe
                </div>

                <div className="w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                  CEO, Tech Innovations Inc
                </div>
              </div>

              <Separator orientation="vertical" className="w-px h-[61px]" />

              <div className="w-[120px] h-12 relative">
                <img
                  className="absolute w-[116px] h-[19px] top-3.5 left-0.5"
                  alt="Logo"
                  src="/figmaAssets/logo.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
