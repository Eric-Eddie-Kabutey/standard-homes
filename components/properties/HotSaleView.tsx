"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type propertyType = {
  id: number;
  price: {
    daily: string;
    twoWeeks: string;
    monthly: string;
  };
  title: string;
  location: string;
  beds: number;
  baths: number;
  kitchen: number;
  new: boolean;
  type: string;
  yearBuilt: number;
  garage: number;
  amenities: { lable: string; icons: React.ReactElement }[];
  image: string[];
  video?: string; // Added optional video property
  description: string;
};

const HotSaleView = ({ properties }: { properties: propertyType }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        {/* Video Player Section */}
        {properties.video ? (
          <Card className="border-none relative overflow-hidden rounded-md h-[450px] md:h-[550px]">
            <video
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-md"
            >
              <source src={properties.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Card>
        ) : (
          // Fallback to first image if no video
          <Card className="border-none relative overflow-hidden rounded-md h-[450px] md:h-[550px]">
            <Image
              src={properties.image[0]}
              alt={`Property image`}
              fill
              className="object-cover rounded-md"
              priority
            />
          </Card>
        )}
      </div>

      {/* Description Section */}
      <div className="pt-8 mx-auto max-w-3xl space-y-7 flex flex-col items-center justify-center">
        <p className="text-white text-xl">{properties.description}</p>
      </div>
    </div>
  );
};

export default HotSaleView;
