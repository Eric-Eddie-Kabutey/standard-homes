"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  className?: string; // Add className prop
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const pathname = usePathname();
  const [isPropertiesHovered, setIsPropertiesHovered] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/properties",
      label: "Properties",
      submenu: [
        { href: "/properties/alphabet-city", label: "Alphabet City" },
        {
          href: "/properties/le-jardin-symphonique",
          label: "Le Jardin Symphonique",
        },
        { href: "/properties/vista-del-mare", label: "Vista del Mare" },
        { href: "/properties/willow-lane", label: "Willow Lane" },
      ],
    },
    { href: "/news", label: "News" },
    { href: "/inquire", label: "Inquire" },
  ];

  return (
    <div className={`bg-white py-3 sticky top-0 ${className}`}>
      {/* Apply className here */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        <div className="flex items-center space-x-4">
          <Image
            width={200}
            height={100}
            src="/logo-waylead.svg"
            alt="logo"
            className="h-10"
          />
        </div>
        <div className="flex items-center space-x-4 relative">
          {links.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.submenu && setIsPropertiesHovered(true)}
              onMouseLeave={() => link.submenu && setIsPropertiesHovered(false)}
            >
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary hover:text-gray-800"
                }`}
              >
                {link.label}
              </Link>
              {link.submenu && isPropertiesHovered && (
                <div className="absolute top-full left-0 -mt-0 w-48 bg-primary shadow-lg rounded-md border border-gray-200">
                  {link.submenu.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className={`block px-4 py-2 text-sm text-white hover:bg-primary-foreground ${
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
    </div>
  );
};

export default Navbar;
