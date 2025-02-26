import React from "react";
import { Route, ShieldCheck, Trophy, Building, Lightbulb } from "lucide-react";

const Overviews = [
  {
    title: "Our Journey",
    body: "For over a decade, Waylead has embarked on an incredible journey, transforming the landscape of Ghana with our iconic developments.",
    icon: <Route className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Commitment to Quality",
    body: "At Waylead, quality is the cornerstone of everything we do. We take great pride in our meticulous attention to detail, superior craft",
    icon: <ShieldCheck className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Awards and Recognition",
    body: "Our commitment to excellence has not gone unnoticed. Over the years, Waylead has garnered numerous accolades and prestigious awards",
    icon: <Trophy className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Leading Developer",
    body: "Waylead has emerged as one of the leading developers in Ghana, spearheading transformative projects that have redefined urban",
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
