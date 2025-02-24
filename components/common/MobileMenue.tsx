"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const MobileMenue = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full bg-[#1A3850]">
        <div className="text-white mt-2 text-right">
          <div className="px-4 py-2">
            {/* Home Link */}
            <div>
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mt-2 ${
                  pathname === "/" ? "bg-primary text-white" : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                Home
              </Link>
            </div>

            {/* About Link */}
            <div>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mt-2 ${
                  pathname === "/about" ? "bg-primary text-white" : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                About
              </Link>
            </div>

            {/* Properties Link with Submenu */}
            <div>
              <Link
                href="#"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mt-2 ${
                  pathname === "#" ? "bg-primary text-white" : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                Properties
              </Link>
              <div className="pl-4 mr-4">
                <Link
                  href="/properties/alphabetcity"
                  className={`block px-3 py-2 text-sm text-white/80 hover:bg-primary hover:text-gray-800 ${
                    pathname === "/properties/alphabetcity" ? "bg-blue-50" : ""
                  }`}
                >
                  Alphabet City
                </Link>
                <Link
                  href="/properties/symphonique"
                  className={`block px-3 py-2 text-sm text-white/80 hover:bg-primary hover:text-gray-800 ${
                    pathname === "/properties/symphonique" ? "bg-blue-50" : ""
                  }`}
                >
                  Le Jardin Symphonique
                </Link>
                <Link
                  href="/properties/vista-del-mare"
                  className={`block px-3 py-2 text-sm text-white/80 hover:bg-primary hover:text-gray-800 ${
                    pathname === "/properties/vista-del-mare" ? "bg-blue-50" : ""
                  }`}
                >
                  Vista del Mare
                </Link>
                <Link
                  href="/properties/willow-lane"
                  className={`block px-3 py-2 text-sm text-white/80 hover:bg-primary hover:text-gray-800 ${
                    pathname === "/properties/willow-lane" ? "bg-blue-50" : ""
                  }`}
                >
                  Willow Lane
                </Link>
              </div>
            </div>

            {/* News Link */}
            <div>
              <Link
                href="/news"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mt-2 ${
                  pathname === "/news" ? "bg-primary text-white" : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                News
              </Link>
            </div>

            {/* Services Link */}
            <div>
              <Link
                href="#"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mt-2 ${
                  pathname === "#" ? "bg-primary text-white" : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                Services
              </Link>
            </div>

            {/* Inquire Link */}
            <div>
              <Link
                href="/inquire"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mt-2 ${
                  pathname === "/inquire" ? "bg-primary text-white" : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenue;