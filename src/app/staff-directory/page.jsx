import { PatternBannerCard } from "@/components";
import React from "react";
import { AgentData } from "@/constDatas/AgentData";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <PatternBannerCard title="Staff Directory" />

      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {AgentData.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-neutral-50  hover:shadow border border-transparent hover:border-neutral-800/10 rounded-md px-4"
          >
            <div className="w-[75px] h-[75px] grid place-items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={75}
                height={75}
                className="w-[75px] h-[75px] object-cover rounded-full bg-red-900"
              />
            </div>

            <div className="text-wrap break-words py-1 ml-2 pl-1 flex-1">
              <p className="capitalize text-xl font-bold">{item.title}</p>
              <p className="capitalize">{item.position}</p>
              <a
                className="block leading-5 w-fit font-semibold"
                href={`tel:${item.number}`}
              >
                {item.number}
              </a>
              <a
                className="block leading-5 font-semibold max-w-[16ch] xl:max-w-fit break-words text-wrap"
                href={`tel:${item.number}`}
              >
                {item.email}
              </a>
              <p className="capitalize">{item.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
