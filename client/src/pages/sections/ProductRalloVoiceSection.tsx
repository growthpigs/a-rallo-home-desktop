import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProductRalloVoiceSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="items-start self-stretch flex relative w-full flex-[0_0_auto]">
        <img
          className="relative flex-1 self-stretch grow min-h-[720px] object-cover"
          alt="Placeholder lightbox"
          src="/figmaAssets/placeholder-lightbox-5.png"
        />

        <div className="flex-col items-start justify-center gap-8 pl-20 pr-16 py-20 flex-1 self-stretch grow flex relative">
          <div className="flex-col max-w-[560px] items-start gap-8 w-full flex-[0_0_auto] flex relative">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-20 h-20"
                alt="Relume"
                src="/figmaAssets/relume-1.svg"
              />

              <div className="flex-col items-start gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                <h2 className="self-stretch text-black text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                  Rallo Voice
                </h2>

                <p className="relative self-stretch font-['Inter'] font-normal text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] uppercase">
                  Natural voice interactions that create authentic human-like conversations.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
              <Button
                variant="outline"
                className="h-auto px-6 py-3 border-black text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                data-testid="button-rallo-voice-primary"
              >
                GET STARTED
              </Button>

              <Button
                variant="ghost"
                className="h-auto p-0 text-black font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase"
                data-testid="button-rallo-voice-secondary"
              >
                LEARN MORE
                <ChevronRightIcon className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};