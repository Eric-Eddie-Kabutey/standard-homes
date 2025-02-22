import Features from "@/components/properties/Features";
import FloorPlan from "@/components/properties/FloorPlan";
import MapSection from "@/components/properties/MapSection";
import SemiHero from "@/components/properties/SemiHero";
import { imageArray } from "@/constants/arraydata";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full border-b border-slate-200 bg-[#FBF9F5] h-[35vh] flex items-end">
        <p className="mb-10 text-5xl font-extralight md:pl-[7%] text-[#1A3850] p-2">
          Willow Lane
        </p>
      </div>

      <div className="p-12 bg-[#254864]">
        <SemiHero images={imageArray} />
      </div>

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Features & Amenities
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <Features />

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Floor Plans
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <FloorPlan />

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Location
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <MapSection />

      <div className="bg-[#B78C4C] p-20 text-center flex flex-col items-center justify-center mt-32">
        <h2 className="text-white text-2xl text-center mb-4 max-w-2xl">
          Still have more questions about our properties? Interested in
          reserving your unit?
        </h2>
        <button className="bg-blue-900 text-white py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default page;
