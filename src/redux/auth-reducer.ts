import { createSlice } from '@reduxjs/toolkit';
import { authAPI, profileAPI, securityAPI } from "../API/api";

const initialState = {
  id: 0 as number,
  email: "" as string,
  login: "" as string,
  isAuth: false as boolean,
  authUserPhoto: "" as string,
  captchaURL: "" as string
};

const authSlice = createSlice({
  name: 'auth',
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
  },
});

export const { setAuthUserData, setAuthUserPhoto, getCaptchaURLSuccess } = authSlice.actions;

export const authMe = () => async (dispatch: any, getState: any) => {
  let response = await authAPI.getMe();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData({ id, email, login, isAuth: true }));
    const authProfile = await profileAPI.getProfile(getState().auth.id);
    dispatch(setAuthUserPhoto(authProfile.data.photos.small));
  }
};

export const getCaptchaURL = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaURL();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaURLSuccess(captchaUrl));
};

export const login = (email: any, password: any, rememberMe: any, captchaUrl: any) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe, captchaUrl);
  if (response.data.resultCode === 0) {
    dispatch(authMe());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaURL());
    }
    let action = {
      type: "login/stopSubmit",
      payload: {
        _error: "Вы ввели неверный логин или пароль",
      },
    };
    dispatch(action);
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData({ id: 0, email: "", login: "", isAuth: false }));
  }
};

export default authSlice.reducer;
