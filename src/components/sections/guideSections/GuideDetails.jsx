"use client";
import React, { useEffect, useState } from "react";
import { navItems } from "@/constDatas/navItems";
import { Spiner } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { FetchHowToGuide } from "@/components/utils/apiQueries";
import { notFound } from "next/navigation";

const GuideDetails = ({ slug }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(true);

    FetchHowToGuide(slug)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <div>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <article className="flex flex-col gap-6 mt-[64px] px-5">
            <div className="container-small flex flex-col gap-5">
              <nav className="font-semibold flex flex-wrap gap-1">
                <Link
                  className="hover:text-primary-orange transition-all"
                  href="/"
                >
                  Home /
                </Link>
                <Link
                  className="hover:text-primary-orange transition-all"
                  href="/how-to-guide"
                >
                  How To Guide /
                </Link>
                {data?.title}
              </nav>
              <hr className="border-2 w-[60px]  border-primary-orange" />

              <h2 className="text-4xl leading-[40px] lg:text-6xl lg:leading-[62px] font-bold">
                {data?.title}
              </h2>

              {/* <h4 dangerouslySetInnerHTML={{ __html: data?.rich_text }} /> */}
            </div>

            <div className="container mx-auto">
              <Image
                width={2000}
                height={1500}
                src={data?.image}
                alt={`event image for ${data?.title}`}
                className="w-full aspect-[1.78/1] lg:w-[75%] mx-auto object-cover rounded-md"
              />
            </div>

            <div className="container-small mx-auto">
              <div
                className="rich-text-container"
                dangerouslySetInnerHTML={{ __html: data?.rich_text }}
              />
            </div>
          </article>
        </>
      )}
    </div>
  );
};

export default GuideDetails;

// [
//   {
//       "id": "558b8506-d992-4bef-af08-b88f4351e722",
//       "image": "https://backend.churchill.nsw.edu.au/media/how_to_guides_photos/Screenshot_2024-07-19_at_12.38.23.png",
//       "is_archived": false,
//       "created": "2024-07-19T12:44:41.690125+05:45",
//       "updated": "2024-07-19T12:44:41.690148+05:45",
//       "title": "this is something else",
//       "slug": "this-is-something-else",
//       "rich_text": "<p>safasdfasdf</p>"
//   }
// ]
