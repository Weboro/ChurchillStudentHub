import { UpcomingKeyDatesPage } from "@/components";
import React from "react";

export const metadata = {
  title: "Upcoming Key Dates",
  // description: 'abcd',
  // metadataBase: new URL('https://sdsd.com.np'),
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // openGraph: {
  //   images: '/og-image.png',
  // },
};

const UpcomingEvents = () => {
  return (
    <main className="min-h-[80vh]">
      <UpcomingKeyDatesPage />
    </main>
  );
};

export default UpcomingEvents;
