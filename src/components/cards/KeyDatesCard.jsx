"use client";
import React from "react";

const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const KeyDatesCard = ({
  title,
  description,
  start_date,
  end_date,
  category,
  audience,
  isFullwidth = false,
}) => {
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  const formattedStartDate = `${startDate.getDate()} ${
    monthArray[startDate.getMonth()]
  }`;
  const formattedEndDate = `${endDate.getDate()} ${
    monthArray[endDate.getMonth()]
  }`;

  const showEndDate = isFullwidth && startDate.getTime() !== endDate.getTime();

  return (
    <>
      <div className="bg-[#FAF4F4] rounded-md p-4 flex flex-col justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div
            className={`text-white bg-primary-orange py-2 px-3 rounded-md flex items-center gap-2 font-bold w-fit`}
          >
            <i className="fi fi-rr-calendar-day flex text-2xl"></i>
            <span>
              {formattedStartDate}
              {showEndDate ? ` - ${formattedEndDate}` : ""}
            </span>
          </div>
          <h2 className="font-bold text-[22px] text-[#2C2B4B] leading-6">
            {title}
          </h2>
        </div>
        {isFullwidth && (
          <div className="flex flex-col gap-4">
            {/* <p dangerouslySetInnerHTML={{ __html: description }}></p> */}

            <div className="flex items-center gap-3">
              {[category, audience].map((item, index) => (
                <p
                  key={index}
                  className="bg-primary-orange/20 text-neutral-950/75 px-3 py-1 rounded-md whitespace-nowrap"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        )}
        {/* <div className="flex gap-2 items-center flex-wrap text-sm">
          {audience.map((item, index) => (
            
          ))}
          {category.map((item, index) => (
            <p
              className="bg-primary-orange/20 text-neutral-950/75 px-3 py-1 rounded-full whitespace-nowrap"
              key={index}
            >
              {item}
            </p>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default KeyDatesCard;
