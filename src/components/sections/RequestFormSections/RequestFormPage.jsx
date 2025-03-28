"use client";
import {
  DataNotFound,
  NewsSection,
  RequestFormCard,
  Spiner,
  TopBannerCard,
} from "@/components";
import React, { useEffect, useState } from "react";
import { navItems } from "@/constDatas/navItems";
import Link from "next/link";
import { FetchRequestForms } from "@/components/utils/apiQueries";

const RequestFormPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    FetchRequestForms()
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setData(null);
          setIsLoading(false);
          setNoDataFound(true);
          return;
        }

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
        <main className="flex flex-col gap-[32px] lg:gap-[64px]">
          <TopBannerCard
            image={`/assets/HeroImage-2.webp`}
            titleSpan={""}
            title={"Current Students Online Application Requests"}
            subTitle={
              <p className="text-white">
                <Link href="/" className="text-white">
                  Current Students Support Hub
                </Link>
                <span> / Current Students Online Application Requests</span>
              </p>
            }
          />
          {noDataFound ? (
            <div className="md:w-2/3 md:mx-auto">
              <DataNotFound />
            </div>
          ) : (
            <div className="container mx-auto px-5 flex flex-col gap-[44px]">
              <h2 className="font-bold text-[36px] text-matte-purple">
                Current Students Online Application Requests
              </h2>

              <div className="flex flex-col gap-5">
                {data?.map((item, index) => (
                  <RequestFormCard
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    external_link={item.external_link}
                  />
                ))}
              </div>
            </div>
          )}

          <NewsSection />
        </main>
      )}
    </>
  );
};

export default RequestFormPage;
