import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechStart Inc.",
    content: "Rallo transformed our customer engagement. Our AI agents handle 80% of inquiries automatically while maintaining our brand voice perfectly.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Growth Dynamics",
    content: "The multi-channel presence is incredible. We're now available 24/7 across all platforms without increasing our team size.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Emily Johnson",
    role: "Operations Manager", 
    company: "ScaleUp Solutions",
    content: "Implementation was seamless, and the results were immediate. Our response time went from hours to seconds.",
    rating: 5,
    avatar: "EJ",
  },
];

export const PricingTestimonialSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl gap-20 flex items-center w-full">
        <header className="flex-col max-w-screen-md items-center gap-8 w-full flex">
          <div className="inline-flex items-center">
            <div className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)] text-center uppercase">
              TESTIMONIALS
            </div>
          </div>

          <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
            <h2 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              WHAT OUR CUSTOMERS SAY
            </h2>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] uppercase">
              Real results from businesses using Rallo AI agents.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-8 border border-gray-200 bg-white rounded-lg transition-all duration-200"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              <blockquote className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg font-['JetBrains_Mono'] font-normal text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex flex-col">
                  <cite className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] not-italic">
                    {testimonial.name}
                  </cite>
                  <span className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-gray-600 text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};