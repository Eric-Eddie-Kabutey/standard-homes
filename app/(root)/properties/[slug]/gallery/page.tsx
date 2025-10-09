import { sampleProperties } from '@/data/property-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Share, Heart } from 'lucide-react';
import PhotoTourClient from '@/components/properties/PhotoTourClient';

interface PhotoTourPageProps {
    params: Promise<{slug: string}>
}

export default async function PhotoTourPage({ params }: PhotoTourPageProps) {
    const slug = (await params).slug
    const property = sampleProperties.find(p => p.slug === slug);        

  if (!property) {
    notFound();
  }
  
  return (
    <div className="bg-white min-h-screen">
      {/* Top Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-20 border-b">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
              <Link 
                href={`/properties/${property.slug}`}
                className="flex items-center gap-2 font-semibold text-gray-800 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                  <ChevronLeft className="w-5 h-5" />
                  Back to property
              </Link>
              <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 font-semibold hover:underline">
                      <Share className="w-4 h-4" /> Share
                  </button>
                  <button className="flex items-center gap-2 font-semibold hover:underline">
                      <Heart className="w-4 h-4" /> Save
                  </button>
              </div>
          </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        <PhotoTourClient gallery={property.media.gallery} />
      </div>
    </div>
  );
}