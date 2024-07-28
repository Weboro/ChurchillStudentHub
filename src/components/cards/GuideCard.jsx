import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

const GuideCard = ({ title, rich_text, slug }) => {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        <Link href={`/how-to-guide/${slug}`}>
          <li className="px-4 py-3 hover:text-primary-orange bg-white rounded-md flex justify-between gap-2 items-center">
            <p className="text-lg ">{title}</p>
            <span>
              <FaArrowRight />
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default GuideCard;
