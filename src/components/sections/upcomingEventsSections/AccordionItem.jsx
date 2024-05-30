"use client";
import React, { useState } from "react";
import { EventsCard } from "@/components";
import { FaPlus } from "react-icons/fa";

const AccordionItem = ({ month, events }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {events.length > 0 && (
        <section className="mt-4 lg:ml-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between bg-custom-orange shadow-md rounded-[14px] px-4 py-2 "
          >
            <p className="font-extrabold text-white lg:text-xl">{month}</p>

            <div className="flex items-center gap-4">
              <p className="text-sm rounded-xl w-[5rem] bg-white px-2 flex gap-1 items-center justify-center">
                <span>{events.length}</span>
                <span>dates</span>
              </p>
              <span
                className={`${
                  isOpen ? " rotate-45" : ""
                } transition-all text-white`}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          {isOpen && (
            <div className="flex flex-col gap-6 mt-4 mb-6">
              {events.map((event) => (
                <div key={event.id}>
                  <EventsCard
                    title={event.title}
                    subTitle={event.subTitle}
                    day={event.day}
                    date={event.date}
                    displayMonth={event.displayMonth}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default AccordionItem;
