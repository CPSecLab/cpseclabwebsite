import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  return (
    <div className="slider-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        loopAdditionalSlides={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 130,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={src} alt={`Slide ${index}`} className="slide-image" />
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <i class="fa-solid fa-circle-arrow-left"></i>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow">
            <i class="fa-solid fa-circle-arrow-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
