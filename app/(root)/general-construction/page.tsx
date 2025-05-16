import ConstructionCategory from "@/components/GeneralConstructiton/ConstructionCategory";
import ConstructionCateory2 from "@/components/GeneralConstructiton/ConstructionCateory2";
import FeatureSection from "@/components/GeneralConstructiton/FeatureSection";
import FeatureSection2 from "@/components/GeneralConstructiton/FeatureSection2";
import NewsBanner from "@/components/News/Banner";
import React from "react";

const page = () => {
  return (
    <div className="mb-[5%]">
      <NewsBanner title="General Construction" />
      <ConstructionCategory title={"Assets Management"} id="assets" />
      <FeatureSection
        title="Do you want to manage your assets?"
        imageSrc="/unnamed.jpg"
        imageAlt="Assets"
        description="We believe that a well-managed property is a future-proof investment. Whether it’s real estate portfolios, corporate facilities, or individual assets, we implement tailored solutions to mitigate risks, reduce costs, and improve longevity. By leveraging modern management tools and processes, we provide you with peace of mind while ensuring your"
      />
      <ConstructionCateory2 title={"Architectural Design"} id="architect" />
      <FeatureSection2
        title="Are you starting a construction?"
        imageSrc="/architectural-design-news-article-840x430.jpg"
        imageAlt="Arctectural design"
        description="Managing assets effectively is essential for maintaining their value, functionality, and long-term performance. At Standard Homes, we take a proactive approach to asset management, combining in-depth expertise with practical strategies to preserve and enhance your properties. From routine maintenance schedules and infrastructure inspections to"
      />
      <ConstructionCategory
        title={"Commercial & Residential Construction"}
        id="commerce"
      />
      <FeatureSection
        title="Need a reliable construction partner?"
        imageSrc="/cute-female-engineer-african-descent-600nw-2138935425.webp"
        imageAlt="commerce"
        description="We understand that every construction project—whether commercial or residential—is a significant investment. At Standard Homes, we pride ourselves on delivering quality, precision, and reliability at every stage of construction. Our team combines years of expertise with modern engineering solutions to ensure that your projects are executed seamlessly, on time, and within budget."
      />
      <ConstructionCateory2
        title={"Construction Project Management"}
        id="construction"
      />
      <FeatureSection2
        title="Don't know where to kickoff your project?"
        imageSrc="/istockphoto-1444189362-612x612.jpg"
        imageAlt="Engineer"
        description="From procurement and scheduling to managing contractors and solving on-site challenges, our dedicated team handles every detail with precision. We utilize modern project management tools to track progress, optimize workflows, and resolve challenges quickly. At Standard Homes, we don’t just manage projects—we deliver outcomes that exceed expectations,"
      />
      <ConstructionCategory title={"Interior Decoration"} id="interior" />
      <FeatureSection
        title="We excel in sleek interior designs"
        imageSrc="/Image-10-4-1024x1024.jpg"
        imageAlt="Interior"
        description="At Standard Homes, we transform interiors into spaces that reflect personality, functionality, and timeless style. Our interior design services focus on creating harmonious environments tailored to individual preferences and modern standards. From selecting premium materials to curating furniture layouts and decorative elements, we approach each project with creativity and a focus on quality."
      />
    </div>
  );
};

export default page;
