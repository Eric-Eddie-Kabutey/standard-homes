import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { JSX } from "react";
import Link from "next/link";

type PriceType = {
  daily: string;
  twoWeeks: string;
  monthly: string;
};

const FeaturesSingle = ({
  amenities,
  price,
  sale = false,
}: {
  amenities: { icon: JSX.Element; label: string }[];
  sale?: boolean;
  price: PriceType;
}) => {
  return (
    <div className="mx-[6%]">
      <div className="container p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Community Amenities & Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Community Amenities and Features
            </h2>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item?.icon}
                  {item?.label}
                </li>
              ))}
            </ul>
          </div>

          {sale === true ? (
            <div>
              <div className="flex flex-col">
                <div className="text-center">
                  <div className="inline-block bg-blue-900 text-white px-10 py-4 rounded-lg text-left">
                    <p className="text-lg font-semibold mb-2">Prices</p>
                    <p className="text-md mb-1">For more info</p>
                    <p className="text-md mb-1">
                      Please contact us via WhatsApp .
                    </p>
                    <p className="text-md mb-1">
                      <span className="font-bold">+220 7922004</span> (WhatsApp){" "}
                      <Link
                        href="https://wa.me/2207922004"
                        target="_blank"
                        className="text-white text-lg"
                      >
                        <FaWhatsapp className="inline-block" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="text-center">
                <div className="inline-block bg-blue-900 text-white px-10 py-4 rounded-lg text-left">
                  <p className="text-lg font-semibold mb-2">Prices</p>
                  <p className="text-md mb-1">
                    2 bedrooms going for{" "}
                    <span className="font-bold">{price.daily}</span> a day
                  </p>
                  <p className="text-md mb-1">
                    <span className="font-bold">{price.twoWeeks}</span> two
                    weeks
                  </p>
                  <p className="text-md mb-1">
                    <span className="font-bold">{price.monthly}</span> monthly
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 gap-3 flex items-center m-auto">
                <Button>Book Now</Button>
                <Button>Enquire Now</Button>
              </div>
            </div>
          )}

          {/* Pricing Section */}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSingle;
