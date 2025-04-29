import { ReactNode } from "react";
import { useTranslation } from "react-i18next"; 
import '../App.css'

interface btnProps{
    txt:string;
    click_func?:()=>void;
    btn_styles:string;
    iconImg?:ReactNode;
}

export default function Btn({ txt, click_func, btn_styles, iconImg }:btnProps) {
  const { t } = useTranslation();
  return (
    <button onClick={click_func} className={btn_styles}>
      {t(txt)} {iconImg}
    </button>
  );
}