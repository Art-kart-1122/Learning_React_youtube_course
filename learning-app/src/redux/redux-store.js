import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import fetchingReducer from "./fetching-reducer";
import fullProfileReducer from "./fullProfile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    fetchingReducer,
    fullProfileReducer,
    authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;