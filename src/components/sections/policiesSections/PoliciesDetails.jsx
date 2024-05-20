"use client"
import TopBannerCard from "@/components/cards/TopBannerCard";
import React, { useEffect, useState } from "react";
import { navItems } from "@/constDatas/navItems";

const PoliciesDetails = ({ slug }) => {
    const [data, setData] = useState({});

    useEffect(() => {
      const info = navItems[2]?.Catagories?.find((item) => item?.slug === slug);
      setData(info?.CatagoriesItem);
    }, [slug]);
  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/hero-image.png`}
            titleSpan={"Refund"}
            title={" Policy"}
            subTitle={`Student Hub > Request Form > Refund Form`}
          />
        </div>
       <div>
       <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="container mx-auto px-5">
            <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
            </div>
            </div>
       </div>
      </div>
    </div>
  );
};

export default PoliciesDetails;
