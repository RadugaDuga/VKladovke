import React, { useState , useRef} from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import s from "./CroppAvatar.module.css";
import defaultSrc from "../../../../images/defaultSrc.svg";
import { useDispatch } from "react-redux";
import { setAuthUserPhoto } from "../../../../redux/auth-reducer";

export const CroppAvatar = ({ avatar, reff, setCroppMode }) => {
	const dispatch = useDispatch();

	const [cropData, setCropData] = useState();


	const getCropData = (props) => {
		dispatch(setAuthUserPhoto(cropData))
		setCroppMode(false)
	};
	const cropperRef = useRef()
	const onCrop = () => {
		const cropper = cropperRef.current.cropper;
		setCropData(cropper.getCroppedCanvas().toDataURL());
	  };

	return (
		<div className={s.backdrop}>
			<div className={s.global_wrapper}>
				<h1 className={s.title}>Выбор миниатюры</h1>
				<div className={s.content_box} ref={reff}>
					<div className={s.message}>
						Выберите область для маленьких фотографий. Выбранная миниатюра будет
						использоваться в новостях, личных сообщениях и комментариях.
					</div>
					<section className={s.cropp_tools_container}>
						<div className={s.cropper_wrapper}>
							<Cropper
								className={s.cropper}
								zoomTo={0}
								aspectRatio={1}
								src={avatar}
								viewMode={1}
								guides={false}
								guideLines={false}
								minCropBoxHeight={200}
								minCropBoxWidth={200}
								responsive={true}
								autoCropArea={1}
								checkOrientation={false}
								crop={onCrop}
								ref={cropperRef}
							
							/>
						</div>

						<div className={s.image_container}>
							<img className={s.cropped} src={cropData || defaultSrc} alt="" />
							<img
								className={s.cropped_mini}
								src={cropData || defaultSrc}
								alt=""
							/>
						</div>
					</section>

					<button className={s.button} onClick={getCropData}>
						Сохранить изменения
					</button>
				</div>
			</div>
		</div>
	);
};

export default CroppAvatar;
