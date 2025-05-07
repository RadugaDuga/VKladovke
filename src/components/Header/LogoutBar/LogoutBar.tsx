import React from "react";
import s from "./LogoutBar.module.css";

interface LogoutBarProps {
  reff: React.RefObject<HTMLDivElement>;
  userPhoto: string;
  login: string;
  logout: () => void;
}

const LogoutBar: React.FC<LogoutBarProps> = (props) => {
  return (
    <div ref={props.reff} className={s.logoutBar}>
      <div className={s.top_profile}>
        <img src={props.userPhoto}
          alt=""
          className={s.top_profile__image}
        />
        <div className={s.top_profile__info}>
          <p className={s.info__name}>
            {props.login.includes("_")
              ? `${props.login.split("_")[0]} ${props.login.split("_")[1]}`
              : props.login}
          </p>
          <p className={s.info__offer}> Перейти в VK Cherdak </p>
        </div>
      </div>
      <div className={s.separator}></div>
      <button className={s.setting}>Настройки</button>
      <button className={s.setting}>Помощь</button>
      <div className={s.separator}></div>
      <button onClick={props.logout} className={s.setting}>
        Выйти
      </button>
    </div>
  );
};

export default LogoutBar;
