import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfileData } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import type { RootState, AppDispatch } from '../../redux/redux-store';
import type { Profile as ProfileType } from '../../redux/profile-reducer';

const ProfileContainer: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const profile = useSelector((state: RootState) => state.profilePage.profile as ProfileType);
  const status = useSelector((state: RootState) => state.profilePage.status);
  const authId = useSelector((state: RootState) => state.auth.id);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    const id = userId ? Number(userId) : authId;
    if (id) {
      dispatch(getUserProfile(id) as any);
      dispatch(getStatus(id) as any);
    }
  }, [dispatch, userId, authId]);

  return (
    <Profile
      isOwner={!userId}
      profile={profile}
      status={status}
      updateStatus={status => dispatch(updateStatus(status) as any)}
      savePhoto={photo => dispatch(savePhoto(photo) as any)}
      saveProfileData={formData => dispatch(saveProfileData(formData) as any)}
    />
  );
};

export default ProfileContainer;
