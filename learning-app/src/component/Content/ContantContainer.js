import React from "react";
import {addPostActionCreater, updatePostActionCreator} from "../../redux/store";
import Content from "./Content";


const ContentContainer = (props) => {

    let state = props.store.getState().profileReducer;

    const addPost = (text) => {
        props.store.dispatch(addPostActionCreater());
    }

    const updateNewPostChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text));
    }

    return (<Content addPost={addPost} updateNewPostChange={updateNewPostChange}
        newPost={state.newPost}
        posts={state.posts}/>
    );
}

export default ContentContainer;