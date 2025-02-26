"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/hero-home-1.jpg",
    title: "Your Next Perfect Home",
    description: "We handle all projects with love, care, and dedicated attention.",
    button: "Discuss Your Project",
  },
  {
    image: "/hero-home-1 (1).jpg",
    title: "Smart Investment Choice",
    description:
      "We give you value for your money, let's help you make the right choice",
    button: "Buy and Build With Us",
  },
  {
    image: "/hero-home-2.jpg",
    title: "Built for Families",
    description: "We provive you the best residentisal setting for long and short stays",
    button: "Rent a Safe Home Now",
  },
  {
    image: "/office.jpg",
    title: "Definition New Luxury Offices",
    description: "We are your go to for morden Office spaces, furnished or unfurnished",
    button: "Rent an Office space Now",
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
    <section className="relative w-screen bg-blue-950 h-[50vh] md:h-[85vh] overflow-hidden">
      <Carousel className="w-screen h-screen">
        <CarouselContent
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition:
              activeIndex >= slides.length
                ? "none"
                : "transform 0.7s ease-in-out",
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
      <div className="absolute  sm:mt-2 top-[46%] left-[4.5%] md:left-[7%] transform -translate-y-1/2 text-left text-white bg-gradient-to-tr from-[#c59034] z-10 md:w-[50%] py-[6%] px-[2%] rounded-xl">
        <h1 className="text-2xl md:text-5xl  mb-4">
          {slides[activeIndex % slides.length].title}
        </h1>

        <p className="text-lg sm:text-xl mb-6">
          {slides[activeIndex % slides.length].description}
        </p>

        <Link href="#">
          <Button className="mt-6  text-white px-6 py-3 text-lg">
            {slides[activeIndex % slides.length].button}
          </Button>
        </Link>
      </div>
    </section>
  );
}