import React from "react";
import { FaAngleDown, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdQuestionAnswer } from "react-icons/md";

const TopInfo = () => {
  return (
    <div className="">
        <ul className="flex gap-4 text-[14px] font-semibold text-[#424242]">
          <li className="flex gap-2 items-center cursor-pointer">
            <p>Find Agent</p>
            <span>
              <FaUser />
            </span>
          </li>
          <li className="flex gap-1 items-center cursor-pointer">
            <p>Library</p>
            <span>
              <IoLibrary />
            </span>
          </li>
          <li className="flex gap-1 items-center cursor-pointer">
            <p>Student Hub</p>
            <span>
              <MdQuestionAnswer />
            </span>
          </li>
          <li className="flex gap-1 items-center cursor-pointer">
            <p>Contact Us</p>
            <span>
              <FaPhoneAlt />
            </span>
          </li>
        </ul>
        </div>
  
  );
};

export default TopInfo;
