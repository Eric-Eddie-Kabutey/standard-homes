import LandListing from '@/components/Lands/LandListing'
import NewsBanner from '@/components/News/Banner'
import React from 'react'

const page = () => {
  return (
    <div>
        <NewsBanner title="Lands" />
        <LandListing />
    </div>
  )
}

export default page