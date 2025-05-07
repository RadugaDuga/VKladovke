import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Friends.module.css";
import type { RootState } from '../../../redux/redux-store';
import type { Friend } from '../../../redux/friends-reducer';

const Friends: React.FC = () => {
  const friends = useSelector((state: RootState) => state.friends.friendsData as Friend[]);
  const dispatch = useDispatch();

  let friendsElements = friends.map((f) => (
    <div
      onClick={() => {
        dispatch({ type: "DELETE_FRIEND", id: f.id });
      }}
      key={f.id}
      className={s.friend_item}
    >
      <div>
        <img src={f.photo} className={s.image} alt="" />
      </div>
      <div className={s.name}>{f.name}</div>
    </div>
  ));

  if (friends.length === 0) return null;

  return (
    <div className={s.container}>
      <div className={s.header}>
        Друзья <span className={s.counter}>{friends.length}</span>
      </div>
      <div className={s.friends}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
