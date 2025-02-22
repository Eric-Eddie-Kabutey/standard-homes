import GoogleMapComponent from "@/components/properties/MapSection";
import VistaHero from "@/components/properties/VistoHero";
import { imageArray2 } from "@/constants/arraydata";
import { Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full border-b border-slate-200 bg-gradient-to-b from-white via-[#fff] to-[#F2ECE4] h-[23vh] flex items-end">
        <p className="mb-10 text-5xl font-extralight md:pl-[7%] text-[#1A3850]">
        Vista del Mare
        </p>
      </div>
      <div className="p-12 bg-[#254864]">
        <VistaHero images={imageArray2} />
      </div>

      <div className="pt-10 pb-8">
        <div className="flex  max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
          <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
            Location
          </h2>
          <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
        </div>
        <p className="ml-[7.4rem]">
          Please <span className="text-[#B78C4C] font-bold">contact us</span> if
          you would like to visit our previously completed properties.
        </p>
      </div>

      <GoogleMapComponent />

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Vista del Mare in Social Media
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <div className="m-auto pb-10">
        <div className="mx-20">
          <Image
            src="https://www.waylead.org/assets/images/properties/vista-del-mare/social-facebook.jpg"
            alt="Alphabet City Social Media"
            width={800}
            height={600}
            className="w-full h-auto"
            layout="responsive"
            unoptimized={true} // Prevent unnecessary Next.js compression

          />
          <div className="flex justify-center">
            <button className="flex items-center gap-2 font-medium border border-[#c79c5c] text-[#c79c5c] px-6 py-2 rounded-lg hover:bg-[#666666] hover:border-[#666666] hover:text-white transition-all duration-500 ease-in-out">
              Follow Le Jardin Symphonique on Instagram
              <Facebook size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
