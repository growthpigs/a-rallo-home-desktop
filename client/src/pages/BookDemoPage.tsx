import { NavigationHeader } from "./sections/NavigationHeader";
import { FooterSection } from "./sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const BookDemoPage = (): JSX.Element => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavigationHeader />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-black">
          <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-md items-center gap-8 relative w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                    BOOK DEMO
                  </div>
                </div>

                <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h1 className="relative self-stretch font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                    EXPERIENCE THE FUTURE OF AI-POWERED ENGAGEMENT
                  </h1>

                  <p className="relative self-stretch font-['Inter'] font-normal text-white text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] uppercase">
                    Transform your business communication with intelligent agents that deliver personalized experiences everywhere your customers are.
                  </p>
                </div>
              </div>

              <div className="inline-flex gap-4 flex-[0_0_auto] items-center relative mt-6">
                <Button 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-white border border-solid text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase hover:bg-gray-100"
                  data-testid="button-explore"
                >
                  EXPLORE
                </Button>
                <Button 
                  variant="outline" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] border border-solid border-white bg-transparent text-white font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black"
                  data-testid="button-watch"
                >
                  WATCH DEMO
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Experience Section */}
        <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
            <header className="flex flex-col max-w-screen-md items-center gap-8 relative w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                    PROCESS
                  </div>
                </div>

                <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h2 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    YOUR CUSTOM RALLO EXPERIENCE AWAITS
                  </h2>

                  <p className="relative self-stretch font-['Inter'] font-normal text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] uppercase">
                    Tailored to your unique business needs and communication goals.
                  </p>
                </div>
              </div>
            </header>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 gap-8 w-full">
              <div className="bg-white border border-gray-200 p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-['Inter'] font-normal text-[length:var(--text-regular-normal-font-size)]">
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] mb-3">
                      DISCOVERY
                    </h3>
                    <p className="font-['Inter'] font-normal text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] uppercase">
                      We analyze your current communication channels and identify optimization opportunities for AI integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-['Inter'] font-normal text-[length:var(--text-regular-normal-font-size)]">
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] mb-3">
                      CONFIGURATION
                    </h3>
                    <p className="font-['Inter'] font-normal text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] uppercase">
                      Custom AI agents are built to match your brand voice and handle your specific use cases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-['Inter'] font-normal text-[length:var(--text-regular-normal-font-size)]">
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] mb-3">
                      DEPLOYMENT
                    </h3>
                    <p className="font-['Inter'] font-normal text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] uppercase">
                      Seamless integration across all your platforms with comprehensive testing and training.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-['Inter'] font-normal text-[length:var(--text-regular-normal-font-size)]">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] mb-3">
                      OPTIMIZATION
                    </h3>
                    <p className="font-['Inter'] font-normal text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] uppercase">
                      Continuous monitoring and refinement to maximize performance and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Current Section */}
        <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-gray-50">
          <div className="flex flex-col max-w-screen-md items-center gap-8 relative w-full flex-[0_0_auto]">
            <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                  NEWSLETTER
                </div>
              </div>

              <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                <h2 className="relative self-stretch font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-black text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                  STAY CURRENT
                </h2>

                <p className="relative self-stretch font-['Inter'] font-normal text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] uppercase">
                  Get the latest insights and AI advancement updates.
                </p>
              </div>
            </header>

            <div className="flex gap-4 w-full max-w-md">
              <Input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 font-['Inter'] font-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]"
                data-testid="input-email-signup"
              />
              <Button 
                className="bg-black text-white hover:bg-gray-800 font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                data-testid="button-subscribe"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};