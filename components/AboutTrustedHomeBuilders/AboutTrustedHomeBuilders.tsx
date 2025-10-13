import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";

const images = [
  {
    name: "logo",
    img: "/standard-1.jpg",
  },
  {
    name: "logo",
    img: "/standard-2.jpg",
  },
  {
    name: "logo",
    img: "/standard-3.jpg",
  },
];

const AboutTrustedHomeBuilders = () => {
  return (
    <div className="py-12">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
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
      </div>
  );
};

export default AboutTrustedHomeBuilders;
