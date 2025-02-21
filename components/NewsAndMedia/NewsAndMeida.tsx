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
    <div className="bg-[#dbd1c2] py-12 px-4 text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-semibold">News & Media</h1>
          <div className="flex-grow border-t border-[#B58541] ml-4"></div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-[#e7ac58] rounded-lg hover:bg-[#0D2A47] cursor-pointer overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* Event Details */}
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">{property.name}</h2>
                <p className="text-md mb-6">{property.description}</p>
                <Link href={"/#"}>
                  <Button className="bg-[#c9a14c] hover:bg-[#B58541] transition-colors duration-300">
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
