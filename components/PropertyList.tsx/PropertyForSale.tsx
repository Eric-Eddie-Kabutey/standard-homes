"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import { propertiy } from "@/constants/arraydata";

const PropertyForSale = () => {
  return (
    <div className="mx-[7%] py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
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
