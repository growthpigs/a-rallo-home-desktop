import { Button } from "@/components/ui/button";

export const PricingHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-gradient-to-b from-black/50 to-black/50 bg-gray-900">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-md items-start gap-8 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-['JetBrains_Mono'] font-thin text-white text-sm tracking-[0.2em] uppercase whitespace-nowrap">
                Pricing
              </div>
            </div>

            <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
              <h1 className="relative self-stretch mt-[-1.00px] font-['Libre_Baskerville'] font-normal text-white text-6xl leading-tight">
                Scale your digital presence
              </h1>

              <p className="relative self-stretch font-['JetBrains_Mono'] font-thin text-white text-base leading-relaxed">
                Flexible pricing plans designed to multiply your business impact
                across every channel
              </p>
            </div>
          </div>

          <div className="inline-flex gap-4 flex-[0_0_auto] items-start relative">
            <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-white border border-solid text-black font-['JetBrains_Mono'] font-thin text-sm tracking-[0.1em] hover:bg-gray-100">
              Get started
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] border border-solid border-white bg-transparent text-white font-['JetBrains_Mono'] font-thin text-sm tracking-[0.1em] hover:bg-white hover:text-black"
            >
              Book demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};