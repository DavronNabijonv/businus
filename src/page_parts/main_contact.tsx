import TextTranslater from "../components/textTranslater";
import rocket from "../assets/Group (1).png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from 'react-toastify';
import { useState } from "react";

export default function Main_contact() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [pnumber, setPnumber] = useState("");

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = "7940057045:AAHRFPvgUCo_7pqpXD6uq4li7-_DYx2J96g"; // Use environment variable
    const chatId = 6134458285;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Get form data
    const info_user = `Ism: ${username}, Phone number: ${pnumber}`;

    axios
      .post(url, {
        chat_id: chatId,
        text: info_user,
      })
      .then((res) => {
        console.log(res)
        setUsername("");
        setPnumber('');
        toast.success("Successfully!!!")
      })
      .catch((error) => {
        setUsername("");
        setPnumber('');
        console.error("Yuborishda xatolik:", error);
        toast.error('Error.')
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
        <form onSubmit={sendMessage} className="contactForm flex flex-wrap items-end gap-[30px] max-sm:gap-[20px] justify-around bg-[#012235] rounded-[20px] py-[40px] px-[60px] max-sm:px-[20px] ">
          <div className="nameGrp text-white text-[25px] max-sm:text-[18px] ">
            <TextTranslater
              txt="name"
              txt_styles="mb-[20px] text-white text-[35px] max-sm:text-[23px] font-[600] "
            />
            <input
              className=" actively border-0 bg-[#041723] p-[10px] px-[20px] rounded-[15px] text-white text-[32px] "
              placeholder="Your name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="name"
              required
            />
          </div>
          <div className="nameGrp text-white text-[25px] max-sm:text-[18px] ">
            <TextTranslater
              txt="number"
              txt_styles="mb-[20px] text-white text-[30px] max-sm:text-[23px] font-[600] "
            />
            <input
              className=" actively border-0 bg-[#041723] p-[10px] px-[20px] rounded-[15px] text-white text-[32px] "
              placeholder="Your phone number"
              onChange={(e) => setPnumber(e.target.value)}
              value={pnumber}
              name="number" 
              required
            />
          </div>

          <div className="sendBtn text-white text-[23px] rounded-[15px] bg-[#4cced0] py-[10px] w-[200px] max-sm:w-auto max-sm:px-[20px] ">
            <button className=" flex items-center gap-[15px] justify-center w-full " >
              {t("submit")}
              <img src={rocket} className=" w-[28px] " loading="lazy" alt="rocket image" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
