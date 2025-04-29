import { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import TextTranslater from "../components/textTranslater";
import Btn from "../components/btn";

// images
import show_Case from "../assets/Vector 14.png";
import show_Case_hover from "../assets/Vector 15.png";

export default function Show_case() {
  // aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // har doim emas, faqat birinchi ko‘rinishda
    });
  }, []);

  return (
    <div data-aos="fade-up">

      <div className="show_case my-[120px]">
        <div className="container relative ">

        <div className="grp_absolute">
              <img
                src={show_Case_hover}
                className=" absolute top-[22px] left-[500px] w-[900px] z-[-1] "
                loading="lazy"
                alt="show_case main image"
              />
            <img
              src={show_Case}
              className=" absolute top-0 left-[480px] w-[900px] z-[-1] "
              loading="lazy"
              alt="show_case main image"
            />
          </div>

          <div className="grp_left flex flex-col gap-[30px] mt-[50px] ">
            <div className="with_span flex items-center gap-[10px] text-white text-[63px] font-[700]   ">
              <TextTranslater txt="head-your" />
              <TextTranslater txt="head-growth" txt_styles="text-[#4CCED0]" />
            </div>
            <TextTranslater
              txt="head-our"
              txt_styles=" text-white text-[70px] font-[600] "
            />
            <TextTranslater
              txt="head-txt"
              txt_styles=" text-[22px] text-white w-[500px] mt-[30px] "
            />
            <div className="btn_grp flex gap-[15px] mt-[30px] text-white ">
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

          

        </div>
      </div>

    </div>
  );
}
