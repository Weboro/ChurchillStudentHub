import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewsSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="bg-custom-pink px-8 pt-8 lg:pb-0 rounded-[24px]">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[32px]">
            <div className="w-[300px] h-[350px]">
              <Image
                src={`/assets/news-banner.png`}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-[36px] text-custom-text-black">
                  Get Updated with latest news.
                </h3>
                <Link
                  href={`https://zfrmz.com.au/DtG2T10jdX7f8egPhVzt`}
                  target="_blank"
                  className="w-max"
                >
                  <Button
                    btnName={"Subscribe to our Newsletter"}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
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
