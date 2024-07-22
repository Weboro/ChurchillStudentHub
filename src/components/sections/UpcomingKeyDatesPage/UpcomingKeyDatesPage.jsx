"use client";
import {
  NewsSection,
  TopBannerCard,
  KeyDatesCard,
  Spiner,
  DataNotFound,
} from "@/components";
import { useEffect, useState } from "react";
import { FetchUpcomingKeyDate } from "@/components/utils/apiQueries";

const monthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const UpcomingKeyDatesPage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [expandedMonth, setExpandedMonth] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    FetchUpcomingKeyDate()
      .then((res) => {
        if (!res.data) {
          setData(null);
          setIsLoading(false);
          setNoDataFound(true);
          return;
        }

        const filteredData = res.data.filter((item) => {
          const eventDate = new Date(item.start_date);
          const currentDate = new Date();
          return eventDate >= currentDate;
        });

        if (filteredData.length === 0) {
          setData(null);
          setIsLoading(false);
          setNoDataFound(true);
          return;
        }

        const organizedData = {};

        filteredData.forEach((item) => {
          const eventDate = new Date(item.start_date);
          const year = eventDate.getFullYear();
          const month = eventDate.getMonth();

          if (!organizedData[year]) {
            organizedData[year] = {};
          }

          if (!organizedData[year][month]) {
            organizedData[year][month] = [];
          }

          organizedData[year][month].push(item);
        });

        setData(organizedData);

        const firstYear = Object.keys(organizedData)[0];
        const firstMonth = Object.keys(organizedData[firstYear])[0];
        setExpandedMonth(`${firstYear}-${firstMonth}`);

        setIsLoading(false);
        setNoDataFound(Object.keys(organizedData).length === 0);
      })
      .catch((err) => console.error(err));
  }, []);

  const toggleMonth = (year, month) => {
    const key = `${year}-${month}`;
    setExpandedMonth((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div>
            <TopBannerCard
              image={`/assets/HeroImage-2.webp`}
              titleSpan={""}
              title={"Upcoming Key Dates"}
              subTitle={`Student Support > Upcoming Key Dates`}
            />
          </div>
          {noDataFound ? (
            <div className="container mx-auto px-5">
              <div className="md:w-2/3 md:mx-auto">
                <DataNotFound />
              </div>
            </div>
          ) : (
            <div className="container mx-auto px-5">
              <div className="flex flex-col gap-43">
                <div className="flex flex-col gap-8">
                  {Object.keys(data).map((year) => (
                    <div key={year} className="flex flex-col gap-4">
                      <h2 className="text-2xl font-bold pb-1 w-fit relative before:absolute before:bg-primary-orange before:h-1 before:w-full before:bottom-0 before:left-0 ">
                        {year}
                      </h2>

                      <div className="flex flex-col gap-4 w-full">
                        {Object.keys(data[year]).map((month) => {
                          const isActive = expandedMonth === `${year}-${month}`;

                          return (
                            <div key={month} className="flex flex-col gap-4">
                              <div
                                className={`w-full cursor-pointer px-4 py-2 rounded-md font-bold flex items-center justify-between border transition-all ${
                                  isActive
                                    ? "bg-primary-orange text-white"
                                    : "border-primary-orange"
                                }`}
                                onClick={() => toggleMonth(year, month)}
                              >
                                {monthsList[month]}
                                <i
                                  className={`flex fi fi-br-${
                                    isActive ? "minus" : "plus"
                                  } ml-2`}
                                ></i>
                              </div>
                              {isActive && (
                                <div>
                                  {data[year][month].map((item) => (
                                    <KeyDatesCard
                                      key={item.id}
                                      title={item?.title}
                                      description={item?.description}
                                      start_date={item?.start_date}
                                      end_date={item?.end_date}
                                      category={item?.category}
                                      audience={item?.audience}
                                      isFullwidth={true}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <NewsSection />
        </div>
      )}
    </>
  );
};

export default UpcomingKeyDatesPage;
