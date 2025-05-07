import React, { useState, useRef } from "react";
import s from "./Header.module.css";
import logo from "../../images/vk2.svg";
import { NavLink } from "react-router-dom";
import LogoutBar from "./LogoutBar/LogoutBar";
import { useSelector } from "react-redux";
import useClickOutside from "../common/userHooks/useClickOutside";
import imagePreloader from "../../images/imagePreloader.svg";
import { NotificationsBar } from "./NotificationsBar/NotificationsBar";
import type { RootState } from "../../redux/redux-store";

interface HeaderProps {
  isAuth: boolean;
  login: string;
  logout: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [logoutBar, setLogoutBar] = useState<boolean>(false);

  const toggleLogoutBar = () => {
    setLogoutBar((prev) => !prev);
  };

  const barRef = useRef<HTMLDivElement>(null);
  const logBarRef = useRef<HTMLDivElement>(null);

  useClickOutside(toggleLogoutBar, barRef, logBarRef);

  const userPhoto = useSelector((state: RootState) => state.auth.authUserPhoto);

  return (
    <header className={s.header}>
      <NavLink className={s.logo_wrap} to={"/profile"}>
        <img src={logo} className={s.logo} alt="" />
      </NavLink>
      <input className={s.search} placeholder="Поиск" />
      <button style={{ position: "relative" }} className={s.notify_btn}></button>
      <button className={s.music_btn}></button>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <div
              ref={logBarRef}
              onClick={toggleLogoutBar}
              className={s.info}
            >
              <p className={s.name}>
                {props.login ? props.login.split("_")[0] : ""}
              </p>
              <img
                src={userPhoto || imagePreloader}
                className={s.image}
                alt=""
              />
              <div className={s.more_button}></div>
            </div>
            {logoutBar && (
              <LogoutBar
                reff={barRef}
                userPhoto={userPhoto}
                login={props.login}
                logout={props.logout}
              />
            )}
          </div>
        ) : (
          <NavLink className={s.login} to={"/login"}>
            Вход
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
