import React from "react";
import logo from "../../img/logo.png";
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to="/news">
                    <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className={style.profile}>
                <NavLink to="/profile">
                    <img src="https://yt3.googleusercontent.com/4ATipS780rafUGrk-eQxUhRVyAXcBNIONO1Pyta-0P7I0BPM89Rk1T4W1eB7PAzXS2Ms8m3cy0U=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                    <p>Diana Fox</p>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;