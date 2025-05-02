import "./main_slider.css";
import TextTranslater from "../components/textTranslater";

// Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// images
import colon from "../assets/Vector.png";
import userImg from "../assets/Frame 64.png";
import { useEffect, useState } from "react";

export default function Main_slider() {
  const toughtArr = [
    {
      id: 1,
      photo: userImg,
      userName: "testimonal-title",
      userThought: "testimonal-txt",
    },
    {
      id: 2,
      photo: userImg,
      userName: "testimonal-title",
      userThought: "testimonal-txt",
    },
    {
      id: 3,
      photo: userImg,
      userName: "testimonal-title",
      userThought: "testimonal-txt",
    },
    {
      id: 4,
      photo: userImg,
      userName: "testimonal-title",
      userThought: "testimonal-txt",
    },
  ];

  // {
  //   id:1,
  //   photo:userImg,
  //   userName:'testimonal-title',
  //   userThought:'testimonal-txt'
  // },

  const [inWidth, setInWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setInWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main_slider ">
      <div className="container">
        <div className="main_slider_title w-full flex items-center justify-between my-[50px] ">
          <div className=" flex gap-[80px] items-center ">
            <TextTranslater
              txt="client-thoughts"
              txt_styles=" text-white text-[45px] font-[600] "
            />
            <TextTranslater
              txt="testimonal"
              txt_styles=" fotn-[600] text-[#4cced0] text-[25px] tracking-[3px] "
            />
          </div>

          <img
            src={colon}
            className=" w-[150px] "
            loading="lazy"
            alt="testimonal image"
          />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          spaceBetween={10}
          slidesPerView={inWidth < 500 ? 1 : inWidth < 800 ? 2 : 3}
          centeredSlides={false}
          loop={true}
          className=" thought-swiper w-full"
        >
          {toughtArr.map((item) => (
            <SwiperSlide>
              <div
                key={item.id}
                className="sliderGrp flex flex-col max-w-[400px] w-full "
              >
                <div className="mainTxt  bg-[#041723] p-[50px] ">
                  <img
                    src={colon}
                    className=" w-[50px]  "
                    loading="lazy"
                    alt="semicolon image"
                  />
                  <TextTranslater
                    txt={item.userThought}
                    txt_styles=" text-[#8e8e8e] mt-[30px] leading-[25px] "
                  />
                </div>
                <div className="bottomGrp flex justify-between ">
                  <div className="author flex justify-center items-center p-[10px] gap-[10px] ">
                    <img
                      src={item.photo}
                      className="w-[80px]"
                      loading="lazy"
                      alt="customer image"
                    />
                    <TextTranslater
                      txt={item.userName}
                      txt_styles=" text-white text-[25px] "
                    />
                  </div>
                  <div className="cardBorderCircle  w-[150px] h-[100px] bg-[#041723] "></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
