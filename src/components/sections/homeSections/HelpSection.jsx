import GuideCard from "@/components/cards/GuideCard";
import HelpCard from "@/components/cards/HelpCard";
import React from "react";
import { navItems } from "@/constDatas/navItems";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";

const HelpSection = () => {
  const guideLists = navItems[1]?.Catagories;

  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
        <div className="bg-[#F3E4E4] rounded-[32px]">
          <HelpCard
            image={"/assets/help.png"}
            title={"Need Help?"}
            description={
              "If you would like to become an authorised representative of UNSW Sydney, please submit an Expression of Interest. Expression of interests will be assessed by the relevant Regional Recruitment Manager."
            }
          />
        </div>
        <div className="bg-[#F3E4E4] rounded-[32px] flex flex-col">
          <GuideCard guideLists={guideLists} title={"How to Guide?"} />
          <div>
            <div className="flex justify-center">
              <Button
                btnName={"Load More Links"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                style={
                  "border border-black rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#424242]/25 transition delay-150"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
