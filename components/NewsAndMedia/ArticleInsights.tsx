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
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="space-y-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#a3e635] bg-white shadow-sm w-32"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                ARTICLES ·
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              Discover inspiration <br /> and trends
            </motion.h2>
          </div>

          <Link href="/news">
            <button className="hidden md:flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 hover:border-[#a3e635] hover:bg-[#a3e635] transition-all font-bold group">
              View All Posts
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 flex justify-center md:hidden">
           <Link href="/news">
            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#a3e635] font-bold w-full justify-center">
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
        {/* Image */}
        <div className="relative w-full h-[280px] rounded-[2rem] overflow-hidden mb-6">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-[#a3e635] text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {article.tag}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-3">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{article.date}</span>
             <div className="h-[1px] flex-grow bg-slate-200" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#a3e635] transition-colors">
            {article.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}