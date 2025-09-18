import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LazyWebP } from "@/components/LazyWebP";
import { DemoModal } from "@/components/DemoModal";
import { useScrollLinkedAnimation } from "@/hooks/useScrollLinkedAnimation";
import { ChevronRightIcon } from "lucide-react";
import { Waves } from "@/components/ui/wave-background";

import close_up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0 from "@assets/close-up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0.png";
import ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3 from "@assets/ultra_close-up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3.png";
import extreme_macro_of_lips_with_geometric_sound_wave_visualizations_emanating_from_mouth_translucent_ora_xxtbq6yc36jkg2eo00ck_0 from "@assets/extreme_macro_of_lips_with_geometric_sound_wave_visualizations_emanating_from_mouth_translucent_ora_xxtbq6yc36jkg2eo00ck_0.png";
import finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2 from "@assets/finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2.png";

const galleryItems = [
  {
    id: 1,
    title: "Rallo Chat",
    description: "Always-on website and app chat support.",
    icon: "/icons/Chat-cube.svg",
    demoType: "chat" as const,
    image: "/videos/rallo-chat-woman-simple.webp",
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 2,
    title: "Rallo Interactive",
    description: "Real-time two-way video conversations powered by AI.",
    icon: "/icons/agents-globe.svg",
    demoType: "video" as const,
    image: "/videos/rallo-interactive-knob-loop.webp",
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 3,
    title: "Rallo Publisher",
    description: "Generate marketing videos instantly from text prompts.",
    icon: "/icons/publish-diamond.svg",
    demoType: "video" as const,
    image: close_up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0,
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 4,
    title: "Rallo Voice",
    description: "Natural voice AI assistants for seamless conversations.",
    icon: "/icons/Voice-hexagon.svg", 
    demoType: "voice" as const,
    image: ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3,
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
];

// Individual Card Component with its own scroll animation
const ProductCard = ({ item, direction, waveApi }: { 
  item: typeof galleryItems[0], 
  direction: 'left' | 'right',
  waveApi: React.MutableRefObject<{ createRipple: (x: number, y: number) => void } | null>
}) => {
  const [activeDemo, setActiveDemo] = useState<'video' | 'chat' | 'voice' | null>(null);
  const [hasTriggeredRipple, setHasTriggeredRipple] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mountCountRef = useRef(0);
  
  // CRITICAL DEBUG: Track mounting/unmounting
  useEffect(() => {
    mountCountRef.current++;
    console.log(`🔵 [${item.title}] MOUNTED - Mount count: ${mountCountRef.current}`);
    
    return () => {
      console.log(`🔴 [${item.title}] UNMOUNTING!`);
    };
  }, [item.title]);
  
  // Debug modal state
  useEffect(() => {
    console.log('🟢 Modal state changed:', item.title, 'activeDemo:', activeDemo);
  }, [activeDemo, item.title]);
  
  // Each card gets direct scroll-linked animation - every pixel of scroll moves elements proportionally
  const { ref, progress } = useScrollLinkedAnimation(`ProductCard-${item.title}`);
  
  // Trigger ripple effect when card animates in
  useEffect(() => {
    if (progress > 0.5 && !hasTriggeredRipple && waveApi.current && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Create ripple at card center
      waveApi.current.createRipple(centerX, centerY);
      setHasTriggeredRipple(true);
    }
    
    // Reset when card goes off screen
    if (progress < 0.1) {
      setHasTriggeredRipple(false);
    }
  }, [progress, hasTriggeredRipple, waveApi, item.title]);
  
  // Calculate movement - cards CONVERGE from outside positions toward CENTER
  // At progress=0: cards are SPREAD OUT (far apart)
  // At progress=1: cards CONVERGE together toward center
  
  let translateX: number;
  
  // Apply smooth overshoot and settle animation
  const smoothOvershoot = (t: number) => {
    // Overshoot slightly past target (1.05) then settle back to 1.0
    const overshootAmount = 0.08; // 8% overshoot
    if (t < 0.7) {
      // Accelerate smoothly to overshoot point
      const adjustedT = t / 0.7;
      return (1 + overshootAmount) * (adjustedT * adjustedT * (3 - 2 * adjustedT));
    } else {
      // Gently settle back from overshoot
      const adjustedT = (t - 0.7) / 0.3;
      return (1 + overshootAmount) - overshootAmount * (adjustedT * adjustedT * (3 - 2 * adjustedT));
    }
  };
  
  const easedProgress = smoothOvershoot(progress);
  
  // ENHANCED DEBUG LOGGING - Find the opacity issue!
  useEffect(() => {
    if (cardRef.current) {
      const computedStyle = window.getComputedStyle(cardRef.current);
      const opacity = computedStyle.opacity;
      const transition = computedStyle.transition;
      const parentElement = cardRef.current.parentElement;
      const parentStyles = parentElement ? window.getComputedStyle(parentElement) : null;
      
      // Check for ANY transition properties
      if (transition && transition !== 'none') {
        console.error(`🚨 [${item.title}] TRANSITION DETECTED: ${transition}`);
      }
      
      // Check parent transitions
      if (parentStyles && parentStyles.transition !== 'none') {
        console.error(`🚨 [${item.title}] PARENT TRANSITION: ${parentStyles.transition}`);
      }
      
      // Check opacity changes
      if (opacity !== '1' && opacity !== '1.0') {
        console.warn(`⚠️ [${item.title}] OPACITY: ${opacity} (Progress: ${progress.toFixed(3)})`);
        
        // Check all ancestor elements
        let ancestor = cardRef.current.parentElement;
        let level = 1;
        while (ancestor && level <= 5) {
          const ancestorOpacity = window.getComputedStyle(ancestor).opacity;
          if (ancestorOpacity !== '1') {
            console.error(`🔥 [${item.title}] ANCESTOR ${level} has opacity: ${ancestorOpacity}`);
          }
          ancestor = ancestor.parentElement;
          level++;
        }
      }
    }
  }, [progress, item.title]);
  
  // Add staggered offset based on item index for asymmetric stopping
  const staggerOffset = item.id === 1 ? 15 : 
                       item.id === 2 ? -10 :
                       item.id === 3 ? 20 :
                       item.id === 4 ? -5 : 0;
  
  if (direction === 'left') {
    // Left cards: start far left, move RIGHT toward center
    const startX = -400; // Start 400px off to the left
    const endX = 50 + staggerOffset; // End 50px from center (leaves 100px gap total)
    translateX = startX + (easedProgress * (endX - startX));
  } else {
    // Right cards: start far right, move LEFT toward center
    const startX = 400; // Start 400px off to the right
    const endX = -50 + staggerOffset; // End 50px from center (leaves 100px gap total)
    translateX = startX + (easedProgress * (endX - startX));
  }
  
  // NO SCALING - just simple slide-in at 100% opacity and size
  
  return (
    <>
      <div 
        ref={(el) => {
          // Combine both refs
          (ref as any).current = el;
          cardRef.current = el;
        }}
        className="flex flex-col items-start gap-8 relative"
        style={{ 
          transform: `translateX(${translateX}px)`, // Use calculated animation position
          opacity: 1,  // Keep 100% OPACITY
          transition: 'none',  // No CSS transitions - using scroll-linked animation
          willChange: 'transform'  // Only animate transform, NOT opacity
        }}
        data-no-transition="true"
        data-mount-count={mountCountRef.current}
      >
        <Card className={`flex-col ${item.maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
          <CardContent className="p-0 w-full">
            <div>
              {/* Using LazyWebP for optimized loading */}
              {typeof item.image === 'string' && item.image.endsWith('.webp') ? (
                <LazyWebP
                  className={`w-[400px] ${item.imageHeight} relative object-cover`}
                  alt={item.title}
                  src={item.image}
                  width={400}
                  height={400}
                />
              ) : (
                <img
                  className={`w-[400px] ${item.imageHeight} relative object-cover opacity-100`}
                  alt={item.title}
                  src={item.image}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
            <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6">
              <div className="flex items-center gap-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%)' }}
                />
                <h3 className="text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                  {item.title}
                </h3>
              </div>
              <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                {item.description}
              </p>
              <Button
                variant="ghost"
                onClick={() => {
                  console.log('🔴 Demo button clicked!', item.title, item.demoType);
                  setActiveDemo(item.demoType);
                }}
                className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] w-fit"
              >
                Click for Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Demo Modal for this card */}
      <DemoModal 
        isOpen={activeDemo !== null} 
        onClose={() => setActiveDemo(null)} 
        type={activeDemo}
      />
    </>
  );
};

// Header Component with its own scroll animation
const SectionHeader = () => {
  const { ref, progress } = useScrollLinkedAnimation("SectionHeader");
  
  // Apply smooth easing for floating effect
  const smoothEase = (t: number) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  const easedProgress = smoothEase(progress);
  const translateY = easedProgress * -60; // Gentle slide up from below
  
  return (
    <header 
      ref={ref}
      className="flex-col max-w-screen-md items-start gap-8 w-full flex-[0_0_auto] flex relative"
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
            Solutions
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="self-stretch text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
            POWERFUL AI<br />AGENTS FOR EVERY NEED
          </h2>

          <p className="relative max-w-[540px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Discover how Rallo transforms your digital communication strategy.
          </p>
        </div>
      </div>

      <Button
        variant="ghost"
        className="inline-flex items-center gap-2 relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
      >
        <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
          <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
            Learn More
          </span>
          <ChevronRightIcon className="relative w-5 h-5" />
        </div>
      </Button>
    </header>
  );
};

export const ImageGallerySection = (): JSX.Element => {
  const waveApiRef = useRef<{ createRipple: (x: number, y: number) => void } | null>(null);
  const sharedMouseRef = useRef<{ x: number; y: number; lx: number; ly: number; sx: number; sy: number; v: number; vs: number; a: number; set: boolean } | null>({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  });
  
  return (
    <section className="pt-[240px] pb-0 flex flex-col items-center relative w-full overflow-hidden">
      {/* Visible wave background at bottom */}
      <Waves 
        className="absolute inset-0 z-0"
        lineColor="rgba(0, 0, 0, 0.17)"  // Black lines at 17% opacity
        backgroundColor="#FFFFFF"  // White background for the waves
        onRef={(api) => { waveApiRef.current = api }}
        sharedMouseRef={sharedMouseRef}
        isOverlay={false}
      />
      
      {/* Invisible wave overlay - DISABLED to allow button clicks
      <Waves 
        className="absolute inset-0 z-20 pointer-events-none"
        lineColor="transparent"
        backgroundColor="transparent"
        sharedMouseRef={sharedMouseRef}
        isOverlay={true}
      />
      */}
      
      
      {/* Content container with padding - NO BACKGROUND so waves show through */}
      <div className="px-16 w-full relative z-10">
        <div className="flex-col max-w-screen-xl items-start w-full flex relative mx-auto">
        
        {/* Header with individual animation */}
        <SectionHeader />

        {/* Grid with staggered vertical positioning - deliberate offset */}
        <div className="grid grid-cols-2 gap-16 w-full">
          {/* Top Row - right card offset down */}
          <ProductCard item={galleryItems[0]} direction="left" waveApi={waveApiRef} />
          <div className="pt-[200px] pb-0 px-0 flex justify-end">
            <ProductCard item={galleryItems[1]} direction="right" waveApi={waveApiRef} />
          </div>

          {/* Bottom Row - right card offset down */}
          <ProductCard item={galleryItems[2]} direction="left" waveApi={waveApiRef} />
          <div className="pt-[200px] pb-0 px-0 flex justify-end">
            <ProductCard item={galleryItems[3]} direction="right" waveApi={waveApiRef} />
          </div>
        </div>
        
        {/* Extra spacing at bottom */}
        <div className="h-[200px]"></div>
      </div>
      </div>
    </section>
  );
};