import React from "react";
import style from "./Dialogs.module.scss"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <section className={style.container}>
            <div>
                <div className={style.find}>
                    find dialog
                </div>
                <div className={style.dialogsItems}>
                    <NavLink to='/dialog/1'>
                        <div className={style.dialog}>Ivan Dog</div>
                    </NavLink>
                    <NavLink to='/dialog/2'>
                        <div className={style.dialog}>Lisa Cat</div>
                    </NavLink>
                    <NavLink to='/dialog/3'>
                        <div className={style.dialog}>Marina El</div>
                    </NavLink>
                </div>
            </div>
            <div>
                <div className={style.dialogUser}>
                    <p>ava + name</p>
                    <p>additional</p>
                </div>
                <div className={style.messagesItems}>
                    <div className={style.message + ' ' + style.to}>
                        Why?
                        <div className={style.messageTime}>12:32</div>
                    </div>
                    <div className={style.message + ' ' + style.from}>
                        Bye
                        <div className={style.messageTime}>12:14</div>
                    </div>
                    <div className={style.message + ' ' + style.from}>
                        Ok
                        <div className={style.messageTime}>12:14</div>
                    </div>
                    <div className={style.message + ' ' + style.to}>
                        Hi
                        <div className={style.messageTime}>12:14</div>
                    </div>
                    <div className={style.message + ' ' + style.from}>
                        Hi
                        <div className={style.messageTime}>12:12</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;