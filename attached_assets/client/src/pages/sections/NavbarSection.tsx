import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { label: "Products", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Solutions", href: "#" },
];

export const NavbarSection = (): JSX.Element => {
  return (
    <header className="flex h-[72px] items-center justify-center px-16 py-0 w-full bg-white">
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center justify-center w-20 h-10">
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
                  <NavigationMenuLink
                    href={item.href}
                    className="flex items-center justify-center gap-1 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] whitespace-nowrap hover:text-gray-600 transition-colors"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center justify-center gap-4">
            <Button className="flex items-center justify-center gap-2 px-5 py-2 bg-black border border-solid border-black text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-gray-800 transition-colors h-auto">
              Demo
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
