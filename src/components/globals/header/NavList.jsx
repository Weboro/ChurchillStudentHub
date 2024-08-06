"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import TopInfo from "./TopInfo";
import { navItems } from "@/constDatas/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = ({
  style,
  isDropdownActive,
  handleOnclickA,
  handleOnclick,
}) => {
  const pathname = usePathname();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (openSearch) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://cse.google.com/cse.js?cx=820c819b7996d4c87";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [openSearch]);

  return (
    <div className="w-full flex flex-col gap-2 z-40 pt-5">
      <div className="hidden lg:block">
        <div className="flex justify-end">
          <TopInfo />
        </div>
      </div>

      <ul className={`${style ? style : ""}`}>
        {navItems?.map((item, index) => {
          const isActive =
            (pathname.includes(item?.slug) && item?.slug?.length > 1) ||
            pathname === item?.slug;

          return (
            <div key={index}>
              <Link href={`/${item?.slug}`}>
                <li
                  className={`flex gap-1 items-center hover:text-[#eb9320] ${
                    isActive && "text-[#eb9320]"
                  }  cursor-pointer pb-5`}
                >
                  <p>{item?.title}</p>
                </li>
              </Link>
            </div>
          );
        })}

        <li
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          <div className="flex gap-1 items-center cursor-pointer">
            <span>Search</span> <FaSearch />
          </div>
        </li>

        {openSearch && (
          <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/75">
            <div className="lg:mt-[15%] mt-[50%]">
              <div className="flex justify-center items-center">
                <div className="w-[80%] lg:w-[50%] h-fit ">
                  <div className="gcse-search"></div>
                </div>
              </div>
            </div>

            <p
              className="absolute top-8 right-8 text-[#FF0000] text-4xl cursor-pointer"
              onClick={() => {
                setOpenSearch(false);
              }}
            >
              <i className="fi fi-rr-cross-small"></i>
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavList;
