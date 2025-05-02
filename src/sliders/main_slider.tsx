import "./main_slider.css";
import "../App.css";
import TextTranslater from "../components/textTranslater";

// images
import colon from "../assets/Vector.png";
import userImg from "../assets/Frame 64.png";

export default function Main_slider() {
  return (
    <div className="main_slider pb-[50px] ">
      <div className="container">

        <div className="main_slider_title w-full flex items-center justify-between my-[50px] " >

          <div className=" flex gap-[80px] items-center " >
            <TextTranslater txt="client-thoughts" txt_styles=" text-white text-[45px] font-[600] " />
            <TextTranslater txt="testimonal" txt_styles=" fotn-[600] text-[#4cced0] text-[25px] tracking-[3px] " />
          </div>

          <img src={colon} className=" w-[150px] " loading="lazy" alt="testimonal image" />

        </div>

        <div className="sliderGrp flex flex-col max-w-[400px] w-full ">
          <div className="mainTxt  bg-[#041723] p-[50px] ">
            <img
              src={colon}
              className=" w-[50px]  "
              loading="lazy"
              alt="semicolon image"
            />
            <TextTranslater
              txt="testimonal-txt"
              txt_styles=" text-[#8e8e8e] mt-[30px] leading-[25px] "
            />
          </div>
          <div className="bottomGrp flex justify-between ">
            <div className="author flex justify-center items-center p-[10px] gap-[10px] ">
              <img
                src={userImg}
                className="w-[80px]"
                loading="lazy"
                alt="customer image"
              />
              <TextTranslater
                txt="testimonal-title"
                txt_styles=" text-white text-[25px] "
              />
            </div>
            <div className="cardBorderCircle  w-[150px] h-[100px] bg-[#041723] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
