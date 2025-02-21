import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#1A3850] text-white py-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column: Logo + Description */}
          <div>
            {/* If you have a logo image, uncomment and replace the src below:
                <img
                  src="/path/to/waylead-logo.png"
                  alt="Waylead"
                  className="mb-2 h-auto w-28"
                />
            */}
            <h2 className="mb-2 text-2xl font-bold">Waylead</h2>
            <p className="max-w-sm text-sm md:text-base">
              As a leading registered developer in Ghana, Waylead is committed
              to building high quality and honest homes from new to brand new.
            </p>
          </div>

          {/* Middle Column: Follow Us */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="mb-2 font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/233501408803"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Copyright */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} Waylead Co. Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/233501408803"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg transition-colors hover:bg-green-600"
      >
        <FaWhatsapp size={20} />
        <span className="font-semibold">Message us</span>
      </a>
    </footer>
  );
};

export default Footer;
