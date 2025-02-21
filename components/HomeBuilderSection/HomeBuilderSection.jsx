"use client";
import Image from "next/image";

export default function TrustedHomebuilder() {
  return (
    <div className="bg-[#0F2A3C] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/home-about.jpg" // Replace with actual image path
              alt="Modern Homes"
              width={700}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-light relative inline-block">
              Ghana’s Trusted Homebuilder
              <span className="block w-full border-t border-yellow-300 mt-2"></span>
            </h2>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              As a leading residential developer in Ghana, Waylead is committed
              to building high-quality and modern homes for Ghanaians. From
              luxurious houses to modern apartments, we are always driven to
              create rich living experiences for you and your family.
            </p>

            {/* Read More Button */}
            <button className="mt-6 px-6 py-3 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-black transition">
              Read More →
            </button>
          </div>
        </div>

      
        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
          <span className="font-medium">Message us 👋</span>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
