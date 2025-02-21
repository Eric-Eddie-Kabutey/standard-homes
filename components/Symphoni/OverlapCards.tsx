import { Instagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const OverlapCards = () => {
    return (
        <div>
            <div className="flex pt-10 max-w-7xl m-auto flex-col md:flex-row items-center gap-4 mb-1">
                <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
                    Le Jardin Symphonique in Social Media
                </h2>
                <div className="border-b border-dashed border-[#B78C4C] flex-1"></div>
            </div>
            <div className="m-auto">
                <div className="mx-20">
                    <Image
                        src="https://www.waylead.org/assets/images/properties/le-jardin-symphonique/social-instagram.jpg"
                        alt="Alphabet City Social Media"
                        width={1000}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <button className="flex items-center gap-2 font-medium border border-[#c79c5c] text-[#c79c5c] px-6 py-2 rounded-lg hover:bg-[#666666] hover:border-[#666666] hover:text-white transition-all duration-500 ease-in-out">
                    Follow Le Jardin Symphonique on Instagram
                    <Instagram size={20} />
                </button>
            </div>
        </div>
    )
}

export default OverlapCards