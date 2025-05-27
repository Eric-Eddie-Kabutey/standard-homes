// import HouseGallery from "@/components/Lands/HouseGallery";
import Gallery from "@/components/Lands/Gallary";
import HousePlan from "@/components/Lands/HousePlan";
import FeaturesSingle from "@/components/properties/FeaturesSingle";
import HotSaleView from "@/components/properties/HotSaleView";
import {
  Layout,
  MountainSnow,
  TreePalm,
  Utensils,
  VolumeX,
} from "lucide-react";
import React from "react";
import { FaWater } from "react-icons/fa";

// property
const propertiy = [
  {
    video: "/sale/WhatsApp Video 2025-05-27 at 10.45.48.mp4",
    id: 1,
    price: {
      daily: "D1,500",
      twoWeeks: "D18,000",
      monthly: "D35,000",
    },
    title: "Relax Waterfront Apartment",
    location: "Bijilo, The Gambia",
    beds: 2,
    baths: 3,
    kitchen: 1,
    new: true,
    type: "Apartment",
    yearBuilt: 2022,
    garage: 1,
    amenities: [
      { label: "Direct Beachfront Access", icon: <FaWater /> },
      { label: "Year-round Outdoor Swimming Pool", icon: <FaWater /> },
      { label: "Lush Garden", icon: <TreePalm /> },
      { label: "Sea View", icon: <MountainSnow /> },
      { label: "Modern Kitchen", icon: <Utensils /> },
      { label: "Spacious Living Room", icon: <Layout /> },
      { label: "Serene Environment", icon: <VolumeX /> },
    ],
    image: [
      "/sale/WhatsApp Image 2025-05-25 at 22.23.34 (1).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.34 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.34 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.34.jpeg",

      "/sale/WhatsApp Image 2025-05-25 at 22.23.35 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.36 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.36 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.36 (4).jpeg",

      "/sale/WhatsApp Image 2025-05-25 at 22.23.36.jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.37 (1).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.37 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.37 (3).jpeg",

      "/sale/WhatsApp Image 2025-05-25 at 22.23.37.jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.38 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.38 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.39 (1).jpeg",

      "/sale/WhatsApp Image 2025-05-25 at 22.23.39 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.39 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.40 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.41 (1).jpeg",

      "/sale/WhatsApp Image 2025-05-25 at 22.23.41 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.41 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.41 (4).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.41.jpeg",

      "/sale/WhatsApp Image 2025-05-25 at 22.23.42 (1).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.42 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.42 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.42.jpeg",

      "/sale/WhatsApp Image 2025-05-25 at 22.23.43 (1).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.43 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.43 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-25 at 22.23.44 (1).jpeg",

      "/sale/WhatsApp Image 2025-05-27 at 10.45.47 (1).jpeg",
      "/sale/WhatsApp Image 2025-05-27 at 10.45.47 (2).jpeg",
      "/sale/WhatsApp Image 2025-05-27 at 10.45.47 (3).jpeg",
      "/sale/WhatsApp Image 2025-05-27 at 10.45.47.jpeg",
    ],
    description:
      "Relax waterfront apartment in Bijilo offers direct beachfront access, a lush garden, and a year-round outdoor swimming pool. Where tenants enjoy Seaview and a serene environment. Featuring two bedrooms, three bathrooms, large Seaview living room and modern kitchen. Seles with an affordable and reasonable price for your comfort and lively experience.",
  },
];

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
    amenities: [];
    image: string[]; // fix type here
    description: string;
    video: string;
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

      <div className="p-12 bg-[#a7a7a8]">
        <HotSaleView properties={propertyFound as propertyType} />
      </div>

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Features & Amenities
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>

      <FeaturesSingle
        sale={true}
        amenities={propertyFound?.amenities as []}
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
