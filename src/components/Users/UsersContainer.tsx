import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Users from "./Users";
import { follow, unfollow, requestUsers } from "../../redux/users-reducer";
import type { RootState, AppDispatch } from '../../redux/redux-store';

interface UsersContainerProps {}

const UsersContainer: React.FC<UsersContainerProps> = () => {
  const users = useSelector((state: RootState) => state.usersPage.users);
  const pageSize = useSelector((state: RootState) => state.usersPage.pageSize);
  const usersTotalCount = useSelector((state: RootState) => state.usersPage.usersTotalCount);
  const currentPageNum = useSelector((state: RootState) => state.usersPage.currentPageNum);
  const isFetching = useSelector((state: RootState) => state.usersPage.isFetching);
  const followingProgress = useSelector((state: RootState) => state.usersPage.followingProgress);
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestUsers(currentPageNum, pageSize) as any);
  }, [dispatch, currentPageNum, pageSize]);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize) as any);
  };

  return (
    <Users
      users={users}
      pageSize={pageSize}
      usersTotalCount={usersTotalCount}
      currentPageNum={currentPageNum}
      follow={(userId: number) => dispatch(follow(userId) as any)}
      unfollow={(userId: number) => dispatch(unfollow(userId) as any)}
      onPageChanged={onPageChanged}
      isFetching={isFetching}
      followingProgress={followingProgress}
    />
  );
};

export default UsersContainer;