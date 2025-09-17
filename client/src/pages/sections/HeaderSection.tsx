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
  const [activeDemo, setActiveDemo] = useState<'video' | 'chat' | 'voice' | null>(null);
  
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
      {/* BACKGROUND: Static - no animations */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/NQuXl2mJ/e8b7ba2f-03c3-4abb-83b5-1a8961737b32.webp?source=client&v=bcb5de4901429c3e82ca5c71698fa6e3')`,
          backgroundPosition: '85% center',
          backgroundSize: 'cover'
        }}
      />
      {/* Navigation Header */}
      <motion.nav 
        className={`flex items-center justify-between px-8 py-2 fixed top-0 left-0 right-0 z-50 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/30' 
            : 'bg-transparent'
        }`}
        initial="hidden"
        animate="visible"
        variants={navBarDrop}
      >
        <motion.div 
          className="flex items-center"
          variants={logoDropFromSky}
        >
          <img 
            src="https://p129.p0.n0.cdn.zight.com/items/E0uvyDD2/0bd8c304-3c98-4392-9f51-b70b775b9cf6.svg?source=client&v=2ac38ca59d73980b9f612d511347a846" 
            alt="Rallo" 
            className={`h-20 brightness-0 transition-all duration-300 ${
              isScrolled ? '' : 'invert'
            }`}
            data-testid="logo"
          />
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-6"
          variants={navBarDrop}
        >
          <motion.div variants={dropDownFromAbove}>
            <Link 
              href="/" 
              className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:brightness-75 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`} 
              data-testid="nav-home"
            >
              HOME
            </Link>
          </motion.div>
          <motion.div variants={dropDownFromAbove}>
            <Link 
              href="/product" 
              className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:brightness-75 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`} 
              data-testid="nav-product"
            >
              PRODUCT
            </Link>
          </motion.div>
          <motion.div variants={dropDownFromAbove}>
            <Link 
              href="/pricing" 
              className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:brightness-75 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`} 
              data-testid="nav-pricing"
            >
              PRICING
            </Link>
          </motion.div>
          <motion.div variants={dropDownFromAbove}>
            <Link 
              href="/book-demo" 
              className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:brightness-75 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`} 
              data-testid="nav-book-demo"
            >
              BOOK DEMO
            </Link>
          </motion.div>
        </motion.div>
      </motion.nav>
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
          >
            <motion.div 
              className="flex flex-col items-end mb-4"
              variants={slideInFromLeft}
            >
              <motion.div 
                className="text-right mb-2"
                variants={slideUpFromBelow}
                transition={{ delay: 0.6 }}
                style={{
                  // SCROLL ANIMATION: "You," moves LEFT as you scroll down
                  transform: `translateY(60px) translateX(${youTextTransform}px)`
                }}
              >
                <span className="italic text-black font-['Libre_Baskerville'] lg:text-7xl md:text-6xl">You,</span>
              </motion.div>
              <motion.div 
                className="text-white font-['JetBrains_Mono'] lg:text-6xl md:text-5xl font-light lg:tracking-[0.25em] md:tracking-[0.15em] leading-tight"
                style={{ 
                  // SCROLL ANIMATION: "MULTIPLIED" moves LEFT as you scroll down
                  transform: `translateX(${18 + multipliedTransform}px)`
                }}
                variants={slideUpFromBelow}
                transition={{ delay: 0.8 }}
              >
                MULTIPLIED
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-right max-w-lg mt-4"
              variants={slideUpFromBelow}
              transition={{ delay: 1.0 }}
            >
              <p 
                className="text-white font-['JetBrains_Mono'] lg:text-sm md:text-xs tracking-[0.05em] leading-none font-thin  uppercase" 
                style={{ 
                  // SCROLL ANIMATION: Description moves RIGHT slightly as you scroll down
                  transform: `translateY(-20px) translateX(${descriptionTransform}px)` 
                }}
              >
                Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere - while you focus on what matters most.
              </p>
              <motion.div 
                className="flex justify-end mt-4"
                variants={slideUpFromBelow}
                transition={{ delay: 1.2 }}
                style={{
                  // SCROLL ANIMATION: Icons move LEFT as you scroll down
                  transform: `translateX(${iconsTransform}px)`
                }}
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
          className="md:hidden flex flex-col items-center justify-center h-full px-8 relative bg-cover"
          style={{
            backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/NQuXl2mJ/e8b7ba2f-03c3-4abb-83b5-1a8961737b32.webp?source=client&v=bcb5de4901429c3e82ca5c71698fa6e3')`,
            backgroundPosition: '95% 50%',
            backgroundSize: 'cover'
          }}
          initial="hidden"
          animate="visible"
          variants={navBarDrop}
        >
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
              <span className="italic text-black font-['Libre_Baskerville'] text-7xl">You,</span>
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
              className="text-white font-['JetBrains_Mono'] text-xs font-thin tracking-[0.05em] leading-none uppercase" 
              style={{ 
                fontSize: '11px',
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
                transform: `translateX(${iconsTransform}px)`
              }}
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
