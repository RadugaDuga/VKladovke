import { createSlice } from '@reduxjs/toolkit';
import { authMe } from "./auth-reducer";

const initialState = {
	initialized: false,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		initializedSuccess: (state) => {
			state.initialized = true;
		},
	},
});

export const { initializedSuccess } = appSlice.actions;

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(authMe());
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	});
};

export default appSlice.reducer;
