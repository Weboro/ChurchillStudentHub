import { NewsSection, RequestFormCard, TopBannerCard } from "@/components";
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
const RequestFormPage = () => {
  const requestLists = navItems[3]?.Catagories;

  return (
    <main className="min-h-[80vh]">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/heroImage-2.jpeg`}
            titleSpan={""}
            title={"How to Guide."}
            subTitle={`Student Hub > Request Form > How to Guide`}
          />
        </div>
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-[44px]">
            <h2 className="font-bold text-[36px] text-custom-text-black">
              Request Form
            </h2>
            <div className="">
              <div className="flex flex-col gap-5">
                {requestLists?.map((item, index) => (
                  <RequestFormCard
                    key={index}
                    icon={item?.icon}
                    menuTitle={item?.menuTitle}
                    link={item?.link}
                    subTitle={item?.subTitle}
                    btnTitle={"Apply"}
                    target={"_blank"}
                  />
                ))}
              </div>
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

export default RequestFormPage;
