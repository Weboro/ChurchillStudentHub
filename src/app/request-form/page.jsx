import { NewsSection, RequestFormSection, TopBannerCard } from "@/components";
import React from "react";

export const metadata = {
  title: 'Abhinay',
  // description: 'abcd',
  // metadataBase: new URL('https://sdsd.com.np'),
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // openGraph: {
  //   images: '/og-image.png',
  // },
}
const RequestFormPage = () => {
  return (
    <main className="min-h-[80vh]">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/hero-image.png`}
            titleSpan={""}
            title={"How to Guide."}
            subTitle={`Student Hub > Request Form > How to Guide`}
          />
        </div>
        <div className="">
          <div className="pb-[32px] lg:pb-[64px]">
            <RequestFormSection />
          </div>
          <div>
            <NewsSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestFormPage;
