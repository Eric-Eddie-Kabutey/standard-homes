"use client";

import { useState, useMemo } from "react";
import { Property } from "@/types/property-types";
import PropertyCard from "./PropertyCard";
import FilterSection, { Filters } from "./FilterSection";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ArrowDownCircle } from "lucide-react";

const PROPERTIES_PER_PAGE = 6;

export default function PropertyListings({ properties }: { properties: Property[] }) {  
  const [activeCountry, setActiveCountry] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(PROPERTIES_PER_PAGE);
  
  const [filters, setFilters] = useState<Filters>({
    type: "all",
    location: "all",
    buildingType: "all",
    bedrooms: "all",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    features: [],
    onlyNewConstruction: false,
  });

  // --- DERIVED DATA & FILTERING LOGIC ---
  const countries = useMemo(() => ["ALL", ...Array.from(new Set(properties.map(p => p.location.country)))], [properties]);

  const filteredProperties = useMemo(() => {
    let result = properties;

    // 1. Filter by Country Tab
    if (activeCountry !== "ALL") {
      result = result.filter(p => p.location.country === activeCountry);
    }

    // 2. Apply Advanced Filters
    result = result.filter(p => {
      const { type, location, buildingType, bedrooms, minPrice, maxPrice, minArea, maxArea, features, onlyNewConstruction } = filters;
      
      if (type !== "all") {
        const [propType, listType] = type.split('_');
        if (p.propertyType !== propType || p.listingType !== listType) return false;
      }
      if (location !== "all" && p.location.city !== location) return false;
      if (buildingType !== "all" && p.buildingType !== buildingType) return false;
      if (bedrooms !== "all" && (p.details.bedrooms ?? 0) < parseInt(bedrooms)) return false;
      if (minPrice && p.price.amount < parseInt(minPrice)) return false;
      if (maxPrice && p.price.amount > parseInt(maxPrice)) return false;
      if (minArea && p.details.area.value < parseInt(minArea)) return false;
      if (maxArea && p.details.area.value > parseInt(maxArea)) return false;
      if (features.length > 0 && !features.every(feat => p.features.includes(feat))) return false;
      if (onlyNewConstruction) {
        const currentYear = new Date().getFullYear();
        if (!p.details.yearConstructed || p.details.yearConstructed < currentYear - 3) return false;
      }
      return true;
    });

    return result;
  }, [properties, activeCountry, filters]);

  // --- HANDLERS ---
  const handleFilterChange = (name: string, value: unknown) => {
    setFilters(prev => ({ ...prev, [name]: value }));
    setVisibleCount(PROPERTIES_PER_PAGE);
  };

  const showMoreProperties = () => {
    setVisibleCount(prev => prev + PROPERTIES_PER_PAGE);
  };
    
  return (
    <section className="min-h-screen bg-[#F8F7F4] pt-32 lg:pt-48 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Header Section --- */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635] text-[#16a34a] mb-6 bg-white shadow-sm"
          >
            <LayoutGrid className="w-4 h-4" />
            <motion.span
           animate={{ x: [-10, 10, -10] }}
           transition={{
           duration: 3,
           repeat: Infinity,
           ease: "easeInOut",
           }}
          className="text-[10px] font-bold uppercase tracking-widest inline-block"
        >
        OUR PORTFOLIO
       </motion.span>

          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-8"
          >
            Find your perfect <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">investment.</span>
          </motion.h1>

          {/* --- 2. Country Tabs --- */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap justify-center gap-3"
          >
            {countries.map(country => (
              <button
                key={country}
                onClick={() => { setActiveCountry(country); setVisibleCount(PROPERTIES_PER_PAGE); }}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCountry === country
                    ? 'bg-slate-900 text-[#a3e635] border-slate-900 shadow-md transform scale-105'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#a3e635] hover:text-slate-900'
                }`}
              >
                {country === "ALL" ? "All Locations" : country}
              </button>
            ))}
          </motion.div>
        </div>

        {/* --- 3. Filter Component --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FilterSection 
            filters={filters}
            onFilterChange={handleFilterChange}
            properties={properties}
          />
        </motion.div>

        {/* --- 4. Results Bar --- */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">
            Available Listings
          </h3>
          <span className="text-sm font-medium text-slate-500 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
            {filteredProperties.length} Properties Found
          </span>
        </div>

        {/* --- 5. Property Grid --- */}
        <AnimatePresence mode="wait">
          {filteredProperties.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.slice(0, visibleCount).map((property, index) => (
                <motion.div
                  key={property._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-[2rem] border border-slate-100"
            >
              <p className="text-lg text-slate-500">No properties found matching your criteria.</p>
              <button 
                onClick={() => handleFilterChange('type', 'all')}
                className="mt-4 text-[#16a34a] font-bold hover:underline"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- 6. Load More Button --- */}
        {visibleCount < filteredProperties.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button
              onClick={showMoreProperties}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Show More Properties
              <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
