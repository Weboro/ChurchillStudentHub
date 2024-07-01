"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { navItems } from "@/constDatas/navItems";
import { YoutubeSliderCard } from "@/components";
import { YoutubeVideoLinks } from "@/constDatas/YoutubeVideoLinks";

const YoutubeSlider = () => {
  const aboutLists = navItems[0];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
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
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
    <div className="flex flex-col gap-4 lg:gap-[40px]">
      <Slider {...settings} ref={sliderRef}>
        {YoutubeVideoLinks?.map((item, index) => {
          return (
            <div key={index} className="px-[11px] my-[11px]">
              <YoutubeSliderCard title={item?.title} videoId={item?.videoId} />
            </div>
          );
        })}
      </Slider>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <div></div>
          <div className="">
            <div className="flex gap-[24px]">
              <button
                className={`rounded-md w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === 0
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToPreviousSlide}
              >
                <BiChevronLeft className="text-[24px]" />
              </button>
              <button
                className={`rounded-md w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === totalSlides - 1
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToNextSlide}
              >
                <BiChevronRight className="text-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSlider;
