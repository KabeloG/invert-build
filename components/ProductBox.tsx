import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  colour?: string;
  percentage: number;
  text: string;
};

export default function ProductBox({ image, colour, percentage, text }: Props) {
  return (
    <div
      className={`w-80 text-${colour} border border-gray-400 p-8 rounded-[5px]`}
    >
      <div className="flex items-center space-x-2">
        <Image
          src={image}
          width={250}
          height={250}
          alt="logo"
          className="h-20 w-20"
        />

        <h2 className="text-3xl">{percentage}% +</h2>
      </div>

      <p className="pt-4 w-80">{text}</p>
    </div>
  );
}
