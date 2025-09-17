import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// LOAD ANIMATION VARIANTS
const dropDownFromAbove = {
  hidden: { y: -30 },
  visible: { 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const logoDropFromSky = {
  hidden: { y: -150 },
  visible: { 
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 }
  }
};

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

export const NavigationHeader = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`flex items-center justify-between px-8 py-2 fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/30' 
          : 'bg-white/90 backdrop-blur-md' // Always show background on non-hero pages
      }`}
      initial="hidden"
      animate="visible"
      variants={navBarDrop}
    >
      <motion.div 
        className="flex items-center"
        variants={logoDropFromSky}
      >
        <Link href="/">
          <img 
            src="https://p129.p0.n0.cdn.zight.com/items/E0uvyDD2/0bd8c304-3c98-4392-9f51-b70b775b9cf6.svg?source=client&v=2ac38ca59d73980b9f612d511347a846" 
            alt="Rallo" 
            className="h-20 brightness-0 transition-all duration-300"
            data-testid="logo"
          />
        </Link>
      </motion.div>
      
      <motion.div 
        className="flex items-center gap-6"
        variants={navBarDrop}
      >
        <motion.div variants={dropDownFromAbove}>
          <Link 
            href="/product" 
            className="font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:brightness-75 transition-colors duration-300 text-black" 
            data-testid="nav-product"
          >
            PRODUCT
          </Link>
        </motion.div>
        <motion.div variants={dropDownFromAbove}>
          <Link 
            href="/pricing" 
            className="font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:brightness-75 transition-colors duration-300 text-black" 
            data-testid="nav-pricing"
          >
            PRICING
          </Link>
        </motion.div>
        <motion.div variants={dropDownFromAbove}>
          <Link 
            href="/book-demo" 
            className="font-['JetBrains_Mono'] text-sm font-thin tracking-[0.2em] hover:brightness-75 transition-colors duration-300 text-black" 
            data-testid="nav-book-demo"
          >
            BOOK DEMO
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};