import { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import TextTranslater from "../components/textTranslater";
import Btn from "../components/btn";

// images
import show_Case from "../assets/Vector 14.png";
import circle from "../assets/Frame 36.png";
import ShowCase_swiper from "../sliders/showCase_swiper";
import showCase from '../assets/showcase.jpg';

export default function Show_case() {
  // aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // har doim emas, faqat birinchi ko‘rinishda
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up-right">
        <div className="show_case my-[120px]">
          <div className="container relative max-lg:flex max-lg:items-center max-lg:flex-col max-lg:justify-center max-lg:gap-[100px] ">
            
            <div className="grp_absolute lg:inline hidden w-auto ">
              <img
                src={showCase}
                style={{boxShadow:'15px 15px 4px #4cced0'}}
                className=" showCase-mainImage "
                loading="lazy"
                alt="show_case main image"
              />
              <div className="circleEffect" ></div>
            </div>

            <div className="grp_left flex flex-col gap-[20px]  max-lg:w-full max-lg:justify-center max-lg:items-center max-lg:gap-[30px] ">
              <div className="showCase-ti">
                <div className="with_span w-auto inline-block rounded-[60px] py-[5px] pr-[30px] bg-[#012235] ">
                  <TextTranslater txt="head-your" txt_styles="inline" />
                  <TextTranslater
                    txt="head-growth"
                    txt_styles="text-[#4CCED0] inline ml-[20px] "
                  />
                </div>
                <div className="head-our">
                  <TextTranslater
                    txt="head-our"
                    txt_styles=" text-white font-[600] rounded-[60px] py-[5px] pr-[30px] bg-[#012235] inline-block mt-[20px] "
                  />
                </div>
              </div>
              <div className="head-txt">
                <TextTranslater
                  txt="head-txt"
                  txt_styles="showCase-txt text-white max-w-[500px] w-full mt-[30px] lg:text-left text-center "
                />
              </div>
              <div className="btn_grp flex gap-[15px] mt-[30px] text-white  ">
                <Btn
                  txt="started"
                  btn_styles="w-[180px] h-[50px] rounded-[18px] p-[10px] bg-[#4CCED0] hover:bg-[#848484] text-[18px] text-white "
                />
                <Btn
                  txt="see-work"
                  btn_styles="w-[180px] h-[50px] rounded-[18px] p-[10px] bg-[#4CCED0] hover:bg-[#848484] text-[18px] text-white "
                />
              </div>
            </div>

            <img
              src={circle}
              className=" showCase-absoluteCircle "
              loading="lazy"
              alt="circle image"
            />
          </div>
        </div>
      </div>

      <div className="showCase_slider">
        <ShowCase_swiper />
      </div>
    </>
  );
}
