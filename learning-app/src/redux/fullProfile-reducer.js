import {setIsFetchingActionCreator} from "./fetching-reducer";
import {fullProfileAPI} from '../API/fullProfileAPI'

const SET_PROFILE = "SET-PROFILE";





const initialState = {
    fullProfile: {}
}

const fullProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                fullProfile: action.profile
            }
        }
        default: {
            return state
        }
    }
}




export default fullProfileReducer;

export const setProfileActionCreator = (profile) => ({type: SET_PROFILE, profile: profile})

export const getFullProfileThunkCreator = (userId) => (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));

    return fullProfileAPI.getFullProfile(userId).then(response => {

        dispatch(setProfileActionCreator(response.profile));
        dispatch(setIsFetchingActionCreator(false));
    })
}
