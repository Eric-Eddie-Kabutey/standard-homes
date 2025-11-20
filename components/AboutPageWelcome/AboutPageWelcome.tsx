"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const AboutPageWelcome = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a3e635]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635]/50 bg-[#a3e635]/10 text-[#16a34a] mb-8 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            <motion.span
          animate={{ x: [-10, 10, -10] }}
           transition={{
           duration: 3,
           repeat: Infinity,
           ease: "easeInOut",
            }}
  className="text-[11px] font-bold uppercase tracking-widest inline-block"
>
  Trusted Excellence
</motion.span>

          </motion.div>

          {/* 2. Main Heading */}
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight max-w-4xl mb-8"
          >
            Gambia’s Trusted <br className="hidden md:block" />
            <span className="relative inline-block">
              Real Estate Developer
              {/* Decorative Underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#a3e635]" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>{" "}
            and Property Partner
          </motion.h2>

          <motion.div 
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="w-24 h-1.5 bg-[#a3e635] rounded-full mb-10"
          />

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium"
          >
            As a leading Real Estate Developer and property management company in Gambia, 
            <span className="text-slate-900 font-bold"> Standard Homes</span> is committed to providing high-quality residential and commercial construction services. 
            From luxurious homes to modern commercial spaces, land sales, leasing, and efficient borehole drilling solutions, 
            we are dedicated to creating exceptional living, working, and investment environments for you and your community.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutPageWelcome;
