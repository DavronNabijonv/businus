import "../App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import Btn from "../components/btn";
import TextTranslater from "../components/textTranslater";

// images
import grp from "../assets/Frame 55.png";
import grp2 from "../assets/Frame 56.png";
import { MdOutlineCallMade } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

export default function Main_about() {
  const { t } = useTranslation();
  // aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: false, // har doim emas, faqat birinchi ko‘rinishda
    });
  }, []);
  return (
    <div className="main_about bg-white py-[100px] ">
      <div className="container flex xl:justify-between justify-around items-center ">
        <div data-aos="fade-right" className="lg:flex hidden" >
          <div className="imgGrp flex gap-[15px] ">
            <div className="parts  ">
              <img
                src={grp}
                className=" max-w-[300px] h-auto w-full "
                loading="lazy"
                alt=" main about image"
              />
              <hr className=" bg-black max-w-[300px] w-full h-[15px] my-[40px] " />
              <div className="mainAbout_txt flex items-center justify-around ">
                <span className=" text-[80px] font-[700] ">10</span>
                <div className="flex flex-col mt-[20px] items-center justify-center gap-[0px] leading-[10px] ">
                  <p className=" text-[#4CCED0] text-[30px]  ">Lorem Epson</p>
                  <p className=" text-[#4CCED0] text-[30px]  ">Lorem Epson</p>
                </div>
              </div>
            </div>

            <div className="parts xl:flex hidden flex-col items-end ">
              <div className="circle w-[180px] h-[180px] relative">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150
                        m -100, 0
                        a 100,100 0 1,1 200,0
                        a 100,100 0 1,1 -200,0"
                    />
                  </defs>
                  <g>
                    <text fill="black" fontSize="33" fontWeight="bold">
                      <textPath href="#circlePath" startOffset="0%">
                        {t("f-team")} • {t("f-team")} •
                      </textPath>
                    </text>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 150 150"
                      to="360 150 150"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </g>
                </svg>
              </div>
              <img
                src={grp2}
                className=" max-w-[300px] h-auto w-full "
                loading="lazy"
                alt=" main about image"
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="flex flex-col gap-[30px] ">
            <div className="head-title flex gap-[15px] items-center ">
              <div className=" w-[130px] h-[3px] bg-black " />
              <TextTranslater
                txt="world"
                txt_styles=" text-[#4CCED0] text-[25px] "
              />
            </div>
            <TextTranslater
              txt="biz_haqimizda"
              txt_styles=" text-[45px] font-[700] "
            />
            <TextTranslater
              txt="world-txt"
              txt_styles=" max-w-[600px] w-full text-[22px] "
            />
            <TextTranslater
              txt="world-txt"
              txt_styles=" max-w-[600px] w-full text-[22px] "
            />
            <TextTranslater
              txt="world-txt"
              txt_styles=" max-w-[600px] w-full text-[22px] "
            />
            <div className="btnGrp flex flex-wrap items-center gap-[20px] text-white ">
              <Btn
                txt="fill"
                btn_styles=" arrow-btn text-[20px] bg-[#4cced0] flex items-center gap-[15px] p-[10px] rounded-[10px] hover:bg-[#e9e9e9] "
                iconImg={<MdOutlineCallMade />}
                iconStyle=" bg-[#12a4a6] rounded-[100%] p-[2px] text-[22px] "
              />
              <Btn
                txt="call"
                btn_styles=" call-btn bg-[#4cced0] flex items-center gap-[15px] p-[10px] rounded-[10px] hover:bg-[#e9e9e9] "
                iconImg={<FiPhoneCall />}
                iconStyle=" bg-[#12a4a6] rounded-[100%] p-[6px] text-[16px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
