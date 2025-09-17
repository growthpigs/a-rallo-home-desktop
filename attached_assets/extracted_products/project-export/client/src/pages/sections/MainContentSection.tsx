import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const productCards = [
    {
      title: "Your digital presence reimagined with intelligent agents",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Learn More",
      icon: "/figmaAssets/relume.svg",
      backgroundImage: "url(../figmaAssets/content-3.png)",
    },
    {
      title: "You Multplied",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Watch Demo",
      icon: "/figmaAssets/relume.svg",
      backgroundImage: "url(../figmaAssets/content-3.png)",
    },
    {
      title: "Presence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Button",
      icon: "/figmaAssets/relume.svg",
      backgroundImage: "url(../figmaAssets/content-3.png)",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
        <header className="flex flex-col max-w-screen-md items-center gap-4 relative w-full flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Products
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              PRODUCTS
            </h2>

            <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </header>

        <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          {productCards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col items-start justify-center gap-6 p-8 relative flex-1 self-stretch grow bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),var(--bg-image)] bg-cover bg-center border-0"
              style={
                { "--bg-image": card.backgroundImage } as React.CSSProperties
              }
            >
              <CardContent className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative p-0">
                <img
                  className="relative w-12 h-12"
                  alt="Relume"
                  src={card.icon}
                />

                <div className="flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h3 className="self-stretch text-white text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {card.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    {card.description}
                  </p>
                </div>
              </CardContent>

              <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
                >
                  <span className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                    {card.buttonText}
                  </span>

                  <ChevronRightIcon className="relative w-6 h-6 text-white" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
