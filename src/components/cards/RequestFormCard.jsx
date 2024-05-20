import React from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Link from "next/link";
import Button from "../button";

const RequestFormCard = ({ requestLists }) => {
  return (
    <div>
      <ul className="flex flex-col gap-5">
        {requestLists?.map((item, index) => (
          <div key={index}>
            <li className="px-4 py-3 bg-[#E9E9E9] rounded-[24px] flex justify-between gap-3 items-center">
              <div className="flex gap-3 items-center">
                <div className="bg-white rounded-full p-2">
                  <span className="text-[24px]">{item?.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{item?.menuTitle}</span>
                  <span>{item?.subTitle}</span>
                </div>
              </div>
              <Link href={`/report-form/${item?.slug}`}>
                <Button
                  btnName={"Apply"}
                  icon={<FaArrowRight />}
                  styleA={"flex items-center gap-1"}
                  style={
                    "border border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#424242]/25 transition delay-150"
                  }
                />
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RequestFormCard;
