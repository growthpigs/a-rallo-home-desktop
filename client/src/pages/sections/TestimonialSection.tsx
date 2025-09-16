import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

import macro_shot_looking_into_ear_with_holographic_interface_elements_visible_inside_geometric_audio_proc_ytgl1vivgheo30z6oz2k_3 from "@assets/macro_shot_looking_into_ear_with_holographic_interface_elements_visible_inside_geometric_audio_proc_ytgl1vivgheo30z6oz2k_3.png";

import close_up_of_wrist_with_floating_interface_projecting_above_skin_geometric_elements_hovering_just_ab_hwr3891441e6jxr1qg05_1 from "@assets/close-up_of_wrist_with_floating_interface_projecting_above_skin_geometric_elements_hovering_just_ab_hwr3891441e6jxr1qg05_1.png";

import finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_ptbyrto9jwtro5o129ra_3 from "@assets/finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_ptbyrto9jwtro5o129ra_3.png";

import ultra_macro_of_half_face_with_geometric_interface_overlay_on_one_side_translucent_technology_integr_h4l9v89ghecyj7gkytzs_3 from "@assets/ultra_macro_of_half_face_with_geometric_interface_overlay_on_one_side_translucent_technology_integr_h4l9v89ghecyj7gkytzs_3.png";

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative w-full bg-[#e6e6e6]">
      <div className="flex flex-col max-w-screen-xl items-start gap-20 relative w-full">
        <div className="flex flex-col items-start gap-20 relative w-full">
          <div className="flex-col max-w-screen-md items-start gap-8 w-full flex relative">
            <div className="flex flex-col items-start gap-4 w-full relative">
              <div className="inline-flex items-center relative">
                <div className="relative w-fit  font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  Tagline
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative w-full">
                <h2 className=" text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                  AI THAT HEARS WHAT YOU DON&#39;T SAY
                </h2>

                <p className="relative font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] uppercase text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-[550px]">
                  Transform passive time into active opportunity. Let your
                  digital presence work continuously, even when you&#39;re not.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 relative">
              <Button
                variant="outline"
                className="h-auto px-6 py-3 border-black text-black hover:bg-black hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
              >
                Get Started
              </Button>

              <Button
                variant="ghost"
                className="h-auto inline-flex items-center justify-center gap-0.5 p-0 hover:bg-transparent font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
              >
                Watch Demo
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        <div className="gap-16 w-full flex items-start relative">
          <img
            className="flex-1 grow h-[624px] relative object-cover"
            alt="Placeholder image"
            src={macro_shot_looking_into_ear_with_holographic_interface_elements_visible_inside_geometric_audio_proc_ytgl1vivgheo30z6oz2k_3}
          />

          <div className="flex-col items-start gap-16 flex-1 grow flex relative">
            <img
              className="w-60 h-60 relative object-cover"
              alt="Placeholder image"
              src={ultra_macro_of_half_face_with_geometric_interface_overlay_on_one_side_translucent_technology_integr_h4l9v89ghecyj7gkytzs_3}
            />

            <img
              className="w-full h-[416px] relative object-cover"
              alt="Placeholder image"
              src={close_up_of_wrist_with_floating_interface_projecting_above_skin_geometric_elements_hovering_just_ab_hwr3891441e6jxr1qg05_1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
