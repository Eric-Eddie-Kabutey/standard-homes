"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, ArrowUp, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const text = `New Inquiry from ${formData.firstName} ${formData.lastName}:\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/2203012345?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <main className="relative w-full bg-white overflow-hidden">
      
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/office.jpg" 
            alt="Standard Homes Office" 
            fill 
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-white" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Get in touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            Our global real estate experts are here <br className="hidden md:block" />
            to help you in this ever-changing market.
          </motion.p>
        </div>
      </section>


      <section className="relative z-20 -mt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <ContactCard 
              icon={Mail} 
              title="Support email" 
              info="contact@standardhomesgambia.com" 
              btnText="Email Us"
              link="mailto:contact@standardhomesgambia.com"
              delay={0}
            />

            <ContactCard 
              icon={Phone} 
              title="Phone number" 
              info="+220 301 2345" 
              btnText="Call Us"
              link="tel:+2203012345"
              delay={0.1}
            />

            <ContactCard 
              icon={MapPin} 
              title="Location" 
              info="2nd Floor MSJ Plaza, OIC Highway Brusubi, The Gambia" 
              btnText="Visit Us"
              link="https://maps.google.com/?q=MSJ+Plaza+Brusubi+Gambia"
              delay={0.2}
            />

          </div>
        </div>
      </section>


      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-10"
            >
              Leave a message
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="First Name*" 
                  required
                  className="w-full h-14 px-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all"
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Last Name*" 
                  required
                  className="w-full h-14 px-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all"
                  onChange={handleChange}
                />
              </div>
              
              <input 
                type="email" 
                name="email" 
                placeholder="Email*" 
                required
                className="w-full h-14 px-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all"
                onChange={handleChange}
              />

              <textarea 
                name="message" 
                placeholder="Message..." 
                rows={6}
                required
                className="w-full p-6 bg-gray-50 rounded-2xl border border-transparent focus:border-[#a3e635] focus:ring-0 outline-none transition-all resize-none"
                onChange={handleChange}
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "success"}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-slate-200 font-bold text-slate-900 hover:border-[#a3e635] hover:bg-[#a3e635] transition-all shadow-sm"
              >
                {status === "success" ? "Message Sent!" : "Submit"}
                {status !== "success" && (
                   <div className="w-8 h-8 rounded-full bg-[#a3e635] flex items-center justify-center -mr-4 group-hover:bg-white">
                      <ArrowUpRight className="w-4 h-4 text-slate-900" />
                   </div>
                )}
              </motion.button>
            </form>

            {/* Bottom Thumbnails */}
            <div className="mt-16 flex gap-6">
              <div className="w-32 h-20 rounded-2xl overflow-hidden relative shadow-md hover:scale-105 transition-transform cursor-pointer">
                <Image src="/hero-home-1.jpg" alt="Project 1" fill className="object-cover" />
              </div>
              <div className="w-32 h-20 rounded-2xl overflow-hidden relative shadow-md hover:scale-105 transition-transform cursor-pointer">
                <Image src="/hero-home-2.jpg" alt="Project 2" fill className="object-cover" />
              </div>
            </div>
          </div>


          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[600px] rounded-[2.5rem] overflow-hidden shadow-xl relative bg-slate-100"
          >
            <iframe
              title="Standard Homes Gambia Location"
              src="https://maps.google.com/maps?q=AU+Summit+Highway+near+Africmed+at+MSJ+Plaza,+Brusubi,+The+Gambia&z=15&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
              <h4 className="font-bold text-slate-900 mb-1">Sales Office</h4>
              <p className="text-sm text-slate-500 mb-4">
                2nd Floor MSJ Plaza, OIC Highway Brusubi, The Gambia
              </p>
              <div className="flex items-center gap-1 text-xs font-bold text-[#10b981]">
                 <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                 Open Now
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 z-50 hidden md:flex"
      >
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 rounded-full bg-[#a3e635] flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300 border-4 border-white"
        >
          <ArrowUp className="w-6 h-6 text-slate-900" />
        </div>
      </motion.div>

    </main>
  );
}

interface ContactCardProps {
    icon: LucideIcon;
    title: string;
    info: string;
    btnText: string;
    link: string;
    delay: number;
}

function ContactCard({ icon: Icon, title, info, btnText, link, delay }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100 flex flex-col items-start h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="mb-6">
        <Icon className="w-6 h-6 text-slate-900" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 mb-8 text-sm leading-relaxed h-12 overflow-hidden">
        {info}
      </p>

      <a href={link} target="_blank" rel="noreferrer" className="w-full mt-auto">
        <Button className="w-full bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 font-bold rounded-xl h-12 shadow-sm group-hover:shadow-md transition-all">
          {btnText}
        </Button>
      </a>
    </motion.div>
  );
}