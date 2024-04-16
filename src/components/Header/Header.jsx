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
            <div className={style.profile + ' ' + (props.isAuth && style.active)}>
                {props.isAuth
                    ? <div>
                        <NavLink to={`/profile`}>
                            <img
                                src={props.userProfile ? props.userProfile.photos.small : user}
                                alt=''/>
                            <p>{props.login}</p>
                        </NavLink>
                        <div className={style.logout}>
                            <button onClick={props.setLogout}>Logout</button>
                        </div>
                    </div>
                    : <LoginButton/>
                }
            </div>
        </header>
    );
}

export default Header;