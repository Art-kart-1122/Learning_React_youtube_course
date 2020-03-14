import React from "react";
import style from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={style.wrap}>
            <ul>
                <li><NavLink to = '/profile' activeClassName = {style.active}>Profile</NavLink></li>
                <li><NavLink exact to = '/dialog' activeClassName = {style.active}>Messages</NavLink></li>
                <li><NavLink to = '/users' activeClassName = {style.active}>Users</NavLink></li>
                <li><NavLink to = '/news' activeClassName = {style.active}>News</NavLink></li>
                <li><NavLink to = '/setting' activeClassName = {style.active}>Setting</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;