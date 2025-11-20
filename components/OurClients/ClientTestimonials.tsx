"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUp, Home, Building2, Hammer, Ruler, HardHat, Shovel } from "lucide-react";

// --- Data Configuration ---
const testimonials = [
  {
    id: 1,
    quote: "Your team were great to work with on our basement remodel! I will definitely be working with them for future projects!",
    name: "Floyd Miles",
    role: "Bond Projects Coordinator",
  },
  {
    id: 2,
    quote: "Standard Homes delivered our dream home in Bijilo on time and within budget. Truly exceptional service!",
    name: "Awa Jallow",
    role: "Teacher",
  },
  {
    id: 3,
    quote: "From land purchase to final handover, everything was seamless. Best developer in The Gambia!",
    name: "Ismaila Touray",
    role: "Business Owner",
  },
];

// Mock Client Logos
const clients = [
  { name: "RICK COMPANY", icon: Building2 },
  { name: "CONSTRUCTION", icon: Hammer },
  { name: "ARCHITECT", icon: Ruler },
  { name: "HOME BUILD", icon: HardHat },
  { name: "HOME & GARDEN", icon: Home },
  { name: "ARCHITECTURE", icon: Shovel },
];

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]); // Added dependency to ensure interval resets correctly or use function update

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden text-slate-900">
      
      {/* --- 1. Rotating Badge (Top Center) --- */}
      <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2 z-10">
        <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
          {/* Rotating Text Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
             <svg viewBox="0 0 100 100" width="100%" height="100%">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="8.5" fontWeight="bold" fill="#1e293b" letterSpacing="2">
                <textPath href="#circlePath">
                  WHAT PEOPLE SAYS • WHAT PEOPLE SAYS •
                </textPath>
              </text>
            </svg>
          </motion.div>
          
          {/* Center Icon */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100">
             <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                <Home className="w-8 h-8 text-[#a3e635]" />
             </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16">
        
        {/* --- 2. Testimonial Carousel --- */}
        <div className="relative flex items-center justify-center min-h-[400px]">
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>

          {/* Content */}
          <div className="w-full max-w-4xl mx-auto text-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900 mb-8">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </h3>
                
                <div className="space-y-1">
                  <p className="text-lg font-bold text-slate-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>

           {/* Mobile Arrows (Bottom) */}
           <div className="absolute -bottom-0 flex gap-4 md:hidden">
              <button onClick={handlePrev} className="w-10 h-10 bg-white rounded-full shadow border border-slate-100 flex items-center justify-center"><ChevronLeft className="w-5 h-5"/></button>
              <button onClick={handleNext} className="w-10 h-10 bg-white rounded-full shadow border border-slate-100 flex items-center justify-center"><ChevronRight className="w-5 h-5"/></button>
           </div>
        </div>

        {/* --- 3. Separator --- */}
        <div className="w-full h-[1px] bg-slate-200 my-16" />

        {/* --- 4. Client Logos Marquee --- */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-12 text-center">
            We’re proud to partner with best-in-class clients
          </p>
          
          <div className="w-full overflow-hidden relative group">
             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

             <motion.div
               className="flex gap-16 md:gap-24 w-max"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 30, ease: "linear", repeat: Infinity }}
             >
                {[...clients, ...clients, ...clients].map((client, idx) => (
                   <div key={idx} className="flex flex-col items-center justify-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
                      <client.icon className="w-10 h-10 md:w-12 md:h-12 text-slate-900" strokeWidth={1.5} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{client.name}</span>
                   </div>
                ))}
             </motion.div>
          </div>
        </div>

      </div>

      {/* --- 5. Floating Arrow (Bottom Right) --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 right-8 z-20 hidden lg:flex"
      >
        <div className="w-14 h-14 rounded-full bg-[#a3e635] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
          <ArrowUp className="w-6 h-6 text-slate-900" />
        </div>
      </motion.div>

    </section>
  );
}