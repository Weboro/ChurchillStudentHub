import React from "react";

const TopBannerCard = ({ image, title, subTitle, titleSpan }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgb(7 7 7 / 55%), rgb(7 7 7 / 55%) 100%), url(${image})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:h-[50vh] h-[44vh] flex items-center"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-[32px] font-bold text-white">
            <span className="text-[#eb9320]">{titleSpan}</span> {title}
          </h2>
          <p className="font-semibold text-white text-center mx-auto">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBannerCard;
