import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

import clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3 from "@assets/clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3.png";

import extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0 from "@assets/extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0.png";

import professional_hands_interacting_with_translucent_holographic_interfaces_soft_blue_lighting_minimal_m_35c315trc3vo2sfe4ki2_0 from "@assets/professional_hands_interacting_with_translucent_holographic_interfaces_soft_blue_lighting_minimal_m_35c315trc3vo2sfe4ki2_0.png";

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="items-start gap-16 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-20 relative flex-1 grow">
            <header className="flex flex-col items-start gap-4 self-stretch flex-[0_0_auto] relative w-full">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  Tagline
                </div>
              </div>

              <h2 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                BUILD YOUR OWN AI SAAS BUSINESS
              </h2>
            </header>

            <img
              className="w-[400px] h-[400px] relative object-cover"
              alt="Placeholder image"
              src={clean_minimal_control_room_with_large_geometric_displays_showing_organized_workflows_natural_lighti_zlk2rp9lxeueapcf5yow_3}
            />
          </div>

          <div className="flex flex-col items-start gap-20 relative flex-1 grow">
            <div className="items-start justify-end gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="justify-end gap-2 pt-[148px] pb-0 px-0 flex-1 grow flex items-start relative">
                <img
                  className="w-[296px] h-[296px] relative object-cover"
                  alt="Placeholder image"
                  src={extreme_macro_of_ear_with_geometric_sound_wave_patterns_entering_canal_translucent_audio_interface__0rtmu3o5u74o14cj9xcg_0}
                />
              </div>

              <div className="justify-end gap-2 pt-[74px] pb-0 px-0 flex-1 grow flex items-start relative">
                <img
                  className="w-[296px] h-[296px] relative object-cover"
                  alt="Placeholder image"
                  src={professional_hands_interacting_with_translucent_holographic_interfaces_soft_blue_lighting_minimal_m_35c315trc3vo2sfe4ki2_0}
                />
              </div>
            </div>

            <div className="flex-col items-start gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
              <p className="relative self-stretch mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>

              <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 border-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Button
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto p-0 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Button
                  <ChevronRightIcon className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
