import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="mx-[6%]">
      <div className="container p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Community Amenities & Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Community Amenities and Features
            </h2>
            <ul className="space-y-2">
              {[
                "Tranquil spacious back yard/picnic area",
                "2-car detached garage",
                "Pet-friendly community",
                "5-minute walk to the beach at Old Sheraton",
                "Ample yard parking",
                "Internet/WiFi",
                "Water",
                "Electricity",
                "Gated estate",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-2">
                    <Check strokeWidth={3} />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Design Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Design Features</h2>
            <ul className="space-y-2">
              {[
                "Stainless steel appliances",
                "Refrigerator",
                "Gas stove",
                "Microwave",
                "Front and back balcony",
                "Patios",
                "Kitchen/Dining area",
                "ACs",
                "Standing showers & bathtub",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-2">
                    <Check strokeWidth={3} />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            {" "}
            {/* Pricing Section */}
            <div className=" text-center">
              <div className="inline-block bg-blue-900 text-white px-10 py-4 rounded-lg">
                <p className="text-lg">Luxurious Residences from</p>
                <p className="text-3xl font-bold">USD 276,000</p>
              </div>
            </div>
            {/* Payment Partners */}
            <div className="mt-12 text-center">
              <h2 className=" mb-4">
                Convenient local and international partners for easy payment
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {["logo-ecobank.svg", "download.png"].map((logo, index) => (
                  <div key={index} className="w-32 h-16 relative">
                    <Image
                      src={`/${logo}`}
                      alt="Bank Logo"
                      layout="fill"
                      objectFit="contain"
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
