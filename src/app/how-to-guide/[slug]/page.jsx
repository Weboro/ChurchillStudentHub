import React from "react";
import { GuideDetails } from "@/components";

const IndivisualGuide = ({ params }) => {
  const { slug } = params;

  return <GuideDetails slug={slug} />;
};

export default IndivisualGuide;
