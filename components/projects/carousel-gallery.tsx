"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import  { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryCarouselProps {
  images: string[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  const options: EmblaOptionsType = {
    align: 'start',
    loop: true,
    slidesToScroll: 1,    
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 2, containScroll: 'trimSnaps' },
    }
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {images.map((src, index) => (
            <div className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pl-4" key={index}>
              <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev} 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-yellow-500 disabled:text-gray-400"
        disabled={!prevBtnEnabled}
      >
        <ArrowLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={scrollNext} 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-yellow-500 disabled:text-gray-400"
        disabled={!nextBtnEnabled}
      >
        <ArrowRight className="w-8 h-8" />
      </button>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-yellow-500' : 'bg-amber-800/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;