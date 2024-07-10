import {
  AIHelpSection,
  HelpSection,
  HeroSection,
  NewsSection,
  StudentProspectusSection,
  SupportSection,
  UpcomingKeyDatesSection,
  UsefulLinkSection,
  YouTubeLinksSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <main className="">
      <HeroSection />
      <div className="md:hidden mt-[32px]"></div>

      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <UsefulLinkSection />

        <AIHelpSection />

        <YouTubeLinksSection />

        <HelpSection />

        <SupportSection />

        {/* <RequestFormSection /> */}

        <UpcomingKeyDatesSection />

        <StudentProspectusSection />

        <NewsSection />
      </div>
    </main>
  );
};

export default Home;
