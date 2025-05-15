"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building, HandCoins, Droplets } from "lucide-react";

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
          <div className=" py-2">
            {/* Home Link */}
            <div className="flex border-b border-slate-300 justify-end text-start">
              <Link
                href="/"
                className={`w-full block px-3 py-2 rounded-md text-lg font-medium transition-colors mt-2 ${
                  pathname === "/"
                    ? "bg-primary text-white"
                    : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                Home
              </Link>
            </div>

            {/* About Link */}
            <div className="flex border-b border-slate-300 justify-end text-start">
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md w-full text-lg font-medium transition-colors mt-2 ${
                  pathname === "/about"
                    ? "bg-primary text-white"
                    : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                About
              </Link>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                className="border-b border-slate-300"
                value="item-1"
              >
                <AccordionTrigger className="ml-2.5 text-lg">
                  Services
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full">
                    {/* CONSTRUCTION */}
                    <AccordionItem
                      className="border-b border-slate-300 ml-5"
                      value="item-1-1"
                    >
                      <AccordionTrigger className="text-lg">
                        <div className="flex flex-col ">
                          <Building className="w-6 h-6 mb-3 text-slate-100" />
                          <h3 className="text-white font-semibold flex justify-start">
                            GENERAL CONSTRUCTION
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link
                          href="/general-construction#assets"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Assets Management
                        </Link>
                        <Link
                          href="/general-construction#architect"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Architectural Design
                        </Link>
                        <Link
                          href="/general-construction#commerce"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Commercial & Residential Construction
                        </Link>
                        <Link
                          href="/general-construction#construction"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Construction Project Management
                        </Link>
                        <Link
                          href="/general-construction#interior"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Interior Decoration
                        </Link>
                      </AccordionContent>
                    </AccordionItem>

                    {/* SALES AND SUPPLY */}
                    <AccordionItem
                      className="border-b border-slate-300 ml-5"
                      value="item-1-2"
                    >
                      <AccordionTrigger className="text-lg">
                        <div className="flex flex-col ">
                          <HandCoins className="w-6 h-6 mb-3 text-slate-100" />
                          <h3 className="text-white font-semibold flex justify-start">
                            SALES & SUPPLY
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link
                          href="/sales-supply#sales"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Sales & Leasing
                        </Link>
                        <Link
                          href="/sales-supply#property"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Property Maintainance
                        </Link>
                      </AccordionContent>
                    </AccordionItem>

                    {/* WATER CATEGORY */}
                    <AccordionItem
                      className="border-none ml-5"
                      value="item-1-3"
                    >
                      <AccordionTrigger className="text-lg">
                        <div className="flex flex-col ">
                          <Droplets className="w-6 h-6 mb-3 text-slate-100" />
                          <h3 className="text-white font-semibold flex justify-start">
                            WATER
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link
                          href="/water#borehole"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Borehole Drilling
                        </Link>
                        <Link
                          href="/water#extension"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Water Extension
                        </Link>
                        {/* <Link
                          href="#"
                          className="flex justify-start px-4 py-2 text-sm text-white hover:bg-primary-foreground"
                        >
                          Irrigational Dam Construction
                        </Link> */}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b border-slate-300"
                value="item-2"
              >
                <AccordionTrigger className="ml-2.5 text-lg">
                  Properties
                </AccordionTrigger>
                <AccordionContent className="text-start">
                  <ul className="ml-4 font-semibold space-y-3">
                    <li>
                      <Link href="/listings"> Rental Apartments</Link>
                    </li>
                    <li>
                      <Link href="/properties/symphonique">
                        {" "}
                        Houses For Sale
                      </Link>
                    </li>
                    <li>
                      <Link href="/properties/vista-del-mare">Offices</Link>
                    </li>
                    <li>
                      <Link href="/properties/willow-lane"> Lands</Link>
                      <li>
                        <Link href="/properties/willow-lane"> Warehouses</Link>
                      </li>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* News Link */}
            <div className="flex border-b border-slate-300 justify-end text-start">
              <Link
                href="/news"
                className={`block px-3 py-2 w-full rounded-md text-lg font-medium transition-colors mt-2 ${
                  pathname === "/news"
                    ? "bg-primary text-white"
                    : "text-white hover:bg-primary hover:text-gray-800"
                }`}
              >
                News
              </Link>
            </div>

            {/* Inquire Link */}
            <div className="flex border-b border-slate-300 justify-end text-start">
              <Link
                href="/inquire"
                className={`block px-3 w-full py-2 rounded-md text-lg font-medium transition-colors mt-2 ${
                  pathname === "/inquire"
                    ? "bg-primary text-white"
                    : "text-white hover:bg-primary hover:text-gray-800"
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
