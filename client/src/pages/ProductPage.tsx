import { NavigationHeader } from "./sections/NavigationHeader";
import { FooterSection } from "./sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon, PlayIcon } from "lucide-react";

export const ProductPage = (): JSX.Element => {
  const productCards = [
    {
      title: "Your digital presence reimagined with intelligent agents",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Learn More",
      icon: "/figmaAssets/relume.svg",
    },
    {
      title: "You Multiplied", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Watch Demo",
      icon: "/figmaAssets/relume.svg",
    },
    {
      title: "Presence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      buttonText: "Button",
      icon: "/figmaAssets/relume.svg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavigationHeader />
      <main className="flex-1 pt-24">
        {/* Products Header Section */}
        <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
            <header className="flex flex-col max-w-screen-md items-center gap-8 relative w-full flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                  Products
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-black text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] uppercase">
                  PRODUCTS
                </h1>

                <p className="relative self-stretch font-['Inter'] font-normal text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </header>

            {/* Product Cards */}
            <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              {productCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-start justify-center gap-6 p-8 relative flex-1 self-stretch grow bg-gray-500 border-0"
                  data-testid={`card-product-${index}`}
                >
                  <CardContent className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative p-0">
                    <img
                      className="relative w-12 h-12"
                      alt="Relume"
                      src={card.icon}
                    />

                    <div className="flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                      <h3 className="self-stretch text-white font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                        {card.title}
                      </h3>

                      <p className="relative self-stretch font-['Inter'] font-normal text-white text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>

                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <Button
                      variant="ghost"
                      className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
                      data-testid={`button-${card.buttonText.toLowerCase().replace(' ', '-')}`}
                    >
                      <span className="relative w-fit font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase text-white whitespace-nowrap">
                        {card.buttonText.toUpperCase()}
                      </span>
                      <ChevronRightIcon className="relative w-6 h-6 text-white" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rallo Agent Section - Video Left, Text Right */}
        <section className="flex items-center w-full bg-white py-20">
          {/* Video Container - Left */}
          <div className="flex-1 flex justify-end px-8">
            <div className="relative w-full max-w-[600px] aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/TearsOfSteel.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="flex-1 flex items-center justify-start px-8">
            <div className="flex-col max-w-[560px] items-start gap-4 w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[69px] h-[69px]"
                  alt="Rallo Agent"
                  src="/icons/Video-pyramid.svg"
                  style={{ filter: 'brightness(0)' }}
                />

                <div className="flex-col items-start gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h2 className="self-stretch text-black font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[calc(var(--heading-h2-font-size)*0.8)] tracking-[var(--heading-h2-letter-spacing)] leading-[1.2] [font-style:var(--heading-h2-font-style)]">
                    Rallo Agent
                  </h2>

                  <p className="relative self-stretch font-['Inter'] font-normal text-black text-[calc(var(--text-medium-normal-font-size)+2px)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                    Deploy intelligent AI avatars that represent your brand with authentic human presence. Your digital representatives work 24/7 across video calls, maintaining your voice and expertise at scale.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-3">
                <Button
                  variant="outline"
                  className="h-auto px-4 py-2 border-black text-black font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-agent-primary"
                >
                  GET STARTED
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto p-0 text-black font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-agent-secondary"
                >
                  LEARN MORE
                  <ChevronRightIcon className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rallo Chat Section - Text Left, Video Right */}
        <section className="flex items-center w-full bg-gray-50 py-20">
          {/* Text Content - Left */}
          <div className="flex-1 flex items-center justify-end px-8">
            <div className="flex-col max-w-[560px] items-end gap-4 w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[69px] h-[69px]"
                  alt="Rallo Chat"
                  src="/icons/Chat-cube.svg"
                  style={{ filter: 'brightness(0)' }}
                />

                <div className="flex-col items-end gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h2 className="self-stretch text-right text-black font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[calc(var(--heading-h2-font-size)*0.8)] tracking-[var(--heading-h2-letter-spacing)] leading-[1.2] [font-style:var(--heading-h2-font-style)]">
                    Rallo Chat
                  </h2>

                  <p className="relative self-stretch text-right font-['Inter'] font-normal text-black text-[calc(var(--text-medium-normal-font-size)+2px)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                    Engage customers instantly with AI-powered chat that remembers every conversation. Seamlessly handle inquiries, book meetings, and nurture relationships across all messaging platforms simultaneously.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-3 flex-row-reverse">
                <Button
                  variant="outline"
                  className="h-auto px-4 py-2 border-black text-black hover:bg-black hover:text-white font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-chat-primary"
                >
                  GET STARTED
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto p-0 text-black hover:bg-transparent hover:text-black font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-chat-secondary"
                >
                  <ChevronRightIcon className="mr-2 w-6 h-6" />
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>

          {/* Video Container - Right */}
          <div className="flex-1 flex justify-start px-8">
            <div className="relative w-full max-w-[600px] aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/TearsOfSteel.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Rallo Voice Section - Video Left, Text Right */}
        <section className="flex items-center w-full bg-white py-20">
          {/* Video Container - Left */}
          <div className="flex-1 flex justify-end px-8">
            <div className="relative w-full max-w-[600px] aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/TearsOfSteel.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="flex-1 flex items-center justify-start px-8">
            <div className="flex-col max-w-[560px] items-start gap-4 w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[69px] h-[69px]"
                  alt="Rallo Voice"
                  src="/icons/Voice-hexagon.svg"
                  style={{ filter: 'brightness(0)' }}
                />

                <div className="flex-col items-start gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h2 className="self-stretch text-black font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[calc(var(--heading-h2-font-size)*0.8)] tracking-[var(--heading-h2-letter-spacing)] leading-[1.2] [font-style:var(--heading-h2-font-style)]">
                    Rallo Voice
                  </h2>

                  <p className="relative self-stretch font-['Inter'] font-normal text-black text-[calc(var(--text-medium-normal-font-size)+2px)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                    Natural voice conversations that sound genuinely human. Handle phone calls, voice assistants, and audio interactions with your exact tone, knowledge, and personality replicated perfectly.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-3">
                <Button
                  variant="outline"
                  className="h-auto px-4 py-2 border-black text-black font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-voice-primary"
                >
                  GET STARTED
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto p-0 text-black font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-voice-secondary"
                >
                  LEARN MORE
                  <ChevronRightIcon className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rallo Interactive Section - Text Left, Video Right */}
        <section className="flex items-center w-full bg-gray-50 py-20">
          {/* Text Content - Left */}
          <div className="flex-1 flex items-center justify-end px-8">
            <div className="flex-col max-w-[560px] items-end gap-4 w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[69px] h-[69px]"
                  alt="Rallo Interactive"
                  src="/icons/diamond-interactive.svg"
                  style={{ filter: 'brightness(0)' }}
                />

                <div className="flex-col items-end gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <h2 className="self-stretch text-right text-black font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[calc(var(--heading-h2-font-size)*0.8)] tracking-[var(--heading-h2-letter-spacing)] leading-[1.2] [font-style:var(--heading-h2-font-style)]">
                    Rallo Interactive
                  </h2>

                  <p className="relative self-stretch text-right font-['Inter'] font-normal text-black text-[calc(var(--text-medium-normal-font-size)+2px)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                    Build dynamic workflows that adapt to each customer in real-time. Connect APIs, trigger actions, and orchestrate complex business logic through our visual no-code platform.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-3 flex-row-reverse">
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-black font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-interactive-secondary"
                >
                  <ChevronRightIcon className="mr-2 w-6 h-6" />
                  LEARN MORE
                </Button>

                <Button
                  variant="outline"
                  className="h-auto px-4 py-2 border-black text-black font-['JetBrains_Mono'] font-normal text-xs tracking-[0.2em] uppercase"
                  data-testid="button-rallo-interactive-primary"
                >
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>

          {/* Video Container - Right */}
          <div className="flex-1 flex justify-start px-8">
            <div className="relative w-full max-w-[600px] aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/TearsOfSteel.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};