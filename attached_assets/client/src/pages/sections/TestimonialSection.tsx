import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex-col max-w-screen-xl gap-20 flex items-center relative w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-md items-center gap-8 w-full flex-[0_0_auto] flex relative">
          <div className="relative w-[120px] h-12">
            <img
              className="absolute w-[116px] h-[19px] top-3.5 left-0.5"
              alt="Logo"
              src="/figmaAssets/logo.svg"
            />
          </div>

          <blockquote className="relative self-stretch font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
            &#34;Rallo transformed our customer engagement overnight. We&#39;re
            now handling 10x more interactions without adding a single team
            member.&#34;
          </blockquote>

          <div className="flex flex-col w-[300px] items-center gap-4 relative flex-[0_0_auto]">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="/figmaAssets/avatar-image.png"
                alt="Sarah Martinez"
                className="object-cover"
              />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] text-center tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Sarah Martinez
              </div>

              <div className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                CEO, Digital Innovations Inc
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
