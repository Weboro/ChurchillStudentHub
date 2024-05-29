import Button from "@/components/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import Link from "next/link";
import EventsCard from "@/components/cards/EventsCard";

const UpcomingKeyDatesSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="text-center">
          <h2 className="font-bold text-[36px] text-custom-text-black">
            Upcoming Key Dates
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {UpcomingKeyData?.slice(0, 4)?.map((item, index) => (
            <EventsCard
              day={item?.day}
              // image={item?.image}
              month={item?.month}
              subTitle={item?.subTitle}
              time={item?.time}
              title={item?.title}
              date={item?.date}
              key={index}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center">
            <Link href={"/upcoming-key-dates"} className="w-max">
              <Button
                btnName={"Load More"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                style={
                  "border border-[#606060] rounded-full px-4 py-3 hover:bg-[#424242]/25 transition delay-150"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingKeyDatesSection;
