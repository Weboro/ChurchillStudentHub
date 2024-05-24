import React from "react";
import { GuideDetails } from "@/components";
import { navItems } from "@/constDatas/navItems";

// export async function generateMetadata({ params }){
//   const { slug } = params; 
//    const info = navItems[1]?.Catagories?.find((item) => item?.slug === slug);

//   return {
//     title: info?.metaTitle,
//     description: info?.metaDescription,
    
//     metadataBase: new URL(info?.metaUrl),
//     keywords: info?.metaKeyword,
//     // openGraph: {
//     //   images: "/og-image.png",
//     // },
//   }; 
// }
const IndivisualGuide = ({ params }) => {
  const { slug } = params;
  return (
    <main className="min-h-[80vh]">
      <GuideDetails slug={slug} />
    </main>
  );
};

export default IndivisualGuide;
