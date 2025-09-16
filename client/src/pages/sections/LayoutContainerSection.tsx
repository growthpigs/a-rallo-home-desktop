import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, scaleInVariants } from "@/hooks/useScrollAnimation";

import abstract_representation_of_data_flowing_through_geometric_channels_translucent_tubes_and_pathways_s_lcz904f18v0j06fnuwh7_0 from "@assets/abstract_representation_of_data_flowing_through_geometric_channels_translucent_tubes_and_pathways_s_lcz904f18v0j06fnuwh7_0.png";

export const LayoutContainerSection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation();
  return (
    <section ref={ref} className="flex flex-col items-center relative w-full bg-white">
      <motion.img
        className="w-full h-[810px] object-cover"
        alt="Placeholder image"
        src={abstract_representation_of_data_flowing_through_geometric_channels_translucent_tubes_and_pathways_s_lcz904f18v0j06fnuwh7_0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={scaleInVariants}
      />
      <div className="flex flex-col items-center gap-20 px-16 py-28 w-full">
        <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
          <motion.div 
            className="flex flex-col max-w-screen-md items-center gap-8 w-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ delay: 0.3 }}
          >
            <motion.img
              className="w-20 h-20"
              alt="Globe icon"
              src="/figmaAssets/agents-globe.svg"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={scaleInVariants}
              transition={{ delay: 0.5 }}
            />

            <div className="flex flex-col items-center gap-4 w-full">
              <div className="inline-flex items-center">
                <h3 className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  OMNICHANNEL REACH
                </h3>
              </div>

              <div className="flex flex-col items-center gap-3 w-full">
                <h1 className="text-[length:var(--heading-h2-font-size)] text-center leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                  YOUR PRESENCE, EVERYWHERE
                </h1>

                <p className="max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">Deploy your AI agents across websites, mobile apps, social media, and voice channels. One platform, infinite touchpoints.
                </p>
              </div>
            </div>

            <motion.div 
              className="inline-flex items-center gap-1"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ delay: 0.7 }}
            >
              <Button
                variant="ghost"
                className="h-auto px-6 py-3 bg-transparent border border-black text-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-black hover:text-white"
              >
                BOOK DEMO
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
