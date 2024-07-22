"use client";
import {
  NewsSection,
  RequestFormCard,
  Spiner,
  TopBannerCard,
} from "@/components";
import React, { useEffect, useState } from "react";
import { requestList } from "@/constDatas/requestList";
import Link from "next/link";
import { FetchPolicyData } from "@/components/utils/apiQueries";

const PoliciesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    FetchPolicyData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <TopBannerCard
            image={`/assets/HeroImage-2.webp`}
            titleSpan={""}
            title={"Policies and Procedures"}
            subTitle={
              <p className="text-white">
                <Link href="/" className="text-white">
                  Student Support
                </Link>
                <span> / Policies and Procedures</span>
              </p>
            }
          />

          <div className="container mx-auto px-5 flex flex-col gap-[44px]">
            <h2 className="font-bold text-[36px] text-custom-text-black">
              Policies
            </h2>

            <div className="flex flex-col gap-5">
              {data?.map((item, index) => (
                <RequestFormCard
                  key={index}
                  pdf_upload={item?.pdf_upload}
                  is_archived={item?.is_archived}
                  created={item?.created}
                  updated={item?.updated}
                  icon={item?.icon}
                  title={item?.title}
                  description={item?.description}
                />
              ))}
            </div>
          </div>

          <NewsSection />
        </div>
      )}
    </>
  );
};

export default PoliciesPage;
