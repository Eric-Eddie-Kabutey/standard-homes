"use client";
import { Instagram } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    price: "D10,000",
    title: "Modern Downtown Apartment",
    location: "Downtown, New York",
    beds: 3,
    baths: 2,
    kitchen: 1,
    new: true,
    type: "Apartment",
    yearBuilt: 2022,
    garage: 1,
    amenities: [
      "Swimming Pool",
      "Gym",
      "Security System",
      "Balcony",
      "Smart Home",
    ],
    image: [
      "/apartment.jpg",
      "/apartment11.jpg",
      "/apartment12.jpg",
      "/apartment13.jpg",
      "/apartment14.jpg",
    ],
    description:
      "This modern downtown apartment features floor-to-ceiling windows with panoramic city views. The open-concept living area includes high-end finishes: quartz countertops, hardwood flooring, and smart home technology. Master suite boasts walk-in closet and spa-like bathroom with heated floors. Building amenities include 24/7 concierge, fitness center, and rooftop lounge.",
  },
  {
    id: 2,
    price: "D15,000",
    title: "Luxury Villa with Pool",
    location: "Beverly Hills, LA",
    beds: 5,
    baths: 4,
    kitchen: 1,
    new: true,
    type: "Villa",
    yearBuilt: 2018,
    garage: 2,
    amenities: [
      "Swimming Pool",
      "Home Theater",
      "Wine Cellar",
      "Smart Home",
      "Garden",
    ],
    image: [
      "/apart.jpg",
      "/apart11.jpg",
      "/apart12.jpg",
      "/apart13.jpg",
      "/apart14.jpg",
    ],
    description:
      "This luxury villa offers unparalleled elegance with 5 spacious bedrooms, 4 modern bathrooms, and 3500 sqft of living space. The property features a state-of-the-art kitchen, a private swimming pool, and a beautifully landscaped garden. Perfect for entertaining, the villa includes a home theater and wine cellar. Located in the heart of Beverly Hills, it provides easy access to top restaurants and shopping.",
  },
  {
    id: 3,
    price: "$280,000",
    title: "Cozy Suburban Home",
    location: "Suburbs, Austin",
    beds: 2,
    baths: 2,
    kitchen: 1,
    new: true,
    type: "Single Family Home",
    yearBuilt: 2020,
    garage: 1,
    amenities: [
      "Backyard",
      "Patio",
      "Fireplace",
      "Energy Efficient",
      "Storage Shed",
    ],
    image: [
      "/apar.jpg",
      "/apar11.jpg",
      "/apar12.jpg",
      "/apar13.jpg",
      "/apar14.jpg",
    ],
    description:
      "This cozy suburban home is perfect for small families or first-time buyers. It features 2 bedrooms, 2 bathrooms, and a spacious backyard with a patio. The home includes modern appliances, a fireplace, and energy-efficient windows. Located in a quiet neighborhood, it offers a peaceful retreat while being close to schools, parks, and shopping centers.",
  },
];

const OverlapCards = () => {
  const [filter, setFilter] = useState("All");

  const filteredProperties =
    filter === "All" ? properties : properties.filter((p) => p.type === filter);

  return (
    <div>
      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-1">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Discover Your Dream Property in The Gambia
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        {["All", "Apartment", "Villa", "Single Family Home"].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-4 py-2 rounded-lg border ${
              filter === option
                ? "bg-[#B78C4C] text-white"
                : "border-[#c79c5c] text-[#c79c5c] hover:bg-[#666666] hover:border-[#666666] hover:text-white transition-all duration-500"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredProperties.map((property) => (
          <div key={property.id} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={property.image[0]}
              alt={property.title}
              width={300}
              height={200}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1A3850]">
              {property.title}
            </h3>
            <p className="text-[#666666]">Location: {property.location}</p>
            <p className="text-[#666666]">
              Beds: {property.beds} | Baths: {property.baths} | Kitchen:{" "}
              {property.kitchen}
            </p>
            <p className="text-[#666666]">
              Garage: {property.garage} | Year Built: {property.yearBuilt}
            </p>
            <p className="text-[#B78C4C] font-bold">Price: {property.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <button className="flex items-center gap-2 font-medium border border-[#c79c5c] text-[#c79c5c] px-6 py-2 rounded-lg hover:bg-[#666666] hover:border-[#666666] hover:text-white transition-all duration-500 ease-in-out">
          Follow on Instagram
          <Instagram size={20} />
        </button>
      </div>
    </div>
  );
};

export default OverlapCards;
