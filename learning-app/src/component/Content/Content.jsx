import React from "react";
import style from './Content.module.css'
import userpic from "../../public/images/userpic.jpeg";
import Post from "./Post/Post";
import ProfileContainer from "./Profile/ProfileContainer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



const Content = (props) => {

    const addPost = (value) => {
        props.addPost(value.newPost);
    }



    return (
        <div className={style.wrap}>
            <ProfileContainer/>
            <div className={style.addPost}>
                <div className={style.add}>
                    <PostReduxForm onSubmit={addPost}/>
                </div>
            </div>
            <div className={style.myPosts}>
                {props.profilePage.posts.map((item) => {
                    return <Post info={item.info}/>
                })}
            </div>
        </div>
    );
}

const maxLength30 = maxLengthCreator(30);

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newPost"} placeholder={"post"} validate={[required, maxLength30]}/>
        <button>Submit</button>
    </form>
}

const PostReduxForm = reduxForm({
    form: "postForm"
})(PostForm)

export default Content;