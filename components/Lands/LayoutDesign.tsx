import { ArrowDownToLine, ChevronRight, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const LayoutDesign = () => {
  return (
    <div>
            <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 m-auto">
          {/* Type B Townhouse */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                src="/land-layout-1.jpg"
                alt="Type B Townhouse"
                width={1000}
                height={900}
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center text-yellow-600 pt-8 space-y-3 font-medium text-pretty text-opacity-70">
              <Link href="#" className="px-4 py-1 rounded-lg border border-yellow-600 flex space-x-2">
                {" "}
                <Globe /> Virtual Tour <ChevronRight className="mt-1" size={20}/>
              </Link>
              <Link href="#" className="px-4 py-1 rounded-lg border border-yellow-600 flex justify-center items-center space-x-2">
                <span>Get Direction</span><FaLocationArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LayoutDesign