import { UpcomingEventsSection } from "@/components";
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

const UpcomingEvents = () => {
  return (
    <main className="min-h-[80vh]">
      <UpcomingEventsSection />
    </main>
  );
};

export default UpcomingEvents;
