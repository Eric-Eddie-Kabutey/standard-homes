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
];

const AboutTrustedHomeBuilders = () => {
  return (
      <div className="py-8 mx-[8.7%]">
        <Card className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images?.map((image) => (
              <div key={image.name} className="relative h-60 w-full">
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
  );
};

export default AboutTrustedHomeBuilders;
