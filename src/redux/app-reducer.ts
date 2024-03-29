import { authMe } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export type initialStateType = {
	initialized: boolean
}

let initialState: initialStateType = {
	initialized: false,
};

export const appReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			};

		default:
			return state;
	}
};

type initializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => ({
	type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch:any) => {
	let promise = dispatch(authMe());

	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	});
};

export default appReducer;
