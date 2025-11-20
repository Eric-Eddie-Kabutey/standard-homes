"use client";

import React, { useMemo } from "react";
import { Property } from "@/types/property-types";
import MultiSelectFeatures from "./MultiSelectFeatures";

// Define the shape of the filters object
export type Filters = {
  type: string;
  location: string;
  buildingType: string;
  bedrooms: string;
  minPrice: string;
  maxPrice: string;
  minArea: string;
  maxArea: string;
  features: string[];
  onlyNewConstruction: boolean;
};

interface FilterSectionProps {
  filters: Filters;
  onFilterChange: (name: string, value: unknown) => void;
  properties: Property[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, onFilterChange, properties }) => {
  // Memoize unique values
  const uniqueLocations = useMemo(() => [...new Set(properties.map(p => p.location.city))].sort(), [properties]);
  const uniqueBuildingTypes = useMemo(() => [...new Set(properties.map(p => p.buildingType))].sort(), [properties]);
  const uniqueFeatures = useMemo(() => [...new Set(properties.flatMap(p => p.features))].sort(), [properties]);

  const isResidential = filters.type.startsWith('Residential');

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'Residential_For Sale', label: 'Residentials for sale' },
    { value: 'Residential_For Rent', label: 'Residentials for rent' },
    { value: 'Commercial_For Rent', label: 'Commercials for rent' },
    { value: 'Land_For Sale', label: 'Land for sale' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const finalValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;
    onFilterChange(name, finalValue);
  };

  // Shared styling classes for inputs
  const inputClass = "block w-full rounded-lg border-slate-200 bg-gray-50 text-slate-700 shadow-sm focus:border-[#a3e635] focus:ring-[#a3e635] focus:ring-opacity-50 sm:text-sm h-11 transition-all px-3 outline-none";
  const labelClass = "block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1.5 ml-1";

  return (
    <section className="bg-white p-8 rounded-[2rem] mb-12 border border-slate-100 shadow-xl shadow-slate-200/40">
      
      {/* Header */}
      <div className="mb-8 border-b border-slate-100 pb-4">
         <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a3e635]"></span>
            Filter Properties
         </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        
        {/* --- Row 1: Core Filters --- */}
        <div className="space-y-1">
          <label htmlFor="type" className={labelClass}>Property Type</label>
          <select id="type" name="type" value={filters.type} onChange={handleChange} className={inputClass}>
            {typeOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        
        <div className="space-y-1">
          <label htmlFor="location" className={labelClass}>Location</label>
          <select id="location" name="location" value={filters.location} onChange={handleChange} className={inputClass}>
            <option value="all">Any Location</option>
            {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>
        
        <div className="space-y-1">
          <label htmlFor="buildingType" className={labelClass}>Building Category</label>
          <select id="buildingType" name="buildingType" value={filters.buildingType} onChange={handleChange} className={inputClass}>
            <option value="all">Any Category</option>
            {uniqueBuildingTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        
        {/* --- Row 2: Specifics (Conditional) --- */}
        {isResidential && (
          <div className="space-y-1">
            <label htmlFor="bedrooms" className={labelClass}>Bedrooms</label>
            <select id="bedrooms" name="bedrooms" value={filters.bedrooms} onChange={handleChange} className={inputClass}>
              <option value="all">Any</option>
              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}+ Bedrooms</option>)}
            </select>
          </div>
        )}
        
        {/* --- Price Range --- */}
        <div className={`${isResidential ? '' : 'lg:col-start-1'}`}>
           <label className={labelClass}>Price Range</label>
           <div className="grid grid-cols-2 gap-3">
              <input type="number" name="minPrice" value={filters.minPrice} onChange={handleChange} placeholder="Min $" className={inputClass} />
              <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleChange} placeholder="Max $" className={inputClass} />
           </div>
        </div>

        <div>
           <label className={labelClass}>Area Size (m²)</label>
           <div className="grid grid-cols-2 gap-3">
              <input type="number" name="minArea" value={filters.minArea} onChange={handleChange} placeholder="Min" className={inputClass} />
              <input type="number" name="maxArea" value={filters.maxArea} onChange={handleChange} placeholder="Max" className={inputClass} />
           </div>
        </div>

        <div className="lg:col-span-2 pt-2">
           <label className={labelClass}>Features</label>
           <MultiSelectFeatures
             allFeatures={uniqueFeatures}
             selectedFeatures={filters.features}
             onChange={(newSelected) => onFilterChange('features', newSelected)}
           />
        </div>
        
        <div className="flex items-end pb-3 lg:justify-end">
            <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                   <input 
                     type="checkbox" 
                     name="onlyNewConstruction" 
                     checked={filters.onlyNewConstruction} 
                     onChange={handleChange} 
                     className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-[#a3e635] checked:bg-[#a3e635]"
                   />
                   <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                     </svg>
                   </div>
                </div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors select-none">
                   Only New Construction
                </span>
            </label>
        </div>

      </div>
    </section>
  );
};
export default FilterSection;