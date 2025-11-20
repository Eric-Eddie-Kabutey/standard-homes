"use client";

import React from "react";
import { motion } from "framer-motion";
import { Route, ShieldCheck, Trophy, Building2, ArrowUpRight, LucideIcon } from "lucide-react";

interface OverviewItem {
    title: string;
    body: string;
    icon: LucideIcon;
}

const overviews: OverviewItem[] = [
  {
    title: "Our Journey",
    body: "For over a decade, Standard Homes has been proudly transforming The Gambia’s landscape with standout, impactful projects that make a real and lasting difference.",
    icon: Route,
  },
  {
    title: "Commitment to Quality",
    body: "At Standard Homes, quality is what drives us. We care deeply about getting every detail right, crafting with skill, and making sure we deliver nothing but the best for you.",
    icon: ShieldCheck,
  },
  {
    title: "Awards & Recognition",
    body: "Our dedication to excellence hasn’t gone unnoticed. Over the years, Standard Homes has earned numerous accolades, prestigious awards, and widespread recognition.",
    icon: Trophy,
  },
  {
    title: "Leading Developer",
    body: "Standard Homes has grown into one of The Gambia’s top developers, creating projects that have truly changed the way people live and work in urban areas.",
    icon: Building2,
  },
];

export default function CompanyOverview() {
  return (
    <section className="relative w-full py-24 bg-[#F8F7F4] overflow-hidden text-slate-900">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#a3e635] bg-white mb-6 shadow-sm"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
              CORE VALUES ·
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            Excellence in every <br /> foundation
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviews.map((item, index) => (
            <OverviewCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function OverviewCard({ item, index }: { item: OverviewItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out border border-transparent hover:border-[#a3e635]/30"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#F8F7F4] group-hover:bg-[#a3e635] flex items-center justify-center mb-6 transition-colors duration-300">
        <Icon className="w-7 h-7 text-slate-700 group-hover:text-slate-900 transition-colors" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#16a34a] transition-colors">
        {item.title}
      </h3>
      
      <p className="text-sm text-slate-500 leading-relaxed mb-6">
        {item.body}
      </p>

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
         <ArrowUpRight className="w-5 h-5 text-[#a3e635]" />
      </div>
      
      <div className="absolute bottom-0 left-8 right-8 h-1 bg-[#a3e635] rounded-t-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}