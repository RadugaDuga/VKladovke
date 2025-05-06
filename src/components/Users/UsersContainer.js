import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Users from "./Users";
import { follow, unfollow, requestUsers } from "../../redux/users-reducer";

const UsersContainer = () => {
  const users = useSelector(state => state.usersPage.users);
  const pageSize = useSelector(state => state.usersPage.pageSize);
  const usersTotalCount = useSelector(state => state.usersPage.usersTotalCount);
  const currentPageNum = useSelector(state => state.usersPage.currentPageNum);
  const isFetching = useSelector(state => state.usersPage.isFetching);
  const followingProgress = useSelector(state => state.usersPage.followingProgress);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestUsers(currentPageNum, pageSize));
  }, [dispatch, currentPageNum, pageSize]);

  const onPageChanged = (pageNumber) => {
    dispatch(requestUsers(pageNumber, pageSize));
  };

  return (
    <Users
      users={users}
      pageSize={pageSize}
      usersTotalCount={usersTotalCount}
      currentPageNum={currentPageNum}
      follow={userId => dispatch(follow(userId))}
      unfollow={userId => dispatch(unfollow(userId))}
      onPageChanged={onPageChanged}
      isFetching={isFetching}
      followingProgress={followingProgress}
    />
  );
};

export default UsersContainer;