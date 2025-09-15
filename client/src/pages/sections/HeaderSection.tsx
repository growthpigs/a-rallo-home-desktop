import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
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
    <section 
      className="flex flex-col h-screen relative w-full bg-no-repeat"
      style={{
        backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/NQuXl2mJ/e8b7ba2f-03c3-4abb-83b5-1a8961737b32.webp?source=client&v=bcb5de4901429c3e82ca5c71698fa6e3')`,
        backgroundPosition: 'right center',
        backgroundSize: 'cover'
      }}
      data-testid="section-hero"
    >
      {/* Navigation Header */}
      <nav className={`flex items-center justify-between px-8 py-2 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/80' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center">
          <img 
            src="https://p129.p0.n0.cdn.zight.com/items/E0uvyDD2/0bd8c304-3c98-4392-9f51-b70b775b9cf6.svg?source=client&v=2ac38ca59d73980b9f612d511347a846" 
            alt="Rallo" 
            className={`h-20 brightness-0 transition-all duration-300 ${
              isScrolled ? '' : 'invert'
            }`}
            data-testid="logo"
          />
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className={`font-['JetBrains_Mono'] text-sm font-medium tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`} data-testid="nav-product">PRODUCT</a>
          <a href="#" className={`font-['JetBrains_Mono'] text-sm font-medium tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`} data-testid="nav-pricing">PRICING</a>
          <a href="#" className={`font-['JetBrains_Mono'] text-sm font-medium tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`} data-testid="nav-services">SERVICES</a>
          <a href="#" className={`font-['JetBrains_Mono'] text-sm font-medium tracking-[0.2em] hover:opacity-80 transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`} data-testid="nav-about">ABOUT</a>
          <Button 
            variant="outline" 
            className={`bg-transparent font-['JetBrains_Mono'] text-sm font-medium tracking-[0.2em] px-6 py-2 transition-colors duration-300 ${
              isScrolled 
                ? 'border-black text-black hover:bg-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            data-testid="button-book-demo"
          >
            BOOK DEMO
          </Button>
        </div>
      </nav>
      {/* Hero Content */}
      <div className="flex-1 relative">
        {/* Desktop: 3/7 - 1/7 - 3/7 proportions with original background */}
        <div className="hidden lg:grid grid-cols-7 h-full">
          {/* Left 3/7: Text Content */}
          <div className="col-span-3 flex flex-col items-end justify-center px-8">
            <div className="flex flex-col items-end mb-4">
              <div className="text-right mb-2">
                <span className="italic text-white font-['Libre_Baskerville'] text-6xl" style={{ transform: 'translateY(60px)' }}>You,</span>
              </div>
              <div className="text-white font-['JetBrains_Mono'] text-6xl font-light tracking-[0.25em] leading-tight">
                MULTIPLIED
              </div>
            </div>
            
            <div className="text-right max-w-xl mt-8">
              <p className="text-white font-['Inter'] text-lg font-normal tracking-[0.05em] leading-relaxed ml-[9px] mr-[9px]" style={{ transform: 'translateY(-50px) translateX(10px)' }}>
                Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere - while you focus on what matters most.
              </p>
            </div>
          </div>
          
          {/* Middle 1/7: Gap (background shows through) */}
          <div className="col-span-1"></div>
          
          {/* Right 3/7: Eye shows through background */}
          <div className="col-span-3"></div>
        </div>

        {/* Tablet & Mobile: Centered with dark overlay and full eye background */}
        <div 
          className="lg:hidden flex flex-col items-center justify-center h-full px-8 relative bg-cover bg-center"
          style={{
            backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/NQuXl2mJ/e8b7ba2f-03c3-4abb-83b5-1a8961737b32.webp?source=client&v=bcb5de4901429c3e82ca5c71698fa6e3')`,
            backgroundPosition: 'center center'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="flex flex-col items-center mb-4 relative z-10">
            <div className="text-center mb-2">
              <span className="italic text-white font-['Libre_Baskerville'] md:text-6xl text-5xl">You,</span>
            </div>
            <div className="text-white font-['JetBrains_Mono'] md:text-5xl text-4xl font-light md:tracking-[0.2em] tracking-[0.1em] leading-tight">
              MULTIPLIED
            </div>
          </div>
          
          <div className="text-center max-w-md mt-8 relative z-10">
            <p className="text-white font-['Inter'] md:text-lg text-base font-normal tracking-[0.05em] leading-relaxed">
              Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere - while you focus on what matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
