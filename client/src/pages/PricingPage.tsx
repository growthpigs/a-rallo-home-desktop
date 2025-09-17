import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

// Import pricing sections from the extracted design
import { PricingHeroSection } from "./sections/PricingHeroSection";
import { PricingOptionsSection } from "./sections/PricingOptionsSection";
import { PricingComparisonSection } from "./sections/PricingComparisonSection";
import { PricingTestimonialSection } from "./sections/PricingTestimonialSection";

export const PricingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeaderSection />
      <main className="flex-1">
        <PricingHeroSection />
        <PricingOptionsSection />
        <PricingComparisonSection />
        <PricingTestimonialSection />
      </main>
      <FooterSection />
    </div>
  );
};