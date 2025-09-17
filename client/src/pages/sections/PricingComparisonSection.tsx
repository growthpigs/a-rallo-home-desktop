import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "Per month",
    description: "Perfect for small businesses and creators",
  },
  {
    name: "Pro", 
    price: "$29",
    period: "Per month",
    description: "Ideal for growing businesses",
  },
  {
    name: "Enterprise",
    price: "$49", 
    period: "Per month",
    description: "Comprehensive solution for scaling businesses",
  },
];

const featureCategories = [
  {
    title: "Core Features",
    features: [
      {
        name: "AI Agent Interactions",
        values: ["10", "25", "Unlimited"],
      },
      {
        name: "Multi-channel Support",
        values: [false, true, true],
      },
      {
        name: "Advanced Analytics",
        values: [false, true, true],
      },
      {
        name: "Custom Branding",
        values: [false, true, true],
      },
      {
        name: "API Access",
        values: [false, false, true],
      },
    ],
  },
  {
    title: "Support & Training",
    features: [
      {
        name: "Email Support",
        values: ["Basic", "Priority", "24/7"],
      },
      {
        name: "Phone Support",
        values: [false, true, true],
      },
      {
        name: "Dedicated Account Manager",
        values: [false, false, true],
      },
      {
        name: "Training Sessions",
        values: [false, true, true],
      },
      {
        name: "Custom Onboarding",
        values: [false, false, true],
      },
    ],
  },
  {
    title: "Advanced Features",
    features: [
      {
        name: "Custom Integrations",
        values: [false, false, true],
      },
      {
        name: "White-label Options",
        values: [false, false, true],
      },
      {
        name: "Advanced Security",
        values: [false, true, true],
      },
      {
        name: "SLA Guarantee",
        values: [false, false, true],
      },
      {
        name: "Priority Feature Requests",
        values: [false, false, true],
      },
    ],
  },
];

export const PricingComparisonSection = (): JSX.Element => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-gray-50">
      <div className="flex-col max-w-screen-xl gap-20 flex items-center w-full">
        <header className="flex-col max-w-screen-md items-center gap-8 w-full flex">
          <div className="inline-flex items-center">
            <div className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)] text-center uppercase">
              COMPARE
            </div>
          </div>

          <div className="flex-col items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
            <h2 className="relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              DETAILED COMPARISON
            </h2>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] uppercase">
              Compare all features across our pricing plans.
            </p>
          </div>
        </header>

        <div className="flex-col gap-16 w-full flex">
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-left p-6 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    Plan
                  </TableHead>
                  {pricingPlans.map((plan, index) => (
                    <TableHead key={index} className="text-center p-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-black text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-black text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                            {plan.price}
                          </span>
                          <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-gray-600 text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                            /mo
                          </span>
                        </div>
                        <Button className="bg-black text-white hover:bg-gray-800 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] rounded-none px-4 py-2">
                          Get Started
                        </Button>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureCategories.map((category, categoryIndex) => (
                  <>
                    <TableRow key={`category-${categoryIndex}`} className="bg-gray-100">
                      <TableCell 
                        colSpan={4} 
                        className="p-6 font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-black text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]"
                      >
                        {category.title}
                      </TableCell>
                    </TableRow>
                    {category.features.map((feature, featureIndex) => (
                      <TableRow key={`feature-${categoryIndex}-${featureIndex}`} className="border-b border-gray-200">
                        <TableCell className="p-6 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                          {feature.name}
                        </TableCell>
                        {feature.values.map((value, valueIndex) => (
                          <TableCell key={valueIndex} className="p-6 text-center">
                            {typeof value === "boolean" ? (
                              value ? (
                                <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <span className="text-gray-400">—</span>
                              )
                            ) : (
                              <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                                {value}
                              </span>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};