import Button from "@/components/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import Link from "next/link";
import EventsCard from "@/components/cards/EventsCard";

const UpcomingKeyDatesSection = () => {
  const events = [];

  Object.keys(UpcomingKeyData)
    .sort((a, b) => b - a)
    .forEach((year) => {
      Object.keys(UpcomingKeyData[year]).forEach((month) => {
        const monthData = UpcomingKeyData[year][month] || [];
        monthData.forEach((event) => {
          events.push({ ...event, year });
        });
      });
    });

  const keyEvents = events.slice(0, 6);

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="text-center">
          <h2 className="font-bold text-[36px] text-custom-text-black">
            Upcoming Key Dates
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {keyEvents.map((event) => (
            <EventsCard
              key={event.id}
              title={event.title}
              subTitle={event.subTitle}
              day={event.day}
              date={event.date}
              year={event.year}
              displayMonth={event.displayMonth}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center">
            <Link href={"/upcoming-key-dates"} className="w-max">
              <Button
                btnName={"Load More"}
                isPrimary={false}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingKeyDatesSection;
