import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const StudentProspectusSection = () => {
  return (
    <div
      className="bg-light-grey bg-fixed bg-cover relative
        before:absolute before:w-full before:h-full before:top-0 before:left-0  before:bg-light-grey/85 "
      style={{
        background: 'url("/assets/churchill-building.png")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-5 relative z-10 py-10 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="relative leading-10 font-bold text-[36px] text-[#2C2B4B]">
            Download Our Student Prospectus
          </h3>
          {/* <p></p> */}
        </div>

        <Link
          href={`/assets/docs/student-prospectus.pdf`}
          target="_blank"
          className="w-fit"
        >
          <Button
            btnName={"Download"}
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style={
              "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
            }
          />
        </Link>
      </div>
    </div>
    // <div className="container mx-auto px-5">
    //   <div
    //     style={{
    //       background: 'url("/assets/churchill-building.jpg")',
    //       backgroundRepeat: "no-repeat",
    //       objectFit: "cover",
    //       width: "100%",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //     className=" w-full flex flex-col md:flex-row bg-[#F3E4E4] hover-shadow overflow-hidden rounded-md relative
    //     before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-light-grey before:from-40% before:to-bg-transparent"
    //   >
    //     <div className="flex z-[10] flex-1 flex-col gap-10 p-6 md:py-28 md:pl-20">
    //       <h3 className="relative leading-10 font-bold text-[36px] text-[#2C2B4B]">
    //         Download Our Student Prospectus
    //       </h3>

    //       <Link
    //         href={`/assets/docs/student-prospectus.pdf`}
    //         target="_blank"
    //         className="w-fit"
    //       >
    //         <Button
    //           btnName={"Download"}
    //           icon={<FaArrowRight />}
    //           styleA={"flex items-center gap-1"}
    //           style={
    //             "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
    //           }
    //         />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StudentProspectusSection;
