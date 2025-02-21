"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurProperties = () => {
  const properties = [
    {
      image: '/home-card.jpg', 
      title: 'Willow Lane',
      description: 'Lush townhouses built with love',
      link: '#',
    },
    {
      image: '/hero-home-1 (1).jpg', 
      title: 'AlphabetCity',
      description: 'Modern apartment in Tema',
      link: '#',
    },
    {
      image: '/home-card (4).jpg', 
      title: 'Le Jardin Symphonique',
      description: 'Spacious houses in great community',
      link: '#',
    },
    {
      image: '/home-card (4).jpg', 
      title: 'Vista del Mare',
      description: 'Luxurious houses near airport',
      link: '#',
    },
  ];

  return (
    <section className="bg-[#1A202C] py-12 px-6 md:px-24 text-white">
      <div className="container mx-auto">
        <div className="border-b border-gray-600 pb-4 mb-8"> 
          <h2 className="text-3xl font-bold">Our Properties</h2>
        </div>
        
        {/* Grid layout for properties */}
        <div className="grid grid-cols-2 gap-8"> 
          {properties.map((property, index) => (
            <div key={index} className="bg-[#242F3F] rounded-lg shadow-lg p-6"> 
              <Image
                src={property.image}
                alt={property.title}
                width={500} 
                height={300} 
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{property.title}</h3>
              <p className="text-lg mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <Link href={property.link}>
                  <button className="bg-[#A7795D] hover:bg-[#91644A] text-white font-bold py-2 px-4 rounded-md">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProperties;
