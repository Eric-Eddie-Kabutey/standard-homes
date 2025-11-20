"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
  '/RESIZE.png',
  '/powercon.png',
  'https://www.riciacare.com/_next/image?url=%2FRICIA%20CARE%20Final%20Logo.png&w=2048&q=75',
  'https://oneworldfinancials.com/ONEworldLOGO1-1.svg',
];

export default function OurClients() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#a3e635] bg-white mb-6 shadow-sm"
          >
            <motion.span
        animate={{ x: [-10, 10, -10] }}
        transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
       }}
       className="text-[10px] font-bold uppercase tracking-widest text-[#a3e635] inline-block"
   >
      OUR NETWORK
      </motion.span>

          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Trusted by industry <span className="text-[#10b981]">leaders</span>
          </motion.h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden group">
          
          {/* Gradient Masks for smooth fade at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Moving Track */}
          <motion.div
            className="flex items-center gap-16 md:gap-32 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {/* We duplicate the array 4 times to ensure seamless scrolling on wide screens */}
            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div 
                key={index} 
                className="relative w-40 h-24 flex items-center justify-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <Image 
                  src={logo} 
                  alt={`Partner ${index}`} 
                  width={160} 
                  height={80} 
                  className="object-contain w-full h-full" 
                />
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}