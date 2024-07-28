"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  PatternBannerCard,
  Spiner,
  ToastComponent,
} from "@/components";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";

const Page = () => {
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
        `/api/fetchTimetables?studentID=${studentID}`
      );

      if (!res.data.result || res.data.result.length === 0) {
        toastRef.current.showToast("No data found", "error");
        setIsRequestLoading(false);
        return;
      }

      setData(res.data.result);
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

          <iframe
            height="500px"
            width="100%"
            src="https://creatorapp.zohopublic.com.au/s.lohani_churchill2/class-schedules/report-embed/All_Class_Details/g2PWaBCbY1wG4XJAYePsxNND0YPVSX8FOZWN8fdSGmBZgsDkAVY03JpFzA2vnwARYWakGgqUdrY0wqw5SXzYqEfsuCKBPX7Pdw2f"
          ></iframe>

          {isPopupShown && (
            <div className="fixed top-0 left-0 w-screen bg-white/80 h-screen z-[1000] grid place-items-center">
              <div className="md:max-w-[400px] bg-neutral-50 px-6 py-6 rounded-md shadow-lg flex flex-col gap-8 relative">
                <h3 className="text-2xl font-semibold">
                  Time Table for ID: {studentID}
                </h3>

                {data.map((item, index) => (
                  <div key={index}>
                    {/* <p><strong>Unit Name: </strong> {item?.unit_name}</p> */}
                    <p>
                      <strong>Start Time: </strong>
                      {item?.start_time.SQLTime}
                    </p>
                    <p>
                      <strong>Teacher Name: </strong>
                      {item?.teacher_name}
                    </p>
                    <p>
                      <strong>Unit: </strong>
                      {item?.unit}
                    </p>
                    <p>
                      <strong>Class Room: </strong>
                      {item?.class_room}
                    </p>
                    <p>
                      <strong>Tutor Name: </strong>
                      {item?.tutor_name}
                    </p>
                    <p>
                      <strong>End Time: </strong>
                      {item?.end_time.SQLTime}
                    </p>
                  </div>
                ))}

                <div
                  onClick={() => {
                    setIsPopupShown(false);
                    setIsTimeTableFormShown(false);
                  }}
                >
                  <Button
                    // icon={<RxCross2 />}
                    icon={""}
                    styleType="secondary"
                    btnName={"Close"}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Page;
