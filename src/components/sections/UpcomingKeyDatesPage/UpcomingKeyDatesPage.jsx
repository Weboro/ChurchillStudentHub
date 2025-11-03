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
  const [selectedYear, setSelectedYear] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    FetchUpcomingKeyDate()
      .then((res) => {
        if (!res.data) {
          setNoDataFound(true);
          return;
        }

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

        // Set current year and month as default
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        if (organizedData[currentYear]) {
          setSelectedYear(currentYear);

          // Set current month if it has events
          if (organizedData[currentYear][currentMonth]?.length > 0) {
            setExpandedMonth(`${currentYear}-${currentMonth}`);
          } else {
            // Otherwise, pick the first month with events
            for (let i = 0; i < 12; i++) {
              if (organizedData[currentYear][i]?.length > 0) {
                setExpandedMonth(`${currentYear}-${i}`);
                break;
              }
            }
          }
        } else {
          // Fallback: first available year
          const availableYears = Object.keys(organizedData);
          if (availableYears.length > 0) {
            setSelectedYear(availableYears[0]);
            for (let i = 0; i < 12; i++) {
              if (organizedData[availableYears[0]][i]?.length > 0) {
                setExpandedMonth(`${availableYears[0]}-${i}`);
                break;
              }
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
                        {data[selectedYear][month]?.length > 0 ? (
                          data[selectedYear][month].map((item) => (
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
          )}
        </div>
      )}

      <NewsSection />
    </div>
  );
};

export default UpcomingKeyDatesPage;
