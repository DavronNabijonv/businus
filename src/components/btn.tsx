import { ReactNode } from "react";
import { useTranslation } from "react-i18next"; 
import '../App.css'

// icons

interface btnProps{
    txt:string;
    click_func?:()=>void;
    btn_styles:string;
    iconImg?:ReactNode;
    iconStyle?:string;
}

export default function Btn({ txt, click_func, btn_styles, iconImg , iconStyle }:btnProps) {
  const { t } = useTranslation();
  return (
    <button onClick={click_func} className={btn_styles}>
      {t(txt)} <span className={iconStyle} >{iconImg}</span>
    </button>
  );
}