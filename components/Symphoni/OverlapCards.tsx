"use client";
import { ArrowRight, Instagram } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { propertiy } from "@/constants/arraydata";
import { Button } from "../ui/button";
import Link from "next/link";

const OverlapCards = () => {
  const [filter, setFilter] = useState("All");

  const filteredProperties =
    filter === "All" ? propertiy : propertiy.filter((p) => p.type === filter);

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
            <div className="w-full h-52 relative rounded-lg overflow-hidden mb-4">
              <Image
                src={property.image[0]}
                alt={property.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                priority
              />
            </div>
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
            <p className="text-[#B78C4C] font-bold">
              Price:
              <br />2 bedrooms going for {property.price.daily} a day
              <br />
              {property.price.twoWeeks} for two weeks
              <br />
              {property.price.monthly} monthly
            </p>

            <div className="mt-4">
              <Link href={`/properties/symphonique/${property.id}`}>
                <Button variant={"outline"} className="border-yellow-600 ">
                  View Property <ArrowRight />
                </Button>
              </Link>
            </div>
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
