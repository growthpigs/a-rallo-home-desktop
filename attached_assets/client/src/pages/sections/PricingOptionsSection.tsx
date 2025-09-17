import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
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
    ],
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
    ],
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
  },
];

export const PricingOptionsSection = (): JSX.Element => {
  const [selectedBilling, setSelectedBilling] = useState("monthly");

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl gap-20 flex items-center w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-4 w-full">
          <Badge
            variant="outline"
            className="inline-flex items-center font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)] border-black bg-white"
          >
            Plans
          </Badge>

          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Pricing options
            </h2>

            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Choose the perfect plan to power your digital presence
            </p>
          </div>
        </header>

        <div className="flex-col items-center gap-12 w-full flex">
          <div className="inline-flex items-start p-1 bg-white border border-solid border-black">
            {billingOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedBilling(option.id)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-2 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] whitespace-nowrap ${
                  selectedBilling === option.id
                    ? "bg-white border border-solid border-black text-black"
                    : "bg-transparent text-black hover:bg-gray-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-start gap-12 w-full">
            <div className="flex h-[583px] items-start gap-8 w-full">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-end justify-between p-8 flex-1 h-full bg-white border border-solid border-black rounded-none"
                >
                  <CardContent className="flex-col items-end gap-8 w-full flex p-0">
                    <div className="flex flex-col items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <h3 className="flex-1 font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-black text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                          {plan.name}
                        </h3>

                        <img
                          className="w-12 h-12"
                          alt="Relume"
                          src="/figmaAssets/relume.svg"
                        />
                      </div>

                      <div className="[font-family:'Roboto',Helvetica] font-normal text-transparent text-[56px] tracking-[0] leading-[56px]">
                        <span className="font-bold text-black leading-[0.1px]">
                          {plan.price}
                        </span>

                        <span className="font-bold text-black text-[32px] leading-[41.6px]">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <img
                      className="w-full h-px object-cover"
                      alt="Divider"
                      src="/figmaAssets/divider-1.svg"
                    />

                    <div className="flex-col items-start gap-4 w-full flex">
                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        Includes:
                      </p>

                      <div className="flex flex-col items-start gap-4 px-0 py-2 w-full">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-4 w-full"
                          >
                            <CheckIcon className="w-6 h-6 text-black" />

                            <span className="flex-1 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <div className="flex flex-col gap-4 w-full items-start">
                    <Button className="flex items-center justify-center gap-2 px-6 py-3 w-full h-auto bg-black border border-solid text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] rounded-none hover:bg-gray-800">
                      Get started
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
