import {setIsFetchingActionCreator} from "./fetching-reducer";
import {fullProfileAPI} from '../API/fullProfileAPI'

const SET_PROFILE = "SET-PROFILE";
const SET_PROFILE_STATUS ="SET-PROFILE-STATUS";



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
        case SET_PROFILE_STATUS: {
            console.log(action.newStatus);
            return {
                ...state,
                fullProfile: {
                    ...state.fullProfile,
                    Profilestatus: action.newStatus
                }
            }
        }
        default: {
            return state
        }
    }
}




export default fullProfileReducer;

export const setProfileActionCreator = (profile) => ({type: SET_PROFILE, profile: profile})
export const setProfileStatusActionCreator = (newStatus) => ({type: SET_PROFILE_STATUS, newStatus: newStatus})

export const getFullProfileThunkCreator = (userId) => (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));

    return fullProfileAPI.getFullProfile(userId).then(response => {

        dispatch(setProfileActionCreator(response.profile));
        dispatch(setIsFetchingActionCreator(false));
    })
}

export const updateProfileStatusThunkCreator = (userId, newStatus) => (dispatch) => {

    return fullProfileAPI.updateProfileStatus(userId, newStatus).then( response => {
        if(response.resultCode === 0) {
            dispatch(setProfileStatusActionCreator(newStatus));
        }
    })
}
