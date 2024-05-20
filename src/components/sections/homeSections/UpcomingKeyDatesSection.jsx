import Button from "@/components/button";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { UpcomingKeyData } from "@/constDatas/UpcomingKeyData";

const UpcomingKeyDatesSection = () => {
  return (
    <div className="container mx-auto px-5 hidden lg:block">
      <div className="flex flex-col gap-[44px]">
        <div className="text-center">
          <h2 className="font-bold text-[36px] text-[#2C2B4B]">
            Upcoming Key Dates
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {UpcomingKeyData?.map((item, index) => (
            <div className="flex justify-between items-center gap-3 rounded-[24px] bg-[#F3E4E4]" key={index}>
              <div className="flex gap-3 items-center">
                <Image
                  src={`${item?.image}`}
                  alt={"use-links-icon-image"}
                  width={400}
                  height={400}
                  className="object-cover w-[250px] h-auto rounded-tl-[24px] rounded-bl-[24px]"
                />
                <div>
                  <div>
                    <h2 className="font-bold text-[20px] text-[#2C2B4B]">
                    {item?.title}
                    </h2>
                    <p>{item?.subTitle}</p>
                  </div>
                </div>
              </div>
              <div className="w-[100px] mr-5">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col text-center text-white bg-[#E59623] rounded-[12px] p-2 font-bold">
                    <p>{item?.day}</p>
                    <p className="text-[32px] leading-[28px]">20</p>
                    <p>{item?.month}</p>
                  </div>
                  <p className="text-[16px] text-center">{item?.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
