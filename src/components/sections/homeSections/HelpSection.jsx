import GuideCard from "@/components/cards/GuideCard";
import HelpCard from "@/components/cards/HelpCard";
import React from "react";
import { navItems } from "@/constDatas/navItems";
import Button from "@/components/button";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

const HelpSection = () => {
  const guideLists = navItems[1]?.Catagories;

  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
        <div className="bg-custom-pink rounded-[32px]">
          <HelpCard
            image={"/assets/help.png"}
            title={"Need Help?"}
            description={
              "If you would like to become an authorised representative of UNSW Sydney, please submit an Expression of Interest. Expression of interests will be assessed by the relevant Regional Recruitment Manager."
            }
          />
        </div>
        <div className="bg-custom-pink rounded-[32px] flex flex-col">
          <div className=" px-8 py-[32px] flex flex-col gap-5">
            <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
              <h2 className="font-bold text-[36px] text-custom-text-black">
                How to Guide?
              </h2>
            </div>
            {guideLists?.slice(0, 4)?.map((item, index) => (
              <GuideCard
                key={index}
                menuTitle={item?.menuTitle}
                slug={item?.slug}
              />
            ))}
          </div>
          <div className="pb-[32px]">
            <div className="flex justify-center">
              <Link href={"/how-to-guide"}>
                <Button
                  btnName={"Load More Links"}
                  icon={<FaArrowRight />}
                  styleA={"flex items-center gap-1"}
                  style={
                    "border border-[#606060] rounded-full px-4 py-3 bg-custom-orange hover:bg-[#424242]/25 transition delay-150"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
