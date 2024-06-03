"use client";

import React, { useEffect } from "react";
import { useState } from "react";

const EventsCard = ({ title, subTitle, day, date, displayMonth, year }) => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const isSmallSize = width < 768 ? true : false;
  const isSmallSize = false;

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <div className="bg-custom-pink flex items-center flex-col md:justify-center h-full rounded-[16px]">
        <div className="flex items-center w-full gap-2 p-2">
          <div className="flex flex-col text-center text-white bg-custom-orange rounded-[12px] font-bold w-20 h-20 justify-center">
            <p>{day}</p>
            <p className="text-[32px] leading-[28px]">{date}</p>
            <p>{displayMonth}</p>
          </div>
          <div className="flex-1 p-2">
            <h2 className="font-bold text-[20px] text-custom-text-black">
              {title}
            </h2>
            {!isSmallSize && <p>{subTitle}</p>}
          </div>
        </div>

        {isSmallSize && <p className="p-2">{subTitle}</p>}
      </div>
    </>
  );
};

export default EventsCard;
