import { HeaderSection } from "@/pages/sections/HeaderSection";
import { FooterSection } from "@/pages/sections/FooterSection";

// Import pricing sections from the extracted design
import { PricingHeroSection } from "@/pages/sections/PricingHeroSection";
import { PricingOptionsSection } from "@/pages/sections/PricingOptionsSection";
import { PricingComparisonSection } from "@/pages/sections/PricingComparisonSection";
import { PricingTestimonialSection } from "@/pages/sections/PricingTestimonialSection";

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