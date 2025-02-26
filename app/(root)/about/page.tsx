import AboutPageWelcome from "@/components/AboutPageWelcome/AboutPageWelcome";
import AboutTrustedHomeBuilders from "@/components/AboutTrustedHomeBuilders/AboutTrustedHomeBuilders";
import CompanyOverview from "@/components/CompanyOverview/CompanyOverview";
import ConstructionCategory from "@/components/GeneralConstructiton/ConstructionCategory";
import JoinMessage from "@/components/JoinMessage/JoinMessage";
import NewsBanner from "@/components/News/Banner";
import NewsAndMedia from "@/components/NewsAndMedia/NewsAndMeida";
import OurClients from "@/components/OurClients/OurClients";
import OurProperties from "@/components/OurProperties/OurProperties";
import TeamList from "@/components/TeamListing/TeamList";
import React from "react";

const page = () => {
  return (
    <div>
      <NewsBanner title="About" />
      <AboutPageWelcome />
      <ConstructionCategory
      title="Our Team"
      id="team"
      />
      <TeamList />
      <AboutTrustedHomeBuilders />
      <CompanyOverview />
      <JoinMessage />
      <OurClients />
      <OurProperties />
      <NewsAndMedia />
    </div>
  );
};

export default page;
