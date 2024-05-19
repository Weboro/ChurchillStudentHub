import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavList from "./NavList";
import TopInfo from "./TopInfo";

const DesktopNav = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-between items-center gap-4">
        <div className="">
          <Link href="/">
            <Image
              src={"/assets/logo.png"}
              width={400}
              height={400}
              alt="Main Logo"
              className="object-contain w-[200px] h-auto"
              priority
            />
          </Link>
        </div>
        <div className="">
          <NavList
            style={"flex gap-5 text-[16px] font-inter font-bold text-[#2C2B4B]"}
            isDropdownActive={true}
            handleOnclick={() => ""}
            handleOnclickA={() => ""}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
