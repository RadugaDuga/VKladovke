import { createSlice } from "@reduxjs/toolkit";
import { authAPI, profileAPI, securityAPI } from "../API/api";

// Типизация для Auth State
interface AuthState {
	id: number;
	email: string;
	login: string;
	isAuth: boolean;
	authUserPhoto: string;
	captchaURL: string;
	error?: string;
}

const initialState: AuthState = {
	id: 0,
	email: "",
	login: "",
	isAuth: false,
	authUserPhoto: "",
	captchaURL: "",
	error: undefined,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuthUserData: (state, action) => {
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.login = action.payload.login;
			state.isAuth = action.payload.isAuth;
		},
		setAuthUserPhoto: (state, action) => {
			state.authUserPhoto = action.payload;
		},
		getCaptchaURLSuccess: (state, action) => {
			state.captchaURL = action.payload;
		},
		setAuthError: (state, action) => {
			state.error = action.payload;
		},
		clearAuthError: (state) => {
			state.error = undefined;
		},
	},
});

export const {
	setAuthUserData,
	setAuthUserPhoto,
	getCaptchaURLSuccess,
	setAuthError,
	clearAuthError,
} = authSlice.actions;

export const authMe = () => async (dispatch: any, getState: any) => {
	const response = await authAPI.getMe();
	if (response.data.resultCode === 0) {
		const { id, login, email } = response.data.data;
		dispatch(setAuthUserData({ id, email, login, isAuth: true }));
		const authProfile = await profileAPI.getProfile(getState().auth.id);
		dispatch(setAuthUserPhoto(authProfile.data.photos.small));
		dispatch(clearAuthError());
	}
};

export const getCaptchaURL = () => async (dispatch: any) => {
	const response = await securityAPI.getCaptchaURL();
	const captchaUrl = response.data.url;
	dispatch(getCaptchaURLSuccess(captchaUrl));
};

export const login =
	(
		email: string,
		password: string,
		rememberMe: boolean,
		captcha: string | null = null
	) =>
	async (dispatch: any) => {
		const response = await authAPI.login(
			email,
			password,
			rememberMe,
			captcha
		);
		if (response.data.resultCode === 0) {
			dispatch(authMe());
			dispatch(clearAuthError());
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaURL());
			}
			dispatch(setAuthError("Вы ввели неверный логин или пароль"));
		}
	};

export const logout = () => async (dispatch: any) => {
	const response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(
			setAuthUserData({ id: 0, email: "", login: "", isAuth: false })
		);
		dispatch(setAuthUserPhoto(""));
		dispatch(clearAuthError());
	}
};

export default authSlice.reducer;
