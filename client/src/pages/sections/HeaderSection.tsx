import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { DemoIcons } from "@/components/DemoIcons";
import { DemoModal } from "@/components/DemoModal";
import { motion } from "framer-motion";
import { useUnifiedScrollAnimation } from "@/hooks/useUnifiedScrollAnimation";

// LOAD ANIMATION VARIANTS (NO OPACITY CHANGES)
const slideUpFromBelow = {
  hidden: { y: 30 },
  visible: { 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const dropDownFromAbove = {
  hidden: { y: -30 },
  visible: { 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInFromLeft = {
  hidden: { x: -40 },
  visible: { 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// LOGO: Drops from OUTSIDE browser viewport
const logoDropFromSky = {
  hidden: { y: -150 }, // Start well outside viewport
  visible: { 
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 }
  }
};

const slideInFromRight = {
  hidden: { x: 40 },
  visible: { 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// NAV BAR: Drops down without background initially
const navBarDrop = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: 1.0,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.4
    }
  }
};

// BACKGROUND: Slides in from right
const backgroundSlideIn = {
  hidden: { x: 50 },
  visible: {
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

export const HeaderSection = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'video' | 'chat' | 'voice' | 'interactive' | null>(null);
  
  // SCROLL ANIMATION SYSTEM: Only specific text elements animate
  const { ref: heroRef, progress } = useUnifiedScrollAnimation({
    animationDistance: 500,
    startOffset: 0,
    debugName: "HeroSection"
  });
  
  // Calculate scroll-driven transforms - elements move AWAY as you scroll down
  const youTextTransform = progress * -30;        // "You," moves LEFT
  const multipliedTransform = progress * -40;     // "MULTIPLIED" moves LEFT
  const descriptionTransform = progress * 20;     // Description text moves RIGHT slightly
  const iconsTransform = progress * -25;          // Icons move LEFT
  
  // DEBUG: Log values to console
  console.log('🚀 HeaderSection Debug:', { progress, iconsTransform, youTextTransform });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="flex flex-col h-screen relative w-full bg-no-repeat overflow-hidden"
      data-testid="section-hero"
    >
      {/* BACKGROUND: Blue-transformed with disco lighting effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image with blue color transformation */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat"
          style={{
            backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/12u8QAvJ/19cc8397-6452-4092-987a-0885dc4b5d17.webp?v=3de6d34959e06ce2c0fcb25fb0bf11a6')`,
            backgroundPosition: '85% center',
            backgroundSize: 'cover',
            // filter removed - using original colors
          }}
        />
        {/* Overlay removed - no disco effect */}
      </div>
      {/* Hero Content */}
      <div className="flex-1 relative">
        {/* Desktop & Tablet: Custom proportions with smaller center gap */}
        <div className="hidden md:grid h-full md:grid-cols-[3fr_0.4fr_3fr] lg:grid-cols-[3fr_0.35fr_3fr] xl:grid-cols-[3fr_0.3fr_3fr]">
          {/* Left 3/7: Text Content */}
          <motion.div 
            className="col-span-1 flex flex-col items-end justify-center px-8 lg:px-12 relative z-10"
            initial="hidden"
            animate="visible"
            variants={navBarDrop}
            style={{
              position: 'relative',
              right: '-70px' // Move entire unit 70px to the right
            }}
          >
            <motion.div 
              className="flex flex-col items-end mb-4"
              variants={slideInFromLeft}
            >
              <motion.div 
                className="text-right"
                variants={slideUpFromBelow}
                transition={{ delay: 0.6 }}
                style={{
                  // SCROLL ANIMATION: "You," moves LEFT as you scroll down
                  transform: `translateX(${youTextTransform}px)`
                }}
              >
                <span 
                  className="italic text-black font-['Libre_Baskerville']" 
                  style={{
                    fontSize: 'calc(6rem * 0.5 * 1.2)', // 50% of original, then increase by 20%
                    position: 'relative',
                    top: '7px' // Move down 5px from current position (2px + 5px = 7px)
                  }}
                >
                  You,
                </span>
              </motion.div>
              <motion.div 
                className="text-white font-['JetBrains_Mono'] lg:text-5xl md:text-5xl font-light lg:tracking-[0.25em] md:tracking-[0.15em] leading-tight text-right"
                variants={slideUpFromBelow}
                transition={{ delay: 0.8 }}
                style={{
                  position: 'relative',
                  left: '5px' // Direct CSS positioning to move 5px to the right
                }}
              >
                MULTIPLIED
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-right max-w-sm mt-4"
              style={{
                marginTop: '-10px',
                marginRight: '32px'
              }}
              variants={slideUpFromBelow}
              transition={{ delay: 1.0 }}
            >
              <p 
                className="text-white font-['JetBrains_Mono'] lg:text-[13px] md:text-[11px] tracking-[0.05em] leading-relaxed font-thin uppercase" 
                style={{ 
                  // SCROLL ANIMATION: Description moves RIGHT slightly as you scroll down
                  transform: `translateX(${descriptionTransform}px)` 
                }}
              >
                Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere while you focus on what matters most.
              </p>
              <motion.div 
                className="flex justify-end mt-8"
                // REMOVED variants={slideUpFromBelow} to test if it was overriding animate
                transition={{ delay: 1.2 }}
                animate={{
                  // MOVE RIGHT (positive X) and UP (negative Y) from your perspective
                  x: 55, // Move 55px to the right
                  y: -20, // Move 20px up 
                  scale: 0.7
                }}
                style={{
                  border: '2px solid red' // DEBUG: Visual indicator
                }}
                onMouseEnter={() => console.log('DESKTOP ICONS - Transform:', `translateX(${iconsTransform - 30}px) scale(0.7)`, 'iconsTransform:', iconsTransform)}
              >
                <DemoIcons onIconClick={setActiveDemo} />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Middle: Small gap (background shows through) */}
          <div className="col-span-1"></div>
          
          {/* Right: Eye shows through background */}
          <div className="col-span-1"></div>
        </div>

        {/* Mobile & Tablet: Focus on right side where eye is */}
        <motion.div 
          className="md:hidden flex flex-col items-center justify-center h-full px-8 relative"
          initial="hidden"
          animate="visible"
          variants={navBarDrop}
        >
          {/* Mobile background with blue transformation */}
          <div 
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/12u8QAvJ/19cc8397-6452-4092-987a-0885dc4b5d17.webp?v=3de6d34959e06ce2c0fcb25fb0bf11a6')`,
              backgroundPosition: '95% 50%',
              backgroundSize: 'cover',
              // filter removed - using original colors
            }}
          />
          {/* Blue overlay for mobile disco lighting effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.7) 0%, rgba(59, 130, 246, 0.5) 50%, rgba(147, 197, 253, 0.4) 100%)',
              mixBlendMode: 'multiply',
              pointerEvents: 'none'
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <motion.div 
            className="flex flex-col items-center mb-2 relative z-10"
            variants={slideUpFromBelow}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="text-center mb-2"
              variants={slideUpFromBelow}
              transition={{ delay: 0.8 }}
              style={{
                // SCROLL ANIMATION: "You," moves LEFT on mobile too
                transform: `translateX(${youTextTransform}px)`
              }}
            >
              <span className="italic text-black font-['Libre_Baskerville'] text-6xl">You,</span>
            </motion.div>
            <motion.div 
              className="text-white font-['JetBrains_Mono'] text-5xl font-light tracking-[0.1em] leading-tight" 
              style={{ 
                // SCROLL ANIMATION: "MULTIPLIED" moves LEFT on mobile
                transform: `translateX(${18 + multipliedTransform}px)` 
              }}
              variants={slideUpFromBelow}
              transition={{ delay: 1.0 }}
            >
              MULTIPLIED
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center max-w-sm mt-4 relative z-10"
            variants={slideUpFromBelow}
            transition={{ delay: 1.2 }}
          >
            <p 
              className="text-white font-['JetBrains_Mono'] font-thin tracking-[0.05em] leading-none uppercase" 
              style={{ 
                fontSize: '10px',
                // SCROLL ANIMATION: Description moves RIGHT slightly on mobile
                transform: `translateX(${descriptionTransform}px)`
              }}
            >
              Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere - while you focus on what matters most.
            </p>
            <motion.div 
              className="flex justify-center mt-4"
              variants={slideUpFromBelow}
              transition={{ delay: 1.4 }}
              style={{
                // SCROLL ANIMATION: Icons move LEFT on mobile
                transform: `translateX(${iconsTransform + 15}px)`,
                border: '2px solid blue' // DEBUG: Visual indicator for mobile
              }}
              onMouseEnter={() => console.log('MOBILE ICONS - Transform:', `translateX(${iconsTransform + 15}px)`, 'iconsTransform:', iconsTransform)}
            >
              <DemoIcons onIconClick={setActiveDemo} />
            </motion.div>
          </motion.div>
        </motion.div>
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
