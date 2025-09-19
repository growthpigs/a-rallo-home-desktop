import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const serviceItems = [
  {
    number: "01",
    rotatedText: "",
    tagline: "USE CASES",
    heading: "Coaches multiplying their<br />audience",
    description:
      "Transform your coaching expertise into scalable AI agents that engage prospects 24/7 across all channels.",
    primaryButton: "Get Started",
    secondaryButton: "Learn More",
  },
  {
    number: "02", 
    rotatedText: "",
    tagline: "LEAD CAPTURE",
    heading: "Businesses capturing every<br />lead",
    description:
      "Never miss a potential customer again. Your AI agents qualify leads, book meetings, and nurture prospects while you focus on closing deals.",
    primaryButton: "Get Started",
    secondaryButton: "Case Study",
  },
  {
    number: "03",
    rotatedText: "",
    tagline: "WHITE LABEL",
    heading: "Agencies selling high-value<br />branded AI suites",
    description:
      "Offer cutting-edge AI solutions under your brand. Complete white-label platform lets you deliver enterprise-grade automation to your clients.",
    primaryButton: "Get Started",
    secondaryButton: "Pricing",
  },
];

// Individual item component with its own intersection observer
const ServiceItem = ({ item, index, onPrimaryClick }: { item: typeof serviceItems[0], index: number, onPrimaryClick: () => void }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!itemRef.current) return;

    const handleScroll = () => {
      if (!itemRef.current) return;
      
      const rect = itemRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress as element moves from bottom of viewport to center
      // Progress 0 = element at bottom of viewport
      // Progress 1 = element centered in viewport
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Element is at least partially visible
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        
        // Distance from bottom of viewport to center
        const totalDistance = viewportHeight / 2;
        
        // How far the element center has traveled from bottom
        const distanceTraveled = viewportHeight - elementCenter;
        
        // Calculate 0-1 progress
        const newProgress = Math.min(1, Math.max(0, distanceTraveled / totalDistance));
        setProgress(newProgress);
      } else if (rect.top >= viewportHeight) {
        // Element is below viewport
        setProgress(0);
      } else if (rect.bottom <= 0) {
        // Element is above viewport - keep at full progress
        setProgress(1);
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const itemMovement = progress * (80 + index * 20);
  // Consistent positioning for all numbers
  const numberOffset = -50; // Same alignment for all numbers
  
  // Calculate staggered animations for each element
  const taglineMovement = 200 - (progress * 200); // No delay
  const headingMovement = 200 - (Math.max(0, progress - 0.1) * 222); // Slight delay
  const descriptionMovement = 200 - (Math.max(0, progress - 0.2) * 250); // More delay
  const buttonMovement = 200 - (Math.max(0, progress - 0.3) * 285); // Most delay

  return (
    <div
      ref={itemRef}
      className="items-center justify-center gap-16 self-stretch w-full flex-[0_0_auto] flex relative"
      style={{
        transform: `translateY(${itemMovement}px)`,
        opacity: 1  // NO FADE - Always 100% opacity
      }}
    >
      <div 
        className="w-fit text-[224px] leading-[268.8px] whitespace-nowrap relative [font-family:'JetBrains_Mono',monospace] font-bold text-black tracking-[0] z-20"
        style={{
          transform: `translateX(${-300 + (progress * 300) + numberOffset}px)`,  // Better alignment within content
          opacity: 1  // NO FADE - Always 100% opacity
        }}
      >
        {item.number}
      </div>
      
      {/* Rotated text labels */}
      <div 
        className="absolute left-[-120px] top-1/2 transform -translate-y-1/2 -rotate-90 origin-center"
        style={{
          transform: `translateX(${-50 + (progress * 50)}px) translateY(-50%) rotate(-90deg)`,
          opacity: progress
        }}
      >
        <span className="text-sm font-['JetBrains_Mono'] font-medium text-black tracking-wider">
          {item.rotatedText}
        </span>
      </div>

      <div 
        className="flex-col h-[349px] items-start gap-2 flex-1 grow flex relative z-10"
        style={{
          padding: '24px',
          marginLeft: '-24px',
          backgroundColor: '#ebe6daff',
          borderRadius: '8px',
          boxShadow: 'none'
        }}
      >
        <div className="relative self-stretch w-full h-0.5 bg-[#0000001a]">
          <div className="w-8 h-0.5 bg-black" />
        </div>

        <div className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div 
                className="relative w-fit  font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]"
                style={{
                  transform: `translateX(${taglineMovement}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {item.tagline}
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 
                className="self-stretch  text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]"
                style={{
                  transform: `translateX(${headingMovement}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
                dangerouslySetInnerHTML={{ __html: item.heading }}
              />

              <p 
                className="relative max-w-[550px] font-['Inter'] font-normal text-black text-xl leading-relaxed"
                style={{
                  transform: `translateX(${descriptionMovement}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {item.description}
              </p>
            </div>
          </div>

          <div 
            className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
            style={{
              transform: `translateX(${buttonMovement}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <Button
              variant="ghost"
              onClick={onPrimaryClick}
              className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
            >
              {item.primaryButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceOverviewSection = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const handleGetStarted = () => {
    setLocation('/pricing');
  };

  return (
    <section className="flex flex-col items-center gap-20 px-16 pt-28 relative self-stretch w-full flex-[0_0_auto]" style={{ backgroundColor: '#ebe6daff', paddingBottom: '360px' }}>
      <div className="flex-col max-w-screen-xl items-start justify-center gap-32 w-full flex-[0_0_auto] flex relative">
        {/* Force refresh - updated content with Record/Distribute/Engage */}
        {serviceItems.map((item, index) => (
          <ServiceItem key={`service-${index}-v2`} item={item} index={index} onPrimaryClick={handleGetStarted} />
        ))}
      </div>
    </section>
  );
};