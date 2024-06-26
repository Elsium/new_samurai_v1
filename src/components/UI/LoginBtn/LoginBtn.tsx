import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './LoginBtn.module.css'

const LoginButton = () => {
    return (
        <NavLink to={`/login`} className={style.btn}>
            Login
        </NavLink>
    )
}
export default LoginButton;