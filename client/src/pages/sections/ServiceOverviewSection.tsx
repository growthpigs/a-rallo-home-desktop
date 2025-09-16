import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, slideInLeftVariants } from "@/hooks/useScrollAnimation";

// CSS Conflict Detection Helper
const detectCSSConflicts = (element: HTMLElement, debugName: string) => {
  if (!element) return;
  
  const computedStyle = window.getComputedStyle(element);
  const conflicts = [];
  
  // Check for conflicting CSS properties
  if (computedStyle.transform !== 'none' && computedStyle.transform !== 'matrix(1, 0, 0, 1, 0, 0)') {
    conflicts.push(`transform: ${computedStyle.transform}`);
  }
  if (computedStyle.opacity !== '1') {
    conflicts.push(`opacity: ${computedStyle.opacity}`);
  }
  if (computedStyle.overflow === 'hidden') {
    conflicts.push(`overflow: ${computedStyle.overflow}`);
  }
  if (computedStyle.position === 'fixed' || computedStyle.position === 'absolute') {
    conflicts.push(`position: ${computedStyle.position}`);
  }
  
  if (conflicts.length > 0) {
    console.warn(`⚠️ [${debugName}] Potential CSS conflicts detected:`, conflicts);
  } else {
    console.log(`✅ [${debugName}] No obvious CSS conflicts detected`);
  }
};

const serviceItems = [
  {
    number: "01",
    tagline: "Use Cases",
    heading: "Coaches multiplying<br />their audience",
    description:
      "See how different sectors leverage Rallo's powerful AI solutions.",
    primaryButton: "Get Started",
    secondaryButton: "Learn More",
  },
  {
    number: "02",
    tagline: "RETAIL & E-COMMERCE",
    heading: "Businesses capturing<br />every lead",
    description:
      "Handle peak traffic without hiring. Rallo agents manage thousands of simultaneous conversations, qualify leads instantly, and never miss a sales opportunity.",
    primaryButton: "See Demo",
    secondaryButton: "Case Study",
  },
  {
    number: "03",
    tagline: "DIGITAL AGENCIES",
    heading: "Agencies selling high-value<br />branded AI suites",
    description:
      "Package Rallo as your premium AI offering. Custom-branded solutions, monthly recurring revenue, happy clients who stay longer and pay more.",
    primaryButton: "Partner Program",
    secondaryButton: "Success Stories",
  },
];

export const ServiceOverviewSection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation({ 
    debugName: "ServiceOverviewSection (Rallo Products)",
    amount: 0.05, // Extra aggressive for this section
    margin: "-150px 0px" // Even earlier trigger
  });

  // Debug motion component state
  useEffect(() => {
    console.log(`🎬 [ServiceOverviewSection] Motion state update:`, {
      isInView,
      timestamp: new Date().toISOString()
    });
    
    // Check for CSS conflicts
    if (ref.current) {
      detectCSSConflicts(ref.current, "ServiceOverviewSection");
    }
  }, [isInView]);
  
  return (
    <section ref={ref} className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex-col max-w-screen-xl items-start justify-center gap-20 w-full flex-[0_0_auto] flex relative">
        {serviceItems.map((item, index) => (
          <motion.div
            key={index}
            className="items-center justify-center gap-16 self-stretch w-full flex-[0_0_auto] flex relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-fit text-[224px] leading-[268.8px] whitespace-nowrap relative [font-family:'JetBrains_Mono',monospace] font-bold text-black tracking-[0]"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideInLeftVariants}
              transition={{ delay: index * 0.15 + 0.1, duration: 0.8, ease: "easeOut" }}
            >
              {item.number}
            </motion.div>

            <motion.div 
              className="flex-col h-[349px] items-start gap-2 flex-1 grow flex relative"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative self-stretch w-full h-0.5 bg-[#0000001a]">
                <div className="w-8 h-0.5 bg-black" />
              </div>

              <div className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit  font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                      {item.tagline}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <h2 
                      className="self-stretch  text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]"
                      dangerouslySetInnerHTML={{ __html: item.heading }}
                    />

                    <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <Button
                    variant="ghost"
                    className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                  >
                    {item.primaryButton}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
