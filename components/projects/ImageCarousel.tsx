"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect(); // Set initial selected index
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full embla rounded-lg shadow-xl overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={src}
                alt={`Project amenity view ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-opacity z-10">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-opacity z-10">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-yellow-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};