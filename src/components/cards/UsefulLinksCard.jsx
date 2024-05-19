import Image from "next/image";
import React from "react";

const UsefulLinksCard = ({ icon, title, subTitle }) => {
  return (
    <div className="bg-[#E9E9E9] p-5 rounded-[24px]">
      <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
        <span>
          <Image
            src={`${icon}`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="object-contain w-[90px] h-[90px]"
          />
        </span>
        <h3 className="text-center font-semibold text-[18px]">{title}</h3>
        <p className="text-center">{subTitle}</p>
      </div>
    </div>
  );
};

export default UsefulLinksCard;
