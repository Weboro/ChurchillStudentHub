"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Button from "../button";

const AUTH_TOKEN_STUDENT_IT_FORM = process.env.AUTH_TOKEN_STUDENT_IT_FORM;

const ITSupportForm = () => {
  const [formStates, setFormStates] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    description: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormStates({ ...formStates, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    async function call() {
      const response = await fetch("https://desk.zoho.com.au/api/v1/tickets/", {
        method: "POST",
        body: {
          departmentId: "14115000000393156",
          contact: {
            firstName: formStates.firstName,
            lastName: formStates.lastName,
            email: formStates.email,
          },
          subject: formStates.subject,
          description: formStates.description,
          status: "Open",
        },
        headers: {
          "Content-type": "application/json",
          orgId: 7002931869,
          Authorization: AUTH_TOKEN_STUDENT_IT_FORM,
        },
      });
      console.log(response);
    }
    call();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              First Name <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <span className="absolute right-5 top-3">
                <FaIdCard />
              </span>
              <input
                name="firstName"
                value={formStates.firstName}
                onChange={handleFormChange}
                className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              Last Name <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <span className="absolute right-5 top-3">
                <FaIdCard />
              </span>
              <input
                name="lastName"
                value={formStates.lastName}
                onChange={handleFormChange}
                className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              Email <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <span className="absolute right-5 top-3">
                <FaIdCard />
              </span>
              <input
                name="email"
                value={formStates.email}
                onChange={handleFormChange}
                className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              Subject <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <span className="absolute right-5 top-3">
                <FaIdCard />
              </span>
              <input
                name="subject"
                value={formStates.subject}
                onChange={handleFormChange}
                className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              Description <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <span className="absolute right-5 top-3">
                <FaIdCard />
              </span>
              <input
                name="description"
                value={formStates.description}
                onChange={handleFormChange}
                className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <Button type={"submit"} btnName={"Submit"} icon={<FaArrowRight />} />
        </div>
      </form>
    </div>
  );
};

export default ITSupportForm;
