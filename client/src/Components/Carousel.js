import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../Images/SliderImage1.jpg";
import video1 from "../Images/SliderVideo2.mp4";
import image2 from "../Images/SliderImage3.jpg";

import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="relative w-full h-[calc(100vh-7.5rem)] flex justify-center items-center">
      <Swiper
        direction={"horizontal"}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="relative">
            <img src={image1}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative">
            <video autoPlay muted loop src={video1}></video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image2}></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
