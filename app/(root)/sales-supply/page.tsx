import ConstructionCategory from "@/components/GeneralConstructiton/ConstructionCategory";
import ConstructionCateory2 from "@/components/GeneralConstructiton/ConstructionCateory2";
import FeatureSection from "@/components/GeneralConstructiton/FeatureSection";
import FeatureSection2 from "@/components/GeneralConstructiton/FeatureSection2";
import NewsBanner from "@/components/News/Banner";
import React from "react";

const page = () => {
  return (
    <div className="mb-[5%]">
      <NewsBanner title="Sales & Supply" />
      <ConstructionCategory title={"Sales & Leasing"} id="sales" />
      <FeatureSection
        title="Are you looking to sell or lease?"
        imageSrc="/766.jpg"
        imageAlt="Sales"
        description="At Standard Homes, we go beyond transactions—we build trust and deliver value. Our goal is to make every sales or leasing experience seamless, efficient, and rewarding for our clients, setting new standards of excellence in The Gambia’s property market."
      />
      <ConstructionCateory2 title={"Property Maintainance"} id="property" />
      <FeatureSection2
        title="Do you want to transform you house?"
        imageSrc="/istockphoto-1207552113-612x612.jpg"
        imageAlt="Dirty-Clean house"
        description="just as important as acquiring it. Our property maintenance services are designed to ensure that every asset we manage remains in excellent condition, providing both comfort and long-term financial returns for our clients. From routine inspections to addressing specific repair needs, we take a proactive approach, reducing risks and maintaining the quality of your property."
      />
    </div>
  );
};

export default page;
