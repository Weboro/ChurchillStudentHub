import TopBannerCard from "@/components/cards/TopBannerCard";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <TopBannerCard
        image={`/assets/heroImage-2.jpeg`}
        titleSpan={"Student"}
        title={"Support"}
        subTitle={"⁠Your Ultimate Resource for Academic Success!"}
        showSearch={true}
      />

      <div className="w-full mt-12 lg:m-0 md:-translate-y-1/3 2xl:-translate-y-1/2 ">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cardsData.map((item, index) => (
              <div
                className="flex flex-col lg:flex-row gap-4 w-full px-4 py-3 rounded-md bg-white shadow-md shadow-neutral-200/50 items-center"
                key={index}
              >
                <div className="w-16 h-16 rounded-full bg-primary-orange/25 shadow grid place-items-center">
                  <i className={`${item.icon} flex text-3xl`}></i>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-bold text-xl capitalize text-center lg:text-left">
                    {item.title}
                  </h2>

                  <div>
                    {item.email && (
                      <a href={`mailto:${item.email}`} className="block w-fit">
                        <span className="font-semibold block overflow-ellipsis overflow-hidden w-[28ch] break-words text-wrap">
                          {item.email}
                        </span>
                      </a>
                    )}

                    {item.phone && (
                      <a href={`tel:${item.phone}`} className="block w-fit">
                        <span className="font-semibold">{item.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const cardsData = [
  {
    title: "marketing ",
    icon: "fi fi-rr-megaphone",
    email: "marketing@churchill.nsw.edu.au",
  },
  {
    title: "Student Support",
    icon: "fi fi-rr-hr-person",
    email: "studentsupport@churchill.nsw.edu.au",
    phone: "+02-8856-2997",
  },
  {
    title: "Admission",
    icon: "fi fi-rr-id-card-clip-alt",
    email: " admissions@churchill.nsw.edu.au",
  },
];

export default HeroSection;
