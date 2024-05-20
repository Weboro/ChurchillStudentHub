import React from "react";
// import Search from "@/components/Search";
import { navItems } from "@/constDatas/navItems";
import RequestFormCard from "@/components/cards/RequestFormCard";
import Button from "@/components/button";
import { FaArrowDown, FaSearch } from "react-icons/fa";

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
              <div className="relative">
                <span className="absolute right-3 top-3 text-[20px] flex items-center justify-center text-black/65">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search for links"
                  // id="search"
                  // value={search}
                  // onChange={(e) => {
                  //   setSearch(e.target.value);
                  // }}
                  className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pr-8 pl-3 py-3 rounded-full"
                />
              </div>
            </div>
            {/* <div> */}
            {/* <Search /> */}
            {/* </div> */}
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
