import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, slideInLeftVariants, slideInRightVariants } from "@/hooks/useScrollAnimation";

import single_professional_at_clean_desk_with_multiple_translucent_screens_showing_data_flows_overhead_sho_jvba04vzdp9ow2gv89cz_3 from "@assets/single_professional_at_clean_desk_with_multiple_translucent_screens_showing_data_flows_overhead_sho_jvba04vzdp9ow2gv89cz_3.png";

export const CallToActionSection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.3 });
  
  return (
    <section ref={ref} className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-0.5 relative w-full flex-[0_0_auto]">
        <div className="items-center gap-16 flex relative self-stretch w-full flex-[0_0_auto]">
          <motion.div 
            className="flex flex-col items-start gap-8 relative flex-1 grow"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeftVariants}
          >
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="self-stretch  text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                CREATE ONCE.
                <br />
                ENGAGE EVERYWHERE.
              </h2>

              <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-[550px]">
                Start multiplying your digital presence with Rallo&#39;s
                intelligent AI agents.
              </p>
            </div>

            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
              <Button className="inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] bg-black border border-solid h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-gray-800">
                Get Instant Access
              </Button>

              <Button
                variant="ghost"
                className="inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] bg-transparent border border-solid border-black h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-black hover:text-white">
                Book Demo
              </Button>
            </div>
          </motion.div>

          <motion.img
            className="flex-1 grow h-[400px] relative object-cover"
            alt="Placeholder image"
            src={single_professional_at_clean_desk_with_multiple_translucent_screens_showing_data_flows_overhead_sho_jvba04vzdp9ow2gv89cz_3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRightVariants}
            transition={{ delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
};