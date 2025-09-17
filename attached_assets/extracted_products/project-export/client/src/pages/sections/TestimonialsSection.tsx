import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Record Once",
    description:
      "Create your AI agent's persona and messaging in a single recording session.",
  },
  {
    title: "Deploy Everywhere",
    description:
      "Instantly distribute your AI agent across multiple communication channels.",
  },
  {
    title: "Continuous Learning",
    description:
      "AI agents improve and adapt based on interaction data and feedback.",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-4 w-full">
          <div className="inline-flex items-center">
            <div className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Integration
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <h2 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Seamless AI agent deployment
            </h2>

            <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[27px]">
              Integrate Rallo AI agents effortlessly into your existing digital
              ecosystem with minimal setup and maximum impact.
            </p>
          </div>
        </header>

        <div className="flex flex-col items-center gap-16 self-stretch w-full">
          <div className="items-start gap-16 self-stretch w-full flex flex-col">
            <img
              className="self-stretch w-full h-[738px] object-cover"
              alt="Tab pane"
              src="/figmaAssets/tab-pane-1.png"
            />
          </div>

          <div className="flex items-start self-stretch w-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex-1 border-0 border-t border-t-black border-solid bg-transparent shadow-none"
              >
                <CardContent className="flex flex-col items-center justify-center gap-1 px-6 py-4">
                  <h3 className="w-fit text-black text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] whitespace-nowrap mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)]">
                    {feature.title}
                  </h3>

                  <p className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
