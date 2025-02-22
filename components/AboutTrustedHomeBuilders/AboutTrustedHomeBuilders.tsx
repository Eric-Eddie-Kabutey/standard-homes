import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";

const images = [
  {
    name: "logo",
    img: "/about/about-01.jpg",
  },
  {
    name: "logo",
    img: "/about/about-02.jpg",
  },
  {
    name: "logo",
    img: "/about/about-03.jpg",
  },
  {
    name: "logo",
    img: "/about/about-04.jpg",
  },
];

const AboutTrustedHomeBuilders = () => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Logo */}
      <Image
        src={"/about/logo-waylead-tagline.png"}
        alt="logo"
        width={500}
        height={500}
        className="h-24 w-48 md:w-96 mb-8 object-contain"
      />

      {/* Image Grid */}
      <div className="w-full py-8">
        <Card className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative h-60 w-full">
                <Image
                  src={image.img}
                  alt={image.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutTrustedHomeBuilders;