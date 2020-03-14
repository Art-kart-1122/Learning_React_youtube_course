import React from "react";
import style from './Header.module.css'
import logo from "../../public/images/logo192.png";

const Header = (props) => {
    return (
        <header className={style.wrap}>
            <img className={style.logo} src={logo} alt="logo"/>
            <div className={style.userData}>
                {props.userData.isAuth ? props.userData.fullName : 'login'}
            </div>
        </header>

    );
}

export default Header;