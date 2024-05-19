"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurServicesCard from "../cards/OurServicesCard";
import { ourServicesData } from "@/constDatas/servicesData";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Title from "../title";
import { navItems } from "@/constDatas/navItems";

const OurServicesSlider = () => {
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
    dots: false,
    arrows: false,
    infinite: false,
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
  const serviceLocaton = navItems[2]?.Catagories;

  return (
    <div className="flex flex-col gap-4 lg:gap-[40px]">
      <div>    
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <div>
            <Title
              isTitleA={true}
              subTitle={"Our work speaks for us. One stop electrical solution."}
              title={"OUR SERVICES"}
              styleA={"lg:items-start items-center"}
              styleB={"text-start"}
            />
          </div>
          <div className="flex gap-[24px]">
          <button
            className={`rounded-full w-[39px] h-[39px] flex items-center justify-center ${
              currentSlide === 0
                ? "bg-[#848484] text-white border border-[#848484]"
                : "bg-primaryblue text-white border border-primaryblue"
            }`}
            onClick={goToPreviousSlide}
          >
            <BiChevronLeft className="text-[24px]" />
          </button>
          <button
            className={`text-white rounded-full w-[39px] h-[39px] flex items-center justify-center ${
              currentSlide === totalSlides - 1
                ? "bg-[#848484] text-white border border-[#848484]"
                : "bg-primaryblue text-white border border-primaryblue"
            }`}
            onClick={goToNextSlide}
          >
            <BiChevronRight className="text-[24px]" />
          </button>
        </div>
        </div>      
      </div>
      <Slider {...settings} ref={sliderRef}>
        {serviceLocaton?.map((item, index) => (
          <div className="px-[11px]" key={index}>
            <OurServicesCard data={item} link={`/services/${ item?.slug}`}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurServicesSlider;
