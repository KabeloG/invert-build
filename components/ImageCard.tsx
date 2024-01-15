import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  actionText: string;
};

export default function ImageCard({ image, title, actionText }: Props) {
  return (
    <div className="bg-white rounded-[5px] p-8 max-w-[448px] max-h-[450px]">
      <Image
        src={image}
        alt="card image"
        width={400}
        height={400}
        className="w-96"
      />

      <div className="mt-6 space-y-4">
        <h2 className="text-gray-800 text-2xl font-medium">{title}</h2>

        <div className="flex items-center justify-between cursor-pointer">
          <h3 className="text-gray-800 text-lg">{actionText}</h3>
          <ArrowRight className="h-6 w-6 text-gray-800" />
        </div>
      </div>
    </div>
  );
}
