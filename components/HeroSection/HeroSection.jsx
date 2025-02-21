import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-[#242F3F] py-12 px-6 md:px-24 text-white"> 
      <div className="container mx-auto flex flex-col md:flex-row items-center"> 
        <div className="md:w-1/2"> {/* Image container */}
          <Image
            src="/home-about.jpg" 
            alt="Waylead Homes"
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Ghana's Trusted Homebuilder</h1>
          <p className="text-lg mb-6">
            As a leading residential developer in Ghana, Waylead is committed to build high quality
            and modern homes for Ghanaians. From luxurious houses to modern apartments, we
            are always driven to create rich living experiences for you and your family.
          </p>
          <Link href="/read-more"> {/* Replace with your "Read More" link */}
            <button className="bg-[#A7795D] hover:bg-[#91644A] text-white font-bold py-2 px-4 rounded-md mr-4">
              Read More
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
