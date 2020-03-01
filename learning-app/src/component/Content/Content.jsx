import React from "react";
import style from './Content.module.css'
import userpic from "../../public/images/userpic.jpeg";
import Post from "./Post/Post";
import {addPostActionCreater, updatePostActionCreator} from "../../redux/store";


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
            <div className={style.wrapInfo}>
                <div className={style.ava}>
                    <img src={userpic} alt=""/>
                </div>
                <div className={style.info}>
                    <div className={style.data}>Arthur</div>
                    <div className={style.city}>Kyiv</div>
                    <div className={style.education}>Kyiv, Polytechnic Institute</div>
                </div>
            </div>
            <div className={style.addPost}>
                <div className={style.add}>

                        <input onChange={updateNewPostChange} value={props.newPost} type="textarea" ref={clickAddPost}/>
                        <input type="submit" onClick={addPost}/>

                </div>
            </div>
            <div className={style.myPosts}>
                {props.posts.map((item) => {
                    return <Post info={item.info}/>
                })}
            </div>
        </div>
    );
}

export default Content;