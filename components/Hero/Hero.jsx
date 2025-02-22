"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/hero-home-1 (1).jpg",
    title: "Your Next Perfect Home",
    description: "Lush townhouses built with love",
    button: "Discover Willow Lane",
  },
  {
    image: "/hero-home-1.jpg",
    title: "Smart Investment Choice",
    description:
      "Easy Bill Payments (Cash Power, Water Bills, Internet Subscriptions etc.)",
    button: "Discover Willow Lane",
  },
  {
    image: "/hero-home-2.jpg",
    title: "Built for Families",
    description: "Lush townhouses built with love",
    button: "Discover AlphabetCity",
  },
  {
    image: "/hero-home-2 (1).jpg",
    title: "Definition of New Luxury",
    description: "Lush townhouses built with love",
    button: "Discover Willow Lane",
  },
];

// Duplicate slides to create an infinite loop effect
const extendedSlides = [...slides, ...slides];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Reset the index to 0 when it reaches the duplicated slides
  useEffect(() => {
    if (activeIndex >= slides.length) {
      setTimeout(() => {
        setActiveIndex(0);
      }, 500); // Quick reset without visual glitch
    }
  }, [activeIndex]);

  return (
    <section className="relative w-screen bg-blue-950 h-screen overflow-hidden">
      <Carousel className="w-screen h-screen">
        <CarouselContent
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: activeIndex >= slides.length ? "none" : "transform 0.7s ease-in-out",
          }}
        >
          {extendedSlides.map((slide, index) => (
            <CarouselItem key={index} className="w-screen h-screen relative">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                objectFit="cover"
                className="absolute"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute mt-8 sm:mt-2 top-1/2 left-5 sm:left-10 transform -translate-y-1/2 text-left text-white z-10 px-2 max-w-lg sm:max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {slides[activeIndex % slides.length].title}
        </h1>

        <p className="text-lg sm:text-xl mb-6">
          {slides[activeIndex % slides.length].description}
        </p>

        <Link href="/connect">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
            {slides[activeIndex % slides.length].button}
          </button>
        </Link>
      </div>
    </section>
  );
}
