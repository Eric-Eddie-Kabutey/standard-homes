import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const HousePlan = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 m-auto">
          {/* Type B Townhouse */}
          <div className="text-center">
            {/* <div className="flex justify-center">
              <Image
                src="https://www.waylead.org/assets/images/properties/willow-lane/floor-plan-type-a.jpg"
                alt="Type B Townhouse"
                width={1000}
                height={900}
                className="rounded-md shadow-lg"
              />
            </div> */}
            <div className="flex flex-col md:flex-row items-center justify-center text-yellow-600 pt-8 space-x-3 font-medium text-pretty text-opacity-70">
              <Link
                href="#"
                className="px-4 py-1 rounded-lg border border-gray-400 flex justify-center items-center space-x-2   text-gray-400"
              >
                {" "}
                <span>Virtual Tour</span> <ChevronRight />
              </Link>
              <Link
                href="https://www.google.com/maps/place/Brufut+Gardens+Estate/@13.3912443,-16.7611298,17z/data=!3m1!4b1!4m6!3m5!1s0xec297ab62cbe989:0xf54e0432a5aae5cc!8m2!3d13.3912391!4d-16.7585549!16s%2Fg%2F11rfqnrsr6?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                className="px-4 py-1 rounded-lg border border-yellow-600 flex justify-center items-center space-x-2"
                target="_blank"
              >
                <span>Get Direction</span>
                <FaLocationArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousePlan;
