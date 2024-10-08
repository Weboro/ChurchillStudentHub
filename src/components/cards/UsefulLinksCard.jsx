import Image from "next/image";
import Link from "next/link";
import React from "react";

const UsefulLinksCard = ({ image, title, subTitle, url }) => {
  return (
    <div className="bg-[#E9E9E9] p-5 rounded-md">
      <Link href={`${url}`}>
        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
          <>
            <Image
              src={`${image}`}
              alt={`${title} image`}
              width={400}
              height={400}
              className="object-contain w-[90px] h-[90px] mix-blend-multiply"
            />
          </>
          <h3 className="text-center font-semibold text-[18px]">{title}</h3>
          <p className="text-center">{subTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default UsefulLinksCard;
