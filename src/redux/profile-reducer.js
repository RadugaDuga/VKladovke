import { createSlice } from '@reduxjs/toolkit';
import { profileAPI } from "../API/api";
import { authMe } from "./auth-reducer";

let today = new Date();
const dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const yyyy = today.getFullYear();
const mm = today.toLocaleString("default", { month: "short" });
today = `${dd} ${mm} ${yyyy}`;

const initialState = {
	postsData: [
		{
			postId: 1,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: `Мария Кюри изобрела теорию радиоактивности, лечение радиоактивности и смерть от радиоактивности.`,
			likes_count: 1,
			comments_count: 3,
			reposts_count: 2,
			views_count: 41,
			date: "18 ноя 2020",
			liked: true,
		},

		{
			postId: 2,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "До изобретения аэроплана братьями Райт, те, кто желал летать, должны были проглотить 200 фунтов гелия.",
			likes_count: 71,
			comments_count: 9,
			reposts_count: 11,
			views_count: 251,
			date: "4 сен 2020",
			liked: false,
		},

		{
			postId: 3,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "Парадокс кота Шрёдингера описывает ситуацию, в которой кот в ящике должен, во всех отношениях, рассматриваться как одновременно живой и мёртвый. Шрёдингер придумал этот парадокс, как оправдание для убийства котов.",
			likes_count: 16,
			comments_count: null,
			reposts_count: 8,
			views_count: 63,
			date: "4 сен 2020",
			liked: false,
		},

		{
			postId: 4,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "В викторианской Англии, незнатный человек не имел права смотреть прямо на королеву, так как считалось, что бедняки могут украсть мысли. Сегодня наука доказала, что лишь менее 4% бедняков на это способны.",
			likes_count: 27,
			comments_count: 1,
			reposts_count: 1,
			views_count: 93,
			date: "7 сен 2020",
			liked: false,
		},

		{
			postId: 5,
			name: "Георгий Букиа",
			image:
				"https://sun1-84.userapi.com/impf/c851532/v851532730/1c0cd3/gi0x6qB-0_c.jpg?size=50x0&quality=88&crop=391,0,1365,1365&sign=917050206a95d7f3ceff1412b6075e7b&ava=1",
			text: "Сны - это способ подсознания напомнить человеку, что ему нужно прийти в школу голышом и лишиться зубов.",
			likes_count: null,
			comments_count: null,
			repost_count: null,
			views_count: 0,
			date: "21 сен 2020",
			liked: false,
		},
	],
	profile: {
		photos: {
			large: null,
			small: null,
		},
	},
	status: "",
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.postsData.unshift({
				postId: Math.random(2, 99999999999999999),
				name: "Георгий Букиа",
				image: state.profile.photos.large,
				text: action.payload,
				likes_count: Math.floor(Math.random() * 20),
				comments_count: Math.floor(Math.random() * 10),
				repost_count: Math.floor(Math.random() * 98),
				views_count: Math.floor(Math.random() * 98),
				date: today,
			});
		},
		deletePost: (state, action) => {
			state.postsData = state.postsData.filter((p) => p.postId !== action.payload);
		},
		toggleLikePost: (state, action) => {
			state.postsData = state.postsData.map(post => {
				if (post.postId === action.payload) {
					if (post.liked) {
						return { ...post, liked: false, likes_count: --post.likes_count };
					} else {
						return { ...post, liked: true, likes_count: ++post.likes_count };
					}
				}
				return post;
			});
		},
		setUserProfile: (state, action) => {
			state.profile = action.payload;
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		savePhotoSuccess: (state, action) => {
			state.profile.photos = action.payload;
		},
		saveProfileDataSuccess: (state, action) => {
			state.profile = { ...state.profile, ...action.payload };
		},
	},
});

export const {
	addPost,
	deletePost,
	toggleLikePost,
	setUserProfile,
	setStatus,
	savePhotoSuccess,
	saveProfileDataSuccess,
} = profileSlice.actions;

export const getUserProfile = (userId) => async (dispatch) => {
	let response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const savePhoto = (photo) => async (dispatch) => {
	let response = await profileAPI.savePhoto(photo);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
		dispatch(authMe());
	}
};

export const saveProfileData = (formData) => async (dispatch, getState) => {
	let response = await profileAPI.saveProfileData(formData);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(getState().auth.id));
	} else {
		return Promise.reject(response.data.messages[0]);
	}
};

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export default profileSlice.reducer;
