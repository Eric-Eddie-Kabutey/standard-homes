"use client";

import { useState, useMemo } from "react";
import { Property } from "@/types/property-types";
import PropertyCard from "./PropertyCard";
import FilterSection, { Filters } from "./FilterSection";
import { motion, AnimatePresence } from "framer-motion";

const PROPERTIES_PER_PAGE = 6;

export default function PropertyListings({ properties }: { properties: Property[] }) {
  // --- STATE MANAGEMENT ---

  const [activeCountry, setActiveCountry] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(PROPERTIES_PER_PAGE);
  
  // The master state object for all advanced filters
  const [filters, setFilters] = useState<Filters>({
    type: "all",
    location: "all",
    buildingType: "all",
    bedrooms: "all",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    features: [], // Initial state for multi-select is an empty array
    onlyNewConstruction: false,
  });

  // --- DERIVED DATA & FILTERING LOGIC ---

  // Get a unique list of countries from the property data
  const countries = useMemo(() => ["ALL", ...Array.from(new Set(properties.map(p => p.location.country)))], [properties]);

  // The core filtering logic, recalculated only when data or filters change
  const filteredProperties = useMemo(() => {
    let result = properties;

    // 1. Filter by the active country tab first
    if (activeCountry !== "ALL") {
      result = result.filter(p => p.location.country === activeCountry);
    }

    // 2. Apply all advanced filters from the state
    result = result.filter(p => {
      const { type, location, buildingType, bedrooms, minPrice, maxPrice, minArea, maxArea, features, onlyNewConstruction } = filters;
      
      // Filter by combined type (e.g., "Residential_For Sale")
      if (type !== "all") {
        const [propType, listType] = type.split('_');
        if (p.propertyType !== propType || p.listingType !== listType) return false;
      }
      
      // Filter by location (city)
      if (location !== "all" && p.location.city !== location) return false;

      // Filter by building type
      if (buildingType !== "all" && p.buildingType !== buildingType) return false;
      
      // Filter by minimum number of bedrooms (only if a value is selected)
      if (bedrooms !== "all" && (p.details.bedrooms ?? 0) < parseInt(bedrooms)) return false;

      // Filter by price range
      if (minPrice && p.price.amount < parseInt(minPrice)) return false;
      if (maxPrice && p.price.amount > parseInt(maxPrice)) return false;

      // Filter by area range
      if (minArea && p.details.area.value < parseInt(minArea)) return false;
      if (maxArea && p.details.area.value > parseInt(maxArea)) return false;

      // Filter by features: The property must contain ALL selected features
      if (features.length > 0) {
        if (!features.every(feat => p.features.includes(feat))) {
            return false;
        }
      }
      
      // Filter by new construction (e.g., built in the last 3 years)
      if (onlyNewConstruction) {
        const currentYear = new Date().getFullYear();
        if (!p.details.yearConstructed || p.details.yearConstructed < currentYear - 3) return false;
      }
      
      // If the property passes all checks, include it in the result
      return true;
    });

    return result;
  }, [properties, activeCountry, filters]);

  // --- EVENT HANDLERS ---

  // A single, flexible handler to update any filter in the state object
  const handleFilterChange = (name: string, value: unknown) => {
    setFilters(prev => ({ ...prev, [name]: value }));
    setVisibleCount(PROPERTIES_PER_PAGE); // Reset pagination whenever a filter changes
  };

  // Handler for the "Show More" button
  const showMoreProperties = () => {
    setVisibleCount(prev => prev + PROPERTIES_PER_PAGE);
  };
  
  // --- RENDER ---
  return (
    <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4 py-12">
      {/* Top Level Country Tabs */}
      <div className="flex justify-center border-b lg:border-none border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {countries.map(country => (
            <button
              key={country}
              onClick={() => { setActiveCountry(country); setVisibleCount(PROPERTIES_PER_PAGE); }}
              className={`${
                activeCountry === country
                  ? 'lg:bg-yellow-500 border-indigo-600 lg:border-none text-indigo-700 lg:text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 lg:py-2 px-1 lg:px-10 border-b-2 lg:border-yellow-600 lg:border font-medium text-sm transition-colors lg:rounded-full`}
            >
              {country}
            </button>
          ))}
        </nav>
      </div>

      {/* The advanced filter form component */}
      <FilterSection 
        filters={filters}
        onFilterChange={handleFilterChange}
        properties={properties}
      />

      {/* Results Count Display */}
      <div className="mb-6 flex ">
        <p className="text-lg font-semibold text-gray-800 ml-auto">{filteredProperties.length} results found</p>
      </div>

      {/* Animated Property Grid */}
      <AnimatePresence>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.slice(0, visibleCount).map((property, index) => (
            <motion.div
              key={property._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* "Show More" Button - only appears if there are more results to load */}
      {visibleCount < filteredProperties.length && (
        <div className="mt-12 text-center">
          <button
            onClick={showMoreProperties}
            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}