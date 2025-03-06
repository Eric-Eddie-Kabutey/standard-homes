
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const partnerLogos = [
  '/logo-ecobank.svg',
  '/logo-fidelity-bank.svg',
  '/logo-fnb.svg',
  '/logo-stanbic-bank.jpg',
  '/logo-republic-bank.svg',
  '/logo-wells-fargo.svg'
];

const PaymentPartners = () => {
  return (
    <div className="py-10 bg-white text-center relative pb-[20px]">
      <div className='md:ml-[10%] md:mr-[10%] flex justify-center items-center flex-col'>
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
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
              1024: { slidesPerView: 5 }
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

export default PaymentPartners;