import React from 'react';
import style from './Dialog.module.scss'
import {NavLink} from 'react-router-dom';
import classNames from "classnames";

const Dialog = (props) => {
    return (
        <NavLink to={'/dialog/' + props.userID} className={({isActive}) =>
            (isActive ? classNames(style.dialog, style.active) : style.dialog)}>
            <div>{props.name}</div>
        </NavLink>
    );
}

export default Dialog;