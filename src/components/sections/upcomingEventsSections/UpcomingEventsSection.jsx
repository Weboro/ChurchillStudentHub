import React from "react";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import { EventsCard, NewsSection, TopBannerCard } from "@/components";

const UpcomingEventsSection = () => {
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
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div className="flex flex-col gap-5">
            {UpcomingKeyData?.map((item, index) => (
              <EventsCard
                day={item?.day}
                image={item?.image}
                month={item?.month}
                subTitle={item?.subTitle}
                time={item?.time}
                title={item?.title}
                date={item?.date}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <NewsSection />
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
