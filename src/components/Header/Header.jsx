import React from 'react';
import logo from '../../img/logo.png';
import style from './Header.module.scss'
import {NavLink} from 'react-router-dom';
import LoginButton from '../UI/LoginBtn/LoginBtn';
import user from '../../assets/img/user.jpg'

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to='/news'>
                    <img src={logo} alt='logo'/>
                </NavLink>
            </div>
            <div className={style.profile}>
                {props.isAuth
                    ? <NavLink to={`/profile/${props.id}`}>
                        <img
                            src={props.userProfile ? props.userProfile.photos.small : user}
                            alt=''/>
                        <p>{props.login}</p>
                    </NavLink>
                    : <LoginButton/>
                }
            </div>
        </header>
    );
}

export default Header;