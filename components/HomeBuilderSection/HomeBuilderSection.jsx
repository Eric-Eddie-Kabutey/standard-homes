"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Real Estate Development",
    image: "/hero-home-1.jpg",
  },
  {
    id: 2,
    title: "General Construction",
    image: "/hero-home-2.jpg",
  },
  {
    id: 3,
    title: "Sales & Property Management",
    image: "/office.jpg",
  },
  {
    id: 4,
    title: "Borehole & Water Solutions",
    image: "/hero-home-1 (1).jpg",
  },
  {
    id: 5,
    title: "Architecture & Design",
    image: "/land-layout-1.jpg",
  },
];

export default function ServiceShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F9F9F7] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center mb-16">
        
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a3e635] border border-[#8cd321] mb-8 shadow-sm overflow-hidden whitespace-nowrap"
>
  <motion.span
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    }}
    className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-900 inline-block"
  >
    WHAT WE OFFER 
  </motion.span>
</motion.div>


        {/* Bold Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900"
        >
          Take a brief look at<br />
          some of the services<br />
          we offer
        </motion.h2>
      </div>

      {/* 2. Services Floating Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
      >
    
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-base md:text-lg font-medium text-slate-600"
      >
        <span>Discover top-tier real estate development services.</span>
        <Link 
          href="/properties" 
          className="group inline-flex items-center gap-1 text-slate-900 font-bold border-b-2 border-[#a3e635] hover:border-slate-900 transition-colors pb-0.5"
        >
          View all services 
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>

    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        },
      }}
      className="group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] h-[400px] md:h-[450px] bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-2 transition-all duration-500 ease-out hover:bg-emerald-600"
    >
      {/*Title & Icon */}
      <div className="absolute top-0 left-0 right-0 p-8 z-20 flex justify-between items-start">
        {/* Changes color on hover */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300 max-w-[80%] leading-tight">
          {service.title}
        </h3>
        
        {/* Changes bg/color on hover */}
        <div className="w-8 h-8 rounded-full bg-[#F8F7F4] group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:rotate-90">
          <X className="w-4 h-4 text-slate-400 group-hover:text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Bottom Image Container */}
      {/* Fixed height at bottom, clips image */}
      <div className="absolute bottom-0 left-0 right-0 h-[65%] w-full overflow-hidden">
        <div className="relative w-full h-full transform origin-bottom transition-transform duration-700 group-hover:scale-105">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay appears on hover to blend image with green bg */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

    </motion.div>
  );
}
