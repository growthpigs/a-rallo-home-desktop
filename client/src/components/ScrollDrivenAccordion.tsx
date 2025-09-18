import React, { useRef, useEffect, useState } from "react";
import { FastImage } from "@/components/FastImage";

interface AccordionTab {
  id: number;
  number: string;
  title: string;
  content: string;
  image: string;
}

interface ScrollDrivenAccordionProps {
  tabs: AccordionTab[];
  height?: string;
}

export const ScrollDrivenAccordion: React.FC<ScrollDrivenAccordionProps> = ({ 
  tabs, 
  height = "720px"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // EXACT same scroll mechanics as video component
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      // Calculate scroll progress using video's logic
      let progress = 0;
      
      if (containerTop <= 0 && containerTop >= -(containerHeight - viewportHeight)) {
        // Element is in "sticky" zone - calculate progress through the container
        const scrolledIntoContainer = -containerTop;
        const totalScrollDistance = containerHeight - viewportHeight;
        progress = Math.min(1, Math.max(0, scrolledIntoContainer / totalScrollDistance));
      } else if (containerTop > 0) {
        // Element hasn't reached sticky position yet
        progress = 0;
      } else {
        // Element has passed through completely
        progress = 1;
      }

      setScrollProgress(progress);

      // Calculate active tab with EXPONENTIAL RESISTANCE 
      const numTabs = tabs.length;
      const tabProgress = progress * numTabs;
      
      // ELASTIC RESISTANCE SYSTEM: Gets increasingly harder until "pop" to next tab
      // Each tab requires progressively MORE effort, including the final tab
      const tabIndex = Math.floor(tabProgress);
      const tabSubProgress = tabProgress - tabIndex; // Progress within current tab section
      
      // SPRINGY resistance thresholds - more forgiving but bouncy
      const resistanceThresholds = [0.65, 0.70, 0.75]; // Lower thresholds = easier progression
      const currentThreshold = resistanceThresholds[tabIndex] || 0.75; // More forgiving
      
      // Create springy elastic effect with bounce
      const elasticPower = 2.2 + (tabIndex * 0.3); // Much gentler curves
      const elasticProgress = Math.pow(tabSubProgress, elasticPower);
      
      let newActiveTab = tabIndex + 1; // Start with current section
      
      // Only advance if we've overcome the elastic resistance for this tab
      if (elasticProgress > currentThreshold && tabIndex + 2 <= numTabs) {
        newActiveTab = tabIndex + 2;
        console.log(`🎯 [ELASTIC POP!] Tab ${tabIndex + 1} → ${tabIndex + 2} (threshold: ${currentThreshold}, elastic: ${elasticProgress.toFixed(3)})`);
      }
      
      // Even the final tab (5) has elastic resistance before completion
      if (tabIndex === numTabs - 1 && elasticProgress > currentThreshold) {
        console.log(`🏁 [FINAL ELASTIC] Tab ${numTabs} completed with resistance (elastic: ${elasticProgress.toFixed(3)})`);
      }
      
      // Ensure we stay within bounds
      newActiveTab = Math.min(numTabs, Math.max(1, newActiveTab));
      
      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
        console.log(`🎵 [EpicAccordion] Tab progression: ${activeTab} → ${newActiveTab} (scroll: ${progress.toFixed(3)})`);
      }

      // Debug logging for scroll mechanics (same as video)
      if (Math.abs(progress - scrollProgress) > 0.02) {
        console.log(`📊 [EpicAccordion] Progress: ${progress.toFixed(3)}, Tab: ${newActiveTab}/${numTabs}`);
      }
    };

    // Use passive listener for performance (same as video)
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabs.length, activeTab, scrollProgress]);

  return (
    // OUTER CONTAINER: Creates scroll distance like video component
    <div 
      ref={containerRef}
      className="relative w-full"
      style={{ 
        // ELASTIC scroll distance for longer pauses and elasticity effect
        height: `calc(100vh + ${tabs.length * 700}px)`, // Each tab gets 700px for proper scroll timing
      }}
      data-name="ScrollDrivenAccordion"
    >
      {/* STICKY INNER CONTAINER: Stays in center like video */}
      <div
        className="sticky top-0 w-full flex border border-solid border-black overflow-hidden bg-white"
        style={{ 
          height: height, // Fixed height accordion 
          top: '50%',      // Center in viewport
          transform: 'translateY(-50%)', // Perfect center alignment
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <div
              key={tab.id}
              className={`
                relative border-r border-solid border-black last:border-r-0 
                transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${isActive ? 'flex-1' : 'flex-none w-[140px]'}
              `}
              style={{
                // Smooth width transitions based on active state
                flex: isActive ? '1 1 auto' : '0 0 140px'
              }}
            >
              {/* Tab Number (Always at Top) - JetBrains Mono LIGHT - Conditional positioning */}
              <div className={`absolute top-8 z-20 transition-all duration-800 ${
                isActive ? 'left-8' : 'left-1/2 transform -translate-x-1/2'
              }`}>
                <span className={`font-light transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-6xl ${
                  isActive ? 'text-[#fd815aff]' : 'text-black/80'
                }`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {tab.number}
                </span>
              </div>
              
              {/* Tab Title (Inactive only - vertical, at bottom) */}
              {!isActive && (
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 
                    className="
                      font-heading-h4 font-[number:var(--heading-h4-font-weight)] 
                      text-black text-[length:var(--heading-h4-font-size)] 
                      tracking-[var(--heading-h4-letter-spacing)] 
                      leading-[var(--heading-h4-line-height)]
                    "
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)'
                    }}
                  >
                    {tab.title}
                  </h3>
                </div>
              )}

              {/* Active Tab Content */}
              {isActive && (
                <div className="flex h-full">
                  {/* Left Side: Content */}
                  <div className="flex-1 p-8 pt-32 flex flex-col justify-center">
                    <div className="max-w-md space-y-4">
                      {/* Title positioned just above content */}
                      <h3 className="
                        font-heading-h4 font-[number:var(--heading-h4-font-weight)] 
                        text-black text-[length:var(--heading-h4-font-size)] 
                        tracking-[var(--heading-h4-letter-spacing)] 
                        leading-[var(--heading-h4-line-height)]
                      ">
                        {tab.title}
                      </h3>
                      
                      {/* Content text - much bigger, easier to read */}
                      <p className="text-xl leading-relaxed font-['Barlow'] font-normal text-black">
                        {tab.content}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Image */}
                  <div className="flex-1 relative overflow-hidden">
                    <FastImage
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={720}
                      priority={true}
                    />
                  </div>
                </div>
              )}

              {/* Inactive Tab Background */}
              {!isActive && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 opacity-50"
                />
              )}
            </div>
          );
        })}

        {/* Scroll Progress Indicator - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex gap-2">
            {tabs.map((_, index) => (
              <div
                key={index}
                className={`
                  w-3 h-3 rounded-full transition-all duration-500 ease-out
                  ${activeTab === index + 1 ? 'bg-black scale-125' : 'bg-black/30'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar - Top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-black/10">
          <div 
            className="h-full bg-black transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};