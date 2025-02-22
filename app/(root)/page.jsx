import React from "react";
import Hero from "@/components/Hero/Hero";
import HomeBuilderSection from "../../components/HomeBuilderSection/HomeBuilderSection";
import OurProperties from "../../components/OurProperties/OurProperties.tsx";
import NewsAndMedia from "../../components/NewsAndMedia/NewsAndMeida";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeBuilderSection />
      <OurProperties />
      <NewsAndMedia />
    </>
  );
};

export default Home;
