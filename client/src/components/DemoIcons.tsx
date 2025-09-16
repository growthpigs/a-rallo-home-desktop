import React, { useState } from "react";
import { motion } from "framer-motion";

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
      hoverText: 'Click for Demo'
    },
    { 
      type: 'chat' as const, 
      path: '/icons/Chat-cube.svg', 
      label: 'Chat',
      hoverText: 'Click for Demo'
    },
    { 
      type: 'voice' as const, 
      path: '/icons/Voice-hexagon.svg', 
      label: 'Voice',
      hoverText: 'Click for Demo'
    }
  ];

  return (
    <div className="inline-flex items-center gap-6 -mt-5">
      {icons.map((icon) => (
        <motion.div
          key={icon.type}
          className="relative group cursor-pointer"
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
                ? 'brightness(0) saturate(100%) invert(100%)' 
                : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={icon.path}
              alt={icon.label}
              className="object-contain"
              style={{
                filter: 'brightness(0) saturate(100%)',
                width: icon.type === 'video' ? '55px' : icon.type === 'voice' ? '46.5px' : '50px',
                height: icon.type === 'video' ? '55px' : icon.type === 'voice' ? '46.5px' : '50px'
              }}
            />
            {/* Hover tooltip - now inside icon container for proper centering */}
            <motion.div
              className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-xs font-['JetBrains_Mono'] uppercase tracking-wider whitespace-nowrap pointer-events-none z-50"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                color: 'white'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: hoveredIcon === icon.type ? 1 : 0,
                y: hoveredIcon === icon.type ? 0 : 10
              }}
              transition={{ duration: 0.2 }}
            >
              {icon.hoverText}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} />
            </motion.div>
          </motion.div>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full"
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
      ))}
    </div>
  );
};