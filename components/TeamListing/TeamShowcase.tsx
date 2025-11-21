"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Kebba Sanneh",
    role: "CEO",
    image: "/ceo.jpg", 
  },
  {
    id: 2,
    name: "Ramatoulie Fatty",
    role: "Sales & Marketing Manager",
    image: "/sales-manager.jpg", 
  },
  {
    id: 3,
    name: "Kadijatou Jallow",
    role: "Marketer",
    image: "/marketer.jpg", 
  },
  {
    id: 4,
    name: "Ismaila Sillah",
    role: "Rent Manager",
    image: "/rent-manager.jpg", 
  },
  {
    id: 5,
    name: "Absa Njie",
    role: "Secretary",
    image: "/sect.jpg", 
  },
];

export default function TeamShowcase() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden text-slate-900">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="inline-flex items-center justify-center w-32 h-8 rounded-full border border-[#a3e635] bg-white mb-8 shadow-sm"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
            MEET THE TEAM ·
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Global executive <br /> leadership
        </motion.h2>
      </div>

      {/* Team Grid */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
      
    </section>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] h-[450px] bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out"
    >
      {/* Top Icon */}
      <div className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-[#F8F7F4] group-hover:bg-[#a3e635] flex items-center justify-center transition-all duration-300">
        <X className="w-4 h-4 text-slate-400 group-hover:text-slate-900" strokeWidth={2.5} />
      </div>

      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
          {member.role}
        </p>
        <h3 className="text-2xl font-bold text-white">
          {member.name}
        </h3>
      </div>
    </motion.div>
  );
}