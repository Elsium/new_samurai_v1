import React from 'react';
import style from './NotFound.module.scss'
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <section className={style.wrapper}>
            <p className={style.four}>404</p>
            <div/>
            <p className={style.text}>Not Found<br/><NavLink to={'/news'}>Go to news</NavLink></p>
        </section>
    );
}

export default NotFound;