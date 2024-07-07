import { SupportData } from "@/constDatas/SupportData";
import Image from "next/image";

const SupportSection = () => {
  return (
    <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
      <h2 className="text-4xl mt-10 font-bold w-fit mx-auto text-center">
        Support
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SupportData.map((item, index) => (
          <div className="p-3 py-6 rounded-md flex flex-col gap-2" key={index}>
            <div className="w-36 mb-6 bg-light-grey shadow p-6 aspect-square rounded-full mx-auto grid place-items-center">
              <Image
                src={item.icon}
                alt={`${item.title} image`}
                width={400}
                height={400}
                className="w-32 mx-auto "
              />
            </div>

            <h4 className="font-bold text-2xl text-center">
              <a href={`/support/${item.slug}`}>{item.title}</a>
            </h4>
            <p
              className="text-center text-pretty line-clamp-3 md:w-[90%] md:mx-auto"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection;
