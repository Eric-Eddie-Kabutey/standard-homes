// import HouseGallery from "@/components/Lands/HouseGallery";
import Gallery from "@/components/Lands/Gallary";
import HousePlan from "@/components/Lands/HousePlan";
import FeaturesSingle from "@/components/properties/FeaturesSingle";
import SinglePropertyThumelView from "@/components/properties/SinglePropertyThumelView";
import { propertiy } from "@/constants/arraydata";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  type propertyType = {
    id: number;
    price: {
      daily: string;
      twoWeeks: string;
      monthly: string;
    };
    title: string;
    location: string;
    beds: number;
    baths: number;
    kitchen: number;
    new: boolean;
    type: string;
    yearBuilt: number;
    garage: number;
    amenities: string[];
    image: string[]; // fix type here
    description: string;
  };
  // filter property by id
  const propertyFound = propertiy.find(
    (property) => property.id === Number(slug)
  );

  //   features

  return (
    <div>
      <div className="w-full border-b border-slate-200 bg-gradient-to-b from-white via-[#fff] to-[#F2ECE4] h-[23vh] flex items-end">
        <p className="mb-10 text-3xl md:text-4xl font-extralight md:pl-[7%] text-[#1A3850]">
          {propertyFound?.title}
        </p>
      </div>

      <div className="p-12 bg-[#254864]">
        <SinglePropertyThumelView properties={propertyFound as propertyType} />
      </div>

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Features & Amenities
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <FeaturesSingle
        amenities={propertyFound?.amenities as string[]}
        price={propertyFound?.price ?? { daily: "", twoWeeks: "", monthly: "" }}
      />

      {/* Warehouse Section Not Available */}
      {/* <div className="max-w-7xl m-auto my-10">
        <p className="text-center text-gray-500 italic">
          Note: This is no warehouse available at the moment.
        </p>
      </div> */}

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Gallery
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <Gallery images={propertyFound?.image as string[]} />

      {/* <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Floor Plan
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>
      <div className="max-w-7xl m-auto">
        <h2 className="text-center text-3xl font-extralight ">
          Floor Plan not available
        </h2>
      </div> */}

      <HousePlan />

      {/* <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Location
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>
      <MapSection /> */}

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
