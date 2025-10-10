import { sampleProperties } from '@/data/property-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { BedDouble, Bath, Ruler, MapPin, Phone, Mail, Grid3x3 } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import SimilarProperties from '@/components/properties/SimilarProperties';
import Link from 'next/link';

// This is where to define for surrounding areas for future use.
// Configuration for surrounding areas. This can be expanded easily.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const surroundingAreas: { [key: string]: string[] } = {
  "Coastal Corridor": ["Fajara", "Kololi", "Bijilo", "Brufut", "Kotu"],
  "Dakar Peninsula": ["Dakar", "Almadies", "Plateau"],
  "Petite Côte": ["Saly Portudal", "Thiès Region"],
};


interface currentPropertyDetailPageProp {
  params: Promise<{slug: string}>
}

export default async function currentPropertyDetailPage({ params }: currentPropertyDetailPageProp) {
  const slug = (await params).slug
  const currentProperty = sampleProperties.find(p => p.slug === slug);
  const allProperties = sampleProperties;

  if (!currentProperty) {
    notFound();
  }     

  // Get all other properties, excluding the current one.
  const otherProperties = allProperties.filter(p => p._id !== currentProperty._id);  

   // Layer 1: Properties in the EXACT same city/neighborhood.
  const propertiesInSameCity = otherProperties.filter(
    p => p.location.city === currentProperty.location.city
  ).slice(0, 3); // Limit to 3 results for this section
  
  // Rule 2: Find properties in the same country but NOT in the same city.
  // const propertiesInSameCountry = otherProperties.filter(
  //   p => p.location.country === currentProperty.location.country &&
  //        p.location.city !== currentProperty.location.city
  // );

    // Layer 3: Properties in surrounding areas.
  // Find which group the current city belongs to.
  const currentGroupKey = Object.keys(surroundingAreas).find(key => 
    surroundingAreas[key].includes(currentProperty.location.city)
  );

    // Get the list of other cities in the same group.
  const surroundingCities = currentGroupKey 
    ? surroundingAreas[currentGroupKey].filter(city => city !== currentProperty.location.city) 
    : [];

   // Filter properties that are in one of the surrounding cities.
  const propertiesInSurroundingAreas = otherProperties.filter(
    p => surroundingCities.includes(p.location.city)
  ).slice(0, 3); // Limit to 3 results

   // Layer 2: Properties in the same country (but not in the same city or surrounding areas to avoid duplicates).
  const excludedCities = [currentProperty.location.city, ...surroundingCities];
  const propertiesInSameCountry = otherProperties.filter(
    p => p.location.country === currentProperty.location.country &&
         !excludedCities.includes(p.location.city)
  ).slice(0, 3); // Limit to 3 results
  // --- END OF SIMILAR PROPERTIES LOGIC ---
  
  const priceDisplay = currentProperty.listingType === 'For Rent'
    ? `${formatCurrency(currentProperty.price.amount, currentProperty.price.currency)} /mo`
    : formatCurrency(currentProperty.price.amount, currentProperty.price.currency);
  
  const allImages = currentProperty.media.gallery.flatMap(category => category.images);

  return (
    <div className="bg-gray-50 pt-20 sm:pt-32 md:pt-44">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4 py-12">
        {/* Image Gallery */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-xl overflow-hidden mb-8">
          <div className="relative h-96 lg:h-[500px] col-span-1">
            <Image src={currentProperty.media.coverImage} alt={currentProperty.title} layout="fill" objectFit="cover" />
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-2">
            {/* Use the flattened list of all gallery images */}
            {allImages.slice(0, 4).map((img, index) => (
              <div key={index} className="relative h-full">
                <Image src={img} alt={`${currentProperty.title} gallery image ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
          
          {/* --- "SHOW ALL PHOTOS" BUTTON Take you to gallery tour --- */}
          <Link href={`/properties/${currentProperty.slug}/gallery`}>
            <div className="absolute bottom-4 right-4 bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition-transform hover:scale-105">
              <Grid3x3 className="w-5 h-5"/>
              Show all photos
            </div>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details & Description */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{currentProperty.title}</h1>
            <div className="mt-2 flex items-center">
              <MapPin className="w-5 h-5 text-gray-500 mr-2" />
              <p className="text-lg text-gray-600">{`${currentProperty.location.city}, ${currentProperty.location.country}`}</p>
            </div>

            <div className="mt-8 flex items-center gap-8 border-t border-b border-gray-200 py-6">
              <div className="flex items-center gap-2 text-lg">
                <BedDouble className="w-6 h-6 text-indigo-600" />
                <span><span className="font-bold">{currentProperty.details.bedrooms ?? 'N/A'}</span> bedrooms</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Bath className="w-6 h-6 text-indigo-600" />
                <span><span className="font-bold">{currentProperty.details.bathrooms ?? 'N/A'}</span> bathrooms</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Ruler className="w-6 h-6 text-indigo-600" />
                <span><span className="font-bold">{currentProperty.details.area.value}</span> {currentProperty.details.area.unit}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-normal text-gray-900 mb-4">About this currentProperty</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{currentProperty.description}</p>
            </div>
            
             <div className="mt-10">
              <h2 className="text-2xl font-normal text-gray-900 mb-4">Features & Amenities</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                {currentProperty.features.map(feature => (
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
                  <p className="font-semibold text-lg">{currentProperty.agent.name}</p>
                  <a href={`tel:${currentProperty.agent.phone}`} className="flex items-center mt-2 text-indigo-600 hover:underline">
                    <Phone className="w-4 h-4 mr-2" /> {currentProperty.agent.phone}
                  </a>
                   <a href={`mailto:${currentProperty.agent.email}`} className="flex items-center mt-1 text-indigo-600 hover:underline">
                    <Mail className="w-4 h-4 mr-2" /> {currentProperty.agent.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* RENDER THE LAYERED SIMILAR PROPERTIES SECTIONS */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <SimilarProperties 
            title={`More in ${currentProperty.location.city}`} 
            properties={propertiesInSameCity} 
          />
          <SimilarProperties 
            title="In Surrounding Areas" 
            properties={propertiesInSurroundingAreas} 
          />
          <SimilarProperties 
            title={`Other Properties in ${currentProperty.location.country}`}
            properties={propertiesInSameCountry}
          />
        </div>
      </div>
    </div>
  );
}