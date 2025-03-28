// src/app/how-to-guide/page.jsx

import { HowToGuidePage } from "@/components";

export const metadata = {
  title: "Current Students Self-Help Guide",
  // description: 'abcd',
  // metadataBase: new URL('https://sdsd.com.np'),
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // openGraph: {
  //   images: '/og-image.png',
  // },
};

const Page = ({ params }) => {
  return (
    <main>
      <HowToGuidePage />
    </main>
  );
};

export default Page;
