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
        <div className="flex flex-cols md:flex-row items-center gap-y-10 gap-x-20">
          
          {/* Text Content Column */}
          <div className={`${imageOnLeft ? 'lg:order-last' : ''} w-full md:w-1/2`}>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {eyebrowText}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold  text-[#1A3850] capitalize">
              {title}
            </h2>
            <div className="mt-6 text-base md:text-lg text-gray-800 leading-relaxed space-y-5">
              {description}
            </div>
            <div className="mt-8">
              <Link href={buttonLink}>
                <span className="inline-block mt-2 rounded-lg bg-gradient-to-r from-[#CA8A04] to-[#d39f2f] px-8 py-3 font-semibold text-white transition-transform hover:scale-105 cursor-pointer">
                  {buttonText}
                </span>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full h-full md:w-1/2">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DevelopmentHighlightSection;