import React from "react";
import style from './Content.module.css'
import userpic from "../../public/images/userpic.jpeg";
import Post from "./Post/Post";


const Content = (props) => {
    const clickAddPost = React.createRef();

    const addPost = () => {
        const text = clickAddPost.current.value;
        debugger;
        props.addStore(text);
        alert(text);
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
                    <form action="">
                        <input type="textarea" ref={clickAddPost}/>
                        <input type="submit" onClick={addPost}/>
                    </form>
                </div>
            </div>
            <div className={style.myPosts}>
                <Post info="MyFirst post" date="34.89.3234"/>
                <Post/>
            </div>
        </div>
    );
}

export default Content;