import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
    title: "Feature Category",
    features: [
      {
        name: "Feature text goes here",
        values: ["10", "25", "Unlimited"],
      },
      {
        name: "Feature text goes here",
        values: [true, true, true],
      },
      {
        name: "Feature text goes here",
        values: [true, true, true],
      },
      {
        name: "Feature text goes here",
        values: [false, true, true],
      },
      {
        name: "Feature text goes here",
        values: [false, false, true],
      },
    ],
  },
  {
    title: "Feature Category",
    features: [
      {
        name: "Feature text goes here",
        values: ["10", "25", "Unlimited"],
      },
      {
        name: "Feature text goes here",
        values: [true, true, true],
      },
      {
        name: "Feature text goes here",
        values: [true, true, true],
      },
      {
        name: "Feature text goes here",
        values: [false, true, true],
      },
      {
        name: "Feature text goes here",
        values: [false, false, true],
      },
    ],
  },
  {
    title: "Feature Category",
    features: [
      {
        name: "Feature text goes here",
        values: ["10", "25", "Unlimited"],
      },
      {
        name: "Feature text goes here",
        values: [true, true, true],
      },
      {
        name: "Feature text goes here",
        values: [true, true, true],
      },
      {
        name: "Feature text goes here",
        values: [false, true, true],
      },
      {
        name: "Feature text goes here",
        values: [false, false, true],
      },
    ],
  },
];

export const PricingSection = (): JSX.Element => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="flex-col max-w-screen-xl gap-20 flex items-center w-full">
        <header className="flex-col max-w-screen-md items-center gap-4 w-full flex">
          <div className="inline-flex items-center">
            <div className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
              Compare
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Plan comparison
            </h2>

            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-black text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Find the perfect plan to multiply your digital presence
            </p>
          </div>
        </header>

        <div className="flex-col items-center gap-12 w-full flex">
          <ToggleGroup
            type="single"
            value={billingPeriod}
            onValueChange={setBillingPeriod}
            className="inline-flex items-start p-1 bg-white border border-solid border-black"
          >
            <ToggleGroupItem
              value="monthly"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white border border-solid border-black data-[state=on]:bg-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex flex-col items-start gap-12 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="w-full border-b border-black flex items-start">
                <div className="w-[420px] h-[319px]" />

                {pricingPlans.map((plan, index) => (
                  <Card
                    key={plan.name}
                    className="flex flex-col items-center gap-8 px-6 py-8 flex-1 border-l border-black border-t-0 border-r-0 border-b-0 rounded-none"
                  >
                    <CardContent className="flex flex-col items-start gap-4 w-full p-0">
                      <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-black text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                        {plan.name}
                      </h3>

                      <div className="flex-col items-start w-full flex">
                        <div className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-black text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                          {plan.price}
                        </div>

                        <div className="font-text-regular-bold font-[number:var(--text-regular-bold-font-weight)] text-black text-[length:var(--text-regular-bold-font-size)] tracking-[var(--text-regular-bold-letter-spacing)] leading-[var(--text-regular-bold-line-height)] [font-style:var(--text-regular-bold-font-style)]">
                          {plan.period}
                        </div>
                      </div>

                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {plan.description}
                      </p>
                    </CardContent>

                    <div className="flex flex-col gap-4 w-full">
                      <Button className="flex items-center justify-center gap-2 px-6 py-3 w-full h-auto bg-black border border-solid text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] hover:bg-black/90">
                        Get started
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              <Table className="w-full border-collapse">
                <TableBody>
                  {featureCategories.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <TableRow className="border-b border-black">
                        <TableHead
                          className="px-0 py-5 text-left font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-black text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]"
                          colSpan={4}
                        >
                          {category.title}
                        </TableHead>
                      </TableRow>

                      {category.features.map((feature, featureIndex) => (
                        <TableRow
                          key={featureIndex}
                          className="border-b border-black"
                        >
                          <TableCell className="w-[420px] gap-3 pl-0 pr-6 py-4 border-r border-black font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                            {feature.name}
                          </TableCell>

                          {feature.values.map((value, valueIndex) => (
                            <TableCell
                              key={valueIndex}
                              className="border-r border-black flex items-center justify-center gap-3 px-6 py-4 flex-1 last:border-r-0"
                            >
                              {typeof value === "boolean" ? (
                                value ? (
                                  <CheckIcon className="w-6 h-6" />
                                ) : null
                              ) : (
                                <div className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] text-center tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                                  {value}
                                </div>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
