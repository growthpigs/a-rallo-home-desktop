import React, { lazy, Suspense } from "react";

// Import ALL sections directly for optimal performance (no lazy loading)
import { HeaderSection } from "./sections/HeaderSection";
import { GeneralLayoutSection } from "./sections/GeneralLayoutSection";
import { ScrollExpandSection } from "./sections/ScrollExpandSection";
import { LayoutContainerSection } from "./sections/LayoutContainerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
// Removed FeatureHighlightSection - AI THAT SPEAKS EVERY LANGUAGE section
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
// import { TestimonialSection } from "./sections/TestimonialSection";  // HIDDEN: AI THAT HEARS WHAT YOU DON'T SAY
import { CallToActionSection } from "./sections/CallToActionSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { FooterSection } from "./sections/FooterSection";

const navigationItems = [
  { label: "Products" },
  { label: "Pricing" },
  { label: "Solutions" },
];

export const HomeDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full">
      {/* All sections loaded immediately for smooth scrolling */}
      <HeaderSection />
      <GeneralLayoutSection />
      <ScrollExpandSection />
      <LayoutContainerSection />
      <ImageGallerySection />
      {/* ContentWrapperSection content moved to ImageGallerySection */}
      <ComponentNodeSection />
      <MainContentSection />
      <ServiceOverviewSection />
      {/* <TestimonialSection /> HIDDEN: AI THAT HEARS WHAT YOU DON'T SAY */}
      <CallToActionSection />
      <FrequentlyAskedQuestionsSection />
      <FooterSection />
    </div>
  );
};