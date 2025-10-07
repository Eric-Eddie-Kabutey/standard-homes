"use client";

import { useMemo } from "react";
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
  // Memoize unique values to prevent recalculation on every render
  const uniqueLocations = useMemo(() => [...new Set(properties.map(p => p.location.city))].sort(), [properties]);
  const uniqueBuildingTypes = useMemo(() => [...new Set(properties.map(p => p.buildingType))].sort(), [properties]);
  const uniqueFeatures = useMemo(() => [...new Set(properties.flatMap(p => p.features))].sort(), [properties]);

  // Conditional logic: "Bedrooms" filter should only show for residential properties
  const isResidential = filters.type.startsWith('Residential');

  // Combined type options for the main dropdown
  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'Residential_For Sale', label: 'Residentials for sale' },
    { value: 'Residential_For Rent', label: 'Residentials for rent' },
    { value: 'Commercial_For Rent', label: 'Commercials for rent' },
    { value: 'Land_For Sale', label: 'Land for sale' },
  ];

  // This is the single, reliable handler for all standard form elements.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    // For checkboxes, we need the `checked` property, not the `value`.
    const finalValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;
    onFilterChange(name, finalValue);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg mb-8 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        
        {/* --- Row 1 --- */}
        <div>
          <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-1">Type</label>
          <select id="type" name="type" value={filters.type} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2">
            {typeOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
          <select id="location" name="location" value={filters.location} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2">
            <option value="all">No preference</option>
            {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>
        
        <div>
          <label htmlFor="buildingType" className="block text-sm font-semibold text-gray-700 mb-1">Building type</label>
          <select id="buildingType" name="buildingType" value={filters.buildingType} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2">
            <option value="all">No preference</option>
            {uniqueBuildingTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        
        {/* --- Row 2 (Conditional Bedrooms) --- */}
        {isResidential && (
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-semibold text-gray-700 mb-1">Bedrooms</label>
            <select id="bedrooms" name="bedrooms" value={filters.bedrooms} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2">
              <option value="all">No preference</option>
              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}+ Bedrooms</option>)}
            </select>
          </div>
        )}
        
        {/* --- Price & Area inputs --- */}
        <div className={`grid grid-cols-2 gap-x-4 ${isResidential ? '' : 'lg:col-start-1'}`}>
          <div>
            <label htmlFor="minPrice" className="block text-sm font-semibold text-gray-700 mb-1">Min price</label>
            <input type="number" id="minPrice" name="minPrice" value={filters.minPrice} onChange={handleChange} placeholder="Min $" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2" />
          </div>
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-semibold text-gray-700 mb-1">Max price</label>
            <input type="number" id="maxPrice" name="maxPrice" value={filters.maxPrice} onChange={handleChange} placeholder="Max $" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label htmlFor="minArea" className="block text-sm font-semibold text-gray-700 mb-1">Min area</label>
            <input type="number" id="minArea" name="minArea" value={filters.minArea} onChange={handleChange} placeholder="Min m²" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2" />
          </div>
          <div>
            <label htmlFor="maxArea" className="block text-sm font-semibold text-gray-700 mb-1">Max area</label>
            <input type="number" id="maxArea" name="maxArea" value={filters.maxArea} onChange={handleChange} placeholder="Max m²" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2" />
          </div>
        </div>

        {/* --- Features (Multi-select) and New Construction (Checkbox) --- */}
        <MultiSelectFeatures
          allFeatures={uniqueFeatures}
          selectedFeatures={filters.features}
          onChange={(newSelected) => onFilterChange('features', newSelected)}
        />
        
        <div className="flex items-end pb-2">
            <div className="flex items-center">
                <input id="onlyNewConstruction" name="onlyNewConstruction" type="checkbox" checked={filters.onlyNewConstruction} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-blue-800 focus:ring-blue-800"/>
                <label htmlFor="onlyNewConstruction" className="ml-2 block text-sm font-semibold text-gray-700">Only new construction</label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;