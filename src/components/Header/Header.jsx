import React, { useState, useRef } from "react";
import s from "./Header.module.css";
import logo from "../../images/vk2.svg";
import { NavLink } from "react-router-dom";
import LogoutBar from "./LogoutBar/LogoutBar";
import { useSelector } from "react-redux";
import useClickOutside from "../common/userHooks/useClickOutside";
import imagePreloader from "../../images/imagePreloader.svg";
import { NotificationsBar } from "./NotificationsBar/NotificationsBar";

const Header = (props) => {
	let [logoutBar, setLogoutBar] = useState(false);

	const toggleLogoutBar = () => {
		logoutBar ? setLogoutBar(false) : setLogoutBar(true);
	};

	let barRef = useRef();
	let logBarRef = useRef();
	useClickOutside(toggleLogoutBar, barRef, logBarRef);

	const userPhoto = useSelector((state) => state.auth.authUserPhoto);

	return (
		<header className={s.header}>
			<NavLink className={s.logo_wrap} to={"/profile"}>
				<img src={logo} className={s.logo} alt="" />
			</NavLink>

			<input className={s.search} placeholder="Поиск" />
			<button
				style={{ position: "relative" }}
				className={s.notify_btn}
			>
				{/* <NotificationsBar /> */}
			</button>
			<button className={s.music_btn}></button>
			<div className={s.loginBlock}>
				{props.isAuth ? (
					<div>
						<div
							ref={logBarRef}
							onClick={() => {
								toggleLogoutBar();
							}}
							className={s.info}
						>
							<p className={s.name}>
								{props.login.split("_")[0]}
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
