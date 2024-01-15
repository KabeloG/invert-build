import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  monthPrice: number;
  yearPrice: number;
  featuresTitle: string;
  features: string[];
  colourBorder: string;
  isMonthlyPlan: Boolean;
}

export default function PricingCard({
  title,
  monthPrice,
  yearPrice,
  featuresTitle,
  features,
  colourBorder,
  isMonthlyPlan,
}: Props) {
  return (
    <div
      className={`min-w-[426.667px] min-h-[1030px] border ${colourBorder} p-10 rounded-[6px] space-y-8 md:w-1/2`}
    >
      <h2 className="text-2xl">{title}</h2>
      <p className="text-xl">
        For teams that need to create project plans with confidence.
      </p>

      {isMonthlyPlan ? (
        <h1 className="text-5xl font-semibold">R{monthPrice.toFixed(2)}</h1>
      ) : (
        <h1 className="text-5xl font-semibold">R{yearPrice.toFixed(2)}</h1>
      )}
      <p>Per user, per month billed annually R144.00</p>

      <Link href="/contact">
        <button
          className="bg-blue-500 text-white mt-5 px-4 py-2 rounded-[6px] 
          text-xl w-full"
        >
          Contact Sales
        </button>
      </Link>
      <h2 className="text-2xl underline text-center cursor-pointer">
        Purchase Now
      </h2>

      <p>{featuresTitle}</p>

      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          {features.map((feature) => (
            <div className="flex space-x-2">
              <Check size={24} />
              <p className="text-gray-500">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
