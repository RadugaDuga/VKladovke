import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfileData } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

const ProfileContainer = () => {
  const { userId } = useParams();
  const profile = useSelector(state => state.profilePage.profile);
  const status = useSelector(state => state.profilePage.status);
  const authId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = userId || authId;
    if (id) {
      dispatch(getUserProfile(id));
      dispatch(getStatus(id));
    }
  }, [dispatch, userId, authId]);

  return (
    <Profile
      isOwner={!userId}
      profile={profile}
      status={status}
      updateStatus={status => dispatch(updateStatus(status))}
      savePhoto={photo => dispatch(savePhoto(photo))}
      saveProfileData={formData => dispatch(saveProfileData(formData))}
    />
  );
};

export default ProfileContainer;
