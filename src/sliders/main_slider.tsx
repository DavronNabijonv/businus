import "./main_slider.css";
import '../App.css';
import TextTranslater from "../components/textTranslater";

// images
import colon from "../assets/Vector.png";
import userImg from '../assets/Frame 64.png'

export default function Main_slider() {
  return (
    <div className="main_slider py-[100px] ">

      <div className="container">

        <div className="sliderGrp flex flex-col max-w-[400px] w-full ">
          <div className="mainTxt hoverly bg-[#041723] p-[20px] ">
            <img src={colon} className=" w-[50px]  " loading="lazy" alt="semicolon image" />
            <TextTranslater txt="testimonal-txt" />
          </div>
          <div className="bottomGrp">
            <div className="author">
              <img src={userImg} loading="lazy" alt="customer image" />
              <TextTranslater txt="testimonal-title" />
            </div>
            <div className=" hoverly  "></div>
          </div>
        </div>

      </div>

    </div>
  );
}
