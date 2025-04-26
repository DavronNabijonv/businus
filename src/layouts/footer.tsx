import React from "react";
import { NavLink } from "react-router-dom";
import TextTranslater from "../components/textTranslater";

// image and icons
import { FaLinkedinIn , FaFacebookF , FaInstagram , FaTelegramPlane , FaArrowUp } from "react-icons/fa";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <div className="footer mt-[200px] py-[20px] ">
      <div className="container flex flex-col gap-[15px] ">

        <div className="LinksGrpFooter text-white flex flex-wrap items-center sm:justify-start justify-center gap-[40px] ">
          <LinksGroup />
        </div>

        <div className="ancorNetwork flex sm:flex-row flex-col sm:gap-[0] gap-[30px] justify-between items-center w-full border-b-[1px] border-b-[#9ccde9] py-[30px] ">

          <div className="networks flex items-center gap-[10px] sm:w-auto w-full sm:justify-start justify-around ">
            <a
              href="https://www.linkedin.com/in/davron-chetin-959833246/"
              target="_blank"
              className="rounded-[100%] border-[1px] border-gray-500 p-[8px] text-white flex justify-center items-center w-[38px] h-[38px] "
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.linkedin.com/in/davron-chetin-959833246/"
              target="_blank"
              className="rounded-[100%] border-[1px] border-gray-500 p-[8px] text-white flex justify-center items-center w-[38px] h-[38px] "
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/temur_wariors/"
              target="_blank"
              className="rounded-[100%] border-[1px] border-gray-500 p-[8px] text-white flex justify-center items-center w-[38px] h-[38px] "
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/ndx_09"
              target="_blank"
              className="rounded-[100%] border-[1px] border-gray-500 p-[8px] text-white flex justify-center items-center w-[38px] h-[38px] "
            >
              <FaTelegramPlane />
            </a>
          </div>

          <button
          onClick={()=>{window.scrollTo(0, 0);}}
          style={{ boxShadow: "0 0 40px #9ccde9" }} 
          className=" rounded-[100%] bg-[#O3273D] text-white text-[18px] p-[10px] ml-[20%] " >
            <FaArrowUp className="text-white" />
          </button>

          <div className=" flex flex-wrap items-center gap-[20px] sm:w-auto w-full sm:justify-start justify-around  " >
            <TextTranslater txt="group" txt_styles="text-white text-[18px]" />
            <p className=" text-white pt-[18px] " >+998 99 777 66 55</p>
          </div>

        </div>

        <div className=" flex justify-between mt-[15px] items-center " >
            <img src={logo}  loading="lazy" className="w-[120px]" alt="footer logo image" />
            <div className=" flex items-center gap-[20px] max-sm:flex-col " >
                <TextTranslater txt="privacy" txt_styles="text-white  " />
                <TextTranslater txt="terms" txt_styles="text-white  " />
            </div>
        </div>

      </div>
    </div>
  );
}

function LinksGroup() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${isActive ? "text-secondary" : ""}`
        }
      >
        <TextTranslater txt="bosh_sahifa" />
      </NavLink>

      <NavLink
        to="/xizmat"
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${
            isActive ? "rounded-[25px] border-b-[2px] border-[#6c2dba]" : ""
          }`
        }
      >
        <TextTranslater txt="biz_haqimizda" />
      </NavLink>

      <NavLink
        to="/ishlar"
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${
            isActive ? "rounded-[25px] border-b-[2px] border-[#6c2dba]" : ""
          }`
        }
      >
        <TextTranslater txt="xizmatlar" />
      </NavLink>

      <NavLink
        to="/narxlar"
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${isActive ? "text-secondary" : ""}`
        }
      >
        <TextTranslater txt="boglanish" />
      </NavLink>

      <NavLink
        to="/narxlar"
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${isActive ? "text-secondary" : ""}`
        }
      >
        <TextTranslater txt="kamentariya" />
      </NavLink>
    </>
  );
}
