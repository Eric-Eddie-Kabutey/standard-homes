import Image from 'next/image';
import React from 'react';

// Define the shape of a single property type's data
interface PropertyType {
  title: string;
  subtitle: string;
  imageUrl: string;
  details: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
}

// Sub-component for a single card
const PropertyTypeCard: React.FC<{ property: PropertyType }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl">
      <div className="p-4">
        <p className="font-semibold text-gray-500 text-sm">{property.title}</p>
        <h3 className="text-xl font-bold text-gray-800">{property.subtitle}</h3>
      </div>
      <div className="relative h-48 w-full">
        <Image src={property.imageUrl} alt={property.subtitle} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 space-y-3">
        {property.details.map((detail, index) => (
          <div key={index} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
            <div className="flex items-center text-gray-600">
              <span className="mr-3">{detail.icon}</span>
              {detail.label}
            </div>
            <p className="font-semibold text-gray-800">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


// Main section component
interface PropertyTypesSectionProps {
  title: string;
  types: PropertyType[];
}

const PropertyTypesSection: React.FC<PropertyTypesSectionProps> = ({ title, types }) => {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
        <h2 className="text-center text-4xl font-serif font-bold text-amber-800 sm:text-5xl mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {types.map((type, index) => (
            <PropertyTypeCard key={index} property={type} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypesSection;