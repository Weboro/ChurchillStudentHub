"use client";
import React, { useEffect, useState } from "react";
import { GuideCard, NewsSection, Spiner, TopBannerCard } from "@/components";
import { navItems } from "@/constDatas/navItems";
import Link from "next/link";
import { FetchHowToGuide } from "@/components/utils/apiQueries";

const HowToGuidePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    FetchHowToGuide()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <TopBannerCard
            image={`/assets/hero-howto.jpg`}
            titleSpan={""}
            title={"How to Guide"}
            subTitle={
              <p className="text-white">
                <Link href="/" className="text-white">
                  Student Support
                </Link>
                <span> / How to Guide</span>
              </p>
            }
          />

          <div className="container mx-auto px-5 flex flex-col gap-[44px]">
            <h2 className="font-bold text-[36px] text-matte-purple">
              How to Guide
            </h2>

            <div className="bg-light-grey flex flex-col gap-5 p-5 rounded-md">
              {data?.map((item, index) => (
                <GuideCard
                  key={index}
                  title={item?.title}
                  rich_text={item?.rich_text}
                  slug={item?.slug}
                />
              ))}
            </div>
          </div>

          <NewsSection />
        </div>
      )}
    </main>
  );
};

export default HowToGuidePage;
