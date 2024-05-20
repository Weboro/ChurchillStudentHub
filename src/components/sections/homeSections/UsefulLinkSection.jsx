import React from "react";
import UsefulLinksCard from "@/components/cards/UsefulLinksCard";
import { usefulLinksData } from "@/constDatas/usefulLinksData";
import Search from "@/components/Search";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";

const UsefulLinkSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
          <h2 className="font-bold text-[36px] text-[#2C2B4B]">Useful Links</h2>
          <div>
            <Search />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[34px] lg:gap-[34px]">
          {usefulLinksData?.slice(0, 4)?.map((item, index) => (
            <UsefulLinksCard
              icon={`${item?.icon}`}
              subTitle={item?.subTitle}
              title={item?.title}
              key={index}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center">
            <Button
              btnName={"Load More Links"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              style={"border border-black rounded-full px-4 py-3 hover:bg-[#424242]/25 transition delay-150"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinkSection;
