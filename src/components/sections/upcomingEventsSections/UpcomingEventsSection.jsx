"use client";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";
import {
  NewsSection,
  TopBannerCard,
  FilterComponent,
  AccordionItem,
} from "@/components";

// const filters = {
//   query,
//   audiences: [],
//   categories: [],
// };

const UpcomingEventsSection = () => {
  // const [searchFilters, setSearchFilters] = useState(filters);
  // const [searchQuery, setSearchQuery] = useState("");
  // const query = searchQuery.trim().toLowerCase();

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <div>
        <TopBannerCard
          image={`/assets/heroImage-2.jpeg
`}
          titleSpan={""}
          title={"Upcoming Key Dates"}
          subTitle={`Student Hub > Request Form > Upcoming Key Dates`}
        />
      </div>
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-4">
          <FilterComponent
          // searchFilters={searchFilters}
          // setSearchFilters={setSearchFilters}
          />

          <div className="flex-1 flex flex-col gap-5">
            {Object.keys(UpcomingKeyData)
              .sort((a, b) => b - a) // sorting by year descending order so latest year comes in front
              .map((year) => (
                <div key={year}>
                  <h2
                    className="text-2xl font-extrabold w-fit relative 
                  before:absolute before:bottom-[-5px] before:left-0 before:w-2/3 before:h-1 before:bg-custom-orange before:transition-all"
                  >
                    {year}
                  </h2>
                  {Object.keys(UpcomingKeyData[year]).map((month) => (
                    <AccordionItem
                      key={month}
                      month={month}
                      events={UpcomingKeyData[year][month]}
                      // searchFilters={searchFilters}
                      // setSearchFilters={setSearchFilters}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
      <NewsSection />
    </div>
  );
};

export default UpcomingEventsSection;
