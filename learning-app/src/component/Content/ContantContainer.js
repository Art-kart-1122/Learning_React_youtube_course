import React from "react";
import {addPostActionCreater, updatePostActionCreator} from "../../redux/store";
import Content from "./Content";
import StoreContext from "../../StoreContext";


const ContentContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().profileReducer;

                    const addPost = (text) => {
                        store.dispatch(addPostActionCreater());
                    }

                    const updateNewPostChange = (text) => {
                        store.dispatch(updatePostActionCreator(text));
                    }

                    return (<Content addPost={addPost} updateNewPostChange={updateNewPostChange}
                                     newPost={state.newPost}
                                     posts={state.posts}/>)
                }
            }
        </StoreContext.Consumer>
    );
}

export default ContentContainer;