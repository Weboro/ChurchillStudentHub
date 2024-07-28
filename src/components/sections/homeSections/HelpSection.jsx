"use client";
import React, { useEffect, useState } from "react";
import { GuideCard, HelpCard, Button, DataNotFound } from "@/components";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FetchHowToGuide } from "@/components/utils/apiQueries";
// import { navItems } from "@/constDatas/navItems";

const HelpSection = () => {
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
    <>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          <div className="bg-light-grey rounded-md">
            <HelpCard
              image={"/assets/help.png"}
              title={"Have a question? We're here to help."}
              description={
                "Got questions or need more information? Don't hesitate to reach out! Click the button below to fill out our enquiry form, and we'll get back to you promptly. Your journey at Churchill matters to us!"
              }
            />
          </div>

          <div className="bg-light-grey rounded-md flex flex-col">
            <div className="p-4 flex flex-col gap-3">
              <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
                <h2 className="font-bold text-[36px] text-matte-purple">
                  How to Guide?
                </h2>
              </div>
              {data.length === 0 ? (
                <div className="flex mix-blend-multiply">
                  <DataNotFound />
                </div>
              ) : (
                <>
                  {isLoading ? (
                    <p>Loading ... </p>
                  ) : (
                    <>
                      {data?.slice(0, 3)?.map((item, index) => (
                        <GuideCard
                          key={index}
                          title={item?.title}
                          rich_text={item?.rich_text}
                          slug={item?.slug}
                        />
                      ))}
                    </>
                  )}
                </>
              )}
            </div>

            {data.length > 3 && (
              <div className="pb-[32px] flex justify-center">
                <Link href={"/how-to-guide"}>
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
      </div>
    </>
  );
};

export default HelpSection;
