"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "./Navbar";
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
        <div className=" text-white  mt-2 text-right">
          <div className="px-4 py-2">
            {links.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors mt-2 ${
                    pathname === link.href
                      ? "bg-primary text-white"
                      : "text-white hover:bg-primary hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 mr-4">
                    {link.submenu.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className={`block px-3 py-2 text-sm text-white/80 hover:bg-primary hover:text-gray-800 ${
                          pathname === subLink.href ? "bg-blue-50" : ""
                        }`}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenue;
