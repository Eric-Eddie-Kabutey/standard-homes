import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Feature1 = () => {
  return (
    <div className="m-auto">
      <div className="container max-w-[89rem] mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Community Amenities & Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
            Amenities
            </h2>
            <ul className="space-y-2">
              {[
                "Lush landscaped garden",
                "Private picnic and leisure area",
                "24/7 security",
                "Gated community",
                "Swimming pool",
                "Children’s playground",
                "Multipurpose Sports Court",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-2"><Check strokeWidth={3} /></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Design Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Design Features</h2>
            <ul className="space-y-2">
              {[
                "Open floor plan",
                "Modern equipped kitchen",
                "Beautiful marble kitchen counter",
                "On-site power and water",
                "24/7 security",
                "Customization options",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-2"><Check strokeWidth={3} /></span> {item}
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
                {[
                  "logo-ecobank.svg",
                  "logo-fidelity-bank.svg",
                  "logo-fnb.svg",
                  "logo-stanbic-bank.jpg",
                  "logo-republic-bank.svg",
                  "logo-wells-fargo.svg",
                ].map((logo, index) => (
                  <div key={index} className="w-32 h-16 relative">
                    <Image
                      src={`/${logo}`}
                      alt="Bank Logo"
                      layout="fill"
                      objectFit="contain"
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

export default Feature1;
