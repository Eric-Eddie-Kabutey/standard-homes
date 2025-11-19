"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Added Variants type
import { ArrowRight, Calendar, TrendingUp, Globe, Hammer, LucideIcon } from "lucide-react"; // Added LucideIcon type
import { Button } from "@/components/ui/button";

// Define interface for News Items
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
      "The Gambian property market is experiencing unprecedented growth, with foreign investment increasing by 37% year-over-year. Coastal areas like Kotu and Kololi are seeing particular demand, with property values appreciating 15-20% annually. The government's 99-year lease policy for foreign buyers has created a stable investment environment.",
  },
  {
    id: 2,
    date: "January 15, 2025",
    category: "Investment Opportunities",
    icon: Globe,
    title: "Tourism Boom Fuels Real Estate Demand",
    description:
      "With over 200,000 annual visitors and a 25% increase in hotel bookings last season, The Gambia's tourism boom is creating exceptional real estate opportunities. Our research identifies prime investment zones along the Atlantic Coast corridor where luxury resorts are achieving 85% occupancy rates year-round.",
  },
  {
    id: 3,
    date: "February 5, 2025",
    category: "Infrastructure",
    icon: Hammer,
    title: "Infrastructure Projects Transforming the Landscape",
    description:
      "Major infrastructure projects are transforming The Gambia's real estate landscape. The $400 million Banjul-Barra Bridge project will connect previously isolated northern regions to the capital. Road upgrades along the Trans-Gambia Highway have already reduced travel times by 40%, making suburban areas more accessible.",
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
    <section className="relative w-full py-24 md:py-32 bg-[#0B1120] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 mb-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest">
                News & Media
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Latest Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
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
              <Button 
                variant="outline" 
                className="hidden md:flex border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-amber-500 transition-all duration-300"
              >
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} variants={cardVariants} />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/news">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full max-w-xs">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Typed Card Component ---
function NewsCard({ item, variants }: { item: NewsItem; variants: Variants }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={variants}
      className="group relative flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 hover:bg-slate-800/80 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm font-medium text-amber-500 bg-amber-500/10 px-3 py-1 rounded-md">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.date}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-amber-500/30 group-hover:bg-slate-700 transition-colors">
            <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-slate-400 leading-relaxed line-clamp-3 text-sm md:text-base">
            {item.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 group-hover:border-slate-700 transition-colors">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-amber-400 transition-colors"
          >
            Read Full Story 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
