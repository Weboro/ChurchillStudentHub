import React from "react";
import UsefulLinksCard from "@/components/cards/UsefulLinksCard";
import { usefulLinksData } from "@/constDatas/usefulLinksData";
// import Search from "@/components/Search";
import Button from "@/components/button";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

const UsefulLinkSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
          <h2 className="font-bold text-[36px] text-custom-text-black">
            Useful Links
          </h2>
        </div>
        <div className="grid grid-cols-1 h-full lg:grid-cols-4 gap-[34px] lg:gap-[34px]">
          {usefulLinksData?.slice(0, 4)?.map((item, index) => (
            <UsefulLinksCard
              icon={`${item?.icon}`}
              subTitle={item?.subTitle}
              title={item?.title}
              url={item?.url}
              key={index}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center">
            <Link href={"/useful-links"}>
              <Button
                btnName={"Load More Links"}
                icon={<FaArrowRight />}
                isPrimary={false}
                styleA={"flex items-center gap-1"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinkSection;
