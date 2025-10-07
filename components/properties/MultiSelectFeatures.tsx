"use-client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface MultiSelectFeaturesProps {
    allFeatures: string[];
    selectedFeatures: string[];
    onChange: (selected: string[]) => void;
}

const MultiSelectFeatures: React.FC<MultiSelectFeaturesProps> = ({ allFeatures, selectedFeatures, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Custom hook to close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    const handleSelect = (feature: string) => {
        const isSelected = selectedFeatures.includes(feature);
        if (isSelected) {
            // If already selected, remove it
            onChange(selectedFeatures.filter(f => f !== feature));
        } else {
            // If not selected, add it
            onChange([...selectedFeatures, feature]);
        }
    };

    const displayText = selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'No preference';

    return (
        <div className="relative" ref={wrapperRef}>
             <label htmlFor="features-multiselect" className="block text-sm font-semibold text-gray-700 mb-1">Features</label>
            <button
                id="features-multiselect"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm h-11 border-2 px-3 text-left"
            >
                <span className="truncate">{displayText}</span>
                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg border rounded-md max-h-60 overflow-auto">
                    <ul className="py-1">
                        {allFeatures.map((feature) => (
                            <li key={feature} className="px-3 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100">
                                <label className="flex items-center space-x-3 w-full cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedFeatures.includes(feature)}
                                        onChange={() => handleSelect(feature)}
                                        className="h-4 w-4 rounded border-gray-300 text-blue-800 focus:ring-blue-800"
                                    />
                                    <span>{feature}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MultiSelectFeatures;