import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const faqData = [
    {
      id: "item-1",
      question: "What is Rallo?",
      answer:
        "Rallo is an AI agent platform designed to enhance your digital presence. It creates video, chat, and voice agents that work for you 24/7. With Rallo, you can engage your audience effortlessly.",
    },
    {
      id: "item-2",
      question: "How does it work?",
      answer:
        "Simply record your content once, and Rallo distributes it across multiple channels. Our AI agents handle interactions in real-time, ensuring you never miss an opportunity. It's designed to streamline your customer engagement.",
    },
    {
      id: "item-3",
      question: "Is it customizable?",
      answer:
        "Yes, Rallo offers extensive customization options for your AI agents. You can tailor their responses, appearance, and functionality to align with your brand. This ensures a consistent experience for your customers.",
    },
    {
      id: "item-4",
      question: "What industries can use it?",
      answer:
        "Rallo is versatile and can be utilized across various industries. From coaching to retail, our AI agents adapt to meet diverse needs. Any business looking to enhance customer interactions can benefit.",
    },
    {
      id: "item-5",
      question: "How do I start?",
      answer:
        "Getting started with Rallo is easy. Sign up for a free trial to explore our features. You can also book a demo to see our AI agents in action.",
    },
    {
      id: "item-6",
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <header className="flex flex-col max-w-screen-md items-start gap-6 flex-[0_0_auto] relative w-full">
          <h2 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
            FAQs
          </h2>

          <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Find answers to common questions about Rallo and how our AI agents
            can help you.
          </p>
        </header>

        <Accordion
          type="multiple"
          className="flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b border-gray-200 pb-4"
            >
              <AccordionTrigger className="text-left font-text-medium-bold font-[number:var(--text-medium-bold-font-weight)] text-black text-[length:var(--text-medium-bold-font-size)] tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] [font-style:var(--text-medium-bold-font-style)] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex-col max-w-[560px] items-start gap-6 w-full flex-[0_0_auto] flex relative">
          <div className="flex-col items-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
            <h3 className="self-stretch mt-[-1.00px] text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
              Still have questions?
            </h3>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              We're here to help you!
            </p>
          </div>

          <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border border-solid border-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};