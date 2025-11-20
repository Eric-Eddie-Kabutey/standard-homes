"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GuideTabs from "@/components/guide/GuideTabs";
import { BookOpen } from "lucide-react";

export default function GuidePage() {
  return (
    <main className="w-full bg-[#F8F7F4] overflow-hidden min-h-screen">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[55vh] min-h-[500px] flex items-center justify-center bg-[#0f172a] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/office.jpg" // Use a relevant image like a desk, keys, or meeting
            alt="Real Estate Guide Background"
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/60 to-[#F8F7F4]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635] text-[#a3e635] mb-6 bg-[#0f172a]/50 backdrop-blur-md"
          >
            <BookOpen className="w-3 h-3" />
           <motion.span
          animate={{ x: [-10, 10, -10] }}
          transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
         }}
         className="text-[10px] font-bold uppercase tracking-widest inline-block"
       >
         EXPERT RESOURCES
         </motion.span>

          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Your roadmap to <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-emerald-400">
              smart real estate.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Whether you are buying, selling, or renting, our expert guides are here to help you navigate every step of your real estate journey with confidence.
          </motion.p>
        </div>
      </section>

      {/* --- 2. TABS CONTAINER --- */}
      <section className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-[1200px] mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden p-6 md:p-12"
        >
          <GuideTabs />
        </motion.div>
      </section>

    </main>
  );
}