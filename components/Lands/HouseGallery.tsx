import Image from 'next/image'
import React from 'react'

const HouseGallery = () => {
    return (
        <div className="">
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:1 gap-4 md:mx-28">
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-1.jpg"
                        alt="Alphabet City Entrance"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-2.jpg"
                        alt="Residential Building"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-3.jpg"
                        alt="Playground Area"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-4.jpg"
                        alt="Living Room"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-5.jpg"
                        alt="Bedroom"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-6.jpg"
                        alt="Bedroom"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-7.jpg"
                        alt="Bedroom"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-8.jpg"
                        alt="Bedroom"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
                <div className="col-span-3 md:col-span-1 p-4">
                    <Image
                        src="/modern-9.jpg"
                        alt="Bedroom"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default HouseGallery