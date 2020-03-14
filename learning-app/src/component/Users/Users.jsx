import React from "react";
import style from './Users.module.css'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom"

const Users = (props) => {
    return (
        <div>
            <Preloader isFetching={props.isFetching}/>
            <div className={style.paginationList}>
                {props.pages.map(page => {
                    return <div className={page !== props.currentPage ? style.pageItem : style.currentPageItem}
                                onClick={() => props.changePage(page)}>{page} </div>
                })}
            </div>
            {props.users.map( user => {
                return <div className={style.wrap}>
                    <NavLink to={`/profile/${user.id}`}>
                        <div className={style.img}>
                            <img
                                src={user.userPic ? user.userPic : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSep55CVS6AlUk6VdbbufFtmEn34qhvpBOW8Mggj68qbILGlcse"}
                                alt="photo"/>
                        </div>
                    </NavLink>
                    <div className={style.fullName}>
                        <div>
                            {user.fullName}
                        </div>
                    </div>
                    <div className={style.location}>
                        <div>
                            {user.location}
                        </div>
                    </div>
                    <div className={style.status}>
                        { user.status ? <button onClick={ () => {props.unfollow(user.id)} }>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button> }
                    </div>
                </div>
            })
            }
        </div>

    );
}
export default Users;