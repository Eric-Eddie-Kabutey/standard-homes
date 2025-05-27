"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { Button } from "../ui/button";

import Link from "next/link";
import { propertiyForSale } from "@/constants/arraydata";
// import { propertiy } from "@/constants/arraydata";

const PropertyForSale = () => {
  return (
    <div className="mx-[7%] py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {propertiyForSale.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl cursor-pointer shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Property Image */}
            <div className="relative h-[240px]">
              <Image
                src={property.image[0]}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              {property.new && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  New
                </div>
              )}
            </div>

            {/* Property Card Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Price:</h3>
                <span className="text-sm text-gray-600">For Sale</span>
              </div>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                {property.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{property.location}</p>

              <div className="flex justify-between border-t pt-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2 20v-8a2 2 0 012-2h16a2 2 0 012 2v8M2 20h20M6 20v-4m12 4v-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12h4v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2zM16 12h4v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 16h12"
                    />
                  </svg>{" "}
                  <span className="text-sm">{property.beds} Beds</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6m-8-6h.01M12 12h.01M12 18h.01M16 6h.01M16 12h.01M16 18h.01"
                    />
                  </svg>{" "}
                  <span className="text-sm">{property.baths} Baths</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 20h18v-4H3v4zM3 4v12h18V4H3z"
                    />
                    <circle cx="7" cy="8" r="1.5" strokeWidth={2} />
                    <circle cx="17" cy="8" r="1.5" strokeWidth={2} />
                    <circle cx="7" cy="14" r="1.5" strokeWidth={2} />
                    <circle cx="17" cy="14" r="1.5" strokeWidth={2} />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 16v-4m0 0h-2m2 0h2"
                    />
                  </svg>{" "}
                  <span className="text-sm">{property.kitchen} kitchen</span>
                </div>
              </div>

              {/* Drawer for Detailed View */}

              <Link className="mt-3" href={`/properties/${property.id}`}>
                <Button className="mt-3 text-white"> View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyForSale;

// <Drawer>
//   <DrawerTrigger className="mt-6 w-full bg-[#CA8A04] text-white py-2 px-4 rounded-lg hover:bg-[#ca9d3b] transition-colors duration-300">
//     View Details
//   </DrawerTrigger>
//   <DrawerContent>
//     <div className="p-6 overflow-y-auto max-h-[80vh]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         className="w-full h-[430px]"
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//           },
//         }}
//       >
//         {property.image.map((imgSrc, index) => (
//           <SwiperSlide
//             key={index}
//             className="relative w-full h-full"
//           >
//             <Image
//               src={imgSrc}
//               alt={property.title}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             {property.title}
//           </h2>
//           <p className="text-2xl text-primary mb-4">
//             {property.price}
//           </p>
//           <div className="flex items-center text-gray-600 mb-4">
//             <MapPin className="w-5 h-5 mr-2" />
//             <span>{property.location}</span>
//           </div>

//           {/* Key Features Grid */}
//           <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
//             <div className="flex items-center">
//               <Home className="w-5 h-5 mr-2 text-gray-600" />
//               <div>
//                 <p className="text-sm text-gray-500">
//                   Property Type
//                 </p>
//                 <p className="font-medium">{property.type}</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Calendar className="w-5 h-5 mr-2 text-gray-600" />
//               <div>
//                 <p className="text-sm text-gray-500">
//                   Year Built
//                 </p>
//                 <p className="font-medium">
//                   {property.yearBuilt}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Car className="w-5 h-5 mr-2 text-gray-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Garage</p>
//                 <p className="font-medium">
//                   {property.garage} space(s)
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Bed className="w-5 h-5 mr-2 text-gray-600" />
//               <div>
//                 <p className="text-sm text-gray-500">Bedrooms</p>
//                 <p className="font-medium">{property.beds}</p>
//               </div>
//             </div>
//           </div>

//           {/* Amenities Section */}
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold mb-4">
//               Amenities
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {property.amenities.map((amenity, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center"
//                 >
//                   <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
//                   {amenity}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Description Section */}
//         <div>
//           <div className="flex justify-between relative">
//             <h3 className="text-xl font-semibold mb-4">
//               Property Description
//             </h3>
//             <Link
//               href="https://wa.me/+2207922004"
//               className="sticky right-0 flex flex-row items-center top-0 rounded-lg px-4 animate-bounce  bg-[#CA8A04] hover:text-white text-white hover:bg-[#B78C4C]"
//             >
//               <Phone className="w-4 h-4 mr-2 text-white" />
//               <p>Contact Agent</p>
//             </Link>
//           </div>{" "}
//           <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//             {property.description}
//           </p>
//           {/* Additional Details */}
//           <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//             <h4 className="text-lg font-semibold mb-3">
//               Additional Features
//             </h4>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Energy Star certified appliances</li>
//               <li>Soundproof windows</li>
//               <li>Central air conditioning</li>
//               <li>Floor heating system</li>
//               <li>Smart home security system</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//     <DrawerClose>
//       <Button
//         className="text-[#B78C4C] border border-[#B78C4C] px-8 py-2 font-medium rounded hover:bg-[#666666] hover:border-[#666666] hover:text-slate-100 transition-all duration-500 ease-in-out my-1"
//         variant="outline"
//       >
//         Close
//       </Button>
//     </DrawerClose>
//   </DrawerContent>
// </Drawer>;
