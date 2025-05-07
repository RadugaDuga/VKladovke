import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { profileAPI } from "../API/api";
import { authMe } from "./auth-reducer";

interface Photos {
	large: string | null;
	small: string | null;
}

interface Profile {
	fullName?: string;
	aboutMe?: string;
	lookingForAJob?: boolean;
	lookingForAJobDescription?: string;
	contacts?: { [key: string]: string };
	photos: Photos;
}

interface Post {
	postId: number;
	name: string;
	image: string;
	text: string;
	likes_count: number | null;
	comments_count: number | null;
	reposts_count?: number | null;
	repost_count?: number | null;
	views_count: number | null;
	date: string;
	liked?: boolean;
}

interface ProfileState {
	postsData: Post[];
	profile: Profile;
	status: string;
}

let today = new Date();
const dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const yyyy = today.getFullYear();
const mm = today.toLocaleString("default", { month: "short" });
const todayStr = `${dd} ${mm} ${yyyy}`;

const initialState: ProfileState = {
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
		addPost: (state, action: PayloadAction<string>) => {
			state.postsData.unshift({
				postId: Math.random(),
				name: "Георгий Букиа",
				image: state.profile.photos.large || "",
				text: action.payload,
				likes_count: Math.floor(Math.random() * 20),
				comments_count: Math.floor(Math.random() * 10),
				repost_count: Math.floor(Math.random() * 98),
				views_count: Math.floor(Math.random() * 98),
				date: todayStr,
			});
		},
		deletePost: (state, action: PayloadAction<number>) => {
			state.postsData = state.postsData.filter((p) => p.postId !== action.payload);
		},
		toggleLikePost: (state, action: PayloadAction<number>) => {
			state.postsData = state.postsData.map(post => {
				if (post.postId === action.payload) {
					if (post.liked) {
						return { ...post, liked: false, likes_count: post.likes_count !== null ? post.likes_count - 1 : 0 };
					} else {
						return { ...post, liked: true, likes_count: post.likes_count !== null ? post.likes_count + 1 : 1 };
					}
				}
				return post;
			});
		},
		setUserProfile: (state, action: PayloadAction<Profile>) => {
			state.profile = action.payload;
		},
		setStatus: (state, action: PayloadAction<string>) => {
			state.status = action.payload;
		},
		savePhotoSuccess: (state, action: PayloadAction<Photos>) => {
			state.profile.photos = action.payload;
		},
		saveProfileDataSuccess: (state, action: PayloadAction<Partial<Profile>>) => {
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

export const getUserProfile = (userId: number) => async (dispatch: any) => {
	let response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const savePhoto = (photo: File) => async (dispatch: any) => {
	let response = await profileAPI.savePhoto(photo);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
		dispatch(authMe());
	}
};

export const saveProfileData = (formData: any) => async (dispatch: any, getState: any) => {
	let response = await profileAPI.saveProfileData(formData);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(getState().auth.id));
	} else {
		return Promise.reject(response.data.messages[0]);
	}
};

export const updateStatus = (status: string) => async (dispatch: any) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export default profileSlice.reducer;
