"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, 
  PenTool, 
  HardHat, 
  ClipboardCheck, 
  Paintbrush, 
  ArrowRight, 
  CheckCircle2,
  LucideIcon 
} from "lucide-react";

export default function GeneralConstructionPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-[#0f172a] text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/cute-female-engineer-african-descent-600nw-2138935425.webp" 
            alt="General Construction Background"
            fill 
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/50 to-white" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635] text-[#a3e635] mb-6 bg-[#0f172a]/50 backdrop-blur-md"
          >
            <HardHat className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              BUILDING THE FUTURE
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            General <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Construction</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            From concept to creation. We deliver precision, quality, and innovation across residential, commercial, and industrial projects in The Gambia.
          </motion.p>
        </div>
      </section>

  <section id="assets" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <ServiceHeader icon={Building2} title="Assets Management" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Do you want to <br/> manage your assets?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that a well-managed property is a future-proof investment. Whether it’s real estate portfolios, corporate facilities, or individual assets, we implement tailored solutions to mitigate risks, reduce costs, and improve longevity. By leveraging modern management tools and processes, we provide you with peace of mind while ensuring your assets appreciate over time.
            </p>
            <FeatureList items={["Risk Mitigation", "Cost Reduction Strategies", "Longevity Planning"]} />
            <CTAButton />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/unnamed.jpg"
              alt="Assets Management"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

        </div>
      </section>


      <section id="architect" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-[#F8F7F4] rounded-[3rem] my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/architectural-design-news-article-840x430.jpg"
              alt="Architectural Design"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ServiceHeader icon={PenTool} title="Architectural Design" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Are you starting a <br/> construction?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Managing assets effectively is essential for maintaining their value. At Standard Homes, we take a proactive approach to design, combining in-depth expertise with practical strategies to preserve and enhance your properties. From routine maintenance schedules to infrastructure inspections, our designs stand the test of time.
            </p>
            <FeatureList items={["Modern Aesthetics", "Sustainable Materials", "Functional Layouts"]} />
            <CTAButton />
          </motion.div>

        </div>
      </section>

     <section id="commerce" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <ServiceHeader icon={HardHat} title="Construction Services" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Need a reliable <br/> construction partner?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We understand that every construction project—whether commercial or residential—is a significant investment. At Standard Homes, we pride ourselves on delivering quality, precision, and reliability at every stage. Our team combines years of expertise with modern engineering solutions to ensure seamless execution.
            </p>
            <FeatureList items={["Commercial Complexes", "Luxury Residences", "On-Time Delivery"]} />
            <CTAButton />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/cute-female-engineer-african-descent-600nw-2138935425.webp"
              alt="Commercial Construction"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>


      
      <section id="construction" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-[#F8F7F4] rounded-[3rem] my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/istockphoto-1444189362-612x612.jpg"
              alt="Project Management"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ServiceHeader icon={ClipboardCheck} title="Project Management" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Don&apos;t know where to <br/> kickoff your project?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From procurement and scheduling to managing contractors and solving on-site challenges, our dedicated team handles every detail with precision. We utilize modern project management tools to track progress, optimize workflows, and resolve challenges quickly.
            </p>
            <FeatureList items={["Procurement Handling", "Workflow Optimization", "Contractor Oversight"]} />
            <CTAButton />
          </motion.div>
        </div>
      </section>


      <section id="interior" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <ServiceHeader icon={Paintbrush} title="Interior Decoration" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We excel in sleek <br/> interior designs
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Standard Homes, we transform interiors into spaces that reflect personality, functionality, and timeless style. Our interior design services focus on creating harmonious environments tailored to individual preferences and modern standards. From selecting premium materials to curating furniture layouts.
            </p>
            <FeatureList items={["Premium Materials", "Harmonious Layouts", "Timeless Style"]} />
            <CTAButton />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/Image-10-4-1024x1024.jpg"
              alt="Interior Design"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

    </main>
  );
}


function ServiceHeader({ icon: Icon, title }: { icon: LucideIcon, title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-[#a3e635]/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#16a34a]" />
      </div>
      <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
        {title}
      </span>
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 mb-10">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
          <CheckCircle2 className="w-5 h-5 text-[#a3e635]" /> {item}
        </li>
      ))}
    </ul>
  );
}

function CTAButton() {
  return (
    <Link href="/inquire">
      <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
        Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#a3e635]" />
      </button>
    </Link>
  );
}