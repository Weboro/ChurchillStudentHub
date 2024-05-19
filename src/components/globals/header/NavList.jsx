import React from "react";
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
          const hasSubcategories = item?.Catagories?.length > 0;
          return (
            <div key={index}>
              {hasSubcategories ? (
                <li
                  className={`
              group relative`}
                  onClick={() => {
                    handleOnclickA();
                  }}
                >
                  <div
                    className={`flex gap-1 items-center  ${
                      isActive && "text-[#eb9320]"
                    }
                cursor-pointer pb-5`}
                  >
                    <p>{item?.title}</p>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                  {isDropdownActive && (
                    <div className="z-20 hidden px-5 py-3 w-[80vw] lg:w-[20vw] border-t-4 border-t-[#eb9320] group-hover:block lg:absolute lg:left-[50%] lg:transform lg:-translate-x-[50%] top-[100%] shadow-xl whitespace-wrap transition delay-150 bg-white">
                      <ul className="flex flex-col gap-2">
                        {item?.Catagories?.slice(0, 6)?.map(
                          (catagoryItem, index) => (
                            <Link
                              href={``}
                              className=""
                              key={index}
                              onClick={() => {
                                handleOnclick();
                              }}
                            >
                              <li className="hover:text-[#eb9320]">
                                {catagoryItem?.menuTitle}
                              </li>
                            </Link>
                          )
                        )}
                        {item?.Catagories?.length > 6 && (
                          <Link
                            href={``}
                            onClick={() => {
                              handleOnclick();
                            }}
                          >
                            <li className="border-b hover:bg-[#F5F5F5] px-4 py-3 uppercase text-[#2C2B4B] text-center">
                              View All ...
                            </li>
                          </Link>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <Link href={``}>
                  <li
                    className={`flex gap-1 items-center ${
                      isActive && "text-[#eb9320]"
                    }  cursor-pointer pb-5`}
                  >
                    <p>{item?.title}</p>
                  </li>
                </Link>
              )}
            </div>
          );
        })}
        <li>
          <div className="flex gap-1 items-center cursor-pointer">
            <span>Search</span> <FaSearch />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
