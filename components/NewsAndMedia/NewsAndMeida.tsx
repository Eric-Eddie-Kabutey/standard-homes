"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const properties = [
  {
    name: "January 9, 2025",
    description:
      "Waylead 2024 Workers' Retreat: Building Team Spirit and Celebrating Success.",
  },
  {
    name: "October 31, 2024",
    description:
      "Waylead Properties Unveil 'Willow Lane' Our Latest Housing Project.",
  },
  {
    name: "October 23, 2024",
    description: "Alphabet City: From Phase 1 Success to Phase 2 Evolution",
  },
];

const NewsAndMedia = () => {
  return (
    <div className="bg-[#FDF6EB] py-12 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-8">
          <h1 className="text-3xl text-[#1A293F] font-semibold">News & Media</h1>
          <div className="flex-grow border-t border-[#B58541] ml-4"></div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-[#FAEEDC] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#0D2A47] group cursor-pointer"
            >
              {/* Event Details */}
              <div className="p-6 group-hover:text-white">
                <h2 className="text-2xl text-[#B58541] font-bold mb-4 group-hover:text-white">
                  {property.name}
                </h2>
                <p className="text-md text-[#1A293F] font-semibold mb-6 group-hover:text-white">
                  {property.description}
                </p>
                <Link href={"/#"}>
                  <Button className="bg-[#FAEEDC] border border-[#B58541] text-[#B58541] text-lg hover:bg-[#666666] transition-colors duration-300">
                    Read More &gt;
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

export default NewsAndMedia;