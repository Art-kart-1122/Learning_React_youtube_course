import React from "react";
import style from './Preloader.module.css'
import imgFetching from '../../public/images/logo192.png'

const Preloader = (props) => {
    return (
        <div className={style.fetching}>
            {props.isFetching ? <img src={imgFetching}/> : null}
        </div>
    )
}


export default Preloader;