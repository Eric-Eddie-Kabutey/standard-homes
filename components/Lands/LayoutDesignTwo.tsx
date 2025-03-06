import { ArrowDownToLine, ChevronRight, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const LayoutDesignTwo = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 m-auto">
                    {/* Type B Townhouse */}
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/land-layout-2.jpg"
                                alt="Type B Townhouse"
                                width={1000}
                                height={900}
                                className="rounded-md shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center text-yellow-600 pt-8 space-x-3 font-medium text-pretty text-opacity-70">
                            <Link href="#" className="px-4 py-1 rounded-lg border border-yellow-600 flex justify-center items-center space-x-2">
                                {" "}
                                <span>Virtual Tour</span> <ChevronRight />
                            </Link>
                            <Link href="https://www.google.com/maps/place/13%C2%B018'04.9%22N+16%C2%B046'10.7%22W/@13.3013725,-16.7722079,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.3013725!4d-16.769633?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" className="px-4 py-1 rounded-lg border border-yellow-600 flex justify-center items-center space-x-2" target='_blank'>
                                <span>Get Direction</span><FaLocationArrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LayoutDesignTwo