
import {usersAPI} from "../API/usersAPI";
import {setIsFetchingActionCreator} from "./fetching-reducer";


const FOLLOW = "FOLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS ="SET_USERS";
const SET_TOTAL_COUNT_ITEMS = "SET_TOTAL_COUNT_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_COUNT_ON_PAGE_ITEMS = "SET_COUNT_ON_PAGE_ITEMS";


const initialState = {
    users: [],
    totalCountItems: 29,
    countOnPageItems: 2,
    currentPage: 1
}


const usersReducer = (state=initialState,action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.id) {
                        debugger
                        return {...u, status: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.id) {
                        return {...u, status: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_TOTAL_COUNT_ITEMS: {
            return {
                ...state,
                totalCountItems: action.totalCountItems
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_COUNT_ON_PAGE_ITEMS: {
            return {
                ...state,
                countOnPageItems: action.countOnPageItems
            }
        }
        default: {
            return state;
        }

    }

}


export const followActionCreater = (userId) => ({ type: FOLLOW, id: userId})
export const unfollowActionCreater = (userId) => ({type: UNFOLLOW, id: userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users})
export const setTotalCountItemsActionCreator = (totalCountItems) => ({type: SET_TOTAL_COUNT_ITEMS, totalCountItems: totalCountItems})
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setCountOnPageItemsActionCreator = (countOnPageItems) => ({type: SET_COUNT_ON_PAGE_ITEMS,countOnPageItems: countOnPageItems })


export const getUsersThunkCreator = (currentPage, countOnPageItems) => (dispatch) => {
    dispatch(setIsFetchingActionCreator(false));
    dispatch(setCurrentPageActionCreator(currentPage));

    return usersAPI.getUsers(currentPage,countOnPageItems).then(response => {

        dispatch(setUsersActionCreator(response.users));
        dispatch(setTotalCountItemsActionCreator(response.totalCount));
        dispatch(setIsFetchingActionCreator(false));
    })
}

export default usersReducer;