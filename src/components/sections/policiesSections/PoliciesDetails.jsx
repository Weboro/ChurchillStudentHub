"use client";
import TopBannerCard from "@/components/cards/TopBannerCard";
import React, { useEffect, useState } from "react";
import { navItems } from "@/constDatas/navItems";
import { Spiner } from "@/components";

const PoliciesDetails = ({ slug }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [isLoading]);

  const [data, setData] = useState({});

  useEffect(() => {
    const info = navItems[2]?.Catagories?.find((item) => item?.slug === slug);
    setData(info?.CatagoriesItem);
  }, [slug]);

  return (
    <div>
      {isLoading ? (
        <div className="">
          <Spiner />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-[32px] lg:gap-[64px]">
            <div>
              <TopBannerCard
                image={`${data?.image}`}
                titleSpan={``}
                title={`${data?.title}`}
                subTitle={`Student Hub > Request Form > ${data?.title}`}
              />
            </div>
            <div>
              <div className="flex flex-col gap-[32px] lg:gap-[64px]">
                <div className="container mx-auto px-5">
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PoliciesDetails;
