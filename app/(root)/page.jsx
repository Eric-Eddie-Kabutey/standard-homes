import React from "react";
import Hero from "@/components/Hero/Hero";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurProperties from "../../components/OurProperties/OurProperties";
import NewsAndMedia from "../../components/NewsAndMedia/NewsAndMedia";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroSection />
      <OurProperties />
      <NewsAndMedia />
    </>
  );
};

export default Home;
