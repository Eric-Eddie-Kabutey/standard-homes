import Image from "next/image";
import React from "react";
interface Props {
  imageSrc: string;
  imageAlt: string;
  description: string;
  title: string;
}

const FeatureSection2: React.FC<Props> = ({
  title,
  imageSrc,
  imageAlt,
  description,
}) => {
  return (
    <div className="mx-[8%]">
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="items-center lg:flex">
            {/* Text Content Section */}
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <h1 className="font-semibold text-3xl text-[#1A3850]">{title}</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 mr-3">
                {description}
              </p>
              {/* CTA Button */}
              <button className="mt-8 rounded-lg bg-gradient-to-r from-[#CA8A04] to-[#d39f2f] px-8 py-3 font-semibold text-white transition-transform hover:scale-105">
                Get Started
              </button>
            </div>
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative h-64 overflow-hidden rounded-lg lg:h-96">
                <Image
                  src={imageSrc} 
                  alt={imageAlt} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection2;
