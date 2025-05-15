"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenue from "./MobileMenue";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Building, HandCoins, Droplets } from "lucide-react";
import AdsBanner from "../Advertisements/AdsBanner";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <div className="bg-white py-3 sticky top-0 z-50">
      <AdsBanner />
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
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
          {/* Home Link */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu(null)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-primary hover:text-gray-800"
              }`}
            >
              Home
            </Link>
          </div>

          {/* About Link */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu(null)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-primary hover:text-gray-800"
              }`}
            >
              About
            </Link>
          </div>
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-[#CA8A04]">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#CA8A04]">
                  <div className="grid w-[400px] gap-3 p-4 md:w-[650px] md:grid-cols-3 lg:w-[750px] ">
                    <div>
                      <div className="grid grid-cols-1 mb-2 py-5 border-b border-slate-200">
                        <Building className="w-6 h-6 mb-5 text-slate-100" />
                        <h3 className="text-white font-semibold">
                          GENERAL CONSTRUCTION
                        </h3>
                      </div>
                      <Link
                        href="/general-construction#assets"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Assets Management
                      </Link>
                      <Link
                        href="/general-construction#architect"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Architectural Design
                      </Link>
                      <Link
                        href="/general-construction#commerce"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Commercial & Residential Construction
                      </Link>
                      <Link
                        href="/general-construction#construction"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Construction Project Management
                      </Link>
                      <Link
                        href="/general-construction#interior"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Interior Decoration
                      </Link>
                    </div>

                    {/* Sales & Supply Category */}
                    <div>
                      <div className="grid grid-cols-1 mb-2 py-5 border-b border-slate-200">
                        <HandCoins className="w-6 h-6 mb-5 text-slate-100" />
                        <h3 className="text-white font-semibold">
                          SALES & SUPPLY
                        </h3>
                      </div>
                      <Link
                        href="/sales-supply#sales"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Sales & Leasing
                      </Link>
                      <Link
                        href="/sales-supply#property"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Property Maintainance
                      </Link>
                    </div>

                    {/* Water Category */}
                    <div>
                      <div className="grid grid-cols-1 mb-2 py-5 border-b border-slate-200">
                        <Droplets className="w-6 h-6 mb-5 text-slate-100" />
                        <h3 className="text-white font-semibold">WATER</h3>
                      </div>
                      <Link
                        href="/water#borehole"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Borehole Drilling
                      </Link>
                      <Link
                        href="/water#extension"
                        className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                      >
                        Water Extension
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Properties Link with Submenu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("Properties")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link
              href="#"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "#"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-primary hover:text-gray-800"
              }`}
            >
              Properties
            </Link>
            {hoveredMenu === "Properties" && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-primary shadow-lg rounded-md border border-gray-200">
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
                    pathname === "/properties/alphabetcity" ? "bg-blue-50" : ""
                  }`}
                >
                  Lands
                </Link>

                <Link
                  href="/properties/willow-lane"
                  className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
                    pathname === "/properties/willow-lane" ? "bg-blue-50" : ""
                  }`}
                >
                  Warehouses
                </Link>
              </div>
            )}
          </div>

          {/* News Link */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu(null)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link
              href="/news"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/news"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-primary hover:text-gray-800"
              }`}
            >
              News
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
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors border-yellow-600 border ${
                pathname === "/inquire"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-primary hover:text-gray-800"
              }`}
            >
              Inquire
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
