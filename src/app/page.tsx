import {
  HelpSection,
  HeroSection,
  NewsSection,
  RequestFormSection,
  UpcomingKeyDatesSection,
  UsefulLinkSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="">
          <HeroSection />
        </div>
        <div>
          <UsefulLinkSection />
        </div>
        <div>
          <HelpSection />
        </div>
        <div>
          <RequestFormSection isButtonActive={true} />
        </div>
        <div>
          <UpcomingKeyDatesSection />
        </div>
        <div>
          <NewsSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
