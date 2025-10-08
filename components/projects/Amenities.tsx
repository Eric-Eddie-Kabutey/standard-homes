import React from 'react';
import { ImageCarousel } from './ImageCarousel';

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface AmenitiesSectionProps {
  title: string;
  amenities: Amenity[];
  images: string[];
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ title, amenities, images }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Carousel */}
          <div className="w-full aspect-w-4 aspect-h-3">
            <ImageCarousel images={images} />
          </div>

          {/* Right Column: Amenities Grid */}
          <div>
            <h2 className="text-center text-4xl font-serif font-bold text-amber-800 sm:text-5xl mb-12">
              {title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-amber-50 rounded-full mb-3">
                    {/* The icon is passed as a React component */}
                    {amenity.icon}
                  </div>
                  <p className="font-semibold text-gray-700">{amenity.label}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;