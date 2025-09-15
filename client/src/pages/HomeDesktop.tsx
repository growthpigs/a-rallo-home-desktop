import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { GeneralLayoutSection } from "./sections/GeneralLayoutSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { LayoutContainerSection } from "./sections/LayoutContainerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { TestimonialSection } from "./sections/TestimonialSection";

const navigationItems = [
  { label: "Products" },
  { label: "Pricing" },
  { label: "Solutions" },
];

export const HomeDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full">
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
