import { ChangeEvent, useCallback, useEffect, useState } from "react";
import "../App.css";
import TextTranslater from "../components/textTranslater";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// logo image
import logo from "../assets/logo.png";
import { BsGlobe2 } from "react-icons/bs";

export default function Navbar() {
  const [scrollY_Screen, setScrollY_Screen] = useState(false);

   // change language
   const { i18n } = useTranslation();
   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
     i18n.changeLanguage(e.target.value);
   };

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
        scrollY_Screen ? " " : "backdrop-blur-sm "
      } `}
    >
      <div className="container text-white flex justify-between items-center gap-[10px]  ">
        <div
          className={"lg:hidden inline right-0 w-[2rem]  "}
          onClick={changeTogler}
        >
          <div
            className={` ${
              togle
                ? " transform -rotate-[45deg] -translate-x-[10px] translate-y-[5px] "
                : "  "
            } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-white duration-[0.4s]`}
          ></div>
          <div
            className={` ${
              togle ? "opacity-[0]" : "opacity-[1]"
            } m-[0.5rem] w-[0.8rem] h-[0.12rem] bg-white duration-[0.4s]`}
          ></div>
          <div
            className={` ${
              togle
                ? "transform rotate-[45deg] -translate-x-[10px] -translate-y-[15px]"
                : ""
            } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-white duration-[0.4s]`}
          ></div>
        </div>

        <div className="logo  ">
          <img
            src={logo}
            loading="lazy"
            alt="logo image"
            className=" lg:w-[150px] w-[120px] "
          />
        </div>

        <div className=" links py-[8px] rounded-[25px] backdrop-blur-sm bg-[#1B4055] max-w-[650px] w-[100%] lg:flex hidden justify-around items-center gap-[20px] ">
          <LinksGroup />
        </div>

        <div className=" flex gap-[5px] items-center rounded-[25px] backdrop-blur-sm bg-[#1B4055] hover:bg-gray-700 pl-[10px] " >
          <BsGlobe2 />
        <select
          className="appearance-none hover:bg-gray-700 shadow-white rounded-[25px] p-[8px] rounded-[10px] flex flex-col justify-center items-center "
          onChange={handleChange}
        >
          <option value={"uz"}>Уз</option>
          <option value={"ru"}>Py</option>
          <option value={"en"}>Eng</option>
        </select>
        </div>

        {/* style navbar for phone */}
        <div
          className={`lg:hidden flex flex-col gap-[15px] absolute duration-[0.4s] ${
            togle
              ? "transform translate-x-[0%] z-[22222] "
              : "transform translate-x-[100%]"
          } top-[70px] bg-[#041723] right-0 w-[60%] h-[100vh] p-[15px] `}
        >
          <LinksGroup
            close_func={() => {
              setTogle(false);
            }}
          />
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

interface close {
  close_func?: () => void;
}

function LinksGroup({ close_func }: close) {
 

  return (
    <>
      <NavLink
        to="/"
        onClick={close_func}
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${isActive ? "text-secondary" : ""}`
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
        <TextTranslater txt="biz_haqimizda" />
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
        <TextTranslater txt="xizmatlar" />
      </NavLink>

      <NavLink
        to="/narxlar"
        onClick={close_func}
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${isActive ? "text-secondary" : ""}`
        }
      >
        <TextTranslater txt="boglanish" />
      </NavLink>

      <NavLink
        to="/narxlar"
        onClick={close_func}
        className={({ isActive }) =>
          `text-[16px] py-[4px] px-[10px] ${isActive ? "text-secondary" : ""}`
        }
      >
        <TextTranslater txt="kamentariya" />
      </NavLink>
    </>
  );
}
