import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const billingOptions = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    features: [
      "10 AI agent interactions",
      "Basic chat support",
      "Single channel presence",
      "Standard analytics",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    features: [
      "25 AI agent interactions",
      "Multi-channel support", 
      "Advanced analytics",
      "Priority email support",
      "Custom branding",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/mo",
    features: [
      "Unlimited AI interactions",
      "Full platform access",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 premium support",
    ],
    recommended: false,
  },
];

export const PricingOptionsSection = (): JSX.Element => {
  const [selectedBilling, setSelectedBilling] = useState("monthly");

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl gap-20 flex items-center w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-8 w-full">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
              PLANS
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              PRICING OPTIONS
            </h2>

            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] uppercase max-w-2xl">
              Choose the perfect plan to power your digital presence.
            </p>
          </div>
        </header>

        <div className="flex-col items-center gap-12 w-full flex">
          <div className="inline-flex items-start p-1 bg-gray-100 rounded-lg">
            {billingOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedBilling(option.id)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-2 rounded-md font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-200 ${
                  selectedBilling === option.id
                    ? "bg-black text-white"
                    : "bg-transparent text-black hover:bg-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-start gap-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`flex flex-col items-end justify-between p-8 h-full bg-white border rounded-lg transition-all duration-200 relative ${
                    plan.recommended 
                      ? "border-2 border-orange-500" 
                      : "border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-6 transform -translate-y-1/2">
                      <Badge className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-['JetBrains_Mono'] tracking-wider uppercase border-0">
                        RECOMMENDED
                      </Badge>
                    </div>
                  )}
                  <CardContent className="flex-col items-end gap-8 w-full flex p-0">
                    <div className="flex flex-col items-start w-full">
                      <div className="flex items-start justify-between w-full mb-4">
                        <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                          {plan.name}
                        </h3>
                      </div>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-black text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                          {plan.price}
                        </span>
                        <span className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 mb-6" />

                    <div className="flex-col items-start gap-4 w-full flex">
                      <p className="font-['Inter'] font-normal text-black text-sm tracking-normal leading-relaxed">
                        Includes:
                      </p>

                      <div className="flex flex-col items-start gap-4 px-0 py-2 w-full">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-4 w-full"
                          >
                            <CheckIcon className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                            <span className="flex-1 font-['Inter'] font-normal text-black text-sm tracking-normal leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <div className="flex flex-col gap-4 w-full items-start mt-8">
                    <Button className={`flex items-center justify-center gap-2 px-6 py-3 w-full border font-['JetBrains_Mono'] font-normal text-sm tracking-[0.2em] uppercase rounded-lg transition-all duration-200 ${
                      plan.recommended
                        ? "bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600"
                        : "bg-black border-black text-white hover:bg-gray-800 hover:border-gray-800"
                    }`}>
                      GET STARTED
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};