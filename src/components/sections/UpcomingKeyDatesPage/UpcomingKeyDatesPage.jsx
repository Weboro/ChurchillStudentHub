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
import Link from "next/link";

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
  const [selectedYear, setSelectedYear] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    FetchUpcomingKeyDate()
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setNoDataFound(true);
          return;
        }

        // organize data by year and month
        const organizedData = {};
        res.data.forEach((item) => {
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

        // determine default selection
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        if (organizedData[currentYear]) {
          setSelectedYear(String(currentYear));

          if (organizedData[currentYear][currentMonth]?.length > 0) {
            setExpandedMonth(`${currentYear}-${currentMonth}`);
          } else {
            const firstMonthWithData = organizedData[currentYear].findIndex(
              (m) => m.length > 0
            );
            if (firstMonthWithData !== -1) {
              setExpandedMonth(`${currentYear}-${firstMonthWithData}`);
            }
          }
        } else {
          const availableYears = Object.keys(organizedData);
          if (availableYears.length > 0) {
            const firstYear = availableYears[0];
            setSelectedYear(firstYear);
            const firstMonthWithData = organizedData[firstYear].findIndex(
              (m) => m.length > 0
            );
            if (firstMonthWithData !== -1) {
              setExpandedMonth(`${firstYear}-${firstMonthWithData}`);
            }
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
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <TopBannerCard
        image={`/assets/StudentHub.jpg`}
        titleSpan=""
        title="Key Dates"
        subTitle="Current Students Support Hub > Key Dates"
      />

      {noDataFound ? (
        <div className="md:w-2/3 md:mx-auto">
          <DataNotFound />
        </div>
      ) : (
        <div className="container mx-auto px-5">
          {/* Year Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(data).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full font-bold border transition-all ${
                  selectedYear === year
                    ? "bg-primary-orange text-white border-primary-orange"
                    : "bg-white text-primary-orange border-primary-orange"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Months & Events for Selected Year */}
          {selectedYear && (
            <div className="flex flex-col gap-4">
              {[...Array(12).keys()].map((month) => {
                const isActive = expandedMonth === `${selectedYear}-${month}`;
                const monthEvents = data[selectedYear][month] || [];

                return (
                  <div key={month} className="flex flex-col gap-2">
                    <div
                      className={`w-full cursor-pointer px-4 py-2 rounded-md font-bold flex items-center justify-between border transition-all ${
                        isActive
                          ? "bg-primary-orange text-white"
                          : "border-primary-orange"
                      }`}
                      onClick={() => toggleMonth(selectedYear, month)}
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
                        {monthEvents.length > 0 ? (
                          <>
                            {monthEvents.map((item) => (
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

                            {selectedYear === "2026" && month === 1 && (
                              <p className="text-sm italic pl-2">
                                *This is an indicative timeframe only based on
                                the Department of{" "}
                                <Link
                                  href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times"
                                  className="text-primary-orange hover:underline"
                                >
                                  Home Affairs website (visa processing times)
                                </Link>{" "}
                                that is subject to change / may increase or
                                decrease, at any time, without notice. Churchill
                                institute has no authority / influence over
                                student visa application assessment times and
                                outcomes.
                              </p>
                            )}
                          </>
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
          )}
        </div>
      )}

      <NewsSection />
    </div>
  );
};

export default UpcomingKeyDatesPage;
