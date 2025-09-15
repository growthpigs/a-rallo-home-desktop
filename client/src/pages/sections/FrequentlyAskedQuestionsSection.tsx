import React, { useState } from 'react';

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
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
    <section className="flex flex-col items-center px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="basis-0 content-stretch flex grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Row">
        {tabData.map((tab) => (
          <div 
            key={tab.id}
            className={`${activeTab === tab.id ? 'basis-0 grow min-w-px' : ''} bg-white content-stretch flex h-full items-start justify-start relative shrink-0 cursor-pointer transition-all duration-300 ${activeTab === tab.id ? 'min-w-[400px]' : 'min-w-[80px]'}`}
            onClick={() => setActiveTab(tab.id)}
            data-name={`Tab Pane ${tab.id}`}
            data-testid={`tab-pane-${tab.id}`}
          >
            <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />

            {/* Tab Header */}
            <div className="box-border content-stretch flex flex-col h-full items-center justify-between overflow-clip px-6 py-8 relative shrink-0" data-name="Feature Tab">
              <div className="font-bold leading-[0] min-w-full relative shrink-0 text-[24px] text-black text-center" style={{ fontFamily: "'JetBrains Mono', monospace", fontVariationSettings: "'wdth' 100", width: "min-content" }}>
                <p className="leading-[1.4]">{tab.number}</p>
              </div>
              <div className="flex h-[136.031px] items-center justify-center relative shrink-0 w-[33.594px]">
                <div className="flex-none rotate-[270deg]">
                  <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.4] whitespace-pre">{tab.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content - Only show when active */}
            {activeTab === tab.id && (
              <div className="content-stretch flex flex-col gap-6 items-start justify-start overflow-clip p-8 relative shrink-0" data-name="Content">
                <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-black w-full" data-name="Header">
                  <div className="font-bold min-w-full relative shrink-0 text-[40px] text-black" style={{ fontFamily: "'JetBrains Mono', monospace", fontVariationSettings: "'wdth' 100", width: "min-content" }}>
                    <p className="leading-[1.2] uppercase">Short heading goes here</p>
                  </div>
                  <div className="font-['Inter',_sans-serif] font-normal relative shrink-0 text-[16px] w-[544px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.5]">{tab.content}</p>
                  </div>
                </div>
                <div className="bg-center bg-cover bg-no-repeat h-[400px] shrink-0 w-[544px]" data-name="Placeholder Image" style={{ backgroundImage: `url('${tab.image}')` }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};