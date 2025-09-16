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
  "/figmaAssets/footer-social-link-3.svg",
  "/figmaAssets/footer-social-link-4.svg",
  "/figmaAssets/footer-social-link.svg",
  "/figmaAssets/footer-social-link-1.svg",
  "/figmaAssets/footer-social-link-2.svg",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-20 px-16 py-20 w-full bg-[#e6e6e6]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex-col max-w-[560px] items-start flex-1 grow flex gap-3">
            <h2 className="font-[number:var(--text-medium-semi-bold-font-weight)] text-[length:var(--text-medium-semi-bold-font-size)] leading-[var(--text-medium-semi-bold-line-height)] font-text-medium-semi-bold text-black tracking-[var(--text-medium-semi-bold-letter-spacing)] [font-style:var(--text-medium-semi-bold-font-style)]">
              Stay Updated
            </h2>

            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Get the latest AI insights and Rallo updates.
            </p>
          </div>

          <div className="flex flex-col w-[400px] items-start gap-3">
            <div className="flex items-start gap-2 w-full">
              <Input
                placeholder="Email address"
                className="flex-1 border-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] placeholder:text-[#00000099]"
              />

              <Button
                variant="outline"
                className="border-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] h-auto px-6 py-3"
              >
                Subscribe
              </Button>
            </div>

            <div className="flex items-start gap-1 w-full">
              <span className="font-[number:var(--text-tiny-normal-font-weight)] text-[length:var(--text-tiny-normal-font-size)] leading-[var(--text-tiny-normal-line-height)] font-text-tiny-normal text-black tracking-[var(--text-tiny-normal-letter-spacing)] [font-style:var(--text-tiny-normal-font-style)]">
                By subscribing, you agree to our privacy policy.
              </span>

              <a
                href="#"
                className="font-text-tiny-link font-[number:var(--text-tiny-link-font-weight)] text-black text-[length:var(--text-tiny-link-font-size)] tracking-[var(--text-tiny-link-letter-spacing)] leading-[var(--text-tiny-link-line-height)] underline [font-style:var(--text-tiny-link-font-style)]"
              >
                By subscribing, you agree to our privacy policy.
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-10 w-full">
          <div className="flex flex-col items-start flex-1 grow">
            <div className="w-[84px] h-9">
              <img
                className="w-[70px] h-9"
                alt="Logo wide"
                src="/figmaAssets/logo-wide-1.svg"
              />
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div
              key={section.title}
              className="flex flex-col items-start gap-4 flex-1 grow"
            >
              <h3 className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                {section.title}
              </h3>

              <nav className="flex flex-col items-start w-full">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="flex items-start px-0 py-2 w-full font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <Separator className="w-full" />

          <div className="flex justify-between items-start w-full">
            <div className="inline-flex items-center gap-1">
              <span className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                © 2024 Rallo. All rights reserved.
              </span>

              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="underline font-text-small-link font-[number:var(--text-small-link-font-weight)] text-black text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] [font-style:var(--text-small-link-font-style)]"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="inline-flex items-start gap-1">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#" className="w-6 h-6">
                  <img
                    className="w-6 h-6"
                    alt="Footer social link"
                    src={icon}
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
