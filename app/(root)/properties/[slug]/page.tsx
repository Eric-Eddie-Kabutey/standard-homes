import { sampleProperties } from '@/data/property-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { BedDouble, Bath, Ruler, MapPin, Phone, Mail } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface PropertyDetailPageProp {
  params: Promise<{slug: string}>
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProp) {
  const slug = (await params).slug
  const property = sampleProperties.find(p => p.slug === slug);

  if (!property) {
    notFound();
  }
  
  const priceDisplay = property.listingType === 'For Rent'
    ? `${formatCurrency(property.price.amount, property.price.currency)} /mo`
    : formatCurrency(property.price.amount, property.price.currency);

  return (
    <div className="bg-gray-50">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4 py-12">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-xl overflow-hidden mb-8">
          <div className="relative h-96 lg:h-[500px] col-span-1">
            <Image src={property.media.coverImage} alt={property.title} layout="fill" objectFit="cover" />
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-2">
            {property.media.gallery.slice(0, 4).map((img, index) => (
              <div key={index} className="relative h-full">
                <Image src={img} alt={`${property.title} gallery image ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details & Description */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-gray-900">{property.title}</h1>
            <div className="mt-2 flex items-center">
              <MapPin className="w-5 h-5 text-gray-500 mr-2" />
              <p className="text-lg text-gray-600">{`${property.location.city}, ${property.location.country}`}</p>
            </div>

            <div className="mt-8 flex items-center gap-8 border-t border-b border-gray-200 py-6">
              <div className="flex items-center gap-2 text-lg">
                <BedDouble className="w-6 h-6 text-indigo-600" />
                <span><span className="font-bold">{property.details.bedrooms ?? 'N/A'}</span> bedrooms</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Bath className="w-6 h-6 text-indigo-600" />
                <span><span className="font-bold">{property.details.bathrooms ?? 'N/A'}</span> bathrooms</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Ruler className="w-6 h-6 text-indigo-600" />
                <span><span className="font-bold">{property.details.area.value}</span> {property.details.area.unit}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{property.description}</p>
            </div>
            
             <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                {property.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <span className="bg-green-500 w-2 h-2 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Price & Agent */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-gray-900">{priceDisplay}</p>
              <button className="mt-6 w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                Inquire Now
              </button>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-900">Agent Information</h3>
                <div className="mt-4">
                  <p className="font-semibold text-lg">{property.agent.name}</p>
                  <a href={`tel:${property.agent.phone}`} className="flex items-center mt-2 text-indigo-600 hover:underline">
                    <Phone className="w-4 h-4 mr-2" /> {property.agent.phone}
                  </a>
                   <a href={`mailto:${property.agent.email}`} className="flex items-center mt-1 text-indigo-600 hover:underline">
                    <Mail className="w-4 h-4 mr-2" /> {property.agent.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}