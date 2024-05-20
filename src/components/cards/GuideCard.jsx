import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

const GuideCard = ({ guideLists, title, isSearchActive }) => {
  return (
    <div className=" px-8 py-[32px] flex flex-col gap-5">
      <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
        <h2 className="font-bold text-[36px] text-[#2C2B4B]">{title}</h2>
        <div className="">
          {isSearchActive && (
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
          )}
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          {guideLists?.slice(0, 4)?.map((item, index) => (
            <Link href={""} key={index}>
              <li className="px-4 py-3 hover:text-[#E59623] bg-white rounded-[12px] flex justify-between gap-2 items-center">
                {item?.menuTitle}
                <span>
                  <FaArrowRight />
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuideCard;
