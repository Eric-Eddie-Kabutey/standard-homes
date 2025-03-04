
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const partnerLogos = [
  '/RESIZE.png',
  '/powercon.png',
  'https://www.riciacare.com/_next/image?url=%2FRICIA%20CARE%20Final%20Logo.png&w=2048&q=75',
  'https://oneworldfinancials.com/ONEworldLOGO1-1.svg',
];

const OurClients = () => {
  return (
    <div className="py-10 bg-white text-center relative pb-[50px]">
      <div className='md:ml-[10%] md:mr-[10%] flex justify-center items-center flex-col'>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#CA8A04] my-10 mb-[70px]">Our Partners</h2>
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 3 }
            }}
            className="w-full px-4 flex justify-center items-center"
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center mb-10">
                <div className="w-[150px] h-[75px] flex justify-center items-center overflow-hidden rounded-xl">
                  <Image src={logo} alt="Partner Logo" width={150} height={75} className="object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClients;