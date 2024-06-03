"use client";
import React, { useEffect, useState } from "react";

const FloaterComponent = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="hidden md:block fixed bottom-6 right-10 z-[10000] ">
      <a
        href="https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs"
        target="_blank"
      >
        <button
          className="bg-[#E59623] hover:bg-[#ff9700] hover:scale-110 transition-all cursor-pointers px-4 py-2 rounded-full border border-neutral-900/20 shadow-xl flex gap-3 font-bold"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <img
            src="/assets/messages-question.svg"
            alt="messages question icon"
            className="w-6"
          />
          Enquire Now
        </button>
      </a>
      {isShown && (
        <div className=" bg-neutral-800 text-white absolute -top-[5rem] -left-1/2 translate-x-1/2 w-[8rem] px-3 py-2 rounded-t-2xl rounded-bl-2xl">
          {/* arrow */}
          <div className="absolute w-0 h-0 -bottom-2 right-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-neutral-800" />
          Click Here to Fill a Form
        </div>
      )}
    </div>
  );
};

export default FloaterComponent;
