import React, { useEffect } from "react";
import { SmoothAccordion } from "@/components/SmoothAccordion";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants } from "@/hooks/useScrollAnimation";

import extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3 from "@assets/extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3.png";

export const MainContentSection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation({ 
    debugName: "MainContentSection (Platform Features)",
    amount: 0.05, // Aggressive detection
    margin: "-150px 0px" // Early trigger
  });

  // CSS Conflict Detection Helper
  const detectCSSConflicts = (element: HTMLElement, debugName: string) => {
    if (!element) return;
    
    const computedStyle = window.getComputedStyle(element);
    const conflicts = [];
    
    if (computedStyle.transform !== 'none' && computedStyle.transform !== 'matrix(1, 0, 0, 1, 0, 0)') {
      conflicts.push(`transform: ${computedStyle.transform}`);
    }
    if (computedStyle.opacity !== '1') {
      conflicts.push(`opacity: ${computedStyle.opacity}`);
    }
    if (computedStyle.overflow === 'hidden') {
      conflicts.push(`overflow: ${computedStyle.overflow}`);
    }
    
    if (conflicts.length > 0) {
      console.warn(`⚠️ [${debugName}] CSS conflicts:`, conflicts);
    } else {
      console.log(`✅ [${debugName}] No CSS conflicts`);
    }
  };

  // Debug motion component state
  useEffect(() => {
    console.log(`🎬 [MainContentSection] Motion state update:`, {
      isInView,
      timestamp: new Date().toISOString()
    });
    
    if (ref.current) {
      detectCSSConflicts(ref.current, "MainContentSection");
    }
  }, [isInView]);
  const tabData = [
    {
      id: 1,
      number: "01",
      title: "Omnichannel Memory",
      content: "Your AI agents remember every interaction across video, chat, and voice. True continuity that delights customers.",
      image: extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__m6ipw32q4rk22i39nvv4_3
    },
    {
      id: 2,
      number: "02", 
      title: "Visual Workflow Builder",
      content: "Drag and drop modules on a clean grid. No more spider webs of arrows and confusion. Build complex flows in minutes.",
      image: "/images/ultra_macro_of_nostril_with_geometric_particles_analyzing_breath_composition_translucent_interface__jmgoglja7mo2apr10yub_0.png"
    },
    {
      id: 3,
      number: "03",
      title: "Authentic AI Avatars", 
      content: "RealForm technology creates lifelike digital twins that speak, gesture, and engage naturally with your customers.",
      image: "/images/macro_shot_of_eye_looking_up_at_floating_geometric_interface_elements_tiny_holographic_particles_vi_xpz1vt4h0wncwoga2686_0.png"
    },
    {
      id: 4,
      number: "04",
      title: "Smart Handoff System",
      content: "AI knows when to escalate to humans. Seamless transitions preserve context and customer satisfaction.",
      image: "/images/macro_shot_of_eye_looking_up_at_floating_geometric_interface_elements_tiny_holographic_particles_vi_rujr17esa09e69utwxto_1.png"
    },
    {
      id: 5,
      number: "05",
      title: "Enterprise Analytics",
      content: "Track performance across all agents and channels. Real-time insights to optimize every customer interaction.",
      image: "/images/finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_p7avlpzvvtkss00vl66s_0.png"
    }
  ];

  return (
    <section ref={ref} className="flex flex-col items-center gap-20 px-16 pt-[70px] pb-28 relative self-stretch w-full flex-[0_0_auto] bg-[#e6e6e6]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <motion.div 
          className="flex flex-col max-w-screen-md items-start gap-4 flex-[0_0_auto] relative w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <motion.div 
            className="inline-flex items-center relative flex-[0_0_auto]"
            variants={fadeUpVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              PLATFORM FEATURES
            </div>
          </motion.div>
          <motion.div 
            className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="self-stretch text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
              MAXIMIZE YOUR DIGITAL POTENTIAL
            </h2>
            <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Modular AI components that work together seamlessly. No more tangled workflows - just clean, scalable automation.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ delay: 0.4 }}
        >
          <SmoothAccordion 
            tabs={tabData} 
            defaultActiveTab={1}
            height="720px"
          />
        </motion.div>
      </div>
    </section>
  );
};