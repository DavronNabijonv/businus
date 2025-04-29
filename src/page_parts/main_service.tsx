import TextTranslater from "../components/textTranslater";

// image
import camp from "../assets/Frame.png";

export default function Main_service() {
  const mainService = [
    {
      id: 1,
      image: camp,
      title: "our-s1-title",
      txt: "our-s1-txt",
    },
    {
      id: 2,
      image: camp,
      title: "our-s1-title",
      txt: "our-s1-txt",
    },
    {
      id: 3,
      image: camp,
      title: "our-s1-title",
      txt: "our-s1-txt",
    },
    {
      id: 4,
      image: camp,
      title: "our-s1-title",
      txt: "our-s1-txt",
    },
    {
      id: 5,
      image: camp,
      title: "our-s1-title",
      txt: "our-s1-txt",
    },
    {
      id: 6,
      image: camp,
      title: "our-s1-title",
      txt: "our-s1-txt",
    },
  ];

  return (
    <div className=" main_service py-[50px] ">
      <div className="container flex flex-col gap-[20px] ">
        <TextTranslater txt="our-s" txt_styles=" text-white sm:text-[40px] text-[30px] font-[600] " />
        <TextTranslater txt="our-s-txt" txt_styles=" text-white sm:text-[18px] text-[16px] max-w-[1000px] w-full " />
        <div className="grid_grp grid lg:grid-cols-2 grid-cols-1 xl:gap-[50px] lg:gap-[25px] gap-[40px] ">
          {mainService.map((item) => (
            <div  key={item.id} className=" mainServiceGrp flex items-center gap-[15px] bg-[#041723] rounded-[20px] py-[15px] sm:px-[30px] px-[10px] ">
              <img
                src={item.image}
                loading="lazy"
                alt="services image"
                className=""
              />
              <div className="flex flex-col gap-[10px] " >
                <TextTranslater txt="our-s1-title" txt_styles=" text-white sm:text-[25px] text-[20px] " />
                <TextTranslater txt="our-s1-txt" txt_styles=" text-[#8e8e8e] sm:text-[18px] text-[16px] " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
