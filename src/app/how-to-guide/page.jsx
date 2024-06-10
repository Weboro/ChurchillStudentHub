import { GuideCard, NewsSection, TopBannerCard } from "@/components";
import React from "react";
import { navItems } from "@/constDatas/navItems";
import Link from "next/link";

export const metadata = {
  title: "How To Guide",
  // description: 'abcd',
  // metadataBase: new URL('https://sdsd.com.np'),
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // openGraph: {
  //   images: '/og-image.png',
  // },
};
const HowToGuidePage = () => {
  const guideLists = navItems[1]?.Catagories;

  return (
    <main className="min-h-[80vh]">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/heroImage-2.jpeg`}
            titleSpan={""}
            title={"How to Guide"}
            subTitle={
              <p className="text-white">
                <Link href="/" className="text-white">
                  Student Hub
                </Link>
                <span> / How to Guide</span>
              </p>
            }
          />
        </div>
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-[44px]">
            <h2 className="font-bold text-[36px] text-matte-purple">
              How to Guide
            </h2>

            <div className="bg-light-grey flex flex-col gap-5 p-5 rounded-md">
              {guideLists?.map((item, index) => (
                <GuideCard
                  key={index}
                  menuTitle={item?.menuTitle}
                  slug={item?.slug}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <NewsSection />
        </div>
      </div>
    </main>
    // <main className="min-h-[80vh]">
    //   <div className="">
    //     <div>
    //       <TopBannerCard
    //         image={`/assets/heroImage-2.jpeg`}
    //         titleSpan={""}
    //         title={"How to Guide."}
    //         subTitle={`Student Hub > Request Form > How to Guide`}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-[32px] lg:gap-[64px]">
    //       <div className="pb-5">
    //         <div className="flex flex-col container mx-auto px-5">
    //           <div className=" px-8 py-[32px] flex flex-col gap-5">
    //             <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
    //               <h2 className="font-bold text-[36px] text-">How to Guide?</h2>
    //             </div>
    //             {guideLists?.map((item, index) => (
    //               <GuideCard
    //                 key={index}
    //                 menuTitle={item?.menuTitle}
    //                 slug={item?.slug}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <NewsSection />
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default HowToGuidePage;
