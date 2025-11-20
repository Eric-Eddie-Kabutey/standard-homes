import { Property } from "@/types/property-types";
import { formatCurrency } from "@/lib/utils";
import { BedDouble, Bath, Ruler, MapPin, ArrowUpRight } from "lucide-react";
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
    <Link href={`/properties/${property.slug}`} className="block h-full">
      <div className="group relative h-full bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100">
        
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={property.media.coverImage}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

          <div className="absolute top-4 left-4">
             <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${
                property.status === 'Available' 
                  ? 'bg-[#16a34a] text-white' 
                  : 'bg-amber-500 text-white'
             }`}>
                {property.status}
             </span>
          </div>

          <div className="absolute top-4 right-4">
             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-slate-900 shadow-sm backdrop-blur-md">
                {property.listingType}
             </span>
          </div>
        </div>

        <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
          
          <div className="mb-4">
            <div className="flex items-start justify-between gap-2">
               <h3 className="text-xl font-bold text-slate-900 line-clamp-1 group-hover:text-[#16a34a] transition-colors">
                 {property.title}
               </h3>
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
               <MapPin className="w-3.5 h-3.5 text-[#a3e635]" />
               <span className="truncate">{property.location.city}, {property.location.country}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
             <p className="text-2xl font-bold text-slate-900">
               {priceDisplay}
             </p>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-slate-100 mb-6" />

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#F8F7F4]">
              <BedDouble className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-bold text-slate-700">{property.details.bedrooms ?? '-'} Beds</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#F8F7F4]">
              <Bath className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-bold text-slate-700">{property.details.bathrooms ?? '-'} Baths</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#F8F7F4]">
              <Ruler className="w-5 h-5 text-slate-400 mb-1" />
              <span className="text-xs font-bold text-slate-700 truncate max-w-full px-1">
                 {property.details.area.value} <span className="text-[10px]">{property.details.area.unit}</span>
              </span>
            </div>
          </div>

          {/* Footer / CTA */}
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
             <span className="text-sm font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                View Details
             </span>
             <div className="w-10 h-10 rounded-full bg-[#F8F7F4] group-hover:bg-[#a3e635] flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
             </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;