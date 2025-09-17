import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const cardData = [
  {
    type: "large",
    tagline: "Setup",
    title: "Effortless Deployment of AI Agents",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    primaryButton: "Learn",
    secondaryButton: "Start",
    className:
      "flex-col items-start justify-center gap-8 p-12 flex-1 self-stretch grow bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../figmaAssets/content-3.png)_50%_50%_/_cover] flex relative",
  },
  {
    type: "small",
    icon: "/figmaAssets/relume.svg",
    title: "Your AI Agent in Three Simple Steps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    secondaryButton: "Deploy",
    className:
      "flex-col items-start gap-6 p-6 flex-1 grow bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../figmaAssets/content-3.png)_50%_50%_/_cover] flex relative",
  },
  {
    type: "small",
    icon: "/figmaAssets/relume.svg",
    title: "Continuous Improvement for Optimal Performance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    secondaryButton: "Engage",
    className:
      "flex-col items-start gap-6 p-6 flex-1 grow bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../figmaAssets/content-3.png)_50%_50%_/_cover] flex relative",
  },
  {
    type: "bottom",
    icon: "/figmaAssets/relume.svg",
    title: "Short heading here",
    description:
      "Quickly set up and activate your AI agents across all platforms with ease.",
    primaryButton: "Optimize",
    secondaryButton: "Refine",
    className:
      "flex-col items-start gap-8 p-12 self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../figmaAssets/content-3.png)_50%_50%_/_cover] flex relative",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
        <header className="flex flex-col max-w-screen-md items-center gap-4 relative w-full flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Integration
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Short heading goes here
            </h2>

            <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </header>

        <div className="items-start gap-8 flex relative self-stretch w-full flex-[0_0_auto]">
          <Card className={cardData[0].className}>
            <CardContent className="p-0 flex flex-col h-full">
              <div className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                    {cardData[0].tagline}
                  </div>
                </div>

                <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h3 className="self-stretch text-white text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)] relative mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] tracking-[var(--heading-h3-letter-spacing)] [font-style:var(--heading-h3-font-style)]">
                    {cardData[0].title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    {cardData[0].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <Button
                  variant="outline"
                  className="h-auto inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-white bg-transparent text-white hover:bg-white hover:text-black"
                >
                  {cardData[0].primaryButton}
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] text-white hover:bg-white/10"
                >
                  {cardData[0].secondaryButton}
                  <ChevronRightIcon className="w-6 h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
            <div className="items-center gap-8 flex relative self-stretch w-full flex-[0_0_auto]">
              {cardData.slice(1, 3).map((card, index) => (
                <Card key={`small-card-${index}`} className={card.className}>
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                      <img
                        className="relative w-12 h-12"
                        alt="Relume"
                        src={card.icon}
                      />

                      <div className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                        <h4 className="self-stretch text-white text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] relative mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                          {card.title}
                        </h4>

                        <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                      <Button
                        variant="ghost"
                        className="h-auto inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] text-white hover:bg-white/10"
                      >
                        {card.secondaryButton}
                        <ChevronRightIcon className="w-6 h-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className={cardData[3].className}>
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-12 h-12"
                    alt="Relume"
                    src={cardData[3].icon}
                  />

                  <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                    <h3 className="self-stretch text-white text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)] relative mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] tracking-[var(--heading-h3-letter-spacing)] [font-style:var(--heading-h3-font-style)]">
                      {cardData[3].title}
                    </h3>

                    <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                      {cardData[3].description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <Button
                    variant="outline"
                    className="h-auto inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-white bg-transparent text-white hover:bg-white hover:text-black"
                  >
                    {cardData[3].primaryButton}
                  </Button>

                  <Button
                    variant="ghost"
                    className="h-auto inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] text-white hover:bg-white/10"
                  >
                    {cardData[3].secondaryButton}
                    <ChevronRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
