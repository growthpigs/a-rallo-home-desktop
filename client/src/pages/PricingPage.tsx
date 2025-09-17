import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export const PricingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeaderSection />
      <main className="flex-1">
        {/* Pricing page content will go here */}
        <div className="container mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Pricing</h1>
          <p>Pricing page content will be integrated from your Replit design.</p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};