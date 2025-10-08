"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  
  const zoomAnimation = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
    transition: {
      duration: 15, 
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror" as const, 
    },
  };

  return (
    <section 
      // Responsive height: 70vh on small screens, 80vh on large screens
      className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden"
    >
      {/* Animated container for the image */}
      <motion.div
        className="absolute inset-0"
        initial={zoomAnimation.initial}
        animate={zoomAnimation.animate}
        transition={zoomAnimation.transition}
      >
        <Image
          src="/project/project-one/hero-img.png"
                  alt="Modern architectural building with curved balconies"
                  fill
          layout="fill"
          objectFit="cover"
          quality={90}
          priority // Tells Next.js to load this image first, which is good for performance
        />
      </motion.div>

      {/* Darkening overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content to display on top of the hero image */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <motion.h1 
          className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find Your Next Home
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-2xl text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover premier properties in The Gambia and Senegal. Your journey to exceptional living starts here.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;