import { NavigationHeader } from "./sections/NavigationHeader";
import { FooterSection } from "./sections/FooterSection";
import { ProductMainContentSection } from "./sections/ProductMainContentSection";
import { ProductRalloAgentSection } from "./sections/ProductRalloAgentSection";
import { ProductRalloInteractiveSection } from "./sections/ProductRalloInteractiveSection";
import { ProductRalloVoiceSection } from "./sections/ProductRalloVoiceSection";
import { ProductRalloPersonaSection } from "./sections/ProductRalloPersonaSection";

export const ProductPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavigationHeader />
      <main className="flex-1 pt-24">
        <ProductMainContentSection />
        <ProductRalloAgentSection />
        <ProductRalloInteractiveSection />
        <ProductRalloVoiceSection />
        <ProductRalloPersonaSection />
      </main>
      <FooterSection />
    </div>
  );
};