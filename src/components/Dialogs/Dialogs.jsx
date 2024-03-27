import React from "react";
import style from "./Dialogs.module.scss"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={'/dialog/' + props.userID}>
            <div className={style.dialog}>{props.name}</div>
        </NavLink>
    );
}

const Message = (props) => {

    let msgType = (props.from === '0') ? (style.message + ' ' + style.to) : (style.message + ' ' + style.from);

    return (
        <div className={msgType}>
            {props.text}
            <div className={style.messageTime}>{props.time}</div>
        </div>
    );
}

const Dialogs = () => {
    return (
        <section className={style.container}>
            <div>
                <div className={style.find}>
                    find dialog
                </div>
                <div className={style.dialogsItems}>
                    <Dialog name='Ivan Dog' userID='1'/>
                    <Dialog name='Lisa Cat' userID='2'/>
                    <Dialog name='Marina El' userID='3'/>
                </div>
            </div>
            <div>
                <div className={style.dialogUser}>
                    <div>
                        ava + name
                    </div>
                    <div>
                        - - -
                    </div>
                </div>
                <div className={style.messagesItems}>
                    <Message from='1' text='bc u were ignore me...' time='12:33'/>
                    <Message from='0' text='Why?' time='12:32'/>
                    <Message from='1' text='Bye' time='12:14'/>
                    <Message from='1' text='Ok' time='12:14'/>
                    <Message from='0' text='Hi' time='12:14'/>
                    <Message from='1' text='Hi' time='12:12'/>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;