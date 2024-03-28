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

    let msgType = (props.from === 0) ? (style.message + ' ' + style.to) : (style.message + ' ' + style.from);

    return (
        <div className={msgType}>
            {props.text}
            <div className={style.messageTime}>{props.time}</div>
        </div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {userID: 1, name: 'Ivan Dog'},
        {userID: 2, name: 'Lisa Cat'},
        {userID: 3, name: 'Marina El'}
    ]

    let msgData = [
        {userID: 4, msgID: 7, text: 'i`m so sorry (((', time: '12:33', from: 0},
        {userID: 1, msgID: 6, text: 'because you were ignore me...', time: '12:33', from: 1},
        {userID: 4, msgID: 5, text: 'Why?', time: '12:32', from: 0},
        {userID: 1, msgID: 4, text: 'Bye', time: '12:14', from: 1},
        {userID: 1, msgID: 3, text: 'Ok', time: '12:14', from: 1},
        {userID: 4, msgID: 2, text: 'Hi', time: '12:14', from: 0},
        {userID: 1, msgID: 1, text: 'Hi', time: '12:12', from: 1},
    ]

    let dialogs = dialogsData
        .map ( item => <Dialog name={item.name} userID={item.userID}/> )

    let msg = msgData
            .map( item => <Message msgID={item.msgID} userID={item.userID} from={item.from} text={item.text} time={item.time}/> )

    return (
        <section className={style.container}>
            <div>
                <div className={style.find}>
                    find dialog
                </div>
                <div className={style.dialogsItems}>
                    {dialogs}
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
                    {msg}
                </div>
            </div>
        </section>
    );
}

export default Dialogs;