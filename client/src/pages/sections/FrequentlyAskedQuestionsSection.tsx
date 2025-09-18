import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

// Individual FAQ item with enhanced animations
const FAQItemComponent: React.FC<FAQItemComponentProps & { index: number }> = ({ item, isOpen, onToggle, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the underline animation based on index
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setShowUnderline(true), 200);
            setTimeout(() => setShowUnderline(false), 1500); // Underline disappears after 1.5s
          }, index * 300); // 300ms delay between each item
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={itemRef} className="border-b border-black last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center group"
      >
        <div className="relative">
          <h3 className="font-['JetBrains_Mono'] font-semibold text-black text-lg tracking-wider leading-relaxed pr-4">
            {item.question}
          </h3>
          {/* Animated underline */}
          <div 
            className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-500 ${
              showUnderline ? 'w-full' : 'w-0'
            }`}
          />
          {/* Hover underline */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300" />
        </div>
        <span className={`text-2xl font-light transition-all duration-300 ${
          isOpen ? 'rotate-45' : 'rotate-0 group-hover:rotate-180'
        }`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="font-['Inter'] font-normal text-black text-base tracking-normal leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  
  const faqData: FAQItem[] = [
    {
      id: 'what-is-rallo',
      question: "What is Rallo?",
      answer:
        "Rallo is an AI agent platform designed to enhance your digital presence. It creates video, chat, and voice agents that work for you 24/7. With Rallo, you can engage your audience effortlessly.",
    },
    {
      id: 'how-does-it-work',
      question: "How does it work?",
      answer:
        "Simply record your content once, and Rallo distributes it across multiple channels. Our AI agents handle interactions in real-time, ensuring you never miss an opportunity. It's designed to streamline your customer engagement.",
    },
    {
      id: 'is-it-customizable',
      question: "Is it customizable?",
      answer:
        "Yes, Rallo offers extensive customization options for your AI agents. You can tailor their responses, appearance, and functionality to align with your brand. This ensures a consistent experience for your customers.",
    },
    {
      id: 'what-industries',
      question: "What industries can use it?",
      answer:
        "Rallo is versatile and can be utilized across various industries. From coaching to retail, our AI agents adapt to meet diverse needs. Any business looking to enhance customer interactions can benefit.",
    },
    {
      id: 'how-do-i-start',
      question: "How do I start?",
      answer:
        "Getting started with Rallo is easy. Sign up for a free trial to explore our features. You can also book a demo to see our AI agents in action.",
    },
    {
      id: 'compare-chatbots',
      question: "How does Rallo compare to traditional chatbots?",
      answer:
        "Traditional chatbots are single-channel, scripted, and break easily. Rallo agents have memory across all channels, learn from interactions, and can handle complex conversations that would stump basic bots. They're closer to digital employees than simple chat scripts.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Split FAQ data into two columns
  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midpoint);
  const rightColumnFAQs = faqData.slice(midpoint);

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <header className="flex flex-col max-w-screen-md items-start gap-3 flex-[0_0_auto] relative w-full">
          <h2 className="self-stretch text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
            FAQs
          </h2>
          <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Find answers to common questions about Rallo and how our AI agents
            can help you.
          </p>
        </header>

        <div className="w-full border border-black rounded-lg overflow-hidden bg-white">
          <div className="flex">
            {/* Left Column */}
            <div className="flex-1 border-r border-black">
              {leftColumnFAQs.map((faq, index) => (
                <FAQItemComponent
                  key={faq.id}
                  item={faq}
                  index={index}
                  isOpen={openItems.has(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
            
            {/* Right Column */}
            <div className="flex-1">
              {rightColumnFAQs.map((faq, index) => (
                <FAQItemComponent
                  key={faq.id}
                  item={faq}
                  index={leftColumnFAQs.length + index} 
                  isOpen={openItems.has(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-col max-w-[560px] items-start gap-8 w-full flex-[0_0_auto] flex relative">
          <div className="flex-col items-start gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
            <h3 className="self-stretch text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
              Still have questions?
            </h3>
            <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              We're here to help you!
            </p>
          </div>

          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <Button
              variant="ghost"
              className="h-auto inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] bg-transparent border border-solid border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};