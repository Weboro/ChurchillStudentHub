import { NewsLatterForm, TopBannerCard } from "@/components";
import React from "react";

export const metadata = {
  title: "Abhinay",
  // description: 'abcd',
  // metadataBase: new URL('https://sdsd.com.np'),
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // openGraph: {
  //   images: '/og-image.png',
  // },
};
const NewslatterForm = () => {
  return (
    <main className="min-h-[80vh]">
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div>
          <TopBannerCard
            image={`/assets/heroImage-2.jpeg
`}
            titleSpan={""}
            title={"Newslatter Form"}
            subTitle={`Student Hub > Request Form > Newslatter Form`}
          />
        </div>
        <div>
          <div className="flex flex-col gap-[32px] lg:gap-[64px]">
            <div className="container mx-auto px-5">
              <div className="bg-[#E9E9E9] px-[44px] py-[54px] rounded-[24px]">
                <NewsLatterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewslatterForm;
