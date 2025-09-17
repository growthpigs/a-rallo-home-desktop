import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export const ProductPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeaderSection />
      <main className="flex-1">
        {/* Product page content will go here */}
        <div className="container mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Product</h1>
          <p>Product page content will be integrated from your Replit design.</p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};