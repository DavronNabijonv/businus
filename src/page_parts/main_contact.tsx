import TextTranslater from "../components/textTranslater";
import rocket from "../assets/Group (1).png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Main_contact() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [checkName, SetCheckName] = useState(false);
  const  [checkPhone,SetCheckPhone] = useState(false);
 
  const isValidName = (name: string) => /^[A-Za-z\s]{4,}$/.test(name.trim());
  const isValidPhone = (phone: string) => phone.replace(/\D/g, "").length >= 9;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered = input.replace(/[^\d+()-\s]/g, ""); // faqat raqam va telefon belgilariga ruxsat
    setPnumber(filtered);
  };

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = "7940057045:AAHRFPvgUCo_7pqpXD6uq4li7-_DYx2J96g"; // Use environment variable
    const chatId = 6134458285;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    if(!isValidName(username) && !isValidPhone(pnumber) ){
      SetCheckName(true);
      SetCheckPhone(true);
      toast.error('Ma`lumotlarni to`ldiring!!!')
      return
    }else{
      SetCheckName(false);
      SetCheckPhone(false)
    }

    if (!isValidName(username)) {
      SetCheckName(true);
      toast.error("Ism noto‘g‘ri. Kamida 4 ta harf va faqat harflardan iborat bo‘lishi kerak.");
      return;
    }else{
      SetCheckPhone(false)
    }
  
    if (!isValidPhone(pnumber)) {
      SetCheckPhone(true);
      toast.error("Telefon raqamingiz noto‘g‘ri. +998 bilan boshlanib, 9 ta raqam bo‘lishi kerak.");
      return;
    }else{
      SetCheckName(false);
    }

    // Get form data
    const info_user = `Ism: ${username}, Phone number: ${pnumber}`;

    axios
      .post(url, {
        chat_id: chatId,
        text: info_user,
      })
      .then((res) => {
        console.log(res);
        setUsername("");
        setPnumber("");
        toast.success("Successfully!!!");
      })
      .catch((error) => {
        setUsername("");
        setPnumber("");
        console.error("Yuborishda xatolik:", error);
        toast.error("Error.");
      });
  };

  return (
    <div className="main_contact bg-white py-[50px] ">
      <div className="container ">
        <div className="mainContact_title flex max-sm:flex-wrap items-center justify-between mb-[40px] ">
          <TextTranslater
            txt="stay"
            txt_styles=" text-black font-[600] text-[45px] max-sm:text-[25px] "
          />
          <TextTranslater
            txt="boglanish"
            txt_styles=" text-[20px] max-sm:text-[18px] text-[#4cced0] "
          />
        </div>
        <form
          onSubmit={sendMessage}
          className="contactForm flex flex-wrap items-end gap-[30px] max-sm:gap-[20px] justify-around bg-[#012235] rounded-[20px] py-[40px] px-[60px] max-sm:px-[20px] "
        >
          <div className="nameGrp text-white text-[25px] max-sm:text-[18px] ">
            <TextTranslater
              txt="name"
              txt_styles="mb-[20px] text-white text-[35px] max-sm:text-[23px] font-[600] "
            />
            <input
              type="text"
              pattern="^[A-Za-z\s]{4,}$"
              className=" actively border-0 bg-[#041723] p-[10px] px-[20px] rounded-[15px] text-white text-[32px] "
              placeholder="Your name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="name"
            />
            {checkName&&<p className=" text-red-500 text-[16px] pt-[10px] " >Ismingiz faqat harflardan iborat bo‘lishi va kamida 4 ta belgi bo‘lishi kerak.</p>}
          </div>
          <div className="nameGrp text-white text-[25px] max-sm:text-[18px] ">
            <TextTranslater
              txt="number"
              txt_styles="mb-[20px] text-white text-[30px] max-sm:text-[23px] font-[600] "
            />
            <input
              type="tel"
              pattern="^\+998\d{9}$"
              maxLength={13}
              className=" actively border-0 bg-[#041723] p-[10px] px-[20px] rounded-[15px] text-white text-[32px] "
              placeholder="Your phone number"
              onChange={(e) =>setPnumber(e.target.value)}
              value={pnumber}
              name="number"
            />
            {checkPhone &&<p className=" text-red-500 text-[16px] pt-[10px] " >Telefon raqam kamida 9 ta belgidan iborat bo‘lishi kerak.</p>}
          </div>

          <div className="sendBtn text-white text-[23px] rounded-[15px] bg-[#4cced0] py-[10px] w-[200px] max-sm:w-auto max-sm:px-[20px] ">
            <button className=" flex items-center gap-[15px] justify-center w-full ">
              {t("submit")}
              <img
                src={rocket}
                className=" w-[28px] "
                loading="lazy"
                alt="rocket image"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
