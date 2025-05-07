import React, {useState, useRef} from "react";
import s from "./Avatar.module.css";
import iconClock from "../../../images/Profile_Images/iconClock.svg";
import iconMoney from "../../../images/Profile_Images/iconMoney.svg";
import { useDispatch } from "react-redux";
import { savePhoto } from "../../../redux/profile-reducer";
import arrow from "../../../images/Common/arrow.png";
import spinner from "../../../images/Common/spinner.png";
import smile from "../../../images/Common/smile.png";
import { CroppAvatar } from './CroppAvatar/CroppAvatar';
import useClickOutside from '../../common/userHooks/useClickOutside';




const Avatar = (props) => {

	let dispatch = useDispatch();
	const [croppMode, setCroppMode] = useState(false);
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length > 0) {
			dispatch(savePhoto(e.target.files[0]));
		}
	}
	const content = useRef()
	useClickOutside(()=>{setCroppMode(false)}, content)



	return (
		<div>
			{croppMode ? <CroppAvatar setCroppMode={setCroppMode} reff={content} avatar={props.profile.photos.large}/>:null}
			<div className={s.avatar_wrapper}>
				<div className={s.imageWrapper}>
					<img
						className={s.image}
						src={props.profile.photos.large ? props.profile.photos.large : "https://vk.com/images/camera_200.png" }
						alt="^__^"
					/>
					{props.isOwner ? (
						<div className={s.hoverTab}>
							<input
								className={s.input}
								id="file"
								type="file"
								onChange={onMainPhotoSelected}
							/>
							<div>
								<label className={s.label} htmlFor="file">
									<img className={s.iconForBtn} src={arrow} alt="" />
									Обновить фотографию
								</label>
							</div>
							<div>
								<button onClick={()=>{setCroppMode(true)}} className={s.label} >
									<img className={s.iconForBtn} style={{marginLeft:"-1.5px"}} src={spinner} alt="" />
									Изменить миниатюру
								</button>
							</div>
							<div>
								<label className={s.label} >
									<img className={s.iconForBtn} style={{marginLeft:"-1.5px"}} src={smile} alt="" />
									Добавить еффекты
								</label>
							</div>
						
						</div>
					) : null}
				</div>

				{props.isOwner && <button className={s.button}>Редактировать</button>}

				<button style={({marginTop:"12px"})} className={s.secondary_button}>
					<img alt="^__^" className={s.icon} src={iconClock} />
					Воспоминания
				</button>

				<button className={s.secondary_button}>
					<img alt="^__^" className={s.icon} src={iconMoney} />
					<p className={s.button_name}>Денежные переводы</p>
				</button>
			</div>
		</div>
	);
}

export default Avatar;
