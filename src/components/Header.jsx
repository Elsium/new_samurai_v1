import React from "react";
import logo from "../logo.png";
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <a href="#">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
            </a>
        </header>
    );
}

export default Header;