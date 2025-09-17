import { NavigationHeader } from "./sections/NavigationHeader";
import { FooterSection } from "./sections/FooterSection";

export const ProductPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavigationHeader />
      <main className="flex-1 pt-24">
        {/* Product page content will be added based on your design */}
        <div className="container mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Product</h1>
          <p>Ready for product-specific content from your design.</p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};