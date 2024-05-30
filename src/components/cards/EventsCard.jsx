// import React from "react";
// import Image from "next/image";

// const EventsCard = ({ image, title, subTitle, day, month, time, date }) => {
//   return (
//     <div>
//       <div className="flex flex-col lg:p-0 p-5 lg:flex-row justify-between items-center gap-3 rounded-[24px] bg-custom-pink">
//         <div className="flex flex-col lg:flex-row gap-3 items-center">
//           <Image
//             src={`${image}`}
//             alt={"use-links-icon-image"}
//             width={400}
//             height={400}
//             className="object-cover w-[250px] h-auto lg:rounded-tl-[24px] lg:rounded-bl-[24px]"
//           />
//           <div>
//             <div className="text-center lg:text-start">
//               <h2 className="font-bold text-[20px] text-custom-text-black">{title}</h2>
//               <p>{subTitle}</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-[100px] lg:mr-5">
//           <div className="flex flex-col gap-2">
//             <div className="flex flex-col text-center text-white bg-custom-orange rounded-[12px] p-2 font-bold">
//               <p>{day}</p>
//               <p className="text-[32px] leading-[28px]">{date}</p>
//               <p>{month}</p>
//             </div>
//             <p className="text-[16px] text-center">{time}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsCard;

import React from "react";

const EventsCard = ({
  title,
  subTitle,
  day,
  date,
  displayMonth,
  query,
  year,
}) => {
  const shouldDisplay =
    !query || title.toLowerCase().includes(query.toLowerCase());

  return (
    <>
      {shouldDisplay && (
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-stretch rounded-[10px] bg-custom-pink relative">
          <div className="w-[100px] mt-2 lg:mt-0 mx-auto lg:m-0">
            <div className="flex flex-col text-center text-white bg-custom-orange rounded-[12px] p-2 font-bold h-full justify-center">
              <p>{day}</p>
              <p className="text-[32px] leading-[28px]">{date}</p>
              <p>{displayMonth}</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col lg:flex-row gap-3 items-center py-2 mx-4 ">
            <div>
              <div className="text-center lg:text-start">
                <h2 className="font-bold text-[20px] text-custom-text-black">
                  {title}
                </h2>
                <p>{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsCard;
