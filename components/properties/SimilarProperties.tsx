import { Property } from "@/types/property-types";
import PropertyCard from "./PropertyCard";

interface SimilarPropertiesProps {
  title: string; // Add a title prop
  properties: Property[];
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({ title, properties }) => {
  // If there are no properties for this section, don't render it.
  if (!properties || properties.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      {/* Use the dynamic title prop */}
      <h2 className="text-3xl font-normal text-gray-900 mb-8">
        {title}
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;