"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

interface Images {
  images: ImageProps[];
}

const SemiHero: React.FC<Images> = ({ images }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<null | number | undefined>(0);
  const [count, setCount] = React.useState<null | number | undefined>(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList()?.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
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
            {images.map((img, index) => (
              <CarouselItem key={index} className="w-full">
                <Card className="border-none">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full rounded-md"
                    priority={index === 0} // Preload the first image
                    unoptimized={true} // Prevent unnecessary Next.js compression
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-center font-bold text-sm text-slate-200">
          Picture {current} of {count}
        </div>
      </div>

      {/* Logo section */}
      <div className="pt-8 mx-auto max-w-3xl space-y-7 flex flex-col items-center justify-center">
        <Image src="/logo-inverted.png" alt="Logo" width={150} height={100} />
        <p className="text-4xl text-[#B48A4C] font-extralight text-center">
          Introducing a 4 BR/ 4.5 BA House at Brufut Gardens, an exceptional residential enclave where
          elegance meets tranquility.
        </p>
        <p className="text-white text-xl text-center">
          Nestled in the peaceful beauty of nature, this exceptional real estate project features more than 100 beautifully designed homes. It perfectly combines stunning architecture with a luxurious, comfortable lifestyle.
        </p>
      </div>
    </div>
  );
};

export default SemiHero;
