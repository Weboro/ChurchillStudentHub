import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const GuideCard = ({ guideLists,title }) => {
  return (
    <div className=" px-8 py-[32px] flex flex-col gap-5">
      <h2 className="font-bold text-[36px] text-[#2C2B4B]">{title}</h2>
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
