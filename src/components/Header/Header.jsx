import React from "react";
import logo from "../../img/logo.png";
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <a href="#">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div>
                asd
            </div>
        </header>
    );
}

export default Header;