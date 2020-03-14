import * as axios from "axios";
import {myUserDataAPI} from "../API/myUserDataAPI";

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
export default authReducer;