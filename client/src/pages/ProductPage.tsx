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

        {/* Rallo Agent Section */}
        <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="items-start self-stretch flex relative w-full flex-[0_0_auto]">
            <div className="relative flex-1 self-stretch grow bg-gray-500 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                <PlayIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex-col items-start justify-center gap-8 px-16 py-28 flex-1 self-stretch grow flex relative">
              <div className="flex-col max-w-[560px] items-start gap-8 w-full flex-[0_0_auto] flex relative">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-20 h-20"
                    alt="Rallo Agent"
                    src="/icons/Video-pyramid.svg"
                    style={{ filter: 'brightness(0)' }}
                  />

                  <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                    <h2 className="self-stretch text-black font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                      Rallo Agent
                    </h2>

                    <p className="relative self-stretch font-['Inter'] font-normal text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-6">
                  <Button
                    variant="outline"
                    className="h-auto px-6 py-3 border-black text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                    data-testid="button-rallo-agent-primary"
                  >
                    GET STARTED
                  </Button>

                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                    data-testid="button-rallo-agent-secondary"
                  >
                    LEARN MORE
                    <ChevronRightIcon className="w-6 h-6 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rallo Chat Section */}
        <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-white -mt-1">
          <div className="items-start self-stretch flex relative w-full flex-[0_0_auto]">
            <div className="flex-col items-start justify-center gap-8 px-16 py-28 flex-1 self-stretch grow flex relative">
              <div className="flex-col max-w-[560px] items-start gap-8 w-full flex-[0_0_auto] flex relative">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-20 h-20"
                    alt="Rallo Chat"
                    src="/icons/Chat-cube.svg"
                    style={{ filter: 'brightness(0)' }}
                  />

                  <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                    <h2 className="self-stretch text-black font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                      Rallo Chat
                    </h2>

                    <p className="relative self-stretch font-['Inter'] font-normal text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-6">
                  <Button
                    variant="outline"
                    className="h-auto px-6 py-3 border-black text-black hover:bg-black hover:text-white font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                    data-testid="button-rallo-chat-primary"
                  >
                    GET STARTED
                  </Button>

                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-black hover:bg-transparent hover:text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                    data-testid="button-rallo-chat-secondary"
                  >
                    LEARN MORE
                    <ChevronRightIcon className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative flex-1 self-stretch grow bg-gray-500 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                <PlayIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* Rallo Voice Section */}
        <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-white -mt-1">
          <div className="items-start self-stretch flex relative w-full flex-[0_0_auto]">
            <div className="relative flex-1 self-stretch grow bg-gray-500 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                <PlayIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex-col items-start justify-center gap-8 px-16 py-28 flex-1 self-stretch grow flex relative">
              <div className="flex-col max-w-[560px] items-start gap-8 w-full flex-[0_0_auto] flex relative">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-20 h-20"
                    alt="Rallo Voice"
                    src="/icons/Voice-hexagon.svg"
                    style={{ filter: 'brightness(0)' }}
                  />

                  <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                    <h2 className="self-stretch text-black font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                      Rallo Voice
                    </h2>

                    <p className="relative self-stretch font-['Inter'] font-normal text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-6 relative flex-[0_0_auto] mt-6">
                  <Button
                    variant="outline"
                    className="h-auto px-6 py-3 border-black text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                    data-testid="button-rallo-voice-primary"
                  >
                    GET STARTED
                  </Button>

                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                    data-testid="button-rallo-voice-secondary"
                  >
                    LEARN MORE
                    <ChevronRightIcon className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};