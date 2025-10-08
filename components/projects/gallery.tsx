import React from 'react';
import GalleryCarousel from './carousel-gallery';

interface GallerySectionProps {
  title: string;
  images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, images }) => {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-serif font-bold text-amber-800 sm:text-5xl mb-12">
          {title}
        </h2>
        <GalleryCarousel images={images} />
      </div>
    </section>
  );
};

export default GallerySection;