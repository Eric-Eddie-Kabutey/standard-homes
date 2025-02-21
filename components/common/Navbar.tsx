import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-white py-3 sticky">
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
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-800 bg-">
            <Button> Home</Button>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            Services
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
