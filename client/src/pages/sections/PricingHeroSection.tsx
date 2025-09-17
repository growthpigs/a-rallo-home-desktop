import { Button } from "@/components/ui/button";

export const PricingHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-black">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-md items-center gap-8 relative w-full flex-[0_0_auto] mx-auto">
          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                PRICING
              </div>
            </div>

            <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
              <h1 className="relative self-stretch font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                SCALE YOUR<br />DIGITAL PRESENCE
              </h1>

              <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] uppercase">
                Flexible pricing plans designed to multiply your<br />business impact across every channel.
              </p>
            </div>
          </div>

          <div className="inline-flex gap-4 flex-[0_0_auto] items-center justify-center relative mt-6">
            <Button className="inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] bg-white border border-solid border-white h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-gray-100">
              GET STARTED
            </Button>

            <Button
              variant="ghost"
              className="inline-flex items-center justify-center gap-0.5 px-6 py-3 relative flex-[0_0_auto] bg-transparent border border-solid border-white h-auto font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-white hover:text-black"
            >
              BOOK DEMO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};