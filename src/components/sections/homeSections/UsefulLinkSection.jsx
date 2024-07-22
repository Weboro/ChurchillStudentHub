"use client";
import React, { useEffect, useState } from "react";
import UsefulLinksCard from "@/components/cards/UsefulLinksCard";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { FetchUsefulLinks } from "@/components/utils/apiQueries";

const UsefulLinkSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    FetchUsefulLinks()
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setData(null);
          setIsLoading(false);
          setNoDataFound(true);
          return;
        }

        setData(res.data.sort((prev, next) => prev.order - next.order));
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading || noDataFound) {
    return null;
  }

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[44px]">
        <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
          <h2 className="font-bold text-[36px] text-matte-purple">
            Useful Links
          </h2>
        </div>

        <div className="grid grid-cols-1 h-full lg:grid-cols-4 gap-6">
          {data?.slice(0, 12)?.map((item, index) => (
            <UsefulLinksCard
              image={item?.logo ? "/assets/canvas.png" : ""}
              subTitle={item?.description}
              title={item?.title}
              url={item?.external_link}
              key={index}
            />
          ))}
        </div>

        {data.length > 12 && (
          <div className="flex justify-center">
            <Link href={"/useful-links"}>
              <Button
                btnName={"Load More Links"}
                icon={<FaArrowRight />}
                styleType="secondary"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsefulLinkSection;
