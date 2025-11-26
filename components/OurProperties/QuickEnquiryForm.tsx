"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function QuickEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Residential Property",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const message = `Hello Standard Homes, I'm interested in ${formData.inquiryType}. My name is ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/2207922004?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <section className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden px-4 md:px-8">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-home-2 (1).jpg" 
          alt="Luxury Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 lg:p-20 w-full max-w-[1600px]"
      >
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#a3e635] bg-white mb-8 shadow-sm"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
              QUICK ENQUIRY
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight max-w-5xl">
            Get specialist advice for residential, <br className="hidden md:block" /> commercial or property
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              className="w-full h-16 px-8 bg-gray-50 rounded-[2rem] border border-transparent focus:border-[#a3e635] focus:bg-white focus:ring-0 outline-none transition-all text-lg"
              onChange={handleChange}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="w-full h-16 px-8 bg-gray-50 rounded-[2rem] border border-transparent focus:border-[#a3e635] focus:bg-white focus:ring-0 outline-none transition-all text-lg"
              onChange={handleChange}
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              required
              className="w-full h-16 px-8 bg-gray-50 rounded-[2rem] border border-transparent focus:border-[#a3e635] focus:bg-white focus:ring-0 outline-none transition-all text-lg"
              onChange={handleChange}
            />
            
            <div className="relative">
                <select
                    name="inquiryType"
                    className="w-full h-16 px-8 bg-gray-50 rounded-[2rem] border border-transparent focus:border-[#a3e635] focus:bg-white focus:ring-0 outline-none transition-all appearance-none text-gray-600 text-lg cursor-pointer"
                    onChange={handleChange}
                >
                    <option>Residential Property</option>
                    <option>Commercial Project</option>
                    <option>Land Purchase</option>
                    <option>Borehole Solutions</option>
                    <option>Other</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <div className="md:col-span-2 flex flex-col items-center mt-8">
              <button
                type="submit"
                disabled={status === "success"}
                className="group w-full md:w-auto px-12 py-5 bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 text-xl font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {status === "success" ? "Success! We'll call you soon" : "Get A Call Back"}
                {status !== "success" && <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />}
              </button>
              
              <p className="text-sm text-gray-400 mt-6 font-medium">
                Required fields are marked *
              </p>
            </div>
          </form>
        </div>

      </motion.div>
    </section>
  );
}