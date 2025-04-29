import TextTranslater from "../components/textTranslater";

// image
import lamp from "../assets/Frame (1).png";

export default function Main_raison() {
  return (
    <div className="main_raison bg-white py-[50px] ">
      <div className="container">
        <div className="raisonTitle w-full flex sm:flex-row flex-col items-center gap-[15px] mb-[50px] max-xl:text-center  ">
          <TextTranslater
            txt="reason"
            txt_styles=" xl:text-[60px] text-[45px] sm:text-[28px] max-sm:text-[30px]  text-[#4cced0] font-[600] "
          />
          <TextTranslater
            txt="reason-txt"
            txt_styles=" xl:text-[60px] text-[45px] sm:text-[28px] max-sm:text-[25px]  text-black font-[600] "
          />
        </div>

        <div className="flex items-center lg:flex-nowrap flex-wrap xl:gap-[20px] gap-[10px] justify-center ">

          <div className="leftGrp">
            <div className=" flex sm:flex-nowrap flex-wrap xl:gap-[20px] gap-[8px] ">
              <div className="hoverly rounded-[20px] bg-[#f0f4f9] py-[15px] px-[15px] ">
                <img src={lamp} className="my-[20px]" loading="lazy" alt="lamp image" />
                <TextTranslater txt="our-s1-title" txt_styles=" text-[30px] font-[600] mb-[30px] " />
                <TextTranslater txt="our-s1-txt" txt_styles=" text-[20px] mb-[30px] " />
              </div>
              <div className="hoverly rounded-[20px] bg-[#f0f4f9] py-[15px] px-[15px] ">
                <img src={lamp} className="my-[20px]" loading="lazy" alt="lamp image" />
                <TextTranslater txt="our-s1-title" txt_styles=" text-[30px] font-[600] mb-[30px] " />
                <TextTranslater txt="our-s1-txt" txt_styles=" text-[20px] mb-[30px] " />
              </div>
            </div>
            <div className="hoverly rounded-[20px] bg-[#f0f4f9] py-[15px] px-[15px] lg:mt-[50px] mt-[10px] ">
                <img src={lamp} className="my-[20px]" loading="lazy" alt="lamp image" />
                <TextTranslater txt="our-s1-title" txt_styles=" text-[30px] font-[600] mb-[30px] " />
                <TextTranslater txt="our-s1-txt" txt_styles=" text-[20px] mb-[30px] " />
              </div>
          </div>

          <div className="rightGrp rounded-[20px] bg-[#012235] p-[40px] pt-[50px] lg:pb-[120px] p-[40px] lg:w-auto w-full flex flex-col gap-[40px] ">
            <img src={lamp} className="w-[80px]" loading="lazy" alt="lamp image" />
            <TextTranslater txt="our-s1-title" txt_styles=" text-white text-[35px] font-[600] " />
            <TextTranslater txt="our-s1-txt" txt_styles=" text-[20px] text-white " />
            <TextTranslater txt="our-s1-txt" txt_styles=" text-[20px] text-white " />
            <TextTranslater txt="our-s1-txt" txt_styles=" text-[20px] text-white " />
          </div>

        </div>
      </div>
    </div>
  );
}
