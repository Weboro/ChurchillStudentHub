"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partnersData } from "@/constDatas/partnersData";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const PartnerSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    // Update the total number of slides whenever the slider content changes
    const handleSliderUpdate = () => {
      if (sliderRef.current) {
        setTotalSlides(sliderRef.current.props.children.length);
      }
    };

    if (sliderRef.current) {
      handleSliderUpdate();
    }
  }, [currentSlide]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    // autoplaySpeed: 3000,
    // speed: 7000, 
    // ease: "ease", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="">
      <div className="w-full">
        <div className="relative">
          <div className="absolute top-0 left-[-3%] h-full flex items-center justify-center">
            <button
              className={`z-[1] rounded-full w-[39px] h-[39px] flex items-center justify-center ${
                currentSlide === 0
                  ? "bg-transparent text-primaryblue border border-primaryorange"
                  : "bg-primaryorange text-primaryblue border border-primaryorange"
              }`}
              onClick={goToPreviousSlide}
            >
              <GoArrowLeft className="text-[24px]" />
            </button>
          </div>
          <Slider {...settings} ref={sliderRef}>
            {partnersData.map((item, index) => (
              <div className="w-full px-[21px]" key={index}>
                <div className="flex justify-center items-center">
                  <Link href={item?.link} target="_blank">
                    <Image
                      src={item?.image}
                      alt="Partners Image"
                      width={100}
                      height={100}
                      className="z-[-1] w-full h-[90px] object-contain"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
          <div className="absolute top-0 right-[-3%] h-full flex items-center justify-center">
            <button
              className={`z-[1] rounded-full w-[39px] h-[39px] flex items-center justify-center ${
                currentSlide === totalSlides - 1
                  ? "bg-transparent text-primaryblue border border-primaryorange"
                  : "bg-primaryorange text-primaryblue border border-primaryorange"
              }`}
              onClick={goToNextSlide}
            >
              <GoArrowRight  className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
