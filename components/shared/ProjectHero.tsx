import Image, { StaticImageData } from 'next/image'

interface ProjectHeroPro {
	title: string
	description: string
	imgUrl: StaticImageData | string
}

export default function ProjectHero({
	title,
	description,
	imgUrl,
}: ProjectHeroPro) {
	return (
        <section className='py-4 md:py-20'>
            <div className='flex flex-col items-center max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4'>
			<h1 className='mb-2 text-3xl md:text-4xl font-semibold text-[#1A3850]'>{title}</h1>
			<p className='text-lg font-medium text-gray-800'>{description}</p>

			<div className='relative mt-12 w-full max-w-5xl mx-auto h-[200px] md:h-[300px] overflow-hidden rounded-xl mb-4 md:mb-6'>
				<Image
					src={imgUrl}
					alt='Project 1 cover image'
					fill
					className='object-cover'
					priority
				/>
			</div>
            </div>
		</section>
	)
}
