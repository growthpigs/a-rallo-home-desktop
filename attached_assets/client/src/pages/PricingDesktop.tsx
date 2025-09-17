import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { NavbarSection } from "./sections/NavbarSection";
import { PricingOptionsSection } from "./sections/PricingOptionsSection";
import { PricingSection } from "./sections/PricingSection";
import { TestimonialSection } from "./sections/TestimonialSection";

export const PricingDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <NavbarSection />
      <HeaderSection />
      <PricingOptionsSection />
      <PricingSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  );
};
