import Image from 'next/image';
import React from 'react';

interface LocationMapSectionProps {
  title: string;
  mapImageUrl: string;
  mapImageAlt: string;
}

const LocationMapSection: React.FC<LocationMapSectionProps> = ({ title, mapImageUrl, mapImageAlt }) => {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-serif font-bold text-amber-800 sm:text-5xl mb-12">
          {title}
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-6xl rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <Image
              src={mapImageUrl}
              alt={mapImageAlt}
              width={1200}
              height={600} // Use the image's aspect ratio
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;