"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// Removed unused imports

const tabs = [
  { id: "buy", label: "For Buyers" },
  { id: "sell", label: "For Sellers" },
  { id: "rent", label: "For Renters" },
];

export default function GuideTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      
      {/* --- 1. Premium Tab Switcher --- */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 bg-slate-100 rounded-full border border-slate-200 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white shadow-md"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeGuideTab"
                  className="absolute inset-0 bg-slate-900 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- 2. Content Panels --- */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          
          {/* BUYER GUIDE */}
          {activeTab === "buy" && (
            <GuidePanel key="buy" title="The Ultimate Guide to Buying Property">
              <GuideImage src="/hero-home-1.jpg" alt="Buying a Home" />
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Navigating the property market can be complex. Whether you&apos;re a first-time buyer or a seasoned investor, this guide will walk you through the essential steps to make a successful purchase.
              </p>
              <GuideSteps
                steps={[
                  { title: "Financial Preparation", desc: "Get pre-approved for a mortgage and understand your budget." },
                  { title: "Finding the Right Property", desc: "Use advanced filters to narrow down properties by location and price." },
                  { title: "Making an Offer & Closing", desc: "Submit a competitive offer and proceed through inspections." }
                ]}
              />
            </GuidePanel>
          )}

          {/* SELLER GUIDE */}
          {activeTab === "sell" && (
            <GuidePanel key="sell" title="A Seller's Handbook to Success">
              <GuideImage src="/hero-home-2.jpg" alt="Selling Property" />
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Selling your property for the best possible price requires careful planning and strategy. Follow our guide to ensure a smooth and profitable transaction.
              </p>
              <GuideSteps
                steps={[
                  { title: "Valuation & Prep", desc: "Get a professional valuation and enhance curb appeal." },
                  { title: "Strategic Marketing", desc: "Professional photography and targeted campaigns." },
                  { title: "Negotiation & Closing", desc: "Manage offers and finalize the sale with legal guidance." }
                ]}
              />
            </GuidePanel>
          )}

          {/* RENTER GUIDE */}
          {activeTab === "rent" && (
            <GuidePanel key="rent" title="Renting Made Simple: A Tenant's Guide">
              <GuideImage src="/office.jpg" alt="Renting Apartment" />
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Finding the perfect rental property should be an exciting experience. This guide covers everything from searching for a home to signing your lease.
              </p>
              <GuideSteps
                steps={[
                  { title: "Define Your Needs", desc: "Determine budget, location, and essential amenities." },
                  { title: "Application Process", desc: "Prepare documentation like ID and proof of income." },
                  { title: "Sign & Move In", desc: "Read the lease agreement carefully before signing." }
                ]}
              />
            </GuidePanel>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}


// --- Sub-components for Layout ---

function GuidePanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center lg:text-left">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

function GuideImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden mb-10 shadow-lg group">
      <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>
  );
}

function GuideSteps({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, idx) => (
        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#a3e635] hover:shadow-md transition-all group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-[#a3e635] transition-colors">
            <span className="font-bold text-slate-900">{idx + 1}</span>
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}