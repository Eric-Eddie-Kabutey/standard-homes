"use client";
import Image from "next/image";
import React from "react";

const images = [
  { name: "Bank of China", img: "/about/window.svg" },
  { name: "BNP Paribas", img: "/about/logo-client-bnp-paribas.svg" },
  { name: "Citi", img: "/about/logo-client-citi.svg" },
  { name: "KFC", img: "/about/logo-client-kfc.svg" },
  { name: "LVMH", img: "/about/logo-client-lvmh.svg" },
  { name: "McDonald's", img: "/about/logo-client-mcdonalds.svg" },
  { name: "Sotheby's", img: "/about/logo-client-sothebys.svg" },
  { name: "Starbucks", img: "/about/logo-client-starbucks.svg" },
  { name: "Yamaha", img: "/about/logo-client-yamaha.svg" },
];

const OurClients = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* Heading */}
      <h1 className="text-3xl mb-8 text-[#344F64]">Our Clients</h1>

      {/* Logo Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-2/3">
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
    </div>
  );
};

export default OurClients;