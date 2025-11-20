import { sampleProperties } from '@/data/property-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { BedDouble, Bath, Ruler, MapPin, Phone, Mail, Grid3x3, CheckCircle2, ArrowRight, Share2, Heart } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import SimilarProperties from '@/components/properties/SimilarProperties';
import Link from 'next/link';

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

  const otherProperties = allProperties.filter(p => p._id !== currentProperty._id);  

   // Layer 1: Properties in the EXACT same city/neighborhood.
  const propertiesInSameCity = otherProperties.filter(
    p => p.location.city === currentProperty.location.city
  ).slice(0, 3); 
  
  // Layer 3: Properties in surrounding areas.
  const currentGroupKey = Object.keys(surroundingAreas).find(key => 
    surroundingAreas[key].includes(currentProperty.location.city)
  );

  const surroundingCities = currentGroupKey 
    ? surroundingAreas[currentGroupKey].filter(city => city !== currentProperty.location.city) 
    : [];

  const propertiesInSurroundingAreas = otherProperties.filter(
    p => surroundingCities.includes(p.location.city)
  ).slice(0, 3);

   // Layer 2: Properties in the same country.
  const excludedCities = [currentProperty.location.city, ...surroundingCities];
  const propertiesInSameCountry = otherProperties.filter(
    p => p.location.country === currentProperty.location.country &&
         !excludedCities.includes(p.location.city)
  ).slice(0, 3); 
  
  const priceDisplay = currentProperty.listingType === 'For Rent'
    ? `${formatCurrency(currentProperty.price.amount, currentProperty.price.currency)} /mo`
    : formatCurrency(currentProperty.price.amount, currentProperty.price.currency);
  
  const allImages = currentProperty.media.gallery.flatMap(category => category.images);

  return (
    <main className="bg-[#F8F7F4] min-h-screen pt-32 pb-20">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a3e635] bg-white text-[#16a34a] mb-4 shadow-sm w-fit">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {currentProperty.listingType}
                </span>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
               {currentProperty.title}
             </h1>
             <div className="flex items-center gap-2 mt-4 text-slate-500 font-medium text-lg">
                <MapPin className="w-5 h-5 text-[#a3e635]" />
                {`${currentProperty.location.city}, ${currentProperty.location.country}`}
             </div>
          </div>

          <div className="flex gap-3">
             <button className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-[#a3e635] hover:text-[#16a34a] transition-colors shadow-sm">
                <Share2 className="w-5 h-5" />
             </button>
             <button className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-[#a3e635] hover:text-[#16a34a] transition-colors shadow-sm">
                <Heart className="w-5 h-5" />
             </button>
          </div>
        </div>


        {/* --- GALLERY SECTION --- */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 h-[500px] lg:h-[600px] mb-12">
          {/* Main Large Image */}
          <div className="lg:col-span-8 relative h-full rounded-[2.5rem] overflow-hidden shadow-sm group">
            <Image 
              src={currentProperty.media.coverImage} 
              alt={currentProperty.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Side Grid */}
          <div className="hidden lg:grid lg:col-span-4 grid-rows-2 gap-4 h-full">
             {allImages.slice(0, 2).map((img, index) => (
               <div key={index} className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                  <Image 
                    src={img} 
                    alt={`Gallery ${index}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
               </div>
             ))}
          </div>
          
          {/* Show All Button */}
          <Link href={`/properties/${currentProperty.slug}/gallery`} className="absolute bottom-6 right-6 z-10">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md text-slate-900 font-bold rounded-full shadow-lg hover:bg-[#a3e635] transition-all duration-300 transform hover:scale-105">
              <Grid3x3 className="w-5 h-5"/>
              Show all photos
            </button>
          </Link>
        </div>


        {/* --- MAIN CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Description & Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Key Stats Bar */}
            <div className="flex flex-wrap gap-4 sm:gap-8 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#F8F7F4] rounded-full text-slate-900">
                   <BedDouble className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Bedrooms</p>
                   <p className="text-xl font-bold text-slate-900">{currentProperty.details.bedrooms ?? 'N/A'}</p>
                </div>
              </div>
              
              <div className="w-[1px] h-12 bg-slate-100 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#F8F7F4] rounded-full text-slate-900">
                   <Bath className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Bathrooms</p>
                   <p className="text-xl font-bold text-slate-900">{currentProperty.details.bathrooms ?? 'N/A'}</p>
                </div>
              </div>

              <div className="w-[1px] h-12 bg-slate-100 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#F8F7F4] rounded-full text-slate-900">
                   <Ruler className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Area</p>
                   <p className="text-xl font-bold text-slate-900">{currentProperty.details.area.value} {currentProperty.details.area.unit}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">About this property</h2>
              <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
                {currentProperty.description}
              </p>
            </div>
            
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentProperty.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* RIGHT: Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              
              {/* Price Tag */}
              <div className="mb-8">
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Total Price</p>
                <p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  {priceDisplay}
                </p>
              </div>

              {/* Agent Info */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                   {/* Placeholder for Agent Image if available, otherwise initial */}
                   <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500 font-bold text-xl">
                      {currentProperty.agent.name.charAt(0)}
                   </div>
                </div>
                <div>
                   <p className="text-lg font-bold text-slate-900">{currentProperty.agent.name}</p>
                   <p className="text-sm text-[#16a34a] font-medium">Property Consultant</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <button className="w-full py-4 bg-[#a3e635] hover:bg-[#8cd321] text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                  Inquire Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                  href={`tel:${currentProperty.agent.phone}`}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {currentProperty.agent.phone}
                </a>

                <a 
                   href={`mailto:${currentProperty.agent.email}`}
                   className="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-900 font-medium pt-2 transition-colors"
                >
                   <Mail className="w-4 h-4" /> 
                   Email Agent
                </a>
              </div>

            </div>
          </div>

        </div>


        {/* --- SIMILAR PROPERTIES SECTION --- */}
        <div className="mt-24 pt-12 border-t border-slate-200">
           <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              You might also like
           </h2>
           
           <div className="space-y-16">
              {propertiesInSameCity.length > 0 && (
                <SimilarProperties 
                  title={`More in ${currentProperty.location.city}`} 
                  properties={propertiesInSameCity} 
                />
              )}
              
              {propertiesInSurroundingAreas.length > 0 && (
                <SimilarProperties 
                  title="In Surrounding Neighborhoods" 
                  properties={propertiesInSurroundingAreas} 
                />
              )}
              
              {propertiesInSameCountry.length > 0 && (
                <SimilarProperties 
                  title={`Other Properties in ${currentProperty.location.country}`}
                  properties={propertiesInSameCountry}
                />
              )}
           </div>
        </div>

      </div>
    </main>
  );
}