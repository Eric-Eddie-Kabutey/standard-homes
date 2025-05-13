// import GoogleMapComponent from "@/components/properties/MapSection";
import VistaHero from "@/components/properties/VistoHero";
import { imageArray2 } from "@/constants/arraydata";
import Image from "next/image";
// import { Facebook } from "lucide-react";
// import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full border-b border-slate-200 bg-gradient-to-b from-white via-[#fff] to-[#F2ECE4] h-[23vh] flex items-end">
        <p className="mb-10 text-5xl font-extralight md:pl-[7%] text-[#1A3850]">
          Offices
        </p>
      </div>
      <div className="p-12 bg-[#254864]">
        <VistaHero images={imageArray2} />

        <p className="text-white text-xl text-center">
          <p className="text-white text-xl text-center">
            <p className="text-white text-xl text-center">
              Rent out furnished or unfurnished 2 or 3 rooms with Hall and
              reception. At an affordable price
            </p>
          </p>
        </p>
      </div>

      {/* no office available message */}
      {/* <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-10">
        <p className="text-center text-xl text-[#1A3850] font-extralight">
          No office available at this time. Please check back later.
        </p>
      </div> */}

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

      {/* <GoogleMapComponent /> */}

      <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
        <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
          Photos
        </h2>
        <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
      </div>
      {/* 
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
      </div> */}
      <div className="">
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:1 gap-4 md:mx-28">
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.09.jpeg"
              alt="Alphabet City Entrance"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.10 (2).jpeg"
              alt="Residential Building"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.10 (4).jpeg"
              alt="Playground Area"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.10.jpeg"
              alt="Living Room"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.11 (1).jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.11.jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.12 (1).jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.12 (2).jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.13 (2).jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.12 (2).jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.12 (4).jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-3 md:col-span-1 p-4">
            <Image
              src="/offices/WhatsApp Image 2025-05-13 at 16.02.12.jpeg"
              alt="Bedroom"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
