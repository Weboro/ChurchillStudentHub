"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewsCard } from "..";
import { individualReviewsData } from "@/constDatas/reviewsData";

const ProjectsSlider = () => {
  const sliderRef = useRef(null);
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
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {individualReviewsData?.map((item, index) => (
          <div className="px-2" key={index}>
            <ReviewsCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsSlider;
