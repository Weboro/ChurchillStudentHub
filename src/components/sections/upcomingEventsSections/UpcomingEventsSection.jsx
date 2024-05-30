"use client";
import React, { useState } from "react";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import {
  NewsSection,
  TopBannerCard,
  FilterComponent,
  AccordionItem,
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
          <FilterComponent searchQuery={""} onSearchQuery={() => {}} />

          <div className="flex-1 flex flex-col gap-5">
            {Object.keys(UpcomingKeyData)
              .sort((a, b) => b - a)
              .map((year) => (
                <div key={year}>
                  <h2
                    className="text-2xl font-extrabold w-fit relative 
                  before:absolute before:bottom-[-5px] before:left-0 before:w-2/3 before:h-1 before:bg-custom-orange before:transition-all"
                  >
                    {year}
                  </h2>

                  {Object.keys(UpcomingKeyData[year])
                    .sort((a, b) => b - a)
                    .map((month) => (
                      <AccordionItem
                        key={month}
                        month={month}
                        events={UpcomingKeyData[year][month]}
                      />
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
      <NewsSection />
    </div>
  );
};

export default UpcomingEventsSection;
