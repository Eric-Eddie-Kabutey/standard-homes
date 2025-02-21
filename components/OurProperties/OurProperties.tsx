"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const properties = [
  {
    name: "Willow Lane",
    description: "Lush townhouses built with love",
    img: "/about/home-card.jpg",
  },
  {
    name: "AlphabetCity",
    description: "Modern apartment in Tema",
    img: "/about/home-card (1).jpg",
  },
  {
    name: "Le Jardin Symphonique",
    description: "Spacious houses in great community",
    img: "/about/home-card (3).jpg",
  },
  {
    name: "Vista del Mare",
    description: "Luxurious houses near airport",
    img: "/about/home-card (4).jpg",
  },
];

const OurProperties = () => {
  return (
    <div className="bg-[#0D2A47] py-12 px-4 text-white">
      <div className="container mx-auto">
        {/* Heading */}
        
        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-semibold">Our Properties</h1>
          <div className="flex-grow border-t border-[#B58541] ml-4"></div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-[#B58541] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image with Hover Effect */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={property.img}
                  alt={property.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Property Details */}
              <div className="p-4 text-white">
                <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
                <p className="text-lg mb-4">{property.description}</p>
                <Button className="bg-[#0D2A47] text-white hover:bg-[#0B213A] transition-colors duration-300">
                  More Details &gt;
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProperties;