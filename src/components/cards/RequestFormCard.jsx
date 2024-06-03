import React from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Link from "next/link";
import Button from "../button";

const RequestFormCard = ({
  icon,
  menuTitle,
  subTitle,
  link,
  slug,
  btnTitle,
  target,
}) => {
  return (
    <div>
      <ul>
        <div>
          <li className="px-4 py-3 bg-[#E9E9E9] rounded-[24px] flex justify-between gap-3 items-center">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-full p-2">
                <span className="text-[24px]">{icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">{menuTitle}</span>
                <span>{subTitle}</span>
              </div>
            </div>
            <Link href={`${link ? link : slug}`} target={target}>
              <Button
                btnName={btnTitle}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
              />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default RequestFormCard;
