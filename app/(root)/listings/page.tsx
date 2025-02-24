import NewsBanner from '@/components/News/Banner'
import Properties from '@/components/PropertyList.tsx/Properties'
import React from 'react'

const page = () => {
  return (
    <div>
        <NewsBanner title="Properties" />
        <Properties />
    </div>
  )
}

export default page