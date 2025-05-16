import React from "react";
import Link from "next/link";
import { Building, HandCoins, Droplets } from "lucide-react";

const Sitemap = () => {
  return (
    <div className="sitemap-container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Website Sitemap</h1>
      <p className="text-gray-600 mb-8">
        Explore all pages available on Standard Homes Gambia
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Main Navigation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Main Navigation
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-blue-600 hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link href="/inquire" className="text-blue-600 hover:underline">
                Inquire
              </Link>
            </li>
          </ul>
        </section>

        {/* Properties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Properties
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/listings" className="text-blue-600 hover:underline">
                Rental Apartments
              </Link>
            </li>
            <li>
              <Link
                href="/properties/symphonique"
                className="text-blue-600 hover:underline"
              >
                Houses For Sale
              </Link>
            </li>
            <li>
              <Link
                href="/properties/vista-del-mare"
                className="text-blue-600 hover:underline"
              >
                Offices
              </Link>
            </li>
            <li>
              <Link
                href="/properties/lands"
                className="text-blue-600 hover:underline"
              >
                Lands
              </Link>
            </li>
            <li>
              <Link
                href="/properties/willow-lane"
                className="text-blue-600 hover:underline"
              >
                Warehouses
              </Link>
            </li>
          </ul>
        </section>

        {/* Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Services
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {/* General Construction */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-gray-700" />
                <h3 className="font-medium text-gray-800">
                  GENERAL CONSTRUCTION
                </h3>
              </div>
              <ul className="ml-7 space-y-1">
                <li>
                  <Link
                    href="/general-construction#assets"
                    className="text-blue-600 hover:underline"
                  >
                    Assets Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/general-construction#architect"
                    className="text-blue-600 hover:underline"
                  >
                    Architectural Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/general-construction#commerce"
                    className="text-blue-600 hover:underline"
                  >
                    Commercial & Residential Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/general-construction#construction"
                    className="text-blue-600 hover:underline"
                  >
                    Construction Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/general-construction#interior"
                    className="text-blue-600 hover:underline"
                  >
                    Interior Decoration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sales & Supply */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <HandCoins className="w-5 h-5 text-gray-700" />
                <h3 className="font-medium text-gray-800">SALES & SUPPLY</h3>
              </div>
              <ul className="ml-7 space-y-1">
                <li>
                  <Link
                    href="/sales-supply#sales"
                    className="text-blue-600 hover:underline"
                  >
                    Sales & Leasing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sales-supply#property"
                    className="text-blue-600 hover:underline"
                  >
                    Property Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Water Services */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5 text-gray-700" />
                <h3 className="font-medium text-gray-800">WATER SERVICES</h3>
              </div>
              <ul className="ml-7 space-y-1">
                <li>
                  <Link
                    href="/water#borehole"
                    className="text-blue-600 hover:underline"
                  >
                    Borehole Drilling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/water#extension"
                    className="text-blue-600 hover:underline"
                  >
                    Water Extension
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Legal & Additional Pages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Legal & Information
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-blue-600 hover:underline"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="text-blue-600 hover:underline">
                Sitemap
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          XML Sitemap
        </h2>
        <p className="text-gray-700 mb-2">
          For search engines, our XML sitemap is available at:
        </p>
        <Link
          href="/sitemap.xml"
          className="text-blue-600 hover:underline break-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.standardhomesgambia.com/sitemap.xml
        </Link>
      </div>
    </div>
  );
};

export default Sitemap;
