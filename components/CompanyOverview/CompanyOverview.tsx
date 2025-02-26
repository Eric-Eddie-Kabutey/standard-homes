import React from "react";
import { Route, ShieldCheck, Trophy, Building, Lightbulb } from "lucide-react";

const Overviews = [
  {
    title: "Our Journey",
    body: "For over a decade, Standard Homes has been proudly transforming The Gambia’s landscape with standout, impactful projects that make a real and lasting difference.",
    icon: <Route className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Commitment to Quality",
    body: "At Standard Homes, quality is what drives us. We care deeply about getting every detail right, crafting with skill, and making sure we deliver nothing but the best for you.",
    icon: <ShieldCheck className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Awards and Recognition",
    body: "Our dedication to excellence hasn’t gone unnoticed. Over the years, Standard Homes has earned numerous accolades, prestigious awards, and widespread recognition.",
    icon: <Trophy className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Leading Developer",
    body: "Standard Homes has grown into one of The Gambia’s top developers, creating projects that have truly changed the way people live and work in urban areas.",
    icon: <Building className="w-10 h-10 text-[#B78C4C]" />,
  },
];

const CompanyOverview = () => {
  return (
    <div className="flex justify-center items-center  bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-16 max-w-[90%] w-full">
        {Overviews?.map((overview, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-white px-3 py-7 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
          >
            {overview.icon}
            <h2 className="text-2xl mb-6 text-[#344F64]">{overview.title}</h2>
            <p className=" font-semibold text-gray-700">
              {overview.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyOverview;
