import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    number: "01",
    tagline: "Use Cases",
    heading: "Coaches multiplying their audience",
    description:
      "See how different sectors leverage Rallo's powerful AI solutions.",
    primaryButton: "Get Started",
    secondaryButton: "Learn More",
  },
  {
    number: "02",
    tagline: "Tagline",
    heading: "Businesses capturing every lead",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    primaryButton: "Button",
    secondaryButton: "Button",
  },
  {
    number: "03",
    tagline: "Tagline",
    heading: "Agencies selling high-value branded AI suites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    primaryButton: "Button",
    secondaryButton: "Button",
  },
];

export const ServiceOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex-col max-w-screen-xl items-start justify-center gap-28 w-full flex-[0_0_auto] flex relative">
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className="items-center justify-center gap-20 self-stretch w-full flex-[0_0_auto] flex relative"
          >
            <div className="w-fit text-[224px] leading-[268.8px] whitespace-nowrap relative [font-family:'JetBrains_Mono',monospace] font-bold text-black tracking-[0]">
              {item.number}
            </div>

            <div className="flex-col h-[349px] items-start gap-8 flex-1 grow flex relative">
              <div className="relative self-stretch w-full h-0.5 bg-[#0000001a]">
                <div className="w-8 h-0.5 bg-black" />
              </div>

              <div className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                      {item.tagline}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <h2 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                      {item.heading}
                    </h2>

                    <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                  <Button
                    variant="outline"
                    className="h-auto px-6 py-3 border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                  >
                    {item.primaryButton}
                  </Button>

                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-black hover:bg-transparent hover:text-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                  >
                    {item.secondaryButton}
                    <ChevronRightIcon className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
