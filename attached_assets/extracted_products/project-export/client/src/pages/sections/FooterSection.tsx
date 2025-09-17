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

const socialIcons = [
  { alt: "Facebook", src: "/figmaAssets/facebook.svg" },
  { alt: "Instagram", src: "/figmaAssets/instagram.svg" },
  { alt: "X", src: "/figmaAssets/x.svg" },
  { alt: "Linked in", src: "/figmaAssets/linkedin.svg" },
  { alt: "Youtube", src: "/figmaAssets/youtube.svg" },
];

const bottomLinks = ["Privacy Policy", "Terms of Service", "Cookies"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="items-center gap-20 px-16 py-20 bg-white flex flex-col relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex-col max-w-screen-xl items-start gap-20 flex relative w-full flex-[0_0_auto]">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col max-w-[560px] items-start flex-1 grow flex relative">
            <h2 className="relative self-stretch mt-[-1.00px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-black text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] [font-style:var(--text-medium-semi-bold-font-style)]">
              Stay Updated
            </h2>

            <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
              Get the latest AI insights and Rallo updates.
            </p>
          </div>

          <div className="flex flex-col w-[400px] items-start gap-3 relative self-stretch">
            <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Input
                className="flex items-center gap-2 p-3 relative flex-1 grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-black rounded-none [font-family:'Roboto',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-6"
                placeholder="Email address"
                type="email"
              />

              <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] border border-solid border-black bg-white text-black hover:bg-gray-50 rounded-none h-auto [font-family:'Roboto',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap">
                Subscribe
              </Button>
            </div>

            <div className="items-start gap-1 self-stretch w-full flex-[0_0_auto] flex relative">
              <span className="relative w-fit mt-[-1.00px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-black text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                By subscribing, you agree to our privacy policy.
              </span>

              <a
                href="#"
                className="relative w-fit mt-[-1.00px] font-text-tiny-link font-[number:var(--text-tiny-link-font-weight)] text-black text-[length:var(--text-tiny-link-font-size)] tracking-[var(--text-tiny-link-letter-spacing)] leading-[var(--text-tiny-link-line-height)] underline whitespace-nowrap [font-style:var(--text-tiny-link-font-style)]"
              >
                Privacy
              </a>
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
            <nav
              key={index}
              className="flex flex-col items-start gap-4 relative flex-1 grow"
            >
              <h3 className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                {section.title}
              </h3>

              <ul className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <a
                      href="#"
                      className="relative flex-1 mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <Separator className="relative self-stretch w-full h-px mt-[-1.00px]" />

          <div className="items-start justify-between flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
                © 2024 Rallo. All rights reserved.
              </span>

              <nav className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
                {bottomLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="relative w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-black text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#" className="relative w-6 h-6">
                  <img
                    className="relative w-6 h-6"
                    alt={icon.alt}
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
