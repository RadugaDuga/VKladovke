import { authMe } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

let initialState = {
	initialized: false,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			};

		default:
			return state;
	}
};

export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(authMe());

	Promise.all([promise]).then((zatem) => {
		dispatch(initializedSuccess());
	});
};

export default appReducer;