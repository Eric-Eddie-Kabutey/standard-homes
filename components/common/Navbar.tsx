"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import {
  ChevronDown,
  Menu,
  Phone,
  Building,
  HandCoins,
  Droplets,
  Globe,
  Info,
  Briefcase,
  LucideProps,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: MenuItem[];
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

/* -------------------------
   Navigation Configuration
   -------------------------*/
const navItems: MenuItem[] = [
  { name: "Property Search", href: "/properties" },
  { name: "Guide", href: "/guide" },
  {
    name: "Service",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "GENERAL CONSTRUCTION", href: "/general-construction" },
      { name: "SALES & SUPPLY", href: "/sales-and-supply" },
      { name: "WATER", href: "/water" },
    ],
  },
  { name: "Insights", href: "/news" },
  {
    name: "Pages",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "About", href: "/about", icon: Info },
      { name: "Careers", href: "/careers", icon: Briefcase },
      { name: "Language", href: "/language", icon: Globe },
    ],
  },
];

const mobileNavServices: MenuItem[] = [
  { name: "General Construction", href: "/general-construction", icon: Building },
  { name: "Sales & Supply", href: "/sales-and-supply", icon: HandCoins },
  { name: "Water Solutions", href: "/water", icon: Droplets },
];

/* -------------------------
   Navbar Component
   -------------------------*/
const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: -18, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 backdrop-blur-md" : "py-4"
      )}
      style={{
        background: isScrolled
          ? "linear-gradient(to bottom, rgba(30,27,75,0.86), rgba(30,27,75,0.72))"
          : "transparent",
      }}
    >
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-none items-center justify-between rounded-none lg:rounded-full border border-slate-700/50 p-2 shadow-2xl transition-all duration-300",
          isScrolled ? "h-16" : "h-20",
          "bg-dark-navy/80 backdrop-blur-xl",
          "before:absolute before:inset-0 before:rounded-none lg:rounded-full  before:bg-gradient-to-br before:from-indigo-950 before:via-slate-900 before:to-emerald-950 before:opacity-50 before:mix-blend-lighten"
        )}
      >
        {/* Logo Section */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2 px-4 py-2 transition-all duration-300 group"
        >
          {/* Desktop Logo Image */}
          <Image 
            src="/standard w1.png"
            alt="Standard Homes Gambia"
            width={200}
            height={60}
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            priority
          />
          
          {/* Vertical Divider */}
          <div className="ml-4 h-full w-[1px] bg-slate-600/50 absolute left-full inset-y-0 my-auto hidden lg:block" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative z-10 hidden flex-grow justify-center lg:flex">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative block py-2 text-lg font-medium text-slate-300 transition-colors duration-200 hover:text-white",
                    pathname.startsWith(item.href) && item.href !== "#" && "text-white"
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 inline-block transform transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    )}
                  </span>

                  {/* Underline effect */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-indigo-400 to-emerald-400 transition-all duration-300 ease-out",
                      (pathname.startsWith(item.href) && item.href !== "#" || activeDropdown === item.name) ? "w-full" : "w-0"
                    )}
                  />
                </Link>

                {/* Dropdown (desktop) */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.14 }}
                    className="absolute left-1/2 top-full mt-1 -translate-x-1/2 w-60 rounded-lg border border-slate-700/40 bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 p-2 shadow-xl backdrop-blur-md z-[9999] pointer-events-auto"
                    style={{ marginTop: "-1px" }}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-md text-slate-300 transition-colors duration-150 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-emerald-600 hover:text-white",
                          pathname === dropdownItem.href && "bg-gradient-to-r from-indigo-600 to-emerald-600 text-white"
                        )}
                      >
                        {dropdownItem.icon && <dropdownItem.icon className="h-5 w-5 opacity-90" />}
                        <span>{dropdownItem.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone Number & CTA */}
        <div className="relative z-10 flex items-center gap-4 pr-2">
          <a
            href="tel:+2203012345"
            className="hidden items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-white lg:flex"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Call Us: +220 301 2345</span>
          </a>

          <Link
            href="/inquire"
            className="relative overflow-hidden rounded-full bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-dark-navy pulsing-button"
          >
            Get a Free Evaluation
            <span className="absolute inset-0 size-full animate-pulse rounded-full bg-emerald-400 opacity-0 mix-blend-screen" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>

      {/* Subtle bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-50" />
    </motion.header>
  );
};

/* -------------------------
   Mobile Navbar Component
   -------------------------*/
const MobileNavbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="text-white hover:bg-slate-800">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full max-w-sm border-l-slate-700 bg-dark-navy p-0">
        <div className="flex h-full flex-col overflow-y-auto pt-6">
          
          {/* Mobile Logo Section */}
          <div className="mb-8 flex items-center justify-center gap-2 border-b border-slate-700 pb-6">
             <Link href="/">
               <Image 
                  src="/standard w1.png"
                  alt="Standard Homes Gambia"
                  width={180}
                  height={50}
                  className="h-auto w-auto max-h-12 object-contain"
                />
             </Link>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-grow">
            <Accordion type="single" collapsible className="w-full">
              {navItems.map((item) => (
                <AccordionItem key={item.name} value={`item-${item.name.toLowerCase().replace(/\s/g, "-")}`} className="border-b border-slate-800">
                  {item.hasDropdown ? (
                    <>
                      <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-slate-200 hover:no-underline hover:bg-slate-800">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent className="bg-slate-900 pb-0">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={cn(
                              "flex items-center gap-4 px-10 py-3 text-base text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-white",
                              pathname === dropdownItem.href && "bg-gradient-to-r from-indigo-600 to-emerald-600 text-white"
                            )}
                          >
                            {dropdownItem.icon && <dropdownItem.icon className="h-5 w-5" />}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block w-full px-6 py-4 text-left text-lg font-medium text-slate-200 transition-colors duration-200 hover:bg-slate-800 hover:text-white",
                        pathname === item.href && "bg-gradient-to-r from-indigo-600 to-emerald-600 text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </AccordionItem>
              ))}

              {/* Services Accordion for Mobile */}
              <AccordionItem value="item-services" className="border-b border-slate-800">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-slate-200 hover:no-underline hover:bg-slate-800">
                  Our Services
                </AccordionTrigger>
                <AccordionContent className="bg-slate-900 pb-0">
                  {mobileNavServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={cn(
                        "flex items-center gap-4 px-10 py-3 text-base text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-white",
                        pathname === service.href && "bg-gradient-to-r from-indigo-600 to-emerald-600 text-white"
                      )}
                    >
                      {service.icon && <service.icon className="h-5 w-5" />}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6">
            <Link
              href="/inquire"
              className="block w-full rounded-full bg-emerald-500 py-3 text-center text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-600"
            >
              Get a Free Evaluation
            </Link>
            <a
              href="tel:+2203012345"
              className="mt-4 flex items-center justify-center gap-2 text-slate-400 transition-colors duration-300 hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Call Us: +220 301 2345</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;