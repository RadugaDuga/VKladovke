import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem";
import Paginator from "./Paginator";
import type { UserType } from '../../redux/users-reducer';

export interface UsersProps {
  users: UserType[];
  pageSize: number;
  usersTotalCount: number;
  currentPageNum: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onPageChanged: (pageNumber: number) => void;
  isFetching: boolean;
  followingProgress: number[];
}

const Users: React.FC<UsersProps> = (props) => {
  return (
    <div className={s.content}>
      <section>
        <div className={s.users_counter}>
          Пользователи <span className={s.count}>{props.usersTotalCount}</span>
        </div>

        <div className={s.users_wrapper}>
          <Paginator
            usersTotalCount={props.usersTotalCount}
            pageSize={props.pageSize}
            currentPageNum={props.currentPageNum}
            onPageChanged={props.onPageChanged}
          />

          {props.users.map((u) => (
            <UserItem
              key={u.id}
              follow={props.follow}
              unfollow={props.unfollow}
              followingProgress={props.followingProgress}
              user={u}
            />
          ))}
        </div>
      </section>

      <div className={s.sidebar}></div>
    </div>
  );
};

export default Users;
