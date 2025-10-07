import { Property } from "@/types/property-types";
import { formatCurrency } from "@/lib/utils";
import { BedDouble, Bath, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const priceDisplay = property.listingType === 'For Rent'
    ? `${formatCurrency(property.price.amount, property.price.currency)} /mo`
    : formatCurrency(property.price.amount, property.price.currency);

  return (
    <Link href={`/properties/${property.slug}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-56 w-full">
          <Image
            src={property.media.coverImage}
            alt={property.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div>
            <p className="text-2xl font-bold text-gray-800">{priceDisplay}</p>
            <h3 className="mt-2 text-xl font-semibold text-gray-900 truncate">{property.title}</h3>
            <p className="mt-1 text-gray-600 truncate">{property.summary}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex-grow flex flex-col justify-end">
            <div className="flex justify-between items-center text-gray-700">
              <div className="flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-gray-500" />
                <span>{property.details.bedrooms ?? 'N/A'} bd</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-gray-500" />
                <span>{property.details.bathrooms ?? 'N/A'} bt</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-gray-500" />
                <span>{property.details.area.value} {property.details.area.unit}</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                property.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                <span className={`h-2 w-2 mr-2 rounded-full ${
                  property.status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></span>
                {property.status}
              </span>
              <span className="text-sm font-medium text-blue-600 hover:text-blue-800">
                View Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;