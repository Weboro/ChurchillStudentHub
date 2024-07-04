"use client";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import {
  NewsSection,
  TopBannerCard,
  FilterComponent,
  KeyDatesCard,
  Spiner,
} from "@/components";
import { useEffect, useState } from "react";

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

const UpcomingEventsSection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedMonth, setExpandedMonth] = useState({});
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    try {
      const filteredDates = UpcomingKeyData?.filter((item) => {
        const [year, month, day] = item.date.split("-").map(Number);

        const eventDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        return eventDate >= currentDate;
      }).sort((a, b) => new Date(a.date) - new Date(b.date));

      const groupByMonthsAndYear = filteredDates.reduce((acc, item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = monthsList[date.getMonth()];

        if (!acc[year]) {
          acc[year] = {};
        }

        if (!acc[year][month]) {
          acc[year][month] = [];
        }

        acc[year][month].push(item);

        return acc;
      }, {});

      setData(groupByMonthsAndYear);

      const firstYear = Object.keys(groupByMonthsAndYear)[0];
      const firstMonth = Object.keys(groupByMonthsAndYear[firstYear])[0];

      setExpandedMonth({ [firstYear]: firstMonth });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const toggleMonth = (year, month) => {
    setExpandedMonth((prevState) => ({
      ...prevState,
      [year]: prevState[year] === month ? null : month,
    }));
  };

  if (isLoading) return <Spiner />;

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <div>
        <TopBannerCard
          image={`/assets/heroImage-2.jpeg`}
          titleSpan={""}
          title={"Upcoming Key Dates"}
          subTitle={`Student Support > Request Form > Upcoming Key Dates`}
        />
      </div>
      <div className="container mx-auto px-5">
        {/* <div className="flex flex-col lg:flex-row gap-8"> */}
        {/* <FilterComponent
            searchText={searchText}
            onSearchText={setSearchText}
          /> */}

        <div className="flex-1 flex flex-col gap-12">
          {Object.keys(data).map((year) => (
            <div key={year} className="flex flex-col gap-4">
              <h2
                className="text-2xl font-bold w-fit pb-[4px] relative 
                  before:absolute before:h-[3px] before:bottom-0 before:left-0 before:w-[40%] before:bg-primary-orange"
              >
                {year}
              </h2>

              {Object.keys(data[year]).map((month) => (
                <div key={month} className="flex flex-col gap-4">
                  <div
                    className={`flex items-center justify-between border px-5 py-3 rounded-md font-semibold cursor-pointer transition-all ${
                      expandedMonth[year] === month
                        ? " bg-primary-orange text-white border-transparent"
                        : "border-primary-orange shadow-md shadow-primary-orange/10"
                    }`}
                    onClick={() => toggleMonth(year, month)}
                  >
                    <span>{month}</span>
                    <i
                      className={`fi fi-br-${
                        expandedMonth[year] === month ? "minus" : "plus"
                      } flex`}
                    ></i>
                  </div>

                  {expandedMonth[year] === month && (
                    <div className="flex flex-col gap-5">
                      {data[year][month].map((item) => (
                        <span key={item.date}>
                          <KeyDatesCard
                            date={item.date}
                            endDate={item.endDate}
                            startTime={item.startTime}
                            endTime={item.endTime}
                            eventName={item.eventName}
                            description={item.description}
                            audience={item.audience}
                            category={item.category}
                          />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
      <NewsSection />
    </div>
  );
};

export default UpcomingEventsSection;
