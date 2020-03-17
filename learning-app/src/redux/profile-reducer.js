import * as axios from "axios";
import {setProfileActionCreator} from "./fullProfile-reducer";
import {setIsFetchingActionCreator} from "./fetching-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const initalState ={
    posts: [
        {info: "the 1 post"},
        {info: "the 2 post"}
    ],
    newPost: "Arturka React"
}

//sequence parameters (state, action )
const profileReducer = (state = initalState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const post = {
                info: action.newPost
            }
            return {
                ...state,
                posts: [...state.posts, post],
                newPost: "REACT"
            }
        }
        default: return state;
    }
}
export const addPostActionCreator = (text) => ({type: "ADD-POST", newPost: text})

export const getUsers = (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));
    axios.get(`/profile/fullProfile?id=${this.props.match.params.userId}`).then(response => {
        dispatch(setProfileActionCreator(response.data.profile));
        dispatch(setIsFetchingActionCreator(false));
    })
}


export  default profileReducer;