
import "../App.css";
// Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// icon
import { FaStar } from "react-icons/fa6";

export default function ShowCase_swiper() {
  return (
    <div className=" my-[50px] " >
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          spaceBetween={10}
          slidesPerView={5}
          centeredSlides={false}
          loop={true}
          className=" showCase-swiper w-full"
        >
          <SwiperSlide>
            <p className=" text-white flex items-center gap-[30px] text-[20px] ">
              Google <FaStar />
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" text-white flex items-center gap-[30px] text-[20px] ">
              Twitter <FaStar />
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" text-white flex items-center gap-[30px] text-[20px] ">
              Facebook <FaStar />
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" text-white flex items-center gap-[30px] text-[20px] ">
              Instagram <FaStar />
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" text-white flex items-center gap-[30px] text-[20px] ">
              Dribble <FaStar />
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" text-white flex items-center gap-[30px] text-[20px] ">
              Behance <FaStar />
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
