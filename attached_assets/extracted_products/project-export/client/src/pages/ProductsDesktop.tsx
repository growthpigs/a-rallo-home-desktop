import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PageLayoutSection } from "./sections/PageLayoutSection";
import { ProductsSection } from "./sections/ProductsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const ProductsDesktop = (): JSX.Element => {
  const navigationItems = [
    { label: "Products", hasDropdown: false },
    { label: "Pricing", hasDropdown: false },
    { label: "Solutions", hasDropdown: false },
    {
      label: "Link Four",
      hasDropdown: true,
      dropdownItems: ["Link Five", "Link Six", "Link Seven"],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <header className="flex h-[72px] items-center justify-center px-16 py-0 w-full bg-white">
        <div className="flex items-center justify-between w-full">
          <div className="flex w-20 h-10 items-center justify-center">
            <div className="relative w-[84px] h-9 ml-[-2.00px] mr-[-2.00px]">
              <img
                className="absolute w-[70px] h-9 top-0 left-[7px]"
                alt="Logo wide"
                src="/figmaAssets/logo-wide-1.svg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center justify-end gap-8">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className="flex items-center gap-1 bg-transparent p-0 h-auto [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                          {item.label}
                          <ChevronDownIcon className="w-6 h-6" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col items-start gap-4 p-6 bg-white border border-solid border-black">
                          {item.dropdownItems?.map(
                            (dropdownItem, dropdownIndex) => (
                              <div
                                key={dropdownIndex}
                                className="[font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6 cursor-pointer hover:opacity-70"
                              >
                                {dropdownItem}
                              </div>
                            ),
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-70">
                        <div className="[font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                          {item.label}
                        </div>
                      </div>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                className="h-auto px-5 py-2 border-black text-black bg-transparent hover:bg-gray-50 [font-family:'Roboto',Helvetica] font-normal text-base tracking-[0] leading-6"
              >
                Demo
              </Button>

              <Button className="h-auto px-5 py-2 bg-black text-white hover:bg-gray-800 [font-family:'Roboto',Helvetica] font-normal text-base tracking-[0] leading-6">
                Button
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col w-full">
        <MainContentSection />
        <ProductsSection />
        <PageLayoutSection />
        <ServicesSection />
        <FeaturesSection />
        <NavigationSection />
        <HeroSection />
        <TestimonialsSection />
        <ClientTestimonialsSection />
        <AboutUsSection />
        <CallToActionSection />
        <FooterSection />
      </main>
    </div>
  );
};
