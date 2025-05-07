import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Friend {
    id: number;
    name: string;
    photo: string;
}

interface FriendsState {
    friendsData: Friend[];
}

const initialState: FriendsState = {
    friendsData: [
        {
            id: 1,
            name: "Даниил",
            photo: `https://sun9-14.userapi.com/s/v1/ig2/usdWLdQytjehf6m3xpBNTeK2pNfDQhhJ3drMUfOVJDErojvTAxO9Li3jhVMQr3NUWSFx1yE5c_--fTOBgNqCz1pI.jpg?size=100x0&quality=96&crop=34,151,830,830&ava=1`,
        },
        {
            id: 2,
            name: "Дашка",
            photo: `https://sun9-25.userapi.com/s/v1/ig2/DiNCNxBt3JoVEDcJmIYbl5B3HkGjF59QN5SMnP2yUt9lsu8Vj_Qn15aMPoaN2fZI8vF-lGQ4YV2yAHcGU6ilzYGa.jpg?size=100x0&quality=96&crop=5,4,853,853&ava=1`,
        },
        {
            id: 3,
            name: "Бануа",
            photo: `https://sun9-59.userapi.com/s/v1/ig1/nPtamm5SglRXJF_IshJfYWihIM69KFanfEBgi5UBybBij9_JWlGa77DlyYp97_9Ys8NBPCA8.jpg?size=100x0&quality=96&crop=484,258,900,900&ava=1`,
        },
        {
            id: 4,
            name: "Александр",
            photo: `https://sun9-71.userapi.com/s/v1/if1/yQ6YFJFOIJ29m_CGXp0U1Fvc5USQDfaznDQQqA36_LuK2_Binw01sd6g7JaiZf7szun2s7uL.jpg?size=100x0&quality=96&crop=466,181,1259,1259&ava=1`,
        },
        {
            id: 5,
            name: "Эдгар",
            photo: `https://sun9-29.userapi.com/s/v1/if1/fS5Q-nFShPHvPh46DedrAwBlOAgYXRmAeeUmvIYaq1sVVlZlauOubuIyE3hi1mSp-Fv8o0UX.jpg?size=50x0&quality=96&crop=0,0,2047,2047&ava=1`,
        },
        {
            id: 6,
            name: "Кира",
            photo: `https://sun9-24.userapi.com/s/v1/if1/EyHLXfifk7U_z4-rlajU-KjUPgIL1lFOMJYtJLRh8xkPixAsLB5xfPBRMd-0R4FGA0pcBH-K.jpg?size=50x0&quality=96&crop=0,150,476,476&ava=1`,
        },
        {
            id: 7,
            name: "Лена",
            photo: `https://sun9-14.userapi.com/s/v1/ig2/zHgexHzzP0MZsmlPg-o-m8xkF34-Cp4TD6fbCWnbwihd3MB3N1swG-8tQcl8xSAYvfPSnOf7Sj45MDlhiqdGg46W.jpg?size=50x0&quality=96&crop=114,413,816,816&ava=1`,
        },
        {
            id: 8,
            name: "Солома",
            photo: `https://sun9-64.userapi.com/s/v1/if1/dL4WIa6Wwel0FTG2fvDif9x_75NyVieW2vPEwqZQR-MYqQDEeE622Y1hH-e3GEZvRA8P2w.jpg?size=100x0&quality=96&crop=71,207,1290,1290&ava=1`,
        },
    ],
};

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        deleteFriend: (state, action: PayloadAction<number>) => {
            state.friendsData = state.friendsData.filter(f => f.id !== action.payload);
        },
    },
});

export const { deleteFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
