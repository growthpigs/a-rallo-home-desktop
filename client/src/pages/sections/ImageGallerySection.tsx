import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import close_up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0 from "@assets/close-up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0.png";

import ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3 from "@assets/ultra_close-up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3.png";

const galleryItems = [
  {
    id: 1,
    title: "Rallo Publisher",
    description: "Instant video content from prompts",
    image: "/figmaAssets/placeholder-image-8.png",
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
  {
    id: 2,
    title: "Rallo Persona",
    description: "Voice on demand for human-like interactions",
    image: "/figmaAssets/placeholder-image-8.png",
    imageHeight: "h-[400px]",
    maxWidth: "max-w-[400px]",
  },
];

export const ImageGallerySection = (): JSX.Element => {
  return (
    <section className="gap-20 px-16 py-28 flex flex-col items-center relative w-full bg-white">
      <div className="flex-col max-w-screen-xl items-start gap-20 w-full flex relative">
        

        <div className="gap-16 flex items-start relative w-full">
          <div className="flex flex-col items-start gap-28 relative flex-1">
            <Card
              className={`flex-col ${galleryItems[0].maxWidth} items-start gap-8 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}
            >
              <CardContent className="p-0 w-full">
                <img
                  className={`w-[400px] ${galleryItems[0].imageHeight} relative object-cover`}
                  alt="Placeholder image"
                  src={close_up_of_hand_in_motion_swiping_across_holographic_display_motion_blur_trails_showing_geometric__xio25a8gqhbcn1vd88kw_0}
                />
                <div className="flex-col items-start gap-4 w-full flex-[0_0_auto] flex relative mt-8">
                  <h3 className="mt-[-1.00px] text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {galleryItems[0].title}
                  </h3>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[0].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-end gap-2.5 pt-[200px] pb-0 px-0 relative flex-1">
            <Card
              className={`flex-col ${galleryItems[1].maxWidth} items-start gap-8 w-full flex-[0_0_auto] flex relative border-none shadow-none bg-transparent`}
            >
              <CardContent className="p-0 w-full">
                <img
                  className={`relative w-full ${galleryItems[1].imageHeight} object-cover`}
                  alt="Placeholder image"
                  src={ultra_close_up_of_slightly_parted_lips_with_floating_geometric_particles_responding_to_breath_inter_hdrkrns7demlr81y8tz4_3}
                />
                <div className="flex-col items-start gap-4 w-full flex-[0_0_auto] flex relative mt-8">
                  <h3 className="mt-[-1.00px] text-[length:var(--heading-h4-font-size)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black tracking-[var(--heading-h4-letter-spacing)] [font-style:var(--heading-h4-font-style)]">
                    {galleryItems[1].title}
                  </h3>
                  <p className="relative font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {galleryItems[1].description}
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
