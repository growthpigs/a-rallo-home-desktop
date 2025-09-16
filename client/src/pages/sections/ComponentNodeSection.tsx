import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, slideInLeftVariants, slideInRightVariants, fadeUpVariants } from "@/hooks/useScrollAnimation";

import clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3 from "@assets/clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3.png";

import extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0 from "@assets/extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0.png";

export const ComponentNodeSection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation();
  return (
    <section ref={ref} className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="items-start gap-16 flex relative self-stretch w-full flex-[0_0_auto]">
          <motion.div 
            className="flex flex-col items-start gap-8 relative flex-1 grow"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeftVariants}
          >
            <header className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit  font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  AGENCY SOLUTION
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  BUILD YOUR OWN<br />AI SAAS BUSINESS
                </h2>
                <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  White-label Rallo for your clients. Create custom AI agent suites that generate recurring revenue streams.
                </p>
              </div>
            </header>

            <motion.img
              className="w-[400px] h-[400px] relative object-cover"
              alt="Placeholder image"
              src={clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ delay: 0.3 }}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col items-start gap-8 relative flex-1 grow"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRightVariants}
          >
            <div className="items-start justify-end gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="justify-end gap-0.5 pt-[148px] pb-0 px-0 flex-1 grow flex items-start relative">
                <motion.img
                  className="w-[296px] h-[296px] relative object-cover"
                  alt="Placeholder image"
                  src={extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  transition={{ delay: 0.4 }}
                />
              </div>
            </div>

            <motion.div 
              className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ delay: 0.2 }}
            >
              <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Deploy branded AI solutions in days, not months. Full customization, your branding, premium pricing. Agencies using Rallo report 3x revenue growth within 6 months.
              </p>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-6">
                <Button
                  variant="ghost"
                  className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Start Building
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
