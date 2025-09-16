import React, { lazy, Suspense } from "react";

// Import critical sections directly (above the fold)
import { HeaderSection } from "./sections/HeaderSection";
import { GeneralLayoutSection } from "./sections/GeneralLayoutSection";
import { LayoutContainerSection } from "./sections/LayoutContainerSection";
import { MainContentSection } from "./sections/MainContentSection";

// Lazy load only heavy sections below the fold
const ContentWrapperSection = lazy(() => import("./sections/ContentWrapperSection").then(module => ({ default: module.ContentWrapperSection })));
const ImageGallerySection = lazy(() => import("./sections/ImageGallerySection").then(module => ({ default: module.ImageGallerySection })));
const ComponentNodeSection = lazy(() => import("./sections/ComponentNodeSection").then(module => ({ default: module.ComponentNodeSection })));
const FeatureHighlightSection = lazy(() => import("./sections/FeatureHighlightSection").then(module => ({ default: module.FeatureHighlightSection })));
const ServiceOverviewSection = lazy(() => import("./sections/ServiceOverviewSection").then(module => ({ default: module.ServiceOverviewSection })));
const TestimonialSection = lazy(() => import("./sections/TestimonialSection").then(module => ({ default: module.TestimonialSection })));
const CallToActionSection = lazy(() => import("./sections/CallToActionSection").then(module => ({ default: module.CallToActionSection })));
const FrequentlyAskedQuestionsSection = lazy(() => import("./sections/FrequentlyAskedQuestionsSection").then(module => ({ default: module.FrequentlyAskedQuestionsSection })));
const FooterSection = lazy(() => import("./sections/FooterSection").then(module => ({ default: module.FooterSection })));

const navigationItems = [
  { label: "Products" },
  { label: "Pricing" },
  { label: "Solutions" },
];

// Loading component for lazy loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px] w-full">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full min-h-[200px]"></div>
  </div>
);

export const HomeDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Critical sections - loaded immediately */}
      <HeaderSection />
      <GeneralLayoutSection />
      <LayoutContainerSection />
      <MainContentSection />
      
      {/* Below the fold sections - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <ContentWrapperSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ImageGallerySection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ComponentNodeSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FeatureHighlightSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ServiceOverviewSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CallToActionSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FrequentlyAskedQuestionsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};
