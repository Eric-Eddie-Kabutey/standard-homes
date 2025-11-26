"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Article {
    id: number;
    tag: string;
    date: string;
    title: string;
    image: string;
    link: string;
}

const articles: Article[] = [
  {
    id: 1,
    tag: "Company Insights",
    date: "March 18, 2025",
    title: "Why Bijilo is The Gambia’s Fastest Growing Real Estate Hotspot",
    image: "/hero-home-1.jpg",
    link: "/news/bijilo-growth",
  },
  {
    id: 2,
    tag: "Construction",
    date: "March 15, 2025",
    title: "How Borehole Solutions Are Changing Property Development",
    image: "/land-layout-1.jpg",
    link: "/news/borehole-solutions",
  },
  {
    id: 3,
    tag: "Design",
    date: "March 10, 2025",
    title: "Sustainable Architecture: Building for Tomorrow",
    image: "/office.jpg",
    link: "/news/sustainable-architecture",
  },
  {
    id: 4,
    tag: "Advisory",
    date: "March 05, 2025",
    title: "Top 5 Mistakes to Avoid When Buying Land in The Gambia",
    image: "/hero-home-2.jpg",
    link: "/news/buying-land-mistakes",
  },
];

export default function ArticleInsights() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden text-slate-900">
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a3e635]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-6 max-w-3xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#a3e635] bg-white shadow-sm w-32"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                ARTICLES 
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Discover inspiration <br /> and trends
            </motion.h2>
          </div>

          <Link href="/news">
            <button className="hidden md:flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 hover:border-[#a3e635] hover:bg-[#a3e635] transition-all font-bold group">
              View All Posts
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
           <Link href="/news">
            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#a3e635] font-bold w-full justify-center shadow-lg">
              View All Posts <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer flex flex-col h-full"
    >
      <Link href={article.link} className="flex flex-col h-full">
        <div className="relative w-full h-[280px] xl:h-[320px] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          
          <div className="absolute top-5 left-5 bg-[#a3e635] text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
            {article.tag}
          </div>
        </div>

        <div className="flex flex-col flex-grow px-2">
          <div className="flex items-center gap-4 mb-4">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{article.date}</span>
             <div className="h-[1px] flex-grow bg-slate-200" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-[#16a34a] transition-colors">
            {article.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}