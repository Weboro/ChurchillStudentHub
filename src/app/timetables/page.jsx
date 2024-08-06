"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  NewsSection,
  PatternBannerCard,
  Spiner,
  ToastComponent,
} from "@/components";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";
import Image from "next/image";

function formatTime(time) {
  let hour = time.hour;
  const minute = time.minute < 10 ? `0${time.minute}` : time.minute;
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${period}`;
}

function groupByDay(data) {
  const grouped = data.reduce((acc, item) => {
    const day = item.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);
    return acc;
  }, {});

  Object.keys(grouped).forEach((day) => {
    grouped[day].sort((a, b) => {
      const aStart = a.start_time.hour * 60 + a.start_time.minute;
      const bStart = b.start_time.hour * 60 + b.start_time.minute;
      return aStart - bStart;
    });
  });

  return grouped;
}

const Page = () => {
  // CIHE23041
  const [studentID, setStudentID] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const [isTimeTableFormShown, setIsTimeTableFormShown] = useState(false);
  const [isPopupShown, setIsPopupShown] = useState(false);

  const toastRef = useRef();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleTimetableRequest = async (e) => {
    e.preventDefault();
    setIsRequestLoading(true);

    if (!studentID) {
      toastRef.current.showToast("Please Enter an ID", "error");
      setIsRequestLoading(false);
      return;
    }

    if (studentID.length < 5) {
      toastRef.current.showToast("Please Enter a valid ID", "error");
      setIsRequestLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        `/api/fetchTimetables?studentID=${studentID.toUpperCase()}`
      );

      if (!res.data.result || res.data.result.length === 0) {
        toastRef.current.showToast("No data found", "error");
        setIsRequestLoading(false);
        return;
      }

      const groupedData = groupByDay(res.data.result);

      setData(groupedData);

      setIsPopupShown(true);
    } catch (err) {
      toastRef.current.showToast("Error fetching student classes", "error");
      console.error("Error fetching student classes:", err);
    } finally {
      setIsTimeTableFormShown(false);
      setIsRequestLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <ToastComponent ref={toastRef} />

          <PatternBannerCard title="Timetables">
            {isTimeTableFormShown ? (
              <form
                className="container-small flex items-center justify-center gap-6 mt-6"
                onSubmit={handleTimetableRequest}
              >
                <input
                  required
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                  className="font-inter text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md max-w-[22rem]"
                  placeholder="Enter Your Student ID"
                />
                <Button
                  type="submit"
                  icon={isRequestLoading ? <BiLoader /> : <FaArrowRight />}
                  styleType="tertiary"
                  btnName={isRequestLoading ? "Loading" : "Submit"}
                />
              </form>
            ) : (
              <div
                className="mx-auto"
                onClick={() => setIsTimeTableFormShown(!isTimeTableFormShown)}
              >
                <Button btnName={"Find My timetable"} />
              </div>
            )}
          </PatternBannerCard>

          <div className="container mx-auto px-5 pb-8">
            <iframe
              height="1000px"
              width="100%"
              src="https://creatorapp.zohopublic.com.au/s.lohani_churchill2/class-schedules/report-embed/All_Class_Details/g2PWaBCbY1wG4XJAYePsxNND0YPVSX8FOZWN8fdSGmBZgsDkAVY03JpFzA2vnwARYWakGgqUdrY0wqw5SXzYqEfsuCKBPX7Pdw2f"
            ></iframe>
          </div>

          {isPopupShown && (
            <div className="fixed top-0 left-0 w-screen bg-white/90 h-screen z-[1000] grid place-items-center">
              <div
                onClick={() => {
                  setIsPopupShown(false);
                  setIsTimeTableFormShown(false);
                }}
                className="absolute top-4 left-4 text-4xl rotate-90 text-primary-orange cursor-pointer"
              >
                <i className="fi fi-sr-times-hexagon"></i>
              </div>
              <div className="w-[95vw] h-[80vh] overflow-y-scroll bg-neutral-50 px-6 py-6 rounded-md shadow-lg relative">
                <Image
                  width={1000}
                  height={400}
                  src={"/assets/churchill-top-ribbon.png"}
                  alt="ribbon-image"
                  className="hidden md:hidden lg:block w-[2/3] -top-4 object-cover z-[0] mix-blend-multiply"
                ></Image>

                <Image
                  width={1000}
                  height={400}
                  src={"/assets/churchill-top-ribbon-medium.png"}
                  alt="ribbon-image"
                  className=" hidden md:block lg:hidden top-0 object-cover z-[0] mix-blend-multiply"
                ></Image>

                <Image
                  width={1000}
                  height={400}
                  src={"/assets/churchill-top-ribbon-small.png"}
                  alt="ribbon-image"
                  className="block md:hidden w-[2/3] top-0 object-cover z-[0] mix-blend-multiply"
                ></Image>

                <h3 className="text-xl md:text-3xl capitalize mb-3 font-semibold text-center">
                  Churchil Institute of higher education
                </h3>

                {/* 
                <h4 className="text-2xl capitalize mb-2 font-semibold text-center">
                  class table semester two 2024
                </h4>
                 */}
                <div className="w-ful overflow-x-scroll">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="bg-neutral-300 border border-gray-300 p-2">
                          Day
                        </th>
                        <th className="bg-neutral-300 border border-gray-300 p-2">
                          Time
                        </th>
                        <th className="bg-neutral-300 border border-gray-300 p-2">
                          Unit Code
                        </th>
                        <th className="bg-neutral-300 border border-gray-300 p-2">
                          Unit Name
                        </th>
                        <th className="bg-neutral-300 border border-gray-300 p-2">
                          Class Type
                        </th>
                        <th className="bg-neutral-300 border border-gray-300 p-2">
                          Lecturer
                        </th>
                        <th className="bg-neutral-300 border border-gray-300 p-2">
                          Classroom
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(data).map((day) => (
                        <>
                          {data[day].map((item, index) => (
                            <tr key={index}>
                              {index === 0 && (
                                <td
                                  className="border border-gray-300 p-2"
                                  rowSpan={data[day].length}
                                >
                                  {day}
                                </td>
                              )}
                              <td className="border border-gray-300 p-2">
                                {formatTime(item.start_time)} -{" "}
                                {formatTime(item.end_time)}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {item.unit}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {item.unit_name}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {item.class_type}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {item.teacher_name}
                              </td>
                              <td className="border border-gray-300 p-2">
                                {item.class_room?.join(" & ")}
                              </td>
                            </tr>
                          ))}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* <div
                  onClick={() => {
                    setIsPopupShown(false);
                    setIsTimeTableFormShown(false);
                  }}
                >
                  <Button icon={""} styleType="secondary" btnName={"Close"} />
                </div>
                 */}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Page;
