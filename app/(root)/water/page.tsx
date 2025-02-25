import ConstructionCategory from '@/components/GeneralConstructiton/ConstructionCategory'
import ConstructionCateory2 from '@/components/GeneralConstructiton/ConstructionCateory2'
import FeatureSection from '@/components/GeneralConstructiton/FeatureSection'
import FeatureSection2 from '@/components/GeneralConstructiton/FeatureSection2'
import NewsBanner from '@/components/News/Banner'
import React from 'react'

const page = () => {
    return (
        <div className='mb-[5%]'>
            <NewsBanner title="Water" />
            <ConstructionCategory title={"Borehole Drilling"} />
            <FeatureSection
                title="Do you want to drill"
                imageSrc="https://img.freepik.com/premium-photo/man-wearing-hard-hat-is-using-machine-that-has-yellow-hard-hat-it_1107779-27153.jpg?w=1800"
                imageAlt="borehole"
                description="At Standard Homes, we go beyond transactions—we build trust and deliver value. Our goal is to make every sales or leasing experience seamless, efficient, and rewarding for our clients, setting new standards of excellence in The Gambia’s property market."
            />
            <ConstructionCateory2 title={"Water Extension"} />
            <FeatureSection2
                title="Do you want to transform you house?"
                imageSrc="https://img.freepik.com/premium-photo/maintenance-pressure-reducing-valve-water-treatment-plant-thailand_38039-625.jpg?w=1380"
                imageAlt="Dirty-Clean house"
                description="just as important as acquiring it. Our property maintenance services are designed to ensure that every asset we manage remains in excellent condition, providing both comfort and long-term financial returns for our clients. From routine inspections to addressing specific repair needs, we take a proactive approach, reducing risks and maintaining the quality of your property."
            />
        </div>
    )
}

export default page