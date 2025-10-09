import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the shape of a single resource item
interface Resource {
  mainIcon: React.ReactNode;
  buttonIcon: React.ReactNode;
  label: string;
  link: string;
}

// Define the props for the main component
interface ProjectResourcesSectionProps {
  logoUrl: string;
  logoAlt: string;
  title: string;
  resources: Resource[];
}

const ProjectResourcesSection: React.FC<ProjectResourcesSectionProps> = ({
  logoUrl,
  logoAlt,
  title,
  resources,
}) => {
  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          
          {/* Left Column: Logo */}
          <div className="bg-white flex-shrink-0 md:w-1/3 flex items-center justify-center p-8 md:p-4 border-b md:border-b-0 md:border-r border-gray-300">
            <Image
              src={logoUrl}
              alt={logoAlt}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Right Column: Resources */}
          <div className="bg-[#0F2A3C] w-full p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-8">
              {title}
            </h2>
            <div className="flex flex-col sm:flex-row justify-around items-center gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 text-white opacity-90">
                    {resource.mainIcon}
                  </div>
                  <Link href={resource.link} passHref>
                    <div 
                      className="inline-flex items-center gap-2 py-2 px-6 rounded-md shadow-md    bg-gradient-to-r from-[#CA8A04] to-[#d39f2f]  font-semibold text-white transition-transform hover:scale-105"
                      // Add 'download' attribute for files, or target="_blank" for videos
                      {...(resource.label !== "Watch video" ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {resource.buttonIcon}
                      {resource.label}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectResourcesSection;