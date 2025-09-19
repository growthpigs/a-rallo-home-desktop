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
      <div className="flex-col max-w-5xl gap-20 flex items-center w-full">
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
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-b-2 border-gray-200 bg-gray-50">
                  <TableHead className="text-left p-4 font-['Inter'] font-medium text-gray-700 text-sm uppercase tracking-wider">
                    Features
                  </TableHead>
                  {pricingPlans.map((plan, index) => (
                    <TableHead key={index} className="text-center p-4 min-w-[150px]">
                      <div className="flex flex-col gap-3 items-center">
                        <h3 className="font-['JetBrains_Mono'] font-medium text-black text-lg">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="font-['JetBrains_Mono'] font-bold text-black text-2xl">
                            {plan.price}
                          </span>
                          <span className="font-['Inter'] text-gray-600 text-sm">
                            /mo
                          </span>
                        </div>
                        <Button className={`w-full px-4 py-2 rounded-lg font-['JetBrains_Mono'] text-xs tracking-wider uppercase transition-all duration-200 ${
                          index === 1 
                            ? "bg-orange-500 text-white hover:bg-orange-600 border-0" 
                            : "bg-black text-white hover:bg-gray-800 border-0"
                        }`}>
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
                    <TableRow key={`category-${categoryIndex}`} className="bg-gray-50 border-y border-gray-200">
                      <TableCell 
                        colSpan={4} 
                        className="p-3 font-['JetBrains_Mono'] font-medium text-black text-sm uppercase tracking-wider"
                      >
                        {category.title}
                      </TableCell>
                    </TableRow>
                    {category.features.map((feature, featureIndex) => (
                      <TableRow key={`feature-${categoryIndex}-${featureIndex}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                        <TableCell className="p-4 font-['Inter'] font-normal text-gray-700 text-sm">
                          {feature.name}
                        </TableCell>
                        {feature.values.map((value, valueIndex) => (
                          <TableCell key={valueIndex} className={`p-4 text-center ${
                            valueIndex === 1 ? "bg-orange-50/30" : ""
                          }`}>
                            {typeof value === "boolean" ? (
                              value ? (
                                <div className="flex justify-center">
                                  <CheckIcon className="w-5 h-5 text-green-600" />
                                </div>
                              ) : (
                                <span className="text-gray-300 text-lg">—</span>
                              )
                            ) : (
                              <span className="font-['Inter'] font-normal text-gray-900 text-sm">
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