import { GuideCard, NewsSection, TopBannerCard } from "@/components";
import React from "react";
import { navItems } from "@/constDatas/navItems";

export const metadata = {
  title: "Abhinay",
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
      <div className="">
        <div>
          <TopBannerCard
            image={`/assets/heroImage-2.jpeg`}
            titleSpan={""}
            title={"How to Guide."}
            subTitle={`Student Hub > Request Form > How to Guide`}
          />
        </div>
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div className="bg-custom-pink pb-5">
            <div className="flex flex-col container mx-auto px-5">
              <div className=" px-8 py-[32px] flex flex-col gap-5">
                <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
                  <h2 className="font-bold text-[36px] text-">How to Guide?</h2>
                </div>
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
      </div>
    </main>
  );
};

export default HowToGuidePage;
