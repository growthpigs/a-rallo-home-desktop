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
        <header className="flex-col max-w-screen-md items-center gap-4 w-full flex">
          <div className="inline-flex items-center">
            <div className="font-['JetBrains_Mono'] font-thin text-black text-sm tracking-[0.2em] text-center uppercase">
              Compare
            </div>
          </div>

          <div className="flex-col items-center gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
            <h2 className="relative self-stretch font-['Libre_Baskerville'] font-normal text-black text-5xl text-center leading-tight">
              Detailed comparison
            </h2>

            <p className="relative self-stretch font-['JetBrains_Mono'] font-thin text-black text-base text-center leading-relaxed">
              Compare all features across our pricing plans
            </p>
          </div>
        </header>

        <div className="flex-col gap-16 w-full flex">
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-left p-6 font-['JetBrains_Mono'] font-thin text-black text-sm tracking-[0.1em]">
                    Plan
                  </TableHead>
                  {pricingPlans.map((plan, index) => (
                    <TableHead key={index} className="text-center p-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-['JetBrains_Mono'] font-normal text-black text-lg tracking-[0.1em]">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="font-['Libre_Baskerville'] font-bold text-black text-2xl">
                            {plan.price}
                          </span>
                          <span className="font-['JetBrains_Mono'] font-thin text-gray-600 text-sm">
                            /mo
                          </span>
                        </div>
                        <Button className="bg-black text-white hover:bg-gray-800 font-['JetBrains_Mono'] font-thin text-xs tracking-[0.1em] rounded-none px-4 py-2">
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
                        className="p-6 font-['JetBrains_Mono'] font-normal text-black text-base tracking-[0.1em]"
                      >
                        {category.title}
                      </TableCell>
                    </TableRow>
                    {category.features.map((feature, featureIndex) => (
                      <TableRow key={`feature-${categoryIndex}-${featureIndex}`} className="border-b border-gray-200">
                        <TableCell className="p-6 font-['JetBrains_Mono'] font-thin text-black text-sm">
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
                              <span className="font-['JetBrains_Mono'] font-thin text-black text-sm">
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