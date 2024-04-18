import React from 'react';
import logo from '../../img/logo.png';
import style from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import LoginButton from '../UI/LoginBtn/LoginBtn';
import user from '../../assets/img/user.jpg';

const Header = ({isAuth, userProfile, login, sendLogout}) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to='/news'>
                    <img src={logo} alt='logo'/>
                </NavLink>
            </div>
            <div className={style.profile + ' ' + (isAuth && style.active)}>
                {isAuth
                    ? <div>
                        <NavLink to={`/profile`}>
                            <img
                                src={userProfile ?userProfile.photos.small : user}
                                alt=''/>
                            <p>{login}</p>
                        </NavLink>
                        <div className={style.logout}>
                            <button onClick={sendLogout}>Logout</button>
                        </div>
                    </div>
                    : <LoginButton/>
                }
            </div>
        </header>
    );
}

export default Header;