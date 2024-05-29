"use client";
import React, { useState } from "react";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import {
  EventsCard,
  NewsSection,
  TopBannerCard,
  FilterComponent,
} from "@/components";

const UpcomingEventsSection = () => {
  const [searchQuery, handlseSearchQuery] = useState("");
  const query = searchQuery.trim();

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <div>
        <TopBannerCard
          image={`/assets/hero-image.png`}
          titleSpan={""}
          title={"Upcoming Key Dates"}
          subTitle={`Student Hub > Request Form > Upcoming Key Dates`}
        />
      </div>
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-4">
          <FilterComponent
            searchQuery={searchQuery}
            onSearchQuery={handlseSearchQuery}
          />

          <div className="flex-1 flex flex-col gap-5">
            {UpcomingKeyData?.map((item, index) => (
              <EventsCard
                day={item?.day}
                month={item?.month}
                subTitle={item?.subTitle}
                time={item?.time}
                title={item?.title}
                date={item?.date}
                key={index}
                query={query}
              />
            ))}
          </div>
        </div>
      </div>
      <NewsSection />
    </div>
  );
};

export default UpcomingEventsSection;
