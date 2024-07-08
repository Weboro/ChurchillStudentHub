"use client";
import { staffDirectoryData } from "@/constDatas/staffDirectoryDataNew";
import { PatternBannerCard } from "@/components";
import { useState } from "react";
const colors = [
  "red",
  "green",
  "blue",
  "red",
  "green",
  "blue",
  "red",
  "green",
  "blue",
];

const page = () => {
  return (
    <div>
      <PatternBannerCard title="Staff Directory" />

      <>
        {staffDirectoryData?.map((item, index) => (
          <div key={index}>
            <div className="container mx-auto px-5 my-[64px]">
              <h2 className="text-3xl font-bold mb-[16px] ">
                {item.department}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.Category.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-neutral-50 flex flex-col gap-4 rounded-md"
                  >
                    <p className="font-bold text-xl">{item.title}</p>
                    <p>{item.position}</p>
                    <a
                      href={`mailto:${item.email}`}
                      className="w-fit flex items-center gap-2"
                    >
                      <i className="fi fi-rr-envelope flex"></i>
                      <span className="text-sm font-semibold">
                        {item.email}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </>

      {/* <div className="container mx-auto px-5">
        <div className="flex flex-col py-4 gap-4">
          {staffDirectoryData?.map((item, index) => {
            const isActive = activeIndex == index ? true : false;

            return (
              <div key={index} className="">
                <h2
                  onClick={() => handleToggle(index)}
                  className={`flex text-xl items-center justify-between rounded-tl-md rounded-tr-md px-3 py-2 cursor-pointer transition-all ${
                    isActive
                      ? "bg-primary-orange text-white"
                      : "border border-primary-orange  shadow shadow-primary-orange/20 rounded-md"
                  }`}
                >
                  <span className="font-bold">{item.department}</span>
                  <span
                    className={`block transition-all ${
                      isActive ? "rotate-180 text-white" : "text-matte-purple"
                    }`}
                  >
                    <i className="flex fi fi-rr-caret-down"></i>
                  </span>
                </h2>
                {activeIndex === index && (
                  <div className="bg-light-grey rounded-bl-md rounded-br-md p-2 grid lg:grid-cols-2 gap-6 px-6 py-6">
                    {item.Category.map((item, index) => (
                      <div key={index} className=" bg-white p-4 rounded-md">
                        <p className="p-2 bg-primary-orange w-fit text-sm text-white rounded-md font-bold">
                          {item.position}
                        </p>
                        <p className="text-lg font-bold mt-1 mb-2">
                          {item.title}
                        </p>
                        <a
                          href={`mailto:${item.email}`}
                          className="w-fit text-primary-orange flex items-center gap-2"
                        >
                          <i className="fi fi-rr-envelope flex"></i>
                          <span className="text-sm font-semibold">
                            {item.email}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default page;

// import { PatternBannerCard } from "@/components";
// import React from "react";
// import { staffDirectoryData } from "@/constDatas/staffDirectoryData";
// import Image from "next/image";

// const page = () => {
//   return (
//     <div>
//       <PatternBannerCard title="Staff Directory" />

//       <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {staffDirectoryData.map((item, index) => (
//           <div
//             key={index}
//             className="flex p-2 gap-2 items-center bg-neutral-50  hover:shadow border border-transparent hover:border-neutral-800/10 rounded-md px-4"
//           >
//             <div className="w-[80px] h-[80px] grid place-items-center ">
//               <Image
//                 src={`https://i.pravatar.cc/150?img=${index + 1}`}
//                 alt={item.title}
//                 width={80}
//                 height={80}
//                 className="w-[80px] h-[80px] object-cover rounded-full bg-red-100"
//               />
//             </div>

//             <div className="text-wrap break-words flex-1 pt-1">
//               <p className="capitalize text-xl font-bold pb-1`">{item.title}</p>
//               <p className="capitalize">
//                 {item.department} | {item.position}
//               </p>
//               <p className="flex items-center gap-3 text-xl mt-1 text-matte-purple">
//                 <a
//                   className="block leading-5 w-fit font-semibold hover:text-primary-orange"
//                   href={`tel:${item.number}`}
//                 >
//                   <i className="fi fi-sr-phone-call"></i>
//                 </a>
//                 <a
//                   className="block leading-5 w-fit font-semibold hover:text-primary-orange"
//                   href={`mailto:${item.email}`}
//                 >
//                   <i className="fi fi-sr-envelope"></i>
//                 </a>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
