import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from "../API/api";
import { AppDispatch } from './store'; // Импортируйте тип dispatch из вашего store, если есть

// Тип пользователя
export interface UserType {
	id: number;
	name: string;
	status: string;
	photos: {
		small: string | null;
		large: string | null;
	};
	followed: boolean;
	// ...добавьте другие поля, если есть
}

// Тип состояния
interface UsersState {
	users: UserType[];
	pageSize: number;
	usersTotalCount: number;
	currentPageNum: number;
	followingProgress: number[];
	isFetching: boolean;
}

const initialState: UsersState = {
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
		followSuccess(state, action: PayloadAction<number>) {
			state.users = state.users.map((u) => {
				if (u.id === action.payload) {
					return { ...u, followed: true };
				}
				return u;
			});
		},
		unfollowSuccess(state, action: PayloadAction<number>) {
			state.users = state.users.map((u) => {
				if (u.id === action.payload) {
					return { ...u, followed: false };
				}
				return u;
			});
		},
		setUsers(state, action: PayloadAction<UserType[]>) {
			state.users = action.payload;
		},
		setCurrentPageNum(state, action: PayloadAction<number>) {
			state.currentPageNum = action.payload;
		},
		setUsersTotalCount(state, action: PayloadAction<number>) {
			state.usersTotalCount = action.payload;
		},
		toggleIsFetching(state, action: PayloadAction<boolean>) {
			state.isFetching = action.payload;
		},
		toggleFollowingProgress(
			state,
			action: PayloadAction<{ progress: boolean; userID: number }>
		) {
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

// Типизация thunk'ов

type UsersAPIResponse = {
	items: UserType[];
	totalCount: number;
	error?: string;
};

type FollowUnfollowResponse = {
	data: { resultCode: number };
};

export const requestUsers =
	(currentPageNum: number, pageSize: number) =>
	async (dispatch: AppDispatch) => {
		const response: UsersAPIResponse = await usersAPI.getUsersData(currentPageNum, pageSize);
		dispatch(setUsers(response.items));
		dispatch(setUsersTotalCount(response.totalCount));
	};

export const follow =
	(userID: number) =>
	async (dispatch: AppDispatch) => {
		dispatch(toggleFollowingProgress({ progress: true, userID }));

		const response: FollowUnfollowResponse = await usersAPI.follow(userID);
		if (response.data.resultCode === 0) {
			dispatch(followSuccess(userID));
		}
		dispatch(toggleFollowingProgress({ progress: false, userID }));
	};

export const unfollow =
	(userID: number) =>
	async (dispatch: AppDispatch) => {
		dispatch(toggleFollowingProgress({ progress: true, userID }));

		const response: FollowUnfollowResponse = await usersAPI.unfollow(userID);
		if (response.data.resultCode === 0) {
			dispatch(unfollowSuccess(userID));
		}
		dispatch(toggleFollowingProgress({ progress: false, userID }));
	};

export default usersSlice.reducer;
