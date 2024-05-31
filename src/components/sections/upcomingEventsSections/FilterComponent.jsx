"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

export const FilterComponent = () => {
  const filterOptions = {
    audience: ["Staff", "Student", "Undergraduate", "Postgraduate"],
    category: [
      "Semester-Dates",
      "Winter-Term-Dates",
      "Summer-Term-Dates",
      "Days-of-Interest",
    ],
  };

  return (
    <div className="p-4 rounded-xl bg-custom-pink lg:w-[21rem] h-fit">
      <h1
        className="font-extrabold text-xl lg:text-2xl pb-2 w-fit
      relative before:absolute before:bottom-0 before:left-0 before:w-1/3 before:h-1 before:bg-custom-orange before:transition-all
      "
      >
        Filter Dates
      </h1>

      <div className="flex bg-neutral-100 items-center my-4 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search by Title"
          className="w-full flex-1 px-2 py-2 transparent-background outline-none"
        />
        <div className="w-10 h-full grid place-items-center">
          <FaSearch />
        </div>
      </div>

      {Object.keys(filterOptions).map((type) => (
        <div key={type} className="mt-3 flex flex-col gap-1">
          <h1 className="font-bold text-xl lg:text-xl ">
            Filter by {type.charAt(0).toUpperCase() + type.slice(1)}
          </h1>
          {filterOptions[type].map((option) => (
            <div key={option} className="flex items-center ml-2 gap-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 overflow-hidden"
              />
              <p>{option}</p>
            </div>
          ))}
        </div>
      ))}

      <button
        type="submit"
        className="px-6 py-2 bg-custom-orange mt-4 rounded-full font-bold text-white hover:shadow-md "
      >
        Filter
      </button>
    </div>
  );
};

export default FilterComponent;
