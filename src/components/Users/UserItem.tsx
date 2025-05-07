import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import type { UserType } from '../../redux/users-reducer';

interface UserItemProps {
  user: UserType;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  followingProgress: number[];
}

const UserItem: React.FC<UserItemProps> = ({ user, follow, unfollow, followingProgress }) => {
  return (
    <div className={s.user_wrapper}>
      <img
        className={s.avatar}
        src={user.photos.small ? user.photos.large : "https://vk.com/images/camera_200.png?ava=1"}
        alt=""
      />
      <div className={s.information}>
        <NavLink to={"/profile/" + user.id}>{user.name}</NavLink>
        {user.status ? <p>{user.status}</p> : null}
        <p className={s.message}> Написать сообщение </p>
      </div>
      {user.followed ? (
        <button
          disabled={followingProgress.some(id => id === user.id)}
          onClick={() => {
            unfollow(user.id);
          }}
          className={s.unfollow}
        >
          Удалить из друзей
        </button>
      ) : (
        <button
          disabled={followingProgress.some(id => id === user.id)}
          onClick={() => {
            follow(user.id);
          }}
          className={s.follow}
        >
          Добавить в друзья
        </button>
      )}
    </div>
  );
};

export default UserItem;
