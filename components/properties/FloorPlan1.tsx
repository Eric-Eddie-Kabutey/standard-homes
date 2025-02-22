import { ArrowDownToLine, ChevronRight, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

const FloorPlan = () => {
  return (
    <div>
      <div className="container mx-auto mt-12 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-auto mx-20">
          {/* Type A Townhouse */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                src="https://www.waylead.org/assets/images/properties/alphabet-city/floor-plan-tower-a-tn.jpg"
                alt="Type A Townhouse"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">Type A Townhouse</h2>
            <p className="text-gray-600">(300 m² / 3,229 ft²)</p>
          </div>

          {/* Type B Townhouse */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                src="https://www.waylead.org/assets/images/properties/alphabet-city/floor-plan-tower-b-tn.jpg"
                alt="Type B Townhouse"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">Type B Townhouse</h2>
            <p className="text-gray-600">(269 m² / 2,895 ft²)</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-auto max-w-7xl">
          {/* Type A Townhouse */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                src="https://www.waylead.org/assets/images/properties/willow-lane/floor-plan-type-a-tn.jpg"
                alt="Type A Townhouse"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center text-yellow-600 pt-8 space-y-3 font-medium text-pretty text-opacity-70">
              <button className="px-4 py-1 rounded-lg border border-yellow-600 flex space-x-2">
                {" "}
                <Globe /> Virtual Tour <ChevronRight className="mt-1" size={20}/>
              </button>
              <button className="px-4 py-1 rounded-lg border border-yellow-600 flex space-x-2">
                Download Bronchure<ArrowDownToLine />
              </button>
            </div>
          </div>

          {/* Type B Townhouse */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                src="https://www.waylead.org/assets/images/properties/willow-lane/floor-plan-type-b-tn.jpg"
                alt="Type B Townhouse"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center text-yellow-600 pt-8 space-y-3 font-medium text-pretty text-opacity-70">
              <button className="px-4 py-1 rounded-lg border border-yellow-600 flex space-x-2">
                {" "}
                <Globe /> Virtual Tour <ChevronRight className="mt-1" size={20}/>
              </button>
              <button className="px-4 py-1 rounded-lg border border-yellow-600 flex space-x-2">
                Download Bronchure<ArrowDownToLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
