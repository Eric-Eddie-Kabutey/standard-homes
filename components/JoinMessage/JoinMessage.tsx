"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinMessage() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#0f172a]">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-home-2.jpg" 
          alt="Luxury Living" 
          fill
          className="object-cover opacity-20 grayscale mix-blend-luminosity"
        />
        {/* Radial Gradient for focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#a3e635] bg-[#a3e635]/10 mb-8 backdrop-blur-sm"
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
       BECOME A PARTNER
      </motion.span>

        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
        >
          Join the Standard Homes <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-emerald-400">
            Family
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-light"
        >
          As we move forward, we invite you to join us on a journey of exceptional living. Whether you’re looking for a peaceful family home, a smart investment, or a top-quality commercial space, we’ve got the perfect solution for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/inquire">
            <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 text-lg font-bold rounded-full transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] hover:scale-105">
              <span>Inquire Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}