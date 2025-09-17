import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProductRalloInteractiveSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="items-start self-stretch flex relative w-full flex-[0_0_auto]">
        <div className="flex-col items-end justify-center gap-8 pl-16 pr-20 py-28 flex-1 self-stretch grow flex relative">
          <div className="flex-col max-w-[560px] items-start gap-8 w-full flex-[0_0_auto] flex relative">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-20 h-20"
                alt="Relume"
                src="/figmaAssets/relume-1.svg"
              />

              <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                <h2 className="self-stretch text-black text-[length:var(--heading-desktop-h2-font-size)] leading-[var(--heading-desktop-h2-line-height)] relative mt-[-1.00px] font-heading-desktop-h2 font-[number:var(--heading-desktop-h2-font-weight)] tracking-[var(--heading-desktop-h2-letter-spacing)] [font-style:var(--heading-desktop-h2-font-style)]">
                  Rallo Interactive
                </h2>

                <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <Button
                variant="outline"
                className="h-auto px-6 py-3 border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                data-testid="button-rallo-interactive-primary"
              >
                Button
              </Button>

              <Button
                variant="ghost"
                className="h-auto p-0 text-black hover:bg-transparent hover:text-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                data-testid="button-rallo-interactive-secondary"
              >
                Button
                <ChevronRightIcon className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        <img
          className="relative flex-1 self-stretch grow min-h-[720px] object-cover"
          alt="Placeholder lightbox"
          src="/figmaAssets/placeholder-lightbox-5.png"
        />
      </div>
    </section>
  );
};