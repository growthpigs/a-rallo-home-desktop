import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, slideInLeftVariants, fadeUpVariants, scaleInVariants } from "@/hooks/useScrollAnimation";
import { FastImage } from "@/components/FastImage";

export const GeneralLayoutSection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.2 });
  
  return (
    <section ref={ref} className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-[#000000] pt-[222px] pb-[222px]">
      <div className="flex flex-col max-w-screen-xl items-start gap-0.5 relative w-full flex-[0_0_auto]">
        <div className="flex items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <motion.div 
            className="flex flex-col w-[438px] items-start self-stretch relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeftVariants}
          >
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  RALLO AI
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-[#ffffff]">
                  NEVER MISS A CUSTOMER. NEVER MISS A SALE.
                </h1>
                <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-[#ffffff]">
                  Rallo Agents transform missed interactions into revenue opportunities. Engage customers instantly, day or night.
                </p>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-6">
                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] bg-transparent border border-solid border-white text-white hover:bg-white hover:text-black"
                >
                  <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                    WATCH DEMO
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="flex items-start gap-2 relative flex-1 grow">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={scaleInVariants}
              transition={{ delay: 0.3 }}
            >
              <FastImage
                className="w-[444px] h-[444px] object-cover"
                alt="AI facial features with geometric mapping interface"
                src="/images/ultra_macro_of_multiple_facial_features_with_geometric_mapping_interface_translucent_grid_overlay_a_0f5lrlnl9rpvw7lkx913_0.png"
                width={444}
                height={444}
                priority={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};