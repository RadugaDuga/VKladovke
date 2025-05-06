import React from "react";
import s from "./ProfileDataForm.module.css";
import { useForm } from "react-hook-form";

const ProfileDataForm = ({ onSubmit, profile, error, initialValues, toggleEditMode }) => {
	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
			{error && <div className={s.error}><b>Warning! </b>{error.replace("Invalid url format", "неверный формат URL")}</div>}
			<div className={s.info_block}>
				<p className={s.info_subtitle}>Мое имя:</p>
				<input
					{...register("fullName", { required: "Введите имя" })}
					placeholder={"Ваше имя"}
					className={s.input_box}
					autoFocus={true}
				/>
				{errors.fullName && <span style={{ color: 'red', fontSize: 12 }}>{errors.fullName.message}</span>}
			</div>

			<div className={s.info_block}>
				<p className={s.info_subtitle}>Я ищу работу:</p>
				<input
					type="checkbox"
					{...register("lookingForAJob")}
					className={s.input_box}
				/>
			</div>

			<div className={s.info_block}>
				<p className={s.info_subtitle}>Описание моих скиллов:</p>
				<textarea
					{...register("lookingForAJobDescription")}
					placeholder={"Какую работу я ищу"}
					className={s.input_box}
				/>
			</div>

			<div className={s.info_block}>
				<p className={s.info_subtitle}>Обо мне:</p>
				<textarea
					{...register("aboutMe")}
					placeholder={"Расскажите о себе"}
					className={s.input_box}
				/>
			</div>

			{profile && profile.contacts && Object.keys(profile.contacts).map(key => (
				<div key={key} className={s.info_block}>
					<p className={s.info_subtitle}>{key ? key[0].toUpperCase() + key.slice(1) : null}:</p>
					<input
						{...register(`contacts.${key}`)}
						className={s.input_box}
					/>
				</div>
			))}

			<button className={s.button}>Сохранить</button>
		</form>
	);
};

export default ProfileDataForm;