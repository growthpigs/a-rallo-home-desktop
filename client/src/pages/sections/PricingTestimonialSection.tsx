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
        <header className="flex-col max-w-screen-md items-center gap-4 w-full flex">
          <div className="inline-flex items-center">
            <div className="font-['JetBrains_Mono'] font-thin text-black text-sm tracking-[0.2em] text-center uppercase">
              Testimonials
            </div>
          </div>

          <div className="flex-col items-center gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
            <h2 className="relative self-stretch font-['Libre_Baskerville'] font-normal text-black text-5xl text-center leading-tight">
              What our customers say
            </h2>

            <p className="relative self-stretch font-['JetBrains_Mono'] font-thin text-black text-base text-center leading-relaxed">
              Real results from businesses using Rallo AI agents
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-8 border border-gray-200 bg-white"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              <blockquote className="font-['JetBrains_Mono'] font-thin text-black text-sm leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white font-['JetBrains_Mono'] font-normal text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex flex-col">
                  <cite className="font-['JetBrains_Mono'] font-normal text-black text-sm not-italic">
                    {testimonial.name}
                  </cite>
                  <span className="font-['JetBrains_Mono'] font-thin text-gray-600 text-xs">
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