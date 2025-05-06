import { createSlice } from '@reduxjs/toolkit';
import { usersAPI } from "./../API/api";

const initialState = {
	users: [],
	pageSize: 100,
	usersTotalCount: 0,
	currentPageNum: 1,
	followingProgress: [],
	isFetching: false,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		followSuccess(state, action) {
			state.users = state.users.map((u) => {
				if (u.id === action.payload) {
					return { ...u, followed: true };
				}
				return u;
			});
		},
		unfollowSuccess(state, action) {
			state.users = state.users.map((u) => {
				if (u.id === action.payload) {
					return { ...u, followed: false };
				}
				return u;
			});
		},
		setUsers(state, action) {
			state.users = action.payload;
		},
		setCurrentPageNum(state, action) {
			state.currentPageNum = action.payload;
		},
		setUsersTotalCount(state, action) {
			state.usersTotalCount = action.payload;
		},
		toggleIsFetching(state, action) {
			state.isFetching = action.payload;
		},
		toggleFollowingProgress(state, action) {
			if (action.payload.progress) {
				state.followingProgress.push(action.payload.userID);
			} else {
				state.followingProgress = state.followingProgress.filter(
					(id) => id !== action.payload.userID
				);
			}
		},
	},
});

export const {
	followSuccess,
	unfollowSuccess,
	setUsers,
	setCurrentPageNum,
	setUsersTotalCount,
	toggleIsFetching,
	toggleFollowingProgress,
} = usersSlice.actions;

export const requestUsers = (currentPageNum, pageSize) => async (dispatch) => {
	let response = await usersAPI.getUsersData(currentPageNum, pageSize);
	dispatch(setUsers(response.items));
	dispatch(setUsersTotalCount(response.totalCount));
};

export const follow = (userID) => async (dispatch) => {
	dispatch(toggleFollowingProgress({ progress: true, userID }));

	let response = await usersAPI.follow(userID);
	if (response.data.resultCode === 0) {
		dispatch(followSuccess(userID));
	}
	dispatch(toggleFollowingProgress({ progress: false, userID }));
};

export const unfollow = (userID) => async (dispatch) => {
	dispatch(toggleFollowingProgress({ progress: true, userID }));

	let response = await usersAPI.unfollow(userID);
	if (response.data.resultCode === 0) {
		dispatch(unfollowSuccess(userID));
	}
	dispatch(toggleFollowingProgress({ progress: false, userID }));
};

export default usersSlice.reducer;
