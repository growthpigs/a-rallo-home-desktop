import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Products",
    links: [
      "Rallo Agent",
      "Rallo Chat",
      "Rallo Voice",
      "Rallo Interactive",
      "Rallo Persona",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Enterprise",
      "Agencies",
      "Small Business",
      "Coaching",
      "Ministries",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact", "Blog"],
  },
  {
    title: "Resources",
    links: ["Guides", "Webinars", "Case Studies", "Support", "Help Center"],
  },
  {
    title: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Cookies Policy",
      "Compliance",
      "Accessibility",
    ],
  },
];

const bottomLinks = ["Privacy", "Terms of Service", "Cookies"];

const socialIcons = [
  {
    name: "Facebook",
    src: "/figmaAssets/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/figmaAssets/instagram.svg",
  },
  {
    name: "X",
    src: "/figmaAssets/x.svg",
  },
  {
    name: "LinkedIn",
    src: "/figmaAssets/linkedin.svg",
  },
  {
    name: "YouTube",
    src: "/figmaAssets/youtube.svg",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="items-center gap-20 px-16 py-20 bg-white flex flex-col relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col max-w-[560px] items-start flex-1 grow flex relative">
            <h2 className="relative self-stretch mt-[-1.00px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-black text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] [font-style:var(--text-medium-semi-bold-font-style)]">
              Stay Updated
            </h2>

            <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Get the latest AI insights and Rallo updates.
            </p>
          </div>

          <div className="flex flex-col w-[400px] gap-3 self-stretch items-start relative">
            <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Input
                placeholder="Email address"
                className="flex items-center gap-2 p-3 relative flex-1 grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-black rounded-none font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] placeholder:text-[#00000099]"
              />

              <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] border border-solid border-black bg-white hover:bg-gray-50 text-black rounded-none font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] h-auto">
                Subscribe
              </Button>
            </div>

            <div className="items-start gap-1 self-stretch w-full flex-[0_0_auto] flex relative">
              <span className="relative w-fit mt-[-1.00px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-black text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                By subscribing, you agree to our privacy policy.
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative flex-1 grow">
            <div className="relative w-[84px] h-9">
              <img
                className="absolute w-[70px] h-9 top-0 left-[7px]"
                alt="Logo wide"
                src="/figmaAssets/logo-wide-1.svg"
              />
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div
              key={section.title}
              className="flex flex-col items-start gap-4 relative flex-1 grow"
            >
              <h3 className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                {section.title}
              </h3>

              <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto] hover:opacity-70 transition-opacity"
                  >
                    <span className="relative flex-1 mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                      {link}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <Separator className="relative self-stretch w-full h-px mt-[-1.00px]" />

          <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
                © 2024 Rallo. All rights reserved.
              </span>

              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-black text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)] hover:opacity-70 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:opacity-70 transition-opacity"
                >
                  <img
                    className="relative w-6 h-6"
                    alt={icon.name}
                    src={icon.src}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
