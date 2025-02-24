import GoogleMapComponent from "@/components/properties/MapSection";
import VistaHero3 from "@/components/properties/VistaHero3";
import OverlapCards from "@/components/Symphoni/OverlapCards";
import { imageArray3 } from "@/constants/arraydata";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full border-b border-slate-200 bg-gradient-to-b from-white via-[#fff] to-[#F2ECE4] h-[23vh] flex items-end">
        <p className="mb-10 text-5xl font-extralight md:pl-[7%] text-[#1A3850]">
          Le Jardin Symphonique
        </p>
      </div>

      <div className="p-12 bg-[#254864]">
        <VistaHero3 images={imageArray3} />
      </div>

      <div className="flex mt-8  max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Location
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <GoogleMapComponent />

      <OverlapCards />
    </div>
  );
};

export default page;
