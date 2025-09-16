import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from "@/hooks/useScrollAnimation";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.2 });
  
  const faqData = [
    {
      question: "What is Rallo?",
      answer:
        "Rallo is an AI agent platform designed to enhance your digital presence. It creates video, chat, and voice agents that work for you 24/7. With Rallo, you can engage your audience effortlessly.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply record your content once, and Rallo distributes it across multiple channels. Our AI agents handle interactions in real-time, ensuring you never miss an opportunity. It's designed to streamline your customer engagement.",
    },
    {
      question: "Is it customizable?",
      answer:
        "Yes, Rallo offers extensive customization options for your AI agents. You can tailor their responses, appearance, and functionality to align with your brand. This ensures a consistent experience for your customers.",
    },
    {
      question: "What industries can use it?",
      answer:
        "Rallo is versatile and can be utilized across various industries. From coaching to retail, our AI agents adapt to meet diverse needs. Any business looking to enhance customer interactions can benefit.",
    },
    {
      question: "How do I start?",
      answer:
        "Getting started with Rallo is easy. Sign up for a free trial to explore our features. You can also book a demo to see our AI agents in action.",
    },
    {
      question: "How does Rallo compare to traditional chatbots?",
      answer:
        "Traditional chatbots are single-channel, scripted, and break easily. Rallo agents have memory across all channels, learn from interactions, and can handle complex conversations that would stump basic bots. They're closer to digital employees than simple chat scripts.",
    },
  ];

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
          className="w-full border border-black rounded-lg overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <table className="w-full">
            <tbody>
              {faqData.map((faq, index) => (
                <motion.tr
                  key={index}
                  className={`${
                    index !== faqData.length - 1 ? "border-b border-black" : ""
                  }`}
                  variants={fadeUpVariants}
                >
                  <td className="p-6 w-1/2 align-top border-r border-black">
                    <h3 className="font-text-medium-bold font-[number:var(--text-medium-bold-font-weight)] text-black text-[length:var(--text-medium-bold-font-size)] tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] [font-style:var(--text-medium-bold-font-style)]">
                      {faq.question}
                    </h3>
                  </td>
                  <td className="p-6 w-1/2 align-top">
                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {faq.answer}
                    </p>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
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