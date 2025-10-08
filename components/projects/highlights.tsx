import Image from 'next/image';
import Link from 'next/link';

// Define the props for this component to make it reusable
interface DevelopmentHighlightProps {
  eyebrowText: string;
  title: string;
  description: React.ReactNode; // Use ReactNode to allow for bolding etc.
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
  imageOnLeft?: boolean; // Optional prop to flip the layout
}

const DevelopmentHighlightSection: React.FC<DevelopmentHighlightProps> = ({
  eyebrowText,
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
  imageOnLeft = false, // Default to image on the right
}) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div className={`${imageOnLeft ? 'lg:order-last' : ''}`}>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {eyebrowText}
            </p>
            <h2 className="mt-2 text-4xl font-serif font-bold text-amber-800 sm:text-5xl">
              {title}
            </h2>
            <div className="mt-6 text-lg text-gray-700 leading-relaxed space-y-5">
              {description}
            </div>
            <div className="mt-8">
              <Link href={buttonLink}>
                <span className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-700 to-amber-800 rounded-md shadow-lg hover:from-yellow-800 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  {buttonText}
                </span>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full h-full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DevelopmentHighlightSection;