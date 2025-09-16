import React, { lazy, Suspense } from "react";

// Import ALL sections directly for optimal performance (no lazy loading)
import { HeaderSection } from "./sections/HeaderSection";
import { GeneralLayoutSection } from "./sections/GeneralLayoutSection";
import { LayoutContainerSection } from "./sections/LayoutContainerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { TestimonialSection } from "./sections/TestimonialSection";
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
      <LayoutContainerSection />
      <MainContentSection />
      <ContentWrapperSection />
      <ImageGallerySection />
      <ComponentNodeSection />
      <FeatureHighlightSection />
      <ServiceOverviewSection />
      <TestimonialSection />
      <CallToActionSection />
      <FrequentlyAskedQuestionsSection />
      <FooterSection />
    </div>
  );
};