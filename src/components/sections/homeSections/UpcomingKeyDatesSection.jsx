"use client";
import React, { useEffect, useState } from "react";
import KeyDatesCard from "@/components/cards/KeyDatesCard";
import Button from "@/components/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FetchUpcomingKeyDate } from "@/components/utils/apiQueries";

const UpcomingKeyDates = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    FetchUpcomingKeyDate()
      .then((res) => {
        const filteredData = res.data.filter((item) => {
          const eventDate = new Date(item.start_date);
          const currentDate = new Date();

          return eventDate >= currentDate;
        });
        setData(filteredData);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-[32px] lg:gap-[44px]">
            <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
              Upcoming Key Dates
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {data?.slice(0, 6)?.map((item, index) => {
                console.log(item);

                return (
                  <KeyDatesCard
                    key={index}
                    start_date={item?.start_date}
                    end_date={item?.end_date}
                    title={item?.title}
                    description={item?.description}
                    category={item?.category}
                    audience={item?.audience}
                  />
                );
              })}
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
      )}
    </>
  );
};

export default UpcomingKeyDates;
