import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export const MainContentSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("01");

  const features = [
    {
      id: "01",
      number: "01",
      name: "Feature one",
      title: "Short heading goes here",
      description:
        "Rallo empowers businesses to scale customer engagement effortlessly.",
      image: "/figmaAssets/placeholder-image-3.png",
    },
    {
      id: "02",
      number: "02",
      name: "Feature two",
      title: "Feature two heading",
      description: "Description for feature two goes here.",
      image: "/figmaAssets/placeholder-image-3.png",
    },
    {
      id: "03",
      number: "03",
      name: "Feature three",
      title: "Feature three heading",
      description: "Description for feature three goes here.",
      image: "/figmaAssets/placeholder-image-3.png",
    },
    {
      id: "04",
      number: "04",
      name: "Feature four",
      title: "Feature four heading",
      description: "Description for feature four goes here.",
      image: "/figmaAssets/placeholder-image-3.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-md items-start gap-4 flex-[0_0_auto] relative w-full">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Tagline
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
              MAXIMIZE YOUR DIGITAL POTENTIAL
            </h2>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-col h-[720px] items-start self-stretch w-full border border-solid border-black flex relative"
        >
          <TabsList className="flex items-start relative flex-1 self-stretch w-full grow bg-transparent h-auto p-0 rounded-none">
            {features.map((feature, index) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={`flex flex-1 grow items-start relative self-stretch bg-white data-[state=active]:bg-white hover:bg-white ${
                  index < features.length - 1
                    ? "border-r border-r-solid border-black"
                    : ""
                } h-auto p-0 rounded-none data-[state=active]:shadow-none`}
              >
                <div className="inline-flex flex-col items-center justify-between px-6 py-8 relative self-stretch flex-[0_0_auto] overflow-hidden">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {feature.number}
                  </div>

                  <div className="relative w-fit ml-[-47.00px] mr-[-47.00px] -rotate-90 font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                    {feature.name}
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="flex-col w-[640px] items-start gap-12 px-12 py-16 self-stretch flex relative m-0 data-[state=inactive]:hidden"
            >
              <header className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] bg-transparent">
                <h3 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)] relative font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-black tracking-[var(--heading-h3-letter-spacing)] [font-style:var(--heading-h3-font-style)]">
                  {feature.title}
                </h3>

                <p className="relative w-[544px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {feature.description}
                </p>
              </header>

              <img
                className="w-[544px] h-[400px] relative object-cover"
                alt="Placeholder image"
                src={feature.image}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};