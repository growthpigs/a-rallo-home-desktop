import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import extreme_close_up_of_closed_eye_with_geometric_light_patterns_projecting_through_eyelashes_transluce_ru05jm4ljm73ohmxqa7m_3 from "@assets/extreme_close-up_of_closed_eye_with_geometric_light_patterns_projecting_through_eyelashes_transluce_ru05jm4ljm73ohmxqa7m_3.png";

import finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2 from "@assets/finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2.png";

const solutionsData = [
  {
    id: "rallo-agent",
    title: "Rallo Agent",
    description:
      "Comprehensive AI presence across video, chat, and voice channels.",
    image: "/figmaAssets/placeholder-image-8.png",
    className: "pt-[200px]",
  },
  {
    id: "rallo-chat",
    title: "Rallo Chat",
    description: "Always-on website and app chat support.",
    image: "/figmaAssets/placeholder-image-8.png",
    className: "",
  },
  {
    id: "rallo-interactive",
    title: "Rallo Interactive",
    description: "Real-time two-way video conversations powered by AI.",
    image: "/figmaAssets/placeholder-image-8.png",
    className: "",
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="gap-20 px-16 py-28 flex flex-col items-center relative w-full bg-white">
      <div className="flex-col max-w-screen-xl items-start gap-20 w-full flex-[0_0_auto] mb-[-73.00px] flex relative">
        <header className="flex-col max-w-screen-md items-start gap-8 w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Solutions
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                POWERFUL AI AGENTS FOR EVERY NEED
              </h2>

              <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Discover how Rallo transforms your digital communication
                strategy.
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            className="inline-flex items-center gap-6 relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
          >
            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                Learn More
              </span>

              <ChevronRightIcon className="relative w-6 h-6" />
            </div>
          </Button>
        </header>

        <div className="gap-16 flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div
            className={`flex flex-col items-start gap-2.5 pb-0 px-0 relative flex-1 grow ${solutionsData[0].className}`}
          >
            <Card className="flex-col max-w-[400px] items-start gap-8 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent">
              <CardContent className="p-0 w-full">
                <img
                  className="relative self-stretch w-full h-[532px] object-cover"
                  alt="Placeholder image"
                  src={extreme_close_up_of_closed_eye_with_geometric_light_patterns_projecting_through_eyelashes_transluce_ru05jm4ljm73ohmxqa7m_3}
                />

                <div className="flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative mt-8">
                  <h3 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {solutionsData[0].title}
                  </h3>

                  <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {solutionsData[0].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-end gap-28 relative flex-1 grow">
            <Card className="flex-col max-w-[400px] items-start gap-8 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent">
              <CardContent className="p-0 w-full">
                <img
                  className="w-[400px] h-[400px] relative object-cover"
                  alt="Placeholder image"
                  src={solutionsData[1].image}
                />

                <div className="flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative mt-8">
                  <h3 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {solutionsData[1].title}
                  </h3>

                  <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {solutionsData[1].description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent">
              <CardContent className="p-0 w-full">
                <img
                  className="w-[608px] h-[414px] relative object-cover"
                  alt="Placeholder image"
                  src={finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2}
                />

                <div className="flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative mt-8">
                  <h3 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {solutionsData[2].title}
                  </h3>

                  <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {solutionsData[2].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
