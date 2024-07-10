import { TopBannerCard } from "@/components";

const cardsData = [
  {
    title: "IT Support",
    icon: "fi fi-rr-computer",
    email: "myit@churchill.nsw.edu.au",
  },
  {
    title: "Student Support",
    icon: "fi fi-rr-hr-person",
    email: "studentsupport@churchill.nsw.edu.au",
    // phone: "+02-8856-2997",
  },
  {
    title: "Admission",
    icon: "fi fi-rr-id-card-clip-alt",
    email: " admissions@churchill.nsw.edu.au",
  },
];

const HeroSection = () => {
  return (
    <div>
      <TopBannerCard
        image={`/assets/heroImage-2.jpeg`}
        titleSpan={"Student"}
        title={"Support"}
        subTitle="Your Ultimate Resource for Academic Success!"
        showSearch={true}
      />

      <div className="w-full mt-[32px] xl:mt-0 xl:-translate-y-1/2 ">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {cardsData.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-1 rounded-md flex items-center gap-2 overflow-hidden"
              >
                <div className=" aspect-square ml-2 rounded-full bg-primary-orange/25 grid place-items-center ">
                  <i
                    className={`${item.icon} w-[50px] h-[50px] grid place-items-center m-0 text-3xl`}
                  ></i>
                </div>

                <div className="pl-2 py-2">
                  <h2 className="font-bold text-xl capitalize text-left">
                    {item.title}
                  </h2>

                  {item.email && (
                    <a href={`mailto:${item.email}`} className="block">
                      <p className="font-semibold break-words text-wrap">
                        {item.email}
                      </p>
                    </a>
                  )}

                  {/* {item.phone && (
                    <a href={`tel:${item.phone}`} className="block w-fit">
                      <span className="font-semibold">{item.phone}</span>
                    </a>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
