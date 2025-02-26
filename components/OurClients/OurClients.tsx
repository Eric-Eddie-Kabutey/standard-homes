"use client";
import Image from "next/image";
import React from "react";

const images = [
  { name: "Emiri Fintech", img: "/RESIZE.png" },
  { name: "BNP Paribas", img: "/powercon.png" },
  { name: "Citi", img: "https://www.riciacare.com/_next/image?url=%2FRICIA%20CARE%20Final%20Logo.png&w=2048&q=75" },
  { name: "KFC", img: "https://oneworldfinancials.com/ONEworldLOGO1-1.svg" },
];

const OurClients = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* Heading */}
      <h1 className="text-3xl mb-8 text-[#344F64]">Our Clients</h1>

      {/* Logo Grid */}
      <div className="flex justify-center gap-10 flex-wrap items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={image.img}
                alt={image.name}
                width={120} // Adjust width as needed
                height={80} // Adjust height as needed
                className="object-contain h-16 w-auto"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurClients;