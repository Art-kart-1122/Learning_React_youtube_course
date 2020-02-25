import React from 'react'
import style from './UserItem.module.css'
import {NavLink} from 'react-router-dom'

const UserItem = (props) => {
    return (
        <div className={style.itemUser}>
            <NavLink to ={ `/dialog/${props.id}`} activeClassName = {style.active}>{props.name}</NavLink>

        </div>
    );
}

export default UserItem;