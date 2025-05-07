import { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '../../../../redux/profile-reducer';



const ProfileStatusWithHooks = (props) => {
	
	let dispatch = useDispatch()
	const status = useSelector( state => state.profilePage.status);

	const toggleEditMode = () => {
		if (editMode) {
			setEditMode(false);
			dispatch(updateStatus(NewStatus));
		} else {
			setEditMode(true);
		}
	};

	let [editMode, setEditMode] = useState(false);
	let [NewStatus, setNewStatus] = useState(status);

	const onStatusChange = (e) => {
		setNewStatus(e.currentTarget.value);
	};

	useEffect(() => {
		setNewStatus(status);
	}, [status]);

	return (
		<>
			{editMode ? (
				<div className={s.input_status_wrapper}>
					<input
						value={NewStatus}
						onChange={onStatusChange}
						onBlur={toggleEditMode}
						className={s.inputStatus}
						autoFocus={true}
					></input>
				</div>
			) : (
				<div onClick={toggleEditMode} className={s.status}>
					{status || <div className={s.no_status}>yстановить статус</div>}
				</div>
			)}
		</>
	);
};

export default ProfileStatusWithHooks;
