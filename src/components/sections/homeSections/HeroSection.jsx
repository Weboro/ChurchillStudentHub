import TopBannerCard from "@/components/cards/TopBannerCard";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <TopBannerCard
        image={`/assets/hero-image.png`}
        titleSpan={'Student'}
        title={"Hub"}       
        subTitle={"We are here to help you with your Query!"}
      />
    </div>
  );
};

export default HeroSection;
