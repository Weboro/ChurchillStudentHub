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
            title={"Have a question? We're here to help."}
            description={
              "Got questions or need more information? Don't hesitate to reach out! Click the button below to fill out our enquiry form, and we'll get back to you promptly. Your journey at Churchill matters to us!"
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
                  isPrimary={false}
                  styleA={"flex items-center gap-1"}
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
