import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Nav.module.scss'
import news from './img/news.png'
import msg from './img/msg.png'
import music from './img/music.png'
import users from './img/users.png'
import classNames from "classnames";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/news' className={({isActive}) => classNames({[style.active]: isActive})}>
                    <img src={news} alt=''/>
                    <p>News</p>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialog' className={({isActive}) => classNames({[style.active]: isActive})}>
                    <img src={msg} alt=''/>
                    <p>Messages</p>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={({isActive}) => classNames({[style.active]: isActive})}>
                    <img src={music} alt=''/>
                    <p>Music</p>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' className={({isActive}) => classNames({[style.active]: isActive})}>
                    <img src={users} alt=''/>
                    <p>Users</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;