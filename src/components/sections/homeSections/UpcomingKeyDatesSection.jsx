import Button from "@/components/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const UpcomingKeyDatesSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="text-center">
          <h2 className="font-bold text-[36px] text-[#2C2B4B]">
            Upcoming Key Dates
          </h2>
        </div>
        <div className="bg-[#F3E4E4] px-[44px] py-[54px] rounded-[24px]"></div>
        <div>
          <div className="flex justify-center">
            <Button
              btnName={"Load More Links"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              style={
                "border border-black rounded-full px-4 py-3 hover:bg-[#424242]/25 transition delay-150"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingKeyDatesSection;
