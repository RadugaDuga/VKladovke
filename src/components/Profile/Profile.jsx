import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Avatar from "./Avatar/Avatar";
import UserPhotos from "./UserPhotos/UserPhotos"
import Friends from "./Friends/Friends";



const Profile = (props) => {
	if(props.profile){
		document.title = props.profile.fullName === 'RadugaDuga' ? "Георгий Букиа": props.profile.fullName
		console.log(props.profile.fullName);
	}
	console.log(props.profile);
	return (
		
		<div className={s.profile_wrapper}>
			<div className={s.left_line}>
				<Avatar isOwner={props.isOwner} profile={props.profile} />
				<Friends/>
			</div>
			<div className={s.right_line}>
				<UserInfo 
					profile={props.profile} 
					
					// эти два пропса нужны для компоненты ProfileStatusWithHooks и я заменил их на хуки в самой компоненте 
					updateStatus={props.updateStatus} 
					status={props.status} 
				/>
				<UserPhotos/>
				<MyPostsContainer/>
			</div>
		</div>
	);
};



// 'https://i.ytimg.com/vi/lcdbxwErBRY/maxresdefault.jpg'
export default Profile;
