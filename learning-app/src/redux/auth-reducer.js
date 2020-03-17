
import {myUserDataAPI} from "../API/myUserDataAPI";
import {setProfileStatusActionCreator} from "./fullProfile-reducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";


const initialState = {
    id: null,
    fullName: null,
    location: null,
    isAuth: false
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData
            }
        }
        default: {
            return state;
        }
    }
}


export const setUserDataActionCreator = (userData) => ({type:SET_USER_DATA, userData: userData})

export const getMyUserDataThunkCreator = (pass) => (dispatch) => {

    return myUserDataAPI.getMyUserData(pass).then(response => {
        dispatch(setUserDataActionCreator(response));
    })
}

export const loginThunkCreator = (data) => (dispatch) => {
    return myUserDataAPI.login(data).then(response => {
        if(response.resultCode === 0) {
            dispatch(getMyUserDataThunkCreator('yes'));
        }
        else {
            dispatch(stopSubmit("login", {_error:'Wrong login or password'}))
        }
    })
}
export const logoutThunkCreator = () => (dispatch) => {
    return myUserDataAPI.logout().then(response => {
        if(response.resultCode === 0) {
            dispatch(setUserDataActionCreator(initialState));
        }
    })
}
export default authReducer;