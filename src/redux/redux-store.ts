import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import groupsReducer from './groups-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import friendsReducer from './friends-reducer';

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    groupsPage: groupsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    friends: friendsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

window.store = store;
export default store;
