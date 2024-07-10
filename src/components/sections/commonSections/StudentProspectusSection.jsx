import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const StudentProspectusSection = () => {
  return (
    <div
      className="bg-light-grey"
      style={{
        background: 'url("/assets/churchill-pattern.svg")',
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-5 py-10 grid place-content-center text-center">
        <h3 className="relative leading-16 font-bold text-[36px] text-[#2C2B4B]">
          Download Our Student Prospectus
        </h3>
        <p className="mb-5">Specially tailored to our International Student</p>
        <Link
          href={`/assets/docs/student-prospectus.pdf`}
          target="_blank"
          className="w-fit mx-auto"
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
  );
};

export default StudentProspectusSection;
