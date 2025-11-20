import React from "react";
import Hero from "@/components/Hero/Hero";
import HomeBuilderSection from "../../components/HomeBuilderSection/HomeBuilderSection";
import OurProperties from "../../components/OurProperties/OurProperties.tsx";
import NewsAndMedia from "../../components/NewsAndMedia/NewsAndMeida";
import PropertyOptions from "../../components/PropertyOptions/PropertyOptions.jsx";
import WhatMakesUsDifferent from "@/components/OurProperties/WhatMakesUsDifferent";
import ClientTestimonials from "@/components/OurClients/ClientTestimonials";
import TeamShowcase from "@/components/TeamListing/TeamShowcase";
import QuickEnquiryForm from "@/components/OurProperties/QuickEnquiryForm";
import ArticleInsights from "@/components/NewsAndMedia/ArticleInsights";

const Home = () => {
  return (
    <>
      <Hero />
      <PropertyOptions />
      <HomeBuilderSection />
      <OurProperties />
      <WhatMakesUsDifferent />
      <ClientTestimonials />
      <NewsAndMedia />
      <TeamShowcase />
      <ArticleInsights />
      <QuickEnquiryForm />
    </>
  );
};

export default Home;
