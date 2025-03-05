import MapSection from "@/components/properties/MapSection";
import SemiHero from "@/components/properties/SemiHero";
import { imageArray } from "@/constants/arraydata";
import React from 'react'
import PaymentPartners from "./PaymentPartners";
import GalleryListing from "./GalleryListing";

const LandLayoutOne = () => {
    return (
        <div>
            <div className="p-12 bg-[#254864]">
                <SemiHero images={imageArray} />
            </div>

            <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
                <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
                    Partners for Easy Payment
                </h2>
                <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
            </div>
            <PaymentPartners />
            <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-2">
                <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
                    Gallery
                </h2>
                <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
            </div>

            <GalleryListing />

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

    )
}

export default LandLayoutOne