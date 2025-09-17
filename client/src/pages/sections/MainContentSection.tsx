import React from "react";
import { ScrollDrivenAccordion } from "@/components/ScrollDrivenAccordion";
import { useUnifiedScrollAnimation } from "@/hooks/useUnifiedScrollAnimation";

import extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3 from "@assets/extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3.png";

export const MainContentSection = (): JSX.Element => {
  // Use unified scroll animation system (same as video mechanics)
  const { ref: scrollRef, progress } = useUnifiedScrollAnimation({
    animationDistance: 400, // Complete over 400px of scrolling
    startOffset: 150, // Start 150px before element enters viewport
    debugName: "MainContent (Epic Accordion Section)"
  });
  
  // Calculate smooth movements for header elements
  const headerMovement = progress * 80; // Header slides up from below
  const tabData = [
    {
      id: 1,
      number: "01",
      title: "Omnichannel Memory",
      content: "Your AI agents remember every interaction across video, chat, and voice channels. This persistent memory creates seamless conversations that span multiple touchpoints, ensuring customers never have to repeat themselves. True continuity that builds trust and delights customers at every interaction, making your brand feel truly intelligent and attentive.",
      image: extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3
    },
    {
      id: 2,
      number: "02", 
      title: "Visual Workflow Builder",
      content: "Drag and drop modules on a clean, intuitive grid system that eliminates confusion. No more tangled spider webs of arrows and complex flowcharts that nobody understands. Build sophisticated customer service workflows in minutes, not weeks. Your team can visually design, test, and deploy AI automation without technical expertise.",
      image: "/images/ultra_macro_of_nostril_with_geometric_particles_analyzing_breath_composition_translucent_interface__jmgoglja7mo2apr10yub_0.png"
    },
    {
      id: 3,
      number: "03",
      title: "Authentic AI Avatars", 
      content: "RealForm technology creates lifelike digital twins that speak, gesture, and engage naturally with your customers. These aren't robotic chatbots—they're authentic representations that mirror human expressions and body language. Your customers interact with AI that feels genuinely human, building deeper connections and trust with your brand.",
      image: "/images/macro_shot_of_eye_looking_up_at_floating_geometric_interface_elements_tiny_holographic_particles_vi_xpz1vt4h0wncwoga2686_0.png"
    },
    {
      id: 4,
      number: "04",
      title: "Smart Handoff System",
      content: "AI intelligently recognizes when human expertise is needed and escalates seamlessly. No more frustrated customers explaining their issues multiple times. The complete conversation context, customer history, and interaction data transfers instantly to your human agents, ensuring smooth transitions that preserve customer satisfaction and trust.",
      image: "/images/macro_shot_of_eye_looking_up_at_floating_geometric_interface_elements_tiny_holographic_particles_vi_rujr17esa09e69utwxto_1.png"
    },
    {
      id: 5,
      number: "05",
      title: "Enterprise Analytics",
      content: "Comprehensive performance tracking across all AI agents and communication channels with granular insights. Real-time dashboards reveal conversation quality, resolution rates, customer sentiment, and optimization opportunities. Make data-driven decisions to continuously improve every customer interaction and maximize your team's effectiveness.",
      image: "/images/finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_p7avlpzvvtkss00vl66s_0.png"
    }
  ];

  return (
    <section ref={scrollRef} className="flex flex-col items-center gap-20 px-16 pt-[70px] pb-28 relative self-stretch w-full flex-[0_0_auto] bg-[#e6e6e6]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        {/* Header with scroll-driven animation */}
        <div 
          className="flex flex-col max-w-screen-md items-start gap-4 flex-[0_0_auto] relative w-full transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${headerMovement}px)`
          }}
        >
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              PLATFORM FEATURES
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="self-stretch text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
              MAXIMIZE YOUR DIGITAL POTENTIAL
            </h2>
            <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Modular AI components that work together seamlessly. No more tangled workflows - just clean, scalable automation.
            </p>
          </div>
        </div>

        {/* Epic scroll-driven accordion - users scroll through tabs sequentially */}
        <div className="mt-20 pt-20">
          <ScrollDrivenAccordion 
            tabs={tabData} 
            height="720px"
          />
        </div>
      </div>
    </section>
  );
};

// NOTE: This section contains the SmoothAccordion which will be converted
// to the epic scroll-driven accordion system like the video component.
// Users will scroll through tabs sequentially with pauses between each tab.