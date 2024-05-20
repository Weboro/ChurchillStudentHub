import { GuideCard, NewsSection, TopBannerCard } from "@/components";
import React from "react";
import { navItems } from "@/constDatas/navItems";

const HowToGuidePage = () => {
  const guideLists = navItems[1]?.Catagories;
  return (
    <main className="min-h-[80vh]">
      <div className="">
        <div>
          <TopBannerCard
            image={`/assets/hero-image.png`}
            titleSpan={""}
            title={"How to Guide."}
            subTitle={`Student Hub > Request Form > How to Guide`}
          />
        </div>
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div className="bg-[#F3E4E4] pb-5">
            <div className="flex flex-col container mx-auto px-5">
              <GuideCard
                guideLists={guideLists}
                title={"How to Guide?"}
                isSearchActive={true}
              />
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
