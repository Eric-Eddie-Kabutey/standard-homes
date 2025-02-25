import React from 'react';
import Image from 'next/image';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '../ui/button';

const Properties = () => {
  const properties = [
    {
      id: 1,
      price: '$450,000',
      title: 'Modern Downtown Apartment',
      location: 'Downtown, New York',
      beds: 3,
      baths: 2,
      sqft: 1800,
      new: true,
      image: 'https://usvintagewood.com/wp-content/uploads/2021/05/image1.jpg'
    },
    {
      id: 2,
      price: '$799,000',
      title: 'Luxury Villa with Pool',
      location: 'Beverly Hills, LA',
      beds: 5,
      baths: 4,
      sqft: 3500,
      image: 'https://img.huffingtonpost.com/asset/5818bdd01700001c005bb02c.jpg?ops=scalefit_500_noupscale'
    },
    {
      id: 3,
      price: '$280,000',
      title: 'Cozy Suburban Home',
      location: 'Suburbs, Austin',
      beds: 2,
      baths: 2,
      sqft: 1500,
      new: true,
      image: 'https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1269659-shaughnessy-uber-cool-modern-house-main.jpg'
    },
  ];

  return (
    <div className='mx-[7%] py-12'>      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties.map((property) => (
          <div
            key={property.id}
            className='bg-white rounded-xl cursor-pointer shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
          >
            {/* Property Image */}
            <div className='relative h-[240px]'>
              <Image
                src={property.image}
                alt={property.title}
                layout='fill'
                objectFit='cover'
                className='w-full h-full'
              />
              {property.new && (
                <div className='absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                  New
                </div>
              )}
            </div>

            {/* Rest of the card remains the same */}
            <div className='p-2'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-xl font-semibold text-gray-900'>{property.price}</h3>
                <span className='text-sm text-gray-600'>For Sale</span>
              </div>
              
              <h4 className='text-lg font-medium text-gray-800 mb-2'>{property.title}</h4>
              <p className='text-gray-600 text-sm mb-4'>{property.location}</p>
              
              <div className='flex justify-between border-t pt-4'>
                <div className='flex items-center'>
                  <svg className='w-5 h-5 text-gray-600 mr-1' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className='text-sm'>{property.beds} Beds</span>
                </div>
                <div className='flex items-center'>
                  <svg className='w-5 h-5 text-gray-600 mr-1' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className='text-sm'>{property.baths} Baths</span>
                </div>
                <div className='flex items-center'>
                  <svg className='w-5 h-5 text-gray-600 mr-1' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span className='text-sm'>{property.sqft} sqft</span>
                </div>
              </div>
              
              {/* <button className='mt-6 w-full bg-[#CA8A04] text-white py-2 px-4 rounded-lg hover:bg-[#ca9d3b] transition-colors duration-300'>
                View Details
              </button> */}
              <Drawer>
                <DrawerTrigger className="mt-6 w-full bg-[#CA8A04] text-white py-2 px-4 rounded-lg hover:bg-[#ca9d3b] transition-colors duration-300">
                View Details
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerClose>
                    <Button
                      className="text-[#B78C4C] border border-[#B78C4C] px-8 py-2 font-medium rounded hover:bg-[#666666] hover:border-[#666666] hover:text-slate-100 transition-all duration-500 ease-in-out my-1"
                      variant="outline"
                    >
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
