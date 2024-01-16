"use client";

import React, { useState } from "react";
import {
  Building2,
  CalendarDays,
  CalendarMinus,
  Check,
  User,
} from "lucide-react";
import PricingCard from "@/components/PricingCard";

const packages = [
  {
    title: "Basic",
    monthPrice: 0,
    yearPrice: 0,
    featuresTitle: "Manage tasks and personal to-dos:",
    features: [
      "Timeline",
      "Unlimited free viewers",
      "5 Participants",
      "5 GB Storage",
      "Unlimited Projects",
      "Unlimited Project boards",
      "2 Factor Authentication",
      "24/7 Customer Support",
      "1 Company",
      "1 Team",
      "1 Owner",
      "Custom Domain",
    ],
    colourBorder: "border-gray-500",
  },
  {
    title: "Premium",
    monthPrice: 12.0,
    yearPrice: 129.99,
    featuresTitle: "Everything in Basic, plus:",
    features: [
      "Unlimited free viewers",
      "Unlimited Participants",
      "100 GB Storage",
      "Unlimited Projects",
      "Unlimited Project boards",
      "Forms",
      "Rules",
      "Permissions",
      "Builder",
      "Search",
      "Milestones",
    ],
    colourBorder: "border-purple-500",
  },
  {
    title: "Business",
    monthPrice: 39.0,
    yearPrice: 329.99,
    featuresTitle: "Everything in Premium, plus:",
    features: [
      "Portfolios",
      "Product Roadmap",
      "Calendar",
      "Timeline",
      "Gantt Chart",
      "Advanced Integrations",
      "Forms",
      "Rules",
      "Permissions",
      "Builder",
      "Search",
      "Milestones",
    ],
    colourBorder: "border-teal-500",
  },
];

export default function Page() {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  return (
    <main className="flex flex-col space-y-10 items-center justify-center mt-20 pb-20 overflow-x-hidden">
      <section className="flex flex-col space-y-6 text-center pt-20 px-10 md:px-0">
        <h3 className="text-gray-600 text-xl">PRICING</h3>
        <h1 className="text-5xl">Easily organize your work. Start free.</h1>
        <h2 className="text-2xl text-gray-500">
          Access Delaware's features. No credit card required
        </h2>
      </section>

      <div className="flex px-10 space-x-1 md:px-0">
        <button
          className={`${
            isMonthlyPlan
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          } p-4 rounded-l-[6px] focus:outline-none w-40 md:w-80`}
          onClick={() => setIsMonthlyPlan(true)}
        >
          <div className="flex items-center justify-center space-x-4">
            <CalendarMinus size={24} />
            <h3 className="text-2xl">Monthly</h3>
          </div>
        </button>

        <button
          className={`${
            !isMonthlyPlan
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          } p-4 rounded-r-[6px] focus:outline-none w-40 md:w-80`}
          onClick={() => setIsMonthlyPlan(false)}
        >
          <div className="flex items-center justify-center space-x-4">
            <CalendarDays size={24} />
            <h3 className="text-2xl">Yearly</h3>
          </div>
        </button>
      </div>

      <section
        className="flex flex-col p-10 space-y-10 items-center 
        justify-center md:flex-row md:space-x-10 md:space-y-0 md:w-3/4 
        md:mx-auto"
      >
        {packages.map(
          ({
            title,
            monthPrice,
            yearPrice,
            featuresTitle,
            features,
            colourBorder,
          }) => (
            <PricingCard
              title={title}
              monthPrice={monthPrice}
              yearPrice={yearPrice}
              featuresTitle={featuresTitle}
              features={features}
              colourBorder={colourBorder}
              isMonthlyPlan={isMonthlyPlan}
            />
          )
        )}
      </section>
    </main>
  );
}
