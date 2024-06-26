import React from 'react';
import logo from '../../assets/img/logo.png';
import style from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import LoginButton from '../UI/LoginBtn/LoginBtn';
import user from '../../assets/img/user.jpg';
import classNames from "classnames";

type PropsType = {
    isAuth: boolean,
    login: string | null,
    userPhoto: string | null,
    sendLogout: () => void
}

const Header = ({isAuth, userPhoto, login, sendLogout}: PropsType) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to='/news'>
                    <img src={logo} alt='logo'/>
                </NavLink>
            </div>
            <div className={classNames(style.profile, {[style.active]: isAuth})}>
                {isAuth
                    ? <div>
                        <NavLink to={`/profile`}>
                            <img
                                src={userPhoto || user}
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