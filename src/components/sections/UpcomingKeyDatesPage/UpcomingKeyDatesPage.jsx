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
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedMonth, setExpandedMonth] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    FetchUpcomingKeyDate()
      .then((res) => {
        if (!res.data) {
          setNoDataFound(true);
          return;
        }

        const today = new Date();
        const filtered = res.data.filter((el) => {
          const eventDate = new Date(el.start_date);
          return eventDate.getFullYear() >= today.getFullYear();
        });

        const organizedData = {};

        filtered.forEach((item) => {
          const eventDate = new Date(item.start_date);
          const year = eventDate.getFullYear();
          const month = eventDate.getMonth();

          if (!organizedData[year]) {
            organizedData[year] = Array.from({ length: 12 }, () => []);
          }

          organizedData[year][month].push(item);
        });

        setData(organizedData);
        setNoDataFound(Object.keys(organizedData).length === 0);

        // Set current month as expanded by default
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        if (
          organizedData[currentYear] &&
          organizedData[currentYear][currentMonth]
        ) {
          setExpandedMonth(`${currentYear}-${currentMonth}`);
        } else {
          for (const year of Object.keys(organizedData)) {
            for (let i = 0; i < 12; i++) {
              if (organizedData[year][i]?.length > 0) {
                setExpandedMonth(`${year}-${i}`);
                break;
              }
            }
            break;
          }
        }
      })
      .catch((err) => {
        console.error(err);
        setNoDataFound(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const toggleMonth = (year, month) => {
    const key = `${year}-${month}`;
    setExpandedMonth((prev) => (prev === key ? null : key));
  };

  if (isLoading) return <Spiner />;

  return (
    <>
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/StudentHub.jpg`}
            titleSpan={""}
            title={"Key Dates"}
            subTitle={`Current Students Support Hub > Key Dates`}
          />
        </div>
        {noDataFound ? (
          <div className="md:w-2/3 md:mx-auto">
            <DataNotFound />
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
                      {[...Array(12).keys()].map((month) => {
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
                              <div className="flex flex-col gap-4">
                                {data[year][month]?.length > 0 ? (
                                  data[year][month].map((item) => (
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
                                  ))
                                ) : (
                                  <p className="text-sm italic text-gray-500 pl-2">
                                    No events in this month.
                                  </p>
                                )}
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
    </>
  );
};

export default UpcomingKeyDatesPage;
