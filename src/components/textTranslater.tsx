import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import '../App.css';

type TextProps = 
  | { have_route: true; route_link: string; route_active_styles?: string; route_click_func?: () => void; have_ancor?: false; ancor_link?: never; txt: string; txt_styles?: string; }
  | { have_ancor: true; ancor_link: string; have_route?: false; route_link?: never; txt: string; txt_styles?: string; }
  | { have_ancor?: false; have_route?: false; txt: string; txt_styles?: string; };

export default function TextTranslater(props: TextProps) {
  const { t } = useTranslation();

  if (props.have_ancor) {
    return (
      <a href={props.ancor_link} className={props.txt_styles} >
         {t(props.txt)}
      </a>
    );
  }

  if (props.have_route) {
    return (
      <NavLink
        to={props.route_link}
        onClick={props.route_click_func}
        className={({ isActive }) =>
          `${props.txt_styles} ${isActive ? props.route_active_styles : ""}`
        }
      >
        {t(props.txt)}
      </NavLink>
    );
  }

  return <div className={props.txt_styles}>{t(props.txt)}</div>;
}
