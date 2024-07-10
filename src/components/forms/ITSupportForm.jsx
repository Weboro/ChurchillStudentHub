"use client";
import React, { useState, useRef } from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Button from "../button";
import { ToastComponent } from "@/components";

const defaultFormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  description: "",
};

const ITSupportForm = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/create-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.errorCode) {
        throw error();
      }

      setFormData(defaultFormState);
      toastRef.current.showToast("Form Submitted successfully!", "success");
    } catch (error) {
      toastRef.current.showToast("An error Occoured", "error");
    }
  };

  const toastRef = useRef();

  return (
    <>
      <ToastComponent ref={toastRef} />

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
                required
                name="firstName"
                onChange={handleFormChange}
                value={formData.firstName}
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
                required
                name="lastName"
                value={formData.lastName}
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
                required
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
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
                required
                name="subject"
                value={formData.subject}
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
                required
                name="description"
                value={formData.description}
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
    </>
  );
};

export default ITSupportForm;
