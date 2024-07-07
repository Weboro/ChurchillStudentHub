"use client";
import React, { useState, useEffect } from "react";
import NavList from "./NavList";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import { TopInfo } from "@/components";
import { useParams } from "next/navigation";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    setIsDropdownActive(false);
    setOpenMenu(false);
  }, [slug]);

  return (
    <div className="">
      <div className="flex justify-between gap-8 items-center px-[24px] py-2 shadow bg-white w-full">
        <div className="py-2">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              width={400}
              height={400}
              alt="Main Logo"
              className="object-contain w-[200px]"
              priority
            />
          </Link>
        </div>
        <div className="">
          <div
            className="text-[44px]"
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <CgMenuRight />
          </div>
        </div>
      </div>
      {/* </div> */}
      {openMenu && (
        <div className="w-full">
          <div
            className="z-40 fixed top-0 right-0 left-0 bottom-0 bg-[#fff] pl-8 pt-4 flex flex-col"
            style={{
              animation: "sidebarAnimate linear 0.2s",
            }}
          >
            <div className="flex justify-between gap-8 items-center">
              <Link href={"/"} className=" w-fit">
                <Image
                  src={"/assets/logo.svg"}
                  width={400}
                  height={400}
                  alt="Main Logo"
                  className="object-contain w-[200px]"
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  priority
                />
              </Link>
              <div
                className="pr-8 text-[32px] text-[#000]/[72%]"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <IoMdCloseCircleOutline />
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-between h-full pb-12">
              <NavList
                style={`flex flex-col gap-2`}
                handleOnclick={() => {
                  setOpenMenu(false);
                }}
                handleOnclickA={() => setIsDropdownActive((prev) => !prev)}
                isDropdownActive={isDropdownActive}
              />
              <TopInfo />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
