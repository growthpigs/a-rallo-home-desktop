import { NavigationHeader } from "./sections/NavigationHeader";
import { FooterSection } from "./sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export const BookDemoPage = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    setIsModalOpen(false);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavigationHeader isDark />
      <main className="flex-1">
        {/* Hero Section - Reduced spacing */}
        <section className="flex flex-col items-center gap-12 px-16 pt-32 pb-16 relative self-stretch w-full flex-[0_0_auto] bg-black">
          <div className="flex flex-col max-w-screen-xl items-center gap-12 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-md items-center gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
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

              <div className="inline-flex gap-4 flex-[0_0_auto] items-center relative">
                <Button 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-white border border-solid text-black rounded-lg font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-all duration-200"
                  data-testid="button-explore"
                >
                  EXPLORE
                </Button>
                <Button 
                  variant="outline" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] border border-solid border-white bg-transparent text-white rounded-lg font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-200"
                  data-testid="button-watch"
                >
                  WATCH DEMO
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Experience Section */}
        <section className="flex flex-col items-center gap-16 px-16 py-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col max-w-screen-xl items-center gap-16 relative w-full flex-[0_0_auto]">
            <header className="flex flex-col max-w-screen-md items-center gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
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
              <div className="bg-white border border-gray-200 rounded-lg p-8  transition-all duration-200">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 rounded-lg flex items-center justify-center font-['JetBrains_Mono'] font-medium text-lg">
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

              <div className="bg-white border border-gray-200 rounded-lg p-8  transition-all duration-200">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 rounded-lg flex items-center justify-center font-['JetBrains_Mono'] font-medium text-lg">
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

              <div className="bg-white border border-gray-200 rounded-lg p-8  transition-all duration-200">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 rounded-lg flex items-center justify-center font-['JetBrains_Mono'] font-medium text-lg">
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

              <div className="bg-white border border-gray-200 rounded-lg p-8  transition-all duration-200">
                <div className="flex items-start gap-6">
                  <div className="bg-black text-white w-12 h-12 rounded-lg flex items-center justify-center font-['JetBrains_Mono'] font-medium text-lg">
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

        {/* CTA Section with Product Icons */}
        <section className="flex flex-col items-center gap-16 px-16 py-24 relative self-stretch w-full flex-[0_0_auto]" style={{ backgroundColor: '#4077baff' }}>
          <div className="flex flex-col max-w-screen-md items-center gap-12 relative w-full flex-[0_0_auto]">
            {/* Product Icons */}
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="flex flex-col items-center gap-3">
                <img 
                  src="/icons/Video-pyramid.svg" 
                  alt="Rallo Agent" 
                  className="w-16 h-16 opacity-80 hover:opacity-100 transition-opacity duration-200"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="font-['JetBrains_Mono'] text-white/80 text-xs uppercase tracking-wider">Agent</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img 
                  src="/icons/Chat-cube.svg" 
                  alt="Rallo Chat" 
                  className="w-16 h-16 opacity-80 hover:opacity-100 transition-opacity duration-200"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="font-['JetBrains_Mono'] text-white/80 text-xs uppercase tracking-wider">Chat</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img 
                  src="/icons/Voice-hexagon.svg" 
                  alt="Rallo Voice" 
                  className="w-16 h-16 opacity-80 hover:opacity-100 transition-opacity duration-200"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="font-['JetBrains_Mono'] text-white/80 text-xs uppercase tracking-wider">Voice</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img 
                  src="/icons/diamond-interactive.svg" 
                  alt="Rallo Interactive" 
                  className="w-16 h-16 opacity-80 hover:opacity-100 transition-opacity duration-200"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="font-['JetBrains_Mono'] text-white/80 text-xs uppercase tracking-wider">Interactive</span>
              </div>
            </div>

            {/* CTA Content */}
            <header className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase" style={{ color: '#fd815aff' }}>
                  READY TO TRANSFORM
                </div>
              </div>

              <div className="flex-col items-center gap-4 self-stretch w-full flex-[0_0_auto] flex relative">
                <h2 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  START YOUR AI JOURNEY TODAY
                </h2>

                <p className="relative self-stretch font-['Inter'] font-normal text-white/80 text-lg text-center leading-relaxed max-w-lg mx-auto">
                  See how Rallo's complete AI suite can revolutionize your customer engagement and scale your business beyond limits.
                </p>
              </div>
            </header>

            <Button 
              onClick={() => setIsModalOpen(true)}
              className="text-white border-0 px-10 py-5 rounded-lg font-['JetBrains_Mono'] font-medium text-lg tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#fd815aff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff9570'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fd815aff'}
              data-testid="button-book-demo-cta"
            >
              BOOK YOUR DEMO NOW
            </Button>
          </div>
        </section>
      </main>
      <FooterSection />

      {/* Demo Request Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-black text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)]">
              Book Your Demo
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="font-['Inter'] font-normal text-sm"
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="font-['Inter'] font-normal text-sm"
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="font-['Inter'] font-normal text-sm"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="font-['Inter'] font-normal text-sm"
            />
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-black text-white hover:bg-gray-800 rounded-lg font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
              >
                Submit Request
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 border-black text-black hover:bg-gray-50 rounded-lg font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};