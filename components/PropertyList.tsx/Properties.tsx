"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '../ui/button';
import {
  MapPin,
  Home,
  Calendar,
  Car,
  Square,
  CheckCircle,
  Phone,
} from 'lucide-react';

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
      type: 'Apartment',
      yearBuilt: 2022,
      garage: 1,
      lotSize: '0.25 acres',
      amenities: ['Swimming Pool', 'Gym', 'Security System', 'Balcony', 'Smart Home'],
      image: [
        'https://usvintagewood.com/wp-content/uploads/2021/05/image1.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/023/307/449/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg',
        'https://static.vecteezy.com/system/resources/previews/026/586/056/non_2x/beautiful-modern-house-exterior-with-carport-modern-residential-district-and-minimalist-building-concept-by-ai-generated-free-photo.jpg'

      ],
      description: "This modern downtown apartment features floor-to-ceiling windows with panoramic city views. The open-concept living area includes high-end finishes: quartz countertops, hardwood flooring, and smart home technology. Master suite boasts walk-in closet and spa-like bathroom with heated floors. Building amenities include 24/7 concierge, fitness center, and rooftop lounge."
    },
    {
      id: 2,
      price: '$799,000',
      title: 'Luxury Villa with Pool',
      location: 'Beverly Hills, LA',
      beds: 5,
      baths: 4,
      sqft: 3500,
      type: 'Villa',
      yearBuilt: 2018,
      garage: 2,
      lotSize: '0.5 acres',
      amenities: ['Swimming Pool', 'Home Theater', 'Wine Cellar', 'Smart Home', 'Garden'],
      image: [
        'https://img.huffingtonpost.com/asset/5818bdd01700001c005bb02c.jpg?ops=scalefit_500_noupscale',
        'https://i.pinimg.com/736x/e8/bd/a5/e8bda551ab2397aade35e6cbd08c6444.jpg',
        'https://i.pinimg.com/736x/d4/1f/1a/d41f1acc62dcc9e03e7fc699c058d426.jpg'
      ],
      description: 'This luxury villa offers unparalleled elegance with 5 spacious bedrooms, 4 modern bathrooms, and 3500 sqft of living space. The property features a state-of-the-art kitchen, a private swimming pool, and a beautifully landscaped garden. Perfect for entertaining, the villa includes a home theater and wine cellar. Located in the heart of Beverly Hills, it provides easy access to top restaurants and shopping.'
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
      type: 'Single Family Home',
      yearBuilt: 2020,
      garage: 1,
      lotSize: '0.2 acres',
      amenities: ['Backyard', 'Patio', 'Fireplace', 'Energy Efficient', 'Storage Shed'],
      image: [
        'https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1269659-shaughnessy-uber-cool-modern-house-main.jpg',
        'https://images.surferseo.art/fdb08e2e-5d39-402c-ad0c-8a3293301d9e.png',
        'https://img.huffingtonpost.com/asset/5818bdd01700001c005bb02c.jpg?ops=scalefit_500_noupscale'
      ],
      description: 'This cozy suburban home is perfect for small families or first-time buyers. It features 2 bedrooms, 2 bathrooms, and a spacious backyard with a patio. The home includes modern appliances, a fireplace, and energy-efficient windows. Located in a quiet neighborhood, it offers a peaceful retreat while being close to schools, parks, and shopping centers.'
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
                src={property.image[0]}
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

            {/* Property Card Content */}
            <div className='p-4'>
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

              {/* Drawer for Detailed View */}
              <Drawer>
                <DrawerTrigger className="mt-6 w-full bg-[#CA8A04] text-white py-2 px-4 rounded-lg hover:bg-[#ca9d3b] transition-colors duration-300">
                  View Details
                </DrawerTrigger>
                <DrawerContent>
                  <div className="p-6 overflow-y-auto max-h-[80vh]">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true, }}
                      className="w-full h-[430px]"
                      loop={true}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {property.image.map((imgSrc, index) => (
                        <SwiperSlide key={index} className="relative w-full h-full">
                          <Image
                            src={imgSrc}
                            alt={property.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h2>
                        <p className="text-2xl text-primary mb-4">{property.price}</p>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-5 h-5 mr-2" />
                          <span>{property.location}</span>
                        </div>

                        {/* Key Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <Home className="w-5 h-5 mr-2 text-gray-600" />
                            <div>
                              <p className="text-sm text-gray-500">Property Type</p>
                              <p className="font-medium">{property.type}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-gray-600" />
                            <div>
                              <p className="text-sm text-gray-500">Year Built</p>
                              <p className="font-medium">{property.yearBuilt}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Car className="w-5 h-5 mr-2 text-gray-600" />
                            <div>
                              <p className="text-sm text-gray-500">Garage</p>
                              <p className="font-medium">{property.garage} space(s)</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Square className="w-5 h-5 mr-2 text-gray-600" />
                            <div>
                              <p className="text-sm text-gray-500">Lot Size</p>
                              <p className="font-medium">{property.lotSize}</p>
                            </div>
                          </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                          <div className="flex flex-wrap gap-2">
                            {property.amenities.map((amenity, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center"
                              >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Description Section */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Property Description</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {property.description}
                        </p>

                        {/* Additional Details */}
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3">Additional Features</h4>
                          <ul className="list-disc list-inside space-y-2">
                            <li>Energy Star certified appliances</li>
                            <li>Soundproof windows</li>
                            <li>Central air conditioning</li>
                            <li>Floor heating system</li>
                            <li>Smart home security system</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Schedule a Viewing</h3>
                      <Button variant="outline" className='rounded-lg animate-bounce p-5 bg-[#CA8A04] hover:text-white text-white hover:bg-[#B78C4C]'>
                        <Phone className="w-4 h-4 mr-2 text-white" />
                        Contact Agent
                      </Button>
                    </div>
                  </div>

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
};

export default Properties;