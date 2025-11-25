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
        className="w-full px-6 md:px-12 lg:px-20 xl:px-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <motion.div variants={itemVariants} className="relative w-full">
            <div className="relative h-[500px] md:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-xl">
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
                  
                  <div className="flex items-center justify-center -space-x-3 mb-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-800 overflow-hidden relative bg-gray-300">
                         <Image 
                           src={`/hero-home-${i > 2 ? 1 : i}.jpg`} 
                           alt="User" 
                           fill 
                           className="object-cover"
                         />
                      </div>
                    ))}
                  </div>

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

          <div className="flex flex-col pt-8 lg:pt-0">
            
            <motion.div variants={itemVariants} className="mb-8">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm overflow-hidden">
                 <motion.span
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[10px] font-bold uppercase tracking-widest text-slate-900 inline-block"
                 >
                    OUR COMMITMENT
                 </motion.span>
               </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-slate-900">
              What makes us <br /> different
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 leading-relaxed mb-16 max-w-2xl">
              It&apos;s not just about creating something good; it&apos;s about designing, innovating, and collaborating to forge remarkable and unparalleled experiences.
            </motion.p>

            <div className="space-y-12">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id} 
                  variants={itemVariants}
                  className="relative border-t border-slate-100 pt-10 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#a3e635] flex items-center justify-center shadow-sm">
                      <feature.icon className="w-7 h-7 text-slate-900" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col gap-3 pt-1">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
             <motion.div variants={itemVariants} className="w-full h-[1px] bg-slate-100 mt-16" />

          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-8 right-8 z-50 hidden lg:flex"
      >
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 rounded-full bg-[#a3e635] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 border-4 border-white"
        >
          <ArrowUp className="w-6 h-6 text-slate-900" />
        </div>
      </motion.div>
    </section>
  );
}