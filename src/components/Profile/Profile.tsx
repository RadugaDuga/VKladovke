import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Avatar from "./Avatar/Avatar";
import UserPhotos from "./UserPhotos/UserPhotos";
import Friends from "./Friends/Friends";
import type { Profile as ProfileType } from '../../redux/profile-reducer';

interface ProfileProps {
  isOwner: boolean;
  profile: ProfileType;
  status?: string;
  updateStatus?: (status: string) => void;
  savePhoto?: (photo: File) => void;
  saveProfileData?: (formData: any) => void;
}

const Profile: React.FC<ProfileProps> = ({ isOwner, profile }) => {
  if (!profile || !profile.contacts) {
    return <div>Загрузка профиля...</div>;
  }

  if (profile.fullName) {
    document.title = profile.fullName;
  }

  return (
    <div className={s.profile_wrapper}>
      <div className={s.left_line}>
        <Avatar isOwner={isOwner} profile={profile} />
        <Friends />
      </div>
      <div className={s.right_line}>
        <UserInfo isOwner={isOwner} profile={profile} />
        <UserPhotos />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
