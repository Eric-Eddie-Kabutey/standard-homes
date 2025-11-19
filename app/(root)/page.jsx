import React from "react";
import Hero from "@/components/Hero/Hero";
import HomeBuilderSection from "../../components/HomeBuilderSection/HomeBuilderSection";
import OurProperties from "../../components/OurProperties/OurProperties.tsx";
import NewsAndMedia from "../../components/NewsAndMedia/NewsAndMeida";
import PropertyOptions from "../../components/PropertyOptions/PropertyOptions.jsx";
import WhatMakesUsDifferent from "@/components/OurProperties/WhatMakesUsDifferent";

const Home = () => {
  return (
    <>
      <Hero />
      <PropertyOptions />
      <HomeBuilderSection />
      <OurProperties />
      <WhatMakesUsDifferent />
      <NewsAndMedia />
    </>
  );
};

export default Home;
