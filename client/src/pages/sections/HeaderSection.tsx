import React from "react";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <section 
      className="flex flex-col h-screen relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://p129.p0.n0.cdn.zight.com/items/NQuXl2mJ/e8b7ba2f-03c3-4abb-83b5-1a8961737b32.webp?source=client&v=bcb5de4901429c3e82ca5c71698fa6e3')`
      }}
      data-testid="section-hero"
    >
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-8 py-6 relative z-10">
        <div className="flex items-center">
          <img 
            src="https://p129.p0.n0.cdn.zight.com/items/E0uvyDD2/0bd8c304-3c98-4392-9f51-b70b775b9cf6.svg?source=client&v=2ac38ca59d73980b9f612d511347a846" 
            alt="Rallo" 
            className="h-11 brightness-0 invert"
            data-testid="logo"
          />
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-white font-['Inter'] text-sm font-medium tracking-wider hover:opacity-80" data-testid="nav-product">PRODUCT</a>
          <a href="#" className="text-white font-['Inter'] text-sm font-medium tracking-wider hover:opacity-80" data-testid="nav-pricing">PRICING</a>
          <a href="#" className="text-white font-['Inter'] text-sm font-medium tracking-wider hover:opacity-80" data-testid="nav-services">SERVICES</a>
          <a href="#" className="text-white font-['Inter'] text-sm font-medium tracking-wider hover:opacity-80" data-testid="nav-about">ABOUT</a>
          <Button 
            variant="outline" 
            className="border-white text-white bg-transparent hover:bg-white hover:text-black font-['Inter'] text-sm font-medium tracking-wider px-6 py-2"
            data-testid="button-book-demo"
          >
            BOOK DEMO
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-16 relative">
        <div className="flex flex-col items-center max-w-4xl w-full" style={{ transform: 'translateX(-150px)' }}>
          <div className="flex flex-col items-end mb-4">
            <div className="text-right mb-2">
              <span className="text-6xl italic text-white font-['Libre_Baskerville'] leading-tight">You,</span>
            </div>
            <div className="text-white font-['JetBrains_Mono'] text-7xl font-bold tracking-[0.3em] leading-tight">
              MULTIPLIED
            </div>
          </div>
          
          <div className="text-right max-w-xl mt-8">
            <p className="text-white font-['Inter'] text-lg font-normal tracking-[0.05em] leading-relaxed">
              Create AI-powered video, chat, and voice agents that represent you, 24/7. Record once, engage everywhere - while you focus on what matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
