import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

interface NavigationHeaderProps {
  isDark?: boolean;
}

export const NavigationHeader = ({ isDark = false }: NavigationHeaderProps = {}): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHomepage = location === "/";
  const isPricingPage = location === "/pricing";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`flex items-center justify-between px-6 py-0.5 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isPricingPage && !isScrolled
          ? 'bg-transparent'
          : isHomepage 
            ? isScrolled 
              ? 'backdrop-blur-xl bg-white/40' 
              : 'bg-transparent'
            : 'backdrop-blur-xl bg-white/80'
      }`}
    >
      <div 
        className="flex items-center ml-1"
      >
        <Link href="/">
          <img 
            src="https://p129.p0.n0.cdn.zight.com/items/E0uvyDD2/0bd8c304-3c98-4392-9f51-b70b775b9cf6.svg?source=client&v=2ac38ca59d73980b9f612d511347a846" 
            alt="Rallo" 
            className={`h-14 lg:h-16 transition-all duration-500 ease-out ${
              (isHomepage && !isScrolled) || (isPricingPage && !isScrolled) ? 'brightness-0 invert' : 'brightness-0'
            }`}
            data-testid="logo"
          />
        </Link>
      </div>
      
      <div 
        className="flex items-center gap-2 mr-14 lg:mr-18"
      >
        <Link 
          href="/" 
          className={`font-['JetBrains_Mono'] text-[15px] tracking-[0.2em] transition-all duration-200 ease-out uppercase px-8 py-4 rounded-sm inline-block ${
            location === "/" 
              ? 'text-orange-500 font-bold'
              : (isHomepage && !isScrolled) || (isPricingPage && !isScrolled)
                ? 'text-white font-light hover:text-orange-400' 
                : 'text-black font-light hover:text-orange-500'
          }`} 
          data-testid="nav-home"
        >
          HOME
        </Link>
        
        <Link 
          href="/product" 
          className={`font-['JetBrains_Mono'] text-[15px] tracking-[0.2em] transition-all duration-200 ease-out uppercase px-8 py-4 rounded-sm inline-block ${
            location === "/product" 
              ? 'text-orange-500 font-bold'
              : (isHomepage && !isScrolled) || (isPricingPage && !isScrolled)
                ? 'text-white font-light hover:text-orange-400' 
                : 'text-black font-light hover:text-orange-500'
          }`} 
          data-testid="nav-product"
        >
          PRODUCT
        </Link>
        
        <Link 
          href="/pricing" 
          className={`font-['JetBrains_Mono'] text-[15px] tracking-[0.2em] transition-all duration-200 ease-out uppercase px-8 py-4 rounded-sm inline-block ${
            location === "/pricing" 
              ? isPricingPage && !isScrolled
                ? 'text-orange-500 font-bold'
                : 'text-orange-500 font-bold'
              : (isHomepage && !isScrolled) || (isPricingPage && !isScrolled)
                ? 'text-white font-light hover:text-orange-400' 
                : 'text-black font-light hover:text-orange-500'
          }`} 
          data-testid="nav-pricing"
        >
          PRICING
        </Link>
        
        <Link 
          href="/book-demo" 
          className={`font-['JetBrains_Mono'] text-[15px] tracking-[0.2em] transition-all duration-200 ease-out uppercase border px-8 py-3 rounded-sm inline-block ${
            location === "/book-demo"
              ? 'text-orange-500 font-bold border-orange-500'
              : (isHomepage && !isScrolled) || (isPricingPage && !isScrolled)
                ? 'text-white font-light border-white hover:text-orange-400 hover:border-orange-400' 
                : 'text-black font-light border-black hover:text-orange-500 hover:border-orange-500'
          }`} 
          data-testid="nav-book-demo"
        >
          BOOK DEMO
        </Link>
      </div>
    </nav>
  );
};