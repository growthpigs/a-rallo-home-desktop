import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from "@/hooks/useScrollAnimation";

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

const FAQItemComponent: React.FC<FAQItemComponentProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-black last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
      >
        <h3 className="font-text-medium-bold font-[number:var(--text-medium-bold-font-weight)] text-black text-[length:var(--text-medium-bold-font-size)] tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] [font-style:var(--text-medium-bold-font-style)] pr-4">
          {item.question}
        </h3>
        <span className={`text-2xl font-light transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
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
              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
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
  const { ref, isInView } = useScrollAnimation({ amount: 0.2 });
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
    <section ref={ref} className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <motion.header 
          className="flex flex-col max-w-screen-md items-start gap-3 flex-[0_0_auto] relative w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <h2 className="self-stretch text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
            FAQs
          </h2>
          <p className="relative max-w-[550px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Find answers to common questions about Rallo and how our AI agents
            can help you.
          </p>
        </motion.header>

        <motion.div 
          className="w-full border border-black rounded-lg overflow-hidden bg-white"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <div className="flex">
            {/* Left Column */}
            <div className="flex-1 border-r border-black">
              {leftColumnFAQs.map((faq) => (
                <FAQItemComponent
                  key={faq.id}
                  item={faq}
                  isOpen={openItems.has(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
            
            {/* Right Column */}
            <div className="flex-1">
              {rightColumnFAQs.map((faq) => (
                <FAQItemComponent
                  key={faq.id}
                  item={faq}
                  isOpen={openItems.has(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-col max-w-[560px] items-start gap-8 w-full flex-[0_0_auto] flex relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ delay: 0.4 }}
        >
          <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
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
        </motion.div>
      </div>
    </section>
  );
};