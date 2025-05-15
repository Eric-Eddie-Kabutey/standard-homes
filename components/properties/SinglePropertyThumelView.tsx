"use client";

import React, { ReactElement } from "react";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

type propertyType = {
  id: number;
  price: {
    daily: string;
    twoWeeks: string;
    monthly: string;
  };
  title: string;
  location: string;
  beds: number;
  baths: number;
  kitchen: number;
  new: boolean;
  type: string;
  yearBuilt: number;
  garage: number;
  amenities: { lable: string; icons: ReactElement }[];
  image: string[]; // fix type here
  description: string;
};

const SinglePropertyThumelView = ({
  properties,
}: {
  properties: propertyType;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <Carousel
          setApi={setApi}
          className="w-full max-w-7xl"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {properties.image.map((img, index) => (
              <CarouselItem key={index} className="w-full">
                <Card className="border-none relative overflow-hidden rounded-md h-[450px] md:h-[550px]">
                  <Image
                    src={img}
                    alt={`Property image ${index + 1}`}
                    fill // This makes Image fill the parent container
                    className="object-cover rounded-md"
                    priority={index === 0}
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-center font-bold text-sm text-slate-200">
          Picture {current + 1} of {count}
        </div>
      </div>

      {/* Description Section */}
      <div className="pt-8 mx-auto max-w-3xl space-y-7 flex flex-col items-center justify-center">
        <p className="text-white text-xl">{properties.description}</p>
      </div>
    </div>
  );
};

export default SinglePropertyThumelView;
