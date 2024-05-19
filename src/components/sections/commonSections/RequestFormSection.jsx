import Search from "@/components/Search";
import React from "react";
import { navItems } from "@/constDatas/navItems";
import RequestFormCard from "@/components/cards/RequestFormCard";
import Button from "@/components/button";
import { FaArrowDown } from "react-icons/fa";

const RequestFormSection = () => {
  const requestLists = navItems[3]?.Catagories;
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div>
          <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
            <h2 className="font-bold text-[36px] text-[#2C2B4B]">
              Request Form
            </h2>
            <div>
              <Search />
            </div>
          </div>
        </div>
        <div className="rounded-[32px]">
          <RequestFormCard requestLists={requestLists} />
        </div>
        <div className="flex justify-center">
          <Button
            btnName={"Load More Links"}
            icon={<FaArrowDown />}
            styleA={"flex items-center gap-1"}
            style={
              "border border-black rounded-full px-4 py-3 hover:bg-[#424242]/25 transition delay-150"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RequestFormSection;
