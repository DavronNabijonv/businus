import { useContext, useEffect } from "react";
import "../App.css";
import AOS from "aos";
// import TextTranslater from "../components/textTranslater";
import Btn from "../components/btn";
import he from 'he';
import parse from "html-react-parser";

// images
import circle from "../assets/Frame 36.png";
import ShowCase_swiper from "../sliders/showCase_swiper";
import showCase from "../assets/showcase.jpg";
import { useTranslations } from "../hooks/useTranslation";
import { ChangeLanguageValue } from "../App";
// import useParseHTML from "../hooks/useParseHTML";

export default function Show_case() {
  const { data: translations, isLoading } = useTranslations();
  const { lang } = useContext(ChangeLanguageValue);
  // const {parseHTMLString} = useParseHTML();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  const pTeg = translations?.[1]?.[lang] || "";
  console.log(pTeg);
  const decodeHTML = he.decode(pTeg);
  console.log('decode: ',decodeHTML);

  return (
    <>
      <div data-aos="fade-up-right">
        <div className="show_case my-[120px]">
          <div className="container relative max-lg:flex max-lg:items-center max-lg:flex-col max-lg:justify-center max-lg:gap-[100px] ">
            <div className="grp_absolute lg:inline hidden w-auto ">
              <img
                src={showCase}
                style={{ boxShadow: "15px 15px 4px #4cced0" }}
                className=" showCase-mainImage "
                loading="lazy"
                alt="show_case main image"
              />
              <div className="circleEffect"></div>
            </div>

            <div className="grp_left flex flex-col gap-[20px] max-lg:w-full max-lg:justify-center max-lg:items-center max-lg:gap-[30px] ">
              <div className="showCase-ti">
                <div className="with_span w-auto inline-block rounded-[60px] py-[0px] pr-[30px] bg-[#012235]">
                  <div className="text-white font-[600] text-[32px] lg:text-[55px] max-w-[650px] leading-[40px] lg:leading-[78px] ">
                    {parse(decodeHTML)}
                    {/* <h1 dangerouslySetInnerHTML={{__html:`${parseHTMLString(decodeHTML)}`}} /> */}
                  </div>
                </div>
                
              </div>
              <div className="head-txt showCase-txt text-white max-w-[500px] w-full mt-[30px] lg:text-left text-center ">
                {/* <TextTranslater
                  txt="head-txt"
                  txt_styles="showCase-txt text-white max-w-[500px] w-full mt-[30px] lg:text-left text-center "
                /> */}
                {parse(translations?.[0]?.[lang])}
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

      <div className="showCase_slider pt-[5px] ">
        <ShowCase_swiper />
      </div>
    </>
  );
}
