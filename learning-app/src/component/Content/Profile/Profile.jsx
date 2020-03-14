import React from "react";
import style from './Profile.module.css'
import Preloader from "../../Preloader/Preloader";


const Profile = (props) => {
    return (
        <div>
            <Preloader isFetching={props.preloader.isFetching}/>
            <div className={style.wrapInfo}>
                <div className={style.ava}>
                     <img src={props.profile.fullProfile.userPic} alt=""/>
                </div>
                <div className={style.info}>
                    <div className={style.data}>{props.profile.fullProfile.fullName}</div>
                    <div className={style.city}>{props.profile.fullProfile.location}</div>
                </div>
            </div>
        </div>
    );
}


export default Profile;