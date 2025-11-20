"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";

export default function WaterPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-[#0f172a] text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://img.freepik.com/premium-photo/water-splash-black-background_146508-1487.jpg?w=1800" 
            alt="Water Solutions Background"
            fill 
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/50 to-white" />
        </div>

        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635] text-[#a3e635] mb-6 bg-[#0f172a]/50 backdrop-blur-md"
          >
            <motion.span
      animate={{ x: [-10, 10, -10] }}
      transition={{
      duration: 3,
      repeat: Infinity,
       ease: "easeInOut",
     }}
  className="text-[10px] font-bold uppercase tracking-widest inline-block"
>
  UTILITIES · SERVICES
</motion.span>

          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Advanced Water <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ensuring sustainable access and efficient distribution. From professional borehole drilling to complex plumbing extensions, we power your property.
          </motion.p>
        </div>
      </section>


      {/* --- 2. BOREHOLE DRILLING SECTION --- */}
      <section id="borehole" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#a3e635]/20 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-[#16a34a]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Borehole Drilling
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Do you want to drill?
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Standard Homes, we go beyond transactions—we build trust and deliver value. Our goal is to make every sales or leasing experience seamless, efficient, and rewarding for our clients, setting new standards of excellence in The Gambia’s property market.
            </p>

            <ul className="space-y-4 mb-10">
              {["Advanced Drilling Rigs", "Geological Surveying", "Sustainable Water Flow"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#a3e635]" /> {item}
                </li>
              ))}
            </ul>

            <Link href="/inquire">
              <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="https://img.freepik.com/premium-photo/man-wearing-hard-hat-is-using-machine-that-has-yellow-hard-hat-it_1107779-27153.jpg?w=1800"
              alt="Borehole Drilling Worker"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase leading-tight">
                  Success <br/> Rate
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* --- 3. WATER EXTENSION SECTION --- */}
      <section id="extension" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-slate-50 rounded-[3rem] mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="https://img.freepik.com/premium-photo/maintenance-pressure-reducing-valve-water-treatment-plant-thailand_38039-625.jpg?w=1380"
              alt="Water Maintenance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#a3e635]/20 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-[#16a34a]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Water Extension
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Do you want to <br/> transform your house?
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Just as important as acquiring it. Our property maintenance services are designed to ensure that every asset we manage remains in excellent condition, providing both comfort and long-term financial returns for our clients. From routine inspections to addressing specific repair needs, we take a proactive approach.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                  <div className="text-sm text-slate-500">Emergency Support</div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-slate-900 mb-1">Proactive</div>
                  <div className="text-sm text-slate-500">Maintenance Plans</div>
               </div>
            </div>

            <Link href="/inquire">
              <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book Inspection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#a3e635]" />
              </button>
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}