import AlfHero from "@/components/properties/AlfHero";
import Feature1 from "@/components/properties/Feature1";
import FloorPlan1 from "@/components/properties/FloorPlan1";
import GoogleMapComponent from "@/components/properties/MapSection";
import { imageArray1 } from "@/constants/arraydata";
import { Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full border-b border-slate-200 bg-[#FBF9F5] h-[35vh] flex items-end">
        <p className="mb-10 text-5xl font-extralight md:pl-[7%] text-[#1A3850] p-2">
          AlphabetCity
        </p>
      </div>

      <div className="p-12 bg-[#254864]">
        <AlfHero images={imageArray1} />
      </div>

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Features & Amenities
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <div className="">
        <div className="grid grid-cols-3 max-md:2 max-sm:1 gap-4 mx-28">
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="https://www.waylead.org/assets/images/properties/alphabet-city/feature-main-entrance-tn.jpg"
              alt="Alphabet City Entrance"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="https://www.waylead.org/assets/images/properties/alphabet-city/feature-apartment-complex-tn.jpg"
              alt="Residential Building"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="https://www.waylead.org/assets/images/properties/alphabet-city/feature-playground-tn.jpg"
              alt="Playground Area"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="https://www.waylead.org/assets/images/properties/alphabet-city/feature-living-area-tn.jpg"
              alt="Living Room"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="https://www.waylead.org/assets/images/properties/alphabet-city/feature-bedroom-tn.jpg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="https://www.waylead.org/assets/images/properties/alphabet-city/feature-kitchen-tn.jpg"
              alt="Kitchen"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Features & Amenities
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <Feature1 />

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Floor Plans
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>


      <FloorPlan1 />

      <div className="flex pt-10 pb-8 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Location
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <GoogleMapComponent/>

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          AlphabetiCity in Social Media
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>


    {/* picture */}
    <div className="m-auto">
        <div className="mx-20">
        <Image
          src="https://www.waylead.org/assets/images/properties/alphabet-city/social-facebook.jpg"
          alt="Alphabet City Social Media"
          width={1000}
          height={600}
          className="w-full h-auto"
        />
        <div className="flex justify-center">
                <button className="flex items-center gap-2 font-medium border border-[#c79c5c] text-[#c79c5c] px-6 py-2 rounded-lg hover:bg-[#666666] hover:border-[#666666] hover:text-white transition-all duration-500 ease-in-out">
                    Follow Le Jardin Symphonique on Instagram
                    <Facebook size={20} />
                </button>
            </div>

        </div>
    </div>

    <div className="m-auto mt-20">
        <div className="mx-20">
        <Image
          src="https://www.waylead.org/assets/images/properties/alphabet-city/social-instagram.jpg"
          alt="Alphabet City Social Media"
          width={1000}
          height={600}
          className="w-full h-auto"
        />
        <div className="flex justify-center">
                <button className="flex items-center gap-2 font-medium border border-[#c79c5c] text-[#c79c5c] px-6 py-2 rounded-lg hover:bg-[#666666] hover:border-[#666666] hover:text-white transition-all duration-500 ease-in-out">
                    Follow Le Jardin Symphonique on Instagram
                    <Facebook size={20} />
                </button>
            </div>

        </div>
    </div>


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
