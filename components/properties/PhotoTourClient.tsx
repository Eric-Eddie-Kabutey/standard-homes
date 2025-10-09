"use client";

import { useState, useEffect, useRef } from 'react';
import { GalleryCategory } from '@/types/property-types';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PhotoTourClientProps {
  gallery: GalleryCategory[];
}

const PhotoTourClient: React.FC<PhotoTourClientProps> = ({ gallery }) => {
    console.log("gallery", gallery);
  // State to track the currently visible category
  const [activeCategory, setActiveCategory] = useState<string>(gallery[0]?.name || '');
  // Refs to hold the DOM elements of each section
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Smooth scroll handler
  const handleThumbnailClick = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Intersection Observer to update active category on scroll
  useEffect(() => {
    const observerOptions = {
      root: null, // observes intersections relative to the viewport
      rootMargin: '0px',
      threshold: 0.4, // Triggers when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, observerOptions);

    const currentRefs = sectionRefs.current;
    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Cleanup function
    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [gallery]);


  return (
    <div className="flex w-full">
      {/* --- Left Sticky Sidebar --- */}
      <aside className="hidden md:block w-64 flex-shrink-0 h-screen sticky top-0 overflow-y-auto p-8 border-r">
        <h2 className="text-xl font-bold mb-6">Photo tour</h2>
        <nav>
          <ul>
            {gallery.map((category, index) => (
              <li key={category.name}>
                <button
                  onClick={() => handleThumbnailClick(index)}
                  className="flex items-center gap-4 w-full text-left p-2 rounded-lg transition-colors hover:bg-gray-100"
                >
                  <div className={cn(
                    "relative w-20 h-14 rounded-md overflow-hidden border-2 transition-colors",
                    activeCategory === category.name ? 'border-gray-900' : 'border-transparent'
                  )}>
                    <Image
                      src={category.images[0]}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className={cn(
                      "font-semibold",
                      activeCategory === category.name ? 'text-gray-900' : 'text-gray-600'
                  )}>
                    {category.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* --- Right Scrollable Content --- */}
      <main className="flex-grow p-4 sm:p-8 md:p-12">
        {gallery.map((category, index) => (
          <section
            key={category.name}
            id={category.name}
            ref={el => { sectionRefs.current[index] = el; }}
            className="mb-16 scroll-mt-24" // scroll-mt adds top margin when scrolling to an ID
          >
            <h3 className="text-2xl font-medium mb-2">{category.name}</h3>
            {/* You can add a description here if you add it to the data structure */}
            <p className="text-gray-600 mb-6">Description for {category.name} goes here...</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {category.images.map((image, imgIndex) => (
    <div 
      key={imgIndex} 
      className={cn(
        "relative overflow-hidden rounded-lg",
        // Make the first image of each section larger for visual interest
        category.images.length > 1 && imgIndex === 0 
          ? "sm:col-span-2" 
          : ""
      )}
    >
      {/* A container div that creates the aspect ratio */}
      <div className={cn(
        "relative w-full",
        category.images.length > 1 && imgIndex === 0
          ? "pt-[56.25%]" // 16:9 aspect ratio for the large image
          : "pt-[75%]"      // 4:3 aspect ratio for smaller images
      )}>
        <Image
          src={image}
          alt={`${category.name} image ${imgIndex + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Good practice for performance
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  ))}
</div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default PhotoTourClient;