"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { properties } from "@/constants/arraydata";

const OurProperties = () => {
  return (
    <div className="bg-[#0D2A47] py-16 text-white">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
        {/* Heading */}

        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-semibold">Hot Sales</h1>
          <div className="flex-grow border-t border-[#B58541] ml-4"></div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties?.map((property) => (
            <div
              key={property.name}
              className="bg-[#B58541] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300"
            >
              {/* Image with Hover Effect */}
              <div className="relative w-full h-[250px] md:h-[400px] lg:h-[420px] overflow-hidden">
                <Image
                  src={property?.img}
                  alt={property?.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>

              {/* Property Details */}
              <div className="p-4 text-white">
                <h2 className="text-2xl font-bold mb-2">{property?.name}</h2>
                <p className="text-lg mb-4">{property?.description}</p>
                <Link href={property?.link}>
                  <Button className="bg-[#0D2A47] text-white hover:bg-[#0B213A] transition-colors duration-300">
                    More Details &gt;
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProperties;
