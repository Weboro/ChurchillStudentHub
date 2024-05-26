import React from "react";
import Image from "next/image";

const EventsCard = ({image,title,subTitle,day,month,time,date}) => {
  return (
    <div>
      <div className="flex flex-col lg:p-0 p-5 lg:flex-row justify-between items-center gap-3 rounded-[24px] bg-[#F3E4E4]">
        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="object-cover w-[250px] h-auto lg:rounded-tl-[24px] lg:rounded-bl-[24px]"
          />
          <div>
            <div className="text-center lg:text-start">
              <h2 className="font-bold text-[20px] text-[#2C2B4B]">
                {title}
              </h2>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
        <div className="w-[100px] lg:mr-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col text-center text-white bg-[#E59623] rounded-[12px] p-2 font-bold">
              <p>{day}</p>
              <p className="text-[32px] leading-[28px]">{date}</p>
              <p>{month}</p>
            </div>
            <p className="text-[16px] text-center">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
