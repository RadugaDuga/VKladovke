
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Avatar from "./Avatar/Avatar";
import UserPhotos from "./UserPhotos/UserPhotos"
import Friends from "./Friends/Friends";
import src from "../../images/Favicons/mainFavicon.svg"


const Profile = (props) => {

	if(!props.profile.contacts){
		return null
	}

	document.title = props.profile.fullName;
	document.getElementById("favicon").href = src;

	return (
		
		<div className={s.profile_wrapper}>
			<div className={s.left_line}>
				<Avatar isOwner={props.isOwner} profile={props.profile} />
				<Friends/>
			</div>
			<div className={s.right_line}>
				<UserInfo isOwner={props.isOwner} profile={props.profile} />
				<UserPhotos/>
				<MyPostsContainer/>
			</div>
		</div>
	);
};



export default Profile;
