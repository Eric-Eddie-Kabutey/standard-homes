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
    <section className="relative w-full py-32 flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-home-2 (1).jpg" 
          alt="Luxury Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      </div>

      {/* Form Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 max-w-5xl w-full mx-4"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#a3e635] bg-white mb-6 shadow-sm"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
              QUICK ENQUIRY ·
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Get specialist advice for residential, <br /> commercial or property
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="w-full h-14 px-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all"
            onChange={handleChange}
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full h-14 px-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all"
            onChange={handleChange}
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            required
            className="w-full h-14 px-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all"
            onChange={handleChange}
          />
          
          <select
            name="inquiryType"
            className="w-full h-14 px-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all appearance-none text-gray-600"
            onChange={handleChange}
          >
            <option>Residential Property</option>
            <option>Commercial Project</option>
            <option>Land Purchase</option>
            <option>Borehole Solutions</option>
            <option>Other</option>
          </select>

          <div className="md:col-span-2 flex flex-col items-center mt-4">
            <button
              type="submit"
              disabled={status === "success"}
              className="group w-full md:w-auto px-10 py-4 bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {status === "success" ? "Success! We'll call you soon" : "Get A Call Back"}
              {status !== "success" && <ArrowUpRight className="w-5 h-5" />}
            </button>
            
            <p className="text-xs text-gray-400 mt-4">
              Required fields are marked *
            </p>
          </div>
        </form>

      </motion.div>
    </section>
  );
}