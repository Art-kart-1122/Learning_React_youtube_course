import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import UserItem from "./UserItem/UserItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const listUser = props.store.users.map(
        (item) => {
           return <UserItem name={item.name} id={item.id}/>
        });

    const messages = props.store.messages.map(
        (item) => {
            return <Message info={item.info}/>
        });

    return (
        <div className={style.wrap}>
            <div className={style.listUser}>
                {listUser}
            </div>
            <div className={style.textMessages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;