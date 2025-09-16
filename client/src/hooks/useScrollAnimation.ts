import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollAnimationOptions {
  once?: boolean;
  amount?: number;
  margin?: string;
  debugName?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef(null);
  const debugName = options.debugName || "Unknown Section";
  
  const isInView = useInView(ref, {
    once: options.once ?? true,
    amount: options.amount ?? 0.1, // Reduced to 0.1 for much earlier triggering
    margin: options.margin ?? "-100px 0px", // Increased negative margin for earlier trigger
  });

  // Comprehensive logging for scroll detection
  useEffect(() => {
    console.log(`🔍 [${debugName}] Scroll hook initialized`, {
      once: options.once ?? true,
      amount: options.amount ?? 0.1,
      margin: options.margin ?? "-100px 0px",
      refElement: ref.current
    });
  }, []);

  useEffect(() => {
    console.log(`📊 [${debugName}] InView state changed:`, {
      isInView,
      timestamp: new Date().toISOString(),
      element: ref.current,
      elementHeight: ref.current?.offsetHeight,
      elementTop: ref.current?.offsetTop,
      scrollY: window.scrollY,
      viewportHeight: window.innerHeight
    });
    
    // Additional debugging for element positioning
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log(`📐 [${debugName}] Element bounds:`, {
        top: rect.top,
        bottom: rect.bottom,
        height: rect.height,
        inViewport: rect.top < window.innerHeight && rect.bottom > 0,
        visibilityPercentage: Math.max(0, Math.min(100, 
          (Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)) / rect.height * 100
        ))
      });
    }
  }, [isInView, debugName]);

  return { ref, isInView };
};

export const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInLeftVariants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart for smoother animation
    }
  }
};

export const slideInRightVariants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const scaleInVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};