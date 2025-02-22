import AboutHeroSection from "@/components/AboutHeroSection/AboutHeroSection";
import AboutPageWelcome from "@/components/AboutPageWelcome/AboutPageWelcome";
import AboutTrustedHomeBuilders from "@/components/AboutTrustedHomeBuilders/AboutTrustedHomeBuilders";
import CompanyOverview from "@/components/CompanyOverview/CompanyOverview";
import JoinMessage from "@/components/JoinMessage/JoinMessage";
import NewsAndMedia from "@/components/NewsAndMedia/NewsAndMeida";
import OurClients from "@/components/OurClients/OurClients";
import OurProperties from "@/components/OurProperties/OurProperties";
import React from "react";

const page = () => {
  return (
    <div>

      <AboutHeroSection />
      <AboutPageWelcome />
      <AboutTrustedHomeBuilders />
      <CompanyOverview />
      <JoinMessage />
      <OurClients />
      <OurProperties />
      <NewsAndMedia />
    </div>

    </>

  );
};

export default page;
