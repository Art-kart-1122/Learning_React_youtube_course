import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import fetchingReducer from "./fetching-reducer";
import fullProfileReducer from "./fullProfile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    fetchingReducer,
    fullProfileReducer,
    authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;