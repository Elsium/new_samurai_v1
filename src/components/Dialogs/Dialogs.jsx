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
        {msgID: 6, text: 'bc u were ignore me...', time: '12:33', from: 1},
        {msgID: 5, text: 'Why?', time: '12:32', from: 0},
        {msgID: 4, text: 'Bye', time: '12:14', from: 1},
        {msgID: 3, text: 'Ok', time: '12:14', from: 1},
        {msgID: 2, text: 'Hi', time: '12:14', from: 0},
        {msgID: 1, text: 'Hi', time: '12:12', from: 1},
    ]

    return (
        <section className={style.container}>
            <div>
                <div className={style.find}>
                    find dialog
                </div>
                <div className={style.dialogsItems}>
                    <Dialog name={dialogsData[0].name} userID={dialogsData[0].userID}/>
                    <Dialog name={dialogsData[1].name} userID={dialogsData[1].userID}/>
                    <Dialog name={dialogsData[2].name} userID={dialogsData[2].userID}/>
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
                    <Message from={msgData[0].from} text={msgData[0].text} time={msgData[0].time}/>
                    <Message from={msgData[1].from} text={msgData[1].text} time={msgData[1].time}/>
                    <Message from={msgData[2].from} text={msgData[2].text} time={msgData[2].time}/>
                    <Message from={msgData[3].from} text={msgData[3].text} time={msgData[3].time}/>
                    <Message from={msgData[4].from} text={msgData[4].text} time={msgData[4].time}/>
                    <Message from={msgData[5].from} text={msgData[5].text} time={msgData[5].time}/>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;