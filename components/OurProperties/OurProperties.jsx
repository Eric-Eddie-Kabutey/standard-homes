import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurProperties = () => {
  const properties = [
    {
      image: '/home-card.jpg', 
      title: 'Willow Lane',
      description: 'Lush townhouses built with love',
      link: '#', // Replace with your link
    },
    {
      image: '/hero-home-1 (1).jpg', 
      title: 'AlphabetCity',
      description: 'Modern apartment in Tema',
      link: '#', // Replace with your link
    },
    {
        image: '/home-card.jpg', 
        title: 'Willow Lane',
        description: 'Lush townhouses built with love',
        link: '#', // Replace with your link
      },
      {
        image: '/hero-home-1 (1).jpg', 
        title: 'AlphabetCity',
        description: 'Modern apartment in Tema',
        link: '#', // Replace with your link
      },
  ];

  return (
    <section className="bg-[#1A202C] py-12 px-6 md:px-24 text-white"> 
      <div className="container mx-auto">
        {/* Our Properties Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-light relative inline-block">
            Our Properties
            <span className="block w-full border-t border-yellow-300 mt-2"></span>
          </h3>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          {properties.map((property, index) => (
            <div key={index} className="bg-[#242F3F] rounded-lg shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src={property.image}
                alt={property.title}
                width={500} 
                height={300} 
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{property.title}</h3>
              <p className="text-lg mb-4">{property.description}</p>
              <div className="flex justify-between items-center"> {/* Flex for button and message */}
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

