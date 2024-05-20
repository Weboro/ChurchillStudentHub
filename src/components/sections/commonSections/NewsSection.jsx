import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewsSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="bg-[#F3E4E4] px-[44px] pt-[44px] rounded-[24px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            <div className="hidden lg:block">
              <Image
                src={`/assets/news-banner.png`}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="w-[300px] h-[350px]"
              />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-[36px] text-[#2C2B4B]">
                  Get Updated with latest news.
                </h3>
                <Link href={``}>
                  <Button
                    btnName={"Subscribe to our Newsletter"}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                    style={
                      "border border-black rounded-full px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#424242]/25 transition delay-150"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
