import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DemoIcons } from "@/components/DemoIcons";
import { DemoModal } from "@/components/DemoModal";
import { motion } from "framer-motion";

// Animation variants for hero elements
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInFromTop = {
  hidden: { opacity: 0, y: -100 }, // Start 100px above the viewport
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const HeaderSection = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'video' | 'chat' | 'voice' | null>(null);

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
      className="flex flex-col h-screen relative w-full bg-no-repeat"
      style={{
        backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/NQuXl2mJ/e8b7ba2f-03c3-4abb-83b5-1a8961737b32.webp?source=client&v=bcb5de4901429c3e82ca5c71698fa6e3')`,
        backgroundPosition: '85% center',
        backgroundSize: 'cover'
      }}
      data-testid="section-hero"
    >
      {/* Navigation Header */}
      <motion.nav 
        className={`flex items-center justify-between px-8 py-2 fixed top-0 left-0 right-0 z-50 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/30' 
            : 'bg-transparent'
        }`}
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
      >
        <motion.div 
          className="flex items-center"
          variants={slideInFromTop}
          transition={{ delay: 0.2 }}
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
          variants={stagger}
        >
          <motion.a 
            href="#" 
            className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`} 
            data-testid="nav-product"
            variants={fadeInUp}
          >
            PRODUCT
          </motion.a>
          <motion.a 
            href="#" 
            className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`} 
            data-testid="nav-pricing"
            variants={fadeInUp}
          >
            PRICING
          </motion.a>
          <motion.a 
            href="#" 
            className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`} 
            data-testid="nav-services"
            variants={fadeInUp}
          >
            SERVICES
          </motion.a>
          <motion.a 
            href="#" 
            className={`font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`} 
            data-testid="nav-about"
            variants={fadeInUp}
          >
            ABOUT
          </motion.a>
          <motion.div variants={fadeInUp}>
            <Button 
              variant="outline" 
              className={`bg-transparent font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] px-6 py-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
              data-testid="button-book-demo"
            >
              BOOK DEMO
            </Button>
          </motion.div>
        </motion.div>
      </motion.nav>
      {/* Hero Content */}
      <div className="flex-1 relative">
        {/* Desktop & Tablet: Custom proportions with smaller center gap */}
        <div className="hidden md:grid h-full md:grid-cols-[3fr_0.4fr_3fr] lg:grid-cols-[3fr_0.35fr_3fr] xl:grid-cols-[3fr_0.3fr_3fr]">
          {/* Left 3/7: Text Content */}
          <motion.div 
            className="col-span-1 flex flex-col items-end justify-center px-8 lg:px-12"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div 
              className="flex flex-col items-end mb-4"
              variants={fadeInRight}
            >
              <motion.div 
                className="text-right mb-2"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <span className="italic text-black font-['Libre_Baskerville'] lg:text-7xl md:text-6xl" style={{ transform: 'translateY(60px)' }}>You,</span>
              </motion.div>
              <motion.div 
                className="text-white font-['JetBrains_Mono'] lg:text-6xl md:text-5xl font-light lg:tracking-[0.25em] md:tracking-[0.15em] leading-tight"
                style={{ transform: 'translateX(18px)' }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                MULTIPLIED
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-right max-w-lg mt-4"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <p className="text-white font-['JetBrains_Mono'] lg:text-sm md:text-xs tracking-[0.05em] leading-none font-thin  uppercase" style={{ transform: 'translateY(-20px)' }}>
                Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere - while you focus on what matters most.
              </p>
              <motion.div 
                className="flex justify-end mt-4"
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
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
          variants={stagger}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <motion.div 
            className="flex flex-col items-center mb-2 relative z-10"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="text-center mb-2"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <span className="italic text-black font-['Libre_Baskerville'] text-7xl">You,</span>
            </motion.div>
            <motion.div 
              className="text-white font-['JetBrains_Mono'] text-5xl font-light tracking-[0.1em] leading-tight" 
              style={{ transform: 'translateX(18px)' }}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              MULTIPLIED
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center max-w-sm mt-4 relative z-10"
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <p className="text-white font-['JetBrains_Mono'] text-xs font-thin tracking-[0.05em] leading-none uppercase" style={{ fontSize: '11px' }}>
              Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere - while you focus on what matters most.
            </p>
            <motion.div 
              className="flex justify-center mt-4"
              variants={fadeInUp}
              transition={{ delay: 1.0 }}
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
