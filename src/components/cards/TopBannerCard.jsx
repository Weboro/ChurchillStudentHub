import React from "react";

const TopBannerCard = ({
  image,
  title,
  subTitle,
  titleSpan,
  showSearch = false,
}) => {
  return (
    // https://ik.imagekit.io/99aui81cz/diversity-teenagers-friends-friendship-team-concept.jpg?updatedAt=1717533378778
    <div
      style={{
        backgroundImage: `linear-gradient(rgb(7 7 7 / 55%), rgb(7 7 7 / 55%) 100%), url('/assets/HeroImage-2.webp')`,
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
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center lg:max-w-[35ch]">
            <span className="text-[#eb9320]">{titleSpan}</span> {title}
          </h2>
          <div className="font-semibold text-white text-center mx-auto">
            {subTitle}
          </div>

          {showSearch && (
            <div className="relative bg-neutral-50 rounded-full overflow-hidden md:w-[24rem]">
              <input
                type="text"
                placeholder="Search"
                className="transparent-background outline-none px-6 py-3"
              />
              <div className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-0 h-12 aspect-square bg-primary-orange rounded-full grid place-items-center">
                <i className="fi fi-br-search flex text-white"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBannerCard;
