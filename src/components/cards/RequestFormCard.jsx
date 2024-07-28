import React from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Link from "next/link";
import Button from "../button";

const RequestFormCard = ({
  pdf_upload,
  created,
  updated,
  icon,
  title,
  description,
  external_link,
}) => {
  return (
    <li className="px-4 py-3 hover:shadow-sm  bg-[#E9E9E9] rounded-md flex flex-col md:flex-row md:justify-between gap-2 items-center">
      <div className="flex flex-col gap-3 items-center md:flex-row ">
        <div className="bg-white rounded-full w-12 h-12 grid place-items-center">
          <i
            className={`text-2xl text-primary-orange translate-y-[2px] ${icon}`}
          />
        </div>
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-bold">{title}</span>
          <span>{description}</span>
        </div>
      </div>
      <Link
        target={external_link ? "_blank" : "_self"}
        href={`${external_link ? external_link : pdf_upload}`}
      >
        <Button btnName="Learn More" styleA={"flex items-center gap-1"} />
      </Link>
    </li>
  );
};

export default RequestFormCard;
