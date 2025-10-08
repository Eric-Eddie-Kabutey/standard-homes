"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenue from "./MobileMenue";
import { cn } from "@/lib/utils";
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Building, HandCoins, Droplets, Globe, ChevronDown, ChevronUp } from "lucide-react";
import AdsBanner from "../Advertisements/AdsBanner";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50 shadow-md">
      {/* site banner */}
      <AdsBanner />

      {/* navbar section */}

      {/* top site menu */}
      <div className="bg-[#0a2f5c] text-white hidden md:block">
        <nav className="flex items-center max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
          <div className="ml-auto flex items-center gap-x-8">
              <Link href="#" className="flex items-center gap-2 text-base hover:text-gray-300 transition-colors">                
                <span>About</span>
              </Link>
              {/* Service */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("Services")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href="#"
                className={`px-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === "#"
                    ? "bg-primary text-white"
                    : " hover:text-gray-300"
                }`}
              >
                <div className="flex items-center gap-x-2">

                Service {hoveredMenu === "Services" ? <ChevronUp className="w-4 h-auto" /> : <ChevronDown className="w-4 h-auto" />}
                </div>
              </Link>
              {hoveredMenu === "Services" && (
                <div className="absolute top-14 left-0 z-10 w-64 bg-primary shadow-lg rounded-md border border-gray-200">
                  <Link
                    href="/general-construction"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/general-construction" ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                          <Building className="w-6 h-6 text-slate-100" />
                          <span>GENERAL CONSTRUCTION</span>
                        </div>
                  </Link>
                  <Link
                    href="/sales-and-supply"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/sales-and-supply" ? "bg-blue-50" : ""
                    }`}
                  >
                     <div className="flex gap-4 items-center">
                          <HandCoins className="w-6 h-6 text-slate-100" />
                          <span>SALES & SUPPLY</span>
                        </div>
                  </Link>                                  

                  <Link
                    href="/water"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/water"
                        ? "bg-blue-50"
                        : ""
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                          <Droplets className="w-6 h-6 text-slate-100" />
                          <span>WATER</span>
                        </div>
                  </Link>
                </div>
              )}
            </div>                           
              <Link href="/careers" className="text-base hover:text-gray-300 transition-colors">
                Careers
              </Link>
              <button className="flex items-center gap-2 text-base hover:text-gray-300 transition-colors">
                <Globe className="h-5 w-5" />
                <span>Language</span>
              </button>
          </div>
        </nav>
      </div>

      {/* main site menu */}
      <div className="bg-white py-3">
        <div className="flex items-center justify-between max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Desktop Logo */}
            <Image
              width={200}
              height={300}
              src="/S GAMBIA.png"
              alt="desktop logo"
              className="mt-5 hidden md:block"
            />

            {/* Mobile Logo */}
            <Image
              width={150}
              height={200}
              src="/STANDARD MAIN.png"
              alt="mobile logo"
              className="mt-5 block md:hidden"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {/* About Link */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu(null)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href="/properties"
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === "/properties"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary hover:text-gray-800"
                }`}
              >
                Property Search
              </Link>
            </div>

              

            {/* Our projects Link with Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("Properties")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href="#"
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === "#"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <div className="flex items-center gap-2 text-base">

                Our Projects {hoveredMenu === "Properties" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </Link>
              {hoveredMenu === "Properties" && (
                <div className="absolute top-14 left-0 mt-1 w-48 bg-primary shadow-lg rounded-md border border-gray-200">
                  <Link
                    href="/listings"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/listings" ? "bg-blue-50" : ""
                    }`}
                  >
                    Rental Apartments
                  </Link>
                  <Link
                    href="/properties/symphonique"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/properties/symphonique" ? "bg-blue-50" : ""
                    }`}
                  >
                    Houses For Sale
                  </Link>
                  <Link
                    href="/properties/vista-del-mare"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/properties/vista-del-mare"
                        ? "bg-blue-50"
                        : ""
                    }`}
                  >
                    Offices
                  </Link>
                  <Link
                    href="/properties/lands"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/properties/alphabetcity"
                        ? "bg-blue-50"
                        : ""
                    }`}
                  >
                    Lands
                  </Link>

                  <Link
                    href="/properties/willow-lane"
                    className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                      pathname === "/properties/willow-lane"
                        ? "bg-blue-50"
                        : ""
                    }`}
                  >
                    Warehouses
                  </Link>
                </div>
              )}
            </div>

            {/* Insights Link */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu(null)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href="/news"
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === "/news"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary hover:text-gray-800"
                }`}
              >
                Insights
              </Link>
            </div>
          
            {/* Inquire Link */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu(null)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href="/inquire"
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors border-yellow-600 border ${
                  pathname === "/inquire"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary hover:text-gray-800"
                }`}
              >
                Get a free evaluation
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/inquire"
              className="bg-primary text-white px-4 py-2 shadow-lg flex items-center justify-center"
            >
              Inquire
            </Link>
            <MobileMenue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";