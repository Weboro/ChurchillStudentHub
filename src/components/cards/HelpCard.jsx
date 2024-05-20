import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const HelpCard = ({title,description,image}) => {
  return (
    <div className="bg-[#F3E4E4] rounded-[32px] px-8 pt-[32px] lg:pb-0 pb-[32px] flex flex-col gap-5">
      <h2 className="font-bold text-[36px] text-[#2C2B4B]">{title}</h2>
      <p>{description}</p>
      <div>
        <div className="">
          <Button
            btnName={"Load More Links"}
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style={
              "border border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:bg-[#424242]/25 transition delay-150"
            }
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-end">
          <Image
          src={`${image}`}
          alt={"use-links-icon-image"}
          width={400}
          height={400}
          className="w-[285px] h-[250px]"
        />
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
