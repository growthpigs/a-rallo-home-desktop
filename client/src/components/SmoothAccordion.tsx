import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionTab {
  id: number;
  number: string;
  title: string;
  content: string;
  image: string;
}

interface SmoothAccordionProps {
  tabs: AccordionTab[];
  defaultActiveTab?: number;
  height?: string;
}

export const SmoothAccordion: React.FC<SmoothAccordionProps> = ({ 
  tabs, 
  defaultActiveTab = 1,
  height = "720px"
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const springConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8
  };

  const easeConfig = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <div 
      className="flex w-full border border-solid border-black overflow-hidden bg-white"
      style={{ height }}
      data-name="SmoothAccordion"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isHovered = hoveredTab === tab.id;
        
        // Enhanced debug logging
        if (tab.id <= 5) {
          console.log(`Tab ${tab.id}: isActive=${isActive}, activeTab=${activeTab}, flex=${isActive ? 1 : '0 0 120px'}`);
        }
        
        return (
          <motion.div 
            key={`${tab.id}-${activeTab}`}
            className="bg-white flex cursor-pointer border-r border-r-solid border-black last:border-r-0 relative overflow-hidden"
            initial={false}
            animate={{
              flex: isActive ? 1 : '0 0 120px',
              width: isActive ? 'auto' : '120px'
            }}
            transition={springConfig}
            onClick={() => {
              console.log(`Clicking tab ${tab.id}, setting as active`);
              setActiveTab(tab.id);
            }}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            data-testid={`tab-pane-${tab.id}`}
            style={{
              background: isActive 
                ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                : isHovered 
                  ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                  : '#ffffff'
            }}
          >
            {/* Active Indicator */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-[#fd815a]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: 0.3, ease: easeConfig }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Collapsed State */}
            <AnimatePresence mode="wait">
              {!isActive && (
                <motion.div 
                  key={`collapsed-${tab.id}`}
                  className="flex flex-col h-full relative p-6 w-[120px] items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-2xl font-normal font-['JetBrains_Mono',_monospace] text-black"
                    whileHover={{ 
                      scale: 1.1,
                      color: "#fd815a"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tab.number}
                  </motion.div>
                  
                  <div className="absolute bottom-6 left-[58px]">
                    <motion.div 
                      className="-rotate-90 whitespace-nowrap text-[23px] font-light text-black font-['JetBrains_Mono',_monospace] origin-bottom-left"
                      style={{ transform: 'rotate(-90deg)' }}
                      whileHover={{ 
                        scale: 1.05,
                        color: "#fd815a"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tab.title}
                    </motion.div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50 opacity-0 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Expanded State */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div 
                  key={`expanded-${tab.id}`}
                  className="flex flex-col h-full flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    duration: 0.4,
                    ease: easeConfig
                  }}
                >
                  {/* Header section with number */}
                  <motion.div 
                    className="flex items-start p-6 pb-2"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className="text-2xl font-normal font-['JetBrains_Mono',_monospace] text-black mr-4">
                      {tab.number}
                    </div>
                  </motion.div>
                  
                  {/* Content section */}
                  <motion.div 
                    className="flex-1 flex flex-col p-6 pt-2"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="mb-4">
                      <motion.h3 
                        className="text-3xl font-normal font-['JetBrains_Mono',_monospace] text-black mb-4 uppercase"
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        {tab.title}
                      </motion.h3>
                      <motion.p 
                        className="text-base text-black font-['Inter',_sans-serif] leading-relaxed"
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                      >
                        {tab.content}
                      </motion.p>
                    </div>
                    
                    <motion.div 
                      className="mt-auto mb-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                    >
                      <img
                        className="w-[400px] h-[400px] object-cover bg-gray-200"
                        alt={`Illustration for ${tab.title}`}
                        src={tab.image}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle click ripple effect */}
            <motion.div
              className="absolute inset-0 bg-orange-200 rounded-full opacity-0 pointer-events-none"
              animate={{ 
                scale: isActive ? [0, 2] : 0,
                opacity: isActive ? [0.3, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};