import React from "react";
import style from './Header.module.css'
import logo from "../../public/images/logo192.png";

const Header = (props) => {
    const logout = () => {
        props.logout();
    }
    return (
        <header className={style.wrap}>
            <img className={style.logo} src={logo} alt="logo"/>
            <div className={style.userData}>
                {props.userData.isAuth ?
                    <div>{props.userData.fullName} <button onClick={logout}>logout</button></div>
                    : 'login'}
            </div>
        </header>

    );
}

export default Header;