"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const properties = [
  {
    name: "January 9, 2025",
    description:
      "The Gambian property market is experiencing unprecedented growth, with foreign investment increasing by 37% year-over-year. Coastal areas like Kotu and Kololi are seeing particular demand, with property values appreciating 15-20% annually. The government's 99-year lease policy for foreign buyers has created a stable investment environment, while the growing tourism sector fuels demand for vacation rentals. Our market analysis reveals three key trends: (1) European retirees are driving demand for beachfront villas, (2) Gambian diaspora investments now account for 28% of property purchases, and (3) sustainable architecture is becoming a key differentiator for premium developments. With GDP growth projected at 6.2% for 2025, all indicators point to continued market expansion.",
  },
  {
    name: "January 15, 2025",
    description:
      "With over 200,000 annual visitors and a 25% increase in hotel bookings last season, The Gambia's tourism boom is creating exceptional real estate opportunities. Our research identifies three prime investment zones: (1) The Atlantic Coast corridor between Banjul and Kartong, where luxury resorts are achieving 85% occupancy rates year-round; (2) The River Gambia ecotourism belt, where eco-lodges are commanding premium rates from European travelers; and (3) Urban Banjul, where boutique hotels cater to business travelers. The government's new Tourism Development Levy provides tax incentives for hospitality projects, while the growing 'digital nomad' trend has created demand for co-living spaces with high-speed internet. With direct flights now available from 12 European cities, The Gambia's 80km coastline represents West Africa's most promising tourism real estate market.",
  },
  {
    name: "February 5, 2025",
    description:
      "Major infrastructure projects are transforming The Gambia's real estate landscape. The $400 million Banjul-Barra Bridge project, scheduled for completion in 2026, will connect previously isolated northern regions to the capital, opening up new development corridors. Road upgrades along the Trans-Gambia Highway have already reduced travel times by 40%, making suburban areas more accessible. The Gambia's energy sector is undergoing a renewable revolution, with solar capacity increasing 300% since 2022 - critical for supporting modern developments. Telecommunications improvements have brought 4G coverage to 85% of the country, enabling remote work capabilities that appeal to international buyers. These infrastructure advances, combined with the government's Special Economic Zones offering tax holidays, position The Gambia as West Africa's most promising emerging real estate market for global investors.",
  },
];

const NewsAndMedia = () => {
  return (
    <div className="bg-[#FDF6EB] py-12 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-8">
          <h1 className="text-3xl text-[#1A293F] font-semibold">
            News & Media
          </h1>
          <div className="flex-grow border-t border-[#B58541] ml-4"></div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-[#FAEEDC] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#0D2A47] group cursor-pointer"
            >
              {/* Event Details */}
              <div className="p-6 group-hover:text-white">
                <h2 className="text-2xl text-[#B58541] font-bold mb-4 group-hover:text-white">
                  {property.name}
                </h2>
                <p className="text-md text-[#1A293F] font-semibold mb-6 group-hover:text-white line-clamp-3">
                  {property.description}
                </p>
                <Link href={"/news"}>
                  <Button className="bg-[#FAEEDC] border border-[#B58541] text-[#B58541] text-lg hover:bg-[#666666] transition-colors duration-300">
                    Read More &gt;
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndMedia;
