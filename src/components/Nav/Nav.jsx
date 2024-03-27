import React from "react";
import style from './Nav.module.scss'
import news from './img/news.png'
import msg from './img/msg.png'
import music from './img/music.png'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/news' className={({ isActive }) => (isActive ? style.active : '')}>
                    <img src={news} alt=""/>
                    <p>News</p>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialog' className={({ isActive }) => (isActive ? style.active : '')}>
                    <img src={msg} alt=""/>
                    <p>Messages</p>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={({ isActive }) => (isActive ? style.active : '')}>
                    <img src={music} alt=""/>
                    <p>Music</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;