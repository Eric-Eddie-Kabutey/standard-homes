"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, TrendingUp, Globe, Hammer, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  date: string;
  category: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "January 9, 2025",
    category: "Market Analysis",
    icon: TrendingUp,
    title: "Unprecedented Growth in Gambian Property Market",
    description:
      "The Gambian property market is experiencing unprecedented growth, with foreign investment increasing by 37% year-over-year. Coastal areas like Kotu and Kololi are seeing particular demand, with property values appreciating 15-20% annually.",
  },
  {
    id: 2,
    date: "January 15, 2025",
    category: "Investment Opportunities",
    icon: Globe,
    title: "Tourism Boom Fuels Real Estate Demand",
    description:
      "With over 200,000 annual visitors and a 25% increase in hotel bookings last season, The Gambia's tourism boom is creating exceptional real estate opportunities. Our research identifies prime investment zones along the Atlantic Coast.",
  },
  {
    id: 3,
    date: "February 5, 2025",
    category: "Infrastructure",
    icon: Hammer,
    title: "Infrastructure Projects Transforming the Landscape",
    description:
      "Major infrastructure projects are transforming The Gambia's real estate landscape. The $400 million Banjul-Barra Bridge project will connect previously isolated northern regions to the capital.",
  },
];

export default function NewsAndMedia() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-white text-slate-900 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a3e635]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635] bg-white text-[#16a34a] mb-6 shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">
                NEWS & MEDIA
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900"
            >
              Latest Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                Market Trends
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/news">
              <button className="hidden md:flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 text-slate-900 font-bold hover:border-[#a3e635] hover:bg-[#a3e635] transition-all duration-300 group">
                View All Articles 
                <ArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} variants={cardVariants} />
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center md:hidden">
          <Link href="/news">
            <Button className="bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 font-bold w-full max-w-xs h-12 rounded-full">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item, variants }: { item: NewsItem; variants: Variants }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={variants}
      className="group relative flex flex-col bg-[#F8F7F4] rounded-[2rem] p-8 border border-transparent hover:border-[#a3e635]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
    >
      <div className="flex flex-col h-full relative z-10">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <Calendar className="w-4 h-4 text-[#a3e635]" />
            <span>{item.date}</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-[#a3e635] transition-colors duration-300">
            <Icon className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#16a34a] transition-colors line-clamp-2 leading-tight">
            {item.title}
          </h3>
          <p className="text-slate-500 leading-relaxed line-clamp-3 text-base mb-6">
            {item.description}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-200/60 group-hover:border-[#a3e635]/20 transition-colors">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#16a34a] transition-colors"
          >
            Read Full Story 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}