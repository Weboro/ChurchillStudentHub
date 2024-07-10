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
  );
};

export default HowToGuidePage;
