'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// A simple data structure for our tabs
const tabs = [
	{ id: 'buy', label: 'For Buyers' },
	{ id: 'sell', label: 'For Sellers' },
	{ id: 'rent', label: 'For Renters' },
]

const GuideTabs = () => {
	const [activeTab, setActiveTab] = useState(tabs[0].id)

	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	}

	return (
		<div className='w-full py-10'>
			{/* Tab Buttons */}
			<div className='border-b border-gray-200 lg:border-b-0 lg:border-none'>
				<nav className='flex space-x-8' aria-label='Tabs'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`${
								activeTab === tab.id
									? 'lg:bg-yellow-500 border-indigo-600 lg:border-none text-indigo-700 lg:text-white'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
							} whitespace-nowrap py-2 px-1 lg:px-8 lg:py-1 border-b-2 lg:border-yellow-600 lg:border  font-semibold text-lg transition-colors focus:outline-none lg:rounded-full`}>
							{tab.label}
						</button>
					))}
				</nav>
			</div>

			{/* Tab Content Panels */}
			<div className='mt-8'>
				<AnimatePresence mode='wait'>
					{activeTab === 'buy' && (
						<motion.div
							key='buy'
							variants={contentVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<GuideContent title='The Ultimate Guide to Buying Property'>
								{/* tab image cover */}
								<div className='relative mt-12 w-full max-w-5xl mx-auto h-[200px] md:h-[300px] overflow-hidden rounded-xl mb-4 md:mb-6'>
									<Image
										src='/project/buy-cover.png'
										alt='Project 1 cover image'
										fill
										className='object-cover'
										priority
									/>
								</div>
								<p className='mb-6'>
									Navigating the property market can be complex. Whether
									you&apos;re a first-time buyer or a seasoned investor, this
									guide will walk you through the essential steps to make a
									successful purchase.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 1: Financial Preparation
								</h3>
								<p className='mb-4'>
									Before you start looking, it&apos;s crucial to understand your
									budget. Get pre-approved for a mortgage, calculate your down
									payment, and account for closing costs and taxes.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 2: Finding the Right Property
								</h3>
								<p className='mb-4'>
									Use our advanced search filters to narrow down properties by
									location, type, price, and features. Create a watchlist and
									schedule viewings for your top choices.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 3: Making an Offer and Closing
								</h3>
								<p>
									Once you&apos;ve found your dream property, your agent will
									help you submit a competitive offer. After acceptance,
									you&apos;ll proceed through inspections, legal checks, and
									finally, the closing process.
								</p>
							</GuideContent>
						</motion.div>
					)}

					{activeTab === 'sell' && (
						<motion.div
							key='sell'
							variants={contentVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
                            <GuideContent title="A Seller's Handbook to a Successful Sale">
                                
                                {/* tab image cover */}
								<div className='relative mt-12 w-full max-w-5xl mx-auto h-[200px] md:h-[300px] overflow-hidden rounded-xl mb-4 md:mb-6'>
									<Image
										src='/project/sales-cover.jpg'
										alt='Sales cover image'
										fill
										className='object-cover'
										priority
									/>
								</div>

								<p className='mb-6'>
									Selling your property for the best possible price requires
									careful planning and strategy. Follow our guide to ensure a
									smooth and profitable transaction.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 1: Property Valuation and Preparation
								</h3>
								<p className='mb-4'>
									Get a professional valuation to set a competitive price.
									Prepare your home for viewings by decluttering, making minor
									repairs, and enhancing its curb appeal.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 2: Marketing Your Property
								</h3>
								<p className='mb-4'>
									We use high-quality photography, virtual tours, and targeted
									marketing campaigns to reach a wide audience of potential
									buyers across The Gambia, Senegal, and internationally.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 3: Negotiating Offers and Closing
								</h3>
								<p>
									Your agent will manage all incoming offers, help you negotiate
									the best terms, and guide you through the legal paperwork
									required to finalize the sale.
								</p>
							</GuideContent>
						</motion.div>
					)}

					{activeTab === 'rent' && (
						<motion.div
							key='rent'
							variants={contentVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
                            <GuideContent title="Renting Made Simple: A Tenant's Guide">
                                 {/* tab image cover */}
								<div className='relative mt-12 w-full max-w-5xl mx-auto h-[200px] md:h-[300px] overflow-hidden rounded-xl mb-4 md:mb-6'>
									<Image
										src='/project/rent-cover.jpg'
										alt='Rent cover image'
										fill
										className='object-cover'
										priority
									/>
								</div>
								<p className='mb-6'>
									Finding the perfect rental property should be an exciting
									experience. This guide covers everything you need to know,
									from searching for a home to understanding your lease
									agreement.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 1: Define Your Needs
								</h3>
								<p className='mb-4'>
									Determine your budget, desired location, number of bedrooms,
									and essential amenities. This will help you focus your search
									and find suitable options quickly.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 2: The Application Process
								</h3>
								<p className='mb-4'>
									Prepare your documentation, which may include identification,
									proof of income, and references. Be ready to fill out an
									application form and potentially pay a holding deposit.
								</p>
								<h3 className='text-xl font-semibold mb-3'>
									Step 3: Understanding Your Tenancy Agreement
								</h3>
								<p>
									Before signing, carefully read the lease agreement. Pay close
									attention to the term length, rent amount, rules, and
									responsibilities for both you and the landlord. Don&apos;t
									hesitate to ask questions.
								</p>
							</GuideContent>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

// A helper component to keep the content structure consistent
const GuideContent = ({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) => (
	<div className='prose prose-lg max-w-none'>
		<h2 className='text-3xl font-bold text-gray-800'>{title}</h2>
		{children}
	</div>
)

export default GuideTabs
