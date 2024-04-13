import React from 'react';
import style from './Dialog.module.scss'
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
        <NavLink to={'/dialog/' + props.userID} className={({isActive}) =>
            (isActive ? style.dialog + ' ' + style.active : style.dialog)}>
            <div>{props.name}</div>
        </NavLink>
    );
}

export default Dialog;