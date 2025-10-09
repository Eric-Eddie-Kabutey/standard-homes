import React from 'react';
import GalleryCarousel from './carousel-gallery';

interface GallerySectionProps {
  title: string;
  images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, images }) => {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-[1130px] 2xl:max-w-[1240px] mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1A3850] mb-12">
          {title}
        </h2>
        <GalleryCarousel images={images} />
      </div>
    </section>
  );
};

export default GallerySection;