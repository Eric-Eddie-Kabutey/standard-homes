"use client";
import Image from "next/image";
import Link from "next/link";

export default function TrustedHomebuilder() {
  return (
		<div className='bg-[#0F2A3C] text-white py-16'>
			<div className='max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4'>
				{/* Main Content Section */}
				<div className='flex flex-col md:flex-row items-center gap-10'>
					{/* Image Section */}
					<div className='w-full md:w-1/2'>
						<Image
							src='/home-about.jpg' // Replace with actual image path
							alt='Modern Homes'
							width={700}
							height={450}
							className='rounded-lg shadow-lg'
						/>
					</div>

					{/* Text Section */}
					<div className='w-full md:w-1/2'>
						<h2 className='text-2xl md:text-4xl relative font-semibold inline-block'>
							Gambia’s No. 1 Homebuilder
							<span className='block w-full border-t border-yellow-300 mt-2'></span>
						</h2>
						<p className='text-lg text-gray-300 mt-4 leading-relaxed'>
							From luxurious homes to modern commercial spaces, land sales,
							leasing, and efficient borehole drilling solutions, we are
							dedicated to creating exceptional living, working, and investment
							environments for you and your community.
						</p>

						{/* Read More Button */}
						<Link href='/about'>
							<button className='mt-6 px-6 py-3 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-black transition'>
								Read More →
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
