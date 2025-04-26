import { ChangeEvent, useCallback, useEffect, useState } from "react";
import "../../App.css";
import TextTranslater from "../components/textTranslater";
import { NavLink } from "react-router-dom";
import Btn from "../components/btn";
import { useTranslation } from "react-i18next";

// logo image
import logo from "../../assets/limsa_logo.png";

export default function Navbar() {
  const [scrollY_Screen, setScrollY_Screen] = useState(false);
  // hide and show of togle button
  const [togle, setTogle] = useState(false);

  // useCallback must be here, not inside useEffect
  const scrollYScreen = useCallback(() => {
    window.scrollY !== 0 ? setScrollY_Screen(false) : setScrollY_Screen(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollYScreen);

    return () => {
      window.removeEventListener("scroll", scrollYScreen);
    };
  }, [scrollYScreen]);

  // change togle navbar for phone type
  const changeTogler = () => {
    setTogle(!togle);
  };

  return (
    <div
      className={`navbar fixed z-[1000] w-[100%] top-0 ${
        scrollY_Screen ? "backdrop-blur-sm" : "bg-[#161616]"
      }  border-b-1 border-gray-400`}
    >
      <div className="container text-white flex lg:justify-around justify-between items-center gap-[10px]  ">
        <div className="logo  ">
          <img
            src={logo}
            loading="lazy"
            alt="logo image"
            className=" lg:w-[200px] w-[180px] "
          />
        </div>

        <div className=" links max-w-[800px] w-[100%] lg:flex hidden justify-start items-center gap-[20px] ">
          <LinksGroup />
        </div>

        <div className=" lg:inline hidden phoneNumber-btn py-[10px] px-[20px] ">
          <Btn
            txt="+998 (33) 258 73 58"
            btn_styles=" py-[8px] text-[14px] rounded-[25px] w-[180px] "
          />
        </div>

        {/* style navbar for phone */}
        <div
          className={`lg:hidden flex flex-col gap-[15px] absolute duration-[0.4s] ${
            togle
              ? "transform translate-x-[0%] z-[22222] "
              : "transform translate-x-[100%]"
          } top-[66px] bg-[#161616] right-0 w-[60%] h-[100vh] p-[15px] `}
        >
          <LinksGroup
            close_func={() => {
              setTogle(false);
            }}
          />
        </div>

        <div
          className={"lg:hidden inline right-0 w-[2rem]  "}
          onClick={changeTogler}
        >
          <div
            className={` ${
              togle
                ? " transform -rotate-[45deg] -translate-x-[10px] translate-y-[5px] "
                : "  "
            } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-[#6c2dba] duration-[0.4s]`}
          ></div>
          <div
            className={` ${
              togle ? "opacity-[0]" : "opacity-[1]"
            } m-[0.5rem] w-[0.8rem] h-[0.12rem] bg-[#6c2dba] duration-[0.4s]`}
          ></div>
          <div
            className={` ${
              togle
                ? "transform rotate-[45deg] -translate-x-[10px] -translate-y-[15px]"
                : ""
            } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-[#6c2dba] duration-[0.4s]`}
          ></div>
        </div>
      </div>

      {/* overflow */}
      <div
        className={`absolute ${
          togle ? "flex" : "hidden"
        } w-[100%] h-[100vh] z-[999] top-0 bottom-0 left-0 `}
        onClick={() => setTogle(false)}
      ></div>
      {/* overflow */}
    </div>
  );
}

interface close{
    close_func?:()=>void;
}

function LinksGroup({ close_func }:close) {

  // change language
  const { i18n } = useTranslation();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <NavLink
        to="/"
        onClick={close_func}
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${
            isActive ? "rounded-[25px] border-b-[2px] border-[#6c2dba]" : ""
          }`
        }
      >
        <TextTranslater txt="bosh_sahifa" />
      </NavLink>

      <NavLink
        to="/xizmat"
        onClick={close_func}
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${
            isActive ? "rounded-[25px] border-b-[2px] border-[#6c2dba]" : ""
          }`
        }
      >
        <TextTranslater txt="xizmat" />
      </NavLink>

      <NavLink
        to="/ishlar"
        onClick={close_func}
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${
            isActive ? "rounded-[25px] border-b-[2px] border-[#6c2dba]" : ""
          }`
        }
      >
        <TextTranslater txt="bizning-ishlar" />
      </NavLink>

      <NavLink
        to="/narxlar"
        onClick={close_func}
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${
            isActive ? "rounded-[25px] border-b-[2px] border-[#6c2dba]" : ""
          }`
        }
      >
        <TextTranslater txt="narxlar" />
      </NavLink>
      <select
        className="appearance-none hover:bg-gray-700 shadow-white p-[8px] rounded-[10px] flex flex-col justify-center items-center "
        onChange={handleChange}
      >
        <option value={"uz"}>Уз</option>
        <option value={"ru"}>Py</option>
        <option value={"en"}>Eng</option>
      </select>
    </>
  );
}