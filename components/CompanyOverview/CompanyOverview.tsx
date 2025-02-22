"use client";
import React from "react";
import { Route, ShieldCheck, Trophy, Building, Lightbulb } from "lucide-react";

const Overviews = [
  {
    title: "Our Journey",
    body: "For over a decade, Waylead has embarked on an incredible journey, transforming the landscape of Ghana with our iconic developments. Our vision to create exceptional living spaces has driven us to push boundaries, explore new horizons, and set new benchmarks in the real estate sector.",
    icon: <Route className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Commitment to Quality",
    body: "At Waylead, quality is the cornerstone of everything we do. We take great pride in our meticulous attention to detail, superior craftsmanship, and the use of premium materials to deliver homes that are not only beautiful but also built to stand the test of time. Every project we undertake bears the unmistakable hallmark of excellence that has become synonymous with the Waylead name.",
    icon: <ShieldCheck className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Awards and Recognition",
    body: "Our commitment to excellence has not gone unnoticed. Over the years, Waylead has garnered numerous accolades and prestigious awards, acknowledging our unwavering dedication to raising the bar in the real estate industry. These accolades serve as a testament to our team’s hard work, creativity, and unmatched passion for building homes that truly make a difference.",
    icon: <Trophy className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Leading Developer in Ghana",
    body: "Waylead has emerged as one of the leading developers in Ghana, spearheading transformative projects that have redefined urban living in the country. With a deep understanding of the local market and an unparalleled commitment to customer satisfaction, we have earned the trust and loyalty of numerous homeowners, investors, and partners.",
    icon: <Building className="w-10 h-10 text-[#B78C4C]" />,
  },
  {
    title: "Our Philosophy",
    body: "At Waylead, we believe that a home is more than just bricks and mortar; it is a reflection of dreams, aspirations, and lasting memories. We are driven by a philosophy that places the customer at the heart of every decision we make. Our dedicated team of professionals works tirelessly to create living spaces that not only meet but exceed expectations, enriching lives and creating communities that flourish.",
    icon: <Lightbulb className="w-10 h-10 text-[#B78C4C]" />,
  },
];

const CompanyOverview = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-16 max-w-7xl w-full">
        {Overviews.map((overview, index) => (
          <div key={index} className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg">
            {overview.icon}
            <h2 className="text-2xl mb-6 text-[#344F64]">{overview.title}</h2>
            <p className="text-justify font-semibold text-gray-700">{overview.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyOverview;