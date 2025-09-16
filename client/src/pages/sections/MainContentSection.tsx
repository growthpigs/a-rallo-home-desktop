import React, { useState } from "react";

import extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3 from "@assets/extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3.png";

export const MainContentSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    {
      id: 1,
      number: "01",
      title: "Feature one",
      content: "Comprehensive AI presence across video, chat, and voice channels.",
      image: "/figmaAssets/placeholder-image-2.png"
    },
    {
      id: 2,
      number: "02", 
      title: "Feature two",
      content: "Always-on website and app chat support for instant customer engagement.",
      image: "/figmaAssets/placeholder-image-2.png"
    },
    {
      id: 3,
      number: "03",
      title: "Feature three", 
      content: "Real-time two-way video conversations powered by advanced AI technology.",
      image: "/figmaAssets/placeholder-image-2.png"
    },
    {
      id: 4,
      number: "04",
      title: "Feature four",
      content: "Instant video content generation from simple text prompts.",
      image: "/figmaAssets/placeholder-image-2.png"
    },
    {
      id: 5,
      number: "05",
      title: "Feature five",
      content: "Advanced analytics and insights to optimize customer interactions.",
      image: "/figmaAssets/placeholder-image-2.png"
    }
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-[#e6e6e6]">
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

        <div className="flex h-[720px] w-full border border-solid border-black" data-name="Accordion">
          {tabData.map((tab) => (
            <div 
              key={tab.id}
              className={`${activeTab === tab.id ? 'flex-1' : 'w-[120px]'} bg-white flex cursor-pointer transition-all duration-300 border-r border-r-solid border-black last:border-r-0`}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`tab-pane-${tab.id}`}
            >
              {/* Collapsed State */}
              {activeTab !== tab.id && (
                <div className="flex flex-col h-full relative p-6">
                  <div className="text-2xl font-normal font-['JetBrains_Mono',_monospace] text-black">
                    {tab.number}
                  </div>
                  <div className="absolute bottom-6 left-12">
                    <div className="-rotate-90 whitespace-nowrap text-xl font-normal text-black font-['JetBrains_Mono',_monospace] origin-bottom-left">
                      {tab.title}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Expanded State */}
              {activeTab === tab.id && (
                <div className="flex flex-col h-full">
                  {/* Header section with number */}
                  <div className="flex items-start p-6 pb-2">
                    <div className="text-2xl font-normal font-['JetBrains_Mono',_monospace] text-black mr-4">
                      {tab.number}
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="flex-1 flex flex-col p-6 pt-2">
                    <div className="mb-6">
                      <h3 className="text-3xl font-normal font-['JetBrains_Mono',_monospace] text-black mb-4 uppercase">FEATURES ACORDIAN</h3>
                      <p className="text-base text-black font-['Inter',_sans-serif] leading-relaxed">
                        {tab.content}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <img
                        className="w-[400px] h-[400px] object-cover bg-gray-200"
                        alt="Placeholder image"
                        src={extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};