import React from "react";
import style from './Header.module.css'
import logo from "../../public/images/logo192.png";

const Header = () => {
    return (
        <header className={style.wrap}>
            <img className={style.logo} src={logo} alt="logo"/>
        </header>

    );
}

export default Header;