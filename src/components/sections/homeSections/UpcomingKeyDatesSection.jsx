import React from "react";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import KeyDatesCard from "@/components/cards/KeyDatesCard";
import Button from "@/components/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const UpcomingKeyDatesSection = () => {
  const filteredDates = UpcomingKeyData?.filter((item) => {
    const year = parseInt(item.date.split("-")[0]);
    const month = parseInt(item.date.split("-")[1]) - 1;
    const day = parseInt(item.date.split("-")[2]);

    const eventDate = new Date(year, month, day);
    const currentDate = new Date();

    return eventDate >= currentDate;
  });

  const NEXT_PUBLIC_CHURCHILL_URL = process.env.NEXT_PUBLIC_CHURCHILL_URL;

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
          Upcoming Key Dates
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {filteredDates?.slice(0, 6)?.map((item, index) => (
            <KeyDatesCard
              key={index}
              date={item?.date}
              endDate={item?.endDate}
              startTime={item?.startTime}
              endTime={item?.endTime}
              eventName={item?.eventName}
              description={item?.description}
              audience={item?.audience}
              category={item?.category}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center">
            <Link href={`/upcoming-key-dates`} className="w-fit">
              <Button
                btnName={"Load More"}
                icon={<FaArrowRight />}
                styleType="secondary"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingKeyDatesSection;
