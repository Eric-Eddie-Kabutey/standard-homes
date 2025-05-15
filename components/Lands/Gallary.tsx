import Image from "next/image";
import React from "react";

const Gallery = ({ images }: { images: string[] }) => {
  return (
    <div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 md:mx-28">
        {images.map((image, index) => (
          <div key={index} className="col-span-3 md:col-span-1 p-4">
            {/* Square container */}
            <div className="relative w-full aspect-square overflow-hidden rounded-md">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={index === 0} // optional: prioritize first image
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
