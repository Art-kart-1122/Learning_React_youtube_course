import React from "react";
import style from './Post.module.css'
import userpic from '../../../public/images/logo192.png'

const Post = (props) => {
    return(
        <div className={style.wrap}>
            <div>
                <img src={userpic} className={style.img}alt=""/>
            </div>
            <div className={style.postInfo}>
                {props.info}
            </div>
            <div className={style.date}>{props.date}</div>
        </div>

    );
}

export default Post;