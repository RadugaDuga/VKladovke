import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import groupsReducer from "./groups-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import appReducer from './app-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import friendsReducer from "./friends-reducer";


const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	groupsPage: groupsReducer,
	usersPage: usersReducer,
	auth: authReducer,
    form: formReducer,
	app: appReducer,
	friends:friendsReducer

});



let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
