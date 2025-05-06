import React, { useState } from "react";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import s from "./UserInfo.module.css";
import ProfileDataForm from "./ProfileDataForm";
import { useDispatch } from "react-redux";
import { saveProfileData } from "../../../redux/profile-reducer";

const UserInfo = (props) => {
	const [moreInfo, setMoreInfo] = useState(false); // ???=======================================
	const toggleMoreInfo = (e) => {
		e.target.innerHTML === "Показать подробную информацию"
			? (e.target.innerHTML = "Скрыть подробную информацию")
			: (e.target.innerHTML = "Показать подробную информацию");
		moreInfo ? setMoreInfo(false) : setMoreInfo(true);
	};

	return (
		<div className={s.container}>
			<div className={s.info_wrapper}>
				<div className={s.user_name}>
					<p>
						{" "}
						{props.profile.fullName}{" "}
						<span className={s.status}>online</span>
					</p>
					<div className={s.status_wrapper}>
						{" "}
						<ProfileStatusWithHooks />{" "}
					</div>
				</div>

				<div className={s.about_user_global_wrapper}>
					<div className={s.info_block}>
						<div className={s.mini_title}>
							День рождения :
						</div>
						<div className={s.information}>26 августа</div>
					</div>
					<div className={s.info_block}>
						<div className={s.mini_title}>Город :</div>
						<div className={s.information}>Новосибирск</div>
					</div>
					<div className={s.info_block}>
						<div className={s.mini_title}>
							Семейное положение :
						</div>
						<div className={s.information}>Влюблен</div>
					</div>
					<button
						onClick={(e) => {
							toggleMoreInfo(e);
						}}
						className={s.more_button}
					>
						Показать подробную информацию
					</button>
				</div>

				{moreInfo ? (
					<AboutUser
						isOwner={props.isOwner}
						profile={props.profile}
					/>
				) : null}
			</div>
			<div className={s.user_stats}>
				<p>
					54<span>друзей</span>
				</p>
				<p>
					38<span>подписчиков</span>
				</p>
				<p>
					4<span>фотографии</span>
				</p>
				<p>
					2<span>отметки</span>
				</p>
				<p>
					36<span>видеозаписей</span>
				</p>
			</div>
		</div>
	);
};

const AboutUser = (props) => {
	let [editMode, setEditMode] = useState(false); // ???=======================================
	const toggleEditMode = () => {
		editMode ? setEditMode(false) : setEditMode(true);
	};

	let dispatch = useDispatch();

	const formSubmitted = (formData) => {
		dispatch(saveProfileData(formData)).then(() => {
			toggleEditMode();
		});
	};

	if (editMode) {
		return (
			<ProfileDataForm
				initialValues={props.profile}
				onSubmit={formSubmitted}
				toggleEditMode={toggleEditMode}
				profile={props.profile}
			/>
		);
	}

	return (
		<>
			<div className={s.about_user_section}>
				<div className={s.title_line_wrapper}>
					<h5 className={s.about_title}>О себе</h5>
					<div className={s.line}></div>
					{props.isOwner && (
						<button
							className={s.edit_button}
							onClick={toggleEditMode}
						>
							{" "}
							Редактировать{" "}
						</button>
					)}
				</div>
				<div className={s.info_block}>
					<div className={s.mini_title}>Имя и Фамилия :</div>
					<div className={s.information}>
						{props.profile.fullName}
					</div>
				</div>
				<div className={s.info_block}>
					<div className={s.mini_title}>Ищу ли я работу :</div>
					<div className={s.information}>
						{props.profile.lookingForAJob ? "Да" : "Нет"}
					</div>
				</div>
				<div className={s.info_block}>
					<div className={s.mini_title}>О моих скиллах :</div>
					<div className={s.information}>
						{props.profile.lookingForAJobDescription}
					</div>
				</div>
				<div className={s.info_block}>
					<div className={s.mini_title}>Обо мне :</div>
					<div className={s.information}>
						{props.profile.aboutMe}
					</div>
				</div>
			</div>

			<div className={s.about_user_section}>
				<div
					style={{ position: "relative" }}
					className={s.title_line_wrapper}
				>
					<h5 className={s.about_title}>Мои контакты</h5>
					<div className={s.line}></div>
				</div>

				{Object.keys(props.profile.contacts).map((key) => {
					if (props.profile.contacts[key]) {
						return (
							<div key={key} className={s.info_block}>
								<p className={s.mini_title}>
									{key
										? key[0].toUpperCase() +
										  key.slice(1)
										: null}
									:
								</p>
								<a
									href={`${props.profile.contacts[key]}`}
									target="_blank"
									rel="noopener noreferrer"
									className={s.information}
								>
									{props.profile.contacts[key]}
								</a>
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

export default UserInfo;
