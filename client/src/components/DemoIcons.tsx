import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoIconsProps {
  onIconClick: (iconType: 'video' | 'chat' | 'voice') => void;
}

export const DemoIcons: React.FC<DemoIconsProps> = ({ onIconClick }) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const icons = [
    { 
      type: 'video' as const, 
      path: '/icons/Video-pyramid.svg', 
      label: 'Video',
      hoverText: 'Click for Demo',
      width: 63.25,
      height: 63.25
    },
    { 
      type: 'chat' as const, 
      path: '/icons/Chat-cube.svg', 
      label: 'Chat',
      hoverText: 'Click for Demo',
      width: 57.5,
      height: 57.5
    },
    { 
      type: 'voice' as const, 
      path: '/icons/Voice-hexagon.svg', 
      label: 'Voice',
      hoverText: 'Click for Demo',
      width: 53.48,
      height: 53.48
    }
  ];

  return (
    <div className="inline-flex items-center gap-6 -mt-5">
      {icons.map((icon) => (
        <div key={icon.type} className="relative">
          {/* Tooltip - rendered first so it's behind the icon but above everything else */}
          <AnimatePresence>
            {hoveredIcon === icon.type && (
              <motion.div
                className="absolute z-50 px-3 py-1 rounded-md text-xs font-['JetBrains_Mono'] font-light uppercase tracking-wider whitespace-nowrap pointer-events-none"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: 'black',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  left: 'calc(50% - 65px)',
                  bottom: `${icon.height + 15}px`,
                  transform: 'translateX(-50%)'
                }}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                Click for Demo
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45" 
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    borderRight: '1px solid rgba(0, 0, 0, 0.1)', 
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    bottom: '-4px'
                  }} 
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Icon container */}
          <motion.div
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredIcon(icon.type)}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => onIconClick(icon.type)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          >
          
            {/* Icon with hover effect */}
            <motion.div
              className="relative"
              animate={{
                filter: hoveredIcon === icon.type 
                  ? 'brightness(0) saturate(100%)' 
                  : 'brightness(0) saturate(100%) invert(100%)'
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={icon.path}
                alt={icon.label}
                className="object-contain"
                style={{
                  width: `${icon.width}px`,
                  height: `${icon.height}px`
                }}
              />
            </motion.div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                filter: 'blur(20px)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: hoveredIcon === icon.type ? 1 : 0,
                scale: hoveredIcon === icon.type ? 1.5 : 0.8
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};