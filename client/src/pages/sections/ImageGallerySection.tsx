import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PersistentLazyImage } from "@/components/PersistentLazyImage";
import { DemoModal } from "@/components/DemoModal";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    image: extreme_macro_of_lips_with_geometric_sound_wave_visualizations_emanating_from_mouth_translucent_ora_xxtbq6yc36jkg2eo00ck_0,
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 2,
    title: "Rallo Interactive",
    description: "Real-time two-way video conversations powered by AI.",
    icon: "/icons/agents-globe.svg",
    demoType: "video" as const,
    image: finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2,
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

// Custom center-out animation variants
const centerOutVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    x: 0, // Start from center
    y: 0  // Start from center
  },
  visible: (custom: { x: number; y: number; delay: number }) => ({
    opacity: 1, 
    scale: 1,
    x: custom.x, // Move to final position
    y: custom.y, // Move to final position
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: custom.delay
    }
  })
};

// Image slide-in from right animation
const slideInFromRightVariants = {
  hidden: { 
    opacity: 0, 
    x: 50 // Start 50px to the right
  },
  visible: {
    opacity: 1, 
    x: 0, // Move to final position
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Text/icon fade up animation
const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const ImageGallerySection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation({ 
    debugName: "ImageGallerySection (Product Cards)",
    amount: 0.05, // Very aggressive detection
    margin: "-150px 0px" // Early trigger
  });
  const [activeDemo, setActiveDemo] = useState<'video' | 'chat' | 'voice' | null>(null);

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
    console.log(`🎬 [ImageGallerySection] Motion state update:`, {
      isInView,
      timestamp: new Date().toISOString()
    });
    
    if (ref.current) {
      detectCSSConflicts(ref.current, "ImageGallerySection");
    }
  }, [isInView]);

  return (
    <section ref={ref} className="gap-20 px-16 py-28 flex flex-col items-center relative w-full bg-white">
      <div className="flex-col max-w-screen-xl items-start gap-20 w-full flex relative">
        

        <div className="grid grid-cols-2 gap-16 w-full">
          {/* Top Row */}
          <motion.div 
            className="flex flex-col items-start gap-8 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={centerOutVariants}
            custom={{ x: 0, y: 0, delay: 0 }} // Rallo Chat stays in original position
          >
            <Card className={`flex-col ${galleryItems[0].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={slideInFromRightVariants}
                  transition={{ delay: 0.2 }}
                >
                  <PersistentLazyImage
                    className={`w-[400px] ${galleryItems[0].imageHeight} relative object-cover`}
                    alt={galleryItems[0].title}
                    src={galleryItems[0].image}
                    width={400}
                    height={400}
                  />
                </motion.div>
                <motion.div 
                  className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={galleryItems[0].icon}
                      alt={galleryItems[0].title}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%)' }}
                    />
                    <h3 className="text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                      {galleryItems[0].title}
                    </h3>
                  </div>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[0].description}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveDemo(galleryItems[0].demoType)}
                    className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] w-fit"
                  >
                    Click for Demo
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="flex flex-col items-end gap-8 pt-[200px] pb-0 px-0 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={centerOutVariants}
            custom={{ x: -30, y: 0, delay: 0.15 }} // Rallo Interactive - move 30px toward center
          >
            <Card className={`flex-col ${galleryItems[1].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={slideInFromRightVariants}
                  transition={{ delay: 0.35 }}
                >
                  <PersistentLazyImage
                    className={`relative w-full ${galleryItems[1].imageHeight} object-cover`}
                    alt={galleryItems[1].title}
                    src={galleryItems[1].image}
                    width={400}
                    height={400}
                  />
                </motion.div>
                <motion.div 
                  className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  transition={{ delay: 0.55 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={galleryItems[1].icon}
                      alt={galleryItems[1].title}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%)' }}
                    />
                    <h3 className="text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                      {galleryItems[1].title}
                    </h3>
                  </div>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[1].description}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveDemo(galleryItems[1].demoType)}
                    className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] w-fit"
                  >
                    Click for Demo
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom Row */}
          <motion.div 
            className="flex flex-col items-start gap-8 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={centerOutVariants}
            custom={{ x: 35, y: 0, delay: 0.3 }} // Rallo Publisher - move 35px toward center
          >
            <Card className={`flex-col ${galleryItems[2].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={slideInFromRightVariants}
                  transition={{ delay: 0.5 }}
                >
                  <PersistentLazyImage
                    className={`w-[400px] ${galleryItems[2].imageHeight} relative object-cover`}
                    alt={galleryItems[2].title}
                    src={galleryItems[2].image}
                    width={400}
                    height={400}
                  />
                </motion.div>
                <motion.div 
                  className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={galleryItems[2].icon}
                      alt={galleryItems[2].title}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%)' }}
                    />
                    <h3 className="text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                      {galleryItems[2].title}
                    </h3>
                  </div>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[2].description}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveDemo(galleryItems[2].demoType)}
                    className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] w-fit"
                  >
                    Click for Demo
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="flex flex-col items-end gap-8 pt-[200px] pb-0 px-0 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={centerOutVariants}
            custom={{ x: 0, y: 0, delay: 0.45 }} // Rallo Voice - stays in original position
          >
            <Card className={`flex-col ${galleryItems[3].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={slideInFromRightVariants}
                  transition={{ delay: 0.65 }}
                >
                  <PersistentLazyImage
                    className={`relative w-full ${galleryItems[3].imageHeight} object-cover`}
                    alt={galleryItems[3].title}
                    src={galleryItems[3].image}
                    width={400}
                    height={400}
                  />
                </motion.div>
                <motion.div 
                  className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  transition={{ delay: 0.85 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={galleryItems[3].icon}
                      alt={galleryItems[3].title}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%)' }}
                    />
                    <h3 className="text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                      {galleryItems[3].title}
                    </h3>
                  </div>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[3].description}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveDemo(galleryItems[3].demoType)}
                    className="h-auto px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] w-fit"
                  >
                    Click for Demo
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Demo Modal */}
      <DemoModal 
        isOpen={activeDemo !== null} 
        onClose={() => setActiveDemo(null)} 
        type={activeDemo}
      />
    </section>
  );
};
