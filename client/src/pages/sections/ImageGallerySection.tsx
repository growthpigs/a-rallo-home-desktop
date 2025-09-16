import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PersistentLazyImage } from "@/components/PersistentLazyImage";

import close_up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0 from "@assets/close-up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0.png";

import ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3 from "@assets/ultra_close-up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3.png";

import extreme_macro_of_lips_with_geometric_sound_wave_visualizations_emanating_from_mouth_translucent_ora_xxtbq6yc36jkg2eo00ck_0 from "@assets/extreme_macro_of_lips_with_geometric_sound_wave_visualizations_emanating_from_mouth_translucent_ora_xxtbq6yc36jkg2eo00ck_0.png";

import finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2 from "@assets/finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2.png";

const galleryItems = [
  {
    id: 1,
    title: "Rallo Chat",
    description: "24/7 intelligent chat across all your digital properties.",
    image: extreme_macro_of_lips_with_geometric_sound_wave_visualizations_emanating_from_mouth_translucent_ora_xxtbq6yc36jkg2eo00ck_0,
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 2,
    title: "Rallo Interactive",
    description: "Lifelike AI avatars for personal video interactions.",
    image: finger_pressing_and_holding_floating_holographic_button_interface_element_glowing_brighter_under_su_dz93kguyzfln5bo11mzu_2,
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 3,
    title: "Rallo Publisher",
    description: "Generate marketing videos instantly from text prompts.",
    image: close_up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0,
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 4,
    title: "Rallo Voice",
    description: "Natural voice conversations that sound completely human.",
    image: ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3,
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
];

export const ImageGallerySection = (): JSX.Element => {
  return (
    <section className="gap-20 px-16 py-28 flex flex-col items-center relative w-full bg-white">
      <div className="flex-col max-w-screen-xl items-start gap-20 w-full flex relative">
        

        <div className="grid grid-cols-2 gap-16 w-full">
          {/* Top Row */}
          <div className="flex flex-col items-start gap-8 relative">
            <Card className={`flex-col ${galleryItems[0].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <PersistentLazyImage
                  className={`w-[400px] ${galleryItems[0].imageHeight} relative object-cover`}
                  alt={galleryItems[0].title}
                  src={galleryItems[0].image}
                  width={400}
                  height={400}
                />
                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6">
                  <h3 className=" text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {galleryItems[0].title}
                  </h3>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[0].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-end gap-8 pt-[200px] pb-0 px-0 relative">
            <Card className={`flex-col ${galleryItems[1].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <PersistentLazyImage
                  className={`relative w-full ${galleryItems[1].imageHeight} object-cover`}
                  alt={galleryItems[1].title}
                  src={galleryItems[1].image}
                  width={400}
                  height={400}
                />
                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6">
                  <h3 className=" text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {galleryItems[1].title}
                  </h3>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[1].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col items-start gap-8 relative">
            <Card className={`flex-col ${galleryItems[2].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <PersistentLazyImage
                  className={`w-[400px] ${galleryItems[2].imageHeight} relative object-cover`}
                  alt={galleryItems[2].title}
                  src={galleryItems[2].image}
                  width={400}
                  height={400}
                />
                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6">
                  <h3 className=" text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {galleryItems[2].title}
                  </h3>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[2].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-end gap-8 pt-[200px] pb-0 px-0 relative">
            <Card className={`flex-col ${galleryItems[3].maxWidth} items-start gap-2 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}>
              <CardContent className="p-0 w-full">
                <PersistentLazyImage
                  className={`relative w-full ${galleryItems[3].imageHeight} object-cover`}
                  alt={galleryItems[3].title}
                  src={galleryItems[3].image}
                  width={400}
                  height={400}
                />
                <div className="flex-col items-start gap-3 w-full flex-[0_0_auto] flex relative mt-6">
                  <h3 className=" text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {galleryItems[3].title}
                  </h3>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] uppercase text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[3].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
