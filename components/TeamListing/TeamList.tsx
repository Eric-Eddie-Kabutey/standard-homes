"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Twitter, X, LucideIcon } from "lucide-react";

interface TeamMember {
    name: string;
    position: string;
    image: string;
    social: {
        linkedin: string;
        facebook: string;
        twitter: string;
    }
}

// Team Data
const members: TeamMember[] = [
  {
    name: 'Kebba Sanneh',
    position: 'CEO',
    image: '/ceo.jpg',
    social: { linkedin: '#', facebook: '#', twitter: '#' }
  },
  {
    name: 'Ramatoulie Fatty',
    position: 'Sales & Marketing Manager',
    image: '/sales-manager.jpg',
    social: { linkedin: '#', facebook: '#', twitter: '#' }
  },
  {
    name: 'Kadijatou Jallow',
    position: 'Marketer',
    image: '/marketer.jpg',
    social: { linkedin: '#', facebook: '#', twitter: '#' }
  },
  {
    name: 'Ismaila Sillah',
    position: 'Rent Manager',
    image: '/rent-manager.jpg',
    social: { linkedin: '#', facebook: '#', twitter: '#' }
  },
  {
    name: 'Absa Njie',
    position: 'Secretary',
    image: '/sect.jpg',
    social: { linkedin: '#', facebook: '#', twitter: '#' }
  },
  {
    name: 'Rohey John',
    position: 'Marketer',
    image: '/marketer-2.jpg',
    social: { linkedin: '#', facebook: '#', twitter: '#' }
  },
];

export default function TeamList() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden text-slate-900">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="inline-flex items-center justify-center w-32 h-8 rounded-full border border-[#a3e635] bg-white mb-8 shadow-sm"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
              OUR EXPERTS ·
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Meet the people <br /> behind the vision
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
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
      className="group relative w-full h-[500px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out"
    >
      <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-[#a3e635]">
        <X className="w-5 h-5 text-white group-hover:text-slate-900" strokeWidth={2.5} />
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
            {member.position}
          </p>
          <h3 className="text-3xl font-bold text-white mb-6">
            {member.name}
          </h3>

          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <SocialIcon href={member.social.linkedin} icon={Linkedin} />
            <SocialIcon href={member.social.facebook} icon={Facebook} />
            <SocialIcon href={member.social.twitter} icon={Twitter} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: LucideIcon }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#a3e635] hover:text-slate-900 text-white transition-all duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}