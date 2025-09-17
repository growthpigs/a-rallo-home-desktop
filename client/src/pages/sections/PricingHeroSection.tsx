import { Button } from "@/components/ui/button";

export const PricingHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-black">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-md items-center gap-8 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                PRICING
              </div>
            </div>

            <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
              <h1 className="relative self-stretch font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                SCALE YOUR DIGITAL PRESENCE
              </h1>

              <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] uppercase">
                Flexible pricing plans designed to multiply your business impact across every channel.
              </p>
            </div>
          </div>

          <div className="inline-flex gap-4 flex-[0_0_auto] items-center relative mt-6">
            <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-white border border-solid text-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-gray-100">
              Get started
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] border border-solid border-white bg-transparent text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-white hover:text-black"
            >
              Book demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};