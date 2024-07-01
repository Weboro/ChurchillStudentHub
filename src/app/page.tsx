import {
  AIHelpSection,
  HelpSection,
  HeroSection,
  NewsSection,
  RequestFormSection,
  UpcomingKeyDatesSection,
  UsefulLinkSection,
  YouTubeLinksSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <HeroSection />

        <UsefulLinkSection />

        <AIHelpSection />

        <YouTubeLinksSection />

        <HelpSection />

        <RequestFormSection />

        <UpcomingKeyDatesSection />

        <NewsSection />
      </div>
    </main>
  );
};

export default Home;
