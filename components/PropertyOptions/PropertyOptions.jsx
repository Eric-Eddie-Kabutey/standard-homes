"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Home,
  Sparkles,
  ArrowRight,
  Gem,
  Rocket,
  Plus,
  MoveRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PropertyOptions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-slate-900 overflow-hidden">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full space-y-24 px-4 sm:px-6 lg:px-8"
      >

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Card 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-10 flex flex-col items-start h-full">
                <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/40">
                  <Home className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Own a Property?</h3>
                <p className="text-slate-300 mb-8">Rent or sell your home with ease.</p>

                <Link href="/inquire" className="w-full mt-auto">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white h-12 text-lg shadow-lg shadow-indigo-900/20">
                    Rent / Sales
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-10 flex flex-col items-start h-full">
                <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/40">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Need a Home?</h3>
                <p className="text-slate-300 mb-8">Find your perfect apartment or house.</p>

                <Link href="/properties" className="w-full mt-auto">
                  <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white h-12 text-lg shadow-lg shadow-amber-900/20">
                    Search Properties
                  </Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>


        <motion.div 
          variants={itemVariants}
          className="relative w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-12 lg:p-20 max-w-none"
        >

          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">

            {/* WHO WE ARE + Title */}
            <div className="space-y-6">
              
            <Link
  href="/about"
  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime-400 bg-white cursor-pointer overflow-hidden"
>
  <motion.span
    animate={{ x: [-10, 10, -10] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="text-xs font-bold uppercase tracking-wider text-slate-900 inline-block"
  >
    WHO WE ARE
  </motion.span>

  <MoveRight className="w-3 h-3 text-lime-500 shrink-0" />
</Link>


              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                The largest privately held real estate investors and managers in the world
              </h2>
            </div>

            {/* Vision + Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pt-14">

              {/* Vision */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                  <Gem className="w-5 h-5" strokeWidth={2.5} />
                  <h3>Our vision</h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-base">
                  To empower communities with world-class homes, infrastructure, and water solutions that stand the test of time.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                  <Rocket className="w-5 h-5" strokeWidth={2.5} />
                  <h3>Our mission</h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-base">
                  Our solutions are crafted with excellence to meet the growing housing needs of The Gambia — building trust, one home at a time.
                </p>
              </div>

            </div>

          </div>


          {/* Image + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Large Photo */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-auto min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-inner">
              <Image 
                src="/hero-home-1.jpg"
                alt="Modern Luxury Building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Stats Section */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Stat 1 */}
              <div className="bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-between h-[240px] hover:bg-slate-100 transition">
                <span className="text-xs font-bold text-slate-500 uppercase">Global Reach</span>

                <div>
                  <div className="flex items-start">
                    <span className="text-6xl font-bold text-slate-900 tracking-tighter">50</span>
                    <Plus className="w-6 h-6 text-lime-400 mt-2 stroke-[4px]" />
                  </div>
                  <p className="text-slate-500 mt-2 font-medium">Projects Nationwide</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-between h-[240px] hover:bg-slate-100 transition">
                <span className="text-xs font-bold text-slate-500 uppercase">Local Expertise</span>

                <div>
                  <div className="flex items-start">
                    <span className="text-6xl font-bold text-slate-900 tracking-tighter">1000</span>
                    <Plus className="w-6 h-6 text-lime-400 mt-2 stroke-[4px]" />
                  </div>
                  <p className="text-slate-500 mt-2 font-medium">Homes Delivered</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="md:col-span-2 bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-between h-[240px] hover:bg-slate-100 transition">
                <span className="text-xs font-bold text-slate-500 uppercase">Our Impact</span>

                <div>
                  <div className="flex items-start">
                    <span className="text-6xl font-bold text-slate-900 tracking-tighter">200</span>
                    <Plus className="w-6 h-6 text-lime-400 mt-2 stroke-[4px]" />
                  </div>
                  <p className="text-slate-500 mt-2 font-medium">Happy Families</p>
                </div>
              </div>

              <Link 
                href="/inquire"
                className="hidden lg:flex bg-lime-300 rounded-[2rem] p-8 flex-col justify-center items-center text-center cursor-pointer hover:bg-lime-400 transition"
              >
                <span className="text-slate-900 font-bold text-lg">Start Your Journey</span>

                <div className="bg-white rounded-full p-3 mt-4">
                  <ArrowRight className="w-6 h-6 text-slate-900" />
                </div>
              </Link>

            </div>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}