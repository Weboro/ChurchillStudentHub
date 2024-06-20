import React from "react";
import { GuideDetails } from "@/components";

const IndivisualGuide = ({ params }) => {
  const { slug } = params;

  return (
    <main className="min-h-[80vh]">
      <GuideDetails slug={slug} />
    </main>
  );
};

export default IndivisualGuide;
