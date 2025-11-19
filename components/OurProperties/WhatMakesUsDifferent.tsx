"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, HeartHandshake, Star, ArrowUp } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Shield,
    title: "Corporate Responsibility",
    description:
      "Our goal is zero incidents and our lost time frequency rate is industry leading.",
  },
  {
    id: 2,
    icon: Users,
    title: "Experts with Team Spirit",
    description:
      "Our multi-skilled team provides innovative, forward-thinking solutions.",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Diversity, Equity & Inclusion",
    description:
      "We work with both investors and developers to create landmarks that make an impact.",
  },
];

export default function WhatMakesUsDifferent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden text-slate-900">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Image with Overlay Card */}
          <motion.div variants={itemVariants} className="relative w-full">
            {/* Main Image */}
            <div className="relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-xl">
              <Image
                src="/office.jpg" 
                alt="Standard Homes Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="absolute -bottom-8 left-8 md:bottom-12 md:-left-12 z-20">
              <div className="bg-gradient-to-br from-stone-800 to-stone-900 text-white p-6 rounded-[2rem] shadow-2xl w-[280px] backdrop-blur-md border border-white/10">
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl font-bold text-[#a3e635] mb-2">4.9</span>
                  
                  {/* Avatars */}
                  <div className="flex items-center justify-center -space-x-3 mb-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-800 overflow-hidden relative bg-gray-300">
                         {/* Placeholder avatars - in prod use real images */}
                         <Image 
                           src={`/hero-home-${i > 2 ? 1 : i}.jpg`} 
                           alt="User" 
                           fill 
                           className="object-cover"
                         />
                      </div>
                    ))}
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-2 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm font-medium text-gray-300">
                    1k+ satisfied customers
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content & Features */}
          <div className="flex flex-col pt-8 lg:pt-0">
            
           <motion.span
          animate={{ x: [-10, 10, -10] }}
          transition={{
         duration: 3,
        repeat: Infinity,
         ease: "easeInOut",
       }}
         className="text-[10px] font-bold uppercase tracking-widest text-slate-900 inline-block"
     >
  OUR COMMITMENT
       </motion.span>


            {/* Heading & Subtext */}
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              What makes us <br /> different
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-500 leading-relaxed mb-12 max-w-xl">
              It&apos;s not just about creating something good; it&apos;s about designing, innovating, and collaborating to forge remarkable and unparalleled experiences.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-10">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id} 
                  variants={itemVariants}
                  className="relative border-t border-slate-100 pt-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-6 md:gap-8 items-start">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#a3e635] flex items-center justify-center shadow-sm">
                      <feature.icon className="w-7 h-7 text-slate-900" strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2 pt-1">
                      <h3 className="text-xl font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Separator Line */}
             <motion.div variants={itemVariants} className="w-full h-[1px] bg-slate-100 mt-10" />

          </div>
        </div>
      </motion.div>

      {/* Floating Arrow Button (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 right-8 z-10 hidden lg:flex"
      >
        <div className="w-14 h-14 rounded-full bg-[#a3e635] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
          <ArrowUp className="w-6 h-6 text-slate-900" />
        </div>
      </motion.div>
    </section>
  );
}