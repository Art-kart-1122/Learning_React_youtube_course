import React from "react";
import style from './Content.module.css'
import userpic from "../../public/images/userpic.jpeg";
import Post from "./Post/Post";
import ProfileContainer from "./Profile/ProfileContainer";



const Content = (props) => {
    const clickAddPost = React.createRef();

    const addPost = () => {
        const text = clickAddPost.current.value;
        props.addPost(text)
    }

    const updateNewPostChange = () => {
        const text = clickAddPost.current.value;
        props.updateNewPostChange(text);
    }

    return (
        <div className={style.wrap}>
            <ProfileContainer/>
            <div className={style.addPost}>
                <div className={style.add}>

                        <input onChange={updateNewPostChange} value={props.profilePage.newPost} type="textarea" ref={clickAddPost}/>
                        <input type="submit" onClick={addPost}/>

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

export default Content;