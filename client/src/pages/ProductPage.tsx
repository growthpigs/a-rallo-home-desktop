import { NavigationHeader } from "./sections/NavigationHeader";
import { FooterSection } from "./sections/FooterSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { CallToActionSection } from "./sections/CallToActionSection";

export const ProductPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavigationHeader />
      <main className="flex-1 pt-24">
        {/* Product Hero Section */}
        <section className="container mx-auto px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              AI-POWERED<br />
              ENGAGEMENT<br />
              PLATFORM
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business communication with intelligent agents that deliver 
              personalized experiences across every channel. Rallo multiplies your reach 
              while maintaining authentic connections.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors" data-testid="button-get-started">
                GET STARTED
              </button>
              <button className="border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors" data-testid="button-watch-demo">
                WATCH DEMO
              </button>
            </div>
          </div>
        </section>

        {/* Feature Highlight Section */}
        <FeatureHighlightSection />

        {/* Service Overview Section */}
        <ServiceOverviewSection />

        {/* Call to Action Section */}
        <CallToActionSection />
      </main>
      <FooterSection />
    </div>
  );
};